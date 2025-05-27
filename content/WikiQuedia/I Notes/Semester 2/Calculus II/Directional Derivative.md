---
title: "Directional Derivative"
draft: false
---
Tags: [[calculus]], [[differentials]], [[gradients]], [[vector math]]   <br>12-05-2025

---
# Directional Derivative
### Geometric Interpretation
Directional derivatives ($\nabla_{\textbf{u}}$ or $D_{\textbf{u}}$) are based on [partial derivatives](Partial%20Differentiation) and are very much alike [gradients](Gradient), where we found the derivative in the direction of steepest incline. The directional derivative, however, is a vector that finds the derivative along a specified direction, regardless of whether that direction has the steepest incline. <br>When calculating the directional derivative in a direction, you can think of this operation as taking a slice of the graph going in that direction, and finding the [derivative](Differentiation.md) on that slice. <br>When projecting the directional derivative on that slice, the direction it points in on that slice gives the slope of the function. The length of the directional derivative gives the steepness of the incline.<br><br>![[Directional_derivative_contour_plot_80%.png|450]]<br>By Eviatar Bach - Own work, CC0, [link](https://commons.wikimedia.org/w/index.php?curid=29175150)<br><br>As seen in the contour plot above, the [gradient](Gradient) (black) points in the direction of steepest ascent, while the directional derivative (orange) points in the specified direction, namely $\textbf{u}$ (gray). The direction here isn't indicative of the fastest rate of change, as the vector is projected down, but when projecting in 3D space the directional derivative would point tangent to the curve of the function.

### Definition
Computing the directional derivative is analogous to calculating the [gradient](Gradient), but instead of taking giving a result in the direction of steepest incline, we take it in a specified direction. This means we swap the standard base of cartesian coordinates, $\hat{\textbf{ i }}, \hat{\textbf{ j }}$, with the __unit__ vectors in the direction we need, $\hat{\textbf{u}}, \hat{\textbf{v}}$. It is imperative that these vectors have length one, or they will distort the length of the directional derivative. <br>The directional derivative of a function $f(x, y)$, in direction $\textbf{u}=\begin{bmatrix} a \\ b \end{bmatrix}$ is
$$
\nabla_{\textbf{u}} f(x, y) = (D_x [f] \hat{\textbf{ i }} + D_y [f] \hat{\textbf{ j }})\cdot \textbf{u} = a D_x [f] \hat{\textbf{ i }} + b D_y [f] \hat{\textbf{ j }}
$$
$$
\nabla_{\textbf{u}} f(x, y) = \left( \frac{\partial f}{\partial x} \hat{\textbf{ i }} + \frac{\partial f}{\partial y} \hat{\textbf{ j }} \right) \cdot \textbf{u} = a \frac{\partial f}{\partial x} \hat{\textbf{ i }} + b \frac{\partial f}{\partial y} \hat{\textbf{ j }} 
$$
With $\hat{\textbf{ i }}, \hat{\textbf{ j }}$ the unit vectors in $x, y$ direction respectively[^quote1]. <br>Or alternatively as a vector block, we have
$$
\nabla_{\textbf{u}}f(x,y)=\begin{bmatrix}D_{x}\left\lbrack f\right\rbrack\\ D_{y}\left\lbrack f\right\rbrack\end{bmatrix}\cdot\textbf{u} = \begin{bmatrix} a D_{x}\left\lbrack f\right\rbrack \\ b D_{y} \left\lbrack f \right\rbrack \end{bmatrix}
$$
$$
\nabla_{\textbf{u}} f(x, y) = \begin{bmatrix}\frac{\partial f}{\partial x}\\ \frac{\partial f}{\partial y} \end{bmatrix} \cdot \textbf{u} = \begin{bmatrix} a \frac{\partial f}{\partial x}\\ b \frac{\partial f}{\partial y} \end{bmatrix}
$$







---
__[Home](!%20Calculus%20II%20Learning%20Overview)__

---
_Status:_ #ripe

---
# References:
[^quote1]: [Wikipedia - Gradient](https://en.wikipedia.org/wiki/Gradient#Cartesian_coordinates)
1. D. C. Lay, S. R. Lay, J. J. McDonald, _Linear Algebra and Its Applications_, 6th ed.
2. Openstax, _Calculus Volume 1_, [link](https://openstax.org/details/books/calculus-volume-1).
3. Openstax, _Calculus Volume 2_, [link](https://openstax.org/details/books/calculus-volume-2).
4. Openstax, _Calculus Volume 3_, [link](https://openstax.org/details/books/calculus-volume-3).
5. Khan Academy, _Directional derivatives and slope_, [link](https://www.khanacademy.org/math/multivariable-calculus/multivariable-derivatives/gradient-and-directional-derivatives/v/directional-derivatives-and-slope)