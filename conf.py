"""Master configuration file for Sphinx.

Configuration for all subdirectories import this file and use it as a
base. For information about what any of these configuration options mean,
see:
"""

import os
import datetime
import subprocess
import sys

project = html_title = "Hackbright Academy's Explore Python"
copyright = f"{datetime.datetime.now().year} Hackbright Academy"
version = release = ""
master_doc = "index"
templates_path = ["_templates"]
sys.path.append(".")

extensions = ["sphinxlectern", "sphinxlectern.mcq", "playground"]

exclude_patterns = [
    "_build",
    "skit.rst",
    "**/rubric",
    "**/skit",
    "**/*-demo",
    "meta",
    "**/*_",
    "**/env",
    "**/venv",
]

html_theme = handouts_theme = "explore_theme"
revealjs_theme = "revealjs"
html_show_sourcelink = False
html_show_sphinx = False
html_use_index = False
html_domain_indices = False
html_scaled_image_link = False
html_copy_source = False
html_add_permalinks = ""
html_theme_path = ["."]
hb_hostname = "fellowship.hackbrightacademy.com"

imgmath_image_format = "svg"
imgmath_add_tooltips = False
imgmath_font_size = 16

graphviz_dot_args = [
    "-Gmargin=0.2",
    "-Nfontname=Helvetica",
    "-Gfontname=Helvetica",
    "-Efontname=Helvetica",
    "-Npenwidth=0.5",
]
graphviz_output_format = "svg"
