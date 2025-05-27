---
title: Multiple Integration
draft: false
---
Tags: [[calculus]], [[integrals]], [[intervals]]   <br>03-05-2025

---
# Multiple Integration
## Double Integration
Double integration can be used to find a _volume_ under a function $f(x, y)$, or to find an _area_ when dealing with complicated boundaries.
### Geometric Interpretation
When [integrating](Integration.md) a single time, only one direction is accounted for. We evaluate single integrals as the _area_ under the graph, which means under the graph, along the _$x$-axis_. This is why the integral always ends with $dx$, the steps of $dx$ the integral takes run along the $x$-axis. 
To find a _volume_ under a graph instead of an area, we can use double integrals. You can think of taking a double integral as first finding an area, the first layer of the integral, and then finding the height at every point by integrating a second time with respect to the height. Area times height creates a volume. <br>In order integrate, we first find a function to integrate below, $z = f(x, y)$. This gives the upper $z$-limit to be this function, and the lower limit to be the plane $z = 0$. <br>Similar to [partial derivatives](Partial%20Differentiation), the integrals we take look at this function in one direction at a time. <br>When integrating with respect to $x$ first, for example, we have to keep all other variables - in this case only $y$ - constant. You can think of this operation as taking a slice of the graph at a constant $y$ distance of the origin, as pictured below, and integrating under the line on that slice. <br>Integrating under $z$ involves finding a _line segment_ representing the height under $z$ at a certain point on the $x$-axis. For every point in $x$ direction we add these line segments up, to create an _area_ out of all these lines. We have now found an expression of the area below the function $f$, on the $z, x$-plane at a certain $y$ distance of the origin. <br>![[Multiple_Integration_1_90%.png]]<br>We know $f$ to be a function of both $x$ and $y$, however, so this expression of the area will still contain the variable $y$ in it. This means that if we were to take a slice of our 3D function at a different $y$ location, we may get a different value for the area than the one we just obtained. <br>To obtain the _volume_ from this area, the second integral will integrate our expression of the area with respect to $y$. This means placing all these slices next to eachother, in $y$ direction, to create a volume out of all these areas.

>[!note] Keep in Mind
> Keep in mind that this is just a repetition of the process for single [integration](Integration.md). 
> In order to obtain a _volume_ from a double integral however, the domain needs to be quite simple, meaning that it runs from the bottom plane $z = 0$, up to the function $z = f(x,y)$. If this is the case we can integrate $\iint_D f(x, y) dydx$ to obtain a volume. 
> If this is not the case, it is necessary to use [triple integrals](#Triple%20Integration) to obtain a solution to the volume instead.
> 
> See more on the dimension of the solution to these integrals [below](#Dimension%20of%20Integrals).

#### Dimension of Integrals
To understand what kind of object we integrate, we must understand how we interpret the [domain](Domain.md) of an integral. <br>While in math terms it is not stated specifically, the _function_ that gets integrated under creates boundaries of a domain too. <br>![[Integral_as_region_under_curve_80%.png|450]]<br>By 4C - Own work, based on JPG version, CC BY-SA 3.0, [link](https://commons.wikimedia.org/w/index.php?curid=1039841)<br><br>
Referring to the graph above, what happens when integrating in 2D, under a function $f(x)$, is that a limit is given whose lower bound is the line $y = 0$, and whose upper bound is the function $f(x)$. As long as the area is above $y = 0$ we get a positive value for the area. <br>If, instead, we want to find an area that starts at a function $g(x)$ and goes up to the function $f(x)$, we find the volume under $g$ and subtract that from the volume under $f$. Alternatively, it is possible to evaluate this area using double integrals. Realizing that finding the area under $f$ also gives a domain, we can create a double integral, whose lower bound is this function $g$ and whose upper bound is the function $f$. To create this integral, give no function to integrate over, and create the double integral as
$$
\int_{x_1}^{x_2} \int_{g(x)}^{f(x)} dydx
$$
If we evaluate this integral, we would get the same result we would get, if we were to subtract the areas under $g$ and $f$, namely $\int_{x_1}^{x_2} f(x)dx - \int_{x_1}^{x_2} g(x)dx$. <br>To show the equivalence of these calculations, we solve the integrals to obtain
$$
\int_{x_1}^{x_2} \int_{g(x)}^{f(x)} dydx = \int_{x_1}^{x_2}y \bigg|_{y = g(x)}^{y = f(x)} dx = \int_{x_1}^{x_2} f(x)dx - \int_{x_1}^{x_2} g(x)dx
$$
If we look at a single integral in the same vein, we would realize that computing $\int_{x_1}^{x_2} f(x)dx$ is the same as computing $\int_{x_1}^{x_2} \int_{y = 0}^{y = f(x)}dydx$, in that the result in both cases would be $F(x) \bigg|_{x_1}^{x_2}$. <br>The conclusion you should draw from this twofold.
1. Integrating under a function $y = f$ also gives a boundary to a [domain](Domain.md) to the integral. <br>This domain would start at $y = 0$, and goes up to $f$.
2. The dimension of the result of the integration is determined by the dimension of the [domain](Domain.md). 

Using the second fact we can realize that using single __and__ using double integrals we can find an expression of an area, and using double __and__ using triple integrals we can find an expression of a volume. Whether we find a volume or an area is _only_ dependent on the dimension of the domain, no the amount of integrals.

> [!abstract]
> 1. Integrating under a function $y = f$ also gives a boundary to a [domain](Domain.md) to the integral. <br>This domain would start at $y = 0$, and goes up to $f$.
> 2. The dimension of the result of the integration is determined by the dimension of the [domain](Domain.md).

### Definition
The way to construct these integrals is just a repetition of [integrating](Integration.md) "normally", but you do it with slices in one direction first, then the other. <br>For the integral of $f(x, y)$ under [domain](Domain.md) $D$ we have
$$
\iint_D f(x, y) dA = \int_{y_1}^{y_2}\int_{x_1}^{x_2} f(x, y) dxdy
$$
The integral above would be evaluated first with respect to $x$, then with respect to $y$, similar to taking [higher order partial derivatives](Higher%20Order%20Partial%20Derivatives). <br>To evaluate this integral with respect to $x$, we keep all other variables constant in the same way as taking a partial derivative with respect to $x$. The primitive of the function $f = y$ when integrating with respect to $x$, for example, would become $F = yx$ and not $F = \frac{1}{2} y^2$. <br>Note that the order $dx, dy$ are placed in can be interchanged freely, as long as new $x$ variables aren't introduced _after_ integrating with respect to $x$. Doing this would leave $x$ in the final product after integration and make the integral inaccurate. An explanation on _how_ to change the order is provided [below](#Changing%20the%20Order%20of%20Integration). 
#### Complicated Domains
The integral above runs from $[x_0 \rightarrow x_1]$, and from $[y_0 \rightarrow y_1]$. These are both straight lines ($y = y_0$ generates a horizontal line) and thus the [domain](Domain.md) is _simple_. Simple means the integral can be evaluated from coordinate to coordinate, which in space translates to straight lines or a single maximum being the edges of the domain over which is integrated. If the domain is not simple, but runs from curvy line to curvy line, our limits won't be simple coordinates anymore, but functions, as seen below.
$$
\int_{y_1}^{y_2}\int_{x_1 = f_1(y)}^{x_2 = f_2(y)} f(x, y) dxdy
$$
> [!warning] Note
> Notice that the $y$ upper and lower limits ($y_1, y_2$) are just values, not functions, and that the $x$ limits are a function of only $y$. The reason for this is because when evaluating this integral we first integrate with respect to $x$, then $y$. 
> We need all our $y$ variables _explicitly expressed_ <u>before</u> the moment we integrate with respect to $y$. Otherwise, our integral will be invalid and have $y$ present in the end-product. Therefore, we <u>cannot</u> introduce functions of $y$ after integrating with respect to $y$. Thus, to evaluate this $f(x,y)$, we __need__ to first integrate with respect to $x$, then with respect to $y$ and we can't swap order. 
> In the same vein, we cannot have our $y$ coordinates be a function of $x$, as doing this would make our solution include the variable $x$ and we do not want this. 
> The volume has to have a _number_ as the solution, unless the [domain](Domain.md) is not specified yet.

For more complicated domains, the main challenge of integrating becomes finding the boundaries and their correct order of this domain. An explanation on doing this, and on how to interpret the domain geometrically can be found [below](#Constructing%20the%20Domain).




## Triple Integration
Triple integration can be used to find the volume between two functions, and among other things, to calculate the mass of an object.

> [!warning] Be Aware
>It is imperative that the chapter _[Double Integration](#Double%20Integration)_ is understood before reading this chapter, as a big part of understanding higher order integrals has been explained there, leading this chapter to skip over some of the intuitions. 

### Geometric Interpretation
Triple Integration is an expansion on [double integration](#Double%20Integration). Triple integrals are used to evaluate the volume for more complex [domains](Domain.md), where, unlike what is necessary for a double integral to evaluate a _volume_, the domain is enclosed by two functions[^asterisk1]. <br>The main challenge with constructing a triple integral is [finding the correct boundaries of the domain](#Constructing%20the%20Domain) and [swapping the order of integration](#Changing%20the%20Order%20of%20Integration), if necessary, in order to evaluate the integral. 
### Uses of Triple Integrals
The triple integral is used for many other things however, most notably to find the _mass_ of an object. <br>These other applications use the fact that triple integrals can solve complicated volumes, and use triple integrals in combination with other terms to find the wanted properties. In the case of mass for example, we realize that mass is density times volume, $\rho \cdot V$. If density changes depending on the location in the volume, meaning that it is a function of it's coordinates in the volume, $\rho = f(x, y, z)$, we can integrate the density with respect to the volume to find the mass of the object.
$$
m = \iiint_D \rho \cdot dV = \iiint_D f(x, y, z)dV = \int_{z_1}^{z_2} \int_{y_1 = f_3 (z)}^{y_2 = f_4 (z)} \int_{x_1 = f_1 (y, z)}^{x_ 2 = f_2 (y, z)} f(x, y, z) dxdydz
$$
You might have noticed that this would generate a 4D object, if we were to plot all axes (namely $\rho, x, y, z$). The fact that this would generate a 4D object is supported by the fact that mass is a function of all of these variables, $m = \rho, x, y, z$, meaning it's graph would be 4D as well. <br>What happens geometrically when integrating the density, is we have a [domain](Domain.md), whose lower boundary is $\rho = 0$ and whose upper boundary is $\rho = f(x, y, z)$, just like we saw [here](#Dimension%20of%20Integrals), and we find and [sum](Summation%20-%20Background) every value the density attains at every point within the volume. <br>To visualize the math of this 4D object, realize that an integral is nothing more than a [summation](Summation%20-%20Background) of the value of the function it integrates, in this case $\rho$, that takes a very small step in the direction it integrates in, until every point in the domain has been summed up. To find the mass of a box, imagine integrating the density of this box as dividing the box into many smaller cubes. When integrating, the _value_ of $\rho$ is the density of one of these cubes. If we integrate with respect to the volume $V$, we can imagine finding all of the cubes that make up the volume, and adding their value together. This would create an expression of the mass of the object.

> [!note]
> To be completely mathematically correct, we would imagine every cube to be _so_ small, that it would make no difference if we were to assume it was just a point in space.
> You can then imagine integrating over a certain domain as finding all the points that fall within this domain, and adding them up to obtain a volume.
> In real world terms, this would be equivalent to finding every single elementary particle that makes up a cup of coffee, and adding their volumes up to obtain the volume of the cup of coffee.


## Constructing the Domain
The [domain](Domain.md) that bounds the limits of an integral can be tricky to find. Take for example the following integral.
$$
\iiint_D dzdydx
$$
We know that the innermost integral has upper and lower bounds that can be a function of $y$ and $x$, as these both need to be integrated after, but not of $z$. We thus get bounds $z_1 = f_1 (x, y)$ and $z_2 = f(x, y)$. <br>To construct these bounds, keep in mind the [geometric interpretation](#Geometric%20Interpretation) given for integrating a double integral. The first layer would construct a _line_ between the $z$ limits, the second an _area_ traced by these lines, going in $y$ direction, and the third a _volume_ traced by adding these areas together in $x$ direction. <br>The first layer, then, only gives restrictions in height, or the $z$ coordinate, the second and third only give restrictions in the length, or the $y$ and $x$ coordinates. <br>The trick to finding the [domain](Domain.md), is to find the limits of the integral in the direction that gets integrated, and expressing these limits as a function of as many variables as possible. <br>From the example above, the amount of variables possible for the function expressing the $z$ limits would be 2, namely $x$ and $y$, the amount of variables possible for the function expressing the $y$ limits would be 1, namely $x$, and the amount of variables possible for the function expressing the $x$ limits are 0, the $x$ limits have to be a value. 
### Geometrical Interpretation
The geometry behind the above description is as follows. <br>The $z$ limits, or the height, needs to be found from the difference in height between the functions that enclose this domain. These functions are of the form $z = f(x, y)$, and so the $z$ limits are also a function of $x$ and $y$[^asterisk2]. Once the height requirements are found, the space of the domain reduces to 2 dimensions, $x$ and $y$, as the height no longer plays a role in limiting the integral. Once again, the $y$ limits need to be found from the difference in height between the functions that enclose this new, now 2D, domain. Once those height requirements are found, the space of the domain reduces to only a number line, where the $x$ limits are only an [interval](Range) for which the domain is to be evaluated. <br>Every layer of integration thus further reduces the size of the dimension of the domain, until the domain is reduced to a single point, which indicates the value for the integral is found and holds for only a point.

## Changing the Order of Integration

> [!abstract] Incompleteness
>I will only detail the process in [cartesian coordinates](https://en.wikipedia.org/wiki/Cartesian_coordinate_system) here. The process works in principle the same for other coordinate systems, but as cartesian coordinates are most common, visualization will be easiest using this system.

This process works for all integrals that integrate with respect to more than one direction. <br>Some integrals are complicated, or even impossible to evaluate when starting with $dzdydx$. In order to still solve some of these we change the order of integration. <br>An important first step for changing the order of integration is _visualizing the volume_ or area that gets integrated. Not doing this might cause you to integrate the wrong volume that still satisfies the boundaries but in a different order. The easiest way to go about this is to construct __3__ 2D projections of this function, as drawing in 3D can be hard and messy.
1. A projection of the [domain](Domain.md) on $x, y$, or the _bottom_ of the graph.
2. A projection of the domain on $y, z$, or the _back_ of the graph.
3. A projection of the domain on $x, z$, or the _left side_ of the graph.

This visualization is only used to determine whether a function or point is an upper or a lower bound. It carries no further significance in the solving process. <br>When changing order from $dzdydx$, to say $dydxdz$, we realize that in the new form:
1. The $y$ bounds can be a function of both $x, z$.
2. The $x$ bounds can be a function of only $z$.
3. The $z$ bounds cannot be a function at all, and their only purpose is to indicate for which $z$ [range](Range) the expression runs or is valid.

To find the bounds, rewrite the functions in terms of the correct variables. This means writing $y$ in terms of $x$ and $z$ by isolating it from functions that may bound the domain.<br>Now, aided by the drawing to determine whether the functions are upper or lower bounds, we  place the found expressions for the bounds of the domain into the integrals and solve as normal.

---
## Evaluating Impossible Integrals
Sometimes it is impossible to integrate over a certain domain, take for example the [domain](Domain) given by the following equations:
1. $y = x^2$
2. $y = 2x^2$
3. $x = y^2$
4. $x = 2^2$

The domain is pictured below, shaded in orange. <br>![[DifficultIntersection4parabolas_80%.png|300]]<br><br>The reason such a domain is impossible to determine using integrals as we did before, is because, after expressing the inner integral as a function of the boundaries of the variables contained in the outer integral, for example $y = f(x)$, we evaluate the outer integral to run from constant value to constant value, for example $x_1$ to $x_2$. We have to, or our integral will contain a variable after integrating.
$$
\int_{x_1}^{x_2} \int_{y = x^2}^{y = 2x^2} dydx
$$
This, however, means that the integral would run from straight upward $x_1$ line to $x_2$ line, because of the constant values, while in reality those lines aren't straight, but instead they are parabolas. If we were to evaluate the above integral with the correct intersection $\left[ \left( \frac{1}{2}, \frac{1}{2} \right), (1, 1) \right]$, the area would be $\frac{7}{24}$. In reality however, the area is $\frac{1}{9}$. <br>These integrals can be solved however, but we would have to _[change variables](Changing%20Variables%20for%20Integration)_ to do it. 

> [!abstract] Solving these integrals is detailed in the note [[Changing Variables for Integration]].



---
__[Home](!%20Calculus%20II%20Learning%20Overview)__

---
_Status:_ #ripe

---
# References:
[^asterisk1]: Technically speaking, you could use a double integral to evaluate such a domain. Applying the same reasoning used [here](#Dimension%20of%20Integrals), we could subtract the volume of two double integrals to obtain the volume of the more complicated domain. 
[^asterisk2]: Of course, these functions dont _need_ to have complicated expressions that are a combination of both $x$ and $y$, they may just be flat planes like $z = 4$. <br>When this is the case though, it may be worth looking in to whether it would be easier to evaluate such a domain by [swapping the order of integration](#Changing%20the%20Order%20of%20Integration).
1. R. A. Adams, Christopher Essex, _Calculus A Complete Course_, 9th ed.
2. Openstax, _Calculus Volume 1_, [link](https://openstax.org/details/books/calculus-volume-1).
3. Openstax, _Calculus Volume 2_, [link](https://openstax.org/details/books/calculus-volume-2).
4. Openstax, _Calculus Volume 3_, [link](https://openstax.org/details/books/calculus-volume-3).
5. Dr. Trefor Bazett, _Double Integration Example over General Regions --- two ways!_, [link](https://www.youtube.com/watch?v=vcYBKIo9bAI).
6. Dr. Trefor Bazett, _Triple Integrals in Cartesian Coordinates | Volume between Surfaces_, [link](https://www.youtube.com/watch?v=ZIn1rgZVPFw).
7. Dr. Trefor Bazett, _Change the order of integration to solve tricky integrals_, [link](https://www.youtube.com/watch?v=LUvynduoUX0).
8. MIT OpenCourseWare, _Changing the order of integration | MIT 18.02SC Multivariable Calculus, Fall 2010_, [link](https://www.youtube.com/watch?v=p06QDsAPY4g).
9. blackpenredpen, _How to change the order of a triple integral_, [link](https://www.youtube.com/watch?v=-pOV7n8qlbY).
10. Mathispower4u, _Changing the Order of Triple Integrals_, [link](https://www.youtube.com/watch?v=5WGW82fSXnU).
11. Oregonstate, _Triple Integrals_, [link](https://sites.science.oregonstate.edu/math/home/programs/undergrad/CalculusQuestStudyGuides/vcalc/255trip/255trip.html).
12. Khan Academy, _Triple integrals 2_, [link](https://www.khanacademy.org/math/multivariable-calculus/integrating-multivariable-functions/triple-integrals-topic/v/triple-integrals-2).

