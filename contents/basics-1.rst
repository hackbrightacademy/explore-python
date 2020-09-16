=============
Python Basics
=============

Intro
=====

In this module, you'll learn about Python basics such as variables, types,
printing, expressions, and debugging. These are some of the
most fundamental principles of programming in Python. Some of the things you'll
learn here are common to many languages, whereas some are specific to Python.
Regardless, the things you'll learn in this module are going to enable you to
craft more complex, multistep programs later on.

Go Slow To Go Fast
------------------

Take time to allow yourself to master these basic concepts, as they will show
up again and again as you dive into more intermediate and advanced Python
concepts later.

Being a new programmer is hard --- there's **so** much to learn, **so** many
different languages and countless resources to get started.  As a new coder,
it can be difficult to stay focused. Sometimes, all it takes is an
unfamiliar error message to prevent a new coder from sticking with it. Be
persistent!

Topics We'll Cover
------------------

- Introduction to syntax

- Data types

- Printing

- Calling built-in functions

Python Syntax
=============

Software engineers use `programming languages` to communicate with computers in
order to tell them how to do something. Programming languages are much like
other types of languages (including natural languages like English!) --- they're
made of specific words (in programming, we call these`tokens`) arranged in a
specific way.

Python is a popular language because, compared to other programming languages,
its syntax is especially succinct and readable. For example, here's how you'd
output a message in Java:

.. code-block:: java

  System.out.println("Hello, world!");

...and here's how you'd output a message in Python:

.. code-block:: python

  print("Hello, world!")

Try it out for yourself! The box below is a code `playground`; it can execute Python code and
display program output. You can even edit the code inside! Click the red button in the
playground below to run the code inside. Program output will appear in a box below the code
editor.

.. playground::

  print("Hello, world!")
  print("Isn't Python fun?")

.. note:: Experimenting with code is the best way to learn

  Whenever you see a code playground in this book, *do* play around with it.
  Add code, delete code, replace code, etc... then click the red button to run your code
  and see what happens!

You just executed your first Python program! Let's look at ``print("Hello, world!")`` in more
detail.

Objects and Classes
===================

First let's talk about what ``"Hello, world!"`` is. To do that, we'll need to define what
objects and classes are.

A `value` or `object` is a piece of data that a program can manipulate. So far, you've seen the values
``"Hello, world!"`` and ``"Isn't Python fun?"``. Both values (we can also say "both objects") are
members of the class, `str` (a shortened version of the word *string*, as in, "a string of characters").

`Classes` are like categories. In Python, an object's class is analogous with its *type*
(ex.: ``"Hello, world!"`` is a *type* of string), so you can find out what class a value
belongs to using `type`.

.. code-block:: python

  type("Hello, world!")

The code above doesn't print values to the screen though, which is why we'll use it inside
`print`:

.. playground::
  :show_output:

  print(type("Hello, world!"))

.. termstoknow::

  object, value
    An object or value is a piece of data that a program can manipulate.

  class
    Objects are categorized by class, kind of like how animals are categorized by species. A value's
    class is analogous with its type. For example, ``"Hello, world!"`` is a type of string and a
    member of the class, `str`.

Values that belong to different classes look different (they also behave in different ways but we'll
talk more on that later) --- in other words, they use different syntax. As we talk about the basic
Python classes, pay attention to how their syntax differs. After all, it's how you (and Python!)
will be able to tell the difference between one class and another.

Strings, Integers, and Floats
-----------------------------

Strings are surrounded by quotation marks; Python can identify strings enclosed with double-quotes
(``"``) *and* single-quotes (``'``). For example, try replacing the double-quotes below with
single-quotes --- in either case, Python will produce the same output.

.. playground::
  :show_output:

  print("Delicious knishes")

Another class is `int`, short for *integer*. For example, the value ``100`` is an integer. `print`
also works with integers:

.. playground::
  :show_output:

  print(100)

Printing the type of ``100`` gives us the class, `int`:

.. playground::
  :show_output:

  print(type(100))

There are also numbers with a decimal point that are stored in a format called
*floating-point*; they belong to the `float` class:

.. playground::
  :show_output:

  print(type(4.1))

.. termstoknow::

  string (`str`)
    A string of letters. In Python, strings can be surrounded by double-quotes (``"``) or
    single-quotes (``'``) and belong to the class `str`

  integer (`int`)
    A whole number that can be *signed* (``-1``) or *unsigned* (``1``). They belong to the
    class `int`.

  float (`float`)
    A number with a decimal point that belongs to class `float`. These can also be signed (``-3.02``) or unsigned
    (``3.02``).

Pop quiz! What's the class of values ``"17"`` and ``"4.1"``? They look like
numbers but are surrounded by quotation marks like strings. Run the code below to find out!

.. playground::

  print(type("17"))
  print(type("4.1"))

**They're both strings.**

This is a good place to point out that Python is very particular about syntax. Something enclosed in
quotation marks will *always* be a string.

Here's another example of why precision matters when it comes to Python syntax: we
typically use commas to break uplarge numbers, like ``529,600``. Let's see what happens
when we try to print it out:

.. playground::
  :show_output:

  print(529,600)

Gah! Frustratingly, the code above is *syntactically correct* --- in other words, Python
is able to run the code without complaining --- but it's probably not what we wanted.
What's going on here? We didn't mention this before, but you can output more than one value
with `print`. For example, here's how you'd print three strings, ``"one"``,
``"two"``, and ``"three"``:

.. code-block:: python

  print("one", "two", "three")

Python interprets the comma in ``529,600`` just like in interprets the commas in the code
above. To Python, ``print(529,600)`` looks a lot like printing two numbers, ``529`` and
``600``. Let's look at both examples again:

.. playground::
  :show_output:

  print("one", "two", "three")
  print(529, 600)

The moral of the story: remember not to put commas in your integers!

.. didyouknow::

  You can't use commas in integers and floats, but as of Python version 3.6, you can use
  underscores to break up large numbers.

  .. code-block:: python

    print(529_600)

Booleans and NoneType
---------------------

We'll cover two more classes in this module --- `bool` and `NoneType`.

The `bool` class, or *boolean* class, is an exclusive club with just two members --- the values
``True`` and ``False``.

Like with all other values, you can print them out with `print`.

.. playground::
  :show_output:

  print(True)
  print(False)

Pay very close attention to the fact that neither of these values are enclosed in
quotations marks (for example, ``"True"`` is a string and not a boolean). Unfortuantely,
when you print out ``True`` and ``"True"``, their outputs look identical. But don't be
fooled! They're still members of different classes.

.. playground::
  :show_output:

  print(True)
  print(type(True))
  print("True")
  print(type("True"))

Also, both values *must* start with a capital letter --- otherwise, Python won't recognize them and
give an error. Here's what happens when we try to print ``True`` but forget to capitalize
the ``T``:

.. playground::
  :show_output:

  print(true)

The `NoneType` class is even *more* exclusive --- it's comprised of single member, the value
``None``. ``None`` is how Python represents nothingness, is similar to the mathematical idea of
*null*.

If you try to print ``None``, nothing will appear!

.. playground::
  :show_output:

  print(None)

It does have a class though, so we *do* see something when we print the type of ``None``:

.. playground::
  :show_output:

  print(type(None))

.. termstoknow::

  boolean (`bool`)
    A class comprised of two possible values --- ``True`` and ``False``. This probably doesn't need
    to be mentioned, but they represent *true* and *false*.

  NoneType
    The only member of this class is ``None``.

Functions
=========

`print` and `type` are the names of built-in `functions`. A `function` is something that
can take *in* values, *do something* with those values, and then *output* a value. Built-in
functions are ones that Python has already created for you (you can also define your *own* functions
but it's an intermediate idea that we won't go into in this book).

You use a function by adding parentheses after the function's name. If a function requires inputs,
you add them inside the parentheses. A function's inputs are also known as its `arguments`. For
example, you can use `print` with zero arguments:

.. code-block:: python

  print()

You can also use `print` with one argument.

.. code-block:: python

  print("Hello, world!")

...or *many* arguments!

.. code-block:: python

  print(100, "that's a lot", True)

We use the term `call` to refer to the act of using a function. For example, when you call the `print`
function with more than one argument, it'll output the values of those arguments and separate each
with a space.

.. playground::
  :show_output:

  print(100, "that's a lot", True)

When you call `print` with no arguments, it might look like nothing happens, but it actually outputs
an empty line. Check it out:

.. playground::
  :show_output:

  print()
  print()
  print()
  print("WHOA!")

While `print` can take in zero or more arguments, functions like `type` only work with a certain
number of arguments. Here's what happens when we call `type` with no arguments:

.. playground::
  :show_output:

  type()

Python will output an error message to tell us that `type` requires *exactly* 1 or 3 arguments (we
won't go into how to use `type` with 3 arguments... it's complicated...).

Another Function
----------------

Some functions, like `print` and `type`, are compatible with all types of values but there are other
functions that only work with certain types of values. An example of this is the `len` function.

The `len` function will give you the length of its argument. So, it makes sense that `len` requires
one argument and that it only understands arguments belonging to certain classes. Think about it ---
members of the `int` class are numbers and numbers don't have lengths.

.. playground::
  :show_output:

  len(50)

If a function isn't compatible with one of its arguments, Python will give us a `TypeError` --- the
error message explains that the object we gave as an argument, ``50``, belongs to the `int` type,
which isn't compatible with `len`.

Strings have lengths though, so `len` totally works with a string:

.. code-block:: python

  len("Hi!")

Again, we won't see the result of calling `len` unless we print it out though:

.. playground::
  :show_output:

  print(len(50))

Practice Section
================

Directions
----------

#. Print each of the following strings:

   - ``"hello world"``

   - ``'hi there world'``

   - ``"Greetings, world!"``

   - ``"World?? Is it really you? Hi!!!!!!"``

#. Print each of the following integers:

   - ``5000``

   - ``5``

   - ``7``

#. Print a sentence that says what you had for breakfast this morning.

#. Print a sentence that about something that you plan to do tomorrow.

#. Call the `type` function, passing the string ``"Howdy, partner"`` as an
   argument.

#. Call the `type` function, passing the boolean ``True`` as an argument.

#. Call the `type` function, passing the boolean ``False`` as an argument.

#. Call the `type` function, passing the integer ``88`` as an argument.

#. Call the `type` function, passing the string ``"775"`` as an argument.

   - Notice anything interesting about the result?

   .. togglereveal::

     Even if a string *contains* or is solely composed of a numeric value,
     it's still a string!

#. Print the each of the following strings on the same line, separated by
   spaces: ``"apple"``, ``"berry"``, and ``'cherry'``.

#. Print the string ``"Hi, I have"``, the integer ``8``, and the string
   ``"cats"``, separated by spaces.

#. Use the `len` function in Python to print the length of the following
   string: ``"supercalifragilisticexpealidocious"``.

Debugging Section
=================

Directions
----------

As a programmer, debugging is a fact of life. There are times you write code
that Python doesn't understand. In these cases, Python will display an error
message. The more familiar you are with Python's many error messages, the faster
you'll be at debugging code. But there's good news: Python's error messages are
incredibly descriptive and helpful in figuring out what the problem is.

In the following problems, you'll find code that is invalid or not allowed in
some way. Read the code, and see if you can predict what is wrong. When you're
ready, hover over the solution area to reveal the error message that Python
shows, along with an explanation of what is going wrong.

#. What's wrong with this code?

   .. code-block:: python

     >>> len(True)

   .. togglereveal::

     While it's completely valid to use a string as an argument for the `len`
     function:

     .. code-block:: python

       >>> len("Hello")
       5

     it's not valid to pass a Boolean type into the `len` function:

     .. code-block:: python

       >>> len(True)
       Traceback (most recent call last):
         File "<stdin>", line 1, in <module>
       TypeError: object of type 'bool' has no len()

     Since there's no obvious answer for Python to give you for the length of
     a boolean, it gives you a helpful message essentially stating that the
     boolean thing you passed to `len` as no length associated with it.

     It's important to note that even though there are 4 characters that make
     up the value ``True``, `len` doesn't return the integer ``4`` here. The
     boolean type represents ``True`` in Python-- it's not simply the string
     containing the letters ``"True"``. It's a magical, built-in value that has
     meaning *without* quotation marks around it.

     So, without further ado, here's the error message:

     This is one example of a `TypeError` --- an error that's raised as a result
     of data type you're trying to manipulate in an incorrect way (in this case,
     you're trying to treat a boolean like a string).

     Next time you see a `TypeError`, make sure you know what kind of thing
     you're manipulating in your code. Are you trying to treat an integer like
     a string? A string like a integer? A boolean like a string? The **type**
     function is always there to help if you're not sure what type of thing
     you're working with.

#. What's wrong with this code?

   .. code-block:: python

     >>> print(hello world)

   .. togglereveal::

     In order to print a string, there must be quotes around the string.
     When you don't wrap words in quotation marks, Python tries to evaluate the
     word like it's a variable, keyword, or a built-in function. In this case,
     Python is trying to figure out what ``hello`` and ``world`` mean.

     Here is the error message:

     .. code-block:: python

       >>> print(hello world)
       Traceback (most recent call last):
         File "<stdin>", line 1, in <module>
       NameError: name 'hello' is not defined

#. What's wrong with this code?

   .. code-block:: python

     >>> print("hi" print "whats up")

   .. togglereveal::

     You can't put two print statements on the same line. In Python, whitespace (or
     the space around the actual words that make up your code) is *meaningful*.
     Python needs only the right amount of code to be on each line. Similarly,
     indentation is also meaningful in Python. You'll see this in action in the
     next module. For now, note that too much code on the same line results
     in a **SyntaxError**, since the syntax that Python is trying to parse is
     not able to be understood.