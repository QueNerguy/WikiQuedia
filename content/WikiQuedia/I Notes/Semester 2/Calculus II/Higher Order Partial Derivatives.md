---
title: "Higher Order Partial Derivatives"
draft: false
---
Tags: [[differentials]]  <br>13-05-2025

---
# Higher Order Partial Derivatives
See also the note on [general partial differentiation](Partial%20Differentiation).
### Geometric Interpretation
A higher order [partial derivative](Partial%20Differentiation) means you take the partial derivative more than once. Because of the fact that the partial derivative can be taken in only a single direction, we can choose to differentiate with respect to $x$ _first_, and _then_ differentiate with respect to $y$, for example. The expression of this operation would be $D_{xy}$, or in leibzig notation $\frac{\partial}{\partial x \partial y}$. The order this happens in is important, these actions are read from left to right. <br>These combinations that take the partial derivative in more than one direction, are called _mixed derivatives_. <br>The geometric interpretation of taking a higher order partial derivative is just a continuation of taking a single partial derivative. Because a [derivative](Differentiation.md) changes nothing about the direction of the original function, only the value/height of the function, taking the derivative twice can be interpreted as teking the derivative twice with respect to the directions of the original function, to obtain the acceleration of this graph or the slope of the first derivative function. <br>With the same line of thinking, it is logical that two mixed partial derivatives which use the same directions, for example $D_{xy}$ and $D_{yx}$, are the same. This is true everywhere, except when a function is [not differentiable](Differentiability) at a point but a derivative can still be calculated. Because of this it is important not to disregard the order of the _mixed derivative_, unless it is explicitly known that the function is differentiable everywhere.

### Definition
Because taking a higher order [partial derivative](Partial%20Differentiation) means taking a partial derivative more than once, the definiton is the same as it is for taking a partial derivative, just follow this reasoning more than once.
- See the note on [partial derivatives](Partial%20Differentiation) for a general explanation of the definiton of taking a partial derivative.








---
__[Home](!%20Calculus%20II%20Learning%20Overview)__

---
_Status:_ #sprout

---
# References:

1. R. A. Adams, Christopher Essex, _Calculus A Complete Course_, 9th ed.
2. Openstax, _Calculus Volume 1_, [link](https://openstax.org/details/books/calculus-volume-1).
3. Openstax, _Calculus Volume 2_, [link](https://openstax.org/details/books/calculus-volume-2).
4. Openstax, _Calculus Volume 3_, [link](https://openstax.org/details/books/calculus-volume-3).
5. Wikipedia, _Partial derivative_, [link](https://en.wikipedia.org/wiki/Partial_derivative#Higher_order_partial_derivatives).
6. Wikipedia, _Symmetry of second derivatives_, [link](https://en.wikipedia.org/wiki/Symmetry_of_second_derivatives#Schwarz.27s_theorem).
7. Stackexchange, tcourant, [link](https://math.stackexchange.com/questions/716690/a-function-with-differentiable-partial-derivatives-but-unequal-mixed-derivatives).