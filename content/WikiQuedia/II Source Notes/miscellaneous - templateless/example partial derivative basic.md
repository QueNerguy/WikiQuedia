___Task___: Calculate the partial derivative of $f(x, y) = x^2 \sin (y)$ in $x$ and $y$ direction. <br><br>___Solution___: 
###### Partial With Respect to $x$ 
First compute the partial derivative in $x$ direction.
$$
D_x [f(x,y)] = D_x [x^2 \sin (y)]
$$
We take the $y$ direction to be constant, thus $y = c_1$, and then $\sin (c_1) = c_2$.
$$
D_x[x^2 \cdot c_2] = c_2 \cdot D_x [x^2] = c_2 \cdot 2x
$$
After resubstituting $\sin (y)$ for $c_2$ the derivative with respect to $x$ becomes:
$$
D_x [f(x, y)]= 2x \sin (y)
$$
###### Partial With Respect to $y$
Second compute the partial derivative in $y$ direction.
$$
D_y [f(x,y)] = D_y [x^2 \sin (y)]
$$
We take the $x$ direction to be constant, thus $x = c_3$, and then $x^2 = c_4$.
$$
D_y [c_4 \cdot \sin (y)] = c_4 \cdot D_y [\sin (y)] = c_4 \cdot \cos(y)
$$
After resubstituting $x^2$ for $c_4$ the derivative with respect to $y$ becomes:
$$
D_y [f(x, y)]= x^2 \cos (y)
$$


%%==can use same example for partial derivatives of functions, just add $y^{\prime}$ to the end and stuff==%%


