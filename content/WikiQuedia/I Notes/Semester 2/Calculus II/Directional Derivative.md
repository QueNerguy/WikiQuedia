---
title: "Directional Derivative"
draft: false
---
Tags: [[calculus]], [[differentiation]], [[gradients]], [[vector math]]   <br>12-05-2025

---
# Directional Derivative
### Geometric Interpretation
Directional derivatives ($\nabla_{\textbf{u}}$ or $D_{\textbf{u}}$) are based on [partial derivatives](partial%20differentiation), where we found the derivative along a major axis of a function. The directional derivative however, is a _vector_ which finds the derivative along any other direction. <br>When calculating the directional derivative in a direction, you can think of this operation as taking a slice of the graph going in that direction, and finding the [derivative](Differentiation%20and%20Techniques) on that slice. <br>Just like with the [gradient](gradient), the direction of the directional derivative vector gives the direction in which $f$ changes the fastest, the magnitude of the gradient vector gives the rate of this increase. <br><br>![[Directional_derivative_contour_plot_80%.png|450]]<br>By Eviatar Bach - Own work, CC0, [link](https://commons.wikimedia.org/w/index.php?curid=29175150)<br><br>As seen in the contour plot above, the [gradient](gradient) (black) points in the direction of steepest ascent, while the directional derivative (orange) points in the specified direction, namely $\textbf{u}$ (gray). The direction here isn't indicative of the fastest rate of change, as the vector is projected down, but when projecting in 3D space the directional derivative would point tangent to the curve of the function.

### Definition
Computing the directional derivative is analogous to calculating the [gradient](gradient), but instead of taking it in the direction of the major axes, we take it in any other direction, which means we swap $\hat{\textbf{ i }}, \hat{\textbf{ j }}$ with the __unit__ vectors in the direction we need, $\hat{\textbf{u}}, \hat{\textbf{v}}$. It is imperative that these vectors have length one, or they will distort the length of the directional derivative. <br>The directional derivative of a function $f(x, y)$, in direction $\textbf{u}=\begin{bmatrix} a \\ b \end{bmatrix}$ is:
$$
\nabla_{\textbf{u}} f(x, y) = (D_x [f] \hat{\textbf{ i }} + D_y [f] \hat{\textbf{ j }})\cdot \textbf{u} = a D_x [f] \hat{\textbf{ i }} + b D_y [f] \hat{\textbf{ j }}
$$
$$
\nabla_{\textbf{u}} f(x, y) = \left( \frac{\partial f}{\partial x} \hat{\textbf{ i }} + \frac{\partial f}{\partial y} \hat{\textbf{ j }} \right) \cdot \textbf{u} = a \frac{\partial f}{\partial x} \hat{\textbf{ i }} + b \frac{\partial f}{\partial y} \hat{\textbf{ j }} 
$$
With $\hat{\textbf{ i }}, \hat{\textbf{ j }}$ the unit vectors in $x, y$ direction respectively[^quote1]. <br>Or alternatively as a vector block:
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
2. Khan Academy, _Directional derivatives and slope_, [link](https://www.khanacademy.org/math/multivariable-calculus/multivariable-derivatives/gradient-and-directional-derivatives/v/directional-derivatives-and-slope)