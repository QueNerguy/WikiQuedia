### Hessian Matrix
07-05-2025
#### Referencing:
1. Wikipedia, *Hessian matrix*, [link](https://en.wikipedia.org/wiki/Hessian_matrix).

#### Synopsis:
A Hessian matrix is a matrix%%==linkje matrix perhaps?==%% that describes the curvature of a function. <br>To construct a Hessian matrix, calculate all possible [partial derivatives](Partial%20Differentiation) and arrange them in the matrix according to the following formula, consisting of partial derivatives.
$$
\begin{bmatrix}\frac{\partial^2f}{\partial x_1\partial x_1} & \frac{\partial^2f}{\partial x_1\partial x_2} & \ldots & \frac{\partial^2f}{\partial x_1\partial x_{n}}\\ \frac{\partial^2f}{\partial x_2\partial x_1} & \frac{\partial^2f}{\partial x_2\partial x_2} & \ldots & \frac{\partial^2f}{\partial x_2\partial x_{n}}\\ \vdots & \vdots & \ddots & \vdots\\ \frac{\partial^2f}{\partial x_{n}\partial x_1} & \frac{\partial^2f}{\partial x_{n}\partial x_2} & \ldots & \frac{\partial^2f}{\partial x_{n}\partial x_{n}}\end{bmatrix}
$$
Notice that column-wise, there is a change to which direction the second derivative [differentiates](Differentiation), and row-wise, there is a change to which direction the first derivative differentiates. <br>In a two-dimensional case for example (variables $x$ and $y$), this matrix would become
$$
\begin{bmatrix}\frac{\partial^2}{\partial x^2} & \frac{\partial^2}{\partial x\partial y}\\ \frac{\partial^2}{\partial y\partial x} & \frac{\partial^2}{\partial y^2}\end{bmatrix}
$$
More concretely: A Hessian matrix is constructed by choosing every next row to start with  taking the __first__ partial derivative in the direction of the variable _next in line_ in the original function we defined, $f(x_1, x_2, x_3, \dots)$, and for every column to take the __second__ partial derivative _next in line_ in the function. The order for $f(x,y,z)$ would be $x$, then $y$, then $z$. 




#missingLink 





