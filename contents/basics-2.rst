==================
More Python Basics
==================

Welcome
=======

At this point, you should feel pretty comfortable with making strings and
integers in Python. You should also feel comfortable with writing and running
Python, and viewing the output using Repl.it. If you don't feel like you've
mastered both of these things, please revisit Module 1 to be sure you can move
forward successfully.

Learning to Love Errors
-----------------------

An important part of learning to code is learning to feel okay when something
goes wrong. As you progress in this module, focus on the new vocabulary and
syntax. Practice and explore as much as possible. If/when you see an error
message, read it. It's completely normal to write code that results in an error.
Give yourself time and brain energy to not simply fix the error, but to also
fully understand what the problem was.

Lesson
======

Topics
------

- Variables

- Expressions

Variables
---------

In Python, it is often that you will assign nicknames to values. This way, you
can refer to values later and use them in other parts of your code. The act
of assigning a nickname to a value is called **variable assignment**.

Here is an example::

  >>> hackbright = "balloonicorn, magic, and python"

**In the above code, what part is the variable?**

.. topic:: ``hackbright``
  :class: hover-reveal

  We can think of this like a nickname for some actual value that exists (a
  string, in this case).

**In the above code, which part is the value that the variable represents?**

.. topic:: ``"balloonicorn, magic, and python"``
  :class: hover-reveal

  This string is the value that the variable ``hackbright`` represents.


The line of Python assigns that string to the variable **hackbright**. Now, if
I want to print my string, I can do the following::

  >>> print hackbright
  balloonicorn, magic, and python

.. note:: No quotes around variables.

  It's important to note that variables do **not** have quotation marks around
  them. Once a variable such as **hackbright** is assigned a value, Python can
  understand what it is when you use it.

If you ask a variable for it's datatype using the **type** function, you'll see
that a variable's type is that of it's actual value. Read the following code
block::

  >>> sanfran = "rainy"
  >>> temp = 62
  >>> print type(sanfran)
  <type 'str'>
  >>> print type(temp)
  <type 'int'>

Importantly, the **temp** variable is an integer, whereas the **sanfran** variable
is a string.

Expressions
-----------

An expression is any part of a statement that can results in a value. We've
already been using expressions, in fact. In the following code, the string
``"rainy"`` is an expression-- it results in a value of the type string::

  >>> print "rainy"

However, expressions can be a bit more complex. We'll talk about 2 kinds of
expressions here: boolean expressions and mathematical expressions.

Boolean Expressions
-------------------

Boolean expressions enable you to compare two values in Python. Check out the
following Boolean expression::

  >>> "hello" == 'hello'
  True

In this case, we're comparing two strings, ``"hello"`` and ``'hello'``. Even
though they are denoted with different kinds of quotation marks, they have the
same *value*. This comparison of two strings *results* in a value. Can you spot
the result of the expression in the above code?

.. topic:: **The expression results in True**
  :class: hover-reveal

  This expression results in a Boolean value of ``True``. We can see that
  in the Python interpreter on the second line of the code snippet.

You can also ask if two values are **not equal** to each other::

  >>> "hello" != 'hello'
  False
  >>> "hello" != "goodbye"
  True

Lastly, you can ask if one value is greater or less than another::

  >>> 40 > 30
  True
  >>> 50 < 100
  True
  >>> 50 > 100
  False

All of the above expressions also result in Boolean values.

.. topic:: Try it out!

  Open up a Python `repl session
  <https://repl.it/languages/python>`_ and try writing a couple of your own Boolean
  expressions.

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

Mathematical Expressions
------------------------

Python also enables you to write mathematical expressions. These should look
pretty familiar to you-- they resemble something you'd type into a calculator::

  >>> 2 + 2
  4
  >>> 2 - 1
  1
  >>> 30 * 2
  60
  >>> 20 / 2
  10

You can capture the result of a mathematical expression using a variable. Check
out this example::

  >>> the_sum = 2 + 2
  >>> print the_sum
  4

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
