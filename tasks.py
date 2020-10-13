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
    with c.cd("docs"):
        c.run("python3 -m http.server")


ns = Collection(start, sphinx)