---
title: "Inertia - Mass Moment"
draft: false
---
tags: [[dynamics]], [[rigid body]], [[kinetics]]     <br>08-09-2025

---
# Mass Moment of Inertia

### Interpretation

The *inertia* of an object can be seen as that objects's resistance to changes in motion. Think of trying to make an object start to move, or trying to stop an objects movement. The bigger any object is, the bigger it's inertia will be. Marbles can be stopped almost immediately by anyone, but good luck trying to stop an oil tanker dead in it's tracks. It is important to realize that the inertia of an object is an *inherent* property of that object, and can thus only depend on properties such as the object's volume or mass.<br>The mass *[moment](Moment)* of inertia specifically concerns **rotational inertia**.


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
Because of the way we derived the moment[^moment1], **this equation holds only for pure rotations** about the central axis, or the [ICR](Modeling%20Rigid%20Body%20Motion#Instant%20Center%20of%20Rotation). $r$ denotes the radius of rotation, or the distance from that axis. <>To compute the inertia for certain shapes we can rewrite this equation by using the fact that mass is a function of the density  and the volume $V$. Enclosed in $V$ is the shape of an object. The equation for the volume of a cone for example is $V = \frac{\pi r^2 h}{3}$.
$$
I = \int r^2 d(\rho V)
$$
For constant volumes we can of course bring the $\rho$ outside of the integral, writing
$$
I = \rho \int r^2 dV
$$
#### Transfer of Axes
If the inertia is hard to find around the [ICR](Modeling%20Rigid%20Body%20Motion#Instant%20Center%20of%20Rotation), we may find the inertia $\bar{I}$ around any other axis and compensate for this choice after, to find the real inertia $I$. This allows us to choose any axis that simplifies the calculations to compute $\bar{I}$.
$$
I = \bar{I} + md^2
$$
Here, $d$ denotes the distance from our choice of axis for $\bar{I}$ to the [ICR](Modeling%20Rigid%20Body%20Motion#Instant%20Center%20of%20Rotation). This distance has to be perpendicular to the direction of our rotation vector. To illustrate, see the image below, where 
the transfer is made from axis $C$ to $G$. It can be seen that point $O$ gives an equivalent (inertial) moment as it lies on the same axis. The distance $d$, then, is taken from point $C$ to point $O$, perpendicular to the axis of rotation, but distance *parallel* to the axis of rotation is disregarded. This behavior results from the fact that the moment is defined as a cross product, any distance that isn't parallel to the moment axis doesn't contribute to the size of the vector.<br><br>![[transferofaxesmomentofinertia_80.png|450]]<br>source: *Engineering Mechanics Dynamics*, p629, 8th ed.

### Inventory
> [!abstract] Inventory of the Formulas
> $$
> I = \int r^2 dm = \int r^2 d(\rho V)
> $$

---
__[Home](WikiQuedia/Mechanical%20Engineering/3%20-%20Tags/Example.md)__

---
_Status:_ #bud

---
# Based On:
1. J. L. Meriam, L. G. Kraige, J. N. Bolton, *Engineering Mechanics Dynamics*, 8th ed, US.


[^moment1]: Remember that a [moment](Moment) is "_a [force](Force) over a distance_", thus $\vec{\textbf{M}} = \vec{\textbf{r}} \times \vec{\textbf{F}}$. As the inertia is a result of a *resulting force*, we can substitute $m \cdot \vec{\textbf{a}}$ for $\vec{\textbf{F}}$, yielding <br>$$\vec{\textbf{M}} = \vec{\textbf{r}} \times m \cdot \vec{\textbf{a}}$$<br>We can once again substitute for $\vec{\textbf{a}}$, because we want to have this equation in terms of a rotation, thus we use<br>$$\vec{\textbf{a}} = \vec{\pmb{\omega}} \times \vec{\textbf{v}} + \vec{\pmb{\alpha}} \times \vec{\textbf{r}}$$<br>Because we are assuming a pure rotation for this inertia, only the [tangential term](Motion%20in%20Normal-Tangent%20Coordinates#Vector%20Form%20for%20Acceleration) ($\vec{\textbf{a}}_t$) remains, thus<br>$$\vec{\textbf{a}} = \vec{\textbf{a}}_t = \vec{\pmb{\alpha}} \times \vec{\textbf{r}}$$<br>Substituting this into the equation for the moment $\vec{\textbf{M}}$, we get <br>$$\vec{\textbf{M}} = \vec{\textbf{r}} \times m \cdot \left( \vec{\pmb{\alpha}} \times \vec{\textbf{r}} \right)$$<br>In scalar form we get<br>$$M = \alpha \cdot r^2m$$<br>We can thus define a moment as $M = \alpha \cdot r^2m$.<br>For a single particle with a infinitesimal weight of $dm$, we get $M = \alpha \cdot r^2 dm$. 






