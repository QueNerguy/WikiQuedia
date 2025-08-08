___Task:___ Compute the derivative of $f(x) = \ln(\cos(x^2))$. <br><br>___Solution:___
###### Finding an Appropriate Substitution
Notice that we know the derivative of $\ln(u)$ from the [rules of thumb](Rules%20of%20Thumb%20Differentiation). We thus want to substitute $\cos(x^2)$ with $u$ to use the rule of thumb here.
$$
u = \cos(x^2)
$$
$$
D_x [f(x)] = D_x [\ln(\cos(x^2))] \Rightarrow D_u [f(u)] = D_u [\ln(u)]
$$
$$
D_u [\ln(u)] = \frac{1}{u} \cdot u'
$$
Notice that $u'$ appeared in the expression. To evaluate this derivative, we need to find $u'$.
$$
u' = D_x [\cos(x^2)]
$$
We can't evaluate this derivative directly, but we can evaluate $D_v [\cos(v)]$, as seen in the [rules of thumb](Rules%20of%20Thumb%20Differentiation). Thus we substitute $x^2$ with $v$.
$$
v = x^2
$$
$$
D_v [\cos(v)] = - \sin(v) \cdot v'
$$
Again, we need to evaluate $v'$.
$$
v' = D_x [v] = D_x [x^2] = 2x \cdot x'
$$
As $x$ is our original direction variable, and not a function, $x'$ evaluates to 1.
$$
x' = 1 \rightarrow 2x \cdot x' = 2x
$$
$$
v' = 2x
$$
We can plug this result back into the previous derivative of $\cos(v)$, to obtain
$$
D_v [\cos(v)] = - \sin(v) \cdot 2x
$$
This was our expression for $u'$, meaning we can substitute all this for $u'$, to obtain
$$
u' = - \sin(v) \cdot 2x
$$
From here we can evaluate our original function.
$$
D_u [f(u)] = D_u [\ln(u)] = \frac{1}{u} \cdot u' = \frac{1}{u} \cdot - \sin(v) \cdot 2x
$$
To write this in terms of $x$, back-substitute both $u$ and $v$.
$$
u = \cos(x^2), v = x^2
$$
$$
D_x [f(x)] = \frac{1}{\cos(x^2)} \cdot - \sin(x^2) \cdot 2x = - 2x 
\frac{\sin(x^2)}{\cos(x^2)} = -2x \tan(x^2)
$$
Thus our final solution is
$$
D_x [f(x)] = -2x \tan(x^2)
$$

> [!tip] Tip
> This result is checkable with [the derivative calculator](https://www.derivative-calculator.net/)
