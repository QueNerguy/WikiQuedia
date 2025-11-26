---
title: Rigid Body Mechanics
draft: false
---
tags: [[dynamics]], [[kinetics]], [[rigid body]], [[vector math]], [[sums]]      <br>17-09-2025

---
# Rigid Body Mechanics
To solve a system with the least amount of effort
1. Try solving with **[conservation of energy](Conservation%20of%20Energy.md)**.
2. If **1.** is not possible[^impos1], try solving with **[impulse and momentum](Impulse%20and%20Momentum%20for%20(Rigid)%20Bodies.md)**.
3. If **2.** is not possible[^impos2], try solving by **integrating the equations of motion**.

Following this list ensures that you spend the least amount of time possible on solutions.


### Interpretation
When [forces](Force) act on a body, this body may start to move, as long as the sum of the forces $\ne$ 0. To model rigid bodies we want to understand how the motion of a rigid body relates to the forces and [moments](Moment) that act on it, and vice-versa. <br>Modeling rigid bodies is a continuation of [modeling particles](Particle%20Mechanics.md), with the introduction of moments and rotations to the behaviors of a system. 
### Mathematical Formulation
To describe the way a body moves when subjected to external [forces](Force), we use Newton's equations. Unlike in *Statics*%%==LINKJE STATICA==%%, where no motion occurred and we could thus say $\sum \vec{\textbf{F}} = 0$ and $\sum \vec{\textbf{M}} = 0$, in *dynamics* we do account for motion, and our equations thus become
$$
\sum \vec{\textbf{F}} = \vec{\textbf{F}}_1 + \vec{\textbf{F}}_2 + \dots = m \vec{\textbf{a}}
$$
$$
\sum \vec{\textbf{M}} = \vec{\textbf{M}}_1 + \vec{\textbf{M}}_2 + \dots = I\vec{\pmb{\alpha}}
$$
Our **parametric equations** (for a standard oriented 2D [Cartesian system](Motion%20in%20Cartesian%20Coordinates.md)) would subsequently be
$$
\left(\stackrel{+}\rightarrow\right)\: \sum F_x = m a_x
$$
$$
\left(\stackrel{+}\uparrow\right)\: \sum F_y = m a_y
$$
$$
\left(\stackrel{+}\circlearrowleft\right)\: \sum M_G = I_G \alpha
$$
- The accelerations are the accelerations at the **center of mass** *or* the **[center of rotation](Rigid%20Body%20Motion.md#Instant%20Center%20of%20Rotation)**[^com] of the body.

The positive direction is the positive direction for both the left hand- and the right hand side of this equation, thus a positive force points to the right, and a positive acceleration vector does too. <br>To understand the exact motion of the particle, we would solve for the acceleration from these equations, and use [particle kinematics](Particle%20Motion.md) to find the position. Because of this process, the equations above are sometimes referred to as the **equations of motion**, or **EOM**s. <br><br>It is sometimes advantageous to sum the moments not about the center of mass or the center of rotation, but around some point $P$. In this case the moment equation is amended because we are deviating form the expression for the rotational inertia. The correcting term $\vec{\pmb{\rho}}_{P/G} \times m \vec{\textbf{a}}_P$ is added to the equation, where $\vec{\pmb{\rho}}_{P/G}$ denotes the distance from our random point $P$ to the center of mass $G$ (or the ICR $O$) and $\vec{\textbf{a}}_P$ gives the acceleration at our point $P$.<br>Thus, for the sum of the **moments about any point $P$**, we have
$$
\sum \vec{\textbf{M}}_P = \bar{I}_P \vec{\pmb{\alpha}} + \vec{\pmb{\rho}}_{P/G} \times m \vec{\textbf{a}}_P
$$
We can see that if the point $P$ coincides with the center of mass $G$, or the ICR $O$, the term $\vec{\pmb{\rho}}_{P/G}$ becomes 0, and the corrective term disappears, giving back the original equation.
%%
Similarly, in the case that our chosen point $P$ is our **coordinate system's center**, we know that our chosen point has *zero acceleration*, thus $\vec{\textbf{a}}_p = 0$, and the equation reduces once again to
$$
\sum \vec{\textbf{M}}_P = \bar{I}_P \vec{\pmb{\alpha}}
$$
%%


%%

---

In order for us to [model the dynamics of a rigid body](Rigid%20Body%20Motion.md), we need to understand the motion as a result of [forces](Force)[^find], and that as a result of [moments](Moment). To model the motion, coming from a set of moments and forces, we need to relate these forces and moments to the accelerations.<br>The way to relate the moment to the _[angular acceleration](Angular%20Acceleration)_ follows quickly from the way that the [rotational inertia](Inertia%20-%20Mass%20Moment.md) was defined, namely as the sum of the moments around the axis of rotation, excluding the term for angular acceleration. <br>For the sum of the **moments about our [ICR](Rigid%20Body%20Motion.md#Instant%20Center%20of%20Rotation)**, $G$[^G], we have
$$
\sum \vec{\textbf{M}}_G = \bar{I}_G \vec{\pmb{\alpha}}
$$
For the sum of the moments around any point $P$, we need to amend this equation, as this deviates form our standard equation for the rotational inertia. The correcting term $\vec{\pmb{\rho}}_{P/G} \times m \vec{\textbf{a}}_P$ is added to the equation, where $\vec{\pmb{\rho}}_{P/G}$ denotes the distance from our random point $P$ to the ICR $G$, and $\vec{\textbf{a}}_P$ gives the acceleration at our point $P$.<br>Thus, for the sum of the **moments about any point $P$**, we have

$$
\sum \vec{\textbf{M}}_P = \bar{I}_P \vec{\pmb{\alpha}} + \vec{\pmb{\rho}}_{P/G} \times m \vec{\textbf{a}}_P
$$
And in parametric form, where we write the distance from $P$ to $G$ as $d_{P/G}$ instead of $\vec{\pmb{\rho}}_{P/G}$, we have
$$
\left(\stackrel{+}\circlearrowleft\right)\: \sum M_P = \bar{I}_P \alpha + m a_P d_{P/G}
$$
We can see that if the point $P$ coincides with the ICR the term $\vec{\pmb{\rho}}_{P/G}$ becomes 0, and the corrective term disappears, giving back the original equation.<br>Similarly, in the case that our chosen point $P$ is the same point as our **coordinate system's center** ($O$), we know that our chosen point has *zero acceleration*, and the equation reduces once again to
$$
\sum \vec{\textbf{M}}_O = \bar{I}_O \vec{\pmb{\alpha}}
$$
%%


>[!warning]
>Before finding the *equations of motion* **always construct a free body diagram**! This helps avoid mistakes and choose correct signs when using the parametric equations.
>The use of FBDs is the most important step in solving and understanding these systems.


##### Alternative Coordinate Systems
The equations $\left(\stackrel{+}\rightarrow\right)\: \sum F_x = m \cdot a_x$ and $\left(\stackrel{+}\uparrow\right)\: \sum F_y = m \cdot a_y$ also hold for the [normal-tangent coordinate system](Motion%20in%20Normal-Tangent%20Coordinates.md), and in the [polar coordinate system](Motion%20in%20Polar%20Coordinates.md). The only difference would be the expression that we can substitute $a_x$ and $a_y$ with. Moreover, the expression for the [moment](Moment) remains unchanged because a rotation is defined positive counter-clockwise and otherwise analogous to the [Cartesian coordinate system](Motion%20in%20Cartesian%20Coordinates).
1. For the ***[Normal-Tangent coordinate system](Motion%20in%20Normal-Tangent%20Coordinates.md#Acceleration):***
$$
\left(\stackrel{+}\rightarrow\right)\: \sum F_n = m \cdot a_n = m \frac{v^2}{\rho}
$$
$$
\left(\stackrel{+}\uparrow\right)\: \sum F_t = m \cdot a_t = m \dot{v}
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





### Inventory
> [!abstract] Inventory of the Formulas
> - For a **translation** %%[^particle]%%
> $$
> \sum \vec{\textbf{F}} = m \vec{\textbf{a}}
> $$
> $$
> \left(\stackrel{+}\rightarrow\right)\: \sum F_x = m a_x
> $$
> $$
> \left(\stackrel{+}\uparrow\right)\: \sum F_y = m a_y
> $$
> - For the **[moment](Moment) about the [ICR](Rigid%20Body%20Motion.md#Instant%20Center%20of%20Rotation)**
> $$
> \sum \vec{\textbf{M}}_G = \vec{\textbf{M}}_1 + \vec{\textbf{M}}_2 + \dots =\bar{I}_G \vec{\pmb{\alpha}}
> $$
> - For the **moment about any point $P$**
> $$
> \sum \vec{\textbf{M}}_P = \bar{I}_P \vec{\pmb{\alpha}} + \vec{\pmb{\rho}} \times m \vec{\textbf{a}}_P
> $$
> $$
> \left(\stackrel{+}\circlearrowleft\right)\: \sum M_P = \bar{I}_P \alpha + m a_P d
> $$
> ($\vec{\pmb{\rho}}$ indicates the distance from $P$ to $G$. Read: $\vec{\pmb{\rho}}_{P/G}$
> $d$ indicates the scalar distance from $P$ to $G$. Read: $d_{P/G}$)

---

- ***[[Particle Mechanics]]***

---
__[Home](Introduction%20to%20Dynamics%20I.md)__

---
_Status:_ #ripe #missingLink

---
# Based On:
1. J. L. Meriam, L. G. Kraige, J. N. Bolton, *Engineering Mechanics Dynamics*, 8th ed, US.
2. Khan Academy, *Rotational Inertia*, US, [link](https://www.khanacademy.org/science/in-in-class11th-physics/in-in-system-of-particles-and-rotational-motion/in-in-rotational-inertia-and-angular-second-law/a/rotational-inertia).


%%
[^find]: The explanation for this is given in the note on [particle dynamics](Particle%20Mechanics.md), but the physics applies for rigid bodies in the same way.
[^G]: $G$ is chosen because in the case of *unconstrained motion* the rotation takes place about the center of gravity, also usually referred to as $G$. This equation, however, also holds for *constrained motion*, where the [ICR](Rigid%20Body%20Motion.md#Instant%20Center%20of%20Rotation) is then denoted as $G$ as well for continuities' sake. 
[^particle]: The origin and the specifics about translation can be read in the note on [particle dynamics](Particle%20Mechanics.md).
%% 

[^impos1]: Solving with conservation of energy may be impossible because there are too many unknown properties in the resulting equations, or because an impact is present that deforms the body in such a way that a non-negligible amount of chemical energy is lost in the material. We cannot easily compute the amount of chemical energy expended during an impact and for this reason we say that conservation of energy does not hold in these situations.
[^impos2]: Solving with impulse and momentum may be impossible because there are too many unknown properties in the resulting equations.
[^com]: The equation for the sum of the  moments about the center of mass is <br>$$\left(\stackrel{+}\circlearrowleft\right)\: \sum M_G = I_G \alpha$$<br>And about the center of rotation, $O$ <br>$$\left(\stackrel{+}\circlearrowleft\right)\: \sum M_O = I_O \alpha$$