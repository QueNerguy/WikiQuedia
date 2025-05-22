### Jacobian Matrix
22-05-2025
#### Referencing:
[Wikipedia - Jacobian matrix and determinant](https://en.wikipedia.org/wiki/Jacobian_matrix_and_determinant)
[Khan Academy -  The Jacobian Determinant](https://www.youtube.com/watch?v=p46QWyHQE6M)

#### Synopsis:
The Jacobian matrix is a matrix that consists of partial derivatives of a (set of) function(s). <br>For functions $f_1, f_2, f_3$ that are all functions of $x_1, x_2, x_3$ the Jacobian matrix looks as follows:
$$
\begin{bmatrix}\frac{\partial f_1}{\partial x_1} & \frac{\partial f_1}{\partial x_2} & \frac{\partial f_1}{\partial x_3}\\ \frac{\partial f_2}{\partial x_1} & \frac{\partial f_2}{\partial x_2} & \frac{\partial f_2}{\partial x_3}\\ \frac{\partial f_3}{\partial x_1} & \frac{\partial f_3}{\partial x_2} & \frac{\partial f_3}{\partial x_3}\end{bmatrix} = \left[ \frac{\partial(f_1, f_2, f_3)}{\partial(x_1, x_2, x_3)} \right]
$$
This matrix doesn't have to be a square, but if it is, it's determinant%%==LINKJE==%% is called the _Jacobian determinant_, or simply _the Jacobian_. <br>This determinant has the property of giving the change in size of an area close to the point where it is defined. For example the following system:
1. $x = 2u$
2. $y = 3v$

The Jacobian of this system would be:
$$
\begin{vmatrix} D_u[2u] & D_v[2u] \\ D_u [3v] & D_v [3v] \end{vmatrix} = \begin{vmatrix} 2 & 0 \\ 0 & 3 \end{vmatrix} = 2 \cdot 3 - 0 \cdot 0 = 6
$$
Thus an area in the new $(u, v)$ space becomes __6 times larger__ when going back to the $(x, y)$ space, thus we need to scale the area in the new space by 6 to get the original value for the area. This scaling is similar to a density value. <br>The Jacobian determinant tells you how much a small area element $dudv$ in the new coordinate system becomes stretched or shrunk when mapped back to $dxdy$ in the original system.
1. The variables in the __numerator__ are the old coordinates.
2. The variables in the __denominator__ are the new coordinates.

The reason this happens, is that when examining a very small area of the function, which is what a [derivative](Differentiation) does, a transformation of a square would create a parallellogram, whose area can be found using the determinant, thus creating the Jacobian determinant. <br><br>This property applies for __nonlinear__ equations as well, making the determinant useful in [multivariable calculus](!%20Calculus%20II%20Learning%20Overview), the _Jacobian determinant_ is used fundamentally for [changing variable](Changing%20Variables%20for%20Integration) in [multiple integrals](Multiple%20Integration)[^paraphrase], for example.



#missingLink


[^paraphrase]: Paraphrasing from [Wikipedia - Jacobian matrix and determinant](https://en.wikipedia.org/wiki/Jacobian_matrix_and_determinant#).