---
title: "Partial Differentiation"
draft: false
---
Tags:    <br>08-05-2025

---
# Partial Differentiation
See the note [[Differentiation and Techniques]] for an introduction to differentiation. Partial differentiation applies to a more general and higher dimensional case of differentiation.
### Definition
Partial differentiation is virtually the same as "standard" differentiation, the difference is that partial differentiation applies to multivariable cases. The notation difference is there to express this difference, the $\partial$ expresses change in one direction, $d$ expresses the total differential. <br>There are a few ways to denote a partial differential:
1. __$\frac{\partial}{\partial x} [f]$__, or __$\frac{\partial f}{\partial x}$__. The squiggly character $\partial$ is called "del" or "partial". Pronounce this as _the partial derivative of $f$ with respect to $x$_. The denominator denotes the direction in which this partial derivative is taken, in this case the $x$ direction.
2. __$D^1_x [f(x,y)]$__, or __$D_x [f(x, y)]$__. The $D$ replaces the $\frac{\partial}{\partial}$. The power on the $D$ denotes how many times to differentiate. Pronounce this as _the partial derivative of $f$ with respect to $x$_. The subscript denotes the direction in which the derivative is taken, in this case the $x$ direction.

### Computing
A partial derivative is equivalent to taking a _directional derivative_%%==linkje directional derivative==%%. What happens when taking a partial derivative is you take the derivative in __one direction only__. The partial derivative with respect to $x$ means taking the derivative of only $x$ variables, and keeping the other variables constant. <br>Because the other variables are constant you basically take the derivative of a slice of the function, at this constant distance from the origin, thus transforming a 3D function, for example, into a 2D one.
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












---
__[Home](Example.md)__

---
_Status:_ #sprout

---
# References:
[^wattquote]: Paraphrasing quote from: G. Stoffels, _Mathematical Background Engineering Thermodynamics_, 2020,  [link](https://canvas.utwente.nl/courses/16111/files/4693672?module_item_id=546655) - page 7.
1. R. A. Adams, Christopher Essex, _Calculus A Complete Course_, 9th ed.
2. G. Stoffels, _Mathematical Background Engineering Thermodynamics_, 2020,  [link](https://canvas.utwente.nl/courses/16111/files/4693672?module_item_id=546655).
