---
title: "Modeling Particle Dynamics"
draft: false
---
tags:      <br>12-09-2025

---
# Modeling Particle Dynamics

### Interpretation
When [forces](Force) act on a particle, this particle may start to move as long as the sum of the forces $\ne$ 0. To model particles we want to understand how the motion of a particle relates to the forces that act on it, and vice-versa. <br>It is important to note that particles aren't subject to rotations, and the [moment](Moment) is thus not considered in these models.

### Mathematical Formulation
To describe the way a particle behaves under external [forces](Force), we can sum all the forces together. Unlike in *statics*%%LINKJE STATICA%%, where no motion occurred and we could thus say $\sum \vec{\textbf{F}} = m \cdot \vec{\textbf{a}} = m \cdot 0 = 0$, in *dynamics* we do account for motion, and our equation becomes
$$
\sum \vec{\textbf{F}} = \vec{\textbf{F}}_1 + \vec{\textbf{F}}_2 + \dots = m \cdot \vec{\textbf{a}}
$$
Our **parametric equations** (for a standard oriented 2D [Cartesian system](Motion%20in%20Cartesian%20Coordinates)) would subsequently be
$$
\left(\stackrel{+}\rightarrow\right)\: \sum F_x = m \cdot a_x
$$
$$
\left(\stackrel{+}\uparrow\right)\: \sum F_y = m \cdot a_y
$$
The [moment](Moment) is not considered for particles, as particles aren't subject to rotations. <>To understand the exact motion of the particle, we would solve for the acceleration from these accelerations, and use [particle kinematics](Modeling%20Particle%20Motion) to find the position.





%%
$$
\left(\stackrel{+}\circlearrowleft\right)\: \sum M_o = I \cdot \alpha
$$
%%

### Inventory
> [!abstract] Inventory of the Formulas


---
__[Home](!%20Dynamics%20Learning%20Overview)__

---
_Status:_ #bud #missingLink 

---
# Based On:


