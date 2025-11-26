---
title: Particle Mechanics
draft: false
---
tags: [[dynamics]], [[kinetics]], [[single particle]], [[vector math]], [[sums]]     <br>12-09-2025

---
# Particle Mechanics
To solve a system with the least amount of effort
1. Try solving with **[conservation of energy](Conservation%20of%20Energy.md)**.
2. If **1.** is not possible[^impos1], try solving with **[impulse and momentum](Impulse%20and%20Momentum%20for%20Particles.md)**.
3. If **2.** is not possible[^impos2], try solving by **integrating the equations of motion**.

Following this list ensures that you spend the least amount of time possible on solutions.


### Interpretation
When [forces](Force) act on a particle, this particle may start to move, as long as the sum of the forces $\ne$ 0. To model particles we want to understand how the motion of a particle relates to the forces that act on it, and vice-versa. <br>It is important to note that particles aren't subject to rotations, and the [moment](Moment) is thus not considered in these models.

### Mathematical Formulation
To describe the way a particle moves when subjected to external [forces](Force), we use Newton's equations. Unlike in *Statics*%%==LINKJE STATICA==%%, where no motion occurred and we could thus say $\sum \vec{\textbf{F}} = 0$, in *dynamics* we do account for motion, and our equation becomes
$$
\sum \vec{\textbf{F}} = \vec{\textbf{F}}_1 + \vec{\textbf{F}}_2 + \dots = m \vec{\textbf{a}}
$$
Our **parametric equations** (for a standard oriented 2D [Cartesian system](Motion%20in%20Cartesian%20Coordinates.md)) would subsequently be
$$
\left(\stackrel{+}\rightarrow\right)\: \sum F_x = m a_x
$$
$$
\left(\stackrel{+}\uparrow\right)\: \sum F_y = m a_y
$$
- The accelerations are the accelerations at the **center of mass** of the body.

The [moment](Moment) is not considered for particles, as particles aren't subject to rotations. <br>The positive direction is the positive direction for both the left hand- and the right hand side of this equation, thus a positive force points to the right, and a positive acceleration vector does too. <br>To understand the exact motion of the particle, we would solve for the acceleration from these equations, and use [particle kinematics](Particle%20Motion.md) to find the position. Because of this process, the equations above are sometimes referred to as the **equations of motion**, or **EOM**s. 
%%
To find the total force acting on the body we find the length of the *resulting force*. Finding the length is nothing more than adding the vectors tip to toe, and applying *Pythagoras' theorem*.
$$
\left |\sum \vec{\textbf{F}} \right| = \left| \sum F_x \: \hat{\textbf{i}} + \sum F_y \: \hat{\textbf{j}} + \sum F_z \: \hat{\textbf{k}} \right| =\sqrt{ \left(\sum F_x\right)^2 + \left(\sum F_y\right)^2 + \left(\sum F_z\right)^2}
$$
%%

>[!warning]
>Before finding the *equations of motion* **always construct a free body diagram**! This helps avoid mistakes and choose correct signs when using the parametric equations.
>The use of FBDs is the most important step in solving and understanding these systems.

##### Alternative Coordinate Systems
The equations $\left(\stackrel{+}\rightarrow\right)\: \sum F_x = m \cdot a_x$ and $\left(\stackrel{+}\uparrow\right)\: \sum F_y = m \cdot a_y$ also hold for the [normal-tangent coordinate system](Motion%20in%20Normal-Tangent%20Coordinates.md), and in the [polar coordinate system](Motion%20in%20Polar%20Coordinates.md). The only difference would be the expression that we can substitute $a_x$ and $a_y$ with.
1. For the ***[Normal-Tangent coordinate system](Motion%20in%20Normal-Tangent%20Coordinates.md#Acceleration):***
$$
\left(\stackrel{+}\rightarrow\right)\: \sum F_n = m \cdot a_n = m \cdot \frac{v^2}{\rho}
$$
$$
\left(\stackrel{+}\uparrow\right)\: \sum F_t = m \cdot a_t = m \cdot \dot{v}
$$
2. For the ***[polar coordinate system](Motion%20in%20Polar%20Coordinates.md#Acceleration):***
$$
\left(\stackrel{+}\rightarrow\right)\: \sum F_r = m \cdot a_r = m \left( \ddot{r} - r \dot{\theta}^2 \right)
$$
$$
\left(\stackrel{+}\uparrow\right)\: \sum F_\theta = m \cdot a_\theta = m 
\left( r \ddot{\theta} + 2\dot{r} \dot{\theta} \right)
$$

Remember that, when using these alternative coordinate systems, the expressions for the [force](Force) need to be consistent with the coordinate system as well. If the forces aren't changed to adhere to the coordinate system the solution will be inconsistent and solve with a wrong value.





%%
$$
\left(\stackrel{+}\circlearrowleft\right)\: \sum M_o = I \cdot \alpha
$$
%%

### Inventory
> [!abstract] Inventory of the Formulas
> - **Newton's second law**
> $$
> \sum \vec{\textbf{F}} = \vec{\textbf{F}}_1 + \vec{\textbf{F}}_2 + \dots = m \vec{\textbf{a}}
> $$
> - For **parametric systems**
> $$
> \left(\stackrel{+}\rightarrow\right)\: \sum F_x = m a_x
> $$
> $$
> \left(\stackrel{+}\uparrow\right)\: \sum F_y = m a_y
> $$
> In this case the *parametric system* is a standard [Cartesian](Motion%20in%20Cartesian%20Coordinates.md) $x$, $y$ coordinate system, but the same equations apply for [normal-tangent systems](Motion%20in%20Normal-Tangent%20Coordinates.md), and for [polar coordinates](Motion%20in%20Polar%20Coordinates.md) as well.

---

- ***[[Rigid Body Mechanics]]***

---
__[Home](Introduction%20to%20Dynamics%20I.md)__

---
_Status:_ #ripe #missingLink 

---
# Based On:
1. J. L. Meriam, L. G. Kraige, J. N. Bolton, *Engineering Mechanics Dynamics*, 8th ed, US.


[^impos1]: Solving with conservation of energy may be impossible because there are too many unknown properties in the resulting equations, or because an impact is present that deforms the body in such a way that a non-negligible amount of chemical energy is lost in the material. We cannot easily compute the amount of chemical energy expended during an impact and for this reason we say that conservation of energy does not hold in these situations.
[^impos2]: Solving with impulse and momentum may be impossible because there are too many unknown properties in the resulting equations.