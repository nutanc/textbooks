# Coordinate Geometry

## Introduction

> section: intro
> id: intro
> color: "#EB4726"

Take a look at the canvas below. It's just an empty page. It does not have any details. It will be very hard to give directions to someone to draw something on this precisely. For example, what directions can you give someone to make them draw the face of a cat. Maybe we can say something like start at the left corner, draw a line towards east etc etc.

    figure
      x-geopad(width=600 height=400 x-axis="-1,10,1" y-axis="-1,10,1" padding=5 tools="line"): svg

Since a simple empty paper has no information, we cannot do much with it. What can we add to this paper to make it more useful?

A simple insight that people found is that, if you draw horizontal and vertical lines on this paper we can create an abstraction which represents a lot of things.

    figure
      x-geopad(width=600 height=400 x-axis="-6,6,1" y-axis="-6,6,1" complex padding=5 tools="line"): svg

Now, we have a system where we can precisely specify points in a space. We have seen that a linear equation in two variables of the form
ax + by + c = 0, (a, b are not simultaneously zero), when represented graphically, gives a straight line. 

We have seen the graph of y = `ax^2 + bx + c` (a ≠ 0), is a parabola. In fact, coordinate geometry has been developed as an algebraic tool for studying geometry of figures. It acts as a **link** between algebra and geometry, giving shapes to abstract equations in the x's and y's.

It helps us to study geometry using algebra, and understand algebra with the help of geometry. Because of this, coordinate geometry is widely applied in various fields such as physics, engineering, navigation, seismology and art!

---
> id: intro1


    figure
      x-geopad(width=600 height=400 x-axis="-1,10,1" y-axis="-1,10,1" complex padding=5 tools="line"): svg
        circle.red(x="point(4,8)" name="a" label="a")
        circle.red(x="point(3,9)" name="b" label="b")
        circle.red(x="point(3,8)" name="c" label="c")
        circle.red(x="point(1,6)" name="d" label="d")
        circle.red(x="point(1,5)" name="e" label="e")
        circle.red(x="point(3,3)" name="f" label="f")
        circle.red(x="point(6,3)" name="g" label="g")
        circle.red(x="point(8,5)" name="h" label="h")
        circle.red(x="point(8,6)" name="i" label="i")
        circle.red(x="point(6,8)" name="j" label="j")
        circle.red(x="point(6,9)" name="k" label="k")
        circle.red(x="point(5,8)" name="l" label="l")
        circle.red(x="point(3.5,7)" name="p" label="p")
        circle.red(x="point(3,6)" name="q" label="q")
        circle.red(x="point(4,6)" name="r" label="r")
        circle.red(x="point(5.5,7)" name="s" label="x")
        circle.red(x="point(5,6)" name="t" label="y")
        circle.red(x="point(6,6)" name="u" label="z")
        circle.red(x="point(4,5)" name="x" label="s")
        circle.red(x="point(4.5,4)" name="y" label="t")
        circle.red(x="point(5,5)" name="z" label="u")
        circle.red(x="point(0,5)" name="m" label="m")
        circle.red(x="point(0,6)" name="n" label="n")
        circle.red(x="point(9,5)" name="o" label="o")
        circle.red(x="point(9,6)" name="v" label="v")

Let's have some fun. Look at the figure above. Observe the points. Draw lines from a->b->c->d->e->f->g->h->i->j->k->l->a. Next join p->q->r->p. Now do x->y->z->x. Finally join s->m and s->n and u->v and u->o. What image did you get? [[cat|bat|man]]

---

## Distance Formula

> section: distance
> id: distance

    figure
      x-geopad(width=600 height=400 x-axis="-1,10,1" y-axis="-1,10,1" complex padding=5 tools="line"): svg
        circle.red(x="point(0,0)" name="a" label="o")
        circle.red(x="point(4,0)" name="a" label="a")
        circle.red(x="point(6,0)" name="b" label="b")
        circle.red(x="point(0,3)" name="c" label="c")
        circle.red(x="point(0,8)" name="d" label="d")

Consider the figure above. What is the distance from b to a?

Since both the points lie on the x-axis, we just need to walk on the x axis. So the distance is nothing but ob-oa=[[2]] units.

Now, what is the distance from d to c? These points are on the y-axis and their distance is [[5]] units.

Can we find the distance between a and c? The distance between a and c is [[5]] units. (hint: apply pythogaras theorem).

---
> section: distance1
> id: distance1
> goals: s0 s1 s2 s3

The easy parts are done :)

You have seen how we can find distances between points lying on the axis. What about points that are not on the axes like below?


    figure
      x-geopad(width=600 height=400 x-axis="-1,10,1" y-axis="-1,10,1" complex padding=5 tools="line"): svg
        circle.red(x="point(4,6)" name="p" label="p")
        circle.red(x="point(6,8)" name="q" label="q")
        circle.red(x="point(4,0)" name="r" label="r")
        circle.red(x="point(6,0)" name="s" label="s")
        circle.red.reveal(x="point(6,6)" name="t" label="t" when="s0 s1 s2")
        
This is also easy enough. We just need to visualize a scenario which we know. Draw a line from p to q.

{.reveal(when="s0")} The line is just hanging in the air. We still don't have enough information. Why dont you draw a perpendicular from p to x axis?

{.reveal(when="s0 s1")} We are getting somewhere, but still we dont have any formation that we can recognize. Lets continue. Draw a perpendicular from q to x-axis.

{.reveal(when="s0 s1 s2")} Now we are getting somewhere. We just need one more final line segment. Can you guess and draw?

{.reveal(when="s0 s1 s2 s3")} Yes! Now you have a right angle triangle and once we have the right angle triangle we can use our ever dependable Pythogoras theorem. Using the theorem we get the distance pq is `2*sqrt(2)`.

---

Let us generalize this. If p and q are at (x1,y1) and (x2,y2) respectively then the distance between p and q can be calculated by 

::: .theorem

`pq^2=pt^2+qt^2`=`(x2-x1)^2+(y2-y1)^2`

So pq=`sqrt((x2-x1)^2+(y2-y1)^2)`

This is called as the **distance formula**.
:::

---
> id: distance2

Let us apply this learning and see if we can solve some practical problem.

Q: Find a relation between x and y such that the point (x , y) is equidistant from the points (7, 1) and (3, 5).

    figure
        x-geopad(width=600 height=400 x-axis="-1,10,1" y-axis="-1,10,1" complex padding=5 tools="line"): svg
            circle.red(x="point(7,1)" name="p" label="p")
            circle.red(x="point(3,5)" name="q" label="q")
            path.blue(x="segment(p,q)")
            path.yellow.reveal(x="line(point(2,0),point(3,1))" when="blank-2")

We are given two points and we have to find other points which are equidistant from these two points.

Distance of (x,y) from the first point (7,1) is `blank(sqrt((x-7)^2+(y-1)^2),sqrt((x+7)^2+(y+1)^2))`

Distance of (x,y) from the second point (3,5) is `blank(sqrt((x-3)^2+(y-5)^2),sqrt((x+3)^2+(y+5)^2))`

Since (x,y) is equi distant from both points we have:

{.reveal when("blank-1")} `sqrt((x-7)^2+(y-1)^2)=sqrt((x-3)^2+(y-5)^2)`

Solving for this we get the equation [[x-y=2|x+y=2|x-y=4]].



---

## Section Formula

> section: section
> id: section
> goals: s0 s1 s2

Suppose a telephone company wants to position a relay tower at P between A and B is such a way that the distance of the tower from B is twice its distance from A. If P lies on AB, it will divide AB in the ratio 1 : 2. Let us assume A to be the origin and B to be the point(36,15) in the coordinate system. We can represent this as below.

    figure
      x-geopad(width=600 height=400 x-axis="-1,40,1" y-axis="-1,20,1" grid="false" axes="true" label-suffix="," axis-names="x,y" padding=5 tools="line"): svg
        circle.red(x="point(0,0)" name="A" label="A")
        circle.red(x="point(36,15)" name="B" label="B(36,15)")
        circle.red(x="point(12,5)" name="P" label="P(x,y)")
        circle.red(x="point(12,0)" name="D" label="D")
        circle.red(x="point(36,0)" name="E" label="E")
        circle.red(x="point(36,5)" name="C" label="C")
        path.blue(x="segment(A,B)")

Once again as above lets draw some perpendiculars and create some known structures like traingles or rectangles so we can apply some known identities and formulas. In the above figure lets first drop a perpendicular from P to the x-axis.

{.reveal(when="s0")} Now drop a perpendicular from B to x-axis.

{.reveal(when="s0 s1")} Draw a perpendicular from P to BE.

{.reveal(when="s0 s1 s2")} Nice we now have [[3|2|1]] triangles and one rectangle.

{.reveal(when="s0 s1 s2 blank-0")} We see that the two triangles PAD and BPC are [[similar|congruent]].

{.reveal(when="s0 s1 s2 blank-1")} We know that in similar triangles, the ratios of the sides are similar. So we have `AD/PC=AP/PB=1/2` and `PD/BC=AP/PB=1/2`

{.reveal(when="s0 s1 s2 blank-1")} Subsituting for P we get `x/(36-x)=1/2` and `y/(15-y)=1/2`

{.reveal(when="s0 s1 s2 blank-1")} Solving these equations we get x=[[12]] and y=[[5]]

---
> id: distance3

Generalizing this, take the below coordinate system

    figure
      x-geopad(width=600 height=400 x-axis="-1,40,1" y-axis="-1,20,1" grid="false" axes="false" label-suffix="," axis-names="x,y" padding=5 tools="line" crosshairs="no"): svg
        circle.red(x="point(0,0)" name="O" label="O")
        circle.red(x="point(4,1.66)" name="A" label="A(x1,y1)")
        circle.red(x="point(4,0)" name="R" label="R")
        circle.red(x="point(36,15)" name="B" label="B(x2,y2)")
        circle.red(x="point(12,5)" name="P" label="P(x,y)")
        circle.red(x="point(12,0)" name="S" label="S")
        circle.red(x="point(36,0)" name="T" label="T")
        circle.red(x="point(36,5)" name="C" label="C")
        circle.red(x="point(12,1.66)" name="Q" label="Q")
        path.blue(x="segment(A,B)")
        path.blue(x="segment(A,P)", label="m1")
        path.blue(x="segment(P,B)", label="m2")
        path.blue(x="segment(P,S)")
        path.blue(x="segment(B,T)")
        path.blue(x="segment(A,R)")
        path.blue(x="segment(P,C)")
        path.blue(x="segment(A,Q)")

::: .theorem

Solving as above by considering similar triangles we get the coordinates of the point P(x, y) which divides the line segment joining the points A(x1,y1) and B(x2,y2), internally, in the ratio m1 : m2 are

`((m1x2+m2x1)/(m1+m2),(m1y2+m2y1)/(m1+m2))`

:::

---

## Area of a triangle

> section: triangle

We all know the area of a triangle = `1/2*base*height`. We also know about Heron's formula(`sqrt(s*(s-a)*(s-b)*(s-c))`) to find the area of a triangle.

But here we are in the coordinate system. In the coordinate system we have points. If we know the points of the vertices of a triangle can we find it's area?

Consider the triangle below:


    figure
      x-geopad(width=600 height=400 x-axis="-1,10,1" y-axis="-1,10,1" grid="false" axes="true" label-suffix="," axis-names="x,y" padding=5 tools="line"): svg
        circle.red(x="point(4,6)" name="A" label="A(x1,y1)")
        circle.red(x="point(6,8)" name="B" label="B(x2,y2)")
        circle.red(x="point(10,7)" name="C" label="C(x3,y3)")
        path.blue(x="triangle(A,B,C)")

We can find the distances between AB,BC and AC. If we have the distances we can apply Heron's formula to find the area. But let us see if there is any other way to calculate the area.

As usual, lets draw perpendiculars to the x axis and see if it throws up some known structures. 


    figure
      x-geopad(width=600 height=400 x-axis="-1,10,1" y-axis="-1,10,1" grid="false" axes="true" label-suffix="," axis-names="x,y" padding=5 tools="line"): svg
        circle.red(x="point(4,6)" name="B" label="B(x2,y2)")
        circle.red(x="point(6,8)" name="A" label="A(x1,y1)")
        circle.red(x="point(10,7)" name="C" label="C(x3,y3)")
        circle.red(x="point(6,0)" name="P" label="P")
        circle.red(x="point(4,0)" name="Q" label="Q")
        circle.red(x="point(10,0)" name="R" label="R")
        path.blue(x="triangle(A,B,C)" target="abc")
        path.blue(x="polygon(A,B,Q,P)" target="abqp")
        path.blue(x="polygon(A,P,R,C)" target="aprc")
        path.blue(x="polygon(B,Q,R,C)" target="bqrc")
        path.blue(x="segment(A,P)")
        path.blue(x="segment(B,Q)")
        path.blue(x="segment(C,R)")

Nice. Now we have triangles and [[trapeziums|rectangles|squares|quadrilaterals]].

{.reveal(when="blank-0")} Area of triangle __[{.green}ABC](target:abc)__=Area of trapezium __[{.yellow}ABQP](target:abqp)__+Area of trapezium __[{.yellow}APRC](target:aprc)__- Area of trapezium __[{.red}BQRC](target:bqrc)__

{.reveal(when="blank-0")} area of a trapezium = `1/2` (sum of parallel sides)(distance between them)

{.reveal(when="blank-0")} Substituting for the trapeziums in the above equation we get

{.reveal(when="blank-0")} Area of triangle ABC= `1/2[x1(y2-y3)+x2(y3-y1)+x3(y1-y2)]`




        



