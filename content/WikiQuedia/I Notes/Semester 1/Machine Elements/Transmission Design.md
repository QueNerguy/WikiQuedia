---
title: Transmission Design
draft: false
---
Tags: [[transmission]], [[gear]], [[design rules]]   <br>18-03-2025

---
# Transmission Design
### Definitions
- A _velocity ratio ($\textrm{VR}$)_ is the ratio between the [angular velocities](angular%20velocity) of two connected gears or chains/belts. It is an analogue to the [gear ratio](gears#gear%20ratios), though more general, and can also apply to a part of a drivetrain, not just directly connected parts. 
- The _train value_ is the ratio between the angular velocities of the input and output of the whole system. As the train value is the result of all the velocity ratios together, it can be computed with $TV=VR_1\cdot VR_2\cdot VR_3$ and so on until all the velocity ratios are accounted for.

### Designing the Transmission Ratio
The design process of a transmission ratio requires the total [train value](#Definitions) to be known. This is split up into it's associated [velocity ratios](#Definitions), which are then used to calculate the amount of teeth per gear. When this is all done, the resulting train value is calculated from the teeth of the gears to see how far off the original train value it is. It needs to be within a predetermined error margin.
#### Finding the Velocity Ratios
When designing a transmission train it's bad for the longevity of the gears to take a too big a step in reduction ratio at a time as this introduces a lot of stress to the gear teeth. To avoid this there are guidelines, like the one below, which recommend the amount of reduction steps and the associated [velocity ratio](#Definitions), based on the total desired [train value](#Definitions) of the system.
![[TransmissionValueChart_80%.png|450]] <br>source: _Roloff/Matek_ TB 21-11<br>
When a total train value of, for example, 15 is selected, the graph recommends a 2-step process, as seen at the intersection between the pink line and the etched region. __Only one__ of the the [velocity ratios](#Definitions) needs to be from this area. In this case we can select any value between 4.1 and 4.6 for the first or second velocity ratio. The other velocity ratio then needs to be between 3.26, and 3.66. This value does not need to come from the graph directly, it is a result only of the first value that _does_ come from the graph.
In the case of a 3-step process, 2 velocity ratios or [gear ratios](gears#gear%20ratios) need to be selected from the graph, the etched areas with $\textrm{i}_1$ and $\textrm{i}_2$. 
#### Calculating the Number of Teeth
After the [velocity ratio](#Definitions) for a step is found, the amount of teeth per gear can be calculated.  For this there are again guidelines, like this one from _Roloff/Matek_:

| Usage                                               | Number of teeth ($\textrm{z}_1$) |
| --------------------------------------------------- | -------------------------------- |
| General device application<br>(low - medium speeds) | 20 -> 30                         |
| Hoisting, vehicles <br>(low use, high forces)       | 14 -> 20                         |
| 24/7 operation <br>(high use, high speeds)          | > 35                             |
| Smooth running <br>(high speeds)                    | > 35                             |
source: _Roloff/Matek_
The $\textrm{z}_1$ value is the smallest amount of teeth in the velocity ratio. When using the ratio of 4.1 for the velocity ratio from the paragraph above for a smooth running system the teeth requirements are: $\textrm{z}_1$ > 35, and $\textrm{z}_2$ > 144.

> [!Caution]
> Generally, to avoid undercut[^undercut], the minimal suitable amount of teeth for a gear is 17.

> [!Attention]
> The number of teeth of the connecting gears can not have a common divisor. This is because if they dont, they contact the orignal tooth the least. It then takes as many revolutions as the gears have teeth before two of the same teeth touch again, which reduces (uneven) wear.

### Optimizing Strategies
Most commonly a drive is chosen to optimize for motor efficiency. Thus, a selection of motors are picked, with their power output optimized for [electrical efficiency](Motor%20and%20Drive%20Characteristics#Motor%20Energy%20Characteristics). The power is matched with that of the load and the [train value](#definitions) can be calculated. Then the transmission can be designed.
#### Low Weight/Cost
A motor is selected based on price and/or efficiency. The gears and the amount of teeth are then selected based on their weight or cost. This means that the gears with the lowest amount of teeth are selected based on the [guidelines](#calculating%20the%20number%20of%20teeth).
#### Inertia
The [inertia ratio](Motor%20and%20Drive%20Characteristics#guideline%20inertia%20ratio) is selected based on the guidelines. The ideal size of the gearbox is selected from it's inertia. This means [calculating the inertia](Motor%20and%20Drive%20Characteristics#Calculating%20the%20Inertia%20Ratio) the gearbox can have, from the motor inertia, the load inertia and the guideline for the total ratio. <br>This might involve calculating it for a few motors and picking the best one.
#### Acceleration
On some occasions the acceleration rate of drivetrain is the most important criterium. In that case the [train value](#definitions), and the individual gears need to be [optimized for acceleration](Gears#Maximum%20Acceleration). This means that the motor is chosen based on whether the following formula, based on the system's inertias, and the needed train value match. The train value in this case needs to be: <br>$$
\textrm{TV}=\sqrt{\frac{J_2}{J_1}}
$$
- with:
	- $J_2$ = The output inertia. This can be a gear or a big part of the system, [reflected](Motor%20and%20Drive%20Characteristics#reflection)  to an output point 2.
	- $J_1$ = The input inertia. This can be a gear or a big part of the system, [reflected](Motor%20and%20Drive%20Characteristics#reflection) to an input point 1.
	- $\textrm{TV}$ = The [train value](#definitions) of the system. This can be interchanged with the [velocity ratio](#Definitions) ($\textrm{VR}$), for a part of the system.

In the case that the individual [gear ratios](gears#gear%20ratios) need to be calculated, the same formula applies, exchanging $\textrm{TV}$ with $i$, as follows:
$$
i=\sqrt{\frac{J_2}{J_1}}
$$
- with:
	- $J_2$ = The output inertia. This can be a gear or a big part of the system, [reflected](Motor%20and%20Drive%20Characteristics#reflection)  to an output point 2.
	- $J_1$ = The input inertia. This can be a gear or a big part of the system, [reflected](Motor%20and%20Drive%20Characteristics#reflection) to an input point 1.
	- $i$ = The [gear ratio](gears#gear%20ratios).








---
Status: #ripe

---
# References:
[^undercut]: [Tec Science - Undercut of gears](https://www.tec-science.com/mechanical-power-transmission/involute-gear/undercut/)
1. Vrije Universiteit, N. Martin, [link to course](https://canvas.utwente.nl/courses/15351/modules/77332).
2. W. Jiang, _Analysis and design of machine elements_, 2019, [link](https://ut.on.worldcat.org/oclc/1084505954).
---
__[Home](!%20Machine%20Elements%20Overview.md)__