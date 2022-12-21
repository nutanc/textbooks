# Surface Areas and Volumes

## Introduction 

> section: introduction
> sectionStatus: dev
> color: "#4E53D0"
> level: Foundations
> id: solids

In previous classes we have seen different types of solids and we have seen how to calculate their surface areas and volumes.

::: column.fit

    x-polyhedron(size=300 shape="Cube")

::: column.fit

    x-solid(size=300)

::: column.fit

    x-img(width=300 height=300 src="images/netscube.gif")

::: column.fit

    x-img(width=300 height=300 src="images/surface-area-of-cylinder-animation.gif")

:::

::: column.fit

    x-solid(size=300)

::: column.fit

    x-solid(size=300 static)


::: column.fit

    x-img(width=300 height=300 src="images/cone_surface_area.gif")

::: column.fit

    x-img(width=300 height=300 src="images/sphere_surface_area.png")
:::


It would be so great if the whole world is just made up of fixed shapes like cubes or cylinders or spheres. But fortunately or unfortunately our world is made up of a variety of shapes. So how do we find the surface area and volume of these shapes.

See the image of a pig below. Can we find the surface area of this pig?

::: column.fit

    x-img(width=300 height=200 src="images/pig.webp")
:::

It's hard right? [[Yes|No]]

---

How about the image below? Can we find the surface area of the minecraft pig? 

::: column.grow

    x-img(width=300 height=400 src="images/minecraft_pig.webp")

:::
It's much easier as it just has a bunch of cuboids(6) and we already knowthe formulas to calculate surface area of cuboids.

This is the trick to find the surface areas and volumes of solids which don't have traditional shapes. Just imagine them to be in minecraft and approximate the mixture of shapes :)

---

## Surface Area of a Combination of Solids

Check out the playing top below.

::: column.grow

    x-img(width=300 height=400 src="images/playing_top.webp")

:::

When you encounter solids like this, the first thing you should do is find out what are the basic shapes hidden in this shape.

Obviously the playing top has a [[hemisphere|cuboid|cylinder]] and a [[cone|sphere|cylinder]].

---

::: column.grow

    x-img(width=300 height=400 src="images/playing_top_split.png")

:::

Once we know the basic shapes, it's just a matter of applying the formulas we know to get the surface area of the hemisphere and cone.

So the Total surface area of the top(TSA)= Curved surface area(CSA) of hemisphere + CSA of the cone.

But,why CSA only?The surface area which we can see can only be painted.We cannot see the base of neither cone nor the hemisphere.

Let's do one more example with some values. Consider the toy rocket below.

::: column.grow

    x-img(width=300 height=400 src="images/toy_rocket.png")

:::

If I have to paint the rocket with a red color, how much area should I paint?

As we discussed above, we need to break up the complex shape into it's constituent parts. The rocket can be broken up into [[cone|sphere|cuboid]] and [[cylinder|sphere|cuboid]].

---

But there is one small problem. The cone is overlaid on the cylinder. The conical portion has its circular base resting on the base of the cylinder, but the base of the cone is larger than the base of the cylinder. So, a part of the base of the cone (a ring) is to be painted.

::: .theorem

Solving for the above we have:

TSA(rocket) = TSA(cone)+TSA(cylinder)-base area of cylinder

TSA(rocket) = CSA(cone)+base area of cone + CSA(cylinder)+2*base area of cylinder-base area of cylinder
            
TSA(rocket) = [[259.05|265.05|255]] cm^2
:::

---

## Volume of a Combination of Solids

We saw how when calculating surface areas sometimes we add and sometimes we remove some areas as some surface area disappeared in the process of joining the seperate shapes. Lets see how we can calculate volumes of combination of solids.

Lets is say you have the below treasure chest with you. You need to find our how much volume is holds so that you can fill up your treasure accordingly.

::: column.grow

    x-img(width=300 height=250 src="images/treasure_chest1.jpg")

:::

Following the same approach as above, how can you break up this image so that we get some basic shapes. I think the below separation makes sense.

::: column.grow

    x-img(width=300 height=250 src="images/treasure_chest.gif")

:::

Now we have the two basic shapes, [[cuboid|sphere|cone]] and [[cylinder|sphere|cone]].

---

But observe closely, we actually dont have a full cylinder. We have just [[half|quarter]] a cylinder.

---

::: column.grow

    x-img(width=300 height=250 src="images/treasure_chest1_cylinder.jpg")

:::

So the volume of our treasure chest is __{.blue}volume of the cuboid + `1/2` volume of the cylinder.__

Now, if the length, breadth and height of the cuboid are 15 m, 7 m and 8 m, respectively and if the diameter of the half cylinder is 7 m and its height is 15 m the volume of the treasure chest is [[1128.75 m(cube)|1228.75 m(cube) |1138.75 m(cube)  ]]

---

## Conversion of Solid from One Shape to Another

We have seen wax candles shaped like animals at the shops. Generally, we see candles in the shape of a cylinder. But how can we make them into different shapes? To do that, we first melt the candle and then pour that into a mould in the shape that we want and let it cool. Once it's cooled down it become solid again and will retain the shape of the mould.

::: column.grow

    x-img(width=300 height=250 src="images/solid_conversion.png")

:::

Now, the question that we need to ask ourselves is though the shape of the solid has changed has its volume changed? [[No|Yes]]

Look at the below figure

::: column.grow

    x-img(width=300 height=250 src="images/liquid_conversion.png")

:::

We are pouring a liquid in a beaker first into a cuboid container and next we are pouring the same liquid into a cylindrical container. Will the volume of the liquid and in the cuboid and the cylinder be the same? [[Same|Different]]

---

> id: solids-problems

That's right. The volume is retained though the matter is in different shapes and in different containers. Let us take this insight and solve some problems.

**A cone of height 24 cm and radius of base 6 cm is made up of modelling clay. A child reshapes it in the form of a sphere. Find the radius of the sphere.**

::: column.fit

    x-solid(size=150 static)

::: column.fit

    x-solid(size=150 static)

:::

Kids do the darndest things :)

But this helps us to check what we just learnt. We know that the volume of the solid remains the same even if changes it's shape. So the volume of the cone is equal to the volume of the sphere.

::: .theorem

Volume of cone= `1/3 * pi * r^2 *h` = `1/3 * pi * 6*6*24`

Volume of sphere= `4/3 * pi * r^3`

Volume of cone= Volume of sphere

 `1/3 * pi * 6*6*24`= `4/3 * pi * r^3`

 Solving for this r=[[6]]

:::

