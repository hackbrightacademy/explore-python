(function patchConsole() {
  'use strict';

  const playgroundConsole = {
    buffer: [],
    get length() {
      return this.buffer.length;
    },
    flush: function () {
      const contents = Array.from(this.buffer);
      this.buffer = [];
      return contents;
    },
  };

  // Add array methods
  for (const fn of ['push', 'pop', 'shift', 'unshift']) {
    playgroundConsole[fn] = function () {
      return Array.prototype[fn].apply(this.buffer, arguments);
    };
  }

  const ogConsole = console.log;
  console.log = (msg) => {
    playgroundConsole.push(msg);
    ogConsole.apply(console, arguments);
  };

  // We need global access to playgroundConsole
  window.playgroundConsole = playgroundConsole;
})();

(function addClickToRunButtonEvent() {
  'use strict';

  document.querySelectorAll('.playground .run').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const icon = btn.querySelector('i');

      if (icon.classList.contains('fa-play')) {
        icon.classList.remove('fa-play');
        icon.classList.add('fa-repeat');
        btn.querySelector('.btn-label').innerText = 'Run this again';
      } else {
        icon.classList.add('fa-play');
        icon.classList.remove('fa-repeat');

        const console = btn.parentElement.parentElement.querySelector('.console');

        console.classList.add('hide-children');

        setTimeout(() => {
          icon.classList.remove('fa-play');
          icon.classList.add('fa-repeat');

          console.classList.remove('hide-children');
        }, 250);
      }
    });
  });
})();

(function initAceEditors() {
  'use strict';

  if (window.ace) {
    window.editors = Array.from(document.querySelectorAll('.playground'))
      .filter((playground) => playground.querySelector('.editable') !== null)
      .map((playground) => {
        const contents =
          playground.querySelector('pre') && playground.querySelector('pre').innerText;
        const editorEl = playground.querySelector('.editable');

        const aceEditor = window.ace.edit(editorEl);
        aceEditor.setTheme('ace/theme/github');
        aceEditor.session.setMode('ace/mode/python');
        aceEditor.setValue(contents);

        // For some reason, whenever you .setValue on an ace editor, it selects the entire text, so
        // we clear the selection here.
        aceEditor.clearSelection();

        return { playground, aceEditor };
      });
  }
})();

(function initPythonRunner() {
  'use strict';

  window.languagePluginLoader.then(() => {
    const runAndDisplayCode = (codeStr, playground) => {
      // Get rid of any errors or shit that might have gotten printed out beforehand
      playgroundConsole.flush();

      try {
        pyodide.runPython(codeStr);
      } catch {}

      const consoleEl = playground.querySelector('.console');
      while (consoleEl.firstChild) {
        consoleEl.removeChild(consoleEl.firstChild);
      }
      playgroundConsole
        .flush()
        .map((msg) => msg.trimEnd())
        .filter((msg) => !msg.includes('Python exception') && msg.length > 0)
        .map((msg, i, arr) => {
          const el = document.createElement('code');
          el.innerText = `${msg}\n`;
          if (i === arr.length - 1 && msg.includes('Error')) {
            el.setAttribute('class', 'error');
          }
          return el;
        })
        .forEach((codeEl) => {
          consoleEl.appendChild(codeEl);
        });
      consoleEl.scroll({
        top: consoleEl.scrollHeight - consoleEl.clientHeight,
        behavior: 'smooth',
      });
    };
    if (window.editors && window.playgroundConsole && window.pyodide) {
      window.editors.forEach(({ playground, aceEditor }) => {
        if (playground.classList.contains('show_output')) {
          runAndDisplayCode(aceEditor.getValue(), playground);
        }
        playground.querySelector('.run').addEventListener('click', (e) => {
          runAndDisplayCode(aceEditor.getValue(), playground);
        });
      });
    }
  });
})();
