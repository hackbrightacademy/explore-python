from invoke import task, Collection


@task
def clean(c):
    """Clean up build directories."""

    c.run("rm -rf docs")


@task(pre=[clean])
def sphinx(c):
    """Build using Sphinx for GitHub Pages."""

    c.run("sphinx-build -b handouts . docs")
    c.run("touch docs/.nojekyll")  # tell GitHub Pages not to use Jekyll


@task(pre=[clean, sphinx])
def start(c):
    c.run("sphinx-autobuild -b handouts . _build")


ns = Collection(start, sphinx)