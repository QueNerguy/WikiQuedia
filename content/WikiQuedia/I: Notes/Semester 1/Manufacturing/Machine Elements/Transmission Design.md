---
title: Transmission Design
draft: false
---
Tags: [[transmission]], [[gears]], [[design rules]]   <br>18-03-2025

---
# Transmission Design
### Definitions
- A _velocity ratio (VR or i)_ is the ratio between the [angular velocities](agular%20velocity) of two connected gears or cogs. The _train value_ is the ratio between the angular velocities of the input and output of the whole system. The velocity ration is the ratio of angular speeds of only a part of the system, the train value is that ratio over the whole system. As the train value is the result of all the velocity ratios together, it can be computed with $TV=VR_1\cdot VR_2\cdot VR_3$ and so on until all the velocity ratios are accounted for.

### Designing the Transmission Ratio
The design process of a transmission ratio requires the total [train value](#Definitions) to be known. This is split up into it's associated [velocity ratios](#Definitions), which are then used to calculate the amount of teeth per gear. When this is all done the resulting train value is calculated from the teeth of the gears to see how far off the original train value it is, and if it is within the predetermined error margin.
When designing a transmission train it's bad for the longevity of the gears to take a too big a step in reduction ratio at a time, as this introduces a lot of stress onto the gears. To avoid this there are guidelines, like the one below, which recommends the amount of steps with the associated velocity ratio, based on the total train value of the system.
![[TransmissionValueChart_80%.png|450]] 
source: _Roloff/Matek_ TB 21-11
#### Finding the Velocity Ratios
When a total train value of 15 is selected, the graph recommends a 2-step process, as seen at the etched region. __Only one__ of the the [velocity ratios](#Definitions) needs to be from this area. In this case we can select any value between 4.1 and 4.6 for the first or second velocity ratio. The other velocity ratio then needs to be between 3.26, and 3.66. This value does not need to come from the graph directly, it is a result only of the first value that _does_ come from the graph.
In the case of a 3-step process, 2 velocity ratios need to be selected from the graph, $\textrm{i}_1$ and $\textrm{i}_2$ from the etched areas. 
#### Calculating the Teeth
After the [velocity ratio](#Definitions) for a step is found the amount of teeth per gear can be calculated.  For this there are again guidelines, like this one from _Roloff/Matek_:

| Usage                                               | Number of teeth $\textrm{z}_1$ |
| --------------------------------------------------- | ------------------------------ |
| General device application<br>(low - medium speeds) | 20 -> 30                       |
| Hoisting, vehicles <br>(low use, high forces)       | 14 -> 20                       |
| 24/7 operation <br>(high use, high speeds)          | > 35                           |
| Smooth running <br>(high speeds)                    | > 35                           |
The $\textrm{z}_1$ value is the smallest amount of teeth in the velocity ratio. When using the ratio of 4.1 for the velocity ratio from the paragraph above for a smooth running system the teeth requirements are: $\textrm{z}_1$ > 35, and $\textrm{z}_2$ > 144.

> [!Caution]
Generally, to avoid undercut[^undercut] the minimal suitable amount of teeth for a gear is 17.

> [!Attention]
> The number of teeth of the connecting gears can not have a common divisor. This is because if they dont, they contact every other tooth on the other gear, before contacting the first tooth again, reducing wear.




---
Status: #ripe

---
# References:
[^undercut]: [Tec Science - Undercut of gears](https://www.tec-science.com/mechanical-power-transmission/involute-gear/undercut/)
1. Vrije Universiteit, N. Martin, [link to course](https://canvas.utwente.nl/courses/15351/modules/77332).
2. W. Jiang, _Analysis and design of machine elements_, 2019, [link](https://ut.on.worldcat.org/oclc/1084505954).
---
__[Home](!%20Machine%20Elements%20Overview.md)__