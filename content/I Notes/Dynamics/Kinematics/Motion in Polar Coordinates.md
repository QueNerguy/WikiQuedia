---
title: "Motion in Polar Coordinates"
draft: false
---
tags: [[dynamics]], [[kinematics]]     <br>03-09-2025

---
# Motion in Polar Coordinates
This coordinate system lends itself well to **circular motion**. Any motion that resembles a circular path can be solved most easily using polar coordinates. 
### Interpretation
Any point in polar coordinates can be defined by the distance $r$ along the radial axis and the angle $\theta$, as pictured below. The center of the coordinate system is arbitrary, but preferably at a point that makes the computations as easy as possible. The positive and negative direction are usually defined to follow the [right-hand-rule](https://en.wikipedia.org/wiki/Cartesian_coordinate_system#In_three_dimensions), but can be redefined to ease computations.
1. The $r$-axis points along the path of travel, with the positive direction away from the center towards the object.
2. The $\theta$-axis usually follows the right hand rule. It is therefore positive for counter-clockwise rotations.
3. The angle $\theta$ follows the convention of the $\theta$-axis, and is thus positive for a counter-clockwise rotation.
4. The radius $r$ of the circle follows the convention of the $r$-axis, and is thus positive pointing towards the object from the center.

The *standard basis* for polar coordinates is made up of $\hat{\textbf{e}}_r$ and $\hat{\textbf{e}}_\theta$ for the $r$ and $\theta$ axes, respectively. <br><br>![[polar_coordinates_dynamics_basis_80.png|450]]<br>source: *Engineering Mechanics Dynamics*, p69, 8th ed. 

### Mathematical Formulation
#### Position
The position of any object can be found by taking the distance $r$ in the direction of the radial unit vector $\hat{\textbf{e}}_r$.
$$
\vec{\textbf{s}}(s_r, s_\theta) = \begin{bmatrix} s_r \\ 0 \end{bmatrix} = s_r \hat{\textbf{e}}_r = r\hat{\textbf{e}}_r
$$
#### Velocity
There are two ways to derive the velocity. We can reinterpret the [normal-tangent coordinate system](Motion%20in%20Normal-Tangent%20Coordinates), by realizing that **for circular motion** where our origin is the center of rotation the polar and $n$-$t$ coordinate systems are equivalent. We just have to rename $\rho$ to $r$ and $\beta$ to $\theta$ and we have
$$
\vec{\textbf{v}}(v_r, v_\theta) = \begin{bmatrix} 0 \\ v_\theta \end{bmatrix} = r \dot{\theta} \hat{\textbf{e}}_\theta
$$
To generalize to non-circular motion we also need a $v_r$ term. We can find this by [differentiating](Differentiation) our position vector.
$$
\vec{\textbf{v}}(v_r, v_\theta) = \begin{bmatrix} v_r \\ v_\theta \end{bmatrix} = \frac{d}{dt} \left[ s_r \hat{\textbf{e}}_r \right]
$$
$$
\vec{\textbf{v}}(v_r, v_\theta) = \dot{s}_r \hat{\textbf{e}}_r + s_r \dot{\hat{\textbf{e}}}_r
$$
To find $\dot{\hat{\textbf{e}}}_r$ we start by finding the infinitesimal changes in $\hat{\textbf{e}}_r$, so we can later divide by $dt$ and obtain our time derivative. <br><br>![[polar_coordinates_dynamics_differentiation1_80.png|450]]<br>source: *Engineering Mechanics Dynamics*, p69, 8th ed.<br><br>From the image above we can see that a step $d\hat{\textbf{e}}_r$ is in the positive $\theta$ direction, thus in the $\hat{\textbf{e}}_\theta$ direction. The length of a step $d\hat{\textbf{e}}_r$ is approximated by the arc-length, which is defined as the *radius*$\times$*angle*. For the radius we use $\hat{\textbf{e}}_\theta$, because that is the direction $d\hat{\textbf{e}}_r$ points in, and for the small angle we use $d\theta$.
$$
d\hat{\textbf{e}}_r = \hat{\textbf{e}}_\theta d\theta
$$
We can now divide both sides by $dt$. Keep in mind that $\hat{\textbf{e}}_\theta$ is assumed  constant for small steps along an arc.
$$
\frac{d\hat{\textbf{e}}_r}{dt} = \hat{\textbf{e}}_\theta \frac{d\theta}{dt}
$$
$$
\dot{\hat{\textbf{e}}}_r = \dot{\theta} \hat{\textbf{e}}_\theta
$$
We can back-substitute this into our equation for velocity to obtain
$$
\vec{\textbf{v}}(v_r, v_\theta) = \dot{r} \hat{\textbf{e}}_r + r \dot{\theta} \hat{\textbf{e}}_\theta
$$
#### Acceleration
To find the acceleration we take the [derivative](Differentiation) of the velocity.
$$
\vec{\textbf{a}}(a_r, a_\theta) = \frac{d}{dt} \left[ \vec{\textbf{v}} \right] = \frac{d}{dt} \left[ \dot{r} \hat{\textbf{e}}_r + r \dot{\theta} \hat{\textbf{e}}_\theta \right]
$$
$$
\vec{\textbf{a}}(a_r, a_\theta) = \ddot{r}\hat{\textbf{e}}_r + \dot{r} \dot{\hat{\textbf{e}}}_r + \dot{r} \dot{\theta} \hat{\textbf{e}}_\theta + r \ddot{\theta} \hat{\textbf{e}}_\theta + r \dot{\theta} \dot{\hat{\textbf{e}}}_\theta 
$$
We now have both $\dot{\hat{\textbf{e}}}_r$ and $\dot{\hat{\textbf{e}}}_\theta$ in the equation, and we need to remove them. We can use the same reasoning we used to obtain $\dot{\hat{\textbf{e}}}_r = \dot{\theta} \hat{\textbf{e}}_\theta$ for $\dot{\hat{\textbf{e}}}_\theta$, while keeping in mind that it moves in the negative $r$ direction.
$$
\dot{\hat{\textbf{e}}}_\theta = - \dot{\theta} \hat{\textbf{e}}_r
$$
We can substitute this into our expression for the acceleration to get
$$
\vec{\textbf{a}}(a_r, a_\theta) = \ddot{r}\hat{\textbf{e}}_r + \dot{r} \left( \dot{\theta}\hat{\textbf{e}}_\theta \right) + \dot{r} \dot{\theta} \hat{\textbf{e}}_\theta + r \ddot{\theta} \hat{\textbf{e}}_\theta + r \dot{\theta} \left( - \dot{\theta} \hat{\textbf{e}}_r \right) 
$$
Reorganizing a bit we get the final version of the acceleration equation.
$$
\vec{\textbf{a}}(a_r, a_\theta) = \left( \ddot{r} - r \dot{\theta}^2 \right) \hat{\textbf{e}}_r + \left( r \ddot{\theta} + 2\dot{r} \dot{\theta} \right) \hat{\textbf{e}}_\theta
$$




### Inventory
> [!abstract] Inventory of the Formulas
> - **Coordinates**
> $$
> \vec{\textbf{s}}(s_r, s_\theta) = \begin{bmatrix} s_r \\ 0 \end{bmatrix} = s_r \hat{\textbf{e}}_r = r\hat{\textbf{e}}_r
> $$
> $$
> \vec{\textbf{v}}(v_r, v_\theta) = \begin{bmatrix} v_r \\ v_\theta \end{bmatrix} = \dot{r} \hat{\textbf{e}}_r + r \dot{\theta} \hat{\textbf{e}}_\theta
> $$
> $$
> \vec{\textbf{a}}(a_r, a_\theta) = \begin{bmatrix} a_r \\ a_\theta \end{bmatrix} = \left( \ddot{r} - r \dot{\theta}^2 \right) \hat{\textbf{e}}_r + \left( r \ddot{\theta} + 2\dot{r} \dot{\theta} \right) \hat{\textbf{e}}_\theta
> $$










---
__[Home](WikiQuedia/Mechanical%20Engineering/3%20-%20Tags/Example.md)__ %%NEEDS HOMEPAGE%%

---
_Status:_ #ripe

---
# Based On:

1. J. L. Meriam, L. G. Kraige, J. N. Bolton, *Engineering Mechanics Dynamics*, 8th ed, US.
