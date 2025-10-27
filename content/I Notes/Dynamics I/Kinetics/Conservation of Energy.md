---
title: "Conservation of Energy"
draft: false
---
tags: [[dynamics]], [[energy balance]], [[kinetics]]     <br>18-10-2025

---
# Conservation of Energy
To solve a system with the least amount of effort
1. Try solving with **conservation of energy**.
2. If **1.** is not possible[^impos1], try solving with **[impulse and momentum](Impulse%20and%20Momentum%20for%20(Rigid)%20Bodies)**.
3. If **2.** is not possible[^impos2], try solving by **[integrating the equations of motion](Modeling%20Rigid%20Body%20Dynamics.md)**.

Following this list ensures that you spend the least amount of time possible on solutions.


### Interpretation
Energy is always conserved[^erm], but it can change form. We can use energy to hoist a weight up, increasing it's potential energy. When releasing this weight the potential energy is converted to kinetic energy. <br>In the treatment of dynamics we compare the energy of state $a$ to the energy of state $b$ to find how the energy changed form.



### Mathematical Formulation
Because energy is conserved, the energy of state 1 has to be equal to that of state 2.  Because dynamics considers motion, the most frequently used formula is
$$
E_{k1} + U = E_{k2}
$$
Where $E_k$ is the kinetic energy and $U$ is a collection of energies that cause the kinetic energy to change. When we consider a car, driving away from it's parking spot the beginning kinetic energy is 0, and the kinetic energy of state 2 is entirely a result of the [work](Work) that the engine delivered. In that case the only term we substitute for $U$ would be $W$ for the sum of the work terms, but in general there may be more energies that can change the state, such as a release of chemical energy. <br>If an object is deformed significantly, during for example a short impact, then a release of **chemical energy** is not negligible, and the above **equation doesn't hold** for the treatment of dynamics, because computing this is out of scope for most applications. In these cases it is advised to use [impulse and momentum](Impulse%20and%20Momentum%20for%20Particles.md) instead, if possible. <br><br>In a general case we make an **energy balance**, where we have
$$
\sum E_1 + U = \sum E_2
$$
In place of $E$ we can put in any energy that can change form, such as spring energy, potential energy or kinetic energy. In place of $U$ we put energies that do not change form but instead directly cause a change in energy of a state, such as the work. <br>An example using the energy balance is given below.

>[!note] Sign of Work
> The sign of work is positive if the force that causes the work points in the direction of the motion. If the force opposes the motion than work is negative. 
> As such the work done by friction will always be negative.



##### Example - Finding Air Resistance
Building on the example with the weight in the interpretation, we know that a falling object speeds up throughout it's trajectory, until a certain point when the critical speed has been reached. Due to air resistance the speed of the object maximizes eventually. To find out at what amount of air resistance this occurs, we can make up an *energy balance*. We compare all the energies that are present at state 1 to those that are present at state 2.
$$
E_{k 1} + E_{p1} + W_\text{air} = E_{k2} + E_{p2}
$$
Because the speed is constant the kinetic energy $E_{k}$ is the same in both cases, and we can remove it from the equation. If we put our reference point at the second state the potential energy $E_{p}$ at the second state is 0 because the height there is 0. As a result we have
$$
E_{p1} + W_\text{air} = 0 \qquad \Rightarrow \qquad W_\text{air} = -E_{p1}
$$
As a result we see that the [work](Work) that the air resistance does has to be equal to the change in potential energy. Notice the negative sign for the work indicates that the friction works in the opposite direction of the motion of the weight. To solve the air resistance we realize that the displacement $s$ is the same as the height $h$ and write
$$
F_\text{air} \Delta s = -mg \Delta h \qquad \Rightarrow \qquad F_\text{air} = - \frac{mg \Delta h}{\Delta s} = -mg
$$
This process allowed us to solve for the air resistance without integrating from the equations of motion. If a system is solvable using the conservation of energy then using this will be the quickest way to find a solution.



### Inventory
> [!abstract] Inventory of the Formulas
> - For a **change in kinetic energy**
> $$
> E_{k1} + U = E_{k2}
> $$
> - **Energy balance**
> $$
> \sum E_1 + U = \sum E_2
> $$
> - For the **work**
> $$
> W = \vec{\textbf{F}} \Delta \vec{\textbf{s}}
> $$


### Expressions for Energies

| Energy                                             | Expression                    | Unit Explanation                                                                                                                |
| -------------------------------------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| **Translational kinetic energy**                   | $$E_k = \frac{1}{2} mv^2$$    | $m$ is the mass<br>$v$ is the velocity                                                                                          |
| **Potential energy**                               | $$E_p = mg\Delta h$$          | $m$ is the mass<br>$g$ is the gravitational acceleration<br>$h$ is the height difference compared to some reference point       |
| **Rotational kinetic energy**                      | $$E_k = \frac{1}{2}I \omega$$ | $I$ is the [mas moment of inertia](Inertia%20-%20Mass%20Moment.md)<br>$\omega$ is the [angular velocity](Angular%20Velocity)       |
| **Spring energy**, or **potential elastic energy** | $$E_{el} = \frac{1}{2}Cu^2 $$ | $C$, or $k$ is the spring constant<br>$u$, or $x$ is the elongation of the spring, as compared to it's relaxed state[^example]. |
| **Work**                                           | $$W = F\Delta s$$             | $F$ is the [work](Work)<br>$\Delta s$, or $s$ is the displacement when going from state 1 to 2.                                 |




---
__[Home](Introduction%20to%20Dynamics%20I.md)__

---
_Status:_ #ripe

---
# Based On:
1. Jeff Hanson, _Dynamics: Lesson 23 - Work and Energy Example Problem_, 2-2020, US, [link](https://youtu.be/TVGUVPoYmfE?si=Lp2nbN8LV4r55B85).
2. Jeff Hanson, _Dynamics: Lesson 24 - Work and Energy Balance Hard Example_, 2-2022, US, [link](https://youtu.be/nYwpY3Lk5N0?si=-z8fF3Ds21okTVfP).
3. Jeff Hanson, _Dynamics: Lesson 25 - Work and Energy Balance with Power and Efficiency_, 3-2022, US, [link](https://youtu.be/ggS4eq1GrJY?si=nF7UwcNlGPUOvG2C).
4. Wikipedia, _Conservation of energy_, [link](https://en.wikipedia.org/wiki/Conservation_of_energy).

[^erm]: Technically speaking, on the timescale of universes, energy decays slowly, but in the timescale of our earth this decay is so minute that energy can be assumed to be conserved without *any* risk of error.
[^example]: For an example of how to use spring energy in a computation, see [this video by Jeff Hanson](https://youtu.be/TVGUVPoYmfE?si=qg1Ze3MWrgXAJjt6).


[^impos1]: Solving with conservation of energy may be impossible because there are too many unknown properties in the resulting equations, or because an impact is present that deforms the body in such a way that a non-negligible amount of chemical energy is lost in the material. We cannot easily compute the amount of chemical energy expended during an impact and for this reason we say that conservation of energy does not hold in these situations.
[^impos2]: Solving with impulse and momentum may be impossible because there are too many unknown properties in the resulting equations.