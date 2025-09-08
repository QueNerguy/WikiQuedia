To finish the example, let us re-substitute our values for $a$ and $b$ and $\rho$.
$$
y = \frac{\int e^{\int \frac{3x}{(x^2 + 1)} dx} \frac{6x}{(x^2 + 1)} dx}{e^{\int \frac{3x}{(x^2 + 1)} dx}}
$$
Such an equation is hard to solve in one go. We start by finding a value for $\rho$.
$$
\rho = e^{\int \frac{3x}{(x^2 + 1)} dx} \qquad \rightarrow \qquad \int \frac{3x}{(x^2 + 1)} dx = \frac{3}{2} \ln(x^2 + 1)
$$
$$
\rho = e^{\frac{3}{2} \ln(x^2 + 1)} = (x^2 + 1)^\frac{3}{2}
$$
If we put this formulation for  $\rho$ back into our equation for $y$, we get
$$
y = \frac{\int \rho \frac{6x}{(x^2 + 1)}  dx}{\rho} = \frac{\int \frac{6x \cdot (x^2 + 1)^\frac{3}{2}}{(x^2 + 1)} dx}{(x^2 + 1)^\frac{3}{2}}
$$
In the enumerator of the whole product we can cancel out $(x^2 + 1)$.
$$
y = \frac{\int6x \cdot (x^2 + 1)^\frac{1}{2} dx}{(x^2 + 1)^\frac{3}{2}}
$$
Using the [substitution method](Integration#Substitution) for the integral $\int6x \cdot (x^2 + 1)^\frac{1}{2} dx$, we can replace $x^2 + 1$ with $u$. 
We also need to substitute for $dx$. To find an expression for $dx$ from $u$ we take the derivative of $u$ with respect to $x$, thus $\frac{du}{dx}$, and multiply both sides with the [differential](Differentiation#Geometrical%20Interpretation) $dx$, this gives us
$$
\frac{du}{dx} = \frac{d}{dx}[x^2 + 1] = 2x \qquad \rightarrow \qquad du = 2xdx 
$$
We can now divide by $2x$ to isolate $dx$.
$$
dx = \frac{du}{2x}
$$
Substituting for $dx$ and $x^2 + 1$, we get
$$
\int 6x \cdot (x^2 + 1)^\frac{1}{2} dx = \int 6x (u)^\frac{1}{2} \frac{du}{2x} = \int 3 u^{\frac{1}{2}} du = 3 \int u^{\frac{1}{2}} du
$$
Our resulting equation is
$$
3 \cdot \left(\frac{2}{3} u^{\frac{3}{2}}  + C \right) = 2u^{\frac{3}{2}}  + C
$$
Re-substituting $x^2 + 1$ for $u$, we get 
$$
2u^{\frac{3}{2}}  + C = 2(x^2 + 1)^{\frac{3}{2}} + C
$$


Thus for our equation for $y$ we can substitute this in place of the integral, to obtain
$$
y = \frac{2(x^2 + 1)^{\frac{3}{2}} + C}{(x^2 + 1)^\frac{3}{2}} = 2\frac{(x^2 + 1)^{\frac{3}{2}}}{(x^2 + 1)^\frac{3}{2}} + \frac{C}{(x^2 + 1)^\frac{3}{2}}
$$
$$
y = 2 + C(x^2 + 1)^{- \frac{3}{2}}
$$


---

This example can be found in _Differential Equations and Boundary Value Problems_, p48-49, 5th ed, US. It is solved in a slightly different order, **not starting** with $y = \frac{\int \rho b dx}{\rho}$.