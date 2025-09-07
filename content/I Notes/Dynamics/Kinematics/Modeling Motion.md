---
title: "Modeling Motion"
draft: false
---
tags: [[dynamics]], [[single particle]], [[kinematics]]     <br>03-09-2025

---
# Modeling Motion
Calculations following the equations outlined below, as well as their derivations rely heavily on [calculus I](!%20Calculus%20I%20Learning%20Overview) and make heavy use of [first order differential equations](First%20Order%20Ordinary%20Differential%20Equations).
## 1. Particle Motion
We will try to understand particle motion through a 3D space. A particle that moves through a 3D space can move in any of the 3 directions in a linear motion. We understand particles as small points in space that are non-rotating. <br>Modeling particles is easier than modeling rigid bodies *because* we neglect the rotation. Thus, whenever possible, we will try to reduce any object that we wish to model to just a particle moving through space.
### Velocity
Any object in a 3D space has a position, a speed, which can be 0, and an [acceleration](#Acceleration), which can also be 0. These three quantities can  be related using differential calculus%%LINKJE DIFF CALC HOMEPAGE%%. <br>In the case of velocity we have
$$
v = \frac{ds}{dt} = \dot{s}
$$
Using [integration](Integration) we can go from knowing velocity or acceleration data to understanding the position of a particle, and the other way around. <br>Resulting from the above equation we can define the [directly integrable](First%20Order%20Ordinary%20Differential%20Equations#Separable%20Equations) form of the first relation as
$$
ds = vdt
$$
The equations above are always applicable, irrespective of the chosen [coordinate system](#Coordinate%20Systems), as a result of how velocity has been defined.
### Acceleration
Similar to [velocity](#Velocity), we define acceleration using [differential equations](First%20Order%20Ordinary%20Differential%20Equations).
$$
a = \frac{dv}{dt} = \dot{v} = \ddot{s}
$$
Using [integration](Integration) and the equation for [velocity](#Velocity) above we can go from knowing acceleration data to understanding the position of a particle, and the other way around. <br>Resulting from the above equations we can define one more relation, by [separating the differentials](First%20Order%20Ordinary%20Differential%20Equations#Separable%20Equations)[^explanmath], namely
$$
ads = vdv
$$
And the [directly integrable](First%20Order%20Ordinary%20Differential%20Equations#Separable%20Equations) form of the first relations
$$
dv = adt
$$
The equations above are always applicable, irrespective of the chosen [coordinate system](#Coordinate%20Systems), as a result of how acceleration has been defined. 

### Computing With Vectors
Taking the [derivative](Differentiation) of a vector is similar to taking the [derivative of a scalar](Differentiation#Definition). This is easy to see when we break a vector up into it's cardinal directions
$$
\vec{\textbf{s}} = s_x \hat{\textbf{i}} + s_y \hat{\textbf{j}} + s_z \hat{\textbf{k}}
$$
From here we can take the time derivative ($\vec{v}$) of $\vec{s}$ to get
$$
\textbf{v} = \left( \dot{s}_x \hat{\textbf{i}} + s_x \dot{\hat{\textbf{i}}} \right) + \left( \dot{s}_y \hat{\textbf{j}} + s_y \dot{\hat{\textbf{j}}} \right) + \left( \dot{s}_z \hat{\textbf{k}} + s_z \dot{\hat{\textbf{k}}} \right)
$$
$$
\vec{\textbf{v}} = \dot{s}_x \hat{\textbf{i}} + \dot{s}_y \hat{\textbf{j}} + \dot{s}_z \hat{\textbf{k}} = \dot{\vec{\textbf{s}}}
$$
The derivative of the unit vectors $\hat{\textbf{i}}$, $\hat{\textbf{j}}$, $\hat{\textbf{k}}$ is 0, because as unit vectors they always have a length of 1, independent of changes in time. They can thus be treated as a constant. <br>Resulting from the calculation we can see that $\vec{\textbf{v}} = \dot{\vec{\textbf{s}}}$, same as with scalars, where we know $v = \dot{s}$. Keep in mind that *time* is usually not treated as a vector, but instead as a scalar.

%%<br><br>The basic equations in vector form are thus
$$
\vec{\bf{a}}d\vec{\bf{s}} = \vec{\bf{v}}d\vec{\bf{v}}
$$
$$
d\vec{\bf{s}} = \vec{\bf{v}}dt
$$
$$
d\vec{\bf{v}} = \vec{\bf{a}}dt
$$
%%



### Relative Motion
When dealing with a moving reference frame, or comparing multiple objects from a single reference point we ascribe two motions to the object.
1. ***Relative Motion:*** Perceived motion relative to the reference frame. For a car overtaking another on the highway the relative motion of the overtaking car as perceived from the other car could be 10 $\text{km/h}$, even though the overtaking car's speedometer may read 90 $\text{km/h}$. 
2. ***Absolute Motion:*** The motion of the object compared to an absolute reference frame. In most cases this absolute reference frame would be the earth, but the computations work as long as every object uses the same *absolute* reference frame[^math1].

To describe these motions we look at the position of our absolute reference frame, and make it our origin. The position vector then becomes
$$
\vec{\textbf{s}}_A = \vec{\textbf{s}}_B + \vec{\textbf{s}}_{A/B}
$$
The distance of $A$ from the origin is the distance of $B$ from the origin + the vector connecting $A$ to $B$, described as "*$A$ relative to $B$*". This is no more than connecting the vectors tip to tail. We arrive at $A$ by going to $B$ first. <br>We can [differentiate](Differentiation) this equation to obtain our equations for speed and acceleration.
$$
\vec{\textbf{v}}_A = \vec{\textbf{v}}_B + \vec{\textbf{v}}_{A/B}
$$
$$
\vec{\textbf{a}}_A = \vec{\textbf{a}}_B + \vec{\textbf{a}}_{A/B}
$$

### Coordinate Systems
Depending on what kind of system we are trying to analyze our choice of coordinate system can greatly ease the load of calculations. Each of these coordinate systems will have their own system of equations to solve, all of which result from the [basic equations](#Basic%20Equations) listed above.
1. ***[Cartesian Coordinates](Motion%20in%20Cartesian%20Coordinates.md):*** This coordinate system lends itself well to **rectilinear motion**. Any motion that follows a path that somewhat follows a straight line without deviating too much can be solved most easily using Cartesian coordinates.
2. ***[Normal-Tangent Coordinates](Motion%20in%20Normal-Tangent%20Coordinates):*** This coordinate system lends itself well to **curvilinear motion**. Any motion that has strong bends, even circular paths, can be solved well with n-t coordinates.
3. ***[Polar Coordinates](Motion%20in%20Polar%20Coordinates):*** This coordinate system lends itself well to **circular motion**. Any motion that resembles a circular path can be solved most easily using polar coordinates. 


### Inventory
> [!abstract] Inventory of the Formulas
> - **Basic equations**
> $$
> ds = vdt
> $$
> $$
> dv = adt
> $$
> $$
> ads = vdv
> $$
> - **Relative motion**
> $$
> \vec{\textbf{s}}_A = \vec{\textbf{s}}_B + \vec{\textbf{s}}_{A/B}
> $$
> $$
> \vec{\textbf{v}}_A = \vec{\textbf{v}}_B + \vec{\textbf{v}}_{A/B}
> $$
> $$
> \vec{\textbf{a}}_A = \vec{\textbf{a}}_B + \vec{\textbf{a}}_{A/B}
> $$


---


## 2. Rigid Body Motion
Rigid body motion is a continuation of [particle motion](#Particle%20Motion). Because there are multiple particles in a body however, we may see parts of the body translate at a different rate. If the bottom of the body moves slower than the top, or even in the opposite direction we perceive the rigid body as rotating. We thus see an [angular velocity](Angular%20Velocity) and an [angular acceleration](Angular%20Acceleration).
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
Continuing [relative motion](Relative%20Motion) for particles, we generalize the expressions to also include possible rotation. Because of a difference in velocity it is possible for a point $A$ to rotate relative to point $B$. In other words: when using $B$ as our reference frame and considering it locked in place, we perceive $A$ to be rotating. <br><br>![[dynamics_relative_rotation_AtoB_80.png|650]]<br>source: *Engineering Mechanics Dynamics*, p339, 8th ed.

#### Relative Velocity
For the *position vector* we can reuse the formulation we found for [relative motion for particles](#Relative%20Motion), namely $\vec{\textbf{s}}_A = \vec{\textbf{s}}_B + \vec{\textbf{s}}_{A/B}$. Using our [previous equation](#Relative%20Motion) $\vec{\textbf{v}} = \vec{\pmb{\omega}} \times \vec{\textbf{r}}$ in place for the relative velocity equation $\vec{\textbf{v}}_A = \vec{\textbf{v}}_B + \vec{\textbf{v}}_{A/B}$, we get
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
\left( \vec{\textbf{a}}_{A/B} \right)_n = \vec{\pmb{\omega}} \times \left( \vec{\pmb{\omega}} \times \vec{\textbf{r}}_{A/B} \right)
$$
$$
\left( \vec{\textbf{a}}_{A/B} \right)_t = \vec{\pmb{\alpha}} \times \vec{\textbf{r}}_{A/B}
$$
#### Relative Coordinate Systems
Some situations benefit from introducing a relative coordinate system. We study three points:
1. Origin of non-rotating coordinate system ($X, Y$).
2. Point $B$, where the rotating coordinate system ($x, y$) attaches.
3. Point $A$, the point we wish to understand.

We know that translating reference frames don't complicate the calculations as long as we use a single reference frame to compare both points. In the case of a rotation we can reuse the same argument, but introduce terms caused by the rotation.

##### Relative Coordinate Velocity
Because our position vector isn't affected by a rotation at all, it stays the same as it was for [single particle relative motion](#Relative%20Motion), namely $\vec{\textbf{r}}_A = \vec{\textbf{r}}_B + \vec{\textbf{r}}_{A/B}$, or, using our coordinate attached to point $B$, we can rewrite to
$$
\vec{\textbf{s}}_A = \vec{\textbf{s}}_B + \left( x\hat{\textbf{i}} + y\hat{\textbf{j}} \right)
$$
Here $x$ and $y$ are the axes that attach at $B$. The $x$ and $y$ coordinates give the location of $A$ from the origin at $B$, making this term equivalent to $\vec{\textbf{r}}_{A/B}$. Differentiation of $\vec{\textbf{s}}_A$ gives
$$
\frac{d}{dt} \left[ \vec{\textbf{s}}_A \right] = \vec{\textbf{v}}_A = \vec{\textbf{v}}_B + \left( \dot{x} \hat{\textbf{i}} + \dot{y} \hat{\textbf{j}} \right) + \left( x \dot{\hat{\textbf{i}}} + y \dot{\hat{\textbf{j}}} \right)
$$
We can see that $\dot{x}$ and $\dot{y}$ give the velocity of $A$ as seen from $B$, or $\vec{\textbf{v}}_{A/B}$, like before. To obtain a working equation we just need to find an expression for $\dot{\hat{\textbf{i}}}$ and $\dot{\hat{\textbf{j}}}$.


$$
\vec{\textbf{v}}_A = \vec{\textbf{v}}_B + \vec{\pmb{\omega}} \times \vec{\textbf{r}}_{A/B} + \vec{\textbf{v}}_{\text{rel}}
$$




##### Relative Coordinate Acceleration






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
> \vec{\textbf{v}}_A = \vec{\textbf{v}}_B + \vec{\pmb{\omega}} \times \vec{\textbf{r}}
> $$
> $$
> \vec{\textbf{a}}_A = \vec{\textbf{a}}_B + \vec{\pmb{\omega}} \times \left( \vec{\pmb{\omega}} \times \vec{\textbf{r}} \right) + \vec{\pmb{\alpha}} \times \vec{\textbf{r}}
> $$
> ($\vec{\textbf{r}}$ indicates the distance from $A$ to $B$. Read: $\vec{\textbf{r}}_{A/B}$)
> - For **[Normal-Tangent coordinates](Motion%20in%20Normal-Tangent%20Coordinates)**
> $$
> \vec{\textbf{a}}_n = \vec{\pmb{\omega}} \times \left( \vec{\pmb{\omega}} \times \vec{\textbf{r}} \right)
> $$
> $$
> \vec{\textbf{a}}_t = \vec{\pmb{\alpha}} \times \vec{\textbf{r}}
> $$


---
__[Home](Example.md)__ %%NEEDS HOMEPAGE%%

---
_Status:_ #sprout #missingLink 

---
# Based On:
[^explanmath]: This is done by isolating $dt$ from the differential and substituting the result into the other equation. <br>$$v = \frac{ds}{dt}$$<br>$$dt = \frac{ds}{v}$$<br>$$a = \frac{dv}{dt} = \frac{dv}{\frac{ds}{v}} = \frac{dv}{ds} \cdot v$$<br>$$ads = vdv$$
[^math1]: This can also be seen from the equations themselves. <br>If we take the *absolute* reference frame for the motion of object $A$ to be any object we would have <br>$$\vec{\textbf{s}}_A = \vec{\textbf{s}}_{\text{object}} + \vec{\textbf{s}}_{A/\text{object}}$$<br>If we choose our object to be the origin $\vec{\textbf{s}}_{\text{object}}$ becomes 0, and we have <br>$$\vec{\textbf{s}}_A = \vec{\textbf{s}}_{A/\text{object}}$$<br>We can do the same thing for the speed and acceleration, where we would have a 0-speed for our object, as that is the absolute reference frame. We can now compare any object $A$, or $B$, etc. to the reference frame and use the motion relative to the *absolute* reference frame as *absolute motion*.
[^math2]: The full computation is <br>$$\vec{\textbf{a}} = \frac{d}{dt} \left[ \vec{\pmb{\omega}} \times \vec{\textbf{r}} \right] = \dot{\vec{\pmb{\omega}}} \times \vec{\textbf{r}} + \vec{\pmb{\omega}} \times \dot{\vec{\textbf{r}}}$$<br>We can recognize $\dot{\vec{\textbf{r}}}$ as the definition of velocity $\vec{\textbf{v}}$, and write <br>$$\vec{\textbf{a}} = \dot{\vec{\pmb{\omega}}} \times \vec{\textbf{r}} + \vec{\pmb{\omega}} \times \vec{\textbf{v}}$$<br>$$\vec{\textbf{a}} = \vec{\pmb{\omega}} \times \vec{\textbf{v}} + \vec{\pmb{\alpha}} \times \vec{\textbf{r}}$$


[^unit]: This can be inferred from comparing units: velocity has $\text{m/s}$, [angular velocity](Angular%20Velocity) has $\text{rad/s}$. Radians are an empty unit that's just a predefined amount, so we could just as well write $\text{3.2/s}$ or just $\text{s}^{-1}$. Thus to get $\text{m/s}$ we multiply with $\text{[m]}$, or distance $r$.



1. J. L. Meriam, L. G. Kraige, J. N. Bolton, *Engineering Mechanics Dynamics*, 8th ed, US.