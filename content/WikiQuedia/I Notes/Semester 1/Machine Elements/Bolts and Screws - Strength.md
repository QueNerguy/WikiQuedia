---
title: Bolts and Screws - Strength
draft: false
---
Tags: [[joining]], [[metal working]], [[welding]], [[stress calculation]]   <br>22-03-2025

---
# Bolts and Screws - Strength
Connecting two parts instead of making them from one piece through a metal working process like [machining](physical%20machining%20methods) or [forging](forging)[^methods] almost always sacrifices in strength.

Bolts and screws both work in the same way. The only difference between the two is that screws are made to insert into a part, bolts also leave the part. They therefore need to be secured at the other end by a nut. <br>![[BoltsVSscrews_80%.png|300]]<br>
### Common Terms
- $p$: The pitch of a screw or bolt. The pitch is the distance between two peaks of the thread. If a screw has two threads going up it's side, the pitch is half the distance between a whole revolution of the thread (the lead), a third for three threads etc.
- $L$: The lead of a screw or bolt. The lead is the distance between two whole revolutions of the thread. If there's three threads the lead is three times the pitch.
- $D$ or $d$: The nominal diameter of the bolt or screw. These are used interchangibly in engineering practice for some reason. I will use only $D$ when addressing the major diameter here. The major diameter is the outside diameter of a screw or hole, or the inside diameter of a hole. Because of this an M6 whole and bolt will fit together. The M grade gives the major diameter.<br>-> M6 for example has a major diameter of 6 mm.

### Strength Values
The strength of these parts is usually written on their heads with two values[^bolthead]. It is also always listed somewhere by the manufacturer. 
##### Getting Strength Values From the Head
1. __Minimum [tensile strength](tensile%20strength)__: The first value gives the minimum tensile strength ($\sigma_{T}$) in 100 \[MPa]. 
> [!Example] Concretely
>The general formula is: _First value $\cdot 100$ \[MPa]_.<br>A grade value of __<u>9</u>__.8 gives a tensile strength: <br>-> $9\cdot 100 \textrm{ [MPa]}$ = 900 MPa.

2. __Minimum [yield strength](yield%20strength)__: The second value helps calculate the minimum yield strength ($\sigma_{Y}$).
> [!Example] Concretely
>The general formula is: _Second value $\cdot$ Tensile strength_ ($\sigma_{T}$). <br>A grade value of 9.__<u>8</u>__ gives a yield strength: <br>-> $0.8 \cdot \sigma_{T}=0.8\cdot 900 \textrm{ [MPa]}$ = 720 \[MPa].

### Preloading
Bolts are basically always preloaded. Preloading a bolt means tightening the bolt after it already makes contact with the surface of the part. This counteracts loosening of the bolt under dynamic loading, and greatly increases the amount of force a bolt can take.
##### Working Mechanism
[Good explainer video](https://www.youtube.com/watch?v=XLzTB4KLCxU)<br>To understand how preloading increases the amount of strength a bolt can take, we must consider them and the parts they insert into as springs. When the bolt tightens, the part around it compresses a bit while the bolt stretches a bit. <br>
If a load now acts on the parts, pulling them apart, the parts will decompress while the bolt gets stretched even further. Because the parts decompress, the load on the bolt due to the preloading will decrease and it will only absorb a part of the external load. The other part of the external load is absorbed by the stretching parts. This allows a bolt to be loaded more, as it only absorbs part of the external load.<br>If a load acts parallel to the parts, trying to get the parts to slide along one another, preloading helps too. In this case there is a friction force between the two parts because the bolt forces them together. In this case too, only a part of the external load is absorbed by the bolt. The other part of the external load is absorbed by the friction between the plates, which allows the bolt to be loaded way more than without preloading. 
- The load on the bolt ($Q$) can be calculated with:
$$
Q=Q_{p}+\frac{k_{b}}{k_{b}+k_{m}}\cdot F
$$
See [here](load%20on%20a%20preloaded%20bolt) the unit explanation.
- The torque ($T$) required to achieve this preload is:
$$
T \approx 0.2 \cdot Q_p \cdot D
$$
See [here](required%20torque%20for%20given%20preload) the unit explanation.
#### Calculating Appropriate Preloads
Depending on the type of load that the bolts will be subjected to the required preload will change. Sometimes in dynamical loading situations even a preload will not be enough, and special washers, different bolts or adhesive processes need to be applied too. <br>There's 4 ways a bolt can be loaded, they are described as seen from the bolt. An axial load, for example, is caused by a force normal to the surface of the part.
###### 1 - Axial Loads
> [!tip] Note!
> For the grinders: These formulas for axial loads won't be on the exam, these are here for completeness only!

Axial loads are loads that act on the same axis as the bolts are facing, which is usually perpendicular to the surface of the part. <br>In axial loads the force that the bolts take is distributed equally among the bolts.
$$
F=\frac{F_{\sum}}{\textrm{z}}
$$
See [here](axial%20and%20transverse%20load%20on%20bolt%20force%20thingy.md) the unit explanation.<br>Because there is no friction force to account for when calculating the preload required for the bolt, the preload is only a function of the original force[^prelax].
$$
Q_{p} = c_{\textrm{connection}} A_{\textrm{eff}}\cdot\sigma_\textrm{proof} \ge F
$$
See [here](required%20preload%20axial%20load.md) the unit explanation.
> [!example]
> ![[bolts_axialLoad_80%.png|400]]
###### 2 - Transverse Loads
Transverse loads are loads that act perpendicular to the surface of the bolt which is usually parallel to the surface of the part. <br>In transverse loads the force that the bolts take is distributed equally among the bolts.
$$
F=\frac{F_{\sum}}{\textrm{z}}
$$
See [here](axial%20and%20transverse%20load%20on%20bolt%20force%20thingy.md) the unit explanation.<br>Because friction forces take a part of the total load, the actual load the bolts are subjected to is smaller. This load depends on how many surfaces there are to make friction and the roughness of those surfaces. Because of this the required preload can also be lowered. <br>The minimum preload required for a bolt to carry the force is:
$$
Q_{p} \ge \frac{K_{s}F_{\sum}}{f\textrm{z}c}
$$
See [here](required%20preload%20transverse%20load.md) the unit explanation.
> [!example]
> ![[bolts_shearLoad_80%.png|400]]
###### 3 - Torque
When a part is subjected to a torque not all bolts take an equal amount of the force this generates, if they are not oriented concentric to the torque, that is. Because of this only the bolt that carries the maximum amount of force is considered, as this one is most likely to fail. The equation is similar to that of an [overturning moment](#4%20-%20overturning%20moment).
$$
F_{\max}=\frac{Tr_{\max}}{\sum_{i=1}^{\textrm{z}}r_{i}^2}
$$
See [here](torque%20load%20on%20bolt%20force%20thingy) the unit explanation.<br>Because friction forces take a part of the total load, the actual load the bolts are subjected to is smaller. This load depends on how many surfaces there are to make friction and the roughness of those surfaces. Because of this the required preload can also be lowered. <br>The minimum preload required to carry the force generated by the applied torque for a bolt $i$, at distance $r_i$ from the torque, is:
$$
Q_{p} \ge \frac{K_{s}T}{fc\sum_{i=1}^{\textrm{z}}r_{i}}
$$
See [here](required%20preload%20torque%20load) the unit explanation.
> [!example]
> ![[bolts_Torque_80%.png|400]]
###### 4 - Overturning Moment
An overturning moment is a moment that would cause the assembly to bend along it's surface. The load the bolts take is not equal and depends on how far away they are from the axis around which the assembly wants to bend, the axis the moment acts on. Because of this only the bolt that carries the maximum amount of force is considered, as this one is most likely to fail. The equation is similar to that of an [applied torque](#3%20-%20torque).
$$
F_{\max}=\frac{ML_{\max}}{\sum_{i=1}^{\textrm{z}}L_{i}^2}
$$
See [here](moment%20on%20bolt%20force%20thingy.md) the unit explanation.<br>When the assembly starts to bend the connected parts will slide along one another, meaning that the friction force counteracts this motion. <br>Because friction forces take a part of the total load, the actual load the bolts are subjected to is smaller. This load depends on how many surfaces there are to make friction and the roughness of those surfaces. Because of this the required preload can also be lowered. <br>The minimum preload required for a bolt to carry the force generated by the overturning moment is:
$$
Q_{p} \ge \frac{K_{s}M}{fc\cdot\sum_{i=1}^{\textrm{z}}L_{i}}
$$
See [here](required%20preload%20overturning%20moment%20load) the unit explanation.
> [!failure] Warning
> This formula has not been verified, and may have an inaccurate approximation of the friction force, with $fc$ only. A better approximation would probably be closer to something like $\sum_{i=1}^{\textrm{n}}(l_{\textrm{n}} f_{\textrm{n}})$, where $\textrm{n}$ is the amount of contact surfaces, and $l$ is the distance between the axis of the overturning moment and the surface where the friction is generated.


> [!tip] Note!
> For the grinders: This formula for preload won't be on the exam, this is here for completeness only!


> [!example]
> ![[bolts_overturningMoment_80%.png|400]]
### Strength in Bolted Connections
To make sure bolts don't fail stress analysis is critical to make sure bolts don't exceed their maximum strength and make the whole assembly fail. <br>One option to help the bolt withstand higher loads is to increase the length of engagement ($L_e$).
$$
L_{e} \ge \frac{\sigma_{\textrm{T}_{\textrm{bolt}}}}{\sigma_{\textrm{T}_{\textrm{nut}}}}\cdot\frac{2A_{\textrm{eff}}}{0.5\pi\left(D-0.64952\cdot p\right)}
$$
See [here](length%20of%20engagement%20of%20bolt) the unit explanation.<br>
#### Equivalent Stress in Bolts
In general there are two formulas to calculate the stress on a bolt, one for a bolt with, and one for a bolt without preload. The only thing that changes in this formula, if the way the bolt is loaded changes, is the load on the bolt $Q$.
The general equations are:
- The stress in a bolt, __with__ preloading:
$$
\sigma_{\textrm{ca}}=\frac{1.3\cdot Q}{A_{\textrm{eff}}\approx\frac14\pi D^2}
$$
See [here](combined%20stress%20in%20a%20bolt%20with%20preload.md) the unit explanation.
- The stress in a bolt, __without__ preloading:
$$
\sigma_{\textrm{ca}} = \sigma = \frac{Q}{A_{\textrm{eff}}\approx\frac14\pi D^2}
$$
See [here](combined%20stress%20in%20a%20bolt%20without%20preload.md) the unit explanation. <br>Always make sure that $\sigma_{\textrm{ca}}$ does not exceed design guidelines, and above all, does not exceed the [tensile strength](tensile%20strength) limit.

#### Crushing Stress
Crushing stresses can sometimes cause a part to fail at the connecting surface before bigger structural failure occurs. This is because the load on the head of a bolt is spread over a very small area under it's head, which can cause great stress buildup. The part can fail at the thread when it's loaded in shear or torque for the same reason too. To avoid this failure mode, add _washers_ between the head and the surface of the part to distribute the stress over a greater area.
##### Crushing Stress due to Shear Loading or Torqueing
When a bolt is loaded in shear (due to a shear force, as seen below, or a torque, see [here](#3%20-%20torque)), or otherwise crushed by the material it is inserted into, the threaded area of the bolt (or part in rare cases) can fail due to crushing. The stress equation in this case is applicable to all bolts loaded in shear, precision bolted joints too, and is referred to as _crushing stress_ or _bearing stress_. This stress can not exceed the allowable stress of the bolt, nor that of the part.
$$
\sigma_{p,\max}=\frac{F_{\textrm{shear}, \max}}{d_0 L_{\min}}
$$
See [here](crushing%20or%20bearing%20stress%20in%20bolts%20due%20to%20shearing.md) the unit explanation.


> [!example] More Concretely
> ![[Clevis_Pin:)_80%.png]] <br>In the above clevis-blade arrangement the flow of the force $P$ is shown in the parts. The pin is crushed at the whole area from $b$ to $c$. In this scenario $F_{\textrm{shear}}$ = $P$. <br>The length the shear force acts on has two values, either $b$ + $c$, for the force $P$ on the clevice, or the length between $b$ and $c$, let's call it $a$, for the force $P$ on the blade. Since the length of $a$ is smaller than that of $b$ and $c$, we choose length $a$ for $L_{\min}$.

##### Crushing Stress due to an Overturning Moment
Because an overturning moment can cause very big forces to act on the surface between the bolt head and the surface of the part, there is a risk of crushing. This stress is referred to as _crushing stress_ or _bearing stress_. This stress can not exceed the allowable stress of the bolt, nor that of the part.
$$
\sigma_{p,\max}\approx\frac{\textrm{z}Q_{p}}{A_{\textrm{eff}}} + \frac{M}{W}
$$
See [here](crushing%20or%20bearing%20stress%20in%20bolts%20due%20to%20overturning%20moment) the unit explanation.
##### Crushing Stress due to an Axial Load
An axial load on the bolt, similarly to an overturning moment, can cause the part or bolt to have a high buildup of stress at the area between the head and the part. This causes a risk for crushing.This stress is referred to as _crushing stress_ or _bearing stress_. This stress can not exceed the allowable stress of the bolt, nor that of the part.
$$
\sigma_{p,\max}=\frac{Q}{A_{\textrm{eff}}}
$$
See [here](crushing%20or%20bearing%20stress%20in%20bolts%20due%20to%20axial%20load) the unit explanation[^mech].










---
Status: #ripe

---
# References:
[^methods]: See [here](!%20manufacturing%20technologies%20overview) for an overview of (common) manufacturing processes.
[^bolthead]: <br>![[BoltHead_80%.png|100]]
[^prelax]: [Engineers edge - Calculator for bolt preload tension force and equation](https://www.engineersedge.com/material_science/bolt-preload-calculation.htm)
[^mech]: [Mechanicalc - Bolted Joint Analysis: Bearing](https://mechanicalc.com/reference/bolted-joint-analysis)

1. Vrije Universiteit, N. Martin, [link to course](https://canvas.utwente.nl/courses/15351/modules/77332).
2. W. Jiang, _Analysis and design of machine elements_, 2019, [link](https://ut.on.worldcat.org/oclc/1084505954).
3. K. Brown, C. Morrow, S. Durbin, A. Baca, _Guideline for Bolted Joint Design and Analysis: Version 1.0_, 2008, [link](https://www.osti.gov/servlets/purl/929124) .
4. SDC, _Bolt Stress Calculations: A Step-by-Step Guide_, [link](https://sdcverifier.com/structural-engineering-101/bolt-stress-calculations/).
5. J. Kerns, _What’s the Difference Between Bearing, Shear, and Tear-Out Stress?_, 2016, [link](https://www.machinedesign.com/fastening-joining/article/21834800/whats-the-difference-between-bearing-shear-and-tear-out-stress).

---
__[Home](!%20Machine%20Elements%20Overview.md)__