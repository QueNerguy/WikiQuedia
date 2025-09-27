---
title: Modeling Particle Motion
draft: false
---
tags: [[dynamics]], [[single particle]], [[kinematics]], [[vector math]]     <br>03-09-2025

---
# Modeling Particle Motion
Calculations following the equations outlined below, as well as their derivations rely heavily on [calculus I](!%20Calculus%20I%20Learning%20Overview) and make heavy use of [first order differential equations](First%20Order%20Ordinary%20Differential%20Equations).
## Particle Motion
We will try to understand particle motion through a 3D space. A particle that moves through a 3D space can move in any of the 3 directions in a linear motion. We understand particles as small points in space that are non-rotating. <br>Modeling particles is easier than modeling rigid bodies *because* we neglect the rotation. Thus, whenever possible, we will try to reduce any object that we wish to model to just a particle moving through space. For bodies that can't be simplified to single particles we approximate the situation with [rigid bodies](Modeling%20Rigid%20Body%20Motion).
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
\vec{\textbf{v}} = \left( \dot{s}_x \hat{\textbf{i}} + s_x \dot{\hat{\textbf{i}}} \right) + \left( \dot{s}_y \hat{\textbf{j}} + s_y \dot{\hat{\textbf{j}}} \right) + \left( \dot{s}_z \hat{\textbf{k}} + s_z \dot{\hat{\textbf{k}}} \right)
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



---
__[Home](!%20Dynamics%20Learning%20Overview)__

---
_Status:_ #ripe

---
# Based On:
[^explanmath]: This is done by isolating $dt$ from the differential and substituting the result into the other equation. <br>$$v = \frac{ds}{dt}$$<br>$$dt = \frac{ds}{v}$$<br>$$a = \frac{dv}{dt} = \frac{dv}{\frac{ds}{v}} = \frac{dv}{ds} \cdot v$$<br>$$ads = vdv$$
[^math1]: This can also be seen from the equations themselves. <br>If we take the *absolute* reference frame for the motion of object $A$ to be any object we would have <br>$$\vec{\textbf{s}}_A = \vec{\textbf{s}}_{\text{object}} + \vec{\textbf{s}}_{A/\text{object}}$$<br>If we choose our object to be the origin $\vec{\textbf{s}}_{\text{object}}$ becomes 0, and we have <br>$$\vec{\textbf{s}}_A = \vec{\textbf{s}}_{A/\text{object}}$$<br>We can do the same thing for the speed and acceleration, where we would have a 0-speed for our object, as that is the absolute reference frame. We can now compare any object $A$, or $B$, etc. to the reference frame and use the motion relative to the *absolute* reference frame as *absolute motion*.





1. J. L. Meriam, L. G. Kraige, J. N. Bolton, *Engineering Mechanics Dynamics*, 8th ed, US.