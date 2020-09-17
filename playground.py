"""Playground directive.

    .. playground::

      print("hi")

Will render:
    <div class="playground">

"""

from typing import List
from sphinx.application import Sphinx

from docutils.parsers.rst import Directive, directives
from docutils.nodes import General, Element, Admonition, literal_block
from sphinxlectern.handouts.admonitions import BaseAdmonition

import traceback
import sys
import html
from io import StringIO
from unittest.mock import patch


class playground(General, Element):
    pass


def visit_playground(self, node: playground):
    playground_classes = ["playground"]
    if "show_output" in node:
        playground_classes += ["show_output"]

    self.body.append(f"<div class=\"{' '.join(playground_classes)}\">")
    self.body.append('<div class="buttons">')
    self.body.append('<button class="run">')

    if "show_output" in node:
        self.body.append('<i class="fa fa-repeat"></i>')
        self.body.append('<span class="btn-label">Run this again</span>')
    else:
        self.body.append('<i class="fa fa-play"></i>')
        self.body.append('<span class="btn-label">Click to run</span>')

    self.body.append("</button>")
    self.body.append("</div>")
    self.body.append('<div class="editable">')


def depart_playground(self, node: playground):
    self.body.append("</div>")

    if "stdout" in node:
        self.body.append('<pre class="console">')
        self.body.append(html.escape(node["stdout"], quote=True))
        self.body.append("</pre>")
    else:
        self.body.append('<pre class="console"></pre>')

    self.body.append("</div>")


class Playground(Directive):
    """Editable code playground."""

    has_content = True
    option_spec = {"show_output": directives.flag, "editable": directives.flag}

    def exec_code(self, code_str):
        try:
            namespace = {"__name__": "__main__"}
            exec(code_str, namespace)
        except Exception:
            traceback.print_exc(file=sys.stdout)

    def run(self) -> List[playground]:
        code = "\n".join(self.content)
        node = playground(code, **self.options)
        self.add_name(node)

        if "show_output" in self.options:
            with patch("sys.stdout", new_callable=StringIO) as string_stdout:
                self.exec_code(code)
                node["stdout"] = string_stdout.getvalue()

        lit_node = literal_block(code, code)
        lit_node["language"] = "python"
        node += lit_node

        return [node]


class terms_to_know(Admonition, Element):
    pass


def visit_terms_to_know(self, node: terms_to_know):
    self.visit_admonition(node, "terms_to_know")


def depart_terms_to_know(self, node: terms_to_know):
    self.depart_admonition(node)


class TermsToKnow(BaseAdmonition):
    node_class = terms_to_know
    required_arguments = 0

    def get_title(self) -> str:
        return ""


def setup(app: Sphinx):
    app.add_node(playground, handouts=(visit_playground, depart_playground))
    app.add_directive("playground", Playground)
    app.add_directive("termstoknow", TermsToKnow)
    app.add_node(terms_to_know, handouts=(visit_terms_to_know, depart_terms_to_know))
