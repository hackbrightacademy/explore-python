=======================
Variables & Expressions
=======================

Intro
=====

At this point, you should feel pretty comfortable with making strings and
integers in Python. If you don't feel like you've mastered both of these
things, please revisit :doc:`basics-1` to be sure you can move forward successfully.

Learning to Love Errors
-----------------------

An important part of learning to code is learning to feel okay when something
goes wrong. As you progress in this module, focus on the new vocabulary and
syntax. Practice and explore as much as possible. If/when you see an error
message, read it. It's completely normal to write code that results in an error.
Give yourself time and brain energy to not simply fix the error, but to also
fully understand what the problem was.

Topics We'll Cover
------------------

- Expressions

- Variables

Variables
=========

A major benefit of all programming languages is that they give us the ability to refer to values
by name. In computer science, these names are :term:`variables`. In Python, you can create a
variable and assign it a value using the :term:`assignment operator`, `=`.

Let's say we want to create a variable to store the string, ``"Hello, world!"``. Here's how to
create a variable and assign it to ``"Hello, world!"`` in Python:

#. Think of a good name for the variable. Good variable names are mnemonic, descriptive, and short.
   Since ``"Hello, world!"`` is a greeting, let's use `greeting` as our variable name.

#. Type the variable name:

   .. code-block:: python

     greeting

#. Then, add the assignment operator. In Python, we always surround operators with spaces, so type a
   space (`` ``), then the assignment operator (``=``), then add another space (`` ``):

   .. code-block:: python

     greeting =

#. Finally, type the value you want to assign to the variable:

   .. code-block:: python

     greeting = "Hello, world!"

Now we can use the variable name `greeting` whenever we want to use its value in our program. For
example, we can use it with the `print` function. Try this for yourself by running the program
in the code playground below!

.. playground::

  greeting = "Hello, world!"
  print(greeting)

Expressions
===========

An expression is any part of a statement that is evaluated by the computer and results in a value.
You've already been using expressions throughout this book! Here's an example of an expression:

.. code-block:: python

  100

There's not a lot of code in the example above but it *is* a complete expression that gets evaluated
by the computer and results in the integer, ``100``.

You can create more complex expressions by combining smaller expressions with :term:`operators` to
make larger, complicated expressions. For example, we can use the :term:`addition operator` (``+``)
to create an expression that will result in the sum of two numbers:

.. code-block:: python

  100 + 5

In this section, we'll introduce you to even *more* operators starting with some operators you might
already be familiar with --- arithmetic operators.

Expressions with Arithmetic Operators
-------------------------------------

Here's a handy reference table of Python's basic arithmetic operators:

+------------------------+-----------+
| Operator               | Example   |
+========================+===========+
| Addition (``+``)       | ``1 + 1`` |
+------------------------+-----------+
| Subtraction (``-``)    | ``5 - 2`` |
+------------------------+-----------+
| Multiplication (``*``) | ``0 * 4`` |
+------------------------+-----------+
| Division (``/``)       | ``9 / 3`` |
+------------------------+-----------+

.. playground::

  print(1 + 1)
  print(5 - 2)
  print(0 * 4)
  print(9 / 3)

You can use an expression in place of a literal value. For example, we can write a variable
assignment expression where the left operand (A.K.A. the part of the expression that's *after* the
``=`` operator) is *another* expression:

.. code-block:: python

  total = 1 + 2

There are two, nested expressions in the code above! Python will evaluate the innermost expression
first. So, when we run the code above, Python will first evaluate ``1 + 2``:

.. parsed-literal::

  total = :red:`1 + 2`

...which results in ``3``:

.. parsed-literal::

  total = :green:`3`

Then, it'll evaluate the outermost expression:

.. parsed-literal::

  :red:`total = 3`

...which will create a variable named `total` whose value is ``3``!

.. playground::

  total = 1 + 2
  print(total)

Expressions with Comparison Operators
-------------------------------------

Comparsion operators are used to build expressions that compare two values. Expressions that use
comparison operators will always evaluate to a boolean value, either `True` or `False`.

For example, we can use the :term:`equality comparison operators` (``==`` and ``!=``) to evaluate
if two values are equal (``==``) or not equal (``!=``) to each other:

.. playground::

  print("hi" == "hi")
  print(2 == 200)

  print("hi" != "hi")
  print(2 != 200)

:term:`Order comparison operators` (``<``, ``>``, ``<=``, and ``>=``) are used to evaluate if two
numbers are less than (``<``), greater than (``>``), less than or equal to (``<=``), or greater
than or equal to (``>=``) each other.

The way :term:`order comparison operators` work is different and depends on the types of objects
you're comparing. Comparing integers and floats works the way you'd expect --- they're compared in
sequential order, so larger numbers are greater than smaller numbers.

.. playground::

  print(0 < 100)
  print(-500 > 2500)

  print(1 <= 1)
  print(9.35 >= 75)

Strings are compared in order according to their Unicode code point. This means that
strings are (more or less) compared in alphabetical order, so strings that start with ``"A"`` are
less than strings that start with ``"Z"`` and uppercased letters (ex.: ``"K"``) are always less
than lowercased letters (ex.: ``"k"``).

.. playground::

  print("Apple" < "egypt")
  print("abcabcabc" > "zebra")

  print("abc" <= "abc")
  print("xyz" >= "XYZ")

Here's a reference table of Python's comparison operators:

+-----------------------------------+-------------------+
| Operator                          | Example           |
+===================================+===================+
| Equality (``==``)                 | ``150 == 150``    |
+-----------------------------------+-------------------+
| Inequality (``!=``)               | ``23 != 6``       |
+-----------------------------------+-------------------+
| Less than (``<``)                 | ``"a" < "b"``     |
+-----------------------------------+-------------------+
| Greater than (``>``)              | ``"bow" > "Zoo"`` |
+-----------------------------------+-------------------+
| Less than or equal to (``<=``)    | ``-5 <= 0``       |
+-----------------------------------+-------------------+
| Greater than or equal to (``>=``) | ``60 >= 500``     |
+-----------------------------------+-------------------+

Putting it Together
-------------------

Let's try using Boolean expressions and variables together. Type the following
into the repl console::

  >>> my_name = "Balloonicorn"
  >>> your_name = "Engineer"
  >>> my_name == your_name
  False
  >>> my_name != your_name
  True

Calling Functions and Setting Variables
---------------------------------------

Next, we'll cover how to capture the return value of a function into
a variable. Remember the **len** function from Module 1? Here's a refresher::

  >>> len("Balloonicorn")
  12

We can capture the integer **12** into a variable with the following code::

  >>> name_length = len("Balloonicorn")
  >>> print name_length
  12

Check out the data type for our new variable::

  >>> type(name_length)
  <type 'int'>

It's an integer! Cool. We could also set a variable for the **"Balloonicorn"**
string. So, starting from the top::

  >>> name = "Balloonicorn"
  >>> name_length = len(name)
  >>> print name_length
  12

Try this out for yourself in the repl console.

One More Function
-----------------

So far, you know about several built-in functions and keywords in Python. They
are:

- ``print`` (keyword)
- ``type`` (function)
- ``len`` (function)


Let's add one more function to that list.

A function to capture user input
--------------------------------

**raw_input** is a built-in function that allows you to prompt a user of your
program for some input. In our example here, *you* are going to be the user of
your program. Of course, you're also the author of your program. Welcome to the
world of software engineering :)

Open up a Python `repl console
<https://repl.it/languages/python>`_ and type this line of code:

.. code-block:: python

  my_message = raw_input("Write a message to yourself: ")

When you press enter, you'll see this::

  >>> my_message = raw_input("Write a message to yourself: ")
  Write a message to yourself:

So, type a quick message to yourself, and press enter

  >>> my_message = raw_input("Write a message to yourself: ")
  Write a message to yourself: good job!

Then, print the variable called **my_message**::

  >>> print my_message
  good job!

The value of the **my_message** variable is the thing you typed in! Pretty cool.
Notably, the string that you passed into the **raw_input** function
(``Write a messahe to yourself:``) is what gets printed right before the user
starts typing. You can think of it like a prompt for the user's input.


Practice Section
================

Directions
----------

Login to your Repl.it account and start a new repl `here
<https://repl.it/languages/python>`_.

Complete the practice problems below in this repl console. If you'd like to
work through the practice in several sittings and save your work in between,
make sure you are logged in to Repl.it consistently saving your work.

1) Make a variable with the name **a** and set the value to **"Hello, world."**
2) Make a variable with the name **message** and set the value to
   **"Howdy, folks!"**
3) Make a variable with the name **my_num** and set the value to **406**.
4) Make a variable with the name **i** and set the value to **40**.
5) Print the variable called **a**.
6) Print the variable called **message**.
7) Print the variable called **my_num**.
8) Print the variable called **i**.
9) Write an expression that evaluates the equality of the integer **9** to the
   integer **10**.
10) Write an expression that evaluates the equality of the string **Hello**
    to string **"hello"**.
11) Write an expression that evaluates to the sum of the variable **i** and the
    variable **my_num**.
12) Write an expression that evaluates to the difference of the variable
    **my_num** and the variable **i**.
13) Let's say you have four friends: Larry, Gina, Erika, and Buster. Make 4
    variables-- one for each friend. The name of each variable is up to you,
    but the value should be a string which is the name of each friend. Once
    you make the 4 variables, print them all on the same line, separated by
    spaces.
14) Capture the return value of the following code to a variable called
    **length_of_balloonicorn**.

    .. code-block:: python

      len("balloonicorn")

15) Capture the return value of the following code to a variable called
    **are_names_equal**.

    .. code-block:: python

      "Balloonicorn" == "baLLOONicorn"


Debugging
=========

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


1) What's wrong with this code?
::

  >>> "Hello" = a

.. topic:: **Variable name must be on the left side of equals sign**
  :class: hover-reveal

  In order to successfully set a variable in Python, the name of the variable
  must appear on the left-hand side of the equals sign. The thing on the right
  is the actual **value** of the variable (a string, integer, Boolean, etc.)

  The error message is a little odd for this one, but Python is essentially
  that you're trying to use a "literal" string as a variable name, which is
  not allowed. Thus, this code results in a **SyntaxError**-- Python can parse
  the text in a meaningful way.

  ::

    >>> "Hello" = a
      File "<stdin>", line 1
    SyntaxError: can't assign to literal

2) What's wrong with this code?
::

  >>> 887 = my_num

.. topic:: **Variable name must be on the left side of equals sign**
  :class: hover-reveal

  The problem with this code is the same as the previous problem. Although
  the variable we're trying to create is **my_num**, and the value is an
  integer rather than a string, the same rules apply. So, here's the error
  message::

    >>> 887 = my_num
      File "<stdin>", line 1
    SyntaxError: can't assign to literal

  The correct way to create this variable is as follows::

    >>> my_num = 887


External Resources
==================

Videos
------

`Hackbright Video on Python Variables and Data Types <https://player.vimeo.com/video/141490569>`_

Articles/Documentation
----------------------

- Official Python documentation for `data types <https://docs.python.org/2/library/datatypes.html>`_

- `Programiz resource <https://www.programiz.com/python-programming/variables-datatypes>`_ on Python datatypes


Final Assignment
================

Create a `new repl session
<https://repl.it/languages/python>`_ and name it **module_2_printing.py**.

Create 4 variables called **family_member1**, **family_member2**,
**family_member3**, and **family_member4**. Set their values equal to strings
containing the names of 4 of your family members. Then, call the **len**
function on each of your family member variables, capturing the return value
of the call to **len** in a new variable each time.

At this point, you should have created **8** variables.

Next, print each of the names, followed by their lengths, using the variables
to write your print statements. Here is a sample output for the repl that you
will write.

Lastly, prompt the user of the program for a new family member to add. After they
enter the person they want to add, print a message congratulating them on
adding a new family member, and then print the length of the new family member
string as well (similar to the others).

The output for your code should look something like this:


.. parsed-literal::
  :class: console

  Dillon
  6
  Angela
  6
  Kelsey
  6
  Luke
  4
  Enter the name of a new family member:

And then the person running the file can type something...


.. parsed-literal::
  :class: console

  Dillon
  6
  Angela
  6
  Kelsey
  6
  Luke
  4
  Enter the name of a new family member: Saul

And when they press enter, you see the rest of the output.


.. parsed-literal::
  :class: console

  Dillon
  6
  Angela
  6
  Kelsey
  6
  Luke
  4
  Enter the name of a new family member: Saul
  Great, so you added Saul
  4
