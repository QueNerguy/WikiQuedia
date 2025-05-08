---
title: Tangents in Higher Dimensions - 3D
draft: false
---
Tags: [[calculus]], [[differentiation]]   <br>08-05-2025

---
# Tangents in Higher Dimensions - 3D
In 2D spaces constructing the tangent to a graph would result in a line tangent to the graph. <br>In 3D spaces this would be one or more lines, whose directions are given by the [partial derivatives](partial%20differentiation), or a plane whose area is spanned by the tangent lines. 
### Lines
Finding a line tangent to a graph at a point with coordinates $(a, b, c)$ has 2 steps.
1. Finding the direction of the line $\rightarrow$ This is done by finding the [partial](Differentiation%20and%20Techniques) or directional derivatives%%==link directional derivative==%% of the function at that point.
2. Finding a base for the line. The line needs to start travelling from the point on the graph it's supposed to lay tangent to, at the height the graph assumes at that point. The base for the line is the $z$-height of the function at that point ($f(a, b) = c$).

The formula for the line, then, is:
$$
z = D_x [f] \cdot (x - a) + c = D_y [f] \cdot (y-b) + c
$$
Or, in case the height $c$ was unknown previously:
$$
z = D_x [f] \cdot (x - a) + f(a, b) = D_y [f] \cdot (y-b) + f(a, b)
$$
> [!note]
> Note that this formula is the same as saying <br>$z = D_x [f] \Delta x + c$. <br>Which is, in turn, similar to the definition of a line in 2D,<br>$y = ax + b$,<br>only extended to 3D this time, and in one direction in order to form a line and not a plane.


Alternatively it is possible to substitute the coordinates and the partial derivatives in the [general formula for a line in 3D](general%20formula%20line%203D).
### Planes
Tangent planes are equivalent to the space that the tangent lines span, finding them is therefore similar to finding the tangent lines, as is outlined above. <br>Finding a plane tangent to a graph at a point $(a, b, c)$ has 2 steps
1. Finding the [partial](Partial%20Differentiation) or directional derivatives%%==link directional derivative==%% to get the principle directions of the tangent lines that span the tangent plane.
2. Finding a base for the plane. The plane needs to start travelling from the point on the graph it's supposed to lay tangent to. 

The formula for the plane, then, is:
$$
z = D_x [f] \cdot (x - a) + D_y [f] \cdot (y-b) + c
$$
Or, in the case the height $c$ was unknown previously:
$$
z = D_x [f] \cdot (x - a) + D_y [f] \cdot (y-b) + f(a, b)
$$

> [!note]
> Note that this formula is the same as saying <br>$z = D_x [f] \Delta x + D_y [f] \Delta y + c$. <br>Which is, in turn, similar to the definition of a line in 2D,<br>$y = ax + b$,<br>only extended to 3D, with multiple directions in order to form a plane this time.









---
__[Home](Example.md)__

---
_Status:_ #sprout

---
# References:

1. R. A. Adams, Christopher Essex, _Calculus A Complete Course_, 9th ed.