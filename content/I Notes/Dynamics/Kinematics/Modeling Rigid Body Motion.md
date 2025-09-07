---
title: "Modeling Rigid Body Motion"
draft: false
---
tags:      <br>07-09-2025

---
# Modeling Rigid Body Motion
Calculations following the equations outlined below, as well as their derivations rely heavily on [calculus I](!%20Calculus%20I%20Learning%20Overview) and make heavy use of [first order differential equations](First%20Order%20Ordinary%20Differential%20Equations). This note can be seen as a continuation on the note _[[Modeling Particle Motion]]_.
## Rigid Body Motion
Rigid body motion is an expansion on the fundamentals of [particle motion](Modeling%20Particle%20Motion). Because there are multiple particles in a body however, we may see parts of the body translate at a different rate. If the bottom of the body moves slower than the top, or even in the opposite direction we perceive the rigid body as rotating. We thus see an [angular velocity](Angular%20Velocity) and an [angular acceleration](Angular%20Acceleration). It is important to note that I will be using $\vec{\textbf{r}}$ instead of $\vec{\textbf{s}}$  to denote distances. This is because $\bf{\vec{s}}$ is supposed to denote a *displacement*, and is therefore suited well to particle motion, while $\bf\vec{r}$ denotes any *distance*, but in particular a radii, making it more intuitive for use with rotations, the differentiating factor between rigid bodies and particles.
### Angular Velocity
For an object that is rotating at an angle $\theta$ we can construct the [angular velocity](Angular%20Velocity) much in the same way that we did for translation of *particles*. 
$$
\omega = \frac{d\theta}{dt} = \dot{\theta}
$$
We can reorder the equation to obtain the [directly integrable](First%20Order%20Ordinary%20Differential%20Equations#Separable%20Equations) form
$$
d\theta = \omega dt
$$
All angular velocities, and subsequently [angular accelerations](Angular%20Acceleration), are the **same for any point** on the body.<br><br>The angular velocity vector points perpendicular to the plane motion happens in, meaning that if motion happens in the $x, y$-plane (basis vectors $\hat{\textbf{i}}$ and $\hat{\textbf{j}}$), $\vec{\pmb{\omega}}$ points in the $z$ direction, with basis vector $\hat{\textbf{k}}$.<br>As stated above, a difference in speed of particles on the body causes a rotation of the whole body. To find the velocity $v$ from an angular velocity $\omega$ we find[^unit]
$$
v = \omega \cdot r
$$
$$
\vec{\textbf{v}} = \vec{\pmb{\omega}} \times \vec{\textbf{r}}
$$
Where $\vec{r}$ is the distance between our origin and the point whose velocity we solve for. 
The order of the cross-product is important. If we swap $\vec{\pmb{\omega}}$ and $\vec{\textbf{r}}$ around we get $\bf \vec{r} \times \vec{\pmb{\omega}} = -\vec{v}$.


##### Instant Center of Rotation
Every rotating object has a single axis around which is the rotation takes place. This is the axis at which the angular velocity acts. This axis is named the [instant center of rotation](Instant%20Centre%20of%20Rotation) (ICR), or the *instant center of zero velocity*. <br>As the name indicates, the ICR is the only point (not necessarily on the body) where the velocity is 0, the point only has an angular velocity. For non-slipping wheels, for example, the ICR would be at the contact point where no slip occurs, as no slip means no velocity.<br><br>Finding the ICR ($C$ in the figure below) is most easily done graphically first. Using geometry we can find the exact location afterward. To find it:
1. Draw two lines through the origins of the velocity vectors, perpendicular to the direction of the vector.
2. If necessary, draw a single line, connecting the tips of the velocity vectors.
3. Find the **intersection** between the lines, this is the ICR.

![[illustration_finding_ICR_80.png|650]]<br>source: *Engineering Mechanics Dynamics*, p352, 8th ed.<br><br>Finding the ICR requires solving for the velocity of **two** points on arbitrary locations on, or even off the body. The ICR might be obvious from the get go, like for non-slipping wheels as mentioned earlier.
### Angular Acceleration
For an object that is rotating at an angle $\theta$ we can construct the [angular acceleration](Angular%20Acceleration) much in the same way that we did for translation of *particles*. 
$$
\alpha = \frac{d\omega}{dt} = \dot{\omega} = \ddot{\theta}
$$
We can reorder the equation to obtain the [directly integrable](First%20Order%20Ordinary%20Differential%20Equations#Separable%20Equations) form
$$
d\omega = \alpha dt
$$
Using our equation for [angular velocity](Angular%20Velocity), $d\theta = \omega dt$, solving for $dt$ and substituting yields
$$
\alpha d\theta = \omega d\omega
$$
Notice the similarities to $ads = vdv$. <br>All angular velocities, and subsequently angular accelerations, are the **same for any point** on the body.<br><br>The angular acceleration vector points perpendicular to the plane motion happens in, meaning that if motion happens in the $x, y$-plane (basis vectors $\hat{\textbf{i}}$ and $\hat{\textbf{j}}$), $\vec{\pmb{\alpha}}$ points in the $z$ direction, with basis vector $\hat{\textbf{k}}$.<br>To find the acceleration $a$ from the angular acceleration $\alpha$ we take the [derivative](Differentiation) of the velocity, to find[^math2]
$$
\vec{\textbf{a}} = \vec{\pmb{\omega}} \times \vec{\textbf{v}} + \vec{\pmb{\alpha}} \times \vec{\textbf{r}}
$$
$$
\vec{\textbf{a}} = \dot{\vec{\pmb{\theta}}} \times \vec{\textbf{v}} + \ddot{\vec{\pmb{\theta}}} \times \vec{\textbf{r}}
$$
##### Instant Center of Zero Acceleration
[info paper](https://ccsenet.org/journal/index.php/mas/article/view/1278)%%NEEDS TEXT IF I WANT TO WRITE IT SOMEDAY%%
<br>Instant center of zero acceleration does exist but is currently out of scope for this wiki/course/goober.



### Relative Motion 
Continuing [relative motion for particles](Modeling%20Particle%20Motion#Relative%20Motion), we generalize the expressions to also include possible rotation. Because of a difference in velocity it is possible for a point $A$ to rotate relative to point $B$. In other words: when using $B$ as our reference frame and considering it locked in place, we perceive $A$ to be rotating. <br><br>![[dynamics_relative_rotation_AtoB_80.png|650]]<br>source: *Engineering Mechanics Dynamics*, p339, 8th ed.

#### Relative Velocity
For the *position vector* we can reuse the formulation we found for [relative motion for particles](Modeling%20Particle%20Motion#Relative%20Motion), namely $\vec{\textbf{r}}_A = \vec{\textbf{r}}_B + \vec{\textbf{r}}_{A/B}$. Using our [previous equation](Modeling%20Particle%20Motion#Relative%20Motion) $\vec{\textbf{v}} = \vec{\pmb{\omega}} \times \vec{\textbf{r}}$ in place for the relative velocity equation $\vec{\textbf{v}}_A = \vec{\textbf{v}}_B + \vec{\textbf{v}}_{A/B}$, we get
$$
\vec{\textbf{v}}_A = \vec{\textbf{v}}_B + \vec{\pmb{\omega}} \times \vec{\textbf{r}}_{A/B}
$$
We can, if need be, substitute any velocity term in this equation for $\vec{\pmb{\omega}} \times \vec{\textbf{r}}$.


#### Relative Acceleration
Because for rotations we are dealing with a *curvilinear* path, we will be highlighting the [normal-tangent](Motion%20in%20Normal-Tangent%20Coordinates) coordinate system. Because we are dealing with vector math as well, these equations generalize to every coordinate system. <br>We rewrite the equation  for relative acceleration acquired above to accommodate the $n$-$t$ coordinate system.
$$
\vec{\textbf{a}}_A = \vec{\textbf{a}}_B + \left( \vec{\textbf{a}}_{A/B} \right)_n + \left( \vec{\textbf{a}}_{A/B} \right)_t
$$
We can now substitute the equations for the acceleration in an $n$-$t$ coordinate system to obtain
$$
\vec{\textbf{a}}_A = \vec{\textbf{a}}_B + \omega ^2 r_{A/B\text{ }} \hat{\textbf{e}}_n + \alpha r_{A/B\text{ }} \hat{\textbf{e}}_t
$$
Alternatively, we could use our equation for acceleration, $\bf\vec{a} = \vec{\pmb{\omega}} \times \vec{v} + \vec{\pmb{\alpha}} \times \vec{r}$, in place of $\vec{\textbf{a}}_{A/B}$. This would yield
$$
\vec{\textbf{a}}_A = \vec{\textbf{a}}_B + \vec{\pmb{\omega}} \times \vec{\textbf{v}}_{A/B} + \vec{\pmb{\alpha}} \times \vec{\textbf{r}}_{A/B}
$$
We can eliminate $\vec{v}$ from the equation by realizing $\vec{v} = \vec{\omega} \times \vec{r}$, and write the **eventual equation**
$$
\vec{\textbf{a}}_A = \vec{\textbf{a}}_B + \vec{\pmb{\omega}} \times \left( \vec{\pmb{\omega}} \times \vec{\textbf{r}}_{A/B} \right) + \vec{\pmb{\alpha}} \times \vec{\textbf{r}}_{A/B}
$$
We can conclude from this that **for an $n$-$t$ coordinate system** we have
$$
\left( \vec{\textbf{a}}_{A/B} \right)_n = \vec{\pmb{\omega}} \times \left( \vec{\pmb{\omega}} \times \vec{\textbf{r}}_{A/B} \right) \qquad \text{and} \qquad \left( \vec{\textbf{a}}_{A/B} \right)_t = \vec{\pmb{\alpha}} \times \vec{\textbf{r}}_{A/B}
$$
$$

$$
#### Relative Coordinate Systems
Some situations benefit from introducing a relative coordinate system. In a relative coordinate system we study three points:
1. Origin of non-rotating coordinate system ($X, Y$).
2. Point $B$, where the rotating coordinate system ($x, y$) attaches.
3. Point $A$, the point we wish to understand.

We know that translating reference frames don't complicate the calculations as long as we use a single reference frame to compare both points. In the case of a rotation we can reuse the same argument, but introduce terms caused by the rotation.<br><br>![[position_relative_coordinate_system_dynamics_80.png|450]]<br>source: *Engineering Mechanics Dynamics*, p374, 8th ed.
##### Relative Coordinate Velocity
Because our equation for the position vector isn't affected by a rotating reference frame at all, it stays the same as it was for [particle relative motion](Modeling%20Particle%20Motion#Relative%20Motion), namely $\vec{\textbf{r}}_A = \vec{\textbf{r}}_B + \vec{\textbf{r}}_{A/B}$, also seen above, or, using our coordinate system's origin attached to point $B$, we can rewrite to
$$
\vec{\textbf{r}}_A = \vec{\textbf{r}}_B + \left( x\hat{\textbf{i}} + y\hat{\textbf{j}} \right)
$$
Here $x$ and $y$ are the axes that attach at $B$. The $x$ and $y$ coordinates give the location of $A$ from the origin at $B$, making this term equivalent to $\vec{\textbf{r}}_{A/B}$. Differentiation of $\vec{\textbf{r}}_A$ gives
$$
\frac{d}{dt} \left[ \vec{\textbf{r}}_A \right] = \vec{\textbf{v}}_A = \vec{\textbf{v}}_B + \left( \dot{x} \hat{\textbf{i}} + \dot{y} \hat{\textbf{j}} \right) + \left( x \dot{\hat{\textbf{i}}} + y \dot{\hat{\textbf{j}}} \right)
$$
We can see that $\dot{x}$ and $\dot{y}$ give the velocity of $A$ as seen from $B$, or $\vec{\textbf{v}}_{A/B}$, like before. To obtain a working equation we just need to find an expression for $\dot{\hat{\textbf{i}}}$ and $\dot{\hat{\textbf{j}}}$. 
Following [this](derivation%20velocity%20for%20relative%20coordinate%20systems%20-%20proof%201) reasoning it is seen that 
$$
\dot{\hat{\textbf{i}}} = \vec{\pmb{\omega}} \times \hat{\textbf{i}} \qquad \text{and} \qquad \dot{\hat{\textbf{j}}} = \vec{\pmb{\omega}} \times \hat{\textbf{j}}
$$
Realizing that $x \dot{\hat{\textbf{i}}} = \vec{\pmb{\omega}} \times x \hat{\textbf{i}}$, and $y \dot{\hat{\textbf{j}}} = \vec{\pmb{\omega}} \times y \hat{\textbf{j}}$, we can combine these terms to $x \dot{\hat{\textbf{i}}} + y \dot{\hat{\textbf{j}}} = \vec{\pmb{\omega}} \times \vec{\textbf{r}}_{A/B}$. This represents (a part of) the rotation of $A$ that isn't observed by $B$ because the coordinate system there rotates. It thus points perpendicular to $\vec{\textbf{r}}_{A/B}$. <br>The remaining $\dot{x} \hat{\textbf{i}} + \dot{y} \hat{\textbf{j}}$ we understand as $\vec{\textbf{v}}_{\text{rel}}$, for the speed with which $A$ moves, as seen by the coordinate system at $B$.
$$
\vec{\textbf{v}}_A = \vec{\textbf{v}}_B + \vec{\pmb{\omega}} \times \vec{\textbf{r}}_{A/B} + \vec{\textbf{v}}_{\text{rel}}
$$




##### Relative Coordinate Acceleration
We [differentiate](Differentiation) our equation for the velocity above to get an expression for the acceleration.
$$
\frac{d}{dt} \left[ \vec{\textbf{v}}_A \right] = \vec{\textbf{a}}_A = \vec{\textbf{a}}_B + \dot{\vec{\pmb{\omega}}} \times \vec{\textbf{r}}_{A/B} + \vec{\pmb{\omega}} \times \dot{\vec{\textbf{r}}}_{A/B} + \dot{\vec{\textbf{v}}}_{\text{rel}}
$$
 We already saw that $\vec{\textbf{r}}_{A/B} = \left( x\hat{\textbf{i}} + y\hat{\textbf{j}} \right)$ in our [derivation for velocity](#Relative%20Coordinate%20Velocity), and thus we want to substitute $\dot{\vec{\textbf{r}}}_{A/B}$ for the computations already done.
$$
\dot{\vec{\textbf{r}}}_{A/B} = \vec{\pmb{\omega}} \times \vec{\textbf{r}}_{A/B} + \vec{\textbf{v}}_{\text{rel}}
$$
We also want to remove the term $\dot{\vec{\textbf{v}}}_{\text{rel}}$. From our derivation for velocity above we said that $\vec{\textbf{v}}_{\text{rel}} = \dot{x} \hat{\textbf{i}} + \dot{y} \hat{\textbf{j}}$. For $\dot{\vec{\textbf{v}}}_{\text{rel}}$ we have
$$
\dot{\vec{\textbf{v}}}_{\text{rel}} = \frac{d}{dt}\left[ \dot{x} \hat{\textbf{i}} + \dot{y} \hat{\textbf{j}} \right] = \dot{x} \dot{\hat{\textbf{i}}} + \dot{y} \dot{\hat{\textbf{j}}} + \ddot{x} \hat{\textbf{i}} + \ddot{y} \hat{\textbf{j}}
$$
Remembering [this](derivation%20velocity%20for%20relative%20coordinate%20systems%20-%20proof%201) reasoning to eliminate $\dot{\hat{\textbf{i}}}$ and $\dot{\hat{\textbf{j}}}$ from the equation. Keep in mind that $\dot{x} + \dot{y} = v_{\text{rel}}$.
$$
\dot{\hat{\textbf{i}}} = \vec{\pmb{\omega}} \times \hat{\textbf{i}} \qquad \text{and} \qquad \dot{\hat{\textbf{j}}} = \vec{\pmb{\omega}} \times \hat{\textbf{j}}
$$
$$
\left( \dot{x} \dot{\hat{\textbf{i}}} + \dot{y} \dot{\hat{\textbf{j}}} \right) + \left( \ddot{x} \hat{\textbf{i}} + \ddot{y} \hat{\textbf{j}} \right) = \left( \vec{\pmb{\omega}} \times \vec{\textbf{v}}_{\text{rel}} \right) + \left( \vec{\textbf{a}}_{\text{rel}} \right)
$$
Thus, we have $\dot{\vec{\textbf{v}}}_{\text{rel}} = \vec{\pmb{\omega}} \times \vec{\textbf{v}}_{\text{rel}} + \vec{\textbf{a}}_{\text{rel}}$. We can substitute this, combined with the expression found for $\dot{\vec{\textbf{r}}}_{A/B}$, to write
$$
\vec{\textbf{a}}_A = \vec{\textbf{a}}_B + \dot{\vec{\pmb{\omega}}} \times \vec{\textbf{r}}_{A/B} + \vec{\pmb{\omega}} \times \left( \vec{\pmb{\omega}} \times \vec{\textbf{r}}_{A/B} + \vec{\textbf{v}}_{\text{rel}} \right) + \vec{\pmb{\omega}} \times \vec{\textbf{v}}_{\text{rel}} +  \vec{\textbf{a}}_{\text{rel}} 
$$
Reordering gives the **final form** as
$$
\vec{\textbf{a}}_A = \vec{\textbf{a}}_B + \dot{\vec{\pmb{\omega}}} \times \vec{\textbf{r}}_{A/B} + \vec{\pmb{\omega}} \times \left( \vec{\pmb{\omega}} \times \vec{\textbf{r}}_{A/B} \right) + 2 \vec{\pmb{\omega}} \times \vec{\textbf{v}}_{\text{rel}} +  \vec{\textbf{a}}_{\text{rel}} 
$$
For a simpler form we may consider the point $P$. We choose $P$ to be a point that is coincident at $A$ ($\vec{\textbf{r}}_{A/B} = \vec{\textbf{r}}_{P/B}$) that rotates along with the coordinate system ($x, y$) of $B$. We can see the coordinate system of $B$ as a rigid body, with $P$ a point on that body, that also happens to have the same location as $A$. The resulting **equations involving $P$** are
$$
\vec{\textbf{a}}_P = \vec{\textbf{a}}_B + \dot{\vec{\pmb{\omega}}} \times \vec{\textbf{r}}_{P/B} + \vec{\pmb{\omega}} \times \left( \vec{\pmb{\omega}} \times \vec{\textbf{r}}_{P/B} \right)
$$
$$
\vec{\textbf{a}}_A = \vec{\textbf{a}}_P + 2 \vec{\pmb{\omega}} \times \vec{\textbf{v}}_{\text{rel}} +  \vec{\textbf{a}}_{\text{rel}} 
$$
It can be seen by substitution that this is the same equation as before, just broken into two pieces.


%%
### Coordinate Systems
Throughout the calculations we may transition between coordinate systems, or use multiple at the same time. For example, the [normal-tangent](Motion%20in%20Normal-Tangent%20Coordinates) coordinate system is used often to look at relative motion of points on the body.
1. ***[Cartesian Coordinates](Motion%20in%20Cartesian%20Coordinates.md):*** This coordinate system lends itself well to **rectilinear motion**. Any motion that follows a path that somewhat follows a straight line without deviating too much can be solved most easily using Cartesian coordinates.
2. ***[Normal-Tangent Coordinates](Motion%20in%20Normal-Tangent%20Coordinates):*** This coordinate system lends itself well to **curvilinear motion**. Any motion that has strong bends, even circular paths, can be solved well with n-t coordinates.
3. ***[Polar Coordinates](Motion%20in%20Polar%20Coordinates):*** This coordinate system lends itself well to **circular motion**. Any motion that resembles a circular path can be solved most easily using polar coordinates. 

%%


### Inventory
> [!abstract] Inventory of the Formulas
> - **Basic equations**
> $$
> d\theta = \omega dt
> $$
> $$
> d\omega = \alpha dt
> $$
> $$
> \alpha d\theta = \omega d\omega
> $$
> - **Translation to rotation**
> $$
> \vec{\textbf{v}} = \vec{\pmb{\omega}} \times \vec{\textbf{r}}
> $$
> $$
> \vec{\textbf{a}} = \vec{\pmb{\omega}} \times \vec{\textbf{v}} + \vec{\pmb{\alpha}} \times \vec{\textbf{r}}
> $$
> - **Relative motion**
> $$
> \vec{\textbf{r}}_A = \vec{\textbf{r}}_B + \vec{\textbf{r}}
> $$
> $$
> \vec{\textbf{v}}_A = \vec{\textbf{v}}_B + \vec{\pmb{\omega}} \times \vec{\textbf{r}}
> $$
> $$
> \vec{\textbf{a}}_A = \vec{\textbf{a}}_B + \vec{\pmb{\omega}} \times \left( \vec{\pmb{\omega}} \times \vec{\textbf{r}} \right) + \vec{\pmb{\alpha}} \times \vec{\textbf{r}}
> $$
> ($\vec{\textbf{r}}$ indicates the distance from $A$ to $B$. Read: $\vec{\textbf{r}}_{A/B}$)
> - **Relative coordinate systems**
> $$
> \vec{\textbf{v}}_A = \vec{\textbf{v}}_B + \vec{\pmb{\omega}} \times \vec{\textbf{r}} + \vec{\textbf{v}}_{\text{rel}}
> $$
> $$
> \vec{\textbf{a}}_A = \vec{\textbf{a}}_B + \dot{\vec{\pmb{\omega}}} \times \vec{\textbf{r}} + \vec{\pmb{\omega}} \times \left( \vec{\pmb{\omega}} \times \vec{\textbf{r}} \right) + 2 \vec{\pmb{\omega}} \times \vec{\textbf{v}}_{\text{rel}} +  \vec{\textbf{a}}_{\text{rel}} 
> $$
> ($\vec{\textbf{r}}$ indicates the distance from $A$ to $B$. Read: $\vec{\textbf{r}}_{A/B}$)







---
__[Home](Example.md)__

---
_Status:_ #bud

---
# Based On:
[^unit]: This can be inferred from comparing units: velocity has $\text{m/s}$, [angular velocity](Angular%20Velocity) has $\text{rad/s}$. Radians are an empty unit that's just a predefined amount, so we could just as well write $\text{3.2/s}$ or just $\text{s}^{-1}$. Thus to get $\text{m/s}$ we multiply with $\text{[m]}$, or distance $r$.

[^math2]: The full computation is <br>$$\vec{\textbf{a}} = \frac{d}{dt} \left[ \vec{\pmb{\omega}} \times \vec{\textbf{r}} \right] = \dot{\vec{\pmb{\omega}}} \times \vec{\textbf{r}} + \vec{\pmb{\omega}} \times \dot{\vec{\textbf{r}}}$$<br>We can recognize $\dot{\vec{\textbf{r}}}$ as the definition of velocity $\vec{\textbf{v}}$, and write <br>$$\vec{\textbf{a}} = \dot{\vec{\pmb{\omega}}} \times \vec{\textbf{r}} + \vec{\pmb{\omega}} \times \vec{\textbf{v}}$$<br>$$\vec{\textbf{a}} = \vec{\pmb{\omega}} \times \vec{\textbf{v}} + \vec{\pmb{\alpha}} \times \vec{\textbf{r}}$$





1. J. L. Meriam, L. G. Kraige, J. N. Bolton, *Engineering Mechanics Dynamics*, 8th ed, US.