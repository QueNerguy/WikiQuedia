---
title: "Heat"
draft: false
---
tags: [[thermodynamics]], [[differentials]], [[integrals]], [[path variable]]     <br>14-07-2025

---
# Heat
If the meaning of some of the terms used on this page is unknown or ambiguous, please refer back to the [introductory page](Introduction%20to%20Engineering%20%20Thermodynamics) where a lot of the communication for thermodynamics is laid out.
### Interpretation
In thermodynamics, heat, $Q$, carries a slightly different meaning than it does in daily conversation. It is an *extensive property* and a measure of *energy in transfer* between two systems. Heat measures the amount of energy that travels between two systems via such mechanisms as conduction, convection and radiation[^cal1]. <br>As heat is a measure of __change__, it is a property that is not inherent to a certain state. Instead, it only plays a role when comparing two thermodynamic states, where heat would be exchanged to get from state $a$ to state $b$. <br>Heat is a *path variable*, a variable whose value depends only on the path the system took to get from state $a$ to state $b$, unlike state variables, whose value only depends on the current state. The reason this is the case is that there are two ways a system may lose energy to get back to it's original state.
1. Produce **heat**
2. Produce **[work](Work%20in%20Thermodynamics)**

The system may absorb *only* heat to get from state $a$ to state $b$, but, to get back to state $a$, the system may instead *only* produce work. In this case the heat absorbed would not go back to 0. The amount of heat is thus dependent on how the system progresses, not just on the state of the system. This is what makes heat a *path variable*.
$$
\oint \delta Q \ne 0
$$
- Heat is **positive** when it is **added to** the system, as it flows **into** the system.

### Mathematical Formulation
#### Real Gas
Heat is usually inferred by observing changes in state of a system. It can be measured by heat flux sensors[^fluxadvert], or by comparing the specific heat capacity of a material[^cal1][^cal2]. More commonly, it is found by solving for it by using the conservation of energy%%LINKJE%% in closed systems. Below is this equation, where changes in kinetic and potential energy are neglected[^seealso].
$$
dU = \delta Q - \delta W
$$
Heat can also be related to [entropy](Entropy). As heat measures a tendency to transfer kinetic energy between two mediums, it is influenced greatly by the chaos of a substance as given by the entropy. The formula relating heat and entropy is only a consequence of how entropy was defined by Rudolph Clausius[^ner].
$$
\delta Q = TdS
$$
$$
\delta Q = T \cdot (dS + \delta S_{gen})
$$
Where $S$ is the entropy, and $S_{gen}$ is the entropy that generates spontaneously in the process. In an idealized (or) *reversible* process the $S_{gen}$ term is usually neglected and assumed to be $\approx$ 0.
#### Ideal Gas
Using the above equation of conservation of energy we may rewrite heat for ideal gases by using the [internal energy](Internal%20Energy) ideal gas assumption where $dU = m \int c_{\nu} dT$ to get the following equation:
$$
dQ = m c dT
$$
Here, the type of specific heat capacity%%LINKJE%% is not yet specified. The reason for this is that either the specific heat capacity *for constant volume* is used, in cases where no work is generated, or the specific heat capacity *for constant pressure* is used, for cases where work *is* being generated. The proof for this is similar to that for ideal gas [enthalpy](Enthalpy)[^poggerproof]. <br>There are two solutions:
1. ___No work done___
$$
\delta Q = mc_{\nu} dT
$$
$$
Q = m \int c_{\nu} dT
$$
2. ___Work done___
$$
\delta Q = mc_p dT
$$
$$
Q = m \int c_p dT
$$

The formulas relating heat to temperature directly are only accurate for the gas and liquid phases of ideal gases, **not the liquid vapor mixture phase**. In a liquid vapor mixture a substance may still absorb heat while not increasing in temperature, this is known as [latent heat](https://en.wikipedia.org/wiki/Heat#Latent_and_sensible_heat), and it's occurrence is clearly the opposite of what the above equations would indicate.

>[!warning]
>These equations only hold for an **ideal gas** in a **closed system**, where no significant change in kinetic or potential energy occurs, because they emerge from the equation
>$$
> dU = \delta Q - \delta W
> $$
> If it were an open system, this equation wouldn't be accurate, and if kinetic and potential energy are not to be neglected the formula would change to
> $$
> dU + dE_k + dE_p = \delta Q - \delta W
> $$
> This formula doesn't allow for the rewriting seen above, and thus every individual quantity would need to be solved for individually to find $\delta Q$.
#### Inventory
> [!abstract] Inventory of the Formulas
> - For an **ideal gas** in **closed system**
> $$
> Q = m \int c T
> $$
> $$
> dQ = mc dT
> $$
> - For a **real gas** in a **closed system**
> $$
> dU = \delta Q - \delta W
>$$
>- For a **real gas**
>$$
> \delta Q = TdS
>$$










---
__[Home](!%20Engineering%20Thermodynamics%20Learning%20Overview)__

---
_Status:_ #sprout #missingLink

---
# Based On:
[^poggerproof]: The proof that either of these can be used for ideal gases depending on if work is neglected or not is as follows:<br>$$ U = \delta Q - \delta W $$<br>Now, using the ideal gas law%%LINKJE%% and the ideal gas assumption for [internal energy](Internal%20Energy), we can rewrite this to<br>$$ mc_{\nu}dT = \delta Q - \delta Q = \delta Q - pdV = \delta Q - m \cdot pd\nu $$<br>$$ \delta Q = mc_{\nu}dT + m \cdot pd\nu$$<br>We can substitute $p d\nu$ with $d(RT)$, and remove the constant terms.<br>$$ \delta Q = mc_{\nu}dT + m \cdot d(RT) = mc_{\nu}dT + mRdT $$<br>$$ \delta Q = (c_{\nu} + R) \cdot mdT $$<br>From this proof it is seen that the $R$ terms is the only resulting part of adding [work](Work%20in%20Thermodynamics) to the equation. As such, **without work** we get<br>$$ \delta Q = mc_{\nu}dT $$<br>$$ Q = m \int c_{\nu} dT $$<br>And **with work**, we can substitute $(c_{\nu} + R)$ with $c_p$, leaving us instead with<br>$$ \delta Q = mc_p dT $$<br>$$ Q = m \int c_p dT $$
[^seealso]: See also the note on [internal energy](Internal%20Energy#Real%20Gas), $U$, and conservation of energy in thermodynamics%%LINKJE%% for more on this equation.
[^fluxadvert]: [Hukseflux - Scientific research / heat and heat transfer measurement](https://www.hukseflux.com/applications/scientific-research-heat-and-heat-transfer-measurement)
[^cal1]: [Scientific American - The Measurement of Heat with the Thermometer](https://www.scientificamerican.com/article/the-measurement-of-heat-with-the-th/)
[^wikiquote]: [Wikipedia - Heat](https://en.wikipedia.org/wiki/Heat)
[^cal2]: [Mettler Toledo - Specific Heat Capacity Measurement](https://www.mt.com/gb/en/home/applications/Application_Browse_Laboratory_Analytics/Application_Browse_thermal_analysis/specific-heat-capacity-measurement.html)
[^ner]: [Wikipedia - Entropy](https://en.wikipedia.org/wiki/Entropy#Classical_thermodynamics)


1. N. Basson, _Engineering Thermodynamics I Course Reader_, NL, [link](https://canvas.utwente.nl/courses/16111/files/4696974?wrap=1).
2. Wikipedia, _Heat_, [link](https://en.wikipedia.org/wiki/Heat).
3. Physics Forums, Chestermiller, [link](https://www.physicsforums.com/threads/are-there-always-conditions-for-writing-q-cdt-in-heat-transfer-processes.882430/).
4. Wikipedia, *Entropy*, [link](https://en.wikipedia.org/wiki/Entropy).
5. Scientific American, *The Measurement of Heat with the Thermometer*, US, [link](https://www.scientificamerican.com/article/the-measurement-of-heat-with-the-th/).

