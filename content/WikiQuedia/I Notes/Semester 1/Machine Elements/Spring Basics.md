---
title: Springs
draft: false
---
Tags: [[spring]], [[design rules]], [[stress calculation]]   <br>21-03-2025

---
# Spring Basics
Springs offer a nice way to store potential energy. They are mainly used to stop an object from moving, like in a suspension system, or to make an object start moving.
### Disambiguation
- $D$: Usually refers to a diameter related to the diameter of the coil.
	- $D_i$: The inner diameter of the coil. This is the outside diameter - 2 $\cdot$ the wire thickness.
	- $D$: The mean diameter of the coil. This is the diameter of the coil measured at half the wire thickness. -> outside diameter - the wire thickness. This is the mean of $D_i$ and $D_o$.
	- $D_o$: The outside diameter of the coil.
- $d$: Usually refers to the diameter of the wire of the spring.
- $p$: Pitch is the distance between revolutions, analogue to [pitch or lead for screws and bolts](Bolts%20and%20Screws%20and%20Strength.md#common%20terms).
### Operating principles
There's multiple spring shape designs, each with their own advantages and drawbacks, but all springs are based on the same principle: the stretching of the [metal crystal](crystals), as long as it is within the elastic range, gives the spring it's elongative and elastic properties. <br>The most common springs are listed below.
##### Coiled springs
Coiled springs are the most common spring there is. There's ones that are made for compression or extension, and ones made for Torsion.
The reason these springs are used that much is because they are very good at distributing stress across their volume.<br> Because the spring is curled up, the [stress](stress) is divided over a long area, allowing for bigger supported loads. It also allows the metal to spread the stretch over a bigger area, giving a bigger elastic region. More flex without [yielding](yield%20strength).
###### Compression/extension
Compression coil springs are coil springs manufactured to be used to shorten or extend only. These springs are usually used for stopping impacts. <br>Internally these springs are loaded with [torsion stress](stress), which is maximum at the exterior side of the spring.
1. The Wahl factor:
$$
K_\textrm{w}\approx\frac{4C-1}{4C-4}+\frac{0.615}{C}
$$
See [here](wahl%20factor%20for%20coil%20springs%20(compression%20or%20extension).md) the unit explanation.<br>
2. The maximum stress ($\tau_{max}$). The maximum stress is $\tau$ because the stress in the spring is torsional, $\tau_{max}$ is the maximum _[shear stress](stress)_ at the surface:
$$
\tau_{max}=K_{\textrm{w}}\cdot\frac{8FC}{\pi d^2}
$$
See [here](maximum%20stress%20coil%20spring%20(compression%20or%20extension).md) the unit explanation.<br>
3. The spring rate, derived from the $F=k\cdot u$ equation:
$$
k=\frac{Gd^{4}}{8nD^{3}}=\frac{Gd}{8nC^{3}}
$$
See [here](spring%20rate%20coil%20spring%20(compression%20or%20extension).md) the unit explanation.<br>
###### Torsion
Torsion springs are used for and around rotating axes. A famous example would be a mouse trap.<br>Internally these springs are loaded with [normal stresses](stress).
1. The Wahl factor $K_{\textrm{wT}}$:
$$
K_{\textrm{wT}}\approx\frac{4C^{2}-C-1}{4C\left(C-1\right)}
$$
See [here](wahl%20factor%20for%20coil%20springs%20(torsion).md) the unit explanation.<br>
2. The maximum stress $\sigma_{\max}$:
$$
\sigma_{\max}\approx\frac{K_{\textrm{wT}}\cdot T}{0.1d^3}
$$
See [here](maximum%20stress%20coil%20spring%20(torsion).md) the unit explanation.<br>
3. The spring rate $k$, derived from the $F=k\cdot u$ equation:
$$
k_{\phi}=\frac{dT}{d\phi}=\frac{\Delta T}{\Delta\phi}=\frac{EI}{180Dn}
$$
See [here](spring%20rate%20coil%20spring%20(torsion)) the unit explanation.<br>



##### Leaf springs
A leaf spring is nothing more than a metal plate that gets bent under operation, which gives the springback. Because it is based solely on bending, this type of spring can be bent very little compared to a standard spring, giving a short travel path. This type of spring is common in heavy wheeled vehicles because of it's simplicity, rigidity under load and damping capabilities[^leaf].
Leaf springs are the same as a bending beam in statics equations, the same principles apply. 
1. It's displacement $\lambda$:
$$
\lambda = \frac{4FL³}{Ebh³}
$$
See [here](bending%20displacement%20(leaf%20spring).md) the unit explanation.<br>
2. The maximum stress $\sigma_{max}$:
$$
\sigma_{max} = \frac{6FL}{bh²}
$$
See [here](maximum%20stress%20(leaf%20spring).md) the unit explanation<br>
3. The spring rate $k$, derived from the $F=k\cdot u$ equation:
$$
k=\frac{dF}{d\lambda}=\frac{\Delta F}{\Delta\lambda}
$$








---
Status: #ripe

---
# References:
[^leaf]: [Wikipedia - Leaf spring](https://en.wikipedia.org/wiki/Leaf_spring)
1. Vrije Universiteit, N. Martin, [link to course](https://canvas.utwente.nl/courses/15351/modules/77332).
2. W. Jiang, _Analysis and design of machine elements_, 2019, [link](https://ut.on.worldcat.org/oclc/1084505954).
---
__[Home](!%20Machine%20Elements%20Overview.md)__