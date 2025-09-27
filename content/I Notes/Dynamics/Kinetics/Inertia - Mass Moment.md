---
title: "Inertia - Mass Moment"
draft: false
---
tags: [[dynamics]], [[rigid body]], [[kinetics]], [[sums]]     <br>08-09-2025

---
# Mass Moment of Inertia

### Interpretation

The *inertia* of an object can be seen as that objects's resistance to changes in motion. Think of trying to make an object start to move, or trying to stop an objects movement. The bigger any object is, the bigger it's inertia will be. Marbles can be stopped almost immediately by anyone, but good luck trying to stop an oil tanker dead in it's tracks. It is important to realize that the inertia of an object is an *inherent* property of that object, and can thus only depend on properties such as the object's volume or mass. <br>Inertia as a property measures **the distribution of mass around the axis of rotation**. As mass moves further away from the axis of rotation it becomes harder to stop the rotation. This can also make sense if we realize that a mass that's further away from the center requires a bigger moment to stop[^khan].<br>The mass *[moment](Moment)* of inertia specifically concerns *rotational inertia*.


### Mathematical Formulation
The bigger the rotational inertia of an object, the greater the [moment](Moment) required to stop it is. We can thus use the moment to define the property of inertia.

A moment acting on a [rigid body](Modeling%20Rigid%20Body%20Motion) can be found by finding the moment acting on a single particle, with a tiny mass $dm$, on the body. If we add the moments on all the particles up we find the moment acting on the complete body made up of all those points.
$$
M_{\text{Body}} =\sum M_{\text{Particle}}
$$
To find this sum for every particle we [integrate](Integration) the moment for every particle with mass $dm$. In essence we are summing every mass $dm$ until we they equal the whole mass $m$. To do this we write the equation for our moment as $M = \alpha \cdot r^2 dm$[^moment1]. Keep in mind that the [angular acceleration](Angular%20Acceleration) is constant, and that we may thus bring it outside of the integral.
$$
M_{\text{Body}} = \sum M_{\text{Particle}} = \alpha \int r^2 dm
$$
As the inertia is an *inherent* property of an object, it can't depend on an angular acceleration $\alpha$. Using the above equation we find that a nice way to express the inertia of an object is as the integral itself. Thus the inertia $I$ is defined mathematically as
$$
I = \int r^2 dm
$$
Because of the way we derived the moment[^moment1], **this equation holds only for pure rotations** about the central axis, or the [ICR](Modeling%20Rigid%20Body%20Motion#Instant%20Center%20of%20Rotation). $r$ denotes the radius of rotation, or the distance from that axis. <br>To compute the inertia for certain shapes we can rewrite this equation by using the fact that mass is a function of the density  and the volume $V$. Enclosed in $V$ is the shape of an object. The equation for the volume of a cone for example is $V = \frac{\pi r^2 h}{3}$.
$$
I = \int r^2 d(\rho V)
$$
For constant volumes we can of course bring the $\rho$ outside of the integral, writing
$$
I = \rho \int r^2 dV
$$
To finish the definition, it is important to know the axis or direction around which the rotation occurs. This axis of rotation is denoted with a double subscript under the inertia, so for a rotation around the $z$-axis we would write $I_{zz}$. <br>Furthermore, we use the radius $r$ to denote the shortest path from the axis, in this case $z$, to the particle. It can be seen from the image below that this distance $r_z$ depends only on the $x$ and $y$ coordinates. This is a result of the use of a cross-product for the definition *moment*, and subsequently for the moment of inertia. The size of the result of the cross-product doesn't depend on the $z$-coordinate if we take the moment around $z$. We can thus use Pythagoras' theorem and say $r_{z}^2 = x^2 + y^2$. The resulting equation **for a rotation around $z$** is
$$
I_{zz} = \int r_z^2 dm = \int \left( x^2 + y^2 \right) dm
$$
<br>![[momentofinertiafindingradius_80.png|450]]<br>source: *Engineering Mechanics Dynamics*, p630, 8th ed.
#### Transfer of Axes
If the inertia is hard to find around the [ICR](Modeling%20Rigid%20Body%20Motion#Instant%20Center%20of%20Rotation), we may find the inertia $\bar{I}$ around any other axis and compensate for this choice after, to find the real inertia $I$. This allows us to choose any axis that simplifies the calculations to compute $\bar{I}$.
$$
I = \bar{I} + md^2
$$
Here, $d$ denotes the distance from our choice of axis for $\bar{I}$ to the [actual axis of rotation](Modeling%20Rigid%20Body%20Motion#Instant%20Center%20of%20Rotation). Similar to finding $r$, demonstrated above, $d$ doesn't take distance along the axis of rotation into account. It just finds the shortest distance from axis $a$ to axis $b$.<> To illustrate, see the image below, where $\bar{I}$ was found around axis $C$, but the [ICR](Modeling%20Rigid%20Body%20Motion#Instant%20Center%20of%20Rotation) is at $G$. The point on the axis of $G$ that is closest to $C$, however, is $O$, and as such $d$ is found between $C$ and $O$, and not between $C$ and $G$. <br>This behavior is a result of the use of a cross-product for the definition of the moment.<br><br>![[transferofaxesmomentofinertia_80.png|450]]<br>source: *Engineering Mechanics Dynamics*, p629, 8th ed.
#### Composite Rotations
When multiple rotations occur at the same time, the inertia for this simultaneous rotation has to be used, *instead of* the rotation for a single axis. To find this inertia, instead of adding the distances up (e.g. $r_z^2 = x^2 + y^2$), we multiply to take into account both axes of rotation at the same time. <br>For a rotation around both the $x$- and $y$-axes we have $r_{xy}^2 = x \cdot y$.
$$
I_{xy} = \int r_{xy}^2 dm = \int xy dm
$$
Similarly, for a transfer of axes, $d^2$ is replaced with $d_x \cdot d_y$.
$$
I_{xy} = \bar{I}_{xy} + md_x d_y
$$

%%
also this is funny, source = page 647, 648
$$
\begin{bmatrix} I_{xx} & -I_{xy} & -I_{xz}\\ -I_{yx} & I_{yy} & -I_{yz}\\ -I_{zx} & -I_{zy} & I_{zz} \end{bmatrix}
$$
notice that every non-principle axis has a negative sign
and for rotation only in principle axes we would have
$$
\begin{bmatrix} I_{xx} & 0 & 0\\ 0 & I_{yy} & 0 \\ 0 & 0 & I_{zz} \end{bmatrix}
$$
*It CaN be ShoWN thAT* for the determinant we have
$$
\begin{vmatrix} I_{xx} - I_A & -I_{xy} & -I_{xz}\\ -I_{yx} & I_{yy} - I_A & -I_{yz}\\ -I_{zx} & -I_{zy} & I_{zz} - I_A \end{vmatrix} = 0
$$
where $I_A$ is around any axis $A$ or something. This equation can be solved for using also
$$
l^2 + m^2 + n^2 = 1
$$
where $l$, $m$ and $n$ give the principle axes for our second coordinate system around our axis $A$.
idk thought this was cool, not sure how to use it and what it exactly completely in its entirety etc means.
%%

>[!warning]
> I'm not quite sure whether or not this part is included in the dynamics course. The implementation into the book is vague and this info is NOT included in the slides, so I'm *personally* assuming that this knowledge is **not** required and for funsies only.


### Inventory
> [!abstract] Inventory of the Formulas
> - For **any inertia**
> $$
> I = \int r^2 dm = \int r^2 d(\rho V)
> $$
> - For **transfer of axes**
> $$
> I = \bar{I} + md^2
> $$
> - For **inertia around some $z$-axis**
> $$
> I_{zz} = \int r_z^2 dm = \int \left( x^2 + y^2 \right) dm
> $$
> - For **inertia around any $x$- and $y$-axes**
> $$
> I_{xy} = \int r_{xy}^2 dm = \int xy dm
> $$
> $$
> I_{xy} = \bar{I}_{xy} + md_x d_y
> $$



### Pre-computed Solutions

| Visualization[^c]                            | Description                                                                                                                                                  | Expression                                                              |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| ![[MassInertiaSolidCylinder_80.png]]         | Solid **cylinder** with a **rotation** around the center axis.                                                                                               | $$I = \frac{1}{2} mr^2$$                                                |
| ![[MassInertiaHollowCylinder_80.png]]        | Hollow **cylinder** with a **rotation** around the center axis.<br>**Note** that the thickness of the shell is assumed to be insignificant.                  | $$I = mr^2$$                                                            |
| ![[MassInertiaSolidSphere_80.png]]           | Solid sphere with a **rotation** around any arbitrary axis that passes through it's center.                                                                  | $$I = \frac{2}{5} mr^2$$                                                |
| ![[MassInertiaSolidRing_80.png]]             | Solid **ring** with rounded edges and a **rotation** around the center axis.<br>**Note** that this view is cut halfway, the ring itself is a full circle.    | $$I = \frac{1}{4}m \left( D^2 + \frac{3}{4}d^2 \right)$$                |
| ![[MassInertiaSolidCylinderSideways_80.png]] | Solid **cylinder** with a **rotation** around an axis, perpendicular to center axis and halfway along the cylinder's height.                                 | $$I = \frac{1}{4}mr^2 + \frac{1}{12}mL^2$$                              |
| ![[MassInertiaRod_80.png]]                   | Long **rod** with a **rotation** around any axis at the end of the rod.<br>**Note** that the thickness of the rod itself is assumed to be insignificant.<br> | $$I = \frac{1}{3}mL^2 \sin^2(\alpha)$$                                  |
| ![[MassInertiaSolidCone_80.png]]             | Solid cone with a **rotation** around the center axis.                                                                                                       | $$I = \frac{3}{10} mr^2$$                                               |
| ![[MassInertiaSolidBox_80.png]]              | Solid **box** with a **rotation** around axes perpendicular to one of it's faces                                                                             | $$I_z = \frac{1}{12}m(a^2 + b^2)$$<br>$$I_x = \frac{1}{3}m(a^2 + b^2)$$ |



---
__[Home](!%20Dynamics%20Learning%20Overview)__

---
_Status:_ #ripe

---
# Based On:
1. J. L. Meriam, L. G. Kraige, J. N. Bolton, *Engineering Mechanics Dynamics*, 8th ed, US.
2. Khan Academy, *Rotational Inertia*, US, [link](https://www.khanacademy.org/science/in-in-class11th-physics/in-in-system-of-particles-and-rotational-motion/in-in-rotational-inertia-and-angular-second-law/a/rotational-inertia).


[^moment1]: Remember that a [moment](Moment) is "_a [force](Force) over a distance_", thus $\vec{\textbf{M}} = \vec{\textbf{r}} \times \vec{\textbf{F}}$. As the inertia is a result of a *resulting force*, we can substitute $m \cdot \vec{\textbf{a}}$ for $\vec{\textbf{F}}$, yielding <br>$$\vec{\textbf{M}} = \vec{\textbf{r}} \times m \cdot \vec{\textbf{a}}$$<br>We can once again substitute for $\vec{\textbf{a}}$, because we want to have this equation in terms of a rotation, thus we use<br>$$\vec{\textbf{a}} = \vec{\pmb{\omega}} \times \vec{\textbf{v}} + \vec{\pmb{\alpha}} \times \vec{\textbf{r}}$$A force that causes a rotation moves an object along the arc of the rotation. As such the (component of the) force that causes this rotation points **tangent to the path** of the rotation. As a result only the [tangential term of the acceleration](Motion%20in%20Normal-Tangent%20Coordinates#Vector%20Form%20for%20Acceleration) ($\vec{\textbf{a}}_t$) is relevant, thus$$\vec{\textbf{a}} = \vec{\textbf{a}}_t = \vec{\pmb{\alpha}} \times \vec{\textbf{r}}$$<br>Substituting this into the equation for the moment $\vec{\textbf{M}}$, we get <br>$$\vec{\textbf{M}} = \vec{\textbf{r}} \times m \cdot \left( \vec{\pmb{\alpha}} \times \vec{\textbf{r}} \right)$$<br>In scalar form we get<br>$$M = \alpha \cdot r^2m$$<br>We can thus define a moment as $M = \alpha \cdot r^2m$.<br>For a single particle with a infinitesimal weight of $dm$, we get $M = \alpha \cdot r^2 dm$. 
[^khan]: Khan Academy, *Rotational Inertia*, US, [link](https://www.khanacademy.org/science/in-in-class11th-physics/in-in-system-of-particles-and-rotational-motion/in-in-rotational-inertia-and-angular-second-law/a/rotational-inertia).

[^c]: A. van Beek, _Formuleboekje_, _Massatraagheid_, 2023, NL, [link](https://www.werktuigbouw.nl/book/default_wb.htm).




