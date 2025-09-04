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
\vec{s} = s_x \hat{i} + s_y \hat{j} + s_z \hat{k}
$$
From here we can take the time derivative ($\vec{v}$) of $\vec{s}$ to get
$$
\vec{v} = \left( \dot{s}_x \hat{i} + s_x \dot{\hat{i}} \right) + \left( \dot{s}_y \hat{j} + s_y \dot{\hat{j}} \right) + \left( \dot{s}_z \hat{k} + s_z \dot{\hat{k}} \right)
$$
$$
\vec{v} = \dot{s}_x \hat{i} + \dot{s}_y \hat{j} + \dot{s}_z \hat{k} = \dot{\vec{s}}
$$
The derivative of the unit vectors $\hat{i}$, $\hat{j}$, $\hat{k}$ is 0, because as unit vectors they always have a length of 1, independent of changes in time. They can thus be treated as a constant. <br>Resulting from the calculation we can see that $\vec{v} = \dot{\vec{s}}$, same as with scalars, where we know $v = \dot{s}$. Keep in mind that *time* is usually not treated as a vector, but instead as a scalar.

%%<br><br>The basic equations in vector form are thus
$$
\vec{a}d\vec{s} = \vec{v}d\vec{v}
$$
$$
d\vec{s} = \vec{v}dt
$$
$$
d\vec{v} = \vec{a}dt
$$
%%



### Relative Motion
When dealing with a moving reference frame, or comparing multiple objects from a single reference point we ascribe two motions to the object.
1. ***Relative Motion:*** Perceived motion relative to the reference frame. For a car overtaking another on the highway the relative motion of the overtaking car as perceived from the other car could be 10 $\text{km/h}$, even though the overtaking car's speedometer may read 90 $\text{km/h}$. 
2. ***Absolute Motion:*** The motion of the object compared to an absolute reference frame. In most cases this absolute reference frame would be the earth, but the computations work as long as every object uses the same *absolute* reference frame[^math1].

To describe these motions we look at the position of our absolute reference frame, and make it our origin. The position vector then becomes
$$
\vec{s}_A = \vec{s}_B + \vec{s}_{A/B}
$$
The distance of $A$ from the origin is the distance of $B$ from the origin + the vector connecting $A$ to $B$, described as "*$A$ relative to $B$*". This is no more than connecting the vectors tip to tail. We arrive at $A$ by going to $B$ first. <br>We can [differentiate](Differentiation) this equation to obtain our equations for speed and acceleration.
$$
\vec{v}_A = \vec{v}_B + \vec{v}_{A/B}
$$
$$
\vec{a}_A = \vec{a}_B + \vec{a}_{A/B}
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
> \vec{s}_A = \vec{s}_B + \vec{s}_{A/B}
> $$
> $$
> \vec{v}_A = \vec{v}_B + \vec{v}_{A/B}
> $$
> $$
> \vec{a}_A = \vec{a}_B + \vec{a}_{A/B}
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
All angular velocities, and subsequently [angular accelerations](Angular%20Acceleration), are the **same for any point** on the body.<br><br>The angular velocity vector points perpendicular to the plane motion happens in, meaning that if motion happens in the $x, y$-plane (basis vectors $\hat{i}$ and $\hat{j}$), $\vec{\omega}$ points in the $z$ direction, with basis vector $\hat{k}$.<br>As stated above, a difference in speed of particles on the body causes a rotation of the whole body. To find the velocity $v$ from an angular velocity $\omega$ we find[^unit]
$$
v = \omega \cdot r
$$
$$
\vec{v} = \vec{\omega} \times \vec{r}
$$
Where $\vec{r}$ is the distance between our origin and the point whose velocity we solve for. 
The order of the cross-product is important. If we swap $\vec{\omega}$ and $\vec{r}$ around we get $\vec{r} \times \vec{\omega} = -\vec{v}$.


##### Instant Center of Rotation
Every rotating object has a single axis around which is the rotation takes place. This is the axis at which the angular velocity acts. This axis is named the [instant center of rotation](Instant%20Centre%20of%20Rotation) (ICR), or the *instant center of zero velocity*. <>As the name indicates, the ICR is the only point (not necessarily on the body) where the velocity is 0, the point only has an angular velocity. For non-slipping wheels, for example, the ICR would be at the contact point where no slip occurs, as no slip means no velocity.<br><br>Finding the ICR ($C$ in the figure below) is most easily done graphically first. Using geometry we can find the exact location afterward. To find it:
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
Notice the similarities to $ads = vdv$. <br>All angular velocities, and subsequently angular accelerations, are the **same for any point** on the body.<br><br>The angular acceleration vector points perpendicular to the plane motion happens in, meaning that if motion happens in the $x, y$-plane (basis vectors $\hat{i}$ and $\hat{j}$), $\vec{\alpha}$ points in the $z$ direction, with basis vector $\hat{k}$.<br>To find the acceleration $a$ from the angular acceleration $\alpha$ we take the [derivative](Differentiation) of the velocity, to find[^math2]
$$
\vec{a} = \vec{\omega} \times \vec{v} + \vec{\alpha} \times \vec{r}
$$
$$
\vec{a} = \dot{\vec{\theta}} \times \vec{v} + \ddot{\vec{\theta}} \times \vec{r}
$$
##### Instant Center of Zero Acceleration
[info paper](https://ccsenet.org/journal/index.php/mas/article/view/1278)%%NEEDS TEXT IF I WANT TO WRITE IT SOMEDAY%%
<br>Instant center of zero acceleration does exist but is currently out of scope for this wiki/course/goober.



### Relative Motion 
Continuing [relative motion](Relative%20Motion) for particles, we generalize the expressions to also include possible rotation. Because of a difference in velocity it is possible for a point $A$ to rotate relative to point $B$. In other words: when using $B$ as our reference frame and considering it locked in place, we perceive $A$ to be rotating. <br><br>![[dynamics_relative_rotation_AtoB_80.png|650]]<br>source: *Engineering Mechanics Dynamics*, p339, 8th ed.

#### Relative Velocity
Using our previous equation $\vec{v} = \vec{\omega} \times \vec{r}$ in place for the relative velocity equation $\vec{v}_A = \vec{v}_B + \vec{v}_{A/B}$, we get
$$
\vec{v}_A = \vec{v}_B + \vec{\omega} \times \vec{r}_{A/B}
$$
We can, if need be, substitute any velocity term in this equation for $\vec{\omega} \times \vec{r}$.


#### Relative Acceleration
Because for rotations we are dealing with a *curvilinear* path, we will be highlighting the [normal-tangent](Motion%20in%20Normal-Tangent%20Coordinates) coordinate system. Because we are dealing with vector math as well, these equations generalize to every coordinate system. <br>We rewrite the equation  for relative acceleration acquired above to accommodate the $n$-$t$ coordinate system.
$$
\vec{a}_A = \vec{a}_B + \left( \vec{a}_{A/B} \right)_n + \left( \vec{a}_{A/B} \right)_t
$$
We can now substitute the equations for the acceleration in an $n$-$t$ coordinate system to obtain
$$
\vec{a}_A = \vec{a}_B + \omega ^2 r_{A/B} \hat{e}_n + \alpha r_{A/B} \hat{e}_t
$$
Alternatively, we could use our equation for acceleration, $\vec{a} = \vec{\omega} \times \vec{v} + \vec{\alpha} \times \vec{r}$, in place of $\vec{a}_{A/B}$. This would yield
$$
\vec{a}_A = \vec{a}_B + \vec{\omega} \times \vec{v}_{A/B} + \vec{\alpha} \times \vec{r}_{A/B}
$$
We can eliminate $\vec{v}$ from the equation by realizing $\vec{v} = \vec{\omega} \times \vec{r}$, and write the **eventual equation**
$$
\vec{a}_A = \vec{a}_B + \vec{\omega} \times \left( \vec{\omega} \times \vec{r}_{A/B} \right) + \vec{\alpha} \times \vec{r}_{A/B}
$$
We can conclude from this that **for an $n$-$t$ coordinate system** we have
$$
\left( \vec{a}_{A/B} \right)_n = \vec{\omega} \times \left( \vec{\omega} \times \vec{r}_{A/B} \right)
$$
$$
\left( \vec{a}_{A/B} \right)_t = \vec{\alpha} \times \vec{r}_{A/B}
$$
#### Relative Coordinate Systems
Some situations benefit from introducing a relative coordinate system. The way this takes place is

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
> \vec{v} = \vec{\omega} \times \vec{r}
> $$
> $$
> \vec{a} = \vec{\omega} \times \vec{v} + \vec{\alpha} \times \vec{r}
> $$
> - **Relative motion**
> $$
> \vec{v}_A = \vec{v}_B + \vec{\omega} \times \vec{r}
> $$
> $$
> \vec{a}_A = \vec{a}_B + \vec{\omega} \times \left( \vec{\omega} \times \vec{r} \right) + \vec{\alpha} \times \vec{r}
> $$
> ($\vec{r}$ indicates the distance from $A$ to $B$. Read: $\vec{r}_{A/B}$)
> - For **[Normal-Tangent coordinates](Motion%20in%20Normal-Tangent%20Coordinates)**
> $$
> \vec{a}_n = \vec{\omega} \times \left( \vec{\omega} \times \vec{r} \right)
> $$
> $$
> \vec{a}_t = \vec{\alpha} \times \vec{r}
> $$


---
__[Home](Example.md)__ %%NEEDS HOMEPAGE%%

---
_Status:_ #sprout #missingLink 

---
# Based On:
[^explanmath]: This is done by isolating $dt$ from the differential and substituting the result into the other equation. <br>$$v = \frac{ds}{dt}$$<br>$$dt = \frac{ds}{v}$$<br>$$a = \frac{dv}{dt} = \frac{dv}{\frac{ds}{v}} = \frac{dv}{ds} \cdot v$$<br>$$ads = vdv$$
[^math1]: This can also be seen from the equations themselves. <br>If we take the *absolute* reference frame for the motion of object $A$ to be any object we would have <br>$$\vec{s}_A = \vec{s}_{\text{object}} + \vec{s}_{A/\text{object}}$$<br>If we choose our object to be the origin $\vec{s}_{\text{object}}$ becomes 0, and we have <br>$$\vec{s}_A = \vec{s}_{A/\text{object}}$$<br>We can do the same thing for the speed and acceleration, where we would have a 0-speed for our object, as that is the absolute reference frame. We can now compare any object $A$, or $B$, etc. to the reference frame and use the motion relative to the *absolute* reference frame as *absolute motion*.
[^math2]: The full computation is <br>$$\vec{a} = \frac{d}{dt} \left[ \vec{\omega} \times \vec{r} \right] = \dot{\vec{\omega}} \times \vec{r} + \vec{\omega} \times \dot{\vec{r}}$$<br>We can recognize $\dot{\vec{r}}$ as the definition of velocity $\vec{v}$, and write <br>$$\vec{a} = \dot{\vec{\omega}} \times \vec{r} + \vec{\omega} \times \vec{v}$$<br>$$\vec{a} = \vec{\omega} \times \vec{v} + \vec{\alpha} \times \vec{r}$$


[^unit]: This can be inferred from comparing units: velocity has $\text{m/s}$, [angular velocity](Angular%20Velocity) has $\text{rad/s}$. Radians are an empty unit that's just a predefined amount, so we could just as well write $\text{3.2/s}$ or just $\text{s}^{-1}$. Thus to get $\text{m/s}$ we multiply with $\text{[m]}$, or distance $r$.



1. J. L. Meriam, L. G. Kraige, J. N. Bolton, *Engineering Mechanics Dynamics*, 8th ed, US.