---
title: "Motion in Cartesian Coordinates"
draft: false
---
tags: [[dynamics]], [[kinematics]]     <br>03-09-2025

---
# Motion in Cartesian Coordinates
This coordinate system lends itself well to **rectilinear motion**. Any motion that follows a path that somewhat follows a straight line without deviating too much can be solved most easily using Cartesian coordinates.
### Interpretation
Any point in Cartesian space can be defined by the sum of the distances along each axis, as pictured below. The center of the coordinate system is arbitrary, but preferably at a point that makes the computations as easy as possible. The positive and negative direction are usually defined to follow the [right-hand-rule](https://en.wikipedia.org/wiki/Cartesian_coordinate_system#In_three_dimensions), but can be redefined to ease computations.
<br><br>![[Coord_system_CA.png|400]]<br>Jorge Stolfi, Public domain, via Wikimedia Commons<br><br>We also define a *standard basis*, consisting of the vectors  $\hat{\textbf{i}}$, $\hat{\textbf{j}}$ and $\hat{\textbf{k}}$. These are unit vectors, meaning they have a length of 1, that point in the directions $x$, $y$ and $z$ respectively.<br>To create a vector that connects the origin to any point in space we can scale the standard basis. A distance of 3 on the $x$-axis and 2 on the $y$-axis would give a vector $3\hat{\textbf{i}} + 2\hat{\textbf{j}}$. <br>Writing this out yields
$$
\begin{bmatrix} x \\ y \end{bmatrix} = 3 \hat{\textbf{i}} + 2 \hat{\textbf{j}} = \begin{bmatrix} 3 \\  2 \end{bmatrix}
$$
Using the standard basis we can construct our position vectors, and subsequently the vectors for velocity and acceleration.
$$
\vec{\textbf{s}}(x, y, z) = \begin{bmatrix} x \\ y \\ z \end{bmatrix} = x \hat{\textbf{i}} + y \hat{\textbf{j}} + z \hat{\textbf{k}}
$$


### Mathematical Formulation
Using the above way to deconstruct a vector into it's axial components we can create a formulation for our position vector, and [differentiate](Differentiation) from there to acquire the vector formulation for the velocity and acceleration.
$$
\vec{\textbf{s}}(s_x, s_y, s_z) = \begin{bmatrix} s_x \\ s_y \\ s_z \end{bmatrix} = s_x \hat{\textbf{i}} + s_y \hat{\textbf{j}} + s_z \hat{\textbf{k}}
$$
$$
\vec{\textbf{v}}(v_x, v_y, v_z) = \begin{bmatrix} v_x \\ v_y \\ v_z \end{bmatrix} = v_x \hat{\textbf{i}} + v_y \hat{\textbf{j}} + v_z \hat{\textbf{k}}
$$
$$
\vec{\textbf{a}}(a_x, a_y, a_z) = \begin{bmatrix} a_x \\ a_y \\ a_z \end{bmatrix} = a_x \hat{\textbf{i}} + a_y \hat{\textbf{j}} + a_z \hat{\textbf{k}}
$$
Alternatively, we could use the *dot notation* to write these equations as
$$
\vec{\textbf{s}}(x, y, z) = \begin{bmatrix} x \\ y \\ z \end{bmatrix} = x \hat{\textbf{i}} + y \hat{\textbf{j}} + z \hat{\textbf{k}}
$$
$$
\vec{\textbf{v}}(\dot{x}, \dot{y}, \dot{z}) = \begin{bmatrix} \dot{x} \\ \dot{y} \\ \dot{z} \end{bmatrix} = \dot{x} \hat{\textbf{i}} + \dot{y} \hat{\textbf{j}} + \dot{z} \hat{\textbf{k}}
$$
$$
\vec{\textbf{a}}(\ddot{x}, \ddot{y}, \ddot{z}) = \begin{bmatrix} \ddot{x} \\ \ddot{y} \\ \ddot{z} \end{bmatrix} = \ddot{x} \hat{\textbf{i}} + \ddot{y} \hat{\textbf{j}} + \ddot{z} \hat{\textbf{k}}
$$

>[!note]
>To differentiate these equations we would infer the product rule. The term with the derivative of the standard basis is neglected, because the standard basis vector doesn't change in direction or magnitude, it is constant. It's derivative is therefore 0, and the term is removed from the equation.

These forms can also be used to only study the motion in a single direction. For example, if we wanted to look at the acceleration in $y$-direction only, we would neglect everything that isn't multiplied by $\hat{\textbf{j}}$.
$$
\vec{\textbf{a}}_y = \ddot{y}\hat{\textbf{j}} \Rightarrow a_y = \ddot{y}
$$

### Inventory
> [!abstract] Inventory of the Formulas
> - **Coordinates**
> $$
> \vec{\textbf{s}}(s_x, s_y, s_z) = \begin{bmatrix} s_x \\ s_y \\ s_z \end{bmatrix} = s_x \hat{\textbf{i}} + s_y \hat{\textbf{j}} + s_z \hat{\textbf{k}}
> $$
> $$
> \vec{\textbf{v}}(v_x, v_y, v_z) = \begin{bmatrix} v_x \\ v_y \\ v_z \end{bmatrix} = v_x \hat{\textbf{i}} + v_y \hat{\textbf{j}} + v_z \hat{\textbf{k}}
> $$
> $$
> \vec{\textbf{a}}(a_x, a_y, a_z) = \begin{bmatrix} a_x \\ a_y \\ a_z \end{bmatrix} = a_x \hat{\textbf{i}} + a_y \hat{\textbf{j}} + a_z \hat{\textbf{k}}
> $$



---
__[Home](WikiQuedia/Mechanical%20Engineering/3%20-%20Tags/Example.md)__ %%NEEDS HOMEPAGE%%

---
_Status:_ #ripe #missingLink

---
# Based On:

1. J. L. Meriam, L. G. Kraige, J. N. Bolton, *Engineering Mechanics Dynamics*, 8th ed, US.
2. Wikipedia, *Cartesian coordinate system*, [link](https://en.wikipedia.org/wiki/Cartesian_coordinate_system).


