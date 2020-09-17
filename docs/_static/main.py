import sys
import traceback

from browser import bind, window


class DOMConsole:
    encoding = "utf-8"

    def __init__(self, dom_node):
        self.console_container = dom_node
        self.buffer = ""

    def __len__(self):
        return len(self.buffer)

    def write(self, data):
        self.buffer += str(data)

    def flush(self):
        self.console_container <= self.buffer
        self.buffer = ""


def run_and_output_to_dom(code_str, dom_node):
    """Execute code in code_str and output to dom_node."""

    dom_node.text = ""
    try:
        namespace = {"__name__": "__main__"}
        exec(code_str, namespace)
    except Exception:
        traceback.print_exc(file=sys.stderr)

    sys.stdout.flush()


def create_playground_runner(run_btn, ace_editor, console_container):
    """Create fn to run code in playground."""

    output = DOMConsole(console_container)
    sys.stdout, sys.stderr = output, output

    @bind(run_btn, "click")
    def run(_):
        run_and_output_to_dom(ace_editor.getValue(), console_container)

    return run


# Put stuff in browser namespace
window.sphinx_playground = {"create_playground_runner": create_playground_runner}