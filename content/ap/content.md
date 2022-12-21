# Arithmetic Progressions

## Introduction

> section: introduction
> id: intro
> description: Learn about some of the most fascinating patterns in mathematics, from triangle numbers to the Fibonacci sequence and Pascal’s triangle.
> trailer: u2vwpDVj5rU
> color: "#F97E08"
> level: Intermediate
> next: fractals

Many professions that use mathematics are interested in one specific aspect – _finding patterns_,
and being able to predict the future. Here are two examples:

::: column(width=160 parent="padded-thin")

    x-img(src="images/volcanoes.jpg" width=160 height=160 alt="Volcano")

::: column(width=400)

Geologists around the world want to predict __earthquakes__ and __volcano eruptions__. They can try
to find patterns in historical data of from seismographs, of the atmosphere, or even animal
behaviour. One earthquake, for example, might trigger aftershocks later.

::: column(width=160)

    x-img(src="images/finance.jpg" width=160 height=160 alt="Stock Market Charts")

::: column(width=400)

Bankers also look at historical data of stock prices, interest rates and currency  exchange rates
to estimate how __financial markets__ might change in the  future. Being able to predict if the
value of a stock will go up or down can be extremely lucrative!

:::

Professional mathematicians use highly complex algorithms to find and analyse all these patterns,
but for now, let’s start with something much simpler.

---
> id: simple-patterns

### Simple Sequences

In mathematics, a [__sequence__](gloss:sequence) is a chain of numbers (or other
objects) that usually follow a particular pattern. The individual elements in a
sequence are called [__terms__](gloss:sequence-term).

Here are a few examples of sequences. Can you find their patterns and calculate
the next two terms?

{.text-center.s-orange.with-arrows.no-voice} _{.n}3_, _{.n}6 *{span.arrow}+3*_,
_{.n}9 *{span.arrow(hidden)}+3*_, _{.n}12 *{span.arrow(hidden)}+3*_,
_{.n}15 *{span.arrow(hidden)}+3*_, _{.n}[[18]] *{span.arrow(hidden)}+3*_
_{.n}[[21]] *{span.arrow(hidden)}+3*_, …
_{span.pattern.reveal(when="blank-0 blank-1")}Pattern: “Add 3 to the previous
number to get the next one.”_

{.text-center.s-teal.with-arrows.no-voice} _{.n}4_, _{.n}10 *{span.arrow(hidden)}+6*_,
_{.n}16 *{span.arrow(hidden)}+6*_, _{.n}22 *{span.arrow(hidden)}+6*_,
_{.n}28 *{span.arrow(hidden)}+6*_, _{.n}[[34]] *{span.arrow(hidden)}+6*_,
_{.n}[[40]] *{span.arrow(hidden)}+6*_, …
_{span.pattern.reveal(when="blank-2 blank-3")} Pattern: “Add 6 to the previous
number to get the next one.”_

{.text-center.s-purple.with-arrows.no-voice} _{.n}3_, _{.n}4 *{span.arrow(hidden)}+1*_,
_{.n}7 *{span.arrow(hidden)}+3*_, _{.n}8 *{span.arrow(hidden)}+1*_,
_{.n}11 *{span.arrow(hidden)}+3*_, _{.n}[[12]] *{span.arrow(hidden)}+1*_,
_{.n}[[15]] *{span.arrow(hidden)}+3*_, …
_{span.pattern.reveal(when="blank-4 blank-5")} Pattern: “Alternatingly add 1 and
add 3 to the previous number, to get the next one.”_

{.text-center.s-lime.with-arrows.no-voice} _{.n}1_, _{.n}2 *{span.arrow(hidden)}×2*_,
_{.n}4 *{span.arrow(hidden)}×2*_, _{.n}8 *{span.arrow(hidden)}×2*_,
_{.n}16 *{span.arrow(hidden)}×2*_, _{.n}[[32]] *{span.arrow(hidden)}×2*_,
_{.n}[[64]] *{span.arrow(hidden)}×2*_, …
_{span.pattern.reveal(when="blank-6 blank-7")} Pattern: “Multiply the previous
number by 2, to get the next one.”_

---
> id: simple-patterns-1

The dots (…) at the end simply mean that the sequence can go on forever. When
referring to sequences like this in mathematics, we often represent every term
by a special [variable](gloss:variable):

    p.text-center.s-orange
      for i in [1, 2, 3, 4, 5, 6, 7]
        span.math.n
          msub
            mi x
            mn= i
        | ,&nbsp;
      | …

The small number after the _x_ is called a __subscript__, and indicates the
position of the term in the sequence. This means that we can represent the *n*th
term in the sequence by [[`x_n`|`x_i`|`x_2`]].

    // You might think that it would be easier to label the terms in the
    // sequence as _a_, _b_, _c_, _d_, and so on. However you’ll eventually
    // [[run out of letters|reach 100|forget a letter]], while the sequence
    // might go on forever!

---
> id: triangles

### Triangle and Square Numbers

Sequences in mathematics don’t always have to be numbers. Here is a sequence
that consists of geometric shapes – triangles of increasing size:

::: column(width=24 parent="padded-thin")
{.text-center.no-voice} __1__

    include svg/triangle-1.svg
::: column(width=52)
{.text-center.no-voice} __3__

    include svg/triangle-2.svg
::: column(width=80)
{.text-center.no-voice} __6__

    include svg/triangle-3.svg
::: column(width=108)
{.text-center.b.no-voice} [[10]]

    include svg/triangle-4.svg
::: column(width=136)
{.text-center.b.no-voice} [[15]]

    include svg/triangle-5.svg
::: column(width=164)
{.text-center.b.no-voice} [[21]]

    include svg/triangle-6.svg
:::

---
> id: triangle-1

At every step, we’re adding one more row to the previous triangle. The length of
these new rows also increases by one every time. Can you see the pattern?

{.text-center.s-orange.with-arrows.no-voice} _{.n}1_, _{.n}3 *{span.arrow}+2*_,
_{.n}6 *{span.arrow}+3*_, _{.n}10 *{span.arrow}+4*_,
_{.n}15 *{span.arrow}+5*_, _{.n}21 *{span.arrow}+6*_
_{.n}[[28]] *{span.arrow.reveal(when="blank-0")}+7*_,
_{.n}[[36]] *{span.arrow.reveal(when="blank-1")}+8*_, …

---
> id: recursive

We can also describe this pattern using a special [formula](gloss:formula):

    p.text-center.s-orange
      span.n.md `x_n`
      | &nbsp;=&nbsp;
      span.n.md `x_(n-1)`
      | &nbsp;+&nbsp;
      em#t3 n

To get the _n_-th triangle number, we take the [[previous|first|next]] triangle
number and add _n_. For example, if _n_&nbsp;=&nbsp;${n}{n|5|2,20,1}, the
formula becomes `x_var("n") = x_var("n-1") + var("n")`.

---
> id: recursive-1

A formula that expresses `x_n` as a function of previous terms in the sequence
is called a [__recursive formula__](gloss:sequence-recursive). As long as you
know the [[first term|last term|second term]] in the sequence, you can calculate
all the following ones.

---
> id: squares

    hr

Another sequence which consists of geometric shapes are the __square numbers__.
Every term is formed by increasingly large squares:

::: column(width=24 parent="padded-thin squares")
{.text-center.no-voice} __1__

    include svg/square-1.svg
::: column(width=50)
{.text-center.no-voice} __4__

    include svg/square-2.svg
::: column(width=76)
{.text-center.no-voice} __9__

    include svg/square-3.svg
::: column(width=102)
{.text-center.b.no-voice} [[16]]

    include svg/square-4.svg
::: column(width=128)
{.text-center.b.no-voice} [[25]]

    include svg/square-5.svg
::: column(width=154)
{.text-center.b.no-voice} [[36]]

    include svg/square-6.svg
:::

---
> id: square-1

For the triangle numbers we found a recursive formula that tells you the _next_
term of the sequence as a function of of its _previous_ terms. For square
numbers we can do even better: a formula that tells you the *n*th term
directly, without first having to calculate all the previous ones:

{.text-center.s-purple} *{.n}`x_n`* = _{x-equation(solution="n^2")}_

---
> id: explicit

This is called an [__explicit formula__](gloss:sequence-explicit).
We can use it, for example, to calculate that the 13th square number is [[169]],
without first finding the previous 12 square numbers.

---
> id: definitions

    hr

Let’s summarise all the definitions we have seen so far:

::: .theorem
A [__sequence__](gloss:sequence) is a list of numbers, geometric shapes or other
objects, that follow a specific pattern. The individual items in the sequence
are called [__terms__](gloss:sequence-term), and represented by variables like
`x_n`.

A [__recursive formula__](gloss:sequence-recursive) for a sequence tells you the
value of the *n*th term as a function of [[its previous terms|the first term]].
You also have to specify the first term(s).

An [__explicit formula__](gloss:sequence-explicit) for a sequence tells you the
value of the *n*th term as a function of [[just _n_|the previous term]],
without referring to other terms in the sequence.
:::

---
> id: action-sequence

### Action Sequence Photography

In the following sections you will learn about many different mathematical
sequences, surprising patterns, and unexpected applications.

First, though, let’s look at something completely different: __action sequence
photography__. A photographer takes many shots in quick succession, and then
merges them into a single image:

    figure: x-img(src="images/action-1.jpg" width=640 height=320 alt="Skiing Jump")

Can you see how the skier forms a sequence? The pattern is not addition or
multiplication, but a geometric [transformation](gloss:rigid-transformation).
Between consecutive steps, the skier is both translated and
[[rotated|reflected|dilated]].

---
> id: action-sequence-1

Here are a few more examples of action sequence photography for your enjoyment:

::: column(width=320 parent="padded-thin")

    x-img(src="images/action-2.jpg" width=320 height=160 credit="© Ray Demski" lightbox alt="Jumping Volleyball Player")

::: column(width=320)

    x-img(src="images/action-3.jpg" width=320 height=160 credit="© Ray Demski" lightbox alt="Wind Surfing")

::: column(width=320)

    x-img(src="images/action-4.jpg" width=320 height=160 credit="© Marcio Abe" lightbox alt="Snowboard Jump")

::: column(width=320)

    x-img(src="images/action-5.jpg" width=320 height=160 credit="© Jason Halayko" lightbox alt="Mountain Bike Jump")

::: column(width=320)

    x-img(src="images/action-6.jpg" width=320 height=160 credit="© Jason Halayko" lightbox alt="Mountain Bike Jump")

::: column(width=320)

    x-img(src="images/action-7.jpg" width=320 height=160 lightbox alt="Kite Surfing")

:::



--------------------------------------------------------------------------------



## Arithmetic and Geometric Sequences

> section: arithmetic-geometric
> id: halley

::: column.grow

In 1682, the astronomer [Edmond Halley](bio:halley) observed an unusual
phenomenon: a glowing white object with a long tail that moved across the night
sky. It was a __comet__, a small, icy rock that is flying through space, while
leaving behind a trail of dust and ice.

Halley remembered that other astronomers had observed similar comets much
earlier: one in 1530 and another in 1606. Notice that the gap between two
consecutive observations is the same in both cases: [[76]] years.

::: column(width=320)

    x-img(width=320 height=256 src="images/halley.jpg" alt="Halley’s Comet")
    p.caption Image of Halley’s Comet,#[br]taken in 1986 on Easter Island

:::

---
> id: halley-1

Halley concluded that all three observations were in fact of the same comet –
which is now called _Halley’s comet_. It is orbiting around the sun and passes
Earth approximately every 76 years. He also predicted when the comet would be
visible next:

{.text-center.s-orange.s-large.with-arrows.no-voice} _{span.n}1530_,
_{span.n}1606 *{span.arrow}+76*_, _{.n}1682 *{span.arrow}+76*_,
_{.n}1758 *{span.arrow}+76*_, _{.n}[[1834]] *{span.arrow}+76*_,
_{.n}[[1910]] *{span.arrow}+76*_, _{.n}[[1986]] *{span.arrow}+76*_, …

---
> id: halley-2

Actually, the time interval is not always _exactly_ 76 years: it can vary by one
or two years, as the comet’s orbit is interrupted by other planets. Today we
know that Halley’s comet was observed by ancient astronomers as early as 240 BC!

    figure
      .row
        x-img(src="images/halley-1.jpg" width=160 height=180)
        x-img(src="images/halley-2.jpg" width=173 height=180 lightbox)
        x-img(src="images/halley-3.jpg" width=200 height=180 lightbox)
        x-img(src="images/halley-4.jpg" width=130 height=180 lightbox)
      p.caption Depictions of Halley’s comet throughout time: a Babylonian tablet (164 BC), a medival tapestry (1070s), a science magazine (1910) and a Soviet stamp (1986).

---
> id: ball

A different group of scientists is investigating the behaviour of a bouncing
tennis ball. They dropped the ball from a height of 10 meters and measured its
position over time. With every bounce, the ball loses some of its original
height:

    x-coordinate-system(padding="12 12 24 120" width=640 height=320 x-axis="0,7,1" label-suffix="s,m" axis-names="time,height")
      .tennis-ball
      .tennis-ball
    x-slider(steps=400 speed=0.5)

---
> id: ball-1
> goals: reveals

The scientists noticed that the ball loses 20% of its height after every bounce.
In other words, the maximum height of every bounce is 80% of the previous one.
This allowed them to predict the height of every following bounce:

{.text-center.s-teal.s-large.with-arrows.no-voice} _{span.n}10_,
_{span.n}8 *{span.arrow}×0.8*_, _{.n}[[6.4]] *{span.arrow}×0.8*_,
_{span.n}[[5.12]] *{span.arrow}×0.8*_,
_{span.n.reveal}4.096 *{span.arrow}×0.8*_*{span.reveal},*
_{span.n.reveal}3.277 *{span.arrow}×0.8*_*{span.reveal},*
_{span.n.reveal}2.621 *{span.arrow}×0.8*_*{span.reveal},*
_{span.n.reveal}2.097 *{span.arrow}×0.8*_*{span.reveal}, …*

---
> id: arithmetic-geometric

### Definitions

If you compare both these problems, you might notice that there are many
similarities: the sequence of Halley’s comet has the same
[[difference|ratio|product]] between consecutive terms, while the
sequence of tennis ball bounces has the same [[ratio|difference|product]]
between consecutive terms.

---
> id: arithmetic-geometric-1

Sequences with these properties have a special name:

::: column.grow
::: .theorem.s-red

    p.text-center: include svg/comet.svg

An [__arithmetic sequence__](gloss:arithmetic-sequence) has a constant
__{.m-red}difference *d*__ between consecutive terms.

The same number is added or subtracted to every term, to produce the next one.

:::
::: column.grow
::: .theorem.s-green

    p.text-center: include svg/ball.svg

A [__geometric sequence__](gloss:geometric-sequence) has a constant
__{.m-green}ratio *r*__ between consecutive terms.

Every term is multiplied or divided by the same number, to produce the next.

:::
:::

---
> id: arithmetic-geometric-select

Here are a few different sequences. Can you determine which ones are arithmetic,
geometric or neither, and what the values of _{.b.m-red}d_ and _{.b.m-green}r_
are?

::: column(width=330 parent="ag-select")

{.text-center.s-grey.s-small.no-voice} _{span.n}2_, _{span.n}4_, _{span.n}8_,
_{span.n}16_, _{span.n}32_, _{span.n}64_, …

::: column(width=320)

{.no-voice} is [[geometric|arithmetic|neither]]_{span.reveal(when="blank-0")}, with
ratio [[2]]._

::: column(width=330)

{.text-center.s-grey.s-small.no-voice} _{span.n}2_, _{span.n}5_, _{span.n}8_,
_{span.n}11_, _{span.n}14_, _{span.n}17_, …

::: column(width=320)

{.no-voice} is [[arithmetic|geometric|neither]]_{span.reveal(when="blank-2")}, with
difference [[3]]._

::: column(width=330)

{.text-center.s-grey.s-small.no-voice} _{span.n}17_, _{span.n}13_, _{span.n}9_,
_{span.n}5_, _{span.n}1_, _{span.n}–3_, …

::: column(width=320)

{.no-voice} is [[arithmetic|geometric|neither]]_{span.reveal(when="blank-4")}, with
difference [[-4]]._

::: column(width=330)

{.text-center.s-grey.s-small.no-voice} _{span.n}2_, _{span.n}4_, _{span.n}7_,
_{span.n}11_, _{span.n}16_, _{span.n}22_, …

::: column(width=320)

{.no-voice} is [[neither|arithmetic|geometric]]_{span.reveal(when="blank-6")}._

::: column(width=330)

{.text-center.s-grey.s-small.no-voice} _{span.n}40_, _{span.n}20_, _{span.n}10_,
_{span.n}5_, _{span.n}2.5_, _{span.n}1.25_, …

::: column(width=320)

{.no-voice} is [[geometric|arithmetic|neither]]_{span.reveal(when="blank-7")}, with
ratio [[0.5]]._

:::

---
> id: arithmetic-geometric-graph

To define an arithmetic or geometric sequence, we have to know not just the
common difference or ratio, but also the initial value (called `a`). Here you
can generate your own sequences and plot their values on a graph, by changing
the values of `a`, _d_ and _r_. Can you find any patterns?

::: column.ag-chart(width=320)

#### {.m-red} Arithmetic Sequence

{.text-center.no-voice} `a` = ${a}{a|2|-10,10,0.2}, _d_ = ${d}{d|2|-10,10,0.2}

    hr

{.text-center.s-red.s-small.no-voice} _{span.n}${arithmetic(a,d,0)}_,
_{span.n}${arithmetic(a,d,1)}_, _{span.n}${arithmetic(a,d,2)}_,
_{span.n}${arithmetic(a,d,3)}_, _{span.n}${arithmetic(a,d,4)}_,
_{span.n}${arithmetic(a,d,5)}_, …

    x-coordinate-system(padding="12 12 24 40" width=320 height=240)
    x-gesture(target="#arithmetic-geometric-graph x-var" slide="100,0")

::: column.ag-chart.s-green(width=320)

#### {.m-green} Geometric Sequence

{.text-center.no-voice} `a` = ${b}{b|2|-10,10,0.2}, _r_ = ${r}{r|2|-10,10,0.2}

    hr

{.text-center.s-red.s-small.no-voice} _{span.n}${geometric(b,r,0)}_,
_{span.n}${geometric(b,r,1)}_, _{span.n}${geometric(b,r,2)}_,
_{span.n}${geometric(b,r,3)}_, _{span.n}${geometric(b,r,4)}_,
_{span.n}${geometric(b,r,5)}_, …

    x-coordinate-system.green(padding="12 12 24 40" width=320 height=240)

:::

{.reveal(when="var-0 var-1 var-2 var-3")} Notice how all __{.m-red}arithmetic
sequences__ look very similar: if the difference is positive, they steadily
[[increase|decrease]], and if the difference is negative, they steadily
[[decrease|increase]].

{.reveal(when="blank-0 blank-1")} Geometric sequences, on the other hand, can
behave completely differently based on the values of `a` and *r*:

::: column.frame.blue.text-center.reveal(when="blank-0 blank-1" animation="pop" width=220 parent="padded-thin")

If [`r > 1`](action:set(2,2)), the terms will [[quickly get bigger|quickly decrease|get closer to
zero]], _{span.reveal(when="blank-2")}up to infinity. Mathematicians say that the sequence
[__diverges__](gloss:sequence-divergence)._

::: column.frame.blue.text-center.reveal(when="blank-2" animation="pop" delay=200 width=220)

If [`–1 < r < 1`](action:set(10,0.6)), the terms will always [[get closer to 0|decrease to negative
infinity|get smaller]]. _{span.reveal(when="blank-3")}We say that the sequence
[__converges__](gloss:sequence-convergence)._

::: column.frame.blue.text-center.reveal(when="blank-3" animation="pop" delay=200 width=220)

If [`r < -1`](action:set(3,-1.4)), the terms will alternate between positive and
negative, while their [[absolute value|inverse|difference]] gets bigger.

:::

{.reveal(when="blank-4 blank-5")} You’ll learn more about convergence and
divergence in the [last section](/course/sequences/convergence) of this course.


---
> id: arithmetic-geometric-recursive

### Recursive and Explicit Formulas

In the previous section, you learned that a [__recursive
formula__](gloss:sequence-recursive) tells you the value of each term as a
function of previous terms. Here are the recursive formulas for arithmetic and
geometric sequences:

::: column.grow

{.text-center.no-voice} `x_n =` [[`x_(n-1) + d`|`x_(n-1) × d`|`x_d + n`]]

::: column.grow

{.text-center.no-voice} `x_n =` [[`x_(n-1) × r`|`x_(n-1) - r`|`x_n - r + n`]]

:::

---
> id: arithmetic-geometric-explicit

One problem with recursive formulas is that to find the 100th term, for example,
we first have to calculate the previous 99 terms – and that might take a long
time. Instead, we can try to find an [__explicit formula__](gloss:sequence-explicit),
that tells us the value of the *n*th term directly.

::: column.grow

For __{.m-red}arithmetic sequences__, we have to add _d_ at every step:

{.ag-equation.no-voice} `x_1 =` `a`

{.ag-equation.no-voice} `x_2 =` `a + d`

{.ag-equation.no-voice} `x_3 =` `a + d + d`

{.ag-equation.no-voice} `x_4 =` *{x-equation(solution="a+d+d+d")}*

{.ag-equation.no-voice.reveal(when="eqn-0")} `x_5 =` *{x-equation(solution="a+d+d+d+d")}*

{.reveal(when="eqn-1")} At the *n*th term, we are adding [[`n-1`|`n`|`n+1`]]
copies of _d_, so the general formula is

{.ag-equation.no-voice.reveal(when="blank-0")} `x_n = a + d × (n-1)`.

::: column.grow

For __{.m-green}geometric sequences__, we have to multiply _r_ at every step:

{.ag-equation.no-voice} `x_1 = a`

{.ag-equation.no-voice} `x_2 = a × r`

{.ag-equation.no-voice} `x_3 = a × r × r`

{.ag-equation.no-voice} `x_4 =` *{x-equation(solution="a×r×r×r")}*

{.ag-equation.no-voice.reveal(when="eqn-2")} `x_5 =` *{x-equation(solution="a×r×r×r×r")}*

{.reveal(when="eqn-3")} At the *n*th term, we are multiplying [[`n-1`|`n`|`n+1`]]
copies of _r_, so the general formula is

{.ag-equation.no-voice.reveal(when="blank-1")} `x_n = a × r^(n-1)`.

:::

---
> id: arithmetic-geometric-explicit-1

Here is a summary of all the definitions and formulas you’ve seen so far:

::: column.grow
::: .theorem.s-red

An __{.m-red}arithmetic sequence__ has first term `a` and common difference `d`
between consecutive terms.

{.text-center} __Recursive formula__: `x_n = x_(n-1) + d`

{.text-center} __Explicit formula__: `x_n = a + d × (n-1)`

:::
::: column.grow
::: .theorem.s-green

A __{.m-green}geometric sequence__ has first term `a` and common ratio `r`
between consecutive terms.

{.text-center} __Recursive formula__: `x_n = x_(n-1) × r`

{.text-center} __Explicit formula__: `x_n = a × r^(n-1)`

:::
:::

Now let’s have a look at some examples where we can use all this!

---
> id: pay-it-forward
> goals: video

### Pay it Forward

Here is a short clip from the movie _Pay it Forward_, where 12-year-old Trevor
explains his idea for making the world a better place:

    figure
      x-video(src="https://static.mathigon.org/videos/pay-it-forward.mp4" poster="images/pay-it-forward-poster.jpg" width=640 height=360 controls audio)
      .caption Extract from “Pay It Forward” (2000), © Warner Bros. Entertainment

---
> id: pay-it-forward-1

The essence of Trevor’s idea is that, if everyone “pays it forward”, a single
person can have a huge impact on the world:

    figure: img.invert(src="images/pay-it-forward.png" width=700 height=220)

Notice how the number of people at every step forms a [[geometric sequence|arithmetic
sequence|triangle number]], _{span.reveal(when="blank-0")}with common ratio [[3]]:_

{.text-center.s-orange.with-arrows.no-voice.reveal(when="blank-1")} _{span.n}1_,
_{span.n}3 *{span.arrow}×3*_, _{span.n}9 *{span.arrow}×3*_,
_{span.n}[[27]] *{span.arrow}×3*_, _{span.n}[[81]] *{span.arrow}×3*_,
_{span.n}[[243]] *{span.arrow}×3*_, …

---
> id: pay-it-forward-2

Using the [explicit formula](gloss:sequence-explicit) for geometric sequences,
we can work out how many new people are affected at any step:

{.text-center} `x_n` = _{x-equation(solution="3^(n-1)")}_

---
> id: pay-it-forward-3

The number of people increases incredibly quickly. In the 10th step, you would
reach 19,683 new ones, and after 22 steps you would have reached more people
than are currently alive on Earth.

This sequence of numbers has a special name: the __powers of 3__. As you can
see, every term is actually just a different [power](gloss:powers) of 3:

{.text-center.s-orange.no-voice} _{span.n}`3^0`_, _{span.n}`3^1`_, _{span.n}`3^2`_,
_{span.n}`3^3`_, _{span.n}`3^4`_, _{span.n}`3^5`_, …

---
> id: millionaire

### Who wants to be a Millionaire?

{.todo} COMING SOON!

    // Two siblings, Anna and Thomas, are receiving pocket money from their parents.
    // They can choose between two different options:

    // * Thomas is receiving $1 in the first month, $2s in the second month, $3 in the
    //   third month, and so on. Every month, he receives $1 more than in the previous
    //   one.
    // * Anna receives 1¢ in the first month, 2¢ in the second month

    // img.text-wrap(src="images/dishes.jpg" style="shape-outside: url(images/dishes.png)" width=280 height=276)

    // In order to make some additional pocket money, you decided to make a deal with
    // your parents: for appropriate payment, you’ll do every possible chore around
    // the house – washing the dishes, laundry, taking out the trash or walking the
    // dog.

    // The payment system works like this: on the first day, you get 1 cent. On the
    // second day, you get 2 cents – twice as much as before. On the next day you’ll
    // get 4 cents. Every day, your payment doubles.

    // 1¢ is not a lot of money – and neither are 2¢ or 4¢, especially
    // considering how much work you’re doing. But the amount will slowly increase.
    // How long do you think will it take until you’ve made $100? How long until
    // you’ve made it to 1 Million?

    // guess fields

    // Let’s try to calculate it mathematically! Just like before, your salary
    // follows an exponential model, because it changes by a constant ratio every
    // day (times 2). On day `x`, you’ll get `2^x` cents.

    // | __day__ | __payment__  |
    // | ------- | ------------ |
    // | 1       | $ 0.01       |
    // | 2       | $ 0.02       |
    // | 3       | $ 0.04       |
    // | 4       | $ [[0.08]]   |
    // | 5       | $ [[0.16]]   |
    // | 6       | $ [[0.32]]   |
    // | 7       | $ [[0.64]]   |
    // | 8       | $ 1.28       |
    // | 9       | $ 2.56       |
    // | 10      | $ 5.12       |
    // | 11      | $ 10.24      |
    // | 12      | $ [[20.48]]  |
    // | 13      | $ [[40.96]]  |
    // | 14      | $ [[81.92]]  |
    // | 15      | $ [[163.84]] |
    // | 16      | $ 327.68     |
    // | 17      | $ 655.36     |
    // | 18      | $ 1,310.72   |

    // One sibling gets $${a}{a|1|1,10,1} every day. The other sibling
    // gets ${b}{b|1|1,10,1}¢ every day.

    // As you can see, your daily payment start low but then grow rapidly. After 15
    // days you’ve reached $100. After less than a month you’re making more than 1
    // million per day, and after 2 months you’d have made more than _all the money
    // on Earth_. :1f4b0: :1f37e: :1f911:

    // Exponential growth can be truly XXXXX. Even if they start really slowly, they
    // will eventually speed up a lot, and overtake any possible linear model. Most
    // importantly, us humans tend to be very bad at estimating just _how fast_
    // exponential models can grow. Or are we?

---
> id: chessboard

### The Chessboard Problem

{.todo} COMING SOON!

    // The game of chess was invented in India, many hundreds of years ago. According
    // to legend, the Indian king loved the game so much that he invited its inventor
    // to his palace and promised him any present they ask for.

    // The inventor had just one simple request: rice. He wanted the king to place
    // one grain of rice on the first square of the chess board, two grains on the
    // second, four grains of the third, eight grains on the fourth, and so on. Every
    // new square should have twice as many grains of rice as the previous one.

    // The king, who was very wealthy, agreed immediately and asked his servants to
    // fetch bags of rice. A chessboard has 64 squares, so how many grains of rice
    // does the king need in total?

    // You might have noticed that the number of grains of rice form a geometric sequence.
    // The first term is [[1]], and the common ratio is [[2]]. Using the results from
    // above, we can calculate how many grains of rice there will be on the last square:

    // {.text-center} `a_64 = 1 * 2^63 =` 9 223 372 036 854 775 808

    // That’s 9 billion billion grains of rice! In total, they would weight about
    // 100 billion tonnes – or 100 times the weight of Mount Everest, the tallest
    // mountain on Earth.



--------------------------------------------------------------------------------


