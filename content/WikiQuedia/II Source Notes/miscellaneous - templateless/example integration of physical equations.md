# Example Integration of Physical Equations
To give the above text see some context, see the following integration for the following formula for the [internal energy of an ideal gas](Internal%20Energy#Ideal%20Gas) 
$$
dU = mc_{\nu} dT
$$
$$
\int dU = \int mc_{\nu} dT
$$
Now that the integral has been constructed we can examine which physical quantities we keep constant and which ones are to be treated as functions. <br>In this - and almost every other - case we assume mass to be an independent variable, meaning we can bring it outside the integral. If we are dealing with a larger temperature range we can't assume the heat capacity%%LINKJE%%, $c_{\nu}$, to be constant. In that case our integral looks like
$$
\int dU = m \int c_{\nu} (T) dT
$$
From here we need to find an expression for $c_{\nu}$ in terms of the temperature $T$ in order to solve the integral in terms of $dT$. Alternatively, we can find an expression for $T$ in terms of $c_{\nu}$ plus potential *independent* variables and take the total differential to substitute into the integral, and solve in terms of $dc_{\nu}$. It is easiest, however, to find an expression for $c_{\nu}$ from the [thermo tables](ThermoTables.pdf), table _A-2_. For example, if we were working with *Nitrogen*, we would have
$$
\bar{c}_p = a +bT + cT^2 + dT^3
$$
$$
\bar{c}_p = 28.90 - (0.1571 \times 10^{-2}) \cdot T - (0.8081 \times 10^{-5}) \cdot T^2 - (2.873 \times 10^{-9}) \cdot T^3
$$
We now have an equation of the *molar* specific heat capacity for constant pressure, to convert it to *mass* specific heat capacity for constant pressure we have the following formulas.
$$
c_p = \frac{\bar{c}_p}{M}
$$
$$
c_p = c_{\nu} + R \Rightarrow c_{\nu} = c_p - R
$$
Where $M$ is the molar mass of our fluid. From table *A-1* we can find it's value to be $28.013 \times 10^{-3} \text{ [kg/mol]}$, and we can find the value of the gas constant%%LINKJE?%% $R$ to be $0.2968 \times 10^{3} \text{ [J/kg} \cdot \text{K]}$. With this our equation for $c_{\nu}$ becomes
$$
c_{\nu} = \frac{28.90 - (0.1571 \times 10^{-2}) \cdot T - (0.8081 \times 10^{-5}) \cdot T^2 - (2.873 \times 10^{-9}) \cdot T^3}{28.013 \times 10^{-3}} - 0.2968 \times 10^{3}
$$
As the only variable quantity in this equation is $T$, we can substitute this into the integral, to find
$$
\int dU = m \int \left( \frac{28.90 - (0.1571 \times 10^{-2}) \cdot T - (0.8081 \times 10^{-5}) \cdot T^2 - (2.873 \times 10^{-9}) \cdot T^3}{28.013 \times 10^{-3}} - 0.2968 \times 10^{3} \right) \cdot dT
$$
Solving this gives
$$
\int dU = m \cdot \left[ (734.864) \cdot T - (2.80406 \times 10^{-2}) \cdot T^2 - (9.61577 \times 10^{-5}) \cdot T^3 - (2.56399 \times 10^{-8}) \cdot T^4 \right]
$$
So our final solution is
$$
\Delta U = m \cdot \left[ (734.864) \cdot T - (2.80406 \times 10^{-2}) \cdot T^2 - (9.61577 \times 10^{-5}) \cdot T^3 - (2.56399 \times 10^{-8}) \cdot T^4 \right]
$$
We can measure the mass and temperature, substitute them into this formula and obtain a numeric solution. <br>These lengthy integrals are uncommon. In this example it is usually preferred to take the specific heat capacity as the average of the specific heat capacities of the two states instead of solving this integral, this integral serves mostly as an illustration of the process of integrating. <br>It is also possible to solve these integrals using [wolfram alpha](https://www.wolframalpha.com/)[^solution].






[^solution]: See [here](https://www.wolframalpha.com/input?i2d=true&i=Integrate%5BDivide%5B28.90-0.1571*Power%5B10%2C-2%5D*T-0.8081*Power%5B10%2C-5%5D*Power%5BT%2C2%5D-2.873*Power%5B10%2C-9%5D*Power%5BT%2C3%5D%2C28.013*Power%5B10%2C-3%5D%5D-0.2968*Power%5B10%2C3%5D%2CT%5D) my input to solve the integral in this example (I'm lazy).
