---
title: Motor and Drive Characteristics
draft: false
---
Tags: [[motor design]], [[transmission]]  <br>16-03-2025

---
# Motor and Drive Characteristics
### Motor Energy Characteristics
When designing a motor it is important to consider the power it can output to evaluate whether it suits your application. The [power](Power.md) a motor outputs depends on the current [torque](Torque.md) and [rotational velocity](angular%20velocity).
In the image below the blue line E is the energy characteristic of the _motor_, and the red L the characteristic of the _load_, the resistance it gives. 
The iso-lines on the graph denote the electrical efficiency. The highest efficiency achieved by this motor is anywhere within the center ring.
![[Motor+load_characteristic_80%.png|450]] <br>credit: _Nicolas Martin_.
#### Matching Motor and Load
As seen in the graph above the lines for the motor output (E, blue) and the load (L, red) do not intersect. This means that without a [suitable transmission](Transmission%20design) the engine is to weak to overcome the load and is not suitable for this application.
A [transmission](Transmission%20Design.md) increases the [torque](Torque.md) as the [rotational velocity](angular%20velocity) decreases, __keeping the [power](Power.md) the same__. Every point on the purple line has the same power, and is thus achievable with a suitable transmission. Calculating the [total transmission ratio](Transmission%20Design.md) therefore involves selecting the desired power output of the motor, and matching the power with that of the load. The transmission ratio then, will be the ratio between either the two torques, or the two rotational velocities that result, or vice versa, starting with the load and the transmission ratio and finding the motor power.
Keep in mind that a motor needs more torque than the load required, this lets the motor accelerate to reach the required rotational velocity.
### Drive Inertias
An engine, like all objects, has inertia. So do the load and every part of the transmission. Matching these inertias is important. Ideally the _inertia ratio ($J_R$)_ is as low as possible, but more than one.
#### Guideline Inertia Ratio
The general guideline for inertia ratios is:

| Purpose                                        | Inertia ratio ($J_R$)                  |
| ---------------------------------------------- | -------------------------------------- |
| Practical purpose                              | $J_{R}\le5$                            |
| Fast movers                                    | $J_{R}\le10$                           |
| Dynamics irrelevant <br>Performance irrelevant | $J_{R}\approx10$<br>or otherwise close |
credit: _Nicolas Martin_
#### Calculating the Inertia Ratio
- The inertia ratio can be calculated with:
$$
J_{R}=\frac{J_{\textrm{Reflected to motor}}}{J_{M}}
$$
- Or more concretely:
$$
J_{R}=\frac{J_{L\to M}+J_{Gearbox\to M}}{J_{M}}
$$
See [here](inertia%20ratio%20with%20reflections) the unit explanation.

##### Reflection
The reflected inertia is the inertia the motor (or any other point on the transmission) experiences from the load or a gearbox. A [reduction ratio](Gears#gear%20ratios) can lower this if the gearbox is designed for increased [torque](torque). It does, however, increase with losses to friction et cetera in the gearbox. The equation for this, then, is:
$$
J_{L\to M}=\frac{J_{L}}{\eta\cdot i^2{}}
$$

This, of course, doesn't only apply to the load, but the gearbox and _everything else[^except]_ too.
> [!abstract] Efficiency
> The reason the efficiency ($\eta$) is in the denominator is because it's always a value smaller than one, therefore, if divided by this value the reflected inertia ($J_{L\to M}$) will be bigger.

#### Issues with Mismatched Inertias
- A small engine with a big load can cause overshoot[^overshoot] and vibrations, which lead to an unstable response and can cause unnecessary failures.
- A big engine with a small load overdamps the reponse, unnecessarily slowing down the acceleration of the engine[^overshoot].










---
Status: #ripe

---
# References:
[^overshoot]: [Motion control tips - How to address overshoot in servo control](https://www.motioncontroltips.com/how-to-address-overshoot-in-servo-control/)
[^except]: The only exception would be the motor itself.
1. Vrije Universiteit, N. Martin, [link to course](https://canvas.utwente.nl/courses/15351/modules/77332).
2. W. Jiang, _Analysis and design of machine elements_, 2019, [link](https://ut.on.worldcat.org/oclc/1084505954).
---
__[Home](!%20Machine%20Elements%20Overview.md)__