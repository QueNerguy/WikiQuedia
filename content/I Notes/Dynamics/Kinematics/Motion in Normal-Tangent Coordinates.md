---
title: "Motion in Normal-Tangent Coordinates"
draft: false
---
tags: [[dynamics]], [[kinematics]]     <br>03-09-2025

---
# Motion in Normal-Tangent Coordinates
This coordinate system lends itself well to **curvilinear motion**. Any motion that has strong bends, even circular paths, can be solved well with n-t coordinates.
### Interpretation
The normal-tangent ($n$-$t$) coordinate system has two axes whose origin has to be located at the object/point of interest. 
1. The $t$-axis points along the path of travel, with the positive direction the same as the direction of travel of the object.
2. The $n$-axis points into the curve. For any curve it is possible to draw a circle tangent to the curve. This circle indicates the curvature. The $n$-axis points positively towards the center of this circle.
3. The angle $\beta$ of the circle tangent to the curve follows the convention of the $t$-axis, and is thus positive for a rotation in the same direction as the path of the object.
4. The radius $\rho$ of the circle tangent to the curve follows the convention of the $n$-axis, and is thus positive pointing towards the center of this circle.

The *standard basis* for $n$-$t$ coordinates is made up of $e_n$ and $e_t$ for the $n$ and $t$ axes respectively. <br><br>![[n-t_diagram_basis_80.png|400]]<br>source: *Engineering Mechanics Dynamics*, p57, 8th ed. 

### Mathematical Formulation
#### Position
The location of our object is necessarily the center of the coordinate system, the 0-vector. Any other object outside of the center would see it's position vector be
$$
\vec{s}(s_n, s_t) = \begin{bmatrix} s_n \\ s_t \end{bmatrix} = s_n \hat{e}_n + s_t \hat{e}_t
$$
To define the changes in the path of the object we draw a circle tangent to the curve. 
Any small change in position follows the arc of this circle. <br>As arc-length is defined as the *radius*$\times$*the angle*, for small changes in position, $ds$, we also see a small rotation $d \beta$.
$$
ds = \rho d \beta
$$
#### Velocity
As our velocity is defined as $ds/dt$, we divide the above equation by $dt$ to get our velocity. Note that $\rho$ doesn't need to be [differentiated](Differentiation). 
$$
v = \rho \frac{d\beta}{dt} = \rho \dot{\beta}
$$
Because we consider very small changes in position to follow a circle, the radius is constant. Small steps along this circle are also assumed to only happen *tangential* to the circle, meaning there is only a tangential component to the speed ($v = v_t$). <br>Alternatively, consider the assumption for infinitesimally small changes in angle that says radius is constant and the change in direction of $\hat{e}_n$ is negligible. These make the normal term become 0 when differentiating[^proof]. This can be seen from the image above as well.
$$
\vec{v}(v_n, v_t) = \begin{bmatrix} 0 \\ v_t \end{bmatrix} = \rho \dot{\beta} \hat{e}_t
$$
#### Acceleration
To find the acceleration we take the [derivative](Differentiation) of the velocity.
$$
\vec{a}(a_n, a_t) = \frac{d}{dt} \left[ \vec{v} \right] = \frac{d}{dt} \left[ v \hat{e}_t \right]
$$
$$
\vec{a}(a_n, a_t)  = \dot{v}\hat{e}_t + v \dot{\hat{e}}_t
$$
To find an expression for $\dot{\hat{e}}_t$ we once again use the circle tangent to the path. We want to find an expression for an infinitesimal step in $\hat{e}_t$ so we can divide this step by $dt$ to obtain our time derivative $\dot{\hat{e}}_t = \frac{d\hat{e}_t}{dt}$. As a step in the tangential direction ($d\hat{e}_t$) is defined as *radius*$\times$*the angle*, we now use $\hat{e}_n$ for the radial component and write
$$
d\hat{e}_t = \hat{e}_n d\beta
$$
To find $\dot{\hat{e}}_t$ all we have to do is divide by $dt$, keeping in mind that $\hat{e}_n$ is considered constant, to get
$$
\dot{\hat{e}}_t = \hat{e}_n \frac{d\beta}{dt} = \hat{e}_n \dot{\beta}
$$
Substituting this into our earlier expression for acceleration to find
$$
\vec{a}(a_n, a_t)  = \dot{v}\hat{e}_t + v \dot{\beta} \hat{e}_n
$$
Remember that our first expression for the velocity was $v = \rho \dot{\beta}$, we can write $\dot{\beta} = \frac{v}{\rho}$ and substitute to eliminate $\dot{\beta}$ from the expression. This gives us the final expression for acceleration.
$$
\vec{a}(a_n, a_t)  = \dot{v}\hat{e}_t + \frac{v^2}{\rho} \hat{e}_n
$$
Notice that when an object has a constant velocity, the tangential term disappears and only the normal acceleration remains. This means that for constant velocities the acceleration points directly towards the center of the circle the object traces. We can see this in things like earths rotation, or cars doing donuts.

### Inventory
> [!abstract] Inventory of the Formulas
> - **Basic equations**
> $$
> ds = \rho d\beta
> $$
> $$
> v = \rho \dot{\beta}
> $$
> - **Coordinates**
> $$
> \vec{s}(s_n, s_t) = \begin{bmatrix} s_n \\ s_t \end{bmatrix} = s_n \hat{e}_n + s_t \hat{e}_t
> $$
> $$
> \vec{v}(v_n, v_t) = \begin{bmatrix} 0 \\ v_t \end{bmatrix} = \rho \dot{\beta} \hat{e}_t
> $$
> $$
> \vec{a}(a_n, a_t)  = \begin{bmatrix} a_n \\ a_t \end{bmatrix} = \dot{v}\hat{e}_t + \frac{v^2}{\rho} \hat{e}_n
> $$


---
__[Home](Example.md)__ %%NEEDS HOMEPAGE%%

---
_Status:_ #bud

---
# Based On:
[^proof]: To illustrate let us take the derivative of our position vector: <br>$$\frac{d}{dt} \left[ \vec{s} \right] = \frac{d}{dt} \left[ s_n \hat{e}_n + s_t \hat{e}_t \right]$$<br>$$\vec{v} = \dot{s}_n\hat{e}_n + s_n \dot{\hat{e}}_n + \dot{s}_t\hat{e}_t + s_t \dot{\hat{e}}_t$$<br>Because our change in normal direction is about 0, $s_n$ is constant and $\dot{s}_n$ is then 0. The same is true for the change of the normal basis vector $\hat{e}_n$. It's change is also so small that it can be considered constant. <br>Both of these nullification are also apparent from our assumption that the next point on the circle is tangent to the arc of the circle. <br>Our solution then becomes <br>$$\vec{v} = 0 + 0 + \dot{s}_t\hat{e}_t + s_t \dot{\hat{e}}_t$$<br>Only the *tangential* components remain, and tangential steps along the circle are approximated by the arc-length, thus $ds = \rho d\beta$. From this we saw the resulting $\frac{ds}{dt} = \rho \frac{d\beta}{dt}$, or $v = \rho \dot{\beta}$. Because these steps are tangential we can write $\vec{v} = \rho \dot{\beta} \hat{e}_t$.

1. J. L. Meriam, L. G. Kraige, J. N. Bolton, *Engineering Mechanics Dynamics*, 8th ed, US.