"""Playground directive.

This will render a code playground where readers can edit and run Python in the browser.

Example:

    .. playground::

      print("hi")
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
    """playground node.

    Holds the text editor and console output area.
    """


def visit_playground(self, node: playground):
    # FIXME:
    # I'm pretty sure the proper way to do this is to call some sort of docutils method
    # but eh... on well.
    playground_classes = ["playground"]
    icon_classes = ["fa"]
    runtext = "Click to run"
    if "show_output" in node:
        playground_classes += ["show_output"]
        icon_classes += ["fa-repeat"]
        runtext = "Run this again"
    else:
        icon_classes += ["fa-play"]

    self.body.append(f"<div class=\"{' '.join(playground_classes)}\">")
    self.body.append('<div class="buttons">')
    self.body.append('<button class="run">')
    self.body.append('<span class="btn-icon">')
    self.body.append(f"<i class=\"{' '.join(icon_classes)}\"></i></span>")
    self.body.append('<span class="btn-label">')
    self.body.append(runtext)
    self.body.append("</span>")
    self.body.append("</button>")
    self.body.append("</div>")

    # Contents of the code editor starts after this open div
    self.body.append('<div class="editable">')


def depart_playground(self, node: playground):
    self.body.append("</div>")
    self.body.append('<pre class="console"></pre>')
    self.body.append("</div>")


class Playground(Directive):
    """Editable code playground."""

    has_content = True
    option_spec = {"show_output": directives.flag, "editable": directives.flag}

    def run(self) -> List[playground]:
        code = "\n".join(self.content)
        node = playground(code, **self.options)
        self.add_name(node)

        lit_node = literal_block(code, code)
        lit_node["language"] = "python"
        node += lit_node

        return [node]


# FIXME: we should move terms_to_know directive to sphinx-lectern instead of
# leaving it here
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

    # FIXME: this should all be moved to sphinx-lectern
    app.add_directive("termstoknow", TermsToKnow)
    app.add_node(terms_to_know, handouts=(visit_terms_to_know, depart_terms_to_know))
