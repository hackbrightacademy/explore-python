================================
Module 5: Logic and Control Flow
================================

Welcome
=======

Now that you've got basic data types conditional logic, and lists down, it's 
time to add another element to the equation. Control flow opens many doors for 
crafting interesting, usefully repetitive programs. We'll add a lot of new 
syntax in this module, and it's more important than ever to practice and 
explore on your own.

Programming is an Art Form
--------------------------

This is where creativity can really come in handy-- with control flow and 
loops, the world is your oyster! Want to print each letter of a word, one 
at a time? You can! Want to ask the user for input until they type "quit"? You 
can! And *so* much more. 

Lesson
======

Topics
------

- The Why of loops
- While-loops
- Boolean expressions
- For-loops


Introduction to Control Flow
----------------------------

So far, we've been writing code that tells a computer what to do and in what
order. For example, a calculator takes user input in the form of numbers and
operations, and the precise sequence of operations it performs to arrive at the
answer *depends* on the input. This conditional nature of the calculator code
is very powerful.

Often, it's also necessary to evaluate some conditional logic more than once.
In the case of the calculator, we'd want to continue to evaluate the user's
input until they "quit" the calculator, or turn it off.

The code responsible for determining how many times to do something, when to
stop doing something, or when to keep doing something is called
**control flow**. Let's look at some common ways to specify control flow
operations and decisions in Python.

Loops
=====

A Simple Example
----------------

How could you print 'hello world' 100 times? You could write
``print 'hello world'`` 100 times (copy/paste would be helpful), but that is
absurdly inefficient. Imagine if you realized you made a typo after finishing
those 100 lines of code.

It's much better to use a loop.

While-loops
-----------

Here's how we could print 'hello world' 100 times using only 4 lines of Python
code.

.. code-block:: python

  my_counter = 0

  while my_counter < 100:
      print "hello world"
      my_counter = my_counter + 1


A **while-loop** is the simplest way to execute code repeatedly, as long as some
condition is `True` - in the above example, that the `my_counter` variable is less
than 100.

Just like in an if-statement, a while-loop needs a **boolean expression** to
evaluate. Where's the boolean expression in the code above?

.. topic:: **It's right after** ``while``
  :class: hover-reveal

  The boolean expression is ``my_counter < 100``. Initially, this expression
  evaluates to ``True``, because ``my_counter`` is 0. Definitely less than 100.
  That's why the while-loop starts!

Also just like an if-statement, a while-loop has a **body**. What is the body of
the above while-loop?

.. topic:: **The body of a while loop is the indented block**
  :class: hover-reveal

  The body of the while loop is composed of the highlighted lines below:

  .. code-block:: python
    :emphasize-lines: 4-5

    my_counter = 0

    while my_counter < 100:
        print "hello world"
        my_counter = my_counter + 1

  Anything indented underneath the first line of the while-loop is said to be
  the body of the while-loop.

The main difference between an if-statement and a while-loop is that once the
body of the if-statement happens, it doesn't happen again. The if-statement
checks the boolean expression, and either executes the code in the if-statement
body, or does not.

However, with a while-loop, the body is executed again and again, and again as
long as while-loop's boolean expression evaluates to `True`.

So, for the above example, the execution of the code goes something like this::

  set the my_counter variable to 0

  start while loop
  print "hello world"
  increase the my_counter variable by 1
  check if my_counter still less than 100- it is!
  print "hello world"
  increase the my_counter variable by 1
  check if my_counter still less than 100- it is!
  print "hello world"
  ...
  ... 98 more times!
  check if my_counter still less than 100- it's not!
  stop while loop


Making While-Loops End: Natural Breaks
++++++++++++++++++++++++++++++++++++++

It's important to have a plan for when a while-loop should finish. Otherwise,
the while-loop will just keep going forever (or until you stop the program
from running). This is called an **infinite loop**.

As stated above, the main way to make a while-loop end is for it's boolean
expression to evaluate to `False`. So, it's common for part of a while-loop
body to handle making progress towards the expression eventually evaluating
to `False`.

Here are some examples:

**Counting down until** `some_number` **is not greater than 5 any more**

.. code-block:: python

  some_number = 10

  while some_number > 5:
      some_number = some_number - 1

Take a look at this code:

.. code-block:: python

  keep_going = True

  while keep_going:
      print "I'm in the while loop"
      keep_going = False

How many times does this while-loop's body run?

.. topic:: **Just one time!**
  :class: hover-reveal

  As soon as the while-loop starts, on the second and last line of the body,
  the boolean condition (in this case, it's just the variable `keep_going`)
  becomes `False`.

  It's important to note that a boolean type, as in `True` and `False`, are also
  valid conditions for a while-loop. We'll use this in the next section on
  Explicit Breaks as well.

**Counting up until `n` is equal to 100**

.. code-block:: python

  n = 1

  while n != 100:
      print n
      n = n + 1

Making While-Loops End: Explicit Breaks
+++++++++++++++++++++++++++++++++++++++

Another way to end a loop is with the ``break`` statement. The following example
does the same thing as the last example in the previous section.

.. code-block:: python

  n = 1

  while True:
      print n
      n = n + 1
      if n == 100:
          break

Read both while-loops carefully, comparing the syntax of each.

Here, the boolean expression to set up the while-loop is always `True` - in fact,
it is just the value `True` itself. So, we need to explicitly end the loop by
checking for when the `n` is equal to 100, and execute ``break`` to end the
loop.

For-loops
---------

Just like while-loops, **for-loops** provide a vocabulary and framework for
executing the same block of code over an over. However, instead of checking
the some condition in order to decide whether to *keep looping*, as in a
while-loop, for-loops **iterate over something** -- most commonly, a list!

Here's simple first example:

.. code-block:: python

  desserts = ["cupcake", "ice cream", "cookie"]
  for dessert in desserts:
      print dessert

If we run this in our Python repl console, we see each dessert string get printed out::

  >>> desserts = ["cupcake", "ice cream", "cookie"]
  >>> for dessert in desserts:
  ...     print dessert
  ...
  cupcake
  ice cream
  cookie

Here's another example.

Suppose we had a list of numbers `0` through `99`. We can print out
each item in this list from start to end. Consider this example:

.. code-block:: python

  nums = range(100)

  for n in nums:
      print n


As you should recall, the `range` function returns a list of numbers,
starting at 0 and up to but not including 100. The for-loop assigns the
variable `n` to each number in `nums`, in order, and then prints out its value
every time.

Try this out yourself.

Each Item, One-by-One
+++++++++++++++++++++

As in the 2 above examples, when you **iterate over a list** using a for-loop,
you get each item in the list, one-by-one. This is a wonderful thing!

Here are a few more examples to try on your own.

.. code-block:: python

  colors = ['red', 'orange', 'green']

  for color in colors:
      print color

.. code-block:: python

  my_cool_shapes = ['triange', 'rectangle', 'square']

  for shape in my_cool_shapes:
      print shape

Lastly, check out this code. It's similar to the above example, with one
important difference.

.. code-block:: python

  my_cool_shapes = ['triange', 'rectangle', 'square']

  for anything_i_want in my_cool_shapes:
      print anything_i_want


Syntax of For-loops
+++++++++++++++++++

Let's call out the specific syntax of a for-loop.

1) Structure the first line of the for-loop like so::

  for [could be any word here] in [some list]

2) Indent the **body** of the for-loop, or the code to be executed again and
   again.

3) The for-loop body can be multiple lines, or just one.

For-loops with Conditionals
+++++++++++++++++++++++++++

We've already seen an example of using an ``if`` conditional in a while-loop.
We can also use conditionals inside of a for-loop.

For example, we want to print out the numbers 1 through 100, but in addition
whether the number is even or odd:

.. code-block:: python

  for n in range(1, 101):
      if n % 2 == 0:
          print n, 'is even'
      else:
          print n, 'is odd'

If we want to use a conditional to break out of a for-loop, we can use the
`break` statement, as we've done with while-loops.


Practice
========

Directions
----------

Login to your account and start a new repl `here
<https://repl.it/languages/python>`_. Title it **module_5_practice.py**.

Complete the practice problems below on Repl.it.

1) Write a ``while`` loop that prints out the numbers from `1` to `7`, including
   `7`. Use a similar technique as the below while-loop. Type this out-- don't
   copy/paste the below while-loop.

   .. code-block:: python

     counter = 1

     while counter < 10:

         print counter
         counter = counter + 1


2) Write a for-loop that prints out the numbers from 1 to 20. Use a similar
   technique as the below for-loop. Again- don't copy/paste this.

   .. code-block:: python

     for num in range(4):
         print num

3) Write a for-loop that prints every number between 1 and 10 *except* the
   numbers 3 and 5. Use a similar technique as below.

   .. code-block:: python

     for num in range(10):
         if num != 8:
             print num

Hint:

.. topic:: **Use a nested if-statement**
  :class: hover-reveal

  If you nest two if statements, you can do something *only if* both
  conditions are `True`.

  .. code-block:: python

    num = 4

    if num != 3:
        if num != 5:
            print "It's not 3 or 5!"

    num2 = 5

    if num2 != 3:
        if num2 != 5:
            print "It's not 3 or 5!"

4) Write a ``while`` loop that prints out the numbers 100 to 1 in **descending**
   order. First, it's helpful to figure out the condition your while-loop will
   use to know whether to keep looping or not. What's the condition?

.. topic:: **When some counter variable is < 1**
  :class: hover-reveal

  You'll need to set a counter variable to be equal to `100` first. Then, the
  while-loop's condition to check after each iteration of the loop will be
  whether that counter variable has dropped below 1.

What's the body of your while loop?

.. topic:: **Print and make progress**
  :class: hover-reveal

  The main thing happening in the body of this while-loop is printing out
  a number.

  Then, you'll need to subtract `1` from the counter variable, so that
  eventually, the while loop will naturally break.

5) Modify the loop so that only multiples of 11 are printed.

How can you find out if some number is a multiple of of another?

.. topic:: **Use the modulus operator**
  :class: hover-reveal

  In Python, there is a mathematical operator `%` that tells you the
  **remainder** if one number we to be divided by another number. For example::

    >>> 4 % 2
    0
    >>> 3 % 2
    1

  When 4 is divided by 2, there is no remainder-- they divide perfectly into
  each other. So, 4 is a multiple of 2.

  When 3 is divided by 2, there is a reminder-- `1`. They do not divide perfectly
  into each other, and 3 is *not* a multiple of 2.

6) Using a for-loop and the `range` function, print every number from `0` to
   `79`.

7) Type the following list into your iPython session. Then, print each item
   in the list using a for-loop.

   .. code-block:: python

     colors = ["black", "orange", "purple"]

8) Using the same list as the previous problem, as well as *list-indexing*
   print the first letter in each word of the `colors` list.

   Recall that you can print the *first letter* of a string with the following
   syntax:

   .. code-block:: python

     name = "Balloonicorn"

     print name[0]

9) Using anything from this lesson (be sure to use a loop!), find a way to
   produce the following output::

     7
     8
     9
     10
     11
     12

Hint:

.. topic:: **Use a While loop**
  :class: hover-reveal

   Using a while-loop would be the most straightforward way to do this.
   Make a variable called `counter`, and set it to `7`. Then, your while
   loop could look like this:

   .. code-block:: python

     while counter < 13:
         print counter
         counter = counter + 1

10) Using a similar technique as above, find a way to produce the following
    output::

      8
      10
      12

Hint:

.. topic:: **Use a While loop**
  :class: hover-reveal

  Notice that instead of adding `1` to the counter variable, we could
  be adding `2`. If you simply modify the solution from the previous
  problem to change

  .. code-block:: python

    counter = counter + 1

  to

  .. code-block:: python

    counter = counter + 2

  you should be all set.


Debugging
=========

Directions
----------

In the following problems, you'll find code that is invalid or not allowed in
some way. Read the code, and see if you can predict what is wrong. When you're
ready, hover over the solution area to reveal the error message that Python
shows, along with an explanation of what is going wrong.

1) What's wrong with this code?

.. code-block:: Python

  >>> for num in 5:
  ...     print num

.. topic:: **Can't iterate over integers**
  :class: hover-reveal

  It's not possible to loop over an integer.

  So, you'd get the following error::

    >>> for num in 5:
    ...     print num
    ...
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    TypeError: 'int' object is not iterable

  In order to have numbers in a for loop, you need to have a *list* of
  numbers. So, use `range`!

  ::

    >>> for num in range(5):
    ...     print num
    ...
    0
    1
    2
    3
    4

2) What's wrong with this code?

.. code-block:: Python

  >>> colors = ["orange", "yellow", "red"]
  >>> while color in colors:
  ...     print colors

.. topic:: **While loops need a condition**
  :class: hover-reveal

  While loops don't use the ``thing in things`` syntax. To start a while-loop,
  you must construct some kind of boolean expression, like a comparison of
  equality (``i == 5``) or value (``i < 6``).

  So, you'd get the following error::

    >>> while color in colors:
    ...     print color
    ...
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    NameError: name 'color' is not defined


External Resources
==================

Videos
------

- `Loops <https://www.youtube.com/watch?v=6HWK6O4-28E>`_

Reading
-------

- `Loops in the Python Wiki <https://wiki.python.org/moin/ForLoop>`_

- `While Loops Tutorial <http://www.python-course.eu/loops.php>`_


Final Assignment
================

Create a new `repl session
<https://repl.it/languages/python>`_ called **module_5_printing.py**.

Part 1: Quiz Questions
----------------------

1. Define a list of quiz questions of your choosing. This list should be a list
   of *strings*.

2. Loop through your list of quiz questions (use a for-loop!), and ask the user
   for the answer to each question (use `raw_input`).

Part 2: Todo List Program
-------------------------

1. In the same repl, make a list called `todo_list` and add one item to it.
   "Do Laundry" is a safe choice.

2. Ask the user if they'd like to A) add a todo list item or B) quit.
   Capture their input into a variable called `command`.

3. Start a while-loop. It should keep looping until the `command` variable is
   equal to ``"quit"``.

4. In the body of the while loop, check if the user's `command` is ``"add"``.
   If so, ask them what they'd like to add using `raw_input`. Once you have
   the item they'd like to add, append it to the list called ``todo_list``.

5. Still in the body of the while-loop, in the last line, prompt the user again
   for what they'd like to do next: A) add a todo list item or B) quit. Be sure
   to capture their input in a variable called `command`. Otherwise, the while
   loop will never end.

Part 3: Print Todo List
-----------------------

1. In the same repl (outside of the while-loop), print each item of the
   ``todo_list``.

Your output should look something like this (it's ok if you end up with a
different order of ingredients):

.. parsed-literal::
  :class: console

  What is 2 + 2?
  4
  What is 5 + 5?
  10
  What is the capital of the US?
  Washington DC
  What would you like to do A) add an item B) quit?
  A
  What item would you like to add?
  Take dog for a walk
  What would you like to do A) add an item B) quit?
  quit
  Do Laundry
  Take dog for a walk
