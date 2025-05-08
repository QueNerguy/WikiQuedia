### Hessian Matrix
07-05-2025
#### Referencing:
[Wikipedia - Hessian matrix](https://en.wikipedia.org/wiki/Hessian_matrix)

#### Synopsis:
A Hessian matrix is a matrix%%==linkje matrix perhaps?==%% that describes the curvature of a function. <br>To construct a Hessian matrix, calculate all possible partial derivatives%%==LINKJE PARTIAL DERIVATIVE PLSS==%% and arrange them in the matrix according to the following formula, consisting of partial derivatives:
$$
\begin{pmatrix}\frac{\partial^2f}{\partial x_1\partial x_1} & \frac{\partial^2f}{\partial x_1\partial x_2} & \ldots & \frac{\partial^2f}{\partial x_1\partial x_{n}}\\ \frac{\partial^2f}{\partial x_2\partial x_1} & \frac{\partial^2f}{\partial x_2\partial x_2} & \ldots & \frac{\partial^2f}{\partial x_2\partial x_{n}}\\ \vdots & \vdots & \ddots & \vdots\\ \frac{\partial^2f}{\partial x_{n}\partial x_1} & \frac{\partial^2f}{\partial x_{n}\partial x_2} & \ldots & \frac{\partial^2f}{\partial x_{n}\partial x_{n}}\end{pmatrix}
$$
In a two-dimensional case for example (variables $x$ and $y$), this matrix would become: 
$$
\begin{pmatrix}\frac{\partial^2}{\partial x^2} & \frac{\partial^2}{\partial x\partial y}\\ \frac{\partial^2}{\partial y\partial x} & \frac{\partial^2}{\partial y^2}\end{pmatrix}
$$
More concretely: A Hessian matrix is constructed by choosing every next row to start with __first__ taking the partial derivative _next in line_, and for every column to __end__ with taking the partial derivative _next in line_. The order for $f(x,y,z)$ would be $x$, then $y$, then $z$. <br>The denominator of the complete first row of a Hessian matrix, then, would __begin__ with $\partial x$.

#missingLink 





