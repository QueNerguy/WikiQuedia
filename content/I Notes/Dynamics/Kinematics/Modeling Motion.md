---
title: "Modeling Motion"
draft: false
---
tags: [[dynamics]], [[single particle]], [[kinematics]]     <br>03-09-2025

---
# Modeling Motion
## Particle Motion
We will try to understand particle motion through a 3D space. A particle that moves through a 3D space can move in any of the 3 directions in a linear motion. We understand particles as small points in space that are non-rotating. <br>Modeling particles is easier than modeling rigid bodies *because* we neglect the rotation. Thus, whenever possible, we will try to reduce any object that we wish to model to just a particle moving through space.
### Basic Equations
Any object in a 3D space has a position, a speed, which can be 0, and an acceleration, which can also be 0. These three quantities can  be related using differential calculus%%LINKJE DIFF CALC HOMEPAGE%%.
$$
v = \frac{ds}{dt} = \dot{s}
$$
$$
a = \frac{dv}{dt} = \dot{v}
$$
Using [integration](Integration) we can go from knowing acceleration data to understanding the position of a particle, and the other way around. <br>The equations above are true, irrespective of the chosen coordinate system, as a result of how velocity and acceleration have been defined. <br>Resulting from the above equations we can define one more relation, by [separating the differentials](First%20Order%20Ordinary%20Differential%20Equations#Separable%20Equations)[^explanmath], namely
$$
ads = vdv
$$
And the [directly integrable](First%20Order%20Ordinary%20Differential%20Equations#Separable%20Equations) form of the first relations
$$
ds = vdt
$$
$$
dv = adt
$$
#### Vector Equations
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

### Coordinate Systems
Depending on what kind of system we are trying to analyze our choice of coordinate system can greatly ease the load of calculations. Each of these coordinate systems will have their own system of equations to solve, all of which result from the [basic equations](#Basic%20Equations) listed above.
1. ***[Cartesian Coordinates](Motion%20in%20Cartesian%20Coordinates.md):*** This coordinate system lends itself well to **rectilinear motion**. Any motion that follows a path that somewhat follows a straight line without deviating too much can be solved most easily using Cartesian coordinates.
2. ***[Normal-Tangent Coordinates](Motion%20in%20Normal-Tangent%20Coordinates):*** This coordinate system lends itself well to **curvilinear motion**. Any motion that has strong bends, even circular paths, can be solved well with n-t coordinates.
3. ***[Polar Coordinates](Motion%20in%20Polar%20Coordinates):*** This coordinate system lends itself well to **circular motion**. Any motion that resembles a circular path can be solved most easily using polar coordinates. 


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


### Inventory
> [!abstract] Inventory of the Formulas
> - Basic equations
> $$
> ds = vdt
> $$
> $$
> dv = adt
> $$
> $$
> ads = vdv
> $$
> - Relative motion
> $$
> \vec{s}_A = \vec{s}_B + \vec{s}_{A/B}
> $$
> $$
> \vec{v}_A = \vec{v}_B + \vec{v}_{A/B}
> $$
> $$
> \vec{a}_A = \vec{a}_B + \vec{a}_{A/B}
> $$




%% TBCreated
## Rigid Body Motion

### Basic Equations

#### Vector Equations
### Inventory

%%

---
__[Home](Example.md)__ %%NEEDS HOMEPAGE%%

---
_Status:_ #sprout #missingLink 

---
# Based On:
[^explanmath]: This is done by isolating $dt$ from the differential and substituting the result into the other equation. <br>$$v = \frac{ds}{dt}$$<br>$$dt = \frac{ds}{v}$$<br>$$a = \frac{dv}{dt} = \frac{dv}{\frac{ds}{v}} = \frac{dv}{ds} \cdot v$$<br>$$ads = vdv$$
[^math1]: This can also be seen from the equations themselves. <br>If we take the *absolute* reference frame for the motion of object $A$ to be any object we would have <br>$$\vec{s}_A = \vec{s}_{\text{object}} + \vec{s}_{A/\text{object}}$$<br>If we choose our object to be the origin $\vec{s}_{\text{object}}$ becomes 0, and we have <br>$$\vec{s}_A = \vec{s}_{A/\text{object}}$$<br>We can do the same thing for the speed and acceleration, where we would have a 0-speed for our object, as that is the absolute reference frame. We can now compare any object $A$, or $B$, etc. to the reference frame and use the motion relative to the *absolute* reference frame as *absolute motion*.


1. J. L. Meriam, L. G. Kraige, J. N. Bolton, *Engineering Mechanics Dynamics*, 8th ed, US.