### general formula line 3D
08-05-2025
#### Referencing:
[Stackexchange](https://math.stackexchange.com/questions/404440/what-is-the-equation-for-a-3d-line)

#### Synopsis:
For a line $L$ passing through the point $(x_0, y_0, z_0)$, traveling in the direction $(a, b, c)$ There are 3 ways to describe a line in 3D:
##### Vector Form
$$
\begin{bmatrix}x\\ y\\ z\end{bmatrix}=\begin{bmatrix}x_0\\ y_0\\ z_0\end{bmatrix}+t\begin{bmatrix}a\\ b\\ c\end{bmatrix}
$$
##### Parametric Form
Derived from vector form:
$$
x = x_0 + t\cdot a
$$
$$
y = y_0 + t \cdot b
$$
$$
z = z_0 + t \cdot c
$$
##### Symmetric Form
Derived from parametric form:
$$
\frac{x-x_0}{a}=\frac{y-y_0}{b}=\frac{z-z_0}{c}
$$
Assumes that $(a, b, c) \ne 0$.
##### Funny Form - Similar to 2D
Derived from Symmetric form
$$
z=\frac{x-x_0}{a}\cdot c+z_0=\frac{y-y_0}{b}\cdot c+z_0
$$
Assumes that $(a, b, c) \ne 0$.







