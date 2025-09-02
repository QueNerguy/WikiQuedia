---
title: Enthalpy
draft: false
---
tags: [[thermodynamics]], [[differentials]], [[integrals]], [[state variable]]     <br>15-07-2025

---
# Enthalpy
If the meaning of some of the terms used on this page is unknown or ambiguous, please refer back to the [introductory page](Introduction%20to%20Engineering%20%20Thermodynamics) where a lot of the communication for thermodynamics is laid out.
### Interpretation
Enthalpy, $H$, is an *extensive property* that is a measure of how much energy is necessary for a system to reach it's current state. It is made up of the kinetic energy that is needed to give the molecules their energy and the energy that is necessary to withstand the outside pressure that wants it to collapse. As such it is made up of the [internal energy](Internal%20Energy) and the [work](Work%20in%20Thermodynamics) of the system.<br>Enthalpy describes only the energy necessary to retain the current state and is thus always present in any system, not just when comparing two thermodynamic states. This is true despite of the fact that it is made up of internal energy and work, both of which require comparing two systems. The reason this can still be the case is because both the internal energy and work compare from a [standard state](https://en.wikipedia.org/wiki/Standard_state), the zero state. <br>Because the energy necessary to create a system is independent of how the energy was transferred, enthalpy is a *state variable*. An increase in enthalpy is independent of the path the system took to get there. 
$$
\oint dH = 0
$$
### Mathematical Formulation
#### Real Gas
Enthalpy is made up of the [internal energy](Internal%20Energy) and the [work](Work%20in%20Thermodynamics) of the system. Because enthalpy is always present, not just when comparing two states, both the internal energy and work compare from a [standard state](https://en.wikipedia.org/wiki/Standard_state), the zero state. The internal energy present in enthalpy is thus the change in internal energy from 0 $\text{K}$ to the current state, and the work compares a 0 volume with the current volume. This is congruent with the definition of enthalpy as the amount of energy needed to reach it's current state[^mathfunny].
$$
H = U + W
$$
It is important to understand that this $U$ is not the same as the general definition for internal energy, but the change in internal energy from 0 $\text{K}$ to the current state, as mentioned before. The same goes for the work, $W$, above. <br>Therefore this formula is often instead rewritten[^mathfunny] as
$$
H = U + pV
$$
Because the _[thermo tables](ThermoTables.pdf)_ already use a [standard state](https://en.wikipedia.org/wiki/Standard_state), it is possible to substitute the tabulated values directly into the upper equation. <br>As a [total differential](Partial%20Differentiation#Total%20Derivative), enthalpy is defined as
$$
dH = dU + d(pV)
$$
Taking this [derivative](Differentiation) results in
$$
dH = dU + pdV + Vdp
$$
We can recognize $pdV$ as our definition for infinitesimal work, $\delta W$, but $Vdp$ is new. As this term isn't associated with a change associated with a change in volume, this isn't real work, but just a leftover from applying the chain rule[^vid1]. It doesn't have any predefined quantity associated with it, but it will play a role in further derivations, such as [entropy](Entropy). <br>With this, we may write
$$
dH = dU + W + Vdp
$$
#### Ideal Gas
Finding the enthalpy for an ideal gas is significantly easier, as we can use the ideal gas approximation of the [internal energy](Internal%20Energy) in the definition of enthalpy, as well as the ideal gas law%%LINKJE%%. These equations allow us to rewrite the enthalpy in measurable quantities[^mathproof2], as
$$
dH = mc_pdT
$$
From this [differential form](Partial%20Differentiation#Total%20Derivative) we can construct the general the remaining equations for the concrete change in enthalpy, and enthalpy itself.
$$
\Delta H = m \int c_p dT
$$
$$
H = mc_p T
$$
Usually this simplifies to just $\Delta H = mc_p \Delta T$, because in most cases $c_p$ is assumed to be constant, allowing for immediate evaluation of the integral. This assumption becomes inaccurate for larger temperature ranges. <br>These equations only hold true for *ideal gases* because of the simplification we made using the ideal gas approximation for internal energy and the ideal gas law. For *real gases* it is useful to find the values for the specific enthalpy from the _[thermo tables](ThermoTables.pdf)_.

#### Inventory
> [!abstract] Inventory of the Formulas
> - For an **ideal gas**
> $$
> H = mc_p T
> $$
> $$
> dH = mc_p dT
> $$
> $$
> \Delta H = m \int c_p dT
> $$
> - For a **real gas**
> $$
> H = U + pV
>$$
>$$
> dH = dU + pdV + Vdp
>$$


















---
__[Home](!%20Engineering%20Thermodynamics%20Learning%20Overview)__

---
_Status:_ #sprout #missingLink

---
# Based On:
[^mathfunny]: This can also be shown with math. When taking enthalpy as the sum of [internal energy](Internal%20Energy) and [work](Work%20in%20Thermodynamics) we get<br>$$ H = \Delta U + W $$<br>When comparing from the zero state, this results in <br>$$ H = (U_1 - U_0) + (W_1 - W_0) = (mc_{\nu}T_1 - mc_{\nu}T_0) + (pV_1 - pV_0) $$<br>As $T_0$ and $V_0$ are both 0, we get<br>$$ H = mc_{\nu}T_1 + pV_1 = U_1 + W_1 $$<br>Seeing as the [tabulated values](ThermoTables.pdf) for internal energy already use a [standard state](https://en.wikipedia.org/wiki/Standard_state), we can fill in the $U$ values directly from the tables.
[^vid1]: [Less Boring Lectures - REFERENCE ENTROPY and Specific Heats in 12 Minutes!](https://www.youtube.com/watch?v=kinE5eTVgQw&list=PLd-0K-8ZyM0WdLse-OASmbqzXdpJcCn3P&index=78)
[^mathproof2]: To simplify the expression for enthalpy for ideal gases, we start by substituting the ideal gas approximation of [internal energy](Internal%20Energy) to get<br>$$ dH = dU + d(pV) = mc_{\nu} dT + d(m \cdot p \cdot \nu) $$<br>We can further use the ideal gas law%%LINKJE%% and substitute $p\nu$ with $RT$ to obtain <br>$$ dH = mc_{\nu}dT + d(mRT) $$<br>As $R$ stays constant, and realizing that $c_p = c_{\nu} + R$, we can rewrite to <br>$$ dH = mc_{\nu} dT + mRdT = (c_{\nu} + R) \cdot mdT $$<br>$$ dH = m c_p dT $$
1. N. Basson, _Engineering Thermodynamics I Course Reader_, [link](https://canvas.utwente.nl/courses/16111/files/4696974?wrap=1).
2. Wikipedia, _Enthalpy_, [link](https://en.wikipedia.org/wiki/Enthalpy).
3. Less Boring Lectures, _REFERENCE ENTROPY and Specific Heats in 12 Minutes!_, US, [link](https://www.youtube.com/watch?v=kinE5eTVgQw&list=PLd-0K-8ZyM0WdLse-OASmbqzXdpJcCn3P&index=78).


