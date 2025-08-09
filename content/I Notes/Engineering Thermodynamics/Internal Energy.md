---
title: "Internal Energy"
draft: false
---
tags: [[thermodynamics]], [[differentials]], [[integrals]], [[state variable]]     <br>15-07-2025

---
# Internal Energy
If the meaning of some of the terms used on this page is unknown or ambiguous, please refer back to the [introductory page](Introduction%20to%20Engineering%20%20Thermodynamics) where a lot of the communication for thermodynamics is laid out.
### Interpretation
Internal energy, $U$, is an *extensive property* that is a measure for *change* in kinetic energy that is necessary to bring the particles in a fluid from rest to the current state. The higher the temperature, the higher the kinetic energy, thus the higher the internal energy. <br>Because internal energy is a measure of **change** in kinetic energy, and not just the kinetic energy of the molecules in a substance at a single moment in time, it only emerges when comparing two system states, where a change in internal energy would be what causes the system to go from state $a$ to state $b$.<br>Internal energy is a *state variable*, a variable whose value depends only on the current state of the system, and whose value is independent of the path the system took to get there. The reason this is the case is that the state of the system is determined by the way the molecules interact, and in particular the energy they have from their movement. When comparing from a [standard state](https://en.wikipedia.org/wiki/Standard_state) at 0$K$, the internal energy of the system is the same as the kinetic energy the molecules have, based on their movement. As such, internal energy depends only on the current state and is thus a state variable. Mathematically this can be seen from the fact that when we change a system from state $a$ to state $b$, and then back to state $a$, the change in internal energy will be the same both ways. Furthermore, the internal energy as compared to a standard state will also be the same at $a$ on both occasions.
$$
\oint dU = 0
$$
- Internal energy is **always positive**, except at absolute zero (0$K$). At absolute zero the molecules stand still, making them have no kinetic energy. At every other temperature they move, therefore they have positive kinetic- and thus internal energy.
### Mathematical Formulation
#### Ideal Gas
The internal energy of an ideal gas depends on the heat capacity of the fluid, and on how the temperature changes between two states. This relation **only works for ideal gases**, as it is a simplification of a larger relation that is also influenced by [pressure](Pressure) and volume. The reason this simplification can be made for ideal gases is because the molecules in ideal gases are monatomic, and thus rotational or other energies aren't considered, allowing the internal energy to *only* be a function of the temperature[^wikiquote]. 
$$
dU = mc_{\nu} dT
$$
$$
\Delta U = m \int c_{\nu} dT
$$
Usually this simplifies to just $\Delta U = mc_{\nu} \Delta T$, because in most cases $c_{\nu}$ is assumed to be constant, allowing for immediate evaluation of the integral. This assumption, however, becomes inaccurate for larger temperature ranges. <br>The reason $c_{\nu}$, the specific heat capacity for constant volume%%LINKJE%%, is used, is because a system where all the heat is used for an increase in internal energy, and not expansion, sees a constant volume. This allows us to relate an increase in temperature directly to an increase in internal energy[^wikiquote2]. This doesn't mean that this formulation of the internal energy is only correct for constant pressure situations, this is only a consequence of the way the relation was found. <br>If we don't want to directly compare two immediate states of a system, we can have the internal energy measure the difference in energy from a [standard state](https://en.wikipedia.org/wiki/Standard_state) to the current state instead. When taking the standard state to be at 0$K$, we have $(\Delta U_0, dU_0) = U$[^proof]. Doing this allows for easier comparison between systems, because we can find the $U$ value from tables and use it directly in the thermodynamic equations. This is how the *specific* internal energies are tabulated in the _[thermo tables](ThermoTables.pdf)_. Taking the internal energy from a standard state instead of directly comparing doesn't change anything about the mathematical formulas[^proofnomathchange].
#### Real Gas
For real gases the relationship above doesn't hold anymore, [pressure](Pressure) and density may also play a role and upset the above relation which only accounts for temperature changes[^wikiquote]. The complete formula for internal energy, which simplifies to the one above in the case of an ideal gas, is[^hardmath]
$$
dU = mc_{\nu}dT + \left[ T \left( \frac{\partial p}{\partial T} \right)_V - p \right] dV
$$
This, of course, can be rewritten in terms of specific volume $\nu$ by realizing that $V = m \nu$, and thus $dV = m \cdot d\nu$. Realize - maybe unnecessarily so - that, as long as the *mass* of the system doesn't change, using the formula for a constant volume and for a constant specific volume is equivalent. <br>However, because this formula is harder to use, the internal energy is easiest to find either from the _[thermo tables](ThermoTables.pdf)_, or inferred from the equation of conservation of energy%%LINKJE%%, which, **in a closed system** that sees no change in kinetic or potential energy of the fluid, comes out to be
$$
dU = \delta Q - \delta W
$$
Substituting [heat](Heat) and [work](Work%20in%20Thermodynamics) for more measurable quantities, we find
$$
dU = TdS - pdV
$$

#### Inventory
>[!abstract] Inventory of the Formulas
>- For an **ideal gas**
>$$
> dU = mc_{\nu} dT
>$$
>$$
> \Delta U = m \int c_{\nu} dT
> $$
> - For a **real gas** in a **closed system**
> $$
> dU = \delta Q - \delta W
> $$
> $$
> dU = TdS - pdV
> $$
> - For a **real gas** in a **closed system**, accounting for potential and kinetic energy changes
> $$
> \Delta U + \Delta E_k + \Delta E_p = Q - W
> $$













---
__[Home](!%20Engineering%20Thermodynamics%20Learning%20Overview)__

---
_Status:_ #sprout #missingLink

---
# Based On:
[^proof]: $$ dU_0 = \int_{T_0}^{T_1} c_{\nu}dT = c_{\nu} \cdot T \bigg|_{T_0 = 0 [K]}^{T_1 = T} = c_{\nu} \cdot (T_1 - 0) = c_{\nu} T $$
[^proofnomathchange]: Comparing any $U$ values from a standard state doesn't alter anything about the formulas, as long as the standard state is used consistently for all $U$ values that we substitute into the equations. <br>$$ \Delta U = m \int_{T_1}^{T_2} c_{\nu} dT = (m \cdot c_{\nu} \cdot T)_2 - (m \cdot c_{\nu} \cdot T)_1 = U_2 - U1 $$ <br> If we were to find the $U_1$ and $U_2$ values from the tables we would have <br>$$ U_1 = U_1 - U_0 $$<br> $$ U_2 =  U_2 - U_0 $$<br>Thus, when we combine these into the original $\Delta U$, we get <br> $$ \Delta U = (U_2 - U_0) - (U_1 - U_0) = U_2 - U_1 - U_0 + U_0 = U_2 - U_1 $$ <br>Comparing two $U$ values that use a standard state to find $\Delta U$ is thus the same as using the $m \int c_{\nu} dT$ formula to find $\Delta U$.
[^wikiquote]: [Wikipedia - Internal energy](https://en.wikipedia.org/wiki/Internal_energy#Internal_energy_of_the_ideal_gas)
[^wikiquote2]: [Wikipedia - Heat capacity - At constant volume, _dV_ = 0, _δQ_ = _dU_ (isochoric process)](https://en.wikipedia.org/wiki/Heat_capacity#At_constant_volume,_dV_=_0,_%CE%B4Q_=_dU_(isochoric_process))
[^hardmath]: If the math in this equation isn't entirely clear, consider checking out my note on [partial differentiation](Partial%20Differentiation), and possible others in the [calculus II course](!%20Calculus%20II%20Learning%20Overview).
1. N. Basson, _Engineering Thermodynamics I Course Reader_, NL, [link](https://canvas.utwente.nl/courses/16111/files/4696974?wrap=1).
2. Wikipedia, _Internal energy_, [link](https://en.wikipedia.org/wiki/Internal_energy).
3. Wikipedia, _Heat capacity_, [link](https://en.wikipedia.org/wiki/Heat_capacity#At_constant_volume,_dV_=_0,_%CE%B4Q_=_dU_(isochoric_process)).

