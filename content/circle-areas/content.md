# Areas Related To Circles

## Introduction

> section: intro
> color: "#EB4726"
> level: Advanced

You are already familiar with some methods of finding perimeters and areas of simple
plane figures such as rectangles, squares, parallelograms, triangles and circles from
your earlier classes. Many objects that we come across in our daily life are related to
the circular shape in some form or the other. Cycle wheels, wheel barrow (thela),
dartboard, round cake, papad, drain cover, various designs, bangles, brooches, circular
paths, washers, flower beds, etc. are some examples of such objects (see Fig. 12.1).
So, the problem of finding perimeters and areas related to circular figures is of great
practical importance. In this chapter, we shall begin our discussion with a review of
the concepts of perimeter (circumference) and area of a circle and apply this knowledge
in finding the areas of two special ‘parts’ of a circular region (or briefly of a circle)
known as sector and segment. We shall also see how to find the areas of some
combinations of plane figures involving circles or their parts.

---

## Perimeter and Area of a Circle — A Review

> section: perimeter


Recall that the distance covered by travelling once around a circle is its perimeter,
usually called its circumference. You also know from your earlier classes, that
circumference of a circle bears a constant ratio with its diameter. This constant ratio
is denoted by the Greek letter π (read as ‘pi’). 

Before we go into details, let us see if we understand the standard terminology of circles. Though we know that pi is approximately 3.14, what does it mean visually. How does it relate to circles.

Consider a circle whose diameter is 1 unit. That is d=2*r=1 unit. The circumference or perimeter of a circle is nothing but someone walking around the circle. It can be visualized as unrolling a circle as below.

::: column.grow

    x-img(src="images/perimeter.gif" width=400 height=150)

:::

As you can see, a circle whose diameter is 1 has a circumference of π. Similarly a circle whose diameter is 2 will have a circumference of [[2π|3π|π]].

So a circle with a diameter of d will have a circumference of [[2]]*d.

::: .theorem
`circumference/diameter= pi`

`circumference= pi * diameter`

`circumference= pi * 2r`

`circumference= 2*pi*r`
:::

π is an irrational number and its decimal expansion is non-terminating and
non-recurring (non-repeating). However, for practical purposes, we generally take
the value of π as 22/7 or 3.14, approximately.

Another way to look at the circumference of a circle is as below. We know that the angle made by an arc of a circle with the same length as its radius is 1 [[radian]]. Visually we can represent it as below.



    x-img(src="images/circle-radians.gif" width=300 height=300)


As you can see, if we take the radius of the circle and bend it over the circle and traverse the circle, to cover half the circle we travel approximately 3.14 *r or π *r  and to travel the whole circle we travel 2π *r distance.

---
> id: area
> goals: slider

### The Area of a Circle

But how do we actually calculate the area of a circle? Let’s try the same technique we used for
[finding the area of quadrilaterals](/course/polyhedra/quadrilaterals): we cut the shape into
multiple different parts, and then rearrange them into a different shape we already know the area
of (e.g. a rectangle or a triangle).

The only difference is that, because circles are curved, we have to use some
approximations:

::: column(width=340)

    svg.circle-area.red(width=340 height=245)
      defs
        marker#area-arrow(refX=4 refY=4 markerWidth=5 markerHeight=8 orient="auto-start-reverse")
          path(d="M 1 1 L 4 4 L 1 7" stroke-width=1)
      g.labels
        line.reveal(x1=62 y1=158 x2=62 y2=212 marker-start="url(#area-arrow)" marker-end="url(#area-arrow)" when="blank-1")
        line.reveal(x1=80 y1=226 x2=268 y2=226 marker-start="url(#area-arrow)" marker-end="url(#area-arrow)" when="blank-2")
        text.reveal(x=50 y=190 when="blank-1") r
        text.reveal(x=165 y=241 when="blank-2") πr
    x-slider(steps=400)

::: column.grow

Here you can see a circle divided into ${toWord(n1)} wedges. Move the slider,
to line up the wedges in one row.

{.reveal(when="slider")} If we increase the number of wedges to ${n1}{n1|6|6,30,2},
this shape starts to look more and more like a [[rectangle|circle|square]].

{.reveal(when="blank-0")} The height of the rectangle is equal to the
[[radius|circumference|diameter]] of the circle.
_{span.reveal(when="blank-1")} The width of the rectangle is equal to
[[half the circumference|the circumference|twice the radius]] of the circle._
_{span.reveal(when="blank-2")} (Notice how half of the wedges face down and
half of them face up.)_

{.reveal(when="blank-2" delay=1000)} Therefore the total area of the rectangle
is approximately `A = π r^2`.

:::

---
> id: area-1
> goals: slider

::: column(width=340)

    svg.circle-area.blue(width=340 height=245)
      g.labels
        line.reveal(x1=20 y1=156 x2=20 y2=206 marker-start="url(#area-arrow)" marker-end="url(#area-arrow)" when="blank-1")
        line.reveal(x1=34 y1=218 x2=355 y2=218 marker-start="url(#area-arrow)" marker-end="url(#area-arrow)" when="blank-2")
        text.reveal(x=10 y=185 when="blank-1") r
        text.reveal(x=165 y=236 when="blank-2") 2πr
    x-slider(steps=400)

::: column.grow

Here you can see a circle divided into ${toWord(n)} rings. Like before, you can
move the slider to “uncurl” the rings.

{.reveal(when="slider")} If we increase the number of rings to ${n2}{n2|4|2,12,1},
this shape starts to look more and more like a [[triangle|rectangle|trapezium]].

{.reveal(when="blank-0")} The height of the triangle is equal to the
[[radius|diameter|circumference]] of the circle.
_{span.reveal(when="blank-1")} The base of the triangle is equal to [[the
circumference|twice the diameter]] of the circle._
_{span.reveal(when="blank-2")} Therefore the total area of the triangle is
approximately_

{.text-center.reveal(when="blank-2")} `A = 1/2 "base" × "height" = π r^2`.

:::

---
> id: area-2

If we could use infinitely many rings or wedges, the approximations above would
be perfect – and they both give us the same formula for the area of a circle:

{.text-center.r} `A = π r^2`.
[Continue](btn:next)

Please watch the video below on how we can visualize breaking up the circle into small chunks and converting it to a rectangle so that we can calculate the area of circle in terms of a rectangular area which we know.


    iframe(type='text/html' width='640' height='390'
    src='https://www.youtube.com/embed/YokKp3pwVFc'
    frameborder='0')



---

## Areas of Sector and Segment of a Circle

---
> id: earth-arc

### Arcs and Sectors

::: column.grow

Most scientists in ancient Greece agreed that the Earth is a sphere. There was
plenty of evidence: from ships disappearing behind the horizon at sea, to the
circular motion of stars during the night.

Unfortunately, no one knew exactly _how big_ Earth was – until around 200 BC,
when the mathematician [Eratosthenes](bio:eratosthenes) found an ingenious way
to measure Earth’s radius, using basic geometry. All we need is a bit more
knowledge about arcs and sectors of a circle.

::: column(width=280)

    x-solid(size=280 rotate="0.5")

:::

---
> id: arcs

::: column(width=280)

    x-geopad.sticky(width=280 height=280): svg
      circle(x="point(140,140)" name="c")
      path(x="circle(c,100)" name="circ")
      circle.move(cx=240 cy=140 name="a" project="circ" label="A")
      circle.move(cx=85 cy=60 name="b" project="circ" label="B")

      path.yellow.fill(x="sector(c,b,angle(b,c,a).rad).minor" label="Sector" target="sector" label-class="white")
      path.red.thick(x="arc(c,b,angle(b,c,a).rad).minor" label="Arc" target="arc")
      path.purple.thick.transparent(x="arc(c,a,2*pi-angle(b,c,a).rad).major" target="major")

::: column.grow

As you can see in the diagram, an [{.red} arc](target:arc) is a part of the
[[circumference|diameter|tangent]] of a circle, and a [{.yellow} sector](target:sector)
is a part of the [[interior|radius|perimeter]] of a circle.

::: .reveal(when="blank-0 blank-1")
The arc between two points _A_ and _B_ is often written as `arc(AB)`. This
definition is slightly ambiguous: there is a [{.purple} second arc](target:major)
that connects _A_ and _B_ but goes the other way around the circle.

The smaller of the two arcs is called the __minor arc__, and the larger one is
called the __major arc__. If points _A_ and _B_ are exactly opposite each other,
both arcs have the same length and are [[semicircles|diameters|circumferences]].
:::

:::

---
> id: arcs-1

::: column.grow

To find the length of an arc or the area of a sector, we need to know about the
corresponding angle at the center of the circle: this is called the
[{.blue.b} central angle](target:angle).

Notice how the arc, sector and angle all take up the _same proportion_ of a full circle. For
example, if the [{.blue} central angle](target:angle) is [90°](action:set90Deg()), it takes up
[[one quarter|one half|one third]] of a [{.teal} full circle](target:fangle).

::: .reveal(when="blank-0")
This means that the [{.red} length of the arc](target:arc) is also `1/4` of the
[{.purple} whole circumference](target:circ) of the circle, and the [{.yellow} area
of the sector](target:sector) is `1/4` of the [{.orange} whole area](target:area) of
the circle.

We can express this relationship in an equation:

{.text-center} `"arc length" / "circumference" = blank("sector area","circle radius","arc area") / "circle area" = "central angle" / blank("360°","180°","90°")`
:::

::: column(width=280)

    x-geopad.sticky(width=280 height=280): svg
      circle(x="point(140,140)" name="c")
      path(x="circle(c,100)" name="circ")
      circle.move(cx=240 cy=140 name="a" project="circ")
      circle.move(cx=85 cy=60 name="b" project="circ")

      path.yellow.fill(x="sector(c,b,angle(b,c,a).rad)" label="Sector" target="sector" label-class="white")
      path.red.thick(x="arc(c,b,angle(b,c,a).rad)" label="Arc" target="arc")
      path.fill.blue(x="angle(b,c,a)" target="angle")

      path.fill.orange.transparent(x="circ" target="area")
      path.thick.purple.transparent(x="circ" target="circ")
      path.teal.fill.transparent(x="circle(c,32)" target="fangle")

:::

---
> id: arcs-2

Now we can rearrange these equations to find whichever variable we’re interested
in. For example,

::: column(width=320 parent="padded-thin")

| [arc length](pill:red) | = | `"circumference" × c/360` |
|                        | = | `2 π r × c/360`          |
{.eqn-system}

::: column(width=320)

| [sector area](pill:yellow) | = | `"circle area" × c/360` |
|                            | = | `π r^2 × c/360`         |
{.eqn-system}

:::

where _r_ is the radius of the circle, and _c_ is the size of the central
angle.

    // What the formulae are doing is taking the area of the whole circle, and
    // then taking a fraction of that depending on what fraction of the circle
    // the sector fills.

    // The length of an arc is the distance along the curved line of the
    // circumference of the circle. It is slightly longer than the straight
    // line connecting the same two points (the chord).

---
> id: arcs-rad

If the central angle is measured in [radians](gloss:radians) rather than
[degrees](gloss:degrees), we can use the same equations, but have to replace
360° with [[`2 π`|`1/2 π`|`π`]]:

::: .reveal(when="blank-0")
::: column(width=320 parent="padded-thin")

| [arc length](pill:red) | = | `2 π r × c/(2π)` |
|                        | = | `r × c`          |
{.eqn-system}

::: column(width=320)

| [sector area](pill:yellow) | = | `π r^2 × c/(2π)` |
|                            | = | `1/2 r^2 c`      |
{.eqn-system}

:::

Notice how the equations become much simpler, and _π_ cancels out everywhere.
This is because, as you might recall, the [definition of
radians](/course/circles/radians#radians) is basically the length of an
arc in a circle with radius 1.

Now let’s see how we can use arcs and sectors to calculate the circumference of
the Earth. [Continue](btn:next)
:::

---
> id: eratosthenes

In ancient Egypt, the city of _Swenet_ was located along the Nile river. Swenet was
famous for a well with a curious property: there was one moment every year when
the sunlight reached the very bottom of the well – at noon on 21 June, the day
of the _summer solstice_. At that precise time, the bottom of the well was
illuminated, but not its sides, meaning that the Sun was standing directly above
the well.

::: column(width=300)

    x-img(src="images/egypt-map.jpg" width=300 height=300 lightbox credit="© Google Maps")

{.caption} Ancient Egyptians measured long distances by counting the number of
steps it took to walk.

::: column(width=300)

    x-img(src="images/well.jpg" width=300 height=300 lightbox)

{.caption} Some sources say the “Well of Eratosthenes” was on _Elephantine
island_ on the Nile river.

:::

The mathematician [Eratosthenes](bio:eratosthenes) lived in _Alexandria_, about
800\ km north of Swenet, where he was director of the Great Library. In the city
centre of Alexandria stood an obelisk, a tall, narrow monument with a
pyramid-shaped top.

Eratosthenes noticed that at noon on the day of the summer solstice, the obelisk threw a shadow –
meaning that the sun was _not_ directly above it. He deduced that this was because of the curvature
of the Earth, and realised it could be used to calculate our planet’s circumference.

---
> id: eratosthenes-1

::: column.grow

{.r} Here you can see the well in Swenet as well as the obelisk in Alexandria.
The sun rays fall directly into the well, but hit the obelisk at an angle and
cast a shadow. [Continue](btn:next)

::: .reveal(when="next-0")
Eratosthenes measured that the [{.teal} angle](target:angle1) of the shadow was
7.2°. This is the same as the [{.purple} central angle](target:angle2) of the
[{.red} arc](target:arc) from Alexandria to Swenet, because they are
[[alternating|vertical|corresponding]] angles.
:::

::: .reveal(when="blank-0")
Now we can use the equation for arc length that we derived above:

{.text-center} `pill("arc length","red","arc") / pill("circumference","blue","circ") = (input(7.2)"°") / "360°"`
:::

::: .reveal(when="blank-1")
If we rearrange this, we find that the circumference of the Earth is

{.text-center} `pill("circumference","blue","circ") = "360°" / "7.2°" × pill("800 km","red","arc") = input(40000) "km"`
:::

::: .reveal(when="blank-2")
Finally, we know that the circumference of a circle is `C = 2 pi r`, so the
radius of Earth is

{.text-center} `r_"Earth" = (40000 "km") / (2 pi) ≈ 6400 "km"`.
:::

::: column(width=300)

    x-geopad.sticky(width=300 height=400)
      img.sunrays(src="images/sunlight.png" width=300 height=400)
      svg.r
        defs: radialGradient#grad1(cx=200 cy=200 r=200 gradientUnits="userSpaceOnUse")
          stop(offset=0 stop-color="#63a3ff")
          stop(offset=1 stop-color="#0f82f2")

        circle(x="point(150,250)" name="c" hidden)
        circle(x="point(150,120)" name="a" hidden)
        circle.move.pulsate(cx=80 cy=140 name="b" project="arc(c,point(64,155),1.47)")
        circle(x="c.add(b.subtract(c).scale(1.465))" name="d" hidden)

        path.shadow(x="triangle(c,d,point(d.x,c.y))")
        path.earth(d="M153,120,152,150h-4l-.95-30a130,130,0,1,0,5.9,0Z" fill="url(#grad1)")
        path.earth-cover.fill(x="circle(c,130)")

        path.red.thick.reveal(when="next-0" animation="draw" x="arc(c,b,angle(b,c,a).rad).minor" target="arc")
        path.fill.teal.reveal(when="next-0" x="angle(c,d,point(d.x,c.y)).sup" target="angle1")
        path.fill.purple.reveal(when="next-0" x="angle(b,c,a).sup" name="ang" target="angle2")
        path.thin.white.reveal(when="next-0" animation="draw" x="segment(c,b)")
        path.blue.transparent(x="circle(c,130)" target="circ")

        image.obelisk.var(xlink:href="images/obelisk.svg" height=60 width=8 style="transform: translate(${b.x-4}px, ${b.y-60}px) rotate(-${angle(b,c,a).rad}rad)")

:::

---
> id: eratosthenes-2

Eratosthenes’ measurement was one of the most important experiments in
antiquity. His estimate of Earth’s size was surprisingly accurate, especially
when considering that he only had access to very basic measuring tools.

::: column(width=280)

    x-img(src="images/obelisk.jpg" width=280 height=450 lightbox)

::: column.grow

Of course, it can be difficult to translate his original results into modern
units like kilometres. In ancient Greece, distance was measured in _stadia_
(approximately 160 m), but there was no universal standard. Every area had a
slightly different version, and we don’t know which one Eratosthenes used.

In the following centuries, scientists tried to use other methods to calculate
the radius of Earth – sometimes with very different, and incorrect results.

It was one of these incorrect measurements that prompted Christopher Columbus to
sail west from Portugal. He assumed that Earth was much smaller than it actually
is, and hoped to reach India. In fact, he arrived at a different continent in
between: the Americas.

:::

---

### Segments

The last part of a circle that we can find the area of is called a segment, not
to be confused with a line segment. A [{.red.b} segment](target:segment) of a circle is the area of a
circle that is bounded by a [{.yellow.b} chord](target:chord) and the [{.green.b} arc](target:arc) with the same endpoints as the
chord.

::: column(width=300)

    x-geopad.sticky(width=300 height=300): svg
      circle(x="point(150,150)" name="x" label="O")
      path.black(x="circle(x,100)" name="c")
      path.teal.fill(x="sector(x,d1,pi/2.5)" target="sector"  label="Sector" label-class="white")
      path.teal(x="triangle(x,b1,b2)" name="tri" target="triangle")
      path.purple.fill(x="arc(x,b1,pi/2.5)" target=" sector segment"  label="Segment")
      circle.red(x="c.at(0.2)" name="b1" label="B" target="chord" animation="pop")
      circle.red(x="c.at(0.4)" name="b2" label="A" target="chord"  animation="pop")
      path.green.thick(x="segment(b1,b2)" target="sector chord"  animation="draw")
      path.black(x="circle(x,100)" name="c")
      circle.yellow(x="c.at(0.2)" name="d1" target="arc" animation="pop")
      circle.yellow(x="c.at(0.4)" name="d2" target="arc" animation="pop")
      path.yellow.thick(x="arc(x,d1,pi/2.5)" target="arc"  animation="draw")
:::

Now let us take the case of the area of the segment APB of a circle with centre O and radius r. 

We can see that :

:::

::: .theorem

Area of the [{.green.b} segment APB](target:segment) = Area of the [{.green.b} sector OAPB](target:sector)  – Area of [{.red.b} ∆ OAB](target:triangle) 

= `c/360*π*r^2`- Area of ∆ OAB

We can also observe that :

Area of the major sector OAQB = `πr^2`  – Area of the minor [{.green.b} sector OAPB](target:sector)

Area of major segment AQB = `πr^2` – Area of the minor [{.green.b} segment APB](target:segment)

:::

---

## Areas of Combinations of Plane Figures

> section: combination

So far, we have calculated the areas of different figures separately. Let us now try to
calculate the areas of some combinations of plane figures. We come across these
types of figures in our daily life and also in the form of various interesting designs.
Flower beds, drain covers, window designs, designs on table covers, are some of such
examples. We illustrate the process of calculating areas of these figures through some
examples.

We know the formulas for common figures like squares, rectangels, triangles, circles, semi circles etc. The trick is to look at the combination figure and identify the common figures for which we know the formulas. Once we are able to identify the common shapes, we can easily find the areas of the shapes we are looking for.


::: column(width=280)

    x-geopad.sticky(width=280 height=280): svg
      circle(x="point(50,80)" name="a" label="A")
      circle(x="point(170,80)" name="b" label="B")
      circle(x="point(50,200)" name="d" label="D")
      circle(x="point(170,200)" name="c" label="C")
      circle(x="point(110,140)" name="o" label="O")
      
      path.blue(x="segment(a,b)" target="square")
      path.blue(x="segment(c,d)" target="square")
      path.blue(x="segment(a,d)" target="square")
      path.blue(x="segment(b,c)" target="square" label="56cm")
      path.blue(x="segment(a,c)" target="square")
      path.blue(x="segment(d,b)" target="square")
      path.blue(x="triangle(o,a,b)" target="sectoroab triangleoab")
      path.blue(x="triangle(o,d,c)" target="sectorodc triangleodc")
      path.red.fill(x="arc(o,b,angle(b,o,a).rad).minor" label="Arc" target="sectoroab arc arcab")
      path.red.fill(x="arc(o,d,angle(d,o,c).rad).minor" label="Arc" target="sectorodc arc arcdc")
      
:::

Two circular flower beds
have been shown on two sides of a square lawn
ABCD of side 56 m. If the centre of each circular
flower bed is the point of intersection O of the
diagonals of the square lawn, find the sum of the
areas of the lawn and the flower beds.

Total area of the above figure= Area of [{.green.b} square ABCD](target:square)+ Area of [{.green.b} flower beds](target:arc)

Area of [{.green.b} flower bed ab](target:arcab)=Area of [{.green.b} sector OAB](target:sectoroab)-Area of [{.green.b} triangle OAB](target:triangleoab)

Area of [{.green.b} flower bed dc](target:arcdc)=Area of [{.green.b} sector ODC](target:sectorodc)-Area of [{.green.b} triangle ODC](target:triangleodc)

Since we know the formulas for each of the broken down basic shapes, apply the formulas to find the total area. The total are is [[4032]] `m^2`.


Consider the below image:


::: column(width=280)

    x-geopad.sticky(width=280 height=280): svg
      circle(x="point(50,80)" name="a" label="A")
      circle(x="point(170,80)" name="b" label="B")
      circle(x="point(50,200)" name="d" label="D")
      circle(x="point(170,200)" name="c" label="C")
      circle(x="point(110,140)" name="o" label="O")

      circle(x="point(50,140)" name="c1")
      circle(x="point(170,140)" name="c2")
      circle(x="point(110,80)" name="c3" label="c3")
      circle(x="point(110,200)" name="c4")

      path.red.fill(x="arc(c1,a,angle(a,c1,o).rad).minor")
      path.red.fill(x="arc(c1,d,angle(d,c1,o).rad).minor")
      path.red.fill(x="arc(c3,a,angle(a,c3,o).rad).minor")
      path.red.fill(x="arc(c4,d,angle(d,c4,o).rad).minor")
      
      path.red.fill(x="arc(c2,b,angle(b,c2,o).rad).minor")
      path.red.fill(x="arc(c2,c,angle(c,c2,o).rad).minor")
      path.red.fill(x="arc(c3,b,angle(b,c3,o).rad).minor")
      path.red.fill(x="arc(c4,c,angle(c,c4,o).rad).minor")

      path.red(x="arc(c1,a,angle(a,c1,d).rad).minor" name="semicircle1" target="semicircle1 sc")
      path.red(x="arc(c2,c,angle(b,c2,c).rad).major" name="semicircle2" target="semicircle1 sc")


      path.red(x="arc(c3,b,angle(b,c3,a).rad).minor" name="semicircle3" target="semicircle2 sc")
      path.red(x="arc(c4,d,angle(d,c4,c).rad).minor" name="semicircle4" target="semicircle2 sc")


      path.blue(x="segment(a,b)" target="square1 semicircle2")
      path.blue(x="segment(c,d)" target="square1 semicircle2")
      path.blue(x="segment(a,d)" target="square1 semicircle1")
      path.blue(x="segment(b,c)" target="square1 semicircle1")
      
:::

Find the area of the shaded design in above, where ABCD is a
square of side 10 cm and semicircles are drawn with each side of the square as
diameter. (Use π = 3.14)

Area of shaded design = Area of  [{.green.b} square ABCD](target:square1)- Area of shapes[{.green.b} shapes](target:sc)

=Area of  [{.green.b} square ABCD](target:square1)- (Area of first two [{.green.b} semi circles](target:semicircle1) + Area of second two [{.green.b} semi circles](target:semicircle2))