# Triangles

## Introduction

> id: intro
> section: introduction
> description: "Triangles are some of the most important shapes in geometry: they have countless interesting properties and appear everywhere in engineering and technology."
> color: "#3566DE"
> level: Intermediate
> next: polyhedra

::: column.grow
By the early 19th century, explorers had discovered most of the world. Trade and
transportation was booming between distant countries, and this created a need
for _accurate maps_ of the entire planet.


Today we have satellites that can take photos from above – but 200 years ago,
creating maps was a difficult and time consuming task. It was done by
mathematicians like [Radhanath Sikdar](bio:sikdar), who worked on the _Great
Trigonometrical Survey_: a century-long project to measure all of India,
including the Himalayan mountain range.

::: column(width=240)

    x-img.shift-1(src="images/theodolite.jpg" width=240 height=320 credit="Science & Society Picture Library")

{.caption} The _theodolite_, a surveying instrument
:::

Of particular interest was the quest to find the highest mountain on Earth.
There were a few different candidates, but from hundreds of kilometers away, it
was difficult to tell which one was the highest.

So how do you measure the height of a mountain?

    figure.mountain: include svg/mountain.svg

{.r} Today we can use satellites to measure the height of mountains to within a
few centimeters – but these did not exist when Radhanath was surveying India.
[Continue](btn:next)

{.r.reveal(when="next-0")} Climbers use _altimeters_ to determine their altitude.
These devices use the difference in air pressure at different heights. However
this would have required someone to actually climb to the [top of every
mountain](->.mountain-top) – an extremely difficult feat that was not achieved
until a century later.
[Continue](btn:next)

{.r.reveal(when="next-1")} You could also try using similar triangles, like we
did in the [previous course](/course/transformations/similarity).
This method requires knowing the [distance](->.mountain-distance) to the [base
of the mountain](->.mountain-base): the point at sea level that lies directly below
its summit. We can do this for trees or tall buildings, but for mountains this
point is hidden underneath hundreds of meters of rock.
[Continue](btn:next)

---
> id: intro-2

::: column(width=320)

    x-img(src="images/hillary.jpg" width=320 height=190)

{.caption} Edmund Hillary and Tenzing Norgay were the first to reach the top of
Mount Everest, in 1953.

::: column.grow
But there are more advanced geometric techniques, which [Radhanath](bio:sikdar)
used to discover the highest mountain on Earth: it is now called _Mount Everest_.
His measurement is only a few meters off today’s official height of 8848 meters.

In this course you will learn about many different features and properties of
triangles. These will allow you to measure the height of mountains, but they are
also of fundamental importance in many other areas of mathematics, science and
engineering.
[Continue](btn:next)
:::

---
> id: applications

Triangles are special because they are particularly _strong_. They are the only
polygon that, when made out of wooden beams and hinges, will be completely
_rigid_ – unlike rectangles, for example, which you can easily push over.

{.todo} COMING SOON – Animations

---
> id: applications-1

This property makes triangles particularly useful in construction, where they
can carry heavy weights.

::: column(width=200)
    x-img(src="images/truss-bridge.jpg" credit="© ykanazawa1999, Flickr" width=200 height=200 lightbox)

{.caption} A “Truss bridge” is supported by triangular bars
::: column(width=200)
    x-img(src="images/pylon.jpg" width=200 height=200 lightbox)

{.caption} Triangles in high-voltage electricity Pylons
::: column(width=200)
    x-img(src="images/bike.jpg" width=200 height=200 lightbox)

{.caption} Even bikes use triangles for stability.
:::

---
> id: applications-2
> goals: video

Triangles are also the simplest polygon, with the fewest sides. This makes them
particularly well suited to approximating complex curved surfaces. This is done
in physical building…

::: column(width=200)
    x-img(src="images/st-mary.jpg" credit="Kunstlerbob, Wikipedia" width=200 height=200 lightbox)

{.caption} “The Gherkin”, a skyscraper in London
::: column(width=200)
    x-img(src="images/hk-bank.jpg" credit="WiNG, Wikipedia" width=200 height=200 lightbox)

{.caption} Bank of China Tower in Hong Kong
::: column(width=200)
    x-img(src="images/museum.jpg" credit="Andrew Dunn, Wikipedia" width=200 height=200 lightbox)

{.caption} Courtyard of the British Museum in London
:::

::: column.grow
…but also in virtual worlds. In computer generated graphics (e.g. for movies or
video games), all surfaces are approximated using a “mesh” of tiny triangles.
Artists and software engineers need to know about geometry and trigonometry in
order to be able to move and transform these triangles realistically, and to
calculate their colour and texture.
::: column(width=220)
    x-img(src="images/dolphin.jpg" width=220 height=135)
:::

    figure: x-video(src="https://static.mathigon.org/videos/tiger.mp4" poster="images/tiger.jpg" width=480 height=270 credit="© UCTV, The STEAM Channel")
    //- src: https://www.youtube.com/watch?v=Y9PYzdFsVio

---

## Properties of Triangles

> id: angle-sum
> section: properties

Let’s start simple: a triangle is a closed shape that has three sides (which
are [line segments](gloss:line-segment)) and three vertices (the
[points](gloss:point) where the sides meet). It also has three [internal
angles](gloss:internal-angle), and we already know that the sum of them is
always [[180]]°.

---
> id: classification

We can classify triangles by the size of their angles:

::: column(width=220)

    x-geopad(width=220): svg
      circle(name="a1" x="point(40,60)")
      circle(name="b1" x="point(40,140)")
      circle(name="c1" x="point(180,140)")
      path.fill.red(x="angle(a1,b1,c1)")
      path(x="polygon(a1,b1,c1)")

{.caption} A __right-angled triangle__<br>
has one [right angle](gloss:right-angle).
::: column(width=220)

    x-geopad(width=220): svg
      circle(name="a2" x="point(30,30)")
      circle(name="b2" x="point(150,60)")
      circle(name="c2" x="point(190,190)")
      path.fill.blue(x="angle(c2,b2,a2)")
      path(x="polygon(a2,b2,c2)")

{.caption} An __obtuse triangle__<br>
has one [obtuse angle](gloss:obtuse-angle).
::: column(width=220)

    x-geopad(width=220): svg
      circle(name="a3" x="point(60,50)")
      circle(name="b3" x="point(30,180)")
      circle(name="c3" x="point(190,130)")
      path.fill.green(x="angle(a3,b3,c3)")
      path.fill.green(x="angle(b3,c3,a3)")
      path.fill.green(x="angle(c3,a3,b3)")
      path(x="polygon(a3,b3,c3)")

{.caption} An __acute triangle__<br>
has [[three]] [acute angles](gloss:acute-angle).
:::

---
> id: labels

::: column.grow
For convenience, we always label triangles in the same way. The vertices are
labelled with capital letters [_A_, _B_ and _C_](target:vertex), the sides are
labelled with lowercase letters [_a_, _b_ and _c_](target:side), and the angles
are labelled with Greek letters [`α`, `β` and `γ`](target:angle) (“alpha”, “beta” and
“gamma”).

The [side that lies _opposite_ vertex _A_](target:X) is labeled _a_, and the
[angle that lies right next to _A_](target:Y) is labelled `α`. The same pattern
works for _B_/_b_/`β` and for _C_/_c_/`γ`.
::: column(width=220)

    x-geopad(width=220 height=200): svg
      circle.move.red(name="a" cx=80 cy=30 label="A" target="vertex X Y")
      circle.move.blue(name="b" cx=30 cy=170 label="B" target="vertex")
      circle.move.green(name="c" cx=190 cy=150 label="C" target="vertex")
      path.red(x="angle(c,a,b).sup" label="α" target="angle Y")
      path.blue(x="angle(a,b,c).sup" label="β" target="angle")
      path.green(x="angle(b,c,a).sup" label="γ" target="angle")
      path.red(x="segment(b,c)" label="a" target="side X")
      path.blue(x="segment(a,c)" label="b" target="side")
      path.green(x="segment(b,a)" label="c" target="side")

:::

---
> id: medians
> goals: s0 s1 s2 move

### Medians

::: column(width=300)

    x-geopad.sticky(width=300 tools="move|line" projections="no"): svg
      circle.move(name="a" cx=75 cy=75 target="ratio")
      circle.move(name="b" cx=50 cy=250)
      circle.move(name="c" cx=250 cy=200)
      path(x="triangle(a,b,c)")

      circle.green(name="ab" x="line(a,b).midpoint")
      circle.blue(name="ac" x="line(a,c).midpoint")
      circle.red(name="bc" x="line(b,c).midpoint" target="ratio")

      circle.yellow.reveal(name="d" x="triangle(a,b,c).centroid" when="blank-0" animation="pop" target="ratio")

      path.red.transparent(x="segment(a,d)" label="2" target="ratio")
      path.red.transparent(x="segment(d,bc)" label="1" target="ratio")

::: column.grow
Here you can see a triangle as well as the [midpoints](gloss:midpoint) of its
three sides.

A [__median__](gloss:triangle-median) of a triangle is a line segment that joins
a vertex and the midpoint of the opposite side. Draw the three medians of this
triangle. _{span.reveal(when="s0 s1 s2")}What happens as you move the vertices
of the triangle?_

{.reveal(when="move")} It seems like the medians always [[intersect in one
point|have the same length|divide each other in the middle]].
_{span.reveal(when="blank-0")}This point is called the
[__centroid__](gloss:centroid)._

{.reveal(when="blank-0")} Medians always divide each other in the
[ratio 2:1](target:ratio). For each of the three medians, the distance from the
vertex to the centroid is always [[twice|three times|exactly]] as long as the
distance from the centroid to the midpoint.
:::

---
> id: center-of-mass

The centroid is also the “balancing point” of a triangle. Draw a triangle on
some cardboard, cut it out, and find the three medians. If you were accurate,
you can now balance the triangle on the tip of a pencil, or hang it perfectly
level from a piece of string that’s attached to its centroid:

    figure: img(src="images/center-of-mass.jpg" width=600 height=190)

This works because the weight of the triangle is evenly distributed around the
centroid. In physics, this point is often called the __center of mass__.

    // Any straight line that goes through the centroid divides the triangle into two
    // parts that have exactly the same area. Move the [blue point](target:move) in the
    // figure on the right. The red and green areas will always have the same area.

    // x-geopad(width=220): svg
      circle.move(name="a" cx=70 cy=50)
      circle.move(name="b" cx=60 cy=160)
      circle.move(name="c" cx=180 cy=130)
      circle.yellow(x="triangle(a,b,c).centroid" name="d")
      circle.move.blue.pulsate(name="p" cx=50 cy=50 project="circle(point(110,110),100)" target="move")
      circle(hidden name="q" x="p.rotate(pi,d)")

      path.dark(x="triangle(a,b,c)" name="t")
      path.fill.green.light(x="t.intersect(polygon(p,q,p.rotate(pi/2,q),q.rotate(-pi/2,p)))")
      path.fill.red.light(x="t.intersect(polygon(p,q,p.rotate(-pi/2,q),q.rotate(pi/2,p)))")
      path.blue(x="line(p,d)")

---
> id: circumcircle
> goals: s0 s1 s2

### Perpendicular Bisectors and Circumcircle

::: column(width=300)

    x-geopad.sticky(tools="move|perpBisector" width=300 projections="no"): svg
      circle.move(name="a" cx=75 cy=75 label="A" target="b-blue b-red")
      circle.move(name="b" cx=50 cy=250 label="B" target="b-red")
      circle.move(name="c" cx=250 cy=200 label="C" target="b-blue")
      path(x="triangle(a,b,c)")

      circle.reveal.red(x="line(a,b).midpoint" when="blank-0")
      circle.reveal.blue(x="line(a,c).midpoint" when="blank-0")
      circle.reveal.green(x="line(b,c).midpoint" when="blank-0")

      circle.reveal.yellow(x="triangle(a,b,c).circumcircle.c" name="d" when="s0 s1 s2" target="center")
      path.yellow(hidden x="arc(d,c,1.99*pi)" name="circumcircle")

::: column.grow
Recall that the [perpendicular bisector](gloss:perpendicular-bisector) of a line
is the perpendicular line that goes through its [[midpoint|endpoints]].

{.reveal(when="blank-0")}Draw the perpendicular bisector of all three sides of
this triangle. _{.lgrey} To draw the perpendicular bisector of a side of the
triangle, simply click and drag from one of its endpoints to the other._

{.reveal(when="s0 s1 s2")} Like before, the three perpendicular bisectors meet in a
single point. And again, this point has a special property.

{.reveal(when="s0 s1 s2")} Any point on a perpendicular bisector has the same
distance from the two endpoints of the lines it bisects. For example, any point
on the [{.blue} blue bisector](target:b-blue) has the same distance from points _A_ and
_C_ and any point on the [{.red} red bisector](target:b-red) has the same distance from
points [[A and B|A and C|B and C]].

{.reveal(when="blank-1")} The [{.yellow} intersection point](target:center) lies on all
three perpendicular bisectors, so it must have the same distance from all three
[[vertices|sides]] of the triangle.

{.reveal(when="blank-2")} This means we can draw a circle around it that
perfectly touches all the vertices. This circle is called the
[__circumcircle__](gloss:circumcircle) of the triangle, and the center is called
the __circumcenter__.
:::

---
> id: circumcircle-1

In fact, this means that if you are given any three points, you can use the
circumcenter to find a circle that goes through all three of them. (Unless the
points are [[collinear|parallel]], in which case they all lie on a straight line.)

---
> id: incircle
> goals: s0 s1 s2

### Angle Bisectors and Incircle

You’re probably getting the hang of this now: we pick a certain construction, do
it three times for all sides/angles of the triangles, and then we work out
what’s special about their intersection.

::: column(width=300)

    x-geopad.sticky(tools="move|angleBisector" width=300 projections="no"): svg
      circle.move(name="a" cx=75 cy=75)
      circle.move(name="b" cx=50 cy=250 target="b-blue")
      circle.move(name="c" cx=250 cy=200 target="b-red")

      path.fill.light.red(x="angle(c,a,b).sup" name="xa")
      path.fill.light.blue(x="angle(a,b,c).sup" name="xb")
      path.fill.light.green(x="angle(b,c,a).sup" name="xc")

      path(x="segment(a,b)" label="a" target="b-blue b-red")
      path(x="segment(a,c)" label="b" target="b-red")
      path(x="segment(b,c)" label="c" target="b-blue")

      circle.reveal.yellow(x="triangle(a,b,c).incircle.c" when="s0 s1 s2" target="center")
      path.yellow(hidden x="arc(triangle(a,b,c).incircle.c,triangle(a,b,c).incircle.at(0),1.999*pi)" name="incircle")

::: column.grow
Recall that the [angle bisector](gloss:angle-bisector) divides an angle exactly
in the middle. Draw the angle bisector of the three angles in this triangle.
_{.lgrey} To draw an angle bisector, you have to click on three points that form
the angle you want to bisect._

{.r.reveal(when="s0 s1 s2")} Once again, all three lines intersect at one point.
You probably expected something like this, but it is important to notice that
there is no obvious reason why this should happen – triangles are just very
special shapes!
[Continue](btn:next)

{.reveal(when="next-0")} Points that lie on an angle bisector have the same
distance from the two lines that form the angle. For example any point on the
[{.blue} blue bisector](target:b-blue) has the same distance from side _a_ and side _c_,
and any point on the [{.red} red bisector](target:b-red) has the same distance from
sides [[a and b|a and c|b and c]].

{.reveal(when="blank-0")} The [{.yellow} intersection point](target:center) lies on all
three bisectors. Therefore it must have the same distance from all three
[[sides|vertices]] of the triangle.

{.reveal(when="blank-1")} This means we can draw a circle around it, that lies
inside the triangle and just touches its three sides. This circle is called the
__incircle__ of the triangle, and the center is called the __incenter__.
:::

---
> id: area

### Area and Altitudes

::: column.grow
{.r} Finding the area of a [rectangle](gloss:rectangle) is easy: you simply
multiply its width by its height. Finding the area of a triangle is a bit less
obvious. Let’s start by “trapping” a triangle inside a rectangle.
[Continue](btn:next)

{.reveal.r(when="next-0")} The width of the rectangle is the length of the
[bottom side](target:base) of the triangle (which is called the __base__). The
height of the rectangle is the [perpendicular distance](target:height) from the
base to the opposite vertex.
[Continue](btn:next)

{.reveal(when="next-1")} The height divides the triangle into two parts. Notice
how the [two gaps in the rectangle](target:gap) are exactly as big as the two
parts of the triangle. This means that the rectangle is
[[twice as|three times as|exactly as]] large as the triangle.

{.reveal(when="blank-0")} We can easily work out the area of the rectangle, so
the area of the triangle must be half that:

{.text-center.reveal(when="blank-0")} `A = 1/2 ×` [{.red} base](target:base)
`×` [{.blue} height](target:height)
::: column(width=300)

    x-geopad.sticky(width=300): svg
      circle.move(name="a" cx=40 cy=220)
      circle.move(name="b" cx=260 cy=220)
      circle.move(name="c" cx=190 cy=80)
      circle(hidden x="line(a,b).project(c)" name="d")
      circle(hidden x="a.add(c).subtract(d)" name="e")
      circle(hidden x="b.add(c).subtract(d)" name="f")

      path.fill.green.reveal(x="polygon(a,d,c)" when="next-1" target="gap")
      path.fill.green.transparent(x="polygon(a,e,c)" target="gap")

      path.fill.yellow.reveal(x="polygon(b,d,c)" when="next-1" target="gap")
      path.fill.yellow.transparent(x="polygon(b,f,c)" target="gap")

      path.dark(x="polygon(a,b,c)")
      path.red.reveal(x="polygon(a,b,f,e)" when="next-0" animation="draw")
      path.blue.reveal(x="segment(c,d)" label="height" when="next-0" delay="1000" target="height")
      path.blue.reveal(x="angle(c,d,b).sup" when="next-0" delay="1000" target="height")
      path.red.reveal(x="segment(a,b)" label="base" when="next-0" delay="1000" target="base")

:::

---
> id: altitudes

To calculate the area of a triangle, you can pick any of the three sides as
__base__, and then find the corresponding __height__, which is the line that is
[[perpendicular|parallel]] to the base and goes through the opposite vertex.

{.reveal(when="blank-0")} In triangles, these _heights_ are often called
[__altitudes__](gloss:triangle-altitude). Every triangle has [[three]] altitudes.

---
> id: altitudes-1

::: column(width=300)

    x-geopad(width=300): svg
      circle.move(name="a" cx=75 cy=75 label="A")
      circle.move(name="b" cx=50 cy=250 label="B")
      circle.move(name="c" cx=250 cy=200 label="C")

      path(x="triangle(a,b,c)")
      path.altitude.red(hidden x="line(a,b).perpendicular(c)")
      path.altitude.blue(hidden x="line(a,c).perpendicular(b)")
      path.altitude.green(hidden x="line(b,c).perpendicular(a)")
      circle.yellow(hidden x="triangle(a,b,c).orthocenter" target="center")

::: column.grow
Like the [medians](gloss:triangle-median), [perpendicular
bisectors](gloss:perpendicular-bisector) and [angle
bisectors](gloss:angle-bisector), the three altitudes of a triangle
intersect in a [single point](target:center). This is called the __orthocenter__
of the triangle.

In [acute triangles](gloss:acute-triangle), the orthocenter
[[lies inside|lies outside|is a vertex of]] the triangle.

{.reveal(when="blank-0")} In [obtuse triangles](gloss:obtuse-triangle), the
orthocenter [[lies outside|lies inside|is a vertex of]] the triangle.

{.reveal(when="blank-1")} In [right-angled triangles](gloss:right-triangle), the
orthocenter [[is a vertex of|lies inside|lies outside]] the triangle. Two of the
altitudes are actually just sides of the triangle.
:::

---

## Midsegments and Similarity

> section: midsegments
> sectionStatus: dev
> id: midsegments
> goals: s0 s1 s2

::: column(width=300)

    x-geopad.sticky(tools="move|line" width=300 projections="no"): svg
      circle.move(name="a" cx=75 cy=75)
      circle.move(name="b" cx=50 cy=250)
      circle.move(name="c" cx=250 cy=200)
      circle.red(name="p" x="line(a,b).midpoint")
      circle.red(name="q" x="line(a,c).midpoint")
      circle.red(name="r" x="line(b,c).midpoint")
      path(x="triangle(a,b,c)")

      path.transparent.fill.red(x="polygon(a,p,q)" target="triangles")
      path.transparent.fill.blue(x="polygon(b,p,r)" target="triangles")
      path.transparent.fill.yellow(x="polygon(c,q,r)" target="triangles")
      path.transparent.fill.green(x="polygon(p,q,r)" target="triangles")
      path.transparent.fill.red(x="polygon(a,b,c)" target="large")

::: column.grow
A [__midsegment__](gloss:triangle-midsegment) is a line segment that connects
the midpoints of two sides of a triangle. Draw the three midsegments of this
triangle.

{.reveal(when="s0 s1 s2")} As you can see, the midsegments split the triangle
into [four smaller triangles](target:triangles).

{.reveal(when="s0 s1 s2")} It turns out that all of these smaller triangles are
[[congruent|overlapping|different sizes]] – even the upside down one in the
middle. _{span.reveal(when="blank-0")} They are also all [[similar|congruent]]
to the [original triangle](target:large),_ _{span.reveal(when="blank-1")}with a
scale factor of `1/2`._

{.reveal(when="blank-1")} This allows us to deduce some important facts about
the midsegments of triangles:

::: .theorem.reveal(when="blank-1")
__Midsegment Theorem__<br>
A midsegment of a triangle is parallel to its opposite side, and exactly half
the length of that side.
:::
:::

---

{.todo} COMING SOON – More on triangle midsegments, and how they relate to
similarity and proportionality.

---

## Triangle Congruence

> id: sss-construction
> section: congruence
> goals: draw-base draw-c1 draw-c2

Now that we can check if three sides can form a triangle, let’s think about how
we would actually _construct_ a triangle with these sides.

::: column(width=300)

    x-geopad.sticky(width=300 tools="move|line|circle"): svg

::: column.grow
{.task} Draw a triangle that has sides of lengths 4cm, 5cm and 6cm.

{.r} In the box of the length, draw the longest side of the triangle, which is
__6cm__. _{span.reveal(when="draw-base")} Now we already have [two](target:base)
of the three vertices of the triangle – the challenge is to find the last one.
*{button.next-step} Continue*_

{.reveal(when="next-0")} Next, draw a circle of radius __4cm__ around one of the
vertices, _{span.reveal(when="draw-c1")} and a circle of radius __5cm__ around
the other one._

{.reveal(when="draw-c2")} The third vertex of the triangle is the
[[intersection|center|radius]] of the two circles. _{span.reveal(when="blank-0")}
Now we can simply connect them to form a triangle._

{.reveal(when="blank-0" delay="3000")} The circles actually intersect
[[twice|three times|infinitely many times]]: _{span.reveal(when="blank-1")}once
[at the top](target:top) and once [at the bottom](target:bottom). We can pick
either of these intersections, and the resulting two triangles are
[[congruent|equilateral|perpendicular]]._
:::

---
> id: congruence

### Congruence Conditions

But is it possible to construct _a different_ triangle with the same three
sides?

We already saw two triangles above, but they were both congruent. In fact, any
two triangles that have the same three side lengths are congruent. This is
called the [__SSS Congruence Condition__](gloss:triangle-sss) for triangles
(“Side-Side-Side”).

We now have two conditions for triangles: “AA” means that two triangles are
[[similar|congruent|transformations]], and “SSS” means that two triangles are
[[congruent|similar|equal]]. There are a few more congruence conditions:

---
> id: congruence-1

::: .theorem
Two triangles are congruent if any one of the following conditions is met:

    .row.padded-thin
      div(style="width: 150px")
        .text-center: strong SSS
        x-geopad(width=150 height=120): svg
          circle(name="a" x="point(60,10)")
          circle(name="b" x="point(10,110)")
          circle(name="c" x="point(140,80)")
          path.red(x="segment(a,b)")
          path.red(x="segment(a,c)")
          path.red(x="segment(b,c)")
        p.caption All sides are congruent.

      div(style="width: 150px")
        .text-center: strong SAS
        x-geopad(width=150 height=120): svg
          circle(name="a" x="point(60,10)")
          circle(name="b" x="point(10,110)")
          circle(name="c" x="point(140,80)")
          path.red(x="angle(a,b,c)")
          path.red(x="segment(a,b)")
          path(x="segment(a,c)")
          path.red(x="segment(b,c)")
        p.caption Two sides and the #[strong included] angle are congruent.

      div(style="width: 150px")
        .text-center: strong ASA
        x-geopad(width=150 height=120): svg
          circle(name="a" x="point(60,10)")
          circle(name="b" x="point(10,110)")
          circle(name="c" x="point(140,80)")
          path.red(x="angle(c,a,b)")
          path.red(x="angle(a,b,c)")
          path.red(x="segment(a,b)")
          path(x="segment(a,c)")
          path(x="segment(b,c)")
        p.caption Two angles and the #[strong included] side are congruent.

      div(style="width: 150px")
        .text-center: strong AAS
        x-geopad(width=150 height=120): svg
          circle(name="a" x="point(60,10)")
          circle(name="b" x="point(10,110)")
          circle(name="c" x="point(140,80)")
          path.red(x="angle(b,c,a)")
          path.red(x="angle(a,b,c)")
          path.red(x="segment(a,b)")
          path(x="segment(a,c)")
          path(x="segment(b,c)")
        p.caption Two angles and one of the non-included sides.
:::

---
> id: cpoct

You can think of these conditions as “shortcuts”: to check if two triangles are
congruent, you just need to check one of the conditions above.

Once you _know_ that two triangles are congruent, you know that _all_ of their
corresponding sides and angles are congruent. This is often called
[__CPOCT__](gloss:cpoct), or “Corresponding Parts of Congruent Triangles are
Congruent”.

It is interesting to note that all conditions consists of [[three]] different
values (either sides or angles)!

---
> id: contruction

### Constructing Triangles

At the beginning of this section, we saw how to construct a triangle if we know
its three sides. Similarly, there are ways to construct triangles for each of
the congruence conditions above.

::: tab
#### SAS

::: column(width=300)
{.todo} COMING SOON – Animation
::: column.grow
{.task} Draw the triangle that has sides of 5cm and 3cm, and an included
angle of 40°.

Like before, we start by drawing one of the sides of the triangle.

Next, use a protractor to measure a 40° angle around one of the two vertices.
Let’s mark this angle with a point.

We can connect the vertex to our measurement, to form the second side of the
triangle.

We know that this side has to be 3cm long, so let’s measure that distance with a
ruler and then mark the third vertex of the triangle.

Finally, we can connect the last two vertices, to complete the triangle.
:::

Of course, we could have drawn the 3cm side first, or picked the other vertex
to draw the 40° angle around. However, in all those cases, the resulting
triangles would have been congruent to this one.

::: tab
#### ASA

::: column(width=300)
{.todo} COMING SOON – Animation
::: column.grow
{.task} Draw the triangle that has angles of 70° and 50°, and an included
side of length 5cm.

Let’s start by drawing the first side, using a ruler to measure 5cm.

Now let’s use a protractor to measure an angle of 70° around one of the
endpoints of the side, and an angle of 50° around the other endpoint. (Which
way round does not matter – the resulting triangles will be congruent.)

Connecting the angle marks to the endpoints completes the triangle.
:::

::: tab
#### AAS

::: column(width=300)
{.todo} COMING SOON – Animation
::: column.grow
{.task} Draw the triangle that has angles of 40° and 50°, and an included
side of length 5cm.

Again, we’ll start by constructing the first side of the triangle, which is 5cm
long.

And again, we’ll use a protractor to measure an angle of 40° around one of the
endpoints, and draw the second side of the triangle. However, we don’t yet know
where this side will end.

Instead, let’s pick any point around this line, pretend it is the third vertex of
the triangle and measure an angle of 50°.

As you can see, this doesn’t quite work: the third side does not yet link up
with the vertex A. To fix this, we simply have to shift it: we draw a parallel
line that goes through A. (You already learned how to construct parallel lines
in a [previous course](/course/euclidean-geometry/geometric-construction).)

Now the two angles at the top are alternate angles, so they must be congruent
and both 50°. We can erase the incorrect, first line to get our completed AAS
triangle.
:::

::: tab
#### SSA
The SSA construction is slightly different. You might have noticed that “SSA”
was not in the list of congruence conditions above, so comparing SSA is two
triangles is not enough to confirm they are congruent. This will show you why:

::: column(width=300)
{.todo} COMING SOON – Animation
::: column.grow
{.task} Draw the triangle that has sides of 4cm and 5cm, and a non-included
angle of 50°.

Like always, let’s start by drawing the first side of the triangle which is 5cm
long.

Next, let’s measure an angle of 50° around one of the endpoints and draw the
second side of the triangle. However, we don’t yet know where this side will
end.

The third side has o be 4cm long. Using a protractor we can draw a circle of
radius 4cm around the other endpoint of the original side.

The final vertex of the triangle is formed by the intersection of the circle and
the second line. However, in this case, there are two intersections!

These two triangles are clearly not congruent. This means that there are two
different triangles that have sides of 4cm and 5cm, as well as a non-included
angle of 50°. SSA is not enough to confirm two triangles are congruent.
:::
:::

---

## Similarity

> section: similarity
> sectionStatus: dev
> id: similarity

::: column.grow
For rigid transformations, the image is always [[congruent|larger|smaller]] to
the original – but this is [[no longer|still]] true for dilations. Instead, we
say that two shapes are [__similar__](gloss:similar). They have the same overall
shape, but not necessarily the same size.

The symbol for similarity is `∼` (similar to the symbol for congruence, which
was `≅`). In this example, we would write `A ∼ A'`.

::: column(width=240)
{.todo} COMING SOON – Illustration
:::

---
> id: perspective

### Perspective Drawings

You might have noticed that these dilations with the connecting rays almost look
like __perspective drawings__. The center of dilation is called the __vanishing
point__, because it looks like this is where everything is “vanishing in the
distance”.

Find the vanishing point in the figure below:

{.todo} COMING SOON – Interactive

Now can you draw another house that matches the existing ones?

---
> id: similar-polygons

### Similar Polygons

Similarity can tell us a lot about shapes. For example, [circles](gloss:circle),
[squares](gloss:square) and [equilateral triangles](gloss:equilateral-triangle)
are [[always|sometimes|never]] similar. They might have different sizes, but
always the same general shape.

::: column.grow
The two quadrilaterals on the right are similar. Our first important observation
is that in similar polygons, all the matching pairs of angles are
[congruent](gloss:congruent-angles). This means that

{.text-center} [_{.m-red}∡ABC_ ≅ _{.m-red}∡A'B'C'_](target:a)_{.space}_
[_{.m-blue}∡BCD_ ≅ _{.m-blue}∡B'C'D'_](target:b)
[_{.m-green}∡CDE_ ≅ _{.m-green}∡C'D'E'_](target:c)_{.space}_
[_{.m-yellow}∡DEA_ ≅ _{.m-yellow}∡D'E'A'_](target:d)

The second important fact is that in similar polygons, all sides are scaled
__proportionally__ by the scale factor of the corresponding dilation. If the
scale factor is ${k}{k|1.5|0.5,2,0.1}, then

{.text-center} `abs(AB) ×` ${k} `= abs(A'B')`_{.space}_`abs(BC) ×` ${k} `= abs(B'C')`
`abs(CD) ×` ${k} `= abs(C'D')`_{.space}_`abs(DE) ×` ${k} `= abs(D'E')`

We can instead rearrange these equations and eliminate the scale factor
entirely:

{.text-center} `abs(AB)/abs(A'B') = abs(BC)/abs(B'C') = abs(AB)/abs(A'B') = abs(AB)/abs(A'B')`

    // This proportional relationship is true not just for the sides of the
    // polygon, but also for properties like diagonals.

We can use this to solve real life problems that involve similar polygons – for
example finding the length of missing sides, if we know some of the other sides.
In the following section you will see a few examples.
::: column(width=240)

    x-geopad.sticky(width=240 height=360): svg
      - var x = ['a', 'b', 'c', 'd']
      - var initial = {a:[50,70], b:[160,50], c:[200,110], d:[150,160]}
      - var next = {a:'b', b:'c', c:'d', d:'a'}
      - var prev = {a:'d', b:'a', c:'b', d:'c'}
      - var classes = {a:'red', b:'blue', c:'green', d:'yellow'}
      each l in x
        circle(name=l x=`point(${initial[l][0]},${initial[l][1]})` r=4 target=l)
        path(x=`angle(${prev[l]},${l},${next[l]})` target=l class=classes[l])
        path(x=`segment(${l},${next[l]})` target=`${l} ${next[l]}`)
        circle(name=l+'1' r=4 x=`${l}.subtract(point(120,90)).scale(k).rotate(3).add(point(120,270))` target=l)
        path(x=`angle(${prev[l]}1,${l}1,${next[l]}1)` target=l class=classes[l])
        path(x=`segment(${l}1,${next[l]}1)` target=`${l} ${next[l]}`)
:::

---
> id: similar-triangles

## Similar Triangles

The concept of similarity is particularly powerful with triangles. We already
know that the corresponding internal angles in similar polygons are equal. 

For triangles, the opposite is also true: this means that if you have two
triangles with the same three angle sizes, then the triangles must be similar.

And it gets even better! We know that the internal angles in a triangle always
add up to [[180]]°. This means that if we know two angles in a triangle, we can
always work out the third one.

For similarity, this means that we also just need to check _two angles_ to
determine if triangles are similar. If two triangles have two angles of the same
size, then the third angle must also be the same in both.

This result is sometimes called the [__AA Similarity Condition__](gloss:triangle-aa)
for triangles. (The two _As_ stand for the two _angles_ we compare.)

::: .theorem
If two angles in one triangle are congruent to two angles in another triangle,
the two triangles are similar.
:::

---
> id: similar-triangles-1

Let’s have a look at a few examples where this is useful:

::: column(width=320)
{.todo} COMING SOON – Animation

::: column.grow
Here you can see the image of a large lighthouse. Together with a friend, you
want to measure the height of the lighthouse, but unfortunately we cannot climb
to the top.

It turns out that, very well hidden, the diagram contains two similar triangles:
one is formed by the lighthouse and its shadow, and one is formed by your friend
and her shadow.

Both triangles have one right angle at the bottom. The sun rays are parallel,
which means that the other two angles at the bottom are corresponding angles,
and also equal. By the AA condition for triangles, these two must be similar.

We can easily measure the length of the shadows, and we also know the height of
your friend. Now we can use the proportionality of sides in similar triangles
to find the height of the lighthouse:

{.todo} COMING SOON – Equation

Therefore the lighthouse is 1.5m tall.
:::

---
> id: similar-triangles-2

::: column(width=320)
{.todo} COMING SOON – Animation
::: column.grow
We can use the same technique to measure distances on the ground. Here we want
to find the width of a large river. There is a big tree on one side of the
river, and I’ve got a stick that is one meter long.

Try drawing another two similar triangles in this diagram.

You can mark the point along the side of the river, that lies directly on the
line of sight from the end of the stick to the tree. Then we can measure the
distances to the stick, and to the point directly opposite the tree.

Once again, these two triangles are similar because of the AA condition. They
both have a right angle, and on pair of opposite angles.

According to the proportionality rule, this means that

{.todo} COMING SOON – Equation

Therefore the width of the river is 45 meters.
:::


---

## Pythagoras’ Theorem

> id: pythagoras
> section: pythagoras

We have now reached an important point in geometry – being able to state and
understand one of the most famous [theorems](gloss:theorem) in all of
mathematics: __Pythagoras’ Theorem__. It is named after the ancient Greek
mathematician [Pythagoras of Samos](bio:pythagoras).

::: .theorem
::: column.grow
__Pythagoras’ Theorem__<br>
In any right-angled triangle, the square of the length of the
[__hypotenuse__](target:hypot) (the side that lies opposite the right angle) is
equal to the sum of the squares of the other two sides. In other words,

{.text-center} _{span.circled.green}`a^2`_ + _{span.circled.blue}`b^2`_ =
_{span.circled.yellow}`c^2`_

_The converse is also true: if the three sides in a triangle satisfy
`a^2 + b^2 = c^2`, then it must be [[right-angled|acute|obtuse]]._
::: column(width=300)

    x-geopad(width=300): svg
      circle.move(name="a" cx=82 cy=160 target="hypot")
      circle.move(name="b" cx=218 cy=160 target="hypot")
      circle.move(name="c" cx=120 cy=100 project="arc(line(a,b).midpoint,a,pi).contract(0.2)")

      path.fill.green(x="polygon(b,c,b.rotate(-pi/2,c),c.rotate(pi/2,b))" label="a²" label-class="white")
      path.fill.blue(x="polygon(c,a,c.rotate(-pi/2,a),a.rotate(pi/2,c))" label="b²" label-class="white")
      path.fill.yellow(x="polygon(b,a,b.rotate(pi/2,a),a.rotate(-pi/2,b))" label="c²" label-class="white")

      path.dark(x="segment(b,c)" label="a")
      path.dark(x="segment(a,c)" label="b")
      path.dark(x="segment(a,b)" label="c" target="hypot")
      path.dark.thin(x="angle(b,c,a)")

:::
:::

---
> id: pythagoras-1

::: column(width=220)

    img(src="images/ladder.svg" width=220 height=300)

::: column.grow
Right angles are everywhere, and that’s why Pythagoras’ Theorem is so useful.

Here you can see a __{.m-red}6m__ long ladder leaning on a wall. The bottom of
the ladder is __{.m-blue}1m__ away from the wall. How far does it reach up the
wall?

Notice that there is a right-angled triangle formed by the ladder, the wall and
the ground. Using Pythagoras’ theorem, we get

    table.eqn-system
      tr
        td.md `class(h^2,"b m-green") + class(1^2,"b m-blue")`
        td.md `= class(6^2,"b m-red")`
      tr
        td.md `⇒ class(h^2,"b m-green")`
        td.md `= input(35)`
      tr.reveal(when="blank-0")
        td.md `⇒ class(h, "b m-green")`
        td.md `= sqrt(35) = "5.92m"`

:::

{.reveal(when="blank-0")} Whenever you’ve got a right-angled triangle and know
two of its sides, Pythagoras can help you find the third one.

---
> id: pythagoras-proof

### Proving Pythagoras’ Theorem

Pythagoras’ theorem was known to ancient Babylonians, Mesopotamians,
Indians and Chinese – but Pythagoras may have been the first to find a formal,
mathematical proof.

There are actually many different ways to prove Pythagoras’ theorem. Here you
can see three different examples that each use a different strategy:

::: tab.proof-1

#### Rearrangement _{span.check(when="blank-0 blank-1")}_

::: column.grow

Have a look at the figure on the right. The square has side length `a + b`, and contains
[{.blue} four right-angled triangles](target:triangle), as well as a
[{.red} smaller square](target:square) of area [[`c^2`|`a - b`|`a + b`]].

{.reveal(when="blank-0")} Now let’s rearrange the triangles in the square. The
result still contains the four right-angles triangles, as well as two squares
of size [[`a^2` and `b^2`|`c^2`|`(a + b)^2`]].

{.reveal(when="blank-1")} Comparing the area of the red area [before](action:set(0)) and
[after](action:set(100)) the rearrangement, we see that

{.text-center.reveal(when="blank-1")} `a^2 + b^2 = c^2`.

{.reveal(when="blank-1")} This is the original proof that
[Pythagoras](bio:pythagoras) came up with. _{span.qed}_

::: column(width=240)

    x-geopad(width=240)
      svg
        circle(hidden name="a" x="point(20,20)")
        circle(hidden name="b" x="point(220,20)")
        circle(hidden name="c" x="point(220,220)")
        circle(hidden name="d" x="point(20,220)")

        circle.move(name="e" cx=100 cy=20 project="segment(line(a,b).at(.1),line(a,b).at(.9))")
        circle(name="f" hidden x="b.add(e.subtract(a).flip)")
        circle(name="g" hidden x="c.subtract(e.subtract(a))")
        circle(name="h" hidden x="d.subtract(e.subtract(a).flip)")

        path.thin(x="segment(a,e)" label="a")
        path.thin(x="segment(e,b)" label="b")
        path.thin(x="segment(a,h)" label="b")
        path.thin(x="segment(h,d)" label="a")
        path.thin(x="segment(e,h)" label="c")
        path.thin(x="segment(e,f).shift(0,x*distance(h,a))" label="c")

        path.square(x="polygon(a,b,c,d)")
        path.tri(x="polygon(a,e,h)" target="triangle")
        path.tri(x="polygon(c,g,f).shift(-x*distance(d,g),-x*distance(b,f))" target="triangle")
        path.tri(x="polygon(d,h,g).shift(x*distance(e,a),0)" target="triangle")
        path.tri(x="polygon(b,f,e).shift(0,x*distance(h,a))" target="triangle")
        path.square.transparent(x="polygon(e,f,g,h)" target="square")

      .label(style="left: 120px; top: 120px;") c²
      .label.var(style="left: ${10 + e.x/2}px; top: ${230 - e.x/2}px;") a²
      .label.var(style="left: ${110 + e.x/2}px; top: ${130 - e.x/2}px;") b²

    x-slider(steps=100)

:::
::: tab.proof-2

#### Algebra _{span.check(when="blank-2 blank-3 blank-4")}_

::: column.grow

Here we have the same figure as before, but this time we’ll use _algebra_ rather
than _rearrangement_ to prove Pythagoras’ theorem.

The large square has side length `a + b` and area [[`(a + b)^2`|`a^2 + b^2`|`c^2`]].

{.reveal(when="blank-2")} It consists of [{.blue}four triangles](target:triangle), each with an
area of [[`1/2 a b`|`(a + b)^2`|`1/2 (a + b)`]], and [{.red}one square](target:square) of area
[[`c^2`|`(a + b)^2`|`a × b`]].

{.reveal(when="blank-3 blank-4")} If we combine all of that information, we have

|          `(a+b)^2` | `= 4 × 1/2 a b + c^2` |
| `a^2 + 2a b + b^2` | `= 2a b + c^2`        |
|        `a^2 + b^2` | `= c^2`               |
{.eqn-system.reveal(when="blank-3 blank-4")}

{.reveal(when="blank-3 blank-4")} And, once again, we get Pythagoras’ theorem.
_{span.qed}_

::: column(width=240)

    x-geopad(width=240): svg
      circle.move(name="e1" cx=100 cy=20 project="segment(line(a,b).at(.1),line(a,b).at(.9))")
      circle(name="f1" hidden x="b.add(e1.subtract(a).flip)")
      circle(name="g1" hidden x="c.subtract(e1.subtract(a))")
      circle(name="h1" hidden x="d.subtract(e1.subtract(a).flip)")

      path.thin(x="segment(a,e1)" label="a")
      path.thin(x="segment(e1,b)" label="b")
      path.thin(x="segment(a,h1)" label="b")
      path.thin(x="segment(h1,d)" label="a")
      path.thin(x="segment(e1,h1)" label="c")
      path.thin(x="segment(e1,f1).shift(0,x*distance(h,a))" label="c")

      path.square(x="polygon(e1,f1,g1,h1)" target="square")
      path.tri(x="polygon(a,e1,h1)" target="triangle")
      path.tri(x="polygon(c,g1,f1)" target="triangle")
      path.tri(x="polygon(d,h1,g1)" target="triangle")
      path.tri(x="polygon(b,f1,e1)" target="triangle")

:::
::: tab.proof-3

#### Similar Triangles _{span.check(when="next-0 next-1 next-2 blank-5")}_

::: column.grow

{.r} Here you can see another right-angled triangle. If we draw one of the
altitudes, it splits the triangle into two smaller triangle.
It also divides the hypotenuse _c_ into [two smaller parts](target:hypotenuse)
which we’ll call [{.i.blue}x](target:x) and [{.i.green}y](target:y).
_{span.next-step} Continue_

{.r.reveal(when="next-0")} Let’s separate out the two smaller triangles, so that
it’s clearer to see how they are related…
_{span.next-step} Continue_

{.reveal(when="next-1")} Both smaller triangles [share one angle](target:angle)
with the original triangle. They also all have [one right angle](target:right).
By the AA condition, all three triangles must be [[similar|congruent|right-angled]].

::: column(width=260)

    x-geopad.similar-triangle(width=260): svg
      circle(name="B1" hidden cx=40 cy=100)
      circle(name="X1" hidden cx=170 cy=100)
      circle(name="C1" hidden cx=170 cy=20)
      path.fill.light.red(x="polygon(B1,X1,C1)")
      path.fill.yellow(x="angle(C1,B1,X1).sup" size=25 target="angle")
      path.dark.thin(x="angle(B1,X1,C1).sup" size=10 target="right")
      path.red(x="segment(B1,C1)" label="a" target="a ac")
      path.dark(x="segment(X1,C1)")
      path.blue(x="segment(X1,B1)" label="x" target="x xa")

      circle(name="A2" hidden cx=220 cy=100)
      circle(name="X2" hidden cx=170 cy=100)
      circle(name="C2" hidden cx=170 cy=20)
      path.fill.light.yellow(x="polygon(A2,X2,C2)")
      path.fill.red(x="angle(C2,A2,X2).sup" size=20 target="angle")
      path.dark.thin(x="angle(A2,X2,C2).sup" size=10 target="right")
      path.yellow(x="segment(A2,C2)" label="b" target="b bc")
      path.dark(x="segment(X2,C2)")
      path.green(x="segment(X2,A2)" label="y" target="y yb")

      circle(name="A" hidden x="point(220,100)")
      circle(name="B" hidden x="point(40,100)")
      circle(name="C" hidden x="point(170,20)")
      circle(name="X" hidden x="point(170,100)")
      path.dark(x="segment(X,C)" target="altitude")
      path.dark.thin(x="angle(B,X,C)" size=10 target="altitude")
      path.fill.yellow(x="angle(C,B,X)" size=25 target="angle")
      path.fill.red(x="angle(X,A,C)" size=20 target="angle")
      path.dark.thin(x="angle(A,C,B)" size=10 target="right")
      path.red(x="segment(B,C)" label="a" target="a xa")
      path.yellow(x="segment(A,C)" label="b" target="b yb")
      path.blue(x="segment(B,X)" label="x" target="hypotenuse x ac bc")
      path.green(x="segment(X,A)" label="y" target="hypotenuse y ac bc")

:::

{.reveal(when="blank-5")} Now we can use the equations we already know about
similar polygons:

    table.proof-table.reveal(when="blank-5"): tr
      td.md `pill(x/a, "blue", "xa") = pill(a/c, "red", "ac")`<br>`pill(x, "blue", "x") = (a^2)/c`
      td.md `pill(y/b, "green", "yb") = pill(b/c, "yellow", "bc")`<br>`pill(y, "green", "y") = (b^2)/c`

{.r.reveal(when="blank-5")} [Continue](btn:next)

{.reveal(when="next-2")} But remember that `c = pill(x,"blue","x") + pill(y,"green","y")`.
Therefore

{.text-center.reveal(when="next-2")} `c = a^2/c + b^2/c`

{.text-center.reveal(when="next-2")} `c^2 = a^2 + b^2`

{.reveal(when="next-2")} Once more, we’ve proven Pythagoras’ theorem! _{span.qed}_

:::

---
> id: pythagoras-2

Much about Pythagoras’ life is unknown, and no original copies of his work have
survived. He founded a religious cult, the _Pythagoreans_, that practiced a kind
of  “number worship”. They believed that all numbers have their own character,
and followed a variety of other bizarre customs.

::: column.grow

The Pythagoreans are credited with many mathematical discoveries, including
finding the first [irrational number](gloss:irrational-numbers), `sqrt(2)`.
Irrational numbers cannot be expressed as a simple fraction – a concept the
Pythagoreans found deeply troubling and (unsuccessfully) tried to cover up!

::: column(width=400)

    x-img(src="images/pythagoreans.jpg" width=400 height=200 lightbox)

{.caption} “Pythagoreans celebrate sunrise” by Fyodor Bronnikov

:::

---
> id: distance-formula

### Calculating Distances

One of the most important application of Pythagoras’ Theorem is for calculating
distances.

::: column.grow
{.r} On the right you can see two points in a coordinate system. We could
measure their distance using a ruler, but that is not particularly accurate.
Instead, let’s try using Pythagoras.
[Continue](btn:next)

{.reveal(when="next-0")} We can easily count the [{.blue}horizontal distance](target:dx) along the
_x_-axis, and the [{.red}vertical distance](target:dy) along the _y_-axis. If we draw those two
lines, we get a [{.yellow}right-angled triangle](target:triangle).

{.reveal(when="next-0")} Using Pythagoras,

| `d^2` | `= pill(var("b.x-a.x"),"blue","dx")^2 + pill(var("b.y-a.y"),"red","dy")^2`   |
| `d^2` | `= var("(b.x-a.x)**2 + (b.y-a.y)**2")`                                       |
| `d`   | `= sqrt(var("(b.x-a.x)**2 + (b.y-a.y)**2")) = var("round(distance(a,b),4)")` |
{.eqn-system.reveal(when="next-0")}

::: column(width=300)

    x-geopad(width=300 height=300 x-axis="-0.5,11.5,1" y-axis="-0.5,11.5,1" grid snap): svg
      circle.move.pulsate(name="a" cx="2" cy="5" label="(${a.x},${a.y})")
      circle.move.pulsate(name="b" cx="9" cy="10" label="(${b.x},${b.y})")
      path(x="segment(a,b)" label="d")
      path.blue.reveal(x="segment(a,point(b.x,a.y))" label="${b.x-a.x}" mark="arrow" when="next-0" target="dx")
      path.red.reveal(x="segment(point(b.x,a.y),b)" label="${b.y-a.y}" mark="arrow" when="next-0" target="dy")
      path.yellow.fill.transparent#tri-move(target="triangle" x="polygon(a,b,point(b.x,a.y))")

:::

---
> id: distance-formula-1

This method works for _any_ two points:

::: .theorem
__The Distance Formula__<br>
If you are given two points with coordinates  (`x_1`,`y_1`) and (`x_2`,`y_2`),
the distance between them is

{.text-center} `d^2=(x_2−x_1)^2+(y_2−y_1)^2`

{.text-center} `d=sqrt((x_2−x_1)^2+(y_2−y_1)^2)`
:::

---
> id: pythagorean-triples

### Pythagorean Triples

As you moved the [vertices of the triangle](->#tri-move) in the previous step,
you might have noticed that in most cases, the length of the hypothenuse _d_
ended up being a [[decimal number|fraction|integer]].
_{span.reveal(when="blank-0")}However there are a few examples of right-angled
triangles where the lengths of *all three sides* happens to be *whole numbers*._

---
> id: pythagorean-triples-1

::: column.grow
One famous example is the 3-4-5 triangle. Since `3^2 + 4^2 = 5^2`, any triangle
with sides of length 3, 4 and 5 must be right-angled.

The ancient Egyptians didn’t know about Pythagoras’ theorem, but they did know
about the 3-4-5 triangle. When building the pyramids, they used knotted ropes
of lengths 3, 4 and 5 to measure perfect right angles.
::: column(width=400)

    img(src="images/egypt.png" width=400 height=220)

:::

Three integers like this are called [__Pythagorean Triples__](gloss:pythagorean-triple).
(3, 4, 5) is one example of a Pythagorean triple. If we multiply every number
by 2, we get another Pythagorean triple: (6, 8, [[10]]).

---
> id: pythagorean-triples-grid
> goals: p0 p1 p2 p3 p4 p5

We can think of these triples as grid points in a coordinate systems. For a
valid Pythagorean triples, the distance from the origin to the grid point has to
be a whole number. Using the coordinate system below, can you find any other
Pythagorean triples?

    figure: x-geopad.r.no-background(width=450 height=450 x-axis="0,16.5,1" y-axis="0,16.5,1" grid axes padding="10 10 25 25" snap)
      svg
        circle.move.pulsate(cx=4 cy=10 name="a")
        path.thick(x="polygon(point(0,0),a,point(a.x,0))")
      .label.var(style="left:${26+12.5*a.x}px; top:425px") ${a.x}
      .label.var(style="left:${26+25*a.x}px; top:${425-12.5*a.y}px") ${a.y}
      .label.var(style="left:${26+12.5*a.x}px; top:${425-12.5*a.y}px") ${round(a.length,2)}

{.reveal(when="p0 p1 p2 p3 p4 p5")} Do you notice any pattern in the
distribution of these points?

    // The mathematician Euclid found a clever method for generating new
    // Pythagorean triples. First, we need to pick any two integers _m_ and _n_:
    // {.text-center} _m_ = ${m}{m|2|1,20,1} _{span.space}_ _n_ = ${n}{n|2|1,20,1}
    // Now we can calculate the three numbers that make up the triple:
    // {.text-center} `2mn =` ${2×m×n}, `m^2 - n^2 =` ${m×m-n×n},  `m^2 + n^2 =` ${m×m+n×n}
    // And there you have your pythagorean triple! You can check that a2 + b2 = c2.