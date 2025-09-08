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
Using the [substitution method](Integration#Substitution) for $x^2 + 1 = u$, we integrate $3\int u^{\frac{1}{2}} du$ instead of $\int6x \cdot (x^2 + 1)^\frac{1}{2} dx$. This yields
$$
\int6x \cdot (x^2 + 1)^\frac{1}{2} dx = 2(x^2 + 1)^{\frac{3}{2}} + C
$$
Thus for our equation for $y$ we can substitute to obtain
$$
y = \frac{2(x^2 + 1)^{\frac{3}{2}} + C}{(x^2 + 1)^\frac{3}{2}} = 2\frac{(x^2 + 1)^{\frac{3}{2}}}{(x^2 + 1)^\frac{3}{2}} + \frac{C}{(x^2 + 1)^\frac{3}{2}}
$$
$$
y = 2 + C(x^2 + 1)^{- \frac{3}{2}}
$$


---

This example can be found in _Differential Equations and Boundary Value Problems_, p48-49, 5th ed, US. It is solved in a slightly different order, **not starting** with $y = \frac{\int \rho b dx}{\rho}$.