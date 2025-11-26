---
title: Lagrangian Mechanics
draft: false
---
tags: [[dynamics]], [[integrals]], [[differentials]]     <br>18-11-2025

---
# Lagrangian Mechanics

### Interpretation
**Lagrangian mechanics** offers a way of solving dynamics problems (finding the [equations of motion](Rigid%20Body%20Motion)) without the involvement of vectors and the directions of [forces](Force). This makes it possible to solve [double pendulum problems](https://en.wikipedia.org/wiki/Double_pendulum) with relative ease when compared to **[Newtonian mechanics](Particle%20Mechanics.md)**, because there is no need to determine the exact direction and angles of the forces. To accomplish this energies are used instead of forces. <br>The formulation of the equations explored below are derived from the principal of least *action*. This principle states that for any system which meets the following 2 conditions[^1] the action is minimized:
1. Energy is conserved
2. Energy is the same for all paths

 In a general case[^2] it is true that energy is conserved, but it is important to realize that for the scope of dynamics problems not all energy flows can reasonably be accounted for. For example the conversion of energy into heat due to friction. This is why Lagrangian mechanics is *mostly* used to model **conservative systems**, systems where purely mechanical energies - such as kinetic and potential energy - are conserved.
 
 > [!warning] Note
 >Lagrangian mechanics is mostly used to model conservative systems, systems where purely mechanical energies - such as kinetic and potential energy - are conserved.

### Mathematical Formulation
Lagrangian mechanics offer a way of finding the [equations of motion](Rigid%20Body%20Motion) without using [force](Force) vectors. This formulation relies on two equations:
1. The **[Euler-Lagrange equation](#1.%20The%20Euler-Lagrange%20Equation)**
2. The **[Lagrangian](#2.%20The%20Lagrangian)**

To find the equations of motion you will find the Lagrangian first, and then substitute it into the Euler-Lagrange equation. Despite this we will explore the Euler-Lagrange equation first.
#### 1. The Euler-Lagrange Equation
The Euler-Lagrange equation is as follows[^3]:
$$
\frac{\partial L}{\partial q_i} - \frac{d}{dt} \left( \frac{\partial L}{\partial \dot{q}_i} \right) = 0
$$
$L$ is the *Lagrangian* which is discussed below, and $q_i$ is usually referred to as the *generalized coordinate*, meaning $q$ can assume **any coordinate** that is relevant to our system. To make this concrete, say we have a system where our motion depends on only two coordinates, namely some angle $\theta$ and some distance $l$. In this example we can formulate the Euler-Lagrange equation in two ways that both hold true at the same time, namely
$$
\frac{\partial L}{\partial \theta} - \frac{d}{dt} \left( \frac{\partial L}{\partial \dot{\theta}} \right) = 0 \qquad \qquad q_1 = \theta
$$
$$
\frac{\partial L}{\partial l} - \frac{d}{dt} \left( \frac{\partial L}{\partial \dot{l}} \right) = 0 \qquad \qquad q_2 = l
$$
We can understand the inclusion of $q$ as a way to generalize the Euler-Lagrange equation, and it allows us to create the equations of motion for every *free direction*. <br>We have to choose directions for $q$ in which the motion is **unconstrained**. If it is constrained in that direction the derivatives will return 0. Furthermore, we have to make sure that the variables we choose to substitute into $q$ are **independent variables**, if they are not the math of the derivatives becomes messy. 

>[!note]
> $q$ can be substituted with any variable representing a direction along which there *can* be motion. This means that $q$ has to be an **independent variable**, it cannot be a function of, or depend on another variable, and the motion cannot be constrained in that direction. 
> 

For those that are interested in the **derivation** of the Euler-Lagrange equation, I recommend watching [this great video by Faculty of Khan](https://youtu.be/sFqp2lCEvwM?si=AnHKaxgY--oF6vdG). I fear that the exact derivation is out of scope for this article, and the derivation here is done in such a way that it explains the process better than any piece of text ever could.


##### Amendments for Nonconservative Systems 
The above formulation for the Euler-Lagrange equation can be used to understand for example mass-spring systems. As a result of [the derivation of the Lagrangian](derivation%20Lagrangian%20from%20least%20action%20by%20Veritasium) these systems *cannot have damping*. The damping in springs is caused by viscous friction of the fluid in the damper and this is a nonconservative energy transfer. <br>Nevertheless it is possible to **amend** the standard formulation of the Euler-Lagrange equation[^9][^10]. We set the equation not equal to 0, but to the derivative of *Rayleigh's dissipation function*, $\mathcal{D}$, with respect to the velocity.
$$
\frac{\partial L}{\partial q_i} - \frac{d}{dt} \left( \frac{\partial L}{\partial \dot{q}_i} \right) = - \frac{\partial \mathcal{D}}{\partial \dot{q}_i}
$$
The Rayleigh dissipation function has an expression 
$$
\mathcal{D} = \frac{1}{2} d\dot{u}^2
$$
Where $u$ is the elongation of the damper/spring, thus $\dot{u}$ is the speed of this elongation. Furthermore $d$ is the *damping coefficient*. <br><br>It is further possible to introduce the **[work](Work) done by external [forces](Force)** to the Euler-Lagrange equation[^10]. <br>We define the work as the amount of energy generated by some force $F$ over a certain distance $s$.
$$
W = F s
$$
We introduce the work to the first-mentioned equation by taking it's derivative to the position[^10].
$$
\frac{\partial L}{\partial q_i} - \frac{d}{dt} \left( \frac{\partial L}{\partial \dot{q}_i} \right) = \frac{\partial W}{\partial q_i} - \frac{\partial \mathcal{D}}{\partial \dot{q}_i}
$$
> [!note]
> This derivative of the [work](Work) with respect to the position is sometimes also abbreviated by calling it $Q_i$, the *generalized force*[^9][^10].
> $$
> Q_i = \frac{\partial W}{\partial q_i}
> $$
> The formulation for the new amended Euler-Lagrange equation becomes
> $$
> \frac{\partial L}{\partial q_i} - \frac{d}{dt} \left( \frac{\partial L}{\partial \dot{q}_i} \right) = Q_i - \frac{\partial \mathcal{D}}{\partial \dot{q}_i}
> $$

---
These amendments are presented nonrigorously, for a more complete introduction to the *Rayleigh dissipation function*, please refer to [this Libretext article](https://phys.libretexts.org/Bookshelves/Classical_Mechanics/Variational_Principles_in_Classical_Mechanics_(Cline)/10:_Nonconservative_Systems/10.04:_Rayleighs_Dissipation_Function). The *generalized force* included here is technically not an amendment to the Euler-Lagrange equation, but to the Lagrangian instead[^7].
$$
L = T- V + W
$$
This can be found by amending the first expression for the Lagrangian found in [this derivation](derivation%20Lagrangian%20from%20least%20action%20by%20Veritasium) and replacing $E_{\text{rest}}$ with the negative of the work, $- W$.
#### 2. The Lagrangian
As stated in the [interpretation](#Interpretation), **for the purposes of dynamics**, Lagrangian mechanics concern only conservative systems. Systems where external [forces](Force) (not gravity) or friction play a significant role using Lagrangian mechanics to find the equations of motions is undesirable, though still possible[^6][^7]. <br>The Lagrangian, $L$, is defined as
$$
L = T - V \qquad \text{or} \qquad L = E_{\text{kinetic}} - E_{\text{potential}}
$$
Where $T$ is thus the kinetic energy, and $V$ is the potential energy, stored in a spring or a height difference. <br>The Lagrangian doesn't have an immediate analogue that can be used to intuitively explain it's meaning in physical terms. If you are interested, an intriguing way of showing some interpretation of the Lagrangian can be found [in this video](https://youtu.be/_Hp11d1Z-78?si=_ogKfNW89D27ufx-&t=596). <br>As a result of [it's derivation](derivation%20Lagrangian%20from%20least%20action%20by%20Veritasium), this formulation of the Lagrangian only holds when the following **two** conditions are met, namely:
1. ***The time, $t$, is fixed.***
2. ***There are no nonconservative energies.***

In the case of nonconservative energies, the Euler-Lagrange equation is amended as discussed above.

---
The Lagrangian can be derived immediately from the principle of least action. This route of derivation is shown [here](derivation%20Lagrangian%20from%20least%20action%20by%20Veritasium). The same operations can be seen from minute 19:36 to 23:16 in [this video by Veritasium](https://youtu.be/Q10_srZ-pbs?si=UoO_SDOIwTMj3ijm&t=1176).<br>Alternatively it can be derived from d'Alambert's principle[^5], which follows immediately from Newtonian mechanics[^4]. This route of derivation is lengthier but more closely connected to previous methodologies, if you are interested in an explanation, I suggest [this video by Dr. Jorge S. Diaz](https://youtu.be/QbnkIdw0HJQ?si=55S9mphOSDtjNyIB).









### Inventory
> [!abstract] Inventory of the Formulas
> - The **Euler-Lagrange equation**
> $$
> \frac{\partial L}{\partial q_i} - \frac{d}{dt} \left( \frac{\partial L}{\partial \dot{q}_i} \right) = 0
> $$
> - The Euler-Lagrange equation for **nonconservative systems**
> $$
> \frac{\partial L}{\partial q_i} - \frac{d}{dt} \left( \frac{\partial L}{\partial \dot{q}_i} \right) = \frac{\partial W}{\partial q_i} - \frac{\partial \mathcal{D}}{\partial \dot{q}_i}
> $$
> - **The Lagrangian**
> $$
> L = T - V
> $$


---
__[Home](WikiQuedia/Mechanical%20Engineering/3%20-%20Tags/Example.md)__ %%NEEDS HOMEPAGE%%

---
_Status:_ #sprout #missingLink

---
# Based On:
1. J. Schilder, B. de Gooijer, *Mechanical Vibrations*, 4-2019, NL.
2. Abide By Reason, *Lagrangian vs Newtonian Mechanics*, 8-2025, US, [link](https://youtu.be/_Hp11d1Z-78?si=txN1zi39OS7BR9aB).
3. Dot Physics, *Introduction to Lagrangian Mechanics*, 10-2020, US, [link](https://youtu.be/8UtnDaGHpq0?si=Xkp2VzqPJIdUxMCK).
4. Dr. Jorge S. Diaz, *Lagrangian Mechanics: when theoretical physics got real*, 10-2025, DE, [link](https://youtu.be/QbnkIdw0HJQ?si=CVUt-fFy3QNNEmtZ).
5. Faculty of Khan, *Derivation of the Euler-Lagrange Equation | Calculus of Variations*, 7-2017, CA, [link](https://youtu.be/sFqp2lCEvwM?si=Umv1531_QYUZEz3Z). %%HOLY GOATED FIJNE DERIVATION W%%
6. Wikipedia, _Lagrangian mechanics_, [link](https://en.wikipedia.org/wiki/Lagrangian_mechanics).
7. Veritasium, _The Closest We’ve Come to a Theory of Everything_, 10-2024, US, [link](https://youtu.be/Q10_srZ-pbs?si=8RtVLrkO-7At9LbE).
8. D. Cline, *10.4: Rayleigh’s Dissipation Function*, US, [link](https://phys.libretexts.org/Bookshelves/Classical_Mechanics/Variational_Principles_in_Classical_Mechanics_(Cline)/10:_Nonconservative_Systems/10.04:_Rayleighs_Dissipation_Function).


%%
also nice for nonconservative:
1. https://physics.stackexchange.com/questions/153302/modeling-external-forces-in-lagrangian-dynamics
2. https://physics.stackexchange.com/questions/342294/euler-lagrange-equations-with-non-conservative-force-example
3. https://phys.libretexts.org/Bookshelves/Classical_Mechanics/Variational_Principles_in_Classical_Mechanics_(Cline)/10:_Nonconservative_Systems/10.04:_Rayleighs_Dissipation_Function <- inclusief dissipative rayleigh dinky. voor onze toepassing simplificeert dit tot $$\frac{d}{dt}\frac{\partial L}{\partial \dot{q}} - \frac{\partial L}{\partial q} + \frac{\partial \mathcal{D}}{\partial \dot{q}} = 0$$, of geschreven als $$\frac{d}{dt}\frac{\partial L}{\partial \dot{q}} - \frac{\partial L}{\partial q} + \frac{\partial \mathscr{R}}{\partial \dot{q}} = 0$$ $$\frac{d}{dt}\frac{\partial L}{\partial \dot{q}} - \frac{\partial L}{\partial q} = -  \frac{\partial \mathscr{R}}{\partial \dot{q}}$$
voor de rayleigh functie $\mathcal{D}$ geldt $\mathcal{D} = \frac{1}{2} dv^2$, of $\mathcal{D} = \frac{1}{2} d\dot{u}^2$ met $u$ de uitrekking en dus $\dot{u}$ de snelheid (in de richting) van die uitrekking
4. bla
%%


[^1]: Veritasium, _The Closest We’ve Come to a Theory of Everything_, 15:02, 10-2024, US, [link](https://youtu.be/Q10_srZ-pbs?si=MQ8hsqYrc2Z6AGrx&t=902).
[^2]: Energy is not conserved when dealing with time spans like the age of the universe, [according to veritasium](https://youtu.be/lcjdwSY2AzM?si=0SrCC_Sjly3i0L2P), but for our application this is irrelevant.
[^3]: Faculty of Khan, *Derivation of the Euler-Lagrange Equation | Calculus of Variations*, 7-2017, CA, [link](https://youtu.be/sFqp2lCEvwM?si=Umv1531_QYUZEz3Z). 
[^5]: Wikipedia, *d'Alambert's principle*, [link](https://en.wikipedia.org/wiki/D%27Alembert%27s_principle).
[^4]: Dr. Jorge S. Diaz, *Lagrangian Mechanics: when theoretical physics got real*, 9:06, 10-2025, DE, [link](https://youtu.be/QbnkIdw0HJQ?si=vszNr36Aw-I7cfpf&t=546).
[^6]: Physics StackExchange, *Euler-Lagrange equations with non-conservative force (example)*, [link](https://physics.stackexchange.com/questions/342294/euler-lagrange-equations-with-non-conservative-force-example).
[^7]: Physics StackExchange, *Modeling external forces in Lagrangian dynamics*, [link](https://physics.stackexchange.com/questions/153302/modeling-external-forces-in-lagrangian-dynamics).
[^8]: Abide By Reason, *Lagrangian vs Newtonian Mechanics*, 8-2025, US, [link](https://youtu.be/_Hp11d1Z-78?si=txN1zi39OS7BR9aB).
[^9]: D. Cline, *10.4: Rayleigh’s Dissipation Function*, US, [link](https://phys.libretexts.org/Bookshelves/Classical_Mechanics/Variational_Principles_in_Classical_Mechanics_(Cline)/10:_Nonconservative_Systems/10.04:_Rayleighs_Dissipation_Function).
[^10]: J. Schilder, B. de Gooijer, *Mechanical Vibrations*, *4.2 Non-conservative systems*, 4-2019, NL.