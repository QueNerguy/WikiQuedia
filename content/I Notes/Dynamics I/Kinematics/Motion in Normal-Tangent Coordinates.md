---
title: "Motion in Normal-Tangent Coordinates"
draft: false
---
tags: [[dynamics]], [[kinematics]], [[vector math]]     <br>03-09-2025

---
# Motion in Normal-Tangent Coordinates
This coordinate system lends itself well to **curvilinear motion**. Any motion that has strong bends, even circular paths, can be solved well with n-t coordinates.
### Interpretation
The normal-tangent ($n$-$t$) coordinate system has two axes whose origin has to be located at the object/point of interest. 
1. The $t$-axis points along the path of travel, with the positive direction the same as the direction of travel of the object.
2. The $n$-axis points into the curve. For any curve it is possible to draw a circle tangent to the curve. This circle indicates the curvature. The $n$-axis points positively towards the center of this circle.
3. The angle $\beta$ of the circle tangent to the curve follows the convention of the $t$-axis, and is thus positive for a rotation in the same direction as the path of the object.
4. The radius $\rho$ of the circle tangent to the curve follows the convention of the $n$-axis, and is thus positive pointing towards the center of this circle.

The *standard basis* for $n$-$t$ coordinates is made up of $\hat{\textbf{e}}_n$ and $\hat{\textbf{e}}_t$ for the $n$ and $t$ axes, respectively, where $\hat{\textbf{e}}_n$ points positively towards the [center of rotation](Modeling%20Rigid%20Body%20Motion#Instant%20Center%20of%20Rotation), $\hat{\textbf{e}}_t$ points positively in the direction of motion. The angles $\beta$ in this system follow the right hand rule, positive in the counter-clockwise direction. <br><br>![[n-t_diagram_basis_80.png|400]]<br>source: *Engineering Mechanics Dynamics*, p57, 8th ed. 

### Mathematical Formulation
>[!warning]
> During computations it is impractical to [integrate](Integration) or [differentiate](Differentiation) the motion in a certain direction as is done in [Cartesian coordinates](Motion%20in%20Cartesian%20Coordinates). The difference between Cartesian and other coordinate systems that makes this impractical is that the direction vectors $\hat{\textbf{e}}_n$ and $\hat{\textbf{e}}_t$ change with time, whereas $\hat{\textbf{i}}$, $\hat{\textbf{j}}$ and $\hat{\textbf{k}}$ remain constant.
> In this note we will thus formulate equations that will allow us to transition from $\vec{\textbf{s}}$ to $\vec{\textbf{v}}$ to $\vec{\textbf{a}}$ and back via a combination of integration and algebra. 
> These equations remain true irrespective of $t$.


Polar coordinates can be found from [Cartesian coordinates](Motion%20in%20Cartesian%20Coordinates) by applying the following transformations
$$
x = \rho \sin(\beta)
$$
$$
y = - \rho \cos(\beta)
$$
Alternatively, the conversion can be found by making a triangle, with right sides $x$ and $y$ for the Cartesian coordinate system, diagonal side with length $\rho$, and the angle below the diagonal side $\beta$. The relation between coordinates can be found by solving the geometric relations of this triangle.<br>Converting between coordinate systems can significantly ease computations, especially when [differentiating](Differentiation) and [integrating](Integration). Furthermore, converting from coordinate system $a$ to coordinate system $b$ introduces a constraint to the system, which might help solve some problems.
$$
\begin{bmatrix} x \\ y\end{bmatrix} = \begin{bmatrix} \rho \sin(\beta) \\ - \rho \cos(\beta) \end{bmatrix}
$$





#### Position
The location of our object is necessarily the center of the coordinate system, the 0-vector. Any other object outside of the center would see it's position vector be
$$
\vec{\textbf{s}} = \begin{bmatrix} s_n \\ s_t \end{bmatrix} = s_n \hat{\textbf{e}}_n + s_t \hat{\textbf{e}}_t
$$
To define the changes in the path of the object we draw a circle tangent to the curve. 
Any small change in position follows the arc of this circle. <br>As arc-length is defined as the *radius*$\times$*angle*, for small changes in position, $ds$, we also see a small rotation $d \beta$.
$$
ds = \rho d \beta
$$
#### Velocity
As our velocity is defined as $ds/dt$, we divide the above equation by $dt$ to get our velocity. Note that $\rho$ doesn't need to be [differentiated](Differentiation). 
$$
v = \rho \frac{d\beta}{dt} = \rho \dot{\beta}
$$
Because we consider very small changes in position to follow a circle, the radius is constant. Small steps along this circle are also assumed to only happen *tangential* to the circle, meaning there is only a tangential component to the speed ($v = v_t$). <br>Alternatively, consider the assumption for infinitesimally small changes in angle that says radius is constant and the change in direction of $\hat{\textbf{e}}_n$ is negligible. These make the normal term become 0 when differentiating[^proof]. This can be seen from the image above as well.
$$
\vec{\textbf{v}} = \begin{bmatrix} 0 \\ v_t \end{bmatrix} = \dot{\beta} \rho  \hat{\textbf{e}}_t
$$
##### Vector Form for Velocity
We can use the thought process used [here](Modeling%20Rigid%20Body%20Motion.md#Angular%20Velocity), but rewrite in terms of vectors $\vec{\pmb{\rho}}$ and $\vec{\pmb{\beta}}$. <br>Notice that the terms from the scalar equation above return in vector form, and that this cross product must point in the $\hat{\textbf{e}}_t$ direction. We see[^mrbveloc]
$$
\vec{\textbf{v}} = \begin{bmatrix} 0 \\ v_t \end{bmatrix} = \dot{\vec{\pmb{\beta}}} \times \vec{\pmb{\rho}}
$$

#### Acceleration
To find the acceleration we take the [derivative](Differentiation) of the velocity.
$$
\vec{\textbf{a}} = \begin{bmatrix} a_n \\ a_t \end{bmatrix} = \frac{d}{dt} \left[ \vec{\textbf{v}} \right] = \frac{d}{dt} \left[ v \hat{\textbf{e}}_t \right]
$$
$$
\vec{\textbf{a}} = \begin{bmatrix} a_n \\ a_t \end{bmatrix}  = v \dot{\hat{\textbf{e}}}_t + \dot{v}\hat{\textbf{e}}_t
$$
To find an expression for $\dot{\hat{\textbf{e}}}_t$ we once again use the circle tangent to the path. We want to find an expression for an infinitesimal step in $\hat{\textbf{e}}_t$ so we can divide this step by $dt$ to obtain our time derivative $\dot{\hat{\textbf{e}}}_t = \frac{d\hat{\textbf{e}}_t}{dt}$. As a step in the tangential direction ($d\hat{\textbf{e}}_t$) is defined as *radius*$\times$*angle*, we now use $\hat{\textbf{e}}_n$ for the radial component and write
$$
d\hat{\textbf{e}}_t = \hat{\textbf{e}}_n d\beta
$$
To find $\dot{\hat{\textbf{e}}}_t$ all we have to do is divide by $dt$, keeping in mind that $\hat{\textbf{e}}_n$ is considered constant, to get
$$
\dot{\hat{\textbf{e}}}_t = \hat{\textbf{e}}_n \frac{d\beta}{dt} = \hat{\textbf{e}}_n \dot{\beta}
$$
Substituting this into our earlier expression for acceleration to find
$$
\vec{\textbf{a}} = \begin{bmatrix} a_n \\ a_t \end{bmatrix}  = v \dot{\beta} \hat{\textbf{e}}_n + \dot{v}\hat{\textbf{e}}_t
$$
Remember that our first expression for the velocity was $v = \rho \dot{\beta}$, we can write $\dot{\beta} = \frac{v}{\rho}$ and substitute to eliminate $\dot{\beta}$ from the expression. This gives us the final expression for acceleration.
$$
\vec{\textbf{a}} = \begin{bmatrix} a_n \\ a_t \end{bmatrix} = \frac{v^2}{\rho} \hat{\textbf{e}}_n + \dot{v}\hat{\textbf{e}}_t
$$
Notice that when an object has a constant velocity, the tangential term disappears and only the normal acceleration remains. This means that for constant velocities the acceleration points directly towards the center of the circle the object traces. We can see this in things like earths rotation, or cars doing donuts.
##### Vector Form for Acceleration
We can use the thought process used [here](Modeling%20Rigid%20Body%20Motion.md#Angular%20Acceleration), but rewrite in terms of vectors $\vec{\pmb{\rho}}$ and $\vec{\pmb{\beta}}$. <br>Notice that the terms from the scalar equation above return in vector form. We see[^mrbacc]
$$
\vec{\textbf{a}} = \begin{bmatrix} a_n \\ a_t \end{bmatrix} = \dot{\vec{\pmb{\beta}}} \times \vec{\textbf{v}} + \ddot{\vec{\pmb{\beta}}} \times \vec{\pmb{\rho}}
$$
$$
\vec{\textbf{a}}_n = \dot{\vec{\pmb{\beta}}} \times \vec{\textbf{v}} \qquad \text{and} \qquad \vec{\textbf{a}}_t = \ddot{\vec{\pmb{\beta}}} \times \vec{\pmb{\rho}}
$$

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
> \vec{\textbf{s}} = \begin{bmatrix} s_n \\ s_t \end{bmatrix} = s_n \hat{\textbf{e}}_n + s_t \hat{\textbf{e}}_t
> $$
> $$
> \vec{\textbf{v}} = \begin{bmatrix} 0 \\ v_t \end{bmatrix} = \dot{\beta} \rho \hat{\textbf{e}}_t = \dot{\vec{\pmb{\beta}}} \times \vec{\pmb{\rho}}
> $$
> $$
> \vec{\textbf{a}}  = \begin{bmatrix} a_n \\ a_t \end{bmatrix} = \frac{v^2}{\rho} \hat{\textbf{e}}_n + \dot{v}\hat{\textbf{e}}_t = \dot{\vec{\pmb{\beta}}} \times \vec{\textbf{v}} + \ddot{\vec{\pmb{\beta}}} \times \vec{\pmb{\rho}}
> $$
> - **Conversion to [Cartesian coordinates](Motion%20in%20Cartesian%20Coordinates)**[^altrouteNT]
> $$
> x = \rho \sin(\beta)
> $$
> $$
> y = - \rho \cos(\beta)
> $$



---
__[Home](Introduction%20to%20Dynamics%20I.md)__

---
_Status:_ #ripe

---
# Based On:
[^proof]: To illustrate let us take the derivative of our position vector: <br>$$\frac{d}{dt} \left[ \vec{\textbf{s}} \right] = \frac{d}{dt} \left[ s_n \hat{\textbf{e}}_n + s_t \hat{\textbf{e}}_t \right]$$<br>$$\vec{\textbf{v}} = \dot{s}_n\hat{\textbf{e}}_n + s_n \dot{\hat{\textbf{e}}}_n + \dot{s}_t\hat{\textbf{e}}_t + s_t \dot{\hat{\textbf{e}}}_t$$<br>Because our change in normal direction is about 0, $s_n$ is constant and $\dot{s}_n$ is then 0. The same is true for the change of the normal basis vector $\hat{\textbf{e}}_n$. It's change is also so small that it can be considered constant. <br>Both of these nullification are also apparent from our assumption that the next point on the circle is tangent to the arc of the circle. <br>Our solution then becomes <br>$$\vec{\textbf{v}} = 0 + 0 + \dot{s}_t\hat{\textbf{e}}_t + s_t \dot{\hat{\textbf{e}}}_t$$<br>Only the *tangential* components remain, and tangential steps along the circle are approximated by the arc-length, thus $ds = \rho d\beta$. From this we saw the resulting $\frac{ds}{dt} = \rho \frac{d\beta}{dt}$, or $v = \rho \dot{\beta}$. Because these steps are tangential we can write $\vec{\textbf{v}} = \rho \dot{\beta} \hat{\textbf{e}}_t$.

[^mrbveloc]: The thought process behind the ordering of these vectors can be found [here](Modeling%20Rigid%20Body%20Motion.md#Angular%20Velocity). Be aware that in this note, instead of $\rho$, $r$ is used, and in place of $\beta$, $\theta$. The time derivative $\dot{\beta}$ is denoted as $\omega$.
[^mrbacc]: The thought process behind the ordering of these vectors can be found [here](Modeling%20Rigid%20Body%20Motion.md#Angular%20Acceleration). Be aware that in this note, instead of $\rho$, $r$ is used, and in place of $\beta$, $\theta$. The time derivative $\dot{\beta}$ is denoted as $\omega$, and the double time derivative $\ddot{\beta}$ is denoted as $\alpha$.
[^altrouteNT]: If the signs and directions are confusing, these relations can also be found by making a triangle, with right sides $x$ and $y$ for the Cartesian coordinate system, diagonal side with length $\rho$, and the angle below the diagonal side $\beta$. The relation between coordinates can be found by solving the geometric relations of this triangle


1. J. L. Meriam, L. G. Kraige, J. N. Bolton, *Engineering Mechanics Dynamics*, 8th ed, US.