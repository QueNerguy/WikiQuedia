---
title: Motor Characteristics and Graphing
draft: false
---
Tags: [[motor design]], [[transmission]]  <br>16-03-2025

---
# Motor Characteristics Graphing
### Motor Energy Characteristics
When designing a motor it is important to consider the power it can output to evaluate whether it suits your application. The [power](Power.md) a motor outputs depends on the current [torque](Torque.md) and [rotational velocity](angular%20velocity).
In the image below the blue line E is the energy characteristic of the _motor_, and the red L the characteristic of the _load_, the resistance it gives. 
The iso-lines on the graph denote the electrical efficiency. The highest efficiency achieved by this motor is anywhere within the center ring.
![[Motor+load_characteristic_80%.png|450]] 
### Transmissions
As seen in the graph above the lines for the motor output (E, blue) and the load (L, red) do not intersect. This means that without a transmission the engine is to weak to overcome the load and is not suitable for this application.
A [transmission](Transmission%20Design.md) increases the [torque](Torque.md) as the [rotational velocity](angular%20velocity) decreases, keeping the [power](Power.md) the same. Every point on the purple line has the same power, and is thus achievable with a suitable transmission. Calculating the [total transmission ratio](Transmission%20Design.md) therefore involves selecting the desired power output of the motor, and matching the power with that of the load. The transmission ratio then, will be the ratio between either the two torques, or the two rotational velocities that result, or vice versa, starting with the load and the transmission ratio and finding the motor power.
Keep in mind that a motor needs more torque than the load required, this lets the motor accelerate to reach the required rotational velocity.





---
Status: #ripe

---
# References:

1. Vrije Universiteit, N. Martin, [link to course](https://canvas.utwente.nl/courses/15351/modules/77332).
2. W. Jiang, _Analysis and design of machine elements_, 2019, [link](https://ut.on.worldcat.org/oclc/1084505954).
---
__[Home](!%20Machine%20Elements%20Overview.md)__