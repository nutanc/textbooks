# Polynomials

## Introduction

> section: polynomials
> color: "#EB4726"
> level: Advanced

Polynomials are an important mathematical concept that appear in many different areas of mathematics and science. They are used to model and analyze various phenomena, such as the motion of objects, the behavior of electrical circuits, and the distribution of data.

Understanding polynomials is important for many practical applications, such as constructing graphs, modeling data, and solving real-world problems. For example, you might use polynomials to model the relationship between the size of a loan and the interest rate, or to predict the trajectory of a baseball.

By converting a problem into polynomials "space" it makes it easy for us to model things without actually doing the real experiments. The language of polynomials allows you to model many kinds of situations that occur in the real world, from the trajectory of a football, to determining the speed, deceleration and acceleration of an object launched straight up into the atmosphere, to modeling behaviors of the economy of a country over time. Once you convert a problem to x's and y's, your imagination is your limit.

Let us now look at some definitions:

A polynomial is a mathematical expression that is made up of variables (such as x) and constants (such as numbers), and is combined using only the operations of addition, subtraction, and multiplication.

The degree of a polynomial is the highest power of the variable in the polynomial. For example, in the polynomial `4x^3 + 2x^2 - 5x + 3`, the degree is 3 because the highest power of x is `x^3`.

A linear polynomial has a degree of 1. An example of a linear polynomial is 2x + 3.

A quadratic polynomial has a degree of 2. An example of a quadratic polynomial is `3x^2 + 2x - 1`.

A cubic polynomial has a degree of 3. An example of a cubic polynomial is `x^3 - x^2 + 4x - 3`.

The zeros of a polynomial are the values of the variable (such as x) that make the polynomial equal to 0. For example, the zeros of the polynomial `x^2 - 4x + 3` are the values of x that make the polynomial equal to 0. These values can be found by setting the polynomial equal to 0 and solving for x. In this case, the zeros of the polynomial are x = 1 and x = 3.


---

## Geometrical Meaning of the Zeroes of a Polynomial

> section: zeroes_polynomials

### Geometrical meaning of a zero of a linear polynomial

Why are the zeroes of a polynomial so important? To understand that, first lets look at the geometrical representation of linear and quadratic polynomials and the geomterical meaning of their zeroes.

When you just look at the equations with x and y, polynomials may appear daunting for some. But polynomials become beautiful when you represent them geometrically. Once you are able to visualize the polynomial equation on a graph you can understand the behaviour of the problem in a much better way.

For example, lets look at the equation y=2x+3. What does this mean geometrically. This looks very abstract. But if we substitute different values for x and get y we get multiple points in the co-ordinate system like

::: .overflow-wrap.overflow-table

|x | -2 | 2 |
|y=2x+3 |-1 |7 |
{.grid}

:::

When we plot these points in the co-ordinate system we get a graph like below. This makes it much easier to visualize the equation and we can imagine how the different values of x are going to affect y.

    x-coordinate-system(width=350 height=250 x-axis="-4,3,1" y-axis="-2,8,1" axis-names="price,demand" fn="2x + 3")


From the graph we can see that the graph of y = 2 x + 3 intersects the x - axis at [[-1.5]]

---

You also know that the zero of 2x + 3 is `-3/2`. Thus, the zero of the polynomial 2 x + 3 is the x-coordinate of the point where the graph of y = 2x + 3 intersects the x-axis.

The graph of y=2x+3 intersects the x-axis in [[1|2|3]] places.

---

::: .theorem

The linear polynomial ax + b, a ≠ 0, has exactly one zero, namely, the x-coordinate of the point where the graph of y = ax + b intersects the x-axis, which is the point (`-b/a`,0)

:::

The zeros of a polynomial are important because they can provide valuable information about the behavior of the polynomial and its graph.

For example, the zeros of a polynomial can help you identify the x-intercepts of the graph, which are the points where the graph crosses the x-axis. If you know the zeros of a polynomial, you can find the x-intercepts by simply setting the polynomial equal to 0 and solving for x.

In addition, the zeros of a polynomial can help you determine the end behavior of the graph, which is the way the graph approaches or moves away from the x-axis as x becomes very large or very small. The end behavior can be determined by looking at the highest-degree term of the polynomial (for example, x^3 or x^2). If the coefficient of the highest-degree term is positive, the graph will approach positive infinity as x becomes very large. If the coefficient is negative, the graph will approach negative infinity as x becomes very large.

Overall, understanding the zeros of a polynomial can help you analyze and interpret the behavior of the polynomial and its graph, and can be useful for solving problems and making predictions in a wide range of applications.

---
> id: zero-quadratic-polynomial

### Geometrical meaning of a zero of a quadratic polynomial

Consider the quadratic polynomial `x^2 – 3x – 4`. Let us see what the graph of `y = x^2 – 3x – 4` looks like. To do that, lets list out the values of y for different values of x.

::: .overflow-wrap.overflow-table

|x | –2 | –1 | 0 | 1 | 2 | 3 | 4 | 5|
|`y = x^2 – 3x – 4` | ${a}{a\|0\|-6,6,1} | ${b}{b\|-1\|-6,6,1} | ${c}{c\|0\|-6,6,1} | ${d}{d\|0\|-6,6,1} | ${e}{e\|0\|-6,6,1} | ${f}{f\|0\|-6,6,1} | ${g}{g\|-1\|-6,6,1} | ${h}{h\|0\|-6,6,1} |
{.grid}

:::

    x-coordinate-system(width=350 height=250 x-axis="-3,6,1" y-axis="-7,7,1" axis-names="price,demand" animate)


From the table above, the zeros of the quadratic polynomial `y = x^2 – 3x – 4` are [[-1]] and [[4]]

For any quadratic polynomial, i.e., the zeroes of a quadratic
polynomial `ax^2 + bx + c`, a ≠ 0, are precisely the x-coordinates of the points where the
parabola representing y = `ax^2 + bx + c` intersects the x-axis.

Our equation above has [[2|1|3]] zeros of polynomial. 

---

So, does every quadratic polynomial have exactly 2 zeros of polynomial? Let's explore.

Consider the equation `y=x^2-4x+4`. When we plot the values, we get the below parabola.

    x-coordinate-system(width=350 height=250 x-axis="-3,6,1" y-axis="-7,7,1" axis-names="price,demand" animate fn="x^2-4x+4")

Move your mouse over the graph and observe closely where the zero polynomial occurs for this graph. We observe that there is only [[1]] zero polynomial for this graph and it is at [[2]].

---

Consider the equation `y=x^2+1`. When we plot the values, we get the below parabola.

    x-coordinate-system(width=350 height=250 x-axis="-3,6,1" y-axis="-7,7,1" axis-names="price,demand" animate fn="x^2+1")

Does the graph intersect the x-axis? [[No|Yes]]

So, this graph has [[0]] zero polynomials.

---

So, you can see geometrically that a quadratic polynomial can have either two
distinct zeroes or two equal zeroes (i.e., one zero), or no zero. This also means that a
polynomial of degree 2 has atmost two zeroes.

---
> id: zero-cubic-polynomial

### Geometrical meaning of a zero of a cubic polynomial

Lets look at some cubic polynomials and plot them to get their geometrical meaning. From that let's try to find some properties.

Equation `y=x^3-4x`

    x-coordinate-system(width=350 height=250 x-axis="-3,6,1" y-axis="-7,7,1" axis-names="price,demand" animate fn="x^3-4x")

This clearly has [[3]] zeros of ploynomial for this cubic equation.

Equation `y=x^3`

    x-coordinate-system(width=350 height=250 x-axis="-3,6,1" y-axis="-7,7,1" axis-names="price,demand" animate fn="x^3")

Move your mouse over the graph and find the zero polynomial of this graph. This has [[1]] zero polynomials.

Equation `y=x^3-x^2`

    x-coordinate-system(width=350 height=250 x-axis="-3,6,1" y-axis="-7,7,1" axis-names="price,demand" animate fn="x^3-x^2")

Move your mouse over the graph and find the zero polynomial of this graph. This has [[2]] zero polynomials.

---
Note that 0 is the only zero of the polynomial `x^3` . We can see
that 0 is the x-coordinate of the only point where the graph of y = `x^3` intersects the
x-axis. Similarly, since `x^3 – x^2` = `x^2 (x – 1)`, 0 and 1 are the only zeroes of the polynomial
`x^3 – x^2`. These values are the x - coordinates of the only points
where the graph of y = x3 – x2 intersects the x-axis.

From the examples above, we see that there are at most 3 zeroes for any cubic
polynomial. In other words, any polynomial of degree 3 can have at most three zeroes.




---

## Relationship between Zeroes and Coefficients of a Polynomial

> section: zeroes_relationship

Consider the Equation `y=2x^2-8x+6`

    x-coordinate-system(width=350 height=250 x-axis="-3,6,1" y-axis="-7,7,1" axis-names="price,demand" animate fn="2x^2-8x+6")

You can factorize using the methods you have learnt or look at the graph above and we can see that the zeros of the polynomial are [[1]] and [[3]].

---

So (x-1) and (x-3) are factors for the above equation.

Let us see if the sum of the zeros and product of the zeros are somehow related to the constants in the polynomial equation.

Sum of zeros =1+3=4.

The constants of the polynomial `y=2x^2-8x+6` are [[2]], [[-8]] and [[6]].

---

We can see that Sum of zeros = 4 = `-(-8)/2`. But -8 is [[b|a|c]] and 2 is [[a|b|c]] in the polynomial equation of the for `ax^2+bx+c`.

Product of zeros = 1*3 = 3 = `6/2`. 

Here 6 is [[c|a|b]] and 2 is [[a|b|c]].

So Sum of zeros = [[-b/a|b/a|c/a]] and product of zeros is [[c/a|-c/a|b/a]].

---

If α and β are the zeros of the quadratic polynomial p(x) = ax^2 + bx + c, then the two factors of p(x) are [[x-α|x|α ]] and [[x-β|x|β]]

Now p(x) can be written in factored form as:

p(x) = a(x - α)(x - β) where a is some constant.

Expanding this product gives:

p(x) = `ax^2 - (α + β)ax + aαβ`

Comparing this expression to the original polynomial p(x) = ax^2 + bx + c, we can see that:

α + β = `-b/a`

αβ = `c/a`

This shows that the sum of the zeros of a quadratic polynomial is equal to the negative of the coefficient of the linear term (b) divided by the coefficient of the quadratic term (a), and the product of the zeros is equal to the constant term (c) divided by the coefficient of the quadratic term (a).


Let us now look at cubic polynomials. 

Let us consider p(x) = `2x^3 – 5x^2 – 14x + 8`.

    x-coordinate-system(width=350 height=250 x-axis="-3,6,1" y-axis="-7,7,1" axis-names="price,demand" animate fn="2x^3 – 5x^2 – 14x + 8")


You can check that p(x) = 0 for x = [[4|6|8]], [[–2|3|6]], [[1/2|1/4|1/6]]

---

Since p(x) can have atmost three zeroes, these are the zeores of `2x^3 – 5x^2 – 14x + 8`.

Sum of zeros=4+(-2)+`1/2`=`5/2`=`-(-5)/2`=`-b/a`.

Product of zeros=`4*-2*1/2`=-4= `-8/2` = `-d/a`.

For cubic polynomials we can also get one more identity. Mix the zeros two at a time and we get the following:

`4*(-2)+4*(1/2)+(-2)*(1/2)`= -8+2-1 = -7 = `-14/2`= `c/a`.

In general, it can be proved that if α, β, γ are the zeroes of the cubic polynomial
`ax^3 + bx^2 + cx + d`, then

`α + β + γ = –b/a `

`αβ + βγ + γα = c/a`

`αβγ = –d/a`

---

## Division Algorithm for Polynomials

> section: polynomials_division

You know that a cubic polynomial has at most three zeroes. However, if you are given
only one zero, can you find the other two? For this, let us consider the cubic polynomial
`x^3 – 3x^2 – x + 3`. If one of its zeroes is 1, then you know that x – 1 is
a factor. 

If x-1 is a factor then when you divide the polynomial by x-1 we will get some quotient and a remainder of [[0]].

So, you can divide `x^3 – 3x^2 – x + 3` by x – 1, to get the quotient `x^2 – 2x – 3`.

But the quotient is a quadratic polynomial. And we know how to find factors of the quadratic polynomial.

    x-coordinate-system(width=350 height=250 x-axis="-6,6,1" y-axis="-7,7,1" axis-names="x,y" animate fn="x^2–2x–3")

From the figure above or finding factors by splitting the middle term we get the factors as [[x+1|x+2|x+3]] and [[x-3|x-2|x-1]]

So we have `x^3 – 3x^2 – x + 3` = `(x – 1)(x^2 – 2 x – 3)`= `(x – 1)(x + 1)(x – 3)`

So, all the three zeroes of the cubic polynomial are now known to you as [[1]], [[–1]], [[3]]

In general, we can apply long division to divide a polynomial by a quadratic polynomial.

We can apply an algorithm which is similar to Euclid’s division
algorithm.

::: .theorem
This says that
If p(x) and g(x) are any two polynomials with g(x) ≠ 0, then we can find
polynomials q(x) and r(x) such that

p(x) = g(x) × q(x) + r(x)

where r(x) = 0 or degree of r(x) < degree of g(x).

This result is known as the **Division Algorithm** for polynomials

:::