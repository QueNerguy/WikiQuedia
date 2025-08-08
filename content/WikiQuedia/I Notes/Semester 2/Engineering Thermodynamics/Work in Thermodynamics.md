---
title: "Work in Thermodynamics"
draft: false
---
tags: [[thermodynamics]], [[differentials]], [[integrals]], [[path variable]]     <br>15-07-2025

---
# Work in Thermodynamics
If the meaning of some of the terms used on this page is unknown or ambiguous, please refer back to the [introductory page](Introduction%20to%20Engineering%20%20Thermodynamics) where a lot of the communication for thermodynamics is laid out.
### Interpretation
In thermodynamics, [work](Work), $W$, is an *extensive property* and a measure of *energy transfer* between two systems, produced by changing the size of the system. Work is only done when the volume of the system changes, like a piston in a combustion engine, or when a component is set in motion, like in a compressor%%LINKJE%%.<br>The reason for this is that work is done over a distance. Thus if the system doesn't travel in any way, no work was done. <br>As work is a measure of __change__ in energy, it is a property that is not inherent to a certain system state. Instead, it only emerges when comparing two thermodynamic states, where work would be exchanged to get from state $a$ to state $b$. <br>Work is a *path variable*, a variable whose value depends only on the path the system took to get from state $a$ to state $b$, unlike state variables, whose value only depends on the current state. The reason this is the case is that there are two ways a system may lose energy to get back to it's original state.
1. Produce **[heat](Heat)**
2. Produce **work**

The system may produce *only* work to get from state $a$ to state $b$, but, to get back to state $a$, the system may instead *only* absorb heat. In this case the work produced would not go back to 0. The amount of work is thus dependent on how the system progresses, not just on the state of the system. This is what makes work a *path variable*.
$$
\oint \delta W \ne 0
$$
- Work is **positive** when it is **done by** the system, as it flows **out of** the system.
### Mathematical Formulation
In thermodynamics [pressure](Pressure) is used instead of [force](Force) in the standard definition of [work](Work), because it is better suited to the systems that are being analyzed.
To use pressure in the mathematical definition of work we rewrite the formula for work by realizing that pressure is force over an area, $p = F/A$[^proof], and from there we get our more useful equation for work.
$$
W=\int p \cdot dV
$$
$$
\delta W = p dV
$$
Where $p$ is the pressure, and $V$ is the volume of the system. The inexact differential $\delta$ denotes that the work is _path variable_, not a state variable. <br>In _[control volumes](Introduction%20to%20Engineering%20%20Thermodynamics#Systems)_, The volume is constant by definition, we would have 0 work as $\Delta V$ would be 0. <br>Because no volume change occurs, work can only be done *onto* the system by the surroundings. 
#### Rate of Work
For the rate of work, $\dot{W}$, also known as the [power](Power), we have
$$
\dot{W} = \frac{\delta W}{dt} = \frac{W}{t}
$$
$$
\dot{W} = \frac{p dV}{dt} = \frac{\int p dV}{t}
$$
As work is an energy, it's time [derivative](Differentiation) is a measure of how much energy is produced per unit of time, or the power, with a unit $\text{J/s}$ or $\text{W}$[^watt].














---
__[Home](!%20Engineering%20Thermodynamics%20Learning%20Overview)__

---
_Status:_ #sprout #missingLink

---
# Based On:
[^proof]:  $$ W = \int \vec{F} \cdot d \vec{s} = \int \vec{p} \cdot A \cdot d\vec{s} = \int \vec{p} \cdot d\vec{V} $$
[^watt]: [Wikipedia - Watt](https://en.wikipedia.org/wiki/Watt)
1. N. Basson, _Engineering Thermodynamics I Course Reader_, NL, [link](https://canvas.utwente.nl/courses/16111/files/4696974?wrap=1).
2. Wikipedia, _Work (thermodynamics)_, [link](https://en.wikipedia.org/wiki/Work_(thermodynamics)#Formal_definition).


