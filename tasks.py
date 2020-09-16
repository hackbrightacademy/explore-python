from invoke import task, Collection


@task
def clean(c):
    c.run("rm -rf docs")


@task(pre=[clean])
def build(c):
    c.run("sphinx-build -b handouts . docs")
    c.run("touch docs/.nojekyll")
    c.run("open docs/index.html")


ns = Collection(build)