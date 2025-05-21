___Task:___ Compute $\int \frac{1}{2x+1} dx$. <br><br>___Solution:___
###### Computing an Appropriate Substitution
To evaluate such a function, notice that a function like $\frac{1}{u}$ in the place of $\frac{1}{2x + 1}$ would be solveable, as long as calculating $du$ from this wouldn't give an annoying extra term. <br>To use $\frac{1}{u}$, we substitute $2x + 1$ with $u$.
$$
u = 2x + 1
$$
To complete the integral we need to find $du$ by computing the _total derivative_.
$$
D[u] = D[2x + 1]
$$
$$
\Rightarrow du = 2dx + 0 = 2dx
$$
$$
dx = \frac{1}{2} dy
$$
###### Evaluating the Integral
We have now found a substitution for the whole function and $du$, which means we can put them into the integral and obtain a solution from here.
$$
\int \frac{1}{2x+1} dx = \int \frac{1}{2x+1} \cdot \frac{1}{2}du = \int \frac{1}{u} \cdot \frac{1}{2}du
$$
Remember we can isolate constant values from the integral. This is useful for rewriting the expression to be like the [rules of thumb](Rules%20of%20Thumb%20Integration).
$$
\frac{1}{2} \cdot \int \frac{1}{u} du
$$
Realize that $\int \frac{1}{u} du$ is in the [rules of thumb](Rules%20of%20Thumb%20Integration), and that it equates to $\ln |u| \cdot \frac{1}{u'}$.
$$
\frac{1}{2} \cdot \int \frac{1}{u} du = \frac{1}{2} \cdot \left[ \ln|u| \cdot \frac{1}{u'} \right] + c_1 = \frac{\ln|u|}{2u'} + c_1
$$
From here we can back-substitute for $u$, with $u = 2x + 1$.
$$
\frac{\ln|2x + 1|}{2u'} + c_1
$$
To substitute $u'$, we want to find the [derivative](Differentiation) of $u$ with respect to the variable for which we substituted, in this case $x$.
$$
u' = D_x [u] = D_x [2x + 1] = 2
$$
Substituting this into our previous expression, we get:
$$
\frac{\ln|2x + 1|}{2 \cdot 2} + c_1 = \frac{\ln|2x + 1|}{4} + c_1 = \frac{1}{4} \ln|2x + 1| + c_1
$$
Thus our final solution is:
$$
\frac{1}{4} \ln|2x + 1| + c_1
$$

