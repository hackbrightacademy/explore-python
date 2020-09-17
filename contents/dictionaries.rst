=============================
Module 6: Python Dictionaries
=============================

Welcome
=======

In the last module, you learned about control flow. As you wade into more 
complicated waters, embrace the struggle. Approach each problem with 
curiosity and the confidence that --- with enough time, and allowing yourself 
to go down as many false paths as it takes --- you'll be able to figure it out. 
It's rare to see a complex problem and have a fully-formed, correct idea pop 
into your head; a big part of programming is trying things out and seeing what 
works. You'll be rewarded for your persistence.


Topics
------

- Introduction to dictionaries

- Dictionary basics

- Dictionary example


Lesson
======

Introduction to Dictionaries
----------------------------

Dictionaries are among the most interesting and useful Python data types.
They're a bit like lists, in that they're a **collection** of data. However in a
list, you access items by index:

.. code-block:: python

  >>> fruits = ['apple', 'berry', 'cherry']
  >>> print fruits[0]
  apple

In a dictionary, you access items by **key**. So dictionaries are actually a way
to store **pairs** of data, or **associations** between data (in some other
programming languages, this data structure is known as an "associative array").
Let's look at an example. Let's say you wanted to track how many of each type of
pet you have. You could make a dictionary that looks like this:

.. code-block:: python

  my_pets = {'dog': 2, 'cat': 7, 'fish': 4}

Then, if you wanted to know how many cats you have, you would access the number
like this:

.. code-block:: python

  >>> my_pets['cat']
  7

One key difference between lists and dictionaries: **dictionaries are not
ordered**. You may add items to a dictionary in a particular order, but Python
does not track that order (that's just not someting dictionaries do). So you
can't ask for dictionary items by index, the way you do for lists. You can only
ask for an item by key.

Dictionary Basics
-----------------

So, what can you do with dictionaries? Lots of things:

**Creating a dictionary**: You use curly braces (``{`` and ``}``) to create a
dictionary. Keys and values are separated by a colon (``:``) and commas separate
pairs of keys and values. With this in mind, let's have another look at our
earlier example:

.. code-block:: python

  my_pets = {'dog': 2, 'cat': 7, 'fish': 4}

You may also create an empty dictionary (say, if you live a pet-less life):

.. code-block:: python

  your_pets = {}

You can still add to this dictionary later.

**Accessing values by key**: As we saw in the section before, if you know a key,
you can access its corresponding value. For example, to find out how many fish
you have, you can use this syntax:

.. code-block:: python

  >>> my_pets['fish']
  4

**Adding to dictionaries**: If you want to add a key/value pair to a dictionary,
you use this syntax: ``dictionary_name[key] = value``. For example, if you
acquired a pair of llamas:

.. code-block:: python

  >>> my_pets['llama'] = 2
  >>> my_pets
  {'fish': 4, 'dog': 2, 'llama': 2, 'cat': 7}

Remember: dictionaries are un-ordered, so you can't predict the order that will
show when you examine the dictionary.

**Updating dictionaries**: You got another cat! Lucky you. You can update the
dictionary using the same syntax as adding to the dictionary:

.. code-block:: python

  >>> my_pets['cat'] = 8

What if you didn't know how many cats you had before? (Those suckers are hard to
track.) You can combine **accessing items** with **updating items** like this:

.. code-block:: python

  >>> my_pets['cat'] = my_pets['cat'] + 1

This is saying "set the value for the key 'cat' to be *whatever the value was
before* plus 1."

**Checking if a key exists in a dictionary**: What happens if you try to access
a key that doesn't exist? As you might expect, Python returns an error:

.. code-block:: python

  >>> my_pets['weasel']
  Traceback (most recent call last):
    File "<stdin>", line 1, in <module>
  KeyError: 'weasel'

However, you can check to see if a key exists in a dictionary before trying to
access it. You'll want to create a boolean expression (remember those?) with
this syntax: ``key in dictionary_name`` (you can also check to see if a key is
not in the dictionary with ``key not in dictionary_name``). This way you can
avoid the error:

.. code-block:: python

  >>> if 'weasel' in my_pets:
  ...    weasel_count = my_pets['weasel']
  ... else:
  ...    weasel_count = 0

  >>> print 'number of weasels in my menagerie:', weasel_count
  number of weasels in my menagerie: 0

**Iterating through dictionaries**: You can go through dictionary items
one-by-one using a similar syntax to lists. Every time through the for loop, your
placeholder variable (`animal` in the code below) will represent the next key in
the dictionary. You can access the value for that key from within the for loop.
That way, you can access all key/value pairs for the dictionary.

  >>> for animal in my_pets:
  ...     animal_count = my_pets[animal]
  ...     print animal, 'count:', animal_count
  fish count: 4
  dog count: 2
  llama count: 2
  cat count: 9


A Dictionary Example
--------------------

Let's use a dictionary to sort words in a sentence by word length. In the
`my_pets` dictionary example above, the keys were strings, and the values were
integers. For this example, the keys will be integers (word length), and the
values will be **lists** of strings with that word length. (When working with
dictionaries, it's a good idea to think about what the keys will be and what the
values will be before you start.) Let's check it out.

First, let's create an empty dictionary to store the word lengths, and a
variable for the sentence.

.. code-block:: python

  >>> word_lengths = {}
  >>> sentence = 'I once knew a gal from Nantucket.'

.. are we going to talk about string splitting in intermediate?
Now, we'll have to split the sentence into a list of word strings, so we can
look at the word strings one-by-one.

.. code-block:: python

  >>> sentence_words = sentence.split()

Then we'll iterate through each word in the sentence and look at its length. If
that word length already exists as a key in the dictionary, we can add the word
to the list for that key's value. Otherwise, we will need to create a new
key/value pair for that length before adding the new word.

.. code-block:: python

  >>> for word in sentence_words:
  ...     # get the word length
  ...     word_len = len(word)
  ...
  ...     # is that word length in the dictionary?
  ...     if word_len not in word_lengths:
  ...         # if not, let's add it, with an empty list for a value
  ...         word_lengths[word_len] = []
  ...
  ...     # Now that we know the word length exists in the dict (since it
  ...     # was either there before, or we just added it), we can add the
  ...     # word to the value list for that length
  ...     word_lengths[word_len].append(word)

The first time through the loop, *word* will be 'I', and *word_len* will be 1.
Is 1 a key in the *word_lengths* dictionary? Nope, because the dictionary is
empty at this point. So the conditional will be true, and we will add a
key/value pair to the dictionary:

.. code-block:: python

  word_lengths[1] = []

and *word_lengths* now looks like this:

.. code-block:: python

  {1: []}

After that, we will add the word 'I' to the (empty) list for word_lengths[1].
So, at the end of the first iteration of the loop, *word_lengths* looks like
this:

.. code-block:: python

  {1: ['I']}

The next word? 'once'. This word has length 4, which is also not in the
dictionary yet. So the same thing will happen as with the first word: the
dictionary gets another key (4) whose value will be a list containing the word
'once'. Now *word_lengths* looks like this:

.. code-block:: python

  {1: ['I'], 4: ['once']}

The next word is 'knew'. Now things are starting to get interesting, because
this word's length --- 4 --- is already a key in the *word_lengths* dictionary.
So the boolean expression in the conditional evaluates to false, and no new key
is added to the dictionary. But: the word 'knew' is appended to the value for
the key 4, so *word_lengths* looks like this after the third iteration:

.. code-block:: python

  {1: ['I'], 4: ['once', 'knew']}


After the loop has gone through each word in *sentence_words*, *word_lengths*
will look like this:

.. code-block:: python

  {1: ['I', 'a'], 3: ['gal'], 4: ['once', 'knew', 'from'], 10: ['Nantucket.']}


Dictionaries! The amazing sorting machines!


Practice Section
================

Directions
----------

Login to your account and start a new repl `here
<https://repl.it/languages/python>`_. Title it **module_6_practice.py**.

Complete the practice problems below on Repl.it.

1) Create an empty dictionary called *soccer_team*

2) Add a string value (of your choice) for the key *'team_name'*

3) Add an integer value for the key *'team_ranking'*, indicating the team's
   ranking in the league (1 being highest, 12 being lowest).

4) Add a list value for the key *'player_names'* --- the list should contain at
   least three player names.

5) Uh oh. The team lost a game. Update the team ranking to be one more than it
   was before (bonus: do this in a way that it would work even if you didn't know
   what the number happened to be before).

6) New player! Add 'David Beckham' to the *'player_names'* list.

7) Write a conditional that prints 'Hooray!' if the team ranking is 3 or better,
   and prints 'Better luck next time' if the team ranking is 4 or worse.

8) Write a loop that prints each player's name.

9) Write a conditional expression that prints out the team color if the key
   'team_color' exists; otherwise print out 'The team is currently colorless.'

10) Add a *'team_color'* key and whatever color you want (as a string) for a
    value. Then run the conditional in (9) again to see it print the color.

11) Iterate over the *soccer_team* dictionary and print each key and value. You
    don't need to print each player individually when it gets to the player list;
    you can simply print out the list as a whole.

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

  >>> spanish_to_english = { 'hola': 'hello', 'adios': 'goodbye', 'paz': 'peace'}
  >>> second_word = spanish_to_english[2]

.. topic:: **Dictionaries are unordered**
  :class: hover-reveal

  You can't reference dictionary items by index, because dictionaries are
  unordered. You can only reference dictionary items by key.

  .. code-block:: Python

    >>> second_word = spanish_to_english[2]
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    KeyError: 2

  If you want to know the English word corresponding to 'adios', you would
  reference it this way: ``spanish_to_english['adios']``.

2) What's wrong with this code?

.. code-block:: Python

  >>> program_count = { 'Python': 5, 'JavaScript': 2, 'Swift': 1 }
  >>> total_program_count = 0
  >>> for value in program_count:
  ...     total_program_count = total_program_count + value
  ...
  >>> print 'total program count:', total_program_count

.. topic:: **Dictionaries iterate over keys**
  :class: hover-reveal

  When you iterate over a Python dictionary, you are iterating over the
  **keys**, not the values. Even though the programmer chose to call the
  variable *value*, it's actually going to represent 'Python', 'JavaScript' or
  'Swift' -- not 5, 2, or 1.

  .. code-block:: Python

    >>> for value in program_count:
    ...     total_program_count = total_program_count + value
    ...
    Traceback (most recent call last):
      File "<stdin>", line 2, in <module>
    TypeError: unsupported operand type(s) for +: 'int' and 'str'

  Since *value* is a string ('Python', 'JavaScript', or 'Swift', depending on
  which iteration), and *total_program_count* is an int (0), Python indicates
  that it can't add these two variable data types. If you got this, give
  yourself a pat on the back. It was a tough one!


External Resources
==================

Videos
------

`Python Dictionaries <https://www.youtube.com/watch?v=XCcpzWs-CI4&list=PLi01XoE8jYohWFPpC17Z-wWhPOSuh8Er-&index=15>`_


Final Assignment
================

Create a `new repl session
<https://repl.it/languages/python>`_ called **module_6_printing.py**.  

Create a dictionary called *cake_ingredients*. Each **key** should be an 
ingredient (such as 'butter'), and each **value** should be the number of 
cups of that ingredient that you need. Here are the ingredients for a cake 
that you can use:

- butter: 1 cup

- shortening: 0.5 cup

- sugar: 3 cups

- egg substitute: 1.5 cups

- flour: 3 cups

- milk: 1 cup

- salt: 0.01 cup

- baking powder: 0.01 cup

(Most bakers would call 0.01 cup "half a teaspoon". ;-) )

Iterate through through the dictionary, and print out each ingredient and how
many cups you would need to make **two** cakes.

Then, ask the user for an ingredient. If the user enters an ingredient that is
in this cake, return the number of cups for one cake. If the user enters an
ingredient that isn't in this cake, return a message that the ingredient isn't
in the cake.

Your output should look something like this (it's ok if you end up with a
different order of ingredients):

.. parsed-literal::
  :class: console

  To make two cakes, you need:
  2 cups of butter
  1 cups of shortening
  6 cups of sugar
  3 cups of egg substitute
  6 cups of flour
  2 cups of milk
  0.02 cups of salt
  0.02 cups of baking powder
  What ingredient do you want to know about? sugar
  One cake has 3 cups of sugar.

If you run the file again, it might look like this:

.. parsed-literal::
  :class: console

  To make two cakes, you need:
  2 cups of butter
  1 cups of shortening
  6 cups of sugar
  3 cups of egg substitute
  6 cups of flour
  2 cups of milk
  0.02 cups of salt
  0.02 cups of baking powder
  What ingredient do you want to know about? gym socks
  This cake does not contain gym socks.
