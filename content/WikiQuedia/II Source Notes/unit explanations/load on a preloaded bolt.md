- $Q$ = The load the bolt takes.
- $Q_p$ = The preload on the bolt.
- $k_b$ = The [stiffness of the bolt](bolt%20stiffness).
- $k_m$ = The stiffness of the part. This is equivalent to the stiffness of for example a spring, and can be calculated with[^unit]:
$$
k_m = \frac{F}{\lambda}=\frac{G\cdot A_{\textrm{part}}}{l_{\textrm{total, part}}}=\frac{\left(\frac12\cdot\frac{E}{1+\nu}\right)\cdot A_{\textrm{part}}}{l_{\textrm{total, part}}}
$$
- $F$ = The external force.
- $\frac{k_{b}}{k_{b}+k_{m}}$ = The relative stiffness of the bolt. There is tables available of these values.






[^unit]:  $\lambda$ is the length difference of the part due to force $F$, $G$ is the [shear modulus](Shear%20Modulus%20of%20Elasticity), $A_{\textrm{part}}$ is the area of the part that the shear works on ( a slice of the part perpendicular to it's surface), $l_{\textrm{total, part}}$ is the total length of the part, $\nu$ is [poisson's ratio](https://en.wikipedia.org/wiki/Poisson%27s_ratio), $E$ is the [modulus of elasticity](modulus%20of%20elasticity).