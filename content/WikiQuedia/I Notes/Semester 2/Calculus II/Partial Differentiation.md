---
title: "Partial Differentiation"
draft: false
---
Tags: [[calculus]], [[differentiation]]   <br>08-05-2025

---
# Partial Differentiation
See the note [[Differentiation and Techniques]] for an introduction to differentiation. Partial differentiation applies to a more general and higher dimensional case of differentiation.
### Definition
Partial differentiation is in essence the same as [(standard) differentiation](Differentiation%20and%20Techniques), the difference is that partial differentiation also applies to multivariable cases. The notation difference expresses this difference, $\partial$ expresses change in one direction only, $d$ expresses the total differential. <br>There are a few ways to denote a partial differential:
1. __$\frac{\partial}{\partial x} [f]$__, or __$\frac{\partial f}{\partial x}$__. The squiggly character $\partial$ is called "del" or "partial". Pronounce this as _the partial derivative of $f$ with respect to $x$_. The denominator denotes the direction in which this partial derivative is taken, in this case the $x$ direction.
2. __$D^1_x [f(x,y)]$__, or __$D_x [f(x, y)]$__. The $D$ replaces the $\frac{\partial}{\partial}$. The power on the $D$ denotes how many times to differentiate. Pronounce this as _the partial derivative of $f$ with respect to $x$_. The subscript denotes the direction in which the derivative is taken, in this case the $x$ direction.

Remember from [(single variable) differentiating](Differentiation%20and%20Techniques) that the direction or rate of change of a graph is given by the value of it's derivative. The same goes for partial derivatives and directional derivatives%%==linkje directional derivative==%%, but they only consider one direction. The partial differential with respect to $x$ __only__ looks at the rate of change in the $x$ direction.

### Computing and Geometrical Intuition
A partial derivative is closely tied to taking a _directional derivative_%%==linkje directional derivative==%%, in that they both take the derivative in __one direction only__. The partial derivative with respect to $x$ means taking the derivative in the $x$ direction, by [differentiating x as a variable](Differentiation%20and%20Techniques#basic%20rules), and treating the other variables as constants. <br>Because the other variables are constant you basically take the derivative of a slice of the function, at this constant distance from the origin, thus transforming a 3D function, for example, into a 2D one.
- [An example of this process](example%20partial%20derivative%20basic.md)
#### Total Derivative
When calculating the total derivative of a function $f$ of a single variable function, we would always take it with respect to the single variable, $\frac{d}{dx}f\left(x\right)$, so with respect to $x$. When calculating the total derivative we do not want to have the derivative with respect to a single direction, but all at the same time. In the single variable case we would then have $df(x) = dx$, the infinitesimal change of $f$ under a total infinitesimal change of $x$[^wattquote], and in the multivariable case we have:
$$
df(x,y) = \frac{\partial f}{\partial x} dx + \frac{\partial f}{\partial y} dy
$$
$$
df(x,y) = D_x[f] dx + D_y[f] dy
$$
This is the most convenient way of writing total derivatives in multivariable cases. 
- [An example of this process](example%20partial%20derivative%20basic%20+%20total%20derivative.md)


> [!abstract] Keep in Mind
> Some people prefer to write the formula with subscripts that indicate the variables that are kept constant, like [this](example%20subscript%20including%20notation.md). I personally choose not to, in order to avoid confusion with the $D_x$ notation, where it means the exact opposite, and because every other term in the differential is already constant, so it would be easy to work under the assumption that the only changing term is the one denoted in the partial equation making writing down that other terms are constant as well redundant.

### Differentiating Variables as Functions
When differentiating functions instead of variables we use the _chain rule_, equivalent to [this one](Differentiation%20and%20Techniques#2%20-%20chain%20rule). What is meant by a function instead of a variable is this: <br>You may encounter functions $f(x, y, z)$ where $x$ itself is expressed in terms of $a$ and $b$. $\rightarrow x = x(a, b)$. This in turn would make $f$ be $f(x(a, b), y, z)$. <br>When you now take the derivative of $x^2$: 
$$
D_x [x^2] \ne 2x
$$
This is because $x$ itself depends on changing variables. Instead:
$$
D_x [x^2] = 2x \cdot D_x[x] = 2x \cdot x'
$$
And the same goes for other functions of $x$. 
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
If $x$ depends on $a$ and $y$ depends on $b$, or if $x$ depends on both $a$ and $b$ it becomes impossible to construct a total differential as done [above](#single%20variable%20dependent), because both these directions have to be taken into account when differentiating. <br>The same thought process is applied as with the chapter [Total Derivative](#total%20derivative) above, when taking the derivative of a multivariable function. We express the differential function of $z$ not with respect to a certain direction like $\frac{dz}{da}$, but as infinitesimal steps of $dz$. <br><br>In __general__, the derivative of $f$ where $x = x(a, b)$ and $y = y(a, b)$ the expressions are:
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
> Using the math as done in the beginning of this paragraph ([here](Differentiating%20Variables%20as%20Functions)) is what the actual calculations will look like.
> The expressions for the total derivative aren't new either as they are just a repurposing of expressing the total derivatives as discussed earlier in this note, only now some terms may be hidden in the intial formula for $z$.



---
__[Home](Example.md)__ %%==needs homepage==%%

---
_Status:_ #ripe #missingLink

---
# References:
[^wattquote]: Paraphrasing quote from: G. Stoffels, _Mathematical Background Engineering Thermodynamics_, 2020,  [link](https://canvas.utwente.nl/courses/16111/files/4693672?module_item_id=546655) - page 7.
1. R. A. Adams, Christopher Essex, _Calculus A Complete Course_, 9th ed.
2. G. Stoffels, _Mathematical Background Engineering Thermodynamics_, 2020,  [link](https://canvas.utwente.nl/courses/16111/files/4693672?module_item_id=546655).
