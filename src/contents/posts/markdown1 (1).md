---
title: Amantes Sunt Amentes
published: 2023-10-01
description: A simple example of a Markdown blog post.
tags: [Markdown, Blogging]
category: Examples
draft: false
---

# An h1 header

Paragraphs are separated by a blank line.

2nd paragraph. _Italic_, **bold**, and `monospace`. Itemized lists
look like:

- this one
- that one
- the other one

Note that --- not considering the asterisk --- the actual text
content starts at 4-columns in.

> Block quotes are
> written like so.
>
> They can span multiple paragraphs,
> if you like.

Use 3 dashes for an em-dash. Use 2 dashes for ranges (ex., "it's all
in chapters 12--14"). Three dots ... will be converted to an ellipsis.
Unicode is supported. ☺

## An h2 header

<div style="display: flex; justify-content: center; align-items: center;">
    <p align="left">
    Мне холодно на улице и Солнце<br/>
    В тени равно себе вне тени<br/>
    Хотя бы тело согревает душу
    </p>
</div>

<div style="display: flex; justify-content: center; align-items: center;">
    <p align="left">
    Одуванчики, облетая на год вперёд,<br/>
    обеспечивают зиму снегом:<br/>
    семена вознаются в небосвод<br/>
    и остротой прорастают в звёзды,<br/>
    а пушистым — тяжёлым —  <br/>
    тянутся вниз, к земле:<br/>
    обретается снег.<br/>
    Ах, было бы это правдой!<br/>
    Мы бы в метель задохнулись.
    </p>
</div>

<div style="display: flex; justify-content: center; align-items: center;">
    <p align="left">
    Как при крушении шторма<br/>
    В обоюдном трепете тонут<br/>
    Волна и корабль<br/>
    <br/>
    Так в истончение ночи<br/>
    Погружались и мы<br/>
    </p>
</div>

### An h3 header

Now a nested list:

1. First, get these ingredients:

    - carrots
    - celery
    - lentils

2. Boil some water.

3. Dump everything in the pot and follow
    this algorithm:

        find wooden spoon
        uncover pot
        stir
        cover pot
        balance wooden spoon precariously on pot handle
        wait 10 minutes
        goto first step (or shut off burner when done)

    Do not bump wooden spoon or it will fall.

Notice again how text always lines up on 4-space indents (including
that last line which continues item 3 above).

Here's a link to [a website](http://foo.bar), to a [local
doc](local-doc.html), and to a [section heading in the current
doc](#an-h2-header). Here's a footnote [^1].

[^1]: Footnote text goes here.

Tables can look like this:

size material color

---

9 leather brown
10 hemp canvas natural
11 glass transparent

Table: Shoes, their sizes, and what they're made of

(The above is the caption for the table.) Pandoc also supports
multi-line tables:

---

keyword text

---

red Sunsets, apples, and
other red or reddish
things.

green Leaves, grass, frogs
and other things it's
not easy being.

---

A horizontal rule follows.

---

Here's a definition list:

apples
: Good for making applesauce.
oranges
: Citrus!
tomatoes
: There's no "e" in tomatoe.

Again, text is indented 4 spaces. (Put a blank line between each
term/definition pair to spread things out more.)

Here's a "line block":

| Line one
| Line too
| Line tree

and images can be specified like so:

[//]: # '![example image](./demo-banner.png "An exemplary image")'

Inline math equations go in like so: $\omega = d\phi / dt$. Display
math should get its own line and be put in in double-dollarsigns:

$$I = \int \rho R^{2} dV$$

And note that you can backslash-escape any punctuation characters
which you wish to be displayed literally, ex.: \`foo\`, \*bar\*, etc.
