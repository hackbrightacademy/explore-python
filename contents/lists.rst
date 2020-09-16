======================
Module 4: Python Lists
======================

Welcome
=======

In this module, we introduce Python's list, the most commonly used data
structure that is built into the language itself. Just like any list of stuff 
you encounter in everyday life, a list in Python is just a bunch of items 
arranged in some order. You can add items to a list and also remove items from 
it. What can the items be? Anything!

Why are lists so useful? Let's recall what computers do so well - repetitive
tasks. So a list basically contains a potentially enormous amount of little
tasks (or data), and the computer simply goes through the items one after the
next, very very quickly. The possibilities are endless! 


Lesson
======

Topics
------

- List creation
- Important list methods
- Indexing lists
- Indexing strings
- The `range` function

Introduction to Lists
---------------------

So far, we've covered 3 main data types in Python: strings, integers, and
booleans. Next, we'll cover lists in Python. At it's most basic level, a Python
list is meant to keep a collection of *other* values in order. Here's an example:

.. code-block:: python

  desserts = ['cupcake', 'ice cream', 'cookie']

In the above code, the variable `desserts` has the value of a Python list. While
there are other data types contained in the list (strings, in this case), it's
important to recognize that the value of the variable `desserts` as a whole is a
list.

Syntax
------

There are a couple of important things to note about the way we can define lists
in Python.

1. A list begins and ends with a square bracket character, ie ``[`` and ``]``.

2. The items in a list are separated by commas.

Finding the length of a list
----------------------------

It's possible to get the length of the list using the same built-in `len` function
that we've used to get the length of a string::

  >>> desserts = ['cupcake', 'ice cream', 'cookie']
  >>> print len(desserts)
  3

We can also store that value of `3` in a variable, like so::

  >>> desserts = ['cupcake', 'ice cream', 'cookie']
  >>> desserts_length = len(desserts)
  >>> print dessers_length

Empty Lists
-----------

It's possible make a list with no items.

.. code-block:: python

  desserts = []

What's the length of an empty list?

.. topic:: An empty list's length is zero
  :class: hover-reveal

  ::

    >>> desserts = []
    >>> print len(desserts)
    0

Adding Items to a List
----------------------

It's possible add a items to our empty `desserts` list using the method called
`append`.

.. code-block:: python

  desserts = []
  desserts.append('cupcake')

What does our desserts list look like now? How could we check?

.. topic:: **Let's print the** `desserts` **list**
  :class: hover-reveal

  ::

    >>> print desserts
    ['cupcake']

So, a one-item list is great, but we'd like to add a couple more items, like so:

.. code-block:: python

  desserts.append('ice cream')
  desserts.append('cookie')

What do you think the list looks like now?

Option A) ``['cupcake, ice cream, cookie']``

Option B) ``['cupcake', 'ice cream', 'cookie']``

Option C) ``['cookie']``

Option D) ``['cookie', 'ice cream', 'cupcake']``

.. topic:: **Option B**
  :class: hover-reveal

  The list has 3 *separate* strings in it. As each item was added, or more
  specifically **appended**, to the list, it was put at the *end* of the list.

Accessing items in a list
-------------------------

We can ask for a particular item in a list, or **index** the list, using the
following syntax:

.. code-block:: python

  >>> desserts[0]
  'cupcake'
  >>> desserts[1]
  'ice cream'
  >>> desserts[2]
  'cookie'

The place of an item in a list, with regards to the order of the list, is
called the item's **index**. In the `desserts` list, the string ``'cupcake'``
has the index of `0`, the string ``'ice cream'`` has the index of `1`, and the
string ``'cookie'`` has the index of `2`.

Interestingly, the first item in the list *does not* have the index of 1.
**Python list indexing starts at zero, rather than one.** This can be a little
tricky at first, so let's do some practice.

Check for Understanding: List Indexing
++++++++++++++++++++++++++++++++++++++

Given the following list:

.. code-block:: python

  languages = ['Portuguese', 'English', 'Spanish', 'Russian', 'Mandarin']

How would you do the following?

.. note:: Try it out!

  Try this out in a `repl session
  <https://repl.it/languages/python>`_ console by copying the `languages` list, and
  attempting to index the list.

- Index the list in order to print out `Spanish`?

.. topic:: ``print languages[2]``
  :class: hover-reveal

  The third item in `languages` has the index of `2`.

- Index the list in order to print out `Portuguese`?

.. topic:: ``print languages[0]``
  :class: hover-reveal

  The first item in `languages` has the index of `0`.

- Index the list in order to print out `Mandarin`?

.. topic:: ``print languages[4]``
  :class: hover-reveal

  The fifth item in `languages` has the index of `4`.

Index Errors
++++++++++++

If you try to access an item at an index that does not exist in a list, you get
an `IndexError`. For example, given the following two-item list, there is item
at index `0` and another item at index `1`.

.. code-block:: python

  colors = ['purple', 'pink']

We can safely ask for both the item at index `0` and the item at index `1`::

  >>> print colors[0]
  'purple'
  >>> print colors[1]
  'pink'

However, if we try to get the item at index `2`, there's an error.

  >>> print colors[2]
  Traceback (most recent call last):
    File "<stdin>", line 1, in <module>
  IndexError: list index out of range

As we'll see in the control flow module, this is a fairly common error to get.
However, its also a very easy error to fix. Getting an `IndexError` simply means
you're trying to get something that *isn't there*.

Two More List Methods
---------------------

Just like strings, lists have a variety of **methods**, or programmatic
behaviors or capabilities. Methods are always notated like this::

  some_data_type.method_name()

The **append** method is perhaps the most common and important method for
lists in Python.

Let's learn about 2 more methods.

The `pop` list method
+++++++++++++++++++++

There are several ways to remove items from a list. In order to remove the last
item in a list, you can use the method `pop`.

Here is an example::

  >>> desserts = ['cupcake', 'ice cream', 'cookie']
  >>> desserts.pop()
  'cookie'
  >>> print desserts
  ['cupcake', 'ice cream']

After `pop` ran, ``'cookie'`` was removed!

Try this out for yourself in the Python repl console.

The `sort` list method
++++++++++++++++++++++

One of the wonderful thing about lists in Python is that they keep track
of order. Once the list is defined, the order of the items is maintained unless
purposefully modified. So, the desserts list will always have ``"cupcake"``
first, and ``"ice cream"`` second, and so on.

Let's learn how to change the order! It's conceivable that we would want a list
of strings in alphabetical order, rather than the original order::

  >>> desserts = ['cupcake', 'ice cream', 'cookie']
  >>> desserts.sort()
  >>> print desserts
  ['cookie', 'cupcake', 'ice cream']

The list is now in alphabetical order. Nice!


What goes in a list?
--------------------

Up until now, we've been storing strings in our lists. It's also possible
to make lists of integers and booleans as well. Here are a couple of examples::

  >>> my_numbers = [ 2, 4, 6, 8, 10 ]
  >>> some_booleans = [ True, True, False, True, True ]

What would ``my_numbers[0]`` give you?

.. topic:: **It's the first item!**
  :class: hover-reveal

  ::

    >>> print my_numbers[0]
    2
    >>> type(my_numbers[0])
    <type 'int'>

What would ``some_booleans[2]`` give you?

.. topic:: **It's the third item!**
  :class: hover-reveal

  ::

    >>> print some_booleans[2]
    False
    >>> type(some_booleans[2])
    <type 'bool'>


Heterogenenous Lists
++++++++++++++++++++

Additionally, you can store many different data types in the same list.
Here's an example::

  >>> stuff = ['cupcake', True, 47]

What would ``stuff[1]`` give you?

.. topic:: **It's the second item!**
  :class: hover-reveal

  ::

    >>> print stuff[1]
    True
    >>> type(stuff[1])
    <type 'bool'>

.. too hard

  Nested Lists
  ++++++++++++

  Lastly, you can store **lists inside lists**. Here's an example::

    >>> more_stuff = ['cupcake', 'ice cream', ['gummy candy', 'chocolate'] ]

  While the items at indices `0` and `1` are both strings, the item at index `2`
  is a list::

    >>> print more_stuff[0]
    cupcake
    >>> print more_stuff[1]
    ice cream
    >>> print more_stuff[2]
    ['gummy candy', 'chocolate']

  How could we get *just* the string ``"chocolate"``? Note that this string is
  inside a list, which is also inside a list.

  .. topic:: **Two different ways to get** ``"chocolate"``
    :class: hover-reveal

    Indexing the list `more_stuff` at index `2` gives us a list.

    ::

      >>> print more_stuff[2]
      ['gummy candy', 'chocolate']

    So, we could store that in a variable, and index our new variable.

    ::

      >>> candies = more_stuff[2]
      >>> print candies
      ['gummy candy', 'chocolate']
      >>> print candies[1]
      'chocolate'

    Another, slightly shorter, but perhaps less explicit option is to double
    index the `more_stuff` list::

      >>> print more_stuff[2][1]
      "chocolate"

    Pretty cool!

String Indexing
---------------

While strings and lists are different in many ways, they also share some of
the same characteristics. Just like a list, it's also possible to index a string.

For example, we let's say we have a variable called `my_name` and it's value
is the string ``"Balloonicorn"``::

  >>> my_name = "Balloonicorn"
  >>> something = my_name[0]

What will happen when the following code runs?::

  >>> print something

.. topic:: **The first letter of** ``"Balloonicorn"`` gets printed
  :class: hover-reveal

  Using square brackets to index a string results in obtaining one of its
  characters. This is pretty nifty!

  ::

    >>> my_name = "Balloonicorn"
    >>> something = my_name[0]
    >>> print something
    B

  >>> something = my_name[0]

What will happen when the following code runs?::

  >>> my_pet = "Arfy"
  >>> print my_pet[2]

.. topic:: **The third letter of** ``"Arfy"`` gets printed
  :class: hover-reveal

  Since **strings are also zero-indexed**, asking for the letter at
  index 2 gives us the letter `f`.

  ::

    >>> my_pet = "Arfy"
    >>> print my_pet[2]
    f

  At index 0 is the letter `A`, at index 1 is the letter `r`, and at index
  2 is the letter `f`.

The `range` Function
--------------------

Now that we've learned lists in Python, it's time to learn about a very common
**built-in function** in Python that *produces* a list.

First, lets review other built-in functions we know. Which built-in functions
have we learned about?

.. topic:: `type` **and** `len`
  :class: hover-reveal

  We've learned about 2 built-in functions so far. A built-in function is a
  function that can be called in any Python code, without having to define
  it or import it from somewhere else.

  As a review, here's how we've used `type` and `len`::

    >>> my_message = "Hello world"
    >>> type(my_message)
    <type 'str'>
    >>> len(my_message)
    11

  `type` shows the data type for whatever is passed in to the `type` function.
  In this case, we passed a variable, `my_message`, whose value is a string.

  `len` shows the length of whatever is passed in. In this case, we passed in a
  string which has 11 characters (including the space).

A third built-in function is called `range`. You must pass it in an integer as
an argument, and it will return a list of integers.

For example::

  >>> range(3)
  [0, 1, 2]

In this first example, we passed in `3` to the range function. So, `range`
returned a **list** of **3 numbers**. The numbers begin at 0, just like indices
in lists and strings.

Here are a couple more examples::

  >>> my_nums = range(4)
  >>> print my_nums
  [0, 1, 2, 3]

::

  >>> more_nums = range(18)
  >>> print more_nums
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]

::

  >>> more_nums = range(5)
  >>> print more_nums
  [0, 1, 2, 3, 4]


Practice Section
================

Directions
----------

Login to your account and start a new repl `here
<https://repl.it/languages/python>`_. Title it **module_4_practice.py**.

Complete the practice problems below on Repl.it. 

1) Make a variable `characters`, whose value is a list. Inside the list should
   be at least 5 names of your favorite book or TV characters, as strings.

2) Make a variable `furniture`, whose value is a list. Inside the list should
   be at least 4 names of pieces of furniture, as strings.

3) Make a variable `odd_nums`, whose value is a list. Inside the list should be
   5 odd numbers, as integers.

4) Make a variable `even_nums`, whose value is a list. Inside the list should be
   5 even numbers, as integers.

5) Make a variable `todo_list`, whose value is a list. Inside the list should be
   two things you need to accomplish today, as strings.

6) Append one character to your list called `characters`.

7) Append one piece of furniture to your list called `furniture`.

8) Append one odd integer to your list called `odd_nums`.

9) Append one even integer to your list called `even_nums`.

10) Append one To Do List item to your list called `todo_list`.

11) Make a list of the following numbers in the following order: 0, 1, 2, 3, 4,
    5, 6. Hover over the section below if you'd like a hint.

.. topic:: **Use the** `range` **built-in function**
  :class: hover-reveal

  The built-in function called `range` is very good at making lists of numbers.
  Use it!

12) Remove the last item from your `todo_list` variable using the list method
    called `pop`.

13) Remove the last item from your `furniture` variable using the list method
    called `pop`.

14) Using list indexing, print out the third odd number in your list called
    `odd_nums`. Remember, indices start at `0`, not `1`. So, what index does
    the third item have? Hover below to reveal.

.. topic:: **The third item has the index of 2**
  :class: hover-reveal

  Since the first item in your `odd_nums` list has the index of `0`, the
  second has the index of `1`, and the third has the index of `2`.

15) Using list indexing, print out the fifth even number in your list called
    `even_nums`. Remember, indices start at `0`, not `1`. So, what index does
    the fifth item have? Hover below to reveal.

.. topic:: **The fifth item has the index of 4**
  :class: hover-reveal

  Since the first item in your `odd_nums` list has the index of `0`, the
  second has the index of `1`, and so on, the fifth item has the index of
  `4`.

.. too hard

  16) Copy the following code into your ipython console. Then, print out the
      *first* item in the *first* nested list-- that is, print out the string
      ``"hamburger"``::

    >>> foods = [ ["hamburger", "hot dog"], ["cupcake", "cookie", "ice cream"] ]

  Hover below for a hint.

  .. topic:: **Use list indexing**
    :class: hover-reveal

    First start by printing the whole first list. You can do this with the
    following code::

      >>> print foods[0]
      ['hamburger', 'hot dog']

    Then, you can index *that* list::

      >>> print foods[0][0]
      hamburger

  17) Using the above list with a similar strategy as explained in the hints,
    print out the string ``"cookie"``.


16) Using the following code, print the fifth letter in the variable called
    `word1`-- the letter `c`. Do this using string indexing::

  >>> word1 = "delicious"

17) Using the following code, print the second letter in the variable called
    `word2`-- the letter `u`. Do this using string indexing::

  >>> word2 = "yummy"

18) Given the following list of numbers that are not in order, sort the list.
    You can do this using the list method called `sort`::

  >>> some_numbers = [4, 2, 1, 6, 8]

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

  >>> pizza_toppings = ['pepperoni', 'olives', 'mushrooms']
  >>> print pizza_toppings[3]

.. topic:: `IndexError` **since there is no item at index 3**
  :class: hover-reveal

  In order for a list to have something at the index of `3`, there would need to
  be *4 items* .

  +------------+-------+
  | Item Place | Index |
  +============+=======+
  | first item | 0     |
  +------------+-------+
  | second item| 1     |
  +------------+-------+
  | third item | 2     |
  +------------+-------+

  So, this code throws in `IndexError`.

  ::

    >>> pizza_toppings = ['pepperoni', 'olives', 'mushrooms']
    >>> print pizza_toppings[3]
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    IndexError: list index out of range

2) What's wrong with this code?

::

  >>> desserts = []
  >>> desserts.add('cupcake')

.. topic:: **Must use** `append` **to add an item to end of list**
  :class: hover-reveal

  The list method to use in order to add something to the end of a list is
  called `append`. Lists don't have a method called `add`.

  So, this code throws in `AttributeError`.

  ::

    >>> desserts = []
    >>> desserts.add('cupcake')
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    AttributeError: 'list' object has no attribute 'add'


3) What's wrong with this code?

::

  >>> desserts = []
  >>> print desserts[0]

.. topic:: `IndexError` **since there is no item at index 0**
  :class: hover-reveal

  In order for a list to have something at the index of `0`, there would need
  to be at *least* one item. An empty list has *nothing* at index 0.

  So, this code throws in `IndexError`.

  ::

    >>> desserts = []
    >>> print desserts[0]
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    IndexError: list index out of range

External Resources
==================

Videos
------

`Socratica Python Lists <https://www.youtube.com/watch?v=ohCDWZgNIU0>`_

`List Methods <https://www.youtube.com/watch?v=IdzKOVnTjVA>`_

- Note: This video goes a little beyond what this module covers, but it's a
  good video for those who'd like to go a bit further.


Final Assignment
================

Create a `new repl session
<https://repl.it/languages/python>`_ called **module_4_printing.py**.

Part 1
------

Ask the user as series of questions using **raw_input**, capturing their input
into appropriately-named variables. The questions should be

- Where would you like to travel to? Name one place.

- What is another place you'd like to travel to? Name one place.

- What is one more place you'd like to travel to? Name one place.

Add each piece of user input to an empty list that you create. Please make sure
to give the list an appropriate name.

Sort the list of places.

Then, tell the user where they said they'd like to go. Show each place on a
separate line.

Part 2
------

Copy the following list into your file::

  >>> fun_words = ["elephant", "balloon", "macchiato", "angostura"]

Then, make a two empty lists-- one called `first_letters` and one called
`third letters`.

Using list_indexing along with string_indexing, make a variable for the *first*
letter of each word in the `fun_words` list.

Need a hint?

.. topic:: **Double index**
  :class: hover-reveal

  If you index the `fun_words` list to get out a word, and then index the
  word to get out a letter, you're halfway there.

  ::

    first_word = fun_words[0]
    first_letter_first_word = first_word[0]

  All that's left is to put that letter into your first words list.

Part 3
------

Copy the following 3 lists into your file::

   >>> websites = ["facebook", "twitter", "buzzfeed"]
   >>> fruits = ["apple", "banana", "mango", "berry"]
   >>> names = ["Bob", "Alice", "Henry", "Rick", "Carl"]

Find the length of each of these lists, and store this value in three
separate variables.

Make an empty list called `lengths`.

Add each length to the `lengths` lists.

Part 4
------

Make a list of 25 numbers. Do not hard-code the numbers-- that is, don't
type out 25 numbers yourself. Review the lesson if you're not sure how to make a
list of numbers using Python.

Once you have your list of 25 numbers, print out the first, fifth, tenth, and
fifteenth item in your list.
