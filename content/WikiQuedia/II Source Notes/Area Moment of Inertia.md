### Area Moment of Inertia
21-03-2025
#### Referencing:
[Wikipedia - Second area moment of inertia](https://en.wikipedia.org/wiki/Second_moment_of_area)

#### Synopsis:
The area moment of inertia, or second moment of area. This represents an object's resistance against bending/deformation, due to it's geometry, in the same way that mass inertia gives an object resistance against movement.<br>The further away the mass is from the axis of rotation, the harder the beam becomes to bend.
The area moment of inertia is direction dependent. If an object gets bent along the $x$-axis the area moment of inertia might be different than when it gets bent along the $y$-axis.
The general formula is:
$$
I_{x}=\iint_R y^2 \,dA
$$
$$
I_{y}=\iint_R x^2 \,dA
$$
- $\,dA$ can be either $\,dy\,dx$ or $\,dx\,dy$. This changes the order of integration, but not the resulting answer. $\,dA$ might also be definable in terms of either $x$ or $y$, in that case rewrite the formula $y^2$ in terms of that variable so you can integrate.

In case a body is not bending across it's center, or if there's a mass that's easier to calculate on it's own and add it's $I$ contribution later, the _parallel axis theorem_ is:
$$
I_{x^\prime}=I_x+Ad^2
$$
Here the $x^\prime$-axis is the original axis we're interested in, and $I_x$ is the second moment of inertia around the centroid of the smaller body we're analysing. $x$ is here a relative axis.

##### Polar Moment of Inertia
Lastly $I_x$ and $I_y$ can be added to get the _polar moment of inertia_ ($J_z$), used in case of torsion.
$$
J_z=I_x+I_y
$$


> [!abstract] Note
>$EI$ together represent the stiffness of an object. The higher $EI$ The more resistance it will be able to give against it's deformation. <br>[More on the modulus of elasticity](Modulus%20of%20Elasticity.md).



