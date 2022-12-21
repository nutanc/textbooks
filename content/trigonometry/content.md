# Trigonometry

## Concrete Introduction to Trigonometry

> description: "Trigonomentry allows you to find relations between angles and sides of a triangle."
> color: "#3566DE"
> level: Intermediate
> next: polyhedra
> id: trigonometry
> section: trigonometry

::: column.grow
Are you sitting in a room? Just look across. Do you see a wall?
Let's say this can be represented like the image to the side. If I ask you to measure the height,
how can you do it?
Which is easier to measure? The length or the height? It's the [[length|height]].

_{span.reveal(when="blank-0")} Obviously it's the length because it is on the floor. You can use a tape or just measure with your feet. 
But how can you climb up a wall to measure the height. We need better tools and methods to measure heights of tall things like mountains or buildings._

::: column(width=240)

    x-geopad(width=280 height=260): svg
      circle(name="a" x="point(30,220)" label="Person")
      circle(name="b" x="point(210,40)" label="Wall Top")
      circle(name="c" x="point(210,220)" label="Wall Bottom")
      path.blue(x="segment(b,c)" label="Wall" target="opp")
      

:::

---
> id: trigonometry-intro
> section: trigonometry-intro
> goals: s0 s1

::: column(width=300)

    x-geopad.sticky(width=300 height=260 tools="move|line" projections="no"): svg
      circle(name="a" x="point(30,220)" label="Person")
      circle(name="b" x="point(210,40)" label="Wall Top")
      circle(name="c" x="point(210,220)" label="Wall Bottom")
      circle.red.reveal(name="e" x="point(150,225)" label="6cm" when="s1" animation="pop")
      path.red.reveal(name="d" x="angle(b,a,c)" label="45" when="blank-0" animation="pop")
      path.red.reveal(name="f" x="angle(a,c,b)" label="90" when="blank-1" animation="pop")
      path.blue(x="segment(b,c)" label="Wall" target="opp")

::: column.grow
Now, please draw a line from "Person" point to "Wall Bottom" point. 
_{span.reveal(when="s1")}Next draw a line from "Person" point to "Wall Top" point
._
_{span.reveal(when="s0")}What do you see? It's in the shape of a [[triangle]]
._  

_{span.reveal(when="blank-0")}Very good. As you can see triangles are every where :)
Now let's see what else we can deduce. We can see that length of the floor is 6cm and 
when the person look up at the ceiling his eyes make a 45 degree angle. We also know that 
the angle between the wall and the floor is [[90|180]] degrees.
._  

_{span.reveal(when="blank-1")}So, we have a right angle triangle and one of it's angle is 45 degrees.
That makes this an [[isosceles|equilateral]] triangle.
._ 
_{span.reveal(when="blank-2")} And from the properties of right angle isosceles triangles we know that opposite side=adjacent size.
In our scenario we see that the adjacent side(floor) length is 6cm. So the opposite side(height) should be [[6|12|18]]cm
._ 
:::


_{span.reveal(when="blank-3")}
Congratulations! By observing that we have a triangle shape in the real world and using our knowledge of triangles we were 
able to calculate the height of the wall without climbing it :).
Let us now move onto a formal introduction to Trigonometry.
._

---
> id: trigonometry-0
> section: trigonometry-0

## Introduction to Trigonometry
So far we have seen relationships between the __angles__ of triangles (e.g.
they always sum up to 180°) and relationships between the __sides__ of triangles
(e.g. Pythagoras). But there is nothing that _connects_ the size of angles and
sides.

For example, if I know the three sides of a triangle, how do I find the size of
its angles – without drawing the triangle and measuring them using a protractor?
This is where __Trigonometry__ comes in!

    figure: img(src="images/trig-om-nom.jpg" width=200 height=200)

---
> id: trigonometry-1

::: column.grow
Imagine we have a right-angled triangle, and we also know one of the two other
angles, __{.m-red}α__. We already know that the longest side is called the
__[{.yellow}hypotenuse](target:hyp)__. The other two are usually called the
__[{.green}adjacent](target:adj)__ (which is next to angle __{.m-red}α__) and
the __[{.blue}opposite](target:opp)__ (which is opposite angle __{.m-red}α__).
::: column(width=240)

    x-geopad(width=240 height=160): svg
      circle(name="a" x="point(30,120)")
      circle(name="b" x="point(210,40)")
      circle(name="c" x="point(210,120)")
      path(x="angle(a,c,b)")
      path.red(x="angle(b,a,c)" label="α")
      path.yellow(x="segment(a,b)" label="Hypotenuse" target="hyp")
      path.blue(x="segment(b,c)" label="Opposite" target="opp")
      path.green(x="segment(a,c)" label="Adjacent" target="adj")

:::

Let us look at the below 4 right angle triangles

::: column(width=240)
    x-geopad(width=240 height=160): svg
      circle(name="a" x="point(30,120)")
      circle(name="b" x="point(210,40)")
      circle(name="c" x="point(210,120)")
      path(x="angle(a,c,b)")
      path.red(x="angle(b,a,c)" label="30")
      path.yellow(x="segment(a,b)" label="10cm" target="hyp")
      path.blue(x="segment(b,c)" label="5cm" target="opp")
      path.green(x="segment(a,c)" label="Adjacent" target="adj")
::: column(width=240)
    x-geopad(width=240 height=160): svg
      circle(name="a" x="point(30,120)")
      circle(name="b" x="point(210,40)")
      circle(name="c" x="point(210,120)")
      path(x="angle(a,c,b)")
      path.red(x="angle(b,a,c)" label="30")
      path.yellow(x="segment(a,b)" label="28cm" target="hyp")
      path.blue(x="segment(b,c)" label="14cm" target="opp")
      path.green(x="segment(a,c)" label="Adjacent" target="adj")
::: column(width=240)
    x-geopad(width=240 height=160): svg
      circle(name="a" x="point(30,120)")
      circle(name="b" x="point(210,40)")
      circle(name="c" x="point(210,120)")
      path(x="angle(a,c,b)")
      path.red(x="angle(b,a,c)" label="30")
      path.yellow(x="segment(a,b)" label="8cm" target="hyp")
      path.blue(x="segment(b,c)" label="4cm" target="opp")
      path.green(x="segment(a,c)" label="Adjacent" target="adj")
::: column(width=240)
    x-geopad(width=240 height=160): svg
      circle(name="a" x="point(30,120)")
      circle(name="b" x="point(210,40)")
      circle(name="c" x="point(210,120)")
      path(x="angle(a,c,b)")
      path.red(x="angle(b,a,c)" label="30")
      path.yellow(x="segment(a,b)" label="22cm" target="hyp")
      path.blue(x="segment(b,c)" label="11cm" target="opp")
      path.green(x="segment(a,c)" label="Adjacent" target="adj")

:::

Please fill up the values in the below table based on the images above:

::: .overflow-wrap.overflow-table

|S.No| Angle(`theta`)| Opposite Side | Hypotenuse  | `OppositeSide/Hypotenuse`|
|----| ------------- |-------------  |-----        | ----------------------    |
|1   |    30           |        [[5]]       |     [[10]]        |        [[0.5 (Specify the answer as a decimal. For example 0.2.)]]                   |
|2   |    30           |        [[14]]       |      [[28]]       |       [[0.5]]                    |           
|3   |    30           |        [[4]]       |      [[8]]       |         [[0.5]]                  |
|4   |    30           |        [[11]]       |      [[22]]       |       [[0.5]]                    |
{.grid}
:::
_{span.reveal(when="blank-11")} As you can see, though the opposite side and hypotenuse values are changing, as long as `theta` is 30 degrees
the ratio of opposite side/hypotenuse always remains as `1/2` or 0.5.
._

_{span.reveal(when="blank-11")} Experiment with different triangles and see if this holds. Experiment to see if the ratio of different sides (adjacent side / hypotenuse,opposite side/adacent side,hypotenuse/opposite side,hypotenuse/adajacent side,adjacent side/opposite side) also has this property.
._

_{.span.reveal(when="blank-11")}
There are many different triangles that have angles __{.m-red}α__ and 90°, but
from the [AA condition](gloss:triangle-aa) we know that they are all
[[similar|congruent]]:
._

    figure: img.reveal(src="images/triangles.svg" width=600 height=240 when="blank-11")

---
> id: trig-functions
## Trigonometric ratios

Since all of these triangles are similar, we know that their sides are
proportional. In particular, the following ratios are the same for all of these
triangles:

{.text-center} `class("Opposite","m-blue b") / class("Hypotenuse","m-yellow b")`
_{span.space}_
`class("Adjacent","m-green b") / class("Hypotenuse","m-yellow b")`
_{span.space}_
`class("Opposite","m-blue b") / class("Adjacent","m-green b")`

Let’s try to summarise this: we picked a certain value for __{.m-red}α__, and
got lots of similar, right-angled triangles. All of these triangles have the
same ratios of sides. Since __{.m-red}α__ was our only variable, there must be
some relationship between __{.m-red}α__ and those ratios.

These relationships are the __Trigonometric ratios__ – and there are three of
them:

::: .theorem
The three Trigonometric ratios are relationships between the angles and the
ratios of sides in a right-angles triangle. They each have a name, as well as
a 3-letter abbreviation:

::: column.grow

    ul
      li.display.md __Sine:__ `sin(class(α,"m-red b")) = class("Opposite","m-blue b") / class("Hypotenuse","m-yellow b")`
      li.display.md __Cosine:__ `cos(class(α,"m-red b")) = class("Adjacent","m-green b") / class("Hypotenuse","m-yellow b")`
      li.display.md __Tangent:__ `tan(class(α,"m-red b")) = class("Opposite","m-blue b") / class("Adjacent","m-green b")`
Easy way to remember  name and sides: SOH-CAH-TOA

::: column(width=240)

    x-geopad(width=240 height=160): svg
      circle(name="a" x="point(30,120)")
      circle(name="b" x="point(210,40)")
      circle(name="c" x="point(210,120)")
      path(x="angle(a,c,b)")
      path.red(x="angle(b,a,c)" label="α")
      path.yellow(x="segment(a,b)" label="Hypotenuse")
      path.blue(x="segment(b,c)" label="Opposite")
      path.green(x="segment(a,c)" label="Adjacent")

:::
:::

Let's expand on this idea. We have seen

{.text-center} `class("Opposite","m-blue b") / class("Hypotenuse","m-yellow b")`
_{span.space}_
`class("Adjacent","m-green b") / class("Hypotenuse","m-yellow b")`
_{span.space}_
`class("Opposite","m-blue b") / class("Adjacent","m-green b")`

and given names for these ratios. 

What about the inverse of these ratios?

{.text-center} `class("Hypotenuse","m-yellow b") / class("Opposite","m-blue b")`
_{span.space}_
`class("Hypotenuse","m-yellow b") / class("Adjacent","m-green b")`
_{span.space}_
`class("Adjacent","m-green b") / class("Opposite","m-blue b")`

Let's give these ratios also a name.
::: .theorem
The inverse of the above ratios also each have a name, as well as
a 3-letter abbreviation:

::: column.grow

    ul
      li.display.md __Cosecant:__ `cosec(class(α,"m-red b")) = class("Hypotenuse","m-yellow b") / class("Opposite","m-blue b")`
      li.display.md __Secant:__ `sec(class(α,"m-red b")) = class("Hypotenuse","m-yellow b") / class("Adjacent","m-green b")`
      li.display.md __Cotangent:__ `cot(class(α,"m-red b")) = class("Adjacent","m-green b") / class("Opposite","m-blue b")`

::: column(width=240)

    x-geopad(width=240 height=160): svg
      circle(name="a" x="point(30,120)")
      circle(name="b" x="point(210,40)")
      circle(name="c" x="point(210,120)")
      path(x="angle(a,c,b)")
      path.red(x="angle(b,a,c)" label="α")
      path.yellow(x="segment(a,b)" label="Hypotenuse")
      path.blue(x="segment(b,c)" label="Opposite")
      path.green(x="segment(a,c)" label="Adjacent")

:::
:::

These are the 6 trigonometric ratios of an acute angle. The angle `class(α,"m-red b")` is related to the sides of the triangle in these 6 different ways only.

::: column.grow

Now, when we consider `class(β,"m-green b")`

`sin(class(β,"m-green b"))`=[[AC/AB|BC/AB|AC/BC]]
`cos(class(β,"m-green b"))`=[[BC/AB|AC/AB|AC/BC]]
`tan(class(β,"m-green b"))`=[[AC/BC|BC/AB|AC/AB]]

::: column(width=240)

    x-geopad(width=240 height=160): svg
      circle(name="a" x="point(30,120)" label="A")
      circle(name="b" x="point(210,40)" label="B")
      circle(name="c" x="point(210,120)" label="C")
      path.green(x="angle(c,b,a)" label="β")
      path.red(x="angle(b,a,c)" label="α")
      path.yellow(x="segment(a,b)" label="3k")
      path.blue(x="segment(b,c)" label="k")
      path.green(x="segment(a,c)")

:::


---
> id: trig-functions-1

::: column.grow

Let's consider the triangle ABC. Two sides are given, AB=3k and BC=k. From trigonometric ratios we can find the value of [[sin|cos|tan]].

{.reveal(when="blank-0")} sin A=`1/3`.To find the values of cos A and tan A we do not have the value for AC. We know that ABC is a [[right angled|isosceles|equilateral]] triangle. And we know two sides, AB and BC.So if we have to find the third side AC we can use the [[pythagoras]] theorem.

:::


---
> id: trig-functions-1proof

::: column.grow
::: .theorem

__Solving for AC__<br>

{.text-center} `AC^2 = AB^2 - BC^2=(3k)^2-(k)^2=8k^2=(2 sqrt(2) k)^2`

{.text-center} `AC = +-(2 sqrt(2) k)`

{.text-center} `AC = (2 sqrt(2) k)`
:::
:::

::: column(width=240)

    x-geopad(width=240 height=160): svg
      circle(name="a" x="point(30,120)" label="A")
      circle(name="b" x="point(210,40)" label="B")
      circle(name="c" x="point(210,120)" label="C")
      path.red(x="angle(c,a,b)" label="α")
      path.yellow(x="segment(a,b)" label="3k")
      path.blue(x="segment(b,c)" label="k")
      path.green(x="segment(a,c)" label="(2 sqrt(2) k)")


::: column.grow

We now have all the sides of the triangle. 

cos A=[[2 sqrt(2)/3 | 1/3 |1/2 sqrt(2)]]
tan A=[[1/2 sqrt(2) | 1/3 |2 sqrt(2)/3]]

:::

::: column.grow

Let's one more example. From the figure tan A=[[4/3|3/4|1/4]]

Apply Pythagoras theorem.

AC=[[5k]] sin A=[[4/5|3/5|3/4]] cos A=[[3/5|4/5|3/4]]

::: column(width=240)

    x-geopad(width=240 height=160): svg
      circle(name="a" x="point(30,120)" label="A")
      circle(name="c" x="point(210,40)" label="C")
      circle(name="b" x="point(210,120)" label="B")
      path.red(x="angle(c,a,b)" )
      path.yellow(x="segment(a,b)" label="3k" )
      path.blue(x="segment(b,c)" label="4k")
      path.green(x="segment(a,c)" )

:::


---
> id: trig-ratios45

## Trigonometric Ratios of Some Specific Angles


::: column.grow

Look at the triangle to the side

△AFD has an ∠DAF of 45 degrees.

It is a right angled triangle.

If ∠A=45 then ∠D=[[45]]

This means DF=[[AF]]

::: column(width=240)

    x-geopad(width=240 height=240): svg
      circle(name="a" x="point(30,220)" label="A")
      circle(name="d" x="point(160,80)" label="D")
      circle(name="f" x="point(160,220)" label="F")
      path.red(x="angle(d,a,f)" label="45")
      path.green(x="segment(a,d)" )
      path.blue(x="segment(d,f)" )
      path.blue(x="segment(a,f)" )

:::

::: column.grow
::: .theorem
{.reveal(when="blank-1")} Let us assume DF=AF=a.

From Pythogoras theorem we have

`AD^2=AF^2+DF^2`

`AD^2=a^2+a^2=2a^2`

`AD=a*sqrt(2)`

sin A = sin 45 = `blank("DF","AD","AF")/blank("AD","DF","AF")` _{span.reveal(when="blank-3")} = `a/ (a*sqrt(2))` = `1/sqrt(2)`._

cos A = cos 45 = `blank("AF","AD","DF")/blank("AD","DF","AF")` _{span.reveal(when="blank-3")} = `a/ (a*sqrt(2))` = `1/sqrt(2)`._

tan A = tan 45 = `blank("DF","AD","AF")/blank("AF","DF","AD")` _{span.reveal(when="blank-3")} = `a/ a` = `1`._


:::
:::

---
> id: trig-ratios
> section: trig-ratios
> goals: s0



::: column.grow

Let us now try to find the trigonometric ratios for 60 degrees.
When you hear 60 degress the triangle that comes to mind is [[equilateral|isosceles|scalene]].
:::

::: column.grow
{.reveal(when="blank-0")}
△ABC has an ∠A of 60 degrees.

It is an equilateral triangle. Draw a perpendicular from C to side AB.


::: column(width=240)

    x-geopad.sticky(width=240 height=240 tools="move|line" projections="no"): svg
      circle(name="a" x="point(30,220)" label="A")
      circle(name="c" x="point(125,80)" label="C")
      circle(name="b" x="point(220,220)" label="B")
      circle(name="d" x="line(a,b).midpoint" label="D")
      path.red(x="angle(c,a,b)" label="60")
      path.red.reveal(x="angle(d,c,a)" label="30" when="s0")
      path.blue(x="segment(a,c)" label="2a")
      path.blue(x="segment(a,b)" )
      path.blue(x="segment(b,c)" )
      path.yellow.reveal(x="segment(a,d)" when="blank-4")
      path.green.reveal(x="segment(a,c)" when="blank-3" label="2a")
      path.yellow.reveal(x="segment(a,d)" when="blank-4" label="a")
:::

::: column.grow
::: .theorem
{.reveal(when="s0")} ∆ACD is [[congruent|similar]] to ∆CDB.

AD=DB=`1/2`AB

Since ∆ABC is equilateral, AB=BC=AC.

∆ACD is a [[right angle triangle| equilateral]] 

{.reveal(when="blank-3")} If AC=2a, then AD=[[a|3a]]

{.reveal(when="blank-4")} For ∆ACD we have AC=2a and AD=a. We need to find CD. Using pythogoras theorem CD=`blank("a*sqrt(3)","3a","a")`

{.reveal(when="blank-5")}
Now that we have all the sides:

sin A = sin 60 = `blank("CD","AD","AF")/blank("AC","DF","AF")` _{span.reveal(when="blank-6")} = `a*sqrt(3)/ (2a)` = `sqrt(3)/2`._

cos A = cos 60 = `blank("AD","BC","DF")/blank("AC","DF","AF")` _{span.reveal(when="blank-7")} =  `1/2`._

tan A = tan 60 = `blank("CD","AD","AF")/blank("AD","DF","BC")` _{span.reveal(when="blank-8")} =  `sqrt(3)`._

sin ACD = sin 30 = `blank("AD","BC","AF")/blank("AC","DF","AF")` _{span.reveal(when="blank-9")} = `a/ 2*a` = `1/2`._

cos ACD = cos 30 = `blank("CD","AD","DF")/blank("AC","DF","AF")` _{span.reveal(when="blank-10")} = `a*sqrt(3)/ (2a)` = `sqrt(3)/2`._

tan ACD = tan 30 = `blank("AD","BC","AF")/blank("AC","DF","AD")` _{span.reveal(when="blank-11")} =  `1/sqrt(3)`._


:::
:::


---
> id: trig-ratios3
> section: trig-ratios3

::: column.grow
What about 90 degrees and 0 degrees. Let's see if we can easily find the trigonometric ratios of these special angles.
When we talk about the sine of an angle, we are talking about the ratio of the length of the opposite side of a right triangle to the length of the hypotenuse of the triangle. So, if we have a right triangle with one angle equal to 0 degrees, the opposite side of the triangle will have a length of 0 because it is the side that is perpendicular to the angle. And, if the opposite side has a length of 0, then the ratio of that side to the hypotenuse will also be 0. So, we can say that sin 0 = 0.

:::

::: column(width=300)

    x-geopad.sticky(width=300): svg
      circle(name="a" cx=40 cy=220 label="A")
      circle(name="c" cx=260 cy=220 label="C")
      circle.move(name="b" cx=260 cy=80 label="B")

      path.fill.green(x="polygon(a,b,c)" target="gap")

      path.dark(x="polygon(a,b,c)")
      path.blue.reveal(x="segment(b,c)" label="height"  delay="1000" target="height")
      path.blue.reveal(x="angle(b,a,c).sup" delay="1000" target="height")
      path.red.reveal(x="segment(a,c)" label="base" delay="1000" target="base")


::: column.grow
Let's try this out with a simple exercise. Check the triangle to the side. Move the top of the triangle(B) towards C. As you can see, as the angle decreases, the size of BC(height) also decreases.

In this triangle sinA=[[BC/AB]]. But as ∠A becomes 0 BC also tends towards [[0]]. And if BC=0 then `BC/AC`=[[0]]. That means sinA=[[0]]
:::


::: column(width=300)

    x-geopad.sticky(width=300): svg
      circle.move(name="d" cx=40 cy=220 label="A")
      circle(name="f" cx=260 cy=220 label="C")
      circle(name="e" cx=260 cy=80 label="B")

      path.fill.green(x="polygon(d,e,f)" target="gap")

      path.dark(x="polygon(d,e,f)")
      path.blue.reveal(x="segment(e,f)" label="height"  delay="1000" )
      path.blue.reveal(x="angle(e,d,f).sup" delay="1000" )
      path.red.reveal(x="segment(d,f)" label="base" delay="1000" )


::: column.grow
As in the previous example, move A towards C. We can see that as the ∠A increases towards 90 degrees, AB becomes almost equal to [[BC]].

sinA=`BC/AB`. When ∠A=90 BC is almost equal to AB sin 90=`BC/AB`
:::

::: column.grow
::: theorem
The below table shows the most common angles and their trigonometric ratios.
|| 0| 30 | 45  | 60| 90 |
|----| ------------- |-------------  |-----        | ----------------------    |-----------------
|Sin  |    0           |        `1/2`       |     `1/sqrt(2)`       |      `sqrt(3)/2`                    |1|
|Cos   |    1           |        `sqrt(3)/2`      |     `1/sqrt(2)`       |       `1/2`                    |  0         |
|Tan   |    0           |        `1/sqrt(3)`      |      1      |         `sqrt(3)`                  | Not Defined|
|Cosec   |    Not Defined           |       2    |      `sqrt(2)`     |        `2/sqrt(3)`                   |1|
|Sec   |    1           |         `2/sqrt(3)`       |       `sqrt(2)`      |       2                   | Not Defined |
|Cot   |     Not Defined            |       `sqrt(3)`       |      1       |       `1/sqrt(3)`                   |0|
:::
:::

---
> id: trig-complimentary
> section: trig-complimentary

## Trigonometric Ratios Of Complementary Angles

::: column(width=240)

    x-geopad(width=240 height=240): svg
      circle(name="a" x="point(30,220)" label="A")
      circle(name="b" x="point(160,80)" label="B")
      circle(name="c" x="point(160,220)" label="C")
      path.red(x="angle(a,c,b)" label="90")
      path.green(x="segment(a,b)" )
      path.blue(x="segment(b,c)" )
      path.yellow(x="segment(a,c)" )

:::

::: column.grow
Two angles are said to be complementary if the sum of their angles is 90 degrees. In triangle ABC, the pair of complementary angles are [[A,B|A,C|B,C]]

{.reveal(when="blank-0")} So A+B=90

sin A=`BC/AB` cos A=`AC/AB` tan A= `BC/AC` cosec A =`AB/BC` sec A=`AB/AC` cot A=`AC/BC`

Let us now define trigonometric ratios for angle C in terms of it's complementary angle.

C=90-A

So sin C= sin(90-A)=`AC/AB`. But `AC/AB` is nothing but [[cosA|sinA|tanA]]

{.reveal(when="blank-1")}
cos C= cos (90-A)=`BC/AB`=[[sinA|cosA|tanA]]
tan C= tan (90-A)=`AC/BC`=[[cotA|cosA|sinA]]

::: .theorem

sin(90-A)=cosA         cosec(90-A)=secA

cos(90-A)=sinA         sec(90-A)=cosec(A)

tan(90-A)=cot A        cot(90-A)=tanA

Note : tan 0° = 0 = cot 90°, sec 0° = 1 = cosec 90° and sec 90°, cosec 0°, tan 90° and
cot 0° are not defined.
:::

:::


---
> id: trig-identities

## Trigonometric Identities
Trigonometric identities are important to learn because they allow us to solve equations involving trigonometric functions. These identities are based on the fundamental relationships between the angles and sides of triangles, and they can be used to simplify expressions, to find the exact values of trigonometric functions, and to prove other mathematical results. They are a fundamental tool in mathematics, and they are used in a wide range of applications, from geometry and calculus to engineering and physics.

Let us look at identifying some trigonometric identities.

::: column(width=240)

    x-geopad(width=240 height=240): svg
      circle(name="a" x="point(30,220)" label="A")
      circle(name="b" x="point(160,80)" label="B")
      circle(name="c" x="point(160,220)" label="C")
      path.red(x="angle(a,c,b)" label="90")
      path.green(x="segment(a,b)" )
      path.blue(x="segment(b,c)" )
      path.yellow(x="segment(a,c)" )

:::

::: column.grow

Given the triangle ABC, the identity we already know is `AC^2+BC^2=AB^2`

::: .theorem
If we have to rephrase the above equation in terms of sin and cos, how can we do it? We know that sin and cos have ratios with the hypotenuse in the denominator.
So, we need to divide each term in the equation with `AC^2/blank(AB^2,AC^2,BC^2)+BC^2/blank(AB^2,AC^2,BC^2)=AB^2/blank(AB^2,AC^2,BC^2)`

{.reveal(when="blank-2")} `(cosA)^2+(sinA)^2=1`

`cos^2 A+sin^2 A=1`

This is true for all A such that 0° ≤ A ≤ 90°. So, this is a trigonometric identity.

If we have to get an identity in terms of tan we need to divide `AC^2+BC^2=AB^2` with the square of [[AC|AB|BC]]

{.reveal(when="blank-2")} `1 +tan^2 A=sec^2 A`

Similarly we can find `1 +cot^2 A=cosec^2 A`
:::

Using these identities, we can express each trigonometric ratio in terms of other
trigonometric ratios, i.e., if any one of the ratios is known, we can also determine the
values of other trigonometric ratios.

Let us see how we can do this using these identities.

::: .theorem
If tan A = `1/sqrt(3)`, then, cot A = `blank(sqrt(3),3,1/3)`.

{.reveal(when="blank-4")}Look above and see which identity we can use. We need to choose an identity which has tan in it.

{.reveal(when="blank-4")} Since, `sec^2 A = 1 + tan^2 A = 1+1/3=4/3. sec A= 2/sqrt(3)`

{.reveal(when="blank-4")} The inverse of sec A is nothing but [[cos A|sin A|tan A]]

{.reveal(when="blank-5")} So cos A=`sqrt(3)/2`.

{.reveal(when="blank-5")} Now that we have cos A, we need to pick an identity which has cos in it. 

{.reveal(when="blank-5")}`sin^2A+cos^2A=1`. 

{.reveal(when="blank-5")}So sinA= `blank(sqrt(1-cos^2A),sqrt(1-tan^2A),1-cos^2A)`.



:::

---
> id: trig-identities-tools

### Trigonometric Tools
::: column.grow
Some of the tools required to solve trignometric ratio problems

__{.m-red}1)Reciprocal rule:__

sinA=`1/cosecA`

cosA=`1/secA`

tanA=`1/cotA`

__{.m-red}2)Quotient rule:__

tanA=`sinA/cosA`

cotA=`cosA/sinA`

__{.m-red}3)Identities:__

`sin^2A+cos^2A=1` ==>  `cos^2A=1-sin^2A` and `sin^2A=1-cos^2A`

`1+tan^2A=sec^2A==>sec^2A-tan^2A=1`. `tan^2A=sec^2A-1`

`cot^2A+1=cosec^2A==>cosec^2A-cot^2A=1` .`cot^2A= cosec^2A-1`

__{.m-red}4)Algebric identities:__

`(a+b)^2=a^2+2ab+b^2`

`(a-b)^2=a^2-2ab+b^2`

`a^2-b^2=(a+b)(a-b)`

`(a+b)^3=a^3+b^3+3ab(a+b)`

`(a-b)^3=a^3-b^3-3ab(a-b)`

Tips to solve problems using Trignometric ratios and identities:

1)Always start from the complex side-  no. of terms,no. of operations,trignometric ratio,presence of root im the question.
Eg:1)`sqrt((1+cosA)/(1-cosA))`=cosecA+cotA;start from [[LHS|RHS]] 
{.reveal(when="blank-1")}
as it has [[no. of terms|no. of operations|trignometric ratio|presence of root]]
{.reveal(when="blank-4")}
:::

---
> id: trig-applications

## Applications of trigonometry
::: column.grow
 Before we get into some real world examples of trigonometry, lets define some common terms we use. Mainly, line of sight, horizontal level, angle of elevation and angle of depression.

::: .sticky-wrap

    figure.sticky.mountain
      x-geopad.no-background(width=800 height=350): svg
        image(href="images/mountain.svg" height=240 width=770 y=30)
        image(href="images/stickman.svg" height=75 width=50 y=210 x=-10)
        image(href="images/stickman.svg" height=75 width=50 y=7 x=575)
        circle(name="a" x="point(25, 230)" target="points" label="P1")
        circle(name="x" x="point(573, 30)" target="" label="P2")
        circle(name="y" x="point(573, 230)" target="" label="P3")

        path.fill.red(x="angle(x,a,y)" label="Angle of elevation" target="angles ang" size=60)
        path.fill.blue(name="angle-b" x="angle(y,x,a)" label="Angle of depression" target="b angles" size=100)
        path(x="angle(b,y,x)")

        path.yellow(x="segment(a,y)" target="base right" label="horizontal level")
        path.yellow(name="side-d" x="segment(a,x)" target="d right" label="line of sight")
        path.yellow(x="segment(x,y)" target="right" label="height")

:::

Look at the figure above. A person is looking at the top of the hill from the ground level and another person is watchin the ground from the top of the hill.
In this figure, the line P1P2 drawn from the eye of P1 to the top of the
mountain is called the [{.yellow} line of sight](target:d). P1 is looking at the top of the mountain. The
angle formed by the line of sight with the horizontal, is called the [{.red} angle of elevation ](target:ang) of the top of the mountain from the eye of the student.
Thus, the line of sight is the line drawn from the eye of an observer to the point
in the object viewed by the observer. The angle of elevation of the point viewed is
the angle formed by the line of sight with the horizontal when the point being viewed is
above the horizontal level, i.e., the case when we raise our head to look at the object.

Now, consider the situation of P2. P2 is standing on the moutain and looking down at P1. In this case, the line of
sight is below the horizontal level. The angle so formed by the line of sight with the
horizontal is called the [{.blue} angle of depression ](target:b).
Thus, the angle of depression of a point on the object being viewed is the angle
formed by the line of sight with the horizontal when the point is below the horizontal
level, i.e., the case when we lower our head to look at the point being viewed.

If you want to find the height of the mountain
without actually measuring it, what information do you need? You would need to know
the following:

1. The distance P1P3 at which P1 is standing from the foot of the mountain.
2. The angle of elevation.
3. The height of P1.

We need the height of P1 because we need to add that as the triangle is formed only till the horizontal level.

Given that we know the distance of P1P3 and the angle the trigonometric ratio we can use to find the height is [[tan(angle of elevation) | sin(angle of elevation) | cos(angle of elevation)]]


---
> id: trig-applicationsgame

So the height of the mountain is (tan(angle of elevation)*Distance of P1 from the mountain)+ height of P1.
### Text based adventure game

Percy is on a quest. His goal is to find the flower of life so that he can take it back to help his friend who was stabbed by a minotaur.
He starts on the journey and walks through the vast country side. Suddenly he comes upon a big chasm. He is at the edge of the chasm and the other edge is above him at some distance.
His keen sense of angles tells him that if he looks up to the top of the other end, the angle of elevation is 60 degrees. But unfortunately Percy is bad at trigonomtery.

This is where you come in. Athena has appointed you as the guardian angel of Percy. Percy can reach out to at any time and ask you for help.

Percy: I am stuck. I am at the end of the chasm. What should I do?

You: What is the angle of elevation?

Percy: I think it is around 60 degrees.

You: On what mountain are you standing?

Percy: On mount Sicarus.

You: What is the mountain in front of you?

Percy: Mount Janus.

You: Good. I find from the record books that mount Sicarus is 700 meters in height and mount Janus is 737 meters in height. So the height of the chasm you need to scale is [[37]] meters.

{.reveal(when="blank-0")} Percy: But how will the height help me. Should I set the magic ladder to 37 meters? You know we have to keep the right setting. If we set it to too long or too short the magic ladder will self destruct.

{.reveal(when="blank-0")} You: [[No|Yes]]

{.reveal(when="blank-1")} You: That's the height you need to scale. But the length you need to cross is different. Let's see what facts we have. We know the angle is 60 degrees and the opposite side is 37 meters. So let me apply my trigonometric knowledge. We can use the following trigonometric ratio: [[sin 60| cos 60| tan 60]].

{.reveal(when="blank-2")} You: Solving for the sin 60 equation we get the length as [[42.8|43.7|43.0]].

{.reveal(when="blank-3")} Percy: Thanks.

{.reveal(when="blank-3")} He sets the setting on the magic ladder to 42.8 and crosses the chasm. The flower of life is on mount Janus. he picks it up and goes to his friend and saves him.

