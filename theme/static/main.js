(function () {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = 'function' == typeof require && require;
          if (!f && c) return c(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw ((a.code = 'MODULE_NOT_FOUND'), a);
        }
        var p = (n[i] = { exports: {} });
        e[i][0].call(
          p.exports,
          function (r) {
            var n = e[i][1][r];
            return o(n || r);
          },
          p,
          p.exports,
          r,
          e,
          n,
          t
        );
      }
      return n[i].exports;
    }
    for (var u = 'function' == typeof require && require, i = 0; i < t.length; i++)
      o(t[i]);
    return o;
  }
  return r;
})()(
  {
    1: [
      function (require, module, exports) {
        !(function (e, o) {
          'function' == typeof define && define.amd
            ? define([], o)
            : 'object' == typeof module && module.exports
            ? (module.exports = o())
            : (e.PDFObject = o());
        })(this, function () {
          'use strict';
          if ('undefined' == typeof window || 'undefined' == typeof navigator) return !1;
          var e,
            o,
            t,
            n,
            i,
            r,
            d,
            a,
            s,
            f,
            c = window.navigator.userAgent,
            p = void 0 !== navigator.mimeTypes['application/pdf'],
            l = void 0 !== window.Promise,
            u =
              !!(-1 !== c.indexOf('irefox')) &&
              parseInt(c.split('rv:')[1].split('.')[0], 10) > 18,
            m = /iphone|ipad|ipod/i.test(c.toLowerCase());
          return (
            (t = function (e) {
              var o;
              try {
                o = new ActiveXObject(e);
              } catch (e) {
                o = null;
              }
              return o;
            }),
            (o = function () {
              return !(!t('AcroPDF.PDF') && !t('PDF.PdfCtrl'));
            }),
            (e =
              !m &&
              (u ||
                p ||
                ((function () {
                  return !!(window.ActiveXObject || 'ActiveXObject' in window);
                })() &&
                  o()))),
            (n = function (e) {
              var o,
                t = '';
              if (e) {
                for (o in e)
                  e.hasOwnProperty(o) &&
                    (t += encodeURIComponent(o) + '=' + encodeURIComponent(e[o]) + '&');
                t && (t = (t = '#' + t).slice(0, t.length - 1));
              }
              return t;
            }),
            (i = function (e) {
              'undefined' != typeof console &&
                console.log &&
                console.log('[PDFObject] ' + e);
            }),
            (r = function (e) {
              return i(e), !1;
            }),
            (a = function (e) {
              var o = document.body;
              return (
                'string' == typeof e
                  ? (o = document.querySelector(e))
                  : 'undefined' != typeof jQuery && e instanceof jQuery && e.length
                  ? (o = e.get(0))
                  : void 0 !== e.nodeType && 1 === e.nodeType && (o = e),
                o
              );
            }),
            (s = function (e, o, t, n, i) {
              var r = n + '?file=' + encodeURIComponent(o) + t,
                d =
                  "<div style='" +
                  (m
                    ? '-webkit-overflow-scrolling: touch; overflow-y: scroll; '
                    : 'overflow: hidden; ') +
                  "position: absolute; top: 0; right: 0; bottom: 0; left: 0;'><iframe  " +
                  i +
                  " src='" +
                  r +
                  "' style='border: none; width: 100%; height: 100%;' frameborder='0'></iframe></div>";
              return (
                (e.className += ' pdfobject-container'),
                (e.style.position = 'relative'),
                (e.style.overflow = 'auto'),
                (e.innerHTML = d),
                e.getElementsByTagName('iframe')[0]
              );
            }),
            (f = function (e, o, t, n, i, r, d) {
              var a = '';
              return (
                (a =
                  o && o !== document.body
                    ? 'width: ' + i + '; height: ' + r + ';'
                    : 'position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: 100%; height: 100%;'),
                (e.className += ' pdfobject-container'),
                (e.innerHTML =
                  '<embed ' +
                  d +
                  " class='pdfobject' src='" +
                  t +
                  n +
                  "' type='application/pdf' style='overflow: auto; " +
                  a +
                  "'/>"),
                e.getElementsByTagName('embed')[0]
              );
            }),
            (d = function (o, t, i) {
              if ('string' != typeof o) return r('URL is not valid');
              t = void 0 !== t && t;
              var d,
                c =
                  (i = void 0 !== i ? i : {}).id && 'string' == typeof i.id
                    ? "id='" + i.id + "'"
                    : '',
                p = !!i.page && i.page,
                u = i.pdfOpenParams ? i.pdfOpenParams : {},
                v = void 0 === i.fallbackLink || i.fallbackLink,
                y = i.width ? i.width : '100%',
                b = i.height ? i.height : '100%',
                g = 'boolean' != typeof i.assumptionMode || i.assumptionMode,
                h = 'boolean' == typeof i.forcePDFJS && i.forcePDFJS,
                w = !!i.PDFJS_URL && i.PDFJS_URL,
                P = a(t),
                D = '';
              return P
                ? (p && (u.page = p),
                  (d = n(u)),
                  h && w
                    ? s(P, o, d, w, c)
                    : e || (g && l && !m)
                    ? f(P, t, o, d, y, b, c)
                    : w
                    ? s(P, o, d, w, c)
                    : (v &&
                        ((D =
                          'string' == typeof v
                            ? v
                            : "<p>This browser does not support inline PDFs. Please download the PDF to view it: <a href='[url]'>Download PDF</a></p>"),
                        (P.innerHTML = D.replace(/\[url\]/g, o))),
                      r('This browser does not support embedded PDFs')))
                : r('Target element cannot be determined');
            }),
            {
              embed: function (e, o, t) {
                return d(e, o, t);
              },
              pdfobjectversion: '2.1.1',
              supportsPDFs: e,
            }
          );
        });
      },
      {},
    ],
    2: [
      function (require, module, exports) {
        require('./plugins/printutils.js'),
          require('./plugins/fillin.js'),
          require('./plugins/mcq.js');
        const PDFObject = require('pdfobject');
      },
      {
        './plugins/fillin.js': 3,
        './plugins/mcq.js': 4,
        './plugins/printutils.js': 5,
        pdfobject: 1,
      },
    ],
    3: [
      function (require, module, exports) {
        (() => {
          'use strict';
          const t = {
            getLocation: function () {
              return window.fillinLocationHash
                ? new Promise((t, e) => {
                    t(window.fillinLocationHash);
                  })
                : crypto.subtle
                    .digest('SHA-1', new TextEncoder().encode(window.location))
                    .then((t) =>
                      Array.from(new Uint8Array(t))
                        .map((t) => t.toString(16).padStart(2, '0'))
                        .join('')
                    )
                    .then(
                      (t) => ((window.fillinLocationHash = t), window.fillinLocationHash)
                    );
            },
            getItem: function (t, e) {
              return this.getLocation().then((e) =>
                localStorage.getItem([e, t].join('-'))
              );
            },
            setItem: function (t, e) {
              return this.getLocation().then((n) =>
                localStorage.setItem([n, t].join('-'), e)
              );
            },
          };
          for (const e of document.querySelectorAll('.fillin'))
            t
              .getItem(e.getAttribute('id').split('-').slice(-1))
              .then((t) => (e.value = t)),
              e.addEventListener('blur', (e) => {
                const n = e.target;
                n.value && t.setItem(n.getAttribute('id').split('-').slice(-1), n.value);
              });
        })();
      },
      {},
    ],
    4: [
      function (require, module, exports) {
        (() => {
          'use strict';
          Array.from(document.querySelectorAll('.mcq.show-feedback')).forEach((e) => {
            console.log(e);
            const { id: c, ans: r, feedback: t } = e.dataset,
              o = e.querySelector('.mcq-alert');
            e.querySelector('.mcq-answer-checker').addEventListener('click', (e) => {
              o.classList.remove('mcq-correct', 'mcq-incorrect');
              const c = e.target.previousElementSibling
                  .querySelector('input:checked')
                  .parentElement.querySelector('li'),
                { isCorrect: r, feedback: t } = c.dataset;
              c &&
                (o.classList.add('True' === r ? 'mcq-correct' : 'mcq-incorrect'),
                (o.innerHTML = `<div id="mcq-alert-body">${JSON.parse(t).html}</div>`));
            });
          });
        })();
      },
      {},
    ],
    5: [
      function (require, module, exports) {
        (() => {
          'use strict';
          window.addEventListener('beforeprint', (e) => {
            for (const e of document.querySelectorAll('details'))
              e.setAttribute('open', !0);
          }),
            window.addEventListener('afterprint', (e) => {
              for (const e of document.querySelectorAll('details'))
                e.setAttribute('open', !1);
            });
        })();
      },
      {},
    ],
  },
  {},
  [2]
);
