---
title: "Modeling Rigid Body Dynamics"
draft: false
---
tags: [[dynamics]], [[rigid body]], [[kinetics]], [[vector math]], [[sums]]      <br>17-09-2025

---
# Modeling Rigid Body Dynamics
To solve a system with the least amount of effort
1. Try solving with **[conservation of energy](Conservation%20of%20Energy)**.
2. If **1.** is not possible[^impos1], try solving with **[impulse and momentum](Impulse%20and%20Momentum%20for%20(Rigid)%20Bodies)**.
3. If **2.** is not possible[^impos2], try solving with **integrating the equations of motion**.

Following this list ensures that you spend the least amount of time possible on solutions.


### Interpretation
When [forces](Force) act on a body, this body may start to move, as long as the sum of the forces $\ne$ 0. To model rigid bodies we want to understand how the motion of a rigid body relates to the forces and [moments](Moment) that act on it, and vice-versa. <br>Modeling rigid bodies is a continuation of [modeling particles](Modeling%20Particle%20Dynamics), with the introduction of moments and rotations to the behaviors of a system. 
### Mathematical Formulation
In order for us to [model the dynamics of a rigid body](Modeling%20Rigid%20Body%20Motion), we need to understand the motion as a result of [forces](Force)[^find], and that as a result of [moments](Moment). To model the motion, coming from a set of moments and forces, we need to relate these forces and moments to the accelerations.<br>The way to relate the moment to the _[angular acceleration](Angular%20Acceleration)_ follows quickly from the way that the [rotational inertia](Inertia%20-%20Mass%20Moment) was defined, namely as the sum of the moments around the axis of rotation, excluding the term for angular acceleration. <br>For the sum of the **moments about our [ICR](Modeling%20Rigid%20Body%20Motion#Instant%20Center%20of%20Rotation)**, $G$[^G], we have
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



### Inventory
> [!abstract] Inventory of the Formulas
> - For a **translation**[^particle]
> $$
> \sum \vec{\textbf{F}} = m \cdot \vec{\textbf{a}}
> $$
> $$
> \left(\stackrel{+}\rightarrow\right)\: \sum F_x = m \cdot a_x
> $$
> $$
> \left(\stackrel{+}\uparrow\right)\: \sum F_y = m \cdot a_y
> $$
> - For the **[moment](Moment) about the [ICR](Modeling%20Rigid%20Body%20Motion#Instant%20Center%20of%20Rotation)**
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
__[Home](!%20Dynamics%20Learning%20Overview)__

---
_Status:_ #ripe

---
# Based On:
1. J. L. Meriam, L. G. Kraige, J. N. Bolton, *Engineering Mechanics Dynamics*, 8th ed, US.
2. Khan Academy, *Rotational Inertia*, US, [link](https://www.khanacademy.org/science/in-in-class11th-physics/in-in-system-of-particles-and-rotational-motion/in-in-rotational-inertia-and-angular-second-law/a/rotational-inertia).



[^find]: The explanation for this is given in the note on [particle dynamics](Modeling%20Particle%20Dynamics), but the physics applies for rigid bodies in the same way.
[^G]: $G$ is chosen because in the case of *unconstrained motion* the rotation takes place about the center of gravity, also usually referred to as $G$. This equation, however, also holds for *constrained motion*, where the [ICR](Modeling%20Rigid%20Body%20Motion#Instant%20Center%20of%20Rotation) is then denoted as $G$ as well for continuities' sake. 
[^particle]: The origin and the specifics about translation can be read in the note on [particle dynamics](Modeling%20Particle%20Dynamics).

[^impos1]: Solving with conservation of energy may be impossible because there are too many unknown properties in the resulting equations, or because an impact is present that deforms the body in such a way that a non-negligible amount of chemical energy is lost in the material. We cannot easily compute the amount of chemical energy expended during an impact and for this reason we say that conservation of energy does not hold in these situations.
[^impos2]: Solving with impulse and momentum may be impossible because there are too many unknown properties in the resulting equations.