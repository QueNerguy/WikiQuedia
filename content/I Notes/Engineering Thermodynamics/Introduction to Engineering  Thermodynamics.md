---
title: "Introduction to Thermodynamics"
draft: false
---
tags: [[thermodynamics]], [[energy balance]]     <br>14-07-2025

---
# Introduction to Engineering Thermodynamics

_Thermodynamics_ is a branch of physics that studies the transfer of energies such as [heat](Heat) and [work](Work) in systems. <br>It builds our understanding of systems that exchange energy, systems that use heat and temperature to generate power, such as a combustion engine, and systems that regulate heat, like a refrigerator or AC. Engineering thermodynamics offers a more _macro view_ of these systems. It is used to calculate the energies at the equilibrium states, meaning it can be used to ascertain the state of a system at the beginning and end of every process.

>[!warning]
>Always use SI units like $\text{Pa}$ instead of $\text{bar}$, and $\text{K}$ instead of $\degree \text{C}$ or $\degree \text{F}$


## Introduction
The following chapters introduce the framework from which we understand thermodynamics, a quick run through of important terms and properties that will be used extensively.
### Math
The physical relations in thermodynamics make heavy use of [calculus I](!%20Calculus%20I%20Learning%20Overview) & [II](!%20Calculus%20II%20Learning%20Overview). Writing formulas with integrals and/or [differentials](Partial%20Differentiation) in them is the safest way to insure correct use of the formulas. During [integration](Integration) of the equations, constant terms can be placed outside of the integral if the situation allows for it, but, as such simplifications aren't a guarantee for all situations, the only way to ensure correct math and avoid unnecessary caveats on the listed formulas is to give the unintegrated form here. <br>Integrating physics formulas requires realizing which physical quantities are variable, and which are constants. After this distinction has been made the regular calculus rules can be applied. <br>The way to *think* about [partial differentiation](Partial%20Differentiation) and integration for physics formulas is to realize that certain quantities depend on others for their value. As such, these quantities are functions and can be integrated or differentiated as one. An equation like
$$
dU = mc_{\nu}dT + \left[ T \left( \frac{\partial p}{\partial T} \right)_V - p \right] dV
$$
makes more sense when realizing that we can treat $c_\nu$ and $p$ as functions, no different from writing $f(x)$. We can even write
$$
dU = mc_{\nu}(T)dT + \left[ T \left( \frac{\partial}{\partial T} p(T) \right)_V - p(T) \right] dV
$$
Or, to make it look even more like a math formula:
$$
dU = a\cdot f(x)dx + \left[ x \left( \frac{\partial }{\partial x} g(x) \right)_y - g(x) \right] dy
$$
$$
dU = a\cdot f(x)dx + \left[ x \cdot  D_x \left[g(x) \right]_y - g(x) \right] dy
$$
Now, this may still be an unpleasantly complicated equation to compute with, but it resembles the notation often seen in calculus courses much more, and with it the math becomes more clear.
- ***[Example Integration of Physical Equations](example%20integration%20of%20physical%20equations)***
### Systems
The term system is used to mean just "that which we are studying", this means that when looking at a system we are drawing a boundary between the subject of study, and that which is external and not included in our calculations. This boundary has great influence on how we approach the system, and there are a few different ways to draw this boundary. Think of a vat of water, you could draw the boundary at the vat itself to study it's dynamics, somewhere inside to study the [pressure](Pressure), or at the feet at the vat to study if it will break the floor. The choice of boundary can greatly help with and ease our calculations, because it may reduce the amount of variables we have to account for when solving equations. <br>We define three types of systems:
1. ___Isolated system:___ In an isolated system **no fluids or energies can transfer** through our boundary. This system does not exist in the real world, but it may closely resemble some systems, for example a thermos flask. We would imagine there to be little to no energy transfer between the inside and the outside of the flask, and thus to ease our calculations we may assume this system to be isolated.
2. ___Closed system:___ In a closed system **no fluids can transfer** through the boundary, but energies may. An example of such a system would be a thermometer, where the mercury doesn't leave the thermometer, but there is energy transfer, causing it to heat up and expand, which allows for reading off the temperature.
3. ___Control volume/Open system:___ In an open system **both fluids and energies can transfer** through the boundary. The cooling system on most laptops is an example of this, where air is taken from the outside and blown along the hot components, and, after absorbing some of the heat, it gets blown out the backside again. In this case there is energy transfer in the form of [heat](Heat) between the hot components and the air, and there is fluid transfer as the air moves through the case.

The easiest system to work with is the _isolated system_, because when doing calculations we know the difference in energy between two system states is 0, and we know the difference in mass between two system states is 0. The more properties transfer in a system, the more complicated the math becomes.

### Fluid Phases
In thermodynamics we study only the fluid phases of a substance. There are 4 phases a fluid can have, namely:
1. ___Saturated liquid:___ Liquids have a certain volume, but no shape. Where liquids differ substantially from gases is that they are nearly impossible to compress. When adding any amount of [pressure](Pressure) the volume of a liquid will keep it's volume. <br>Calling it saturated means that with any change in temperature or pressure this phase transitions to a different one, namely the *compressed liquid*, or *liquid vapor* phases.
2. ___Saturated gas/vapor:___ Gases change volume under pressure, they have a certain volume, but no shape. <br>Calling it saturated means that with any change in temperature or pressure this phase transitions to a different one, namely the *superheated vapor*, or *liquid vapor* phases.
3. ___Liquid vapor:___ The liquid vapor phase is the transition phase between liquid and vapor phases. This phases contains both parts that are liquid, and parts that are vapor. As it contains gas it will change with pressure, but as it is a mixture it will not change temperature until it is saturated as either liquid or vapor.
4. ___Compressed liquid:___ This phase is just liquid a liquid phase, but with more pressure than the saturated phase has. In order for the  compressed liquid phase to change phase to a gas it needs to absorb more heat than the saturated phase would need. This is because it has to overcome both the pressure and the molecular forces before it can change configuration, becoming a gas.
5. ___Superheated gas/vapor:___ Comparable to the compressed liquid phase, a superheated gas is the other end of the spectrum. This phase is achieved by either adding more heat than needed for a saturated gas, or lowering the pressure of the gas. Both of these methods increase the space between the molecules, making it so more energy has to be removed from the gas before the bonds between the molecules would connect again, which is necessary to become a liquid.

There are a few variables that determine what state a substance is in, namely the volume, the temperature, and the pressure. Changing any one of these variables influences when the fluid transitions from one phase to another. <br> <br>![[PVT_diagram_20%.png|400]]<br>source: N. Basson, _Engineering Thermodynamics I Course Reader_, [link](https://canvas.utwente.nl/courses/16111/files/4696974?wrap=1).<br><br>

>[!note] Concretely
> When keeping volume and temperature constant, but increasing pressure, the fluid transitions as follows:
> 1. *Compressed liquid*
> 2. *Saturated liquid*
> 3. *Liquid vapor*
> 4. *Saturated vapor*
> 5. *Superheated vapor*

### Types of Gas
There are two main types of gas that we consider. The reason a distinction is made is to simplify certain relations. The ideal and perfect gases come with easier math, because molecular volume and intermolecular attraction have barely any influence on the calculations, which simplifies the mathematical relationships significantly. The distinction between these types of gas is more a distinction between do I get easy math or do I get harder math.
1. ___Ideal & Perfect gases:___ These are gases that obey the ideal gas law%%==LINKJE==%%. Their math is greatly simplified compared to *real gases*. Below are some attributes, as well as some common examples.
	- Intermolecular attraction $\approx$ 0
	- Molecular volume $\approx$ 0
	- Compressible $\Rightarrow c_{\nu} \ne c_{p}$ <br> <br>*Examples are:*
	1. Air
	2. Helium
	3. Nitrogen
	4. Hydrogen
2. ___Real gases:___ These are gases that do not obey the ideal gas law, and because their molecular structure is more complicated a lot of idealized relations also do not apply, convoluting the math necessary to work with these. Below are some attributes, as well as some common examples.
	- Intermolecular attraction $>$ 0
	- Molecular volume $>$ 0
	- Usually incompressible $\Rightarrow c_{\nu} = c_p$ <br> <br>*Examples are:*
	1. Steam
	2. Refrigerants
	3. Ammonia
	4. Propane

The reason real gases have more difficult math is because a lot of the relations for ideal gases don't work because the molecules are more complicated. The particles in an ideal gas are approximated as point objects and their collisions are largely elastic. Some relations in ideal gases can therefore only depend on a single variable, where for real gases other variables, like [pressure](Pressure) and density do play a role[^wikiquote2].
### Types of Properties
When dealing with thermodynamic systems we see two types of properties, namely:
1. ___Intensive properties:___ These are properties that are independent of the size of the system. These properties include density, [pressure](Pressure) etc.
2. ___Extensive properties:___ These are properties that do depend on the size of the system. These properties include volume, [heat](Heat) etc.

#### Specificity
Because thermodynamics deals with a lot of variables that we may not know in our current system,  we have [tables](ThermoTables.pdf) that contain a lot of the wanted properties. To make the properties usable in all systems, they need to be made _intensive_, independent of the system size. To make use of the tables we need to convert our properties to intensive ones as well, which is done by dividing by the system mass. These properties are denoted with a lowercase letter. To make [heat](Heat) intensive, for example, we have
$$
q = \frac{Q}{m}
$$
Here, we have $Q$, the [heat](Heat), $m$, the mass, and $q$, the **specific heat**. <br>Specific heat means the heat that is independent of system size. <br>The same can be done with any extensive property, volume $V$ becomes specific volume $\nu$[^whynu], heat capacity $C$ becomes specific heat capacity $c$, etc.
### Important Properties
To be able to perform thermodynamic computations we need to understand the following properties, and how they interact. Understanding the way the energy flows in a system and how the properties interact is the most important part of thermodynamics. Being comfortable with this will make using the math that is associated with these flows much more intuitive.
1. ___[[Heat]] ($Q$)___
2. ___[Work](Work%20In%20Thermodynamics) ($W$)___
3. ___[[Internal Energy]] ($U$)___
4. ___[[Enthalpy]] ($H$)___
5. ___[[Entropy]] ($S$)___
6. Heat Capacity
7. Quality
#### Terminology
No notes here
1. adiabatic
2. etc.
### Relations or Something


### Types of Systems
1. Nozzle
2. Turbine
3. Pump / Compressor
4. Heat Exchanger
5. Throttler

### Thermodynamic Cycles
These are generally idealized and stuff
1. Reversible /  Irreversible cycles
2. Power cycles / carnot cycle
3. refrigeration cycles / heat pump cycles
4. 






%%
OLD TEXT, MAY BE REINSERTED, HAVENT DECIDED YET


Below is a list of properties that are instrumental in thermodynamics. Each of these properties has their own page with more information than is listed here.
1. ___[[Heat]] $[Q]$:___ In thermodynamics heat carries a slightly different meaning than it does in daily conversation. An extensive property, heat measures the difference in energy in a system. The energy in question is energy that transfers a certain way, through methods like conduction, radiation, friction[^wikiquote] etc. <br>As heat is a measure of __change__ in energy, it only emerges when comparing two system states. <br>Heat is a _path variable_, because it may not go to zero when the system returns to it's initial state. <br>Heat is **positive** when it is **added to** the system, as it flows **into** the system.
2. ___[Work](Work%20In%20Thermodynamics) $[W]$:___ Work is an extensive property that measures a change in energy as the system moves[^extrawork]. Work is produced by changing the size of the system, thus work is only done when the volume of the system changes, like a piston in a combustion engine, or a component is set in motion, like in a compressor%%LINKJE%%. <br>As work is a measure of __change__ in energy, it only emerges when comparing two system states. <br>Work is a _path variable_, because it may not go to zero when the system returns to it's initial state. <br>Work is **positive** when it is **done by** the system, as it flows **out of** the system.
3. ___[Internal energy](Internal%20Energy) $[U]$:___ Internal energy is an extensive property that measures a change in kinetic energy as the temperature of the system changes. It measures the kinetic energy necessary to bring the molecules in a fluid from rest to the current state. As Internal energy is a measure of __<br>Internal energy is always positive.__
%%












---
__[Home](!%20Engineering%20Thermodynamics%20Learning%20Overview)__

---
_Status:_ #sprout #missingLink

---
# Based On:
[^wikiquote]: [Wikipedia - Heat](https://en.wikipedia.org/wiki/Heat)
[^whynu]: The reason specific volume is written as $\nu$ and not $v$, is to avoid confusion with speed, which already uses $v$.
[^extrawork]: See also the *general* source note on work, [here](Work).
[^wikiquote2]: [Wikipedia - Internal energy](https://en.wikipedia.org/wiki/Internal_energy#Internal_energy_of_the_ideal_gas)

1. N. Basson, _Engineering Thermodynamics I Course Reader_, NL, [link](https://canvas.utwente.nl/courses/16111/files/4696974?wrap=1).
2. G. Stoffels, _Mathematical Background Engineering Thermodynamics_, 2020, NL,  [link](https://canvas.utwente.nl/courses/16111/files/4693672?module_item_id=546655).
3. Wikipedia, _Heat_, [link](https://en.wikipedia.org/wiki/Heat).
4. Wikipedia, _Work (thermodynamics)_, [link](https://en.wikipedia.org/wiki/Work_(thermodynamics)#Formal_definition).
5. Wikipedia, _Internal energy_, [link](https://en.wikipedia.org/wiki/Internal_energy).


