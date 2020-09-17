=============================
Module 3: Python Conditionals
=============================

Welcome
=======

In the last module, you learned about variables and expressions, which will be
extremely important in this module. If you're still a little iffy on these
concepts (especially expressions), you'll probably want to go back and review.
We're about to talk about conditionals, and conditionals are all about boolean
expressions.

We also introduced debugging in the last module. Once you get past the intial
annoyance of an error message, debugging can be like puzzle; it's the game of 
figuring out what's going wrong, why, and how to fix it. Debugging in Python 
is especially pleasant because Python provides clear, helpful error messages. 
There's more debugging to come for you, both in this and future modules --- 
and in your future life as a coder.

These concepts --- data types, printing, variables, expressions and 
conditionals --- aren't just stepping stones that you'll never see again. As 
a programmer, you'll use each of these every day (print statements are especially 
useful for debugging). As you develop a solid understanding of these concepts, 
you're building a strong foundation for yourself as a coder.


Lesson
======

Topics
------

- Review of boolean expressions

- If-statements

A Review of Boolean Expressions
-------------------------------

In order to fully understand conditional logic, it's important to have a solid
grasp of boolean expressions in python. Remember, a boolean expression is a
statement or a part of a statement that results in a Boolean value, such as
``True`` or ``False``. Comparisons are the most obvious and helpful example
of boolean expressions::

    >>> "rainbow rockstar" == "mermaid unicorn"
    False

This *expression*, which is the comparison of two strings, results in the
Boolean value **False**. We can also compare two numbers. Read the following
boolean expressions::

    >>> 5 == 5
    True
    >>> 4 > 1
    True
    >>> 7 > 99
    False

Also, remember that ``True`` and ``False`` are values in their own right. If
we wanted to simply make a variable whose value is ``True``, we could::

    >>> my_var = True
    >>> print my_var
    True

Also, reaching way back to the first module, the string ``"True"`` is **not**
the same as the Boolean value ``True``. They are two values that look the same,
but are different **types**.

As a fun aside, we could prove this using a Boolean expression::

    >>> type("True") == type(True)
    False
    >>> "True" == True
    False
    >>> "True" != True
    True

Conditional Logic
-----------------

We're about to add a very useful tool to our toolkit. Conditional logic lets us
set conditions, or prerequisites, in our code, such that only certain lines of
code are run if certain conditions are met. This is similar to allowing yourself
to go to the movies if you finish this module of work. Some "psedocode", or
"fake" computer code, for you day might look like this::

    work on module
    if module is finished:
        go to the movies, have lots of fun!
    otherwise:
        stay home and keep working.

In our pseudocode, the line that says ``if module is finished`` is called an
**if-statement**. Python if-statements look pretty similar to our pseudocode.
Here is some valid Python code that does a similar thing:

.. code-block:: python

    module = "incomplete"
    if module == "complete":
        print "Time to go to the movies"
    else:
        print "Stay home and keep working."

Try typing this out in your Python `repl console
<https://repl.it/languages/python>`_ on your own. What is the output
of this code?

.. topic:: **Here is the output**
    :class: hover-reveal

    The output is that the string ``"Stay home and keep working."`` has been
    printed.

    .. parsed-literal::
        :class: console

        >>> module = "incomplete"
        >>> if module == "complete":
        ...     print "Time to go to the movies"
        ... else:
        ...     print "Stay home and keep working."
        ...
        `Stay home and keep working.`:cmd:

If-Statement Syntax
-------------------

.. code-block:: python

    if family_member1 == family_member2:
        print "You have two family members with the same name."

There are a couple important things to note about the correct way to craft an if-statement.

1) ``if`` is another Python keyword. It must be lower-cased.
2) After the ``if`` is a **Boolean expression** followed by a colon-- ``:``.
3) Next comes the "body" of the if-statement-- the thing to do if the Boolean
   expression evaluates to ``True``.

.. warning:: **The if-statement body must be indented**

    In order for the if-statement to be considered to be valid Python syntax,
    it must be indented! That means, include 4 blank spaces, and *then* the
    actual code that should get run

.. note:: **The if-statement body can be multiple lines**

    You can include more than one line of code in an if-statement's
    body. Here's an example:

    .. code-block:: python

        if family_member1 == family_member2:
            print "You have two family members with the same name."
            print "Here is family member 1: ", family_member1
            print "Here is family member 2: ", family_member2

4) Optionally, an if-statement can have an **else** block-- what to do if the
   Boolean expression does not evaluate to **True**. Here's another example of
   an else-block. The "body" of the else-block should also be indented.

.. code-block:: python

    if message_recipient == "Balloonicorn":
        print "Balloonicorn, you have a message."
    else:
        print "No messages for you, Balloonicorn!"

Using ``elif``
--------------

If there are multiple successive conditions you'd like to check, you can utilize
the ``elif`` keyword. Here's an example:

.. code-block:: python

    if message_recipient == "Balloonicorn":
        print "Balloonicorn, you have a message."
    elif message_recipient == "Hackbright":
        print "Ballonicorn, can you take a message for Hackbright?"
    else:
        print "No messages for you, Balloonicorn!"

The ``elif`` keyword is a way to evaluate an *additional* condition, after the first
has been checked.

It's important to note that if the first if-statement evaluates to ``True``,
neither the ``elif``, nor the ``else``, will ever occur. With just an ``if``
and an ``else``, it's either one or the other. With an ``if``, ``elif``, *and*
and ``else``, it's only one of the 3 conditions that can occur.

The conditions are checked in the order that they appear: first the ``if``, then
the ``elif``, then, if neither the ``if`` nor the ``elif`` worked out, the else
handles it.

Nested If-Statements
--------------------

If-statements can be nested. That is, another if-statement can be included in
the body of an if-statement. Here is an example:

.. code-block:: python
  :emphasize-lines: 6

  num_pets = 5
  fav_animal = "cat"

  if num_pets > 5:
      print "Wow, that's a lot of pets!"
      if fav_animal == "cat":
          print "I like cats too!"

Nested if-statements can also have ``elif`` blocks and ``else`` blocks. To complicate the
example above a bit:

.. code-block:: python
  :emphasize-lines: 8-12

  num_pets = 5
  fav_animal = "cat"

  if num_pets > 5:
      print "Wow, that's a lot of pets!"
      if fav_animal == "cat":
          print "I like cats too!"
      else:
          print "Why don't you like cats??"
  elif num_pets == 2:
      print "I hope your two pets are friends."
  elif num_pets == 0:
      print "Time to get a pet."

Using **raw_input** with if-statements
--------------------------------------

So far, our if-statements have been a little bit contrived. What's the point of
checking to see if a variable is equal to another thing if you made the variable
yourself, right? If statements are typically used when the result of that Boolean
expression is unknown, or varying over time or depending on some input that
was provided to a program.

As luck would have it, we do have a function that can take in input into our
programs-- **raw_input**!

Using these two concepts, we can make a little advice machine::

    >>> print "Would you like some advice?"
    >>> print "If yes, type Y."
    >>> the_answer = raw_input("What's your answer? ")
    >>> if the_answer == "Y":
    ...     print "A wise person knows when to ask for help."
    ... else:
    ...     print "Ok, I won't give you any advice then."

Open a `repl Python console
<https://repl.it/languages/python>`_ and type this out. Remember when this line runs::

    >>> the_answer = raw_input("What's your answer? ")

You'll have to provide the answer yourself. Try it out with two different inputs.
So, the first time, type **Y** in response to ``What's your answer?``, and then
type something other than **Y**.


Practice Section
================

Directions
----------

Login to your account and start a new repl `here
<https://repl.it/languages/python>`_. Title your new session  
**module_3_practice.py**.

Complete the practice problems below in this repl console. If you'd like to
work through the practice in several sittings be sure to log in to Repl.it
and save your work in between.


1) Setup: Type the following into your repl Python console.

  .. code-block:: python

    adjective = "absolutely fabulous"
    adjective2 = "supercalifragilisticexpialidocious"
    noun = "aardvarks"
    noun2 = "billy goats"
    verb = "lollygagging"
    verb2 = "jogging"

2) Write an if-statement for each of the above variables. The if-statement
   should check whether the length of the variable's value is greater than 9
   characters. If it is, your code should print "long string". If it's
   not, print "not a long string".

   Here's a hint:

   .. topic:: Just the if-statement

   Here's the first part. It accomplishes *half* of the problem.
   However, it doesn't accomplish printing "not a long string" when the length
   is not greater than 9 characters.

   .. code-block:: python

     if len(adjective) > 9:
        print "long string"

3) Using the **raw_input** function, prompt yourself to type something. Be sure
   to capture what you type into a variable. Once you have the variable, print
   the length of whatever you typed.

4) Type the following into the repl Python console::

   >>> answer = raw_input("What is 2 + 2 ?")
   >>> answer_as_integer = int(answer)

   Then, write some code that follows these specifications:

   - If the user is correct, tell them they are correct.

   - If the user is incorrect, tell them whether their answer is too high or too
     low.

   Do this a couple of times, making sure that if you type 1) the wrong answer
   2) a "too high" answer and 3) a "too low" answer all show the correct output.

5) Write a conditional statement that checks if the variables **verb** and
   **verb2** are equal to one another. If they are, print "They are equal!". If
   they aren't, print 3 things: the value of verb, the value of verb2, and the
   message "These are not the same"

6) Type the following code to prompt the user to rate the movie *Wizard of Oz*::

   >>> rating = raw_input("On a 1-10 scale, how would you rate Wizard of Oz?")
   >>> rating_as_integer = int(rating)

   Then, write an if/elif/else statement that follows these specifications:

   - If they rate less than 5, tell the user "Wow, you hated it!"

   - If they rate less than 7, tell the user "You are meh about this movie."

   - If they rate more than 7, tell the user "You loved it. There's no place like home."


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

  >>> rating = 5
  >>> if rating = 5:
  ...     print "Right in the middle."

.. topic:: **Must use double-equals sign in if-statement**
  :class: hover-reveal

  Since the condition for an if-statement is a boolean expression, you *must*
  include 2 equals signs to compare equality in an if-statement.

  This code would throw a **SyntaxError**. Python even points out the single
  equals sign as the origin of the problem for us!

  ::

    >>> if rating = 5:
      File "<stdin>", line 1
        if rating = 5:
                  ^
    SyntaxError: invalid syntax

2) What's wrong with this code?

.. code-block:: python

  rating = 5
  if rating == 5:
  print "You rated a 5!"

.. topic:: **Missing indentation for if-statement body**
  :class: hover-reveal

  The if-statement body must be indented.

  ::

    >>> if rating == 5:
    ... print "You rated a 5!"
      File "<stdin>", line 2
        print "You rated a 5!"
            ^
    IndentationError: expected an indented block

  Thankfully, Python is very good at showing us the problem. The next block of
  code was expected to be indented.

External Resources
==================

Videos
------

`Let's Learn Python: Conditionals <https://www.youtube.com/watch?v=mQrci1kAwh4>`_

`Socratica: Python If, Then, Else <https://www.youtube.com/watch?v=f4KOjWS_KZs&t=220s>`_

Articles
--------

`Wikibooks on Conditionals in Python <https://en.wikibooks.org/wiki/Python_Programming/Conditional_Statements>`_

`Python 2 Conditionals Tutorial <http://www.python-course.eu/conditional_statements.php>`_

Final Assignment
================

Create a new `repl
<https://repl.it/languages/python>`_ called **module_3_user_questions.py**.

Ask the user as series of questions using **raw_input**, capturing their input
into appropriately-named variables. The questions should be

- Do you like cats? Answer Y or N

  - If they do not like cats, ask them for their favorite animal.

- Do you like chocolate? Answer Y or N

  - If they do not like chocolate, ask them for their favorite dessert.

- Do you drink coffee? Answer Y or N

  - If they do drink coffee, ask them if they put sugar in it.

  - If they do not drink coffee, ask them what their favorite morning drink is.

- Do you live in California? Answer Y or N

  - If they do, ask them what city they live in.

  - If they do not, ask them what state they live in.

- Do you enjoy jokes? Answer Y or N

  - If they do enjoy jokes, ask them: What kinds of melons can't marry?

  - Regardless of their answer, print "Cantelopes"

  - If they do not enjoy jokes, ask them why, and capture that into a variable.

At the end of your program, print a summary of all of the answers to their 
questions.
