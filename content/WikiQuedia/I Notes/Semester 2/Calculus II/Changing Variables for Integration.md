---
title: "Changing Variables for Integration"
draft: false
---
Tags:    <br>21-05-2025

---
# Changing Variables for Integration

### Geometric Interpretation
Changing variables for a function is a form of [changing the coordinate system](Changing%20Coordinate%20System%20for%20Integration), but more broadly defined, as our coordinate system can be anything we want. We can choose a coordinate system that makes a parabola into a straight line, or an elliptic region into a circular one. <br>What changing coordinate system does to a region, is it maps it _one to one_. What this means is that for every point in the original region there is one in the new one. This can be thought of as pouring a substance from the one container into the next. There will be the same amount of particles, but the shape they assume is different and the volume of the second container may be easier to determine.

### Definition
Changing variables from coordinates $(x, y)$ to a coordinate system with base%%==linkje perhaps naar linalg idk==%% variables $(u, v)$ requires we express $u$ and $v$ in terms of $x$ and $y$ first, to determine how the expressions get mapped%%==linkje mapping linalg perhaps==%% onto eachother. <br>For a function $f(x, y)$ we have equations $x = g(u, v)$ and $y = h(u, v)$ to express the change of variables from one to the other. Think of this as creating a vector $\textbf{g}$ out of $\hat{\textbf{i}}$ and $\hat{\textbf{j}}$ that acts as part of the base for the new space we're defining.
To construct the change of variables for the integral from this, we have the following expression:
$$
\iint_{D_1} f_1(x, y) dydx = \iint_{D_2} f_1 \big( g(u, v), h(u, v) \big) \cdot |J(u, v)| dudv = \iint_{D_2} f_2(u, v) \cdot \begin{vmatrix} D_u[x] & D_v[x] \\ D_u[y] & D_v [y] \end{vmatrix} dudv
$$
The $J$ is the [Jacobian matrix](Jacobian%20Matrix) of the change of variables from $(x, y)$ to $(u, v)$. As the matrix has to have a deterinant%%==linkje determinant==%%, the dimension of the space needs to be the same size it is before as it is after changing variable. If it's not, the jacobian matrix won't be square, as there will be a mismatch between the amount of equations created from the variables before and the amount of variables these equations are expressed in in the new coordinate system.%%==perhaps a weird explanation, reexamine this pls==%% <br>The reason the Jacobian with respect to the new dimensions is added, is because the Jacobian expresses the change in size of areas when changing between coordinate systems. For example the following system:
1. $x = 2u$
2. $y = 3v$

The Jacobian of this system would be:
$$
\begin{vmatrix} D_u[2u] & D_v[2u] \\ D_u [3v] & D_v [3v] \end{vmatrix} = \begin{vmatrix} 2 & 0 \\ 0 & 3 \end{vmatrix} = 2 \cdot 3 - 0 \cdot 0 = 6
$$
Thus an area in the new $(u, v)$ space becomes __6 times larger__ when going back to the $(x, y)$ space, thus we need to scale the area in the new space by 6 to get the original value for the area. <br>A real world equivalent to adding the Jacobian, would be adding the density to account for changes in the volume a molecule wants to occupy.

 > [!abstract]
 > 1. The variables in the __numerator__ are the old coordinates.
> 2. The variables in the __denominator__ are the new coordinates.


%%==laatste stukje nalezen, kan zijn dat ik raaskal daar gg==%%




---
**[Home](app://obsidian.md/!%20Calculus%20II%20Learning%20Overview)**

---
_Status:_ #sprout #missingLink

---
# References:

1. R. A. Adams, Christopher Essex, _Calculus A Complete Course_, 9th ed.
2. Dr Trefor Bazett, _Change of Variables & The Jacobian | Multi-variable Integration_, [link](https://www.youtube.com/watch?v=wUF-lyyWpUc).
3. Wikipedia, _Jacobian matrix and determinant_, [link](https://en.wikipedia.org/wiki/Jacobian_matrix_and_determinant).
4. Khan Academy, _The Jacobian Determinant_, [link](https://www.youtube.com/watch?v=p46QWyHQE6M).
%%Trefor Bazett is so goated fr i would lay down my life for that man%%