---
title: "Gears"
draft: false
---
Tags:    <br>19-03-2025

---
# Gears
### Definitions
- __Gear/pinion__: When referring to gears as "gear" or "pinion", the distinction that is usually made is that between a driving and a driving gear.
	- __Gear__: The driv<u>ing</u> gear.
	- __Pinion__: The driv<u>en</u> gear.
### Basics
The thing you need to remember most when picking matchin gears, is that the modulus of the gears match. If it doesn't, the gears will undercut and eat material away from the bottom of the tooth, causing fractures.
#### Gear Ratios
At the connecting point between two gears their speeds are equal ($v_1 = v_2 = v_t$). Their [angular velocities](angular%20velocity), however, are not. This is where the gear ratio comes from. One gear spins faster, because of it's shorter diameter, than the other gear. The gear ratio (__$i$__) is:
$$
i=\frac{\textrm{input}}{\textrm{output}}=\frac{\omega_1}{\omega_2}
$$
Because the power throughout a drivetrain stays the same, the angular velocity is tied to the amount of [torque](torque) transmitted. Therefore $i$ can also be expressed in terms of the torque. It can be expressed in the amount of teeth ($\textrm{z}$) and the diameter ($d$) of the gears too, by rewriting[^proof].
##### Full Gear Ratio Equation
$$i=\frac{\omega_1}{\omega_2}=\frac{r_2}{r_1}=\frac{d_2}{d_1}=\frac{\textrm{z}_2}{\textrm{z}_1}=\frac{T_2}{T_1}$$
> [!info] Notice
> Notice that $i$ is only $\frac{\textrm{input}}{\textrm{output}}$ with angular velocities. For all other values it's the opposite; $\frac{\textrm{output}}{\textrm{input}}$. <br>This is because when the [angular velocity](angular%20velocity) decreases, the [torque](torque) increases. If the [total train value](Transmission%20design#definitions) $< 1$ then, the transmission is designed to increase torque, costing speed. This is the case for most cars, for example. <br><br>Intuitively: __smaller gear__ -> __bigger gear__ gives $i < 1$. <br>Because this is most common it's also referred to as reduction ratio sometimes.

### Kinematics
A gear is a very complicated part, and a lot is considered when designing a gear. There also a lot of different types available, optimizing for smooth transmission, force transmission or ease of use and low cost. An extensive list can be found on the [Wikipedia page](https://en.wikipedia.org/wiki/Gear).<br>
The most important dimensions of a gear are given by the manufacturer. They are illustrated on a gear below, and are the following:
- __$a$__: The distance from the _pitch circle_ to the _addendum circle_ (the top).
- __$b$__: The distance from the _pitch circle_ to the _dedendum circle_(the bottom).
- __$d$__: The diameter of the gear, with:
	- __$d_a$__: The diameter at the _addendum circle_ (the top). The addendum circle is the circle the upper surface the teeth of the gear trace, or the outside diameter. <br>$$ d_{a}=m\cdot\textrm{z} + 2m $$<br> $$ d_a = d_p + a $$
	
	- __$d_d$__: The diameter at the _dedendum circle_ (the bottom). The dedendum circle is the circle the upper surface of the body of the gear traces, or the root diameter.<br>$$ d_b = d_p + b $$
	- __$d_p$__: The diameter of the _pitch circle_. The pitch circle is an imaginary circle that denotes the contact between the gears, and is chosen to represent the size of the gear. Because of this, $d$ is sometimes used when $d_p$ is meant. <br>In actuality the contact of the gears rolls along the surface of a tooth as the motion progresses. The pitch diameter lies halfway on the contact patch.<br>$$ d_{p}=m\cdot \textrm{z} $$
- __$h$__: The whole depth of the gear, from the top of the tooth, down to the upper surface of the body of the gear. <br> $$ h = a + b $$
- __$m$__: The module. This is a measure of how thick a tooth is. It is important for the strength, the thicker the tooth the stronger the gear, and to match two gears.<br> It's most important property is matching the fit of gears. If two gears have a different module, the teeth won't fit together properly. <br>$$ m=\frac{d}{\textrm{z}} $$
- __$p$__: The pitch of the gear. This is the distance from one tooth to the next, measured at the _pitch circle_.
- __$t$__: The thickness of the teeth. The thickness is measured at the _pitch circle_, __not__ at the thickest point.<br>$$ t=\frac{m\cdot\pi}{2} $$
- __$\textrm{z}$__, or __$\textrm{N}$__: The number of teeth <br>$$ \textrm{z}=\frac{d}{m} $$
- __$\alpha$__, or __$\phi$__: The pressure angle, most commonly 20$\degree$. <br>Two gears dont make tangential[^tan] contact at their surfaces. This is to let the teeth roll smoothly of one another. It does, however, cause the [force](force) to not be transmitted tangentially, but at an angle, the _pressure angle_. This is an average angle, measured at the _pitch circle_. It changes as the contact of the gears rolls along the surface of the teeth. This force at an angle also induces a force in radial (towards the center of the gear) direction, which means the axles are loaded not only in torsion, but on bending too. %%==maybe change the location of the last part==%%
![[GearCircles_80%.png|700x250]]<br> 
### Failure Modes
coming soon$^{\textrm{TM}}$  










---
Status: #bud

---
# References:
[^tan]: Tangential: Along the contact of the circles.
[^proof]: Proof: $i=\frac{\omega_1}{\omega_2}=\frac{\frac{v_1}{r_1}}{\frac{v_2}{r_2}}=\frac{\frac{v_{t}}{r_1}}{\frac{v_{t}}{r_2}}=\frac{r_2}{r_1}=\frac{d_2}{d_1}=\frac{\textrm{z}_2}{\textrm{z}_1}$
1. Vrije Universiteit, N. Martin, [link to course](https://canvas.utwente.nl/courses/15351/modules/77332).
2. W. Jiang, _Analysis and design of machine elements_, 2019, [link](https://ut.on.worldcat.org/oclc/1084505954).
---
__[Home](!%20Machine%20Elements%20Overview.md)__