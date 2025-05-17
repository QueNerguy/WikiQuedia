---
title: "Gradient"
draft: false
---
Tags: [[calculus]], [[differentials]], [[gradients]], [[vector math]]   <br>11-05-2025

---
# Gradient
### Geometric Interpretation
The gradient ($\nabla f$) of a function $f$ is a vector that gives information about the change and the speed of this change of the function $f$. The gradient points in the direction of steepest ascent of a function. <br>The gradient has two important properties:
1. The __direction__ of the gradient vector is the direction in which $f$ changes the fastest, meaning the gradient points in the direction of steepest incline.
2. The __magnitude__ of the gradient vector gives the rate of the increase, the slope of the function.
 
Because the gradient vector gives the direction of change, and not the direction of travel, it always points perpendicular to $f$. <br><br>![[Directional_derivative_contour_plot_80%.png|450]]<br>By Eviatar Bach - Own work, CC0, [link](https://commons.wikimedia.org/w/index.php?curid=29175150)<br><br>As seen in the contour plot above, the gradient (black) points in the direction of steepest ascent, while the [directional derivative](directional%20derivative) (orange) points in a specified direction, namely $\textbf{u}$ (gray).<br>The gradient is usually used in a [vector field](https://en.wikipedia.org/wiki/Vector_field), where it is evaluated at every point and plotted like the bottom plane below. This, for example, is useful to show a 3D graph on a 2D plane. <br>
![[3d-gradient-cos_80.png|450]] <br>By MartinThoma - Own work, CC0, [link](https://commons.wikimedia.org/w/index.php?curid=71375503)

> [!abstract] Further Insight
> For further visual insight on a geometrical representation of a gradient, I recommend [this](https://www.youtube.com/watch?v=_-02ze7tf08 ) video by Khan Academy.
### Definition
The gradient is constructed as a vector with the entries in a certain direction being the [partial derivatives](partial%20differentiation) in that direction. <br>In a 3D space, with $z = f(x, y)$ we have the expression of the gradient as follows:
$$
\nabla f(x, y) = D_x [f] \hat{\textbf{ i }} + D_y [f] \hat{\textbf{ j }}
$$
$$
\nabla f(x,y) = \frac{\partial f}{\partial x} \hat{\textbf{ i }} + \frac{\partial f}{\partial y} \hat{\textbf{ j }}
$$
With $\hat{\textbf{ i }}, \hat{\textbf{ j }}$ the unit vectors in $x, y$ direction respectively[^quote1]. <br>Or alternatively as a vector block:
$$
\nabla f(x,y)=\begin{bmatrix}D_{x}\left\lbrack f\right\rbrack\\ D_{y}\left\lbrack f\right\rbrack \end{bmatrix}
$$
$$
\nabla f(x,y)=\begin{bmatrix}\frac{\partial f}{\partial x}\\ \frac{\partial f}{\partial y} \end{bmatrix}
$$









---
__[Home](!%20Calculus%20II%20Learning%20Overview)__

---
_Status:_ #ripe

---
# References:
[^quote1]: [Wikipedia - Gradient](https://en.wikipedia.org/wiki/Gradient#Cartesian_coordinates)
1. R. A. Adams, Christopher Essex, _Calculus A Complete Course_, 9th ed.
2. Openstax, _Calculus Volume 1_, [link](https://openstax.org/details/books/calculus-volume-1).
3. Openstax, _Calculus Volume 2_, [link](https://openstax.org/details/books/calculus-volume-2).
4. Openstax, _Calculus Volume 3_, [link](https://openstax.org/details/books/calculus-volume-3).
5. Wikipedia, _Gradient_, [link](https://en.wikipedia.org/wiki/Gradient).
6. Khan Academy, _Gradient_, [link](https://www.youtube.com/watch?v=tIpKfDc295M).
7. Khan Academy, _Gradient and graphs_, [link](https://www.youtube.com/watch?v=_-02ze7tf08 ).