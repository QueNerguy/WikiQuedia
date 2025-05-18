---
title: "Partial Differentiation"
draft: false
---
Tags: [[calculus]], [[differentials]]   <br>08-05-2025

---
# Partial Differentiation
See the note [[Differentiation]] for an introduction to differentiation. Partial differentiation applies to a more general and higher dimensional case of differentiation.
### Geometrical Interpretation
A partial derivative of a function $f$, $D_x [f]$, takes the [derivative](Differentiation.md) in __one direction only__. This operation is like taking a slice of the function to produce a 2D image, and calculating the derivative there. In fact, when assuming the directions that are not differentiated to be constant, we're fixing the distance of the slice at that constant value. This produces the slice. <br>Taking the partial derivative with respect to $x$ thus means taking the derivative in the $x$ direction only - by [differentiating x as a variable](Differentiation.md#Computational%20Rules) - and treating the other variables as if they were constants. 

$$
D_x [x^2y] = y \cdot D_x [x^2]=2xy
$$
- [A more rigorous example of this process](example%20partial%20derivative%20basic.md)

Because the other variables are constant you basically take the derivative of a slice of the function, at this constant distance from the origin, thus transforming a 3D function, for example, into a 2D one.
#### Total Derivative
When calculating the derivative of a function $f$ of a single variable function, we would always take it with respect to that single variable, $\frac{d}{dx}f\left(x\right)$, so with respect to $x$. When calculating the total derivative, however, we do not want to have the derivative with respect to a single direction, but all at the same time. In the single variable case we would then have $df(x) = dx$, the infinitesimal (read: very small) change of $f$ under an infinitesimal change of $x$[^wattquote]. In the case of a multivariable function $f$, we have:
$$
df(x,y) = \frac{\partial f}{\partial x} dx + \frac{\partial f}{\partial y} dy
$$
$$
df(x,y) = D_x[f] dx + D_y[f] dy
$$
The expression $D_x[f] dx$ gives the tiny step in the $x$ direction. The size of the step is determined by the universal step-size in $x$ direction, namely $dx$, and a modifier $D_x [f]$ to account for increases and decreases in the slope. This changes $df$ in such a way, that when the function increases steeply in the $x$ direction, $D_x [f]$ will increase, making the complete step in $x$ direction bigger, and thus the change $df$ bigger. The change of $df$ in turn influences the size of $f$, making it increase more with a bigger $df$. <br>We can interpret the operator $df$ as a way to write how much the value of $f$ changes when a small step in $x$ and $y$ direction is taken. <br>This is the most convenient way of writing the derivatives of $f$, at least in multivariable cases. 
- [An example of this process](example%20partial%20derivative%20basic%20+%20total%20derivative.md)


> [!abstract] Keep in Mind
> Some people prefer to write the formula with subscripts that indicate the variables that are kept constant, like [this](example%20subscript%20including%20notation.md). I personally choose not to, in order to avoid confusion with the $D_x$ notation, where it means the exact opposite, and because every other term in the differential is already constant, so it would be easy to work under the assumption that the only changing term is the one denoted in the partial equation making writing down that other terms are constant as well redundant.

### Definition
Partial differentiation uses the standard [differentiation](Differentiation.md) rules, the difference between differentiation with $\frac{d}{dx}$ and differentiation with $\frac{\partial}{\partial x}$, is that the $d$ implies a total differential, meaning that when differentiating all directions are accounted for at the same time. $\partial$, pronounced as "del", or "partial", implies that only one direction is accounted for when differentiating, the variables of all others directions are treated as if they were constant values. <br>There are a few ways to denote partial differentiation:
1. $f_{x}$, or $f'_x$. Pronounce this as _the partial derivative of $f$ with respect to $x$_. The subscript denotes the direction in which the derivative is taken, in this case the $x$ direction. This sometimes also written as $f_2 (x, y, z)$. This would mean the derivative with respect to the second variable, in this case $y$.
2. __$\frac{\partial}{\partial x} [f]$__, or __$\frac{\partial f}{\partial x}$__, the '_Leibniz notation_'. The squiggly character $\partial$ is called "del" or "partial". Pronounce this as _the partial derivative of $f$ with respect to $x$_. The denominator denotes the direction in which this partial derivative is taken, in this case the $x$ direction.
3. __$D^1_x [f(x,y)]$__, or __$D_x [f(x, y)]$__. The $D$ replaces the $\frac{\partial}{\partial}$. The power on the $D$ denotes how many times to differentiate. Pronounce this as _the partial derivative of $f$ with respect to $x$_. The subscript denotes the direction in which the derivative is taken, in this case the $x$ direction.

Remember from [(single variable) differentiation](Differentiation.md) that the direction or rate of change of a graph is given by the value of it's derivative. The same goes for partial differentiation, but this only considers one direction at a time. The partial differential with respect to $x$ __only__ looks at the rate of change in the $x$ direction while keeping $y$ constant.


### Differentiating Variables as Functions
When [differentiating](Differentiation.md) functions, instead of variables, we use the _chain rule_, [this one](Differentiation.md#Chain%20Rule). <br>What is meant by a differentiating a function instead of a variable, is this: <br>You may encounter functions $f(x, y, z)$ where $x$ itself is expressed in terms of $a$ and $b$. $\rightarrow x = x(a, b)$. This in turn would make $f(x, y, z)$ be $f(x(a, b), y, z)$. <br>When you now take the derivative of $x^2$: 
$$
D_x [x^2] \ne 2x
$$
This is because $x$ itself depends on changing variables. Instead:
$$
D_x [x^2] = 2x \cdot D [x] = 2x \cdot x'
$$
And the same goes for other functions of $x$. 
> [!danger] Note
> Notice that $D[x]$ and $x'$ aren't specific. They just denote the derivative of $x$. If $x$ were a function of $a$ for example, we would write $D_a [x]$ or $x_a '$, for completeness' sake. <br>If $x$ were a function of multiple variables, say $a$ and $b$, we would write the [total derivative](#total%20derivative) for $D[x]$, which would be $dx = D_a [x] da + $D_b [x] db$. <br>This is detailed mathematically below.
>> [!Abstract]
> In theory this action of $D_x [x^2] = 2x \cdot D [x]$ also happens for variables that aren't functions. The reason this is not written down is because evaluating $D [x]$ when $x$ is a variable gives us 1. Therefore $D_x [x^2]$ just becomes $2x \cdot 1 = 2x$ and the $D [x]$ is omitted from the calculation.
#### General Equations
##### Single Variable Dependent
In __general__, the derivative of $f$ where $x = x(a)$ and $y = y(a)$ are functions of a single variable:
$$
D_a[z] = D_a[f(x,y)] = D_x[f] \cdot D_a[x] + D_y[f] \cdot D_a[y]
$$
Or, in terms of __Leibniz notation__:
$$
\frac{dz}{da}=\frac{df\left(x,y\right)}{da}=\frac{\partial f}{\partial x}\cdot\frac{dx}{da}+\frac{\partial f}{\partial y}\cdot\frac{dy}{da}
$$
##### Multivariable Dependent
If $x$ depends on $a$ and $y$ depends on $b$, or if $x$ depends on both $a$ and $b$ it becomes impossible to construct a total differential as done [above](#single%20variable%20dependent), because both these directions have to be taken into account when differentiating. <br>The same thought process is applied as in the chapter _[Total Derivative](#total%20derivative)_ above, when taking the derivative of a multivariable function. We express the differential function of $z$ not with respect to a certain direction like $\frac{dz}{da}$, but as infinitesimal steps of $dz$. <br><br>In __general__, the derivative of $f$ where $x = x(a, b)$ and $y = y(a, b)$ the expressions are:
$$
D_a[z] = D_a[f(x,y)] = D_x[f] \cdot D_a[x] + D_y[f] \cdot D_a[y]
$$
$$
D_b[z] = D_b[f(x,y)] = D_x[f] \cdot D_b[x] + D_y[f] \cdot D_b[y]
$$
With the total derivative:
$$
dz = df(x, y) = D_a[z]da + D_b[z]db
$$

Or, in terms of __Leibniz notation__:
$$
\frac{\partial z}{\partial a}=\frac{\partial f\left(x,y\right)}{\partial a}=\frac{\partial f}{\partial x}\cdot\frac{dx}{da}+\frac{\partial f}{\partial y}\cdot\frac{dy}{da}
$$
$$
\frac{\partial z}{\partial b}=\frac{\partial f\left(x,y\right)}{\partial b}=\frac{\partial f}{\partial x}\cdot\frac{dx}{db}+\frac{\partial f}{\partial y}\cdot\frac{dy}{db}
$$
With the total derivative:
$$
dz = df(x, y) = \frac{\partial z}{\partial a} da + \frac{\partial z}{\partial b} db
$$

> [!abstract] Keep in Mind
> While these formulas may look very intimidating and are perhaps confusing to look at, they are nothing more than mathematical expressions of the chain rule, and they generally don't need to be used formally. 
> Using the math as done in the beginning of this paragraph ([here](#Differentiating%20Variables%20as%20Functions)) is what the actual calculations will look like.
> The expressions for the total derivative aren't new either as they are just a repurposing of expressing the total derivatives as discussed earlier in this note, only now some terms may be hidden in the intial formula for $z$.



---
__[Home](!%20Calculus%20II%20Learning%20Overview)__

---
_Status:_ #ripe

---
# References:
[^wattquote]: Paraphrasing quote from: G. Stoffels, _Mathematical Background Engineering Thermodynamics_, 2020,  [link](https://canvas.utwente.nl/courses/16111/files/4693672?module_item_id=546655) - page 7.
1. R. A. Adams, Christopher Essex, _Calculus A Complete Course_, 9th ed.
2. Openstax, _Calculus Volume 1_, [link](https://openstax.org/details/books/calculus-volume-1).
3. Openstax, _Calculus Volume 2_, [link](https://openstax.org/details/books/calculus-volume-2).
4. Openstax, _Calculus Volume 3_, [link](https://openstax.org/details/books/calculus-volume-3).
5. G. Stoffels, _Mathematical Background Engineering Thermodynamics_, 2020,  [link](https://canvas.utwente.nl/courses/16111/files/4693672?module_item_id=546655).
6. 4. 3Blue1Brown, _Implicit differentiation, what's going on here? | Chapter 6, Essence of calculus_ [link](https://www.youtube.com/watch?v=qb40J4N1fa4).
