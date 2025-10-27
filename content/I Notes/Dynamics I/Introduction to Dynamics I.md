---
title: Introduction to Dynamics I
draft: false
---
Tags: [[dynamics]], [[vector math]], [[rigid body]]

---
# Introduction to Dynamics I
*Dynamics* can be seen as a continuation of *Statics*. Forces on an object are used to ascertain knowledge about it's trajectory or motion. <br>Understanding the motion of a system is useful to model motion of any mechanical system.

## Introduction
The following chapters introduce the framework from which we understand dynamics.

### Math
A common way of understanding the motion of a given object is by [integrating](Integration) the acceleration to find the velocity, and integrating the velocity to find the trajectory. Therefore a good understanding of [calculus I](!%20Calculus%20I%20Learning%20Overview) is necessary. Understanding [differential calculus I](!%20Differential%20Calculus%20I%20Learning%20Overview.md) is sometimes necessary to solve some higher order differentials.

### Visualization
The very first step in understanding any system is that of isolating the subject of our study. To understand a gearbox we may want to isolate a single gear, draw the forces on this body and the motion that results from these forces. The isolation of this gear is a **free body diagram** (**FBD**). <br>Every motion analysis starts with making one or both visualizations, to aid our understanding of the system. These are:
1. A *free body diagram*. We isolate and simplify a part of the body and introduce the forces and moments that are present on this body, and the points where they attach.
2. A *kinematic diagram*. From our FBD we make two diagrams. One containing the [angular velocities](Angular%20Velocity) around certain points and the (resulting) velocities at important points - points we wish to study - on the body. <br>A second containing the [angular](Angular%20Acceleration) and rectilinear accelerations at important points on the body.

### Particles and Rigid Bodies
*Particles* are very simple objects that have a position in space and nothing else. They have no rotation. *Rigid bodies* on the other hand, are subject to rotations. Rigid bodies can be seen as a collection of particles in the same way that any object is a collection of atoms. <br>To understand the motion of objects through space it is most instructive to first understand the behavior of a particle, and then understand the more generalized version, which is the behavior of a rigid body. <br>It is often possible to simplify some rigid bodies to particles, if no rotation occurs. This is preferred as this may simplify computations significantly.

>[!warning]
>Be aware of the fact that for notes on behavior of rigid bodies it is assumed that the behavior of particles is familiar beforehand, and as such some explanations that stem from the particle case may be omitted from the rigid body note.


### Externally Induced Motion
After [having visualized](#Visualization) our system we want to know how the system moves through space as a result of external forces, and how a force on one body can affect another.<br>This study is referred to as **kinetics**.<br>To find information about the motion of a given system there are **3** lenses through which we can study this system. Each way has their own set of equations and has their own advantages and drawbacks.
1. ***[Conservation of Energy](Conservation%20of%20Energy):*** Energy is always conserved. When transitioning from state $a$ to state $b$ we can make up a balance of the energy gained and expended to understand the motion of an object. <br>Consider for example a falling block. The block starts out at a state $a$ with a certain amount of *potential gravitational energy*, but at a state $b$, just before hitting the ground, the block has converted all that energy to *translational kinetic energy*. If information about state $a$ is known we may be able to obtain the speed with which the object hits the ground, and if information about state $b$ is known we may be able to obtain the height from which the object fell.
	- Using the equations of conservation of energy is always the fastest way to solve a given system, but using them is not always practical. <br>Firstly, **big impacts** on a body that may deform it in a way that causes the release of a significant amount of *chemical energy*. This quantity is very impractical to compute from a dynamics perspective. In those cases it is best *not* to use conservation of energy to solve the system. <br>Secondly, we may want to know a **time duration** of a motion. This and other quantities are harder to find by conservation of energy because they aren't present in the available expressions for types of energy. <br>In either case it is best to see if [impulse and momentum](Impulse%20and%20Momentum%20for%20Particles) can be used to understand our system.
2. ***[Impulse and Momentum](Impulse%20and%20Momentum%20for%20Particles):*** The movement through space of an object remains unchanged unless some outside influence impacts the body. This impact can be a hit with a bat or the influence of gravity. <br>Solving the equations of impulse and momentum gives a quick way to model situations with massive impacts or simple external forces.
	- Using impulse and momentum is the second quickest way to solve a given system, but using them is not always practical.<br>In the case of **too many unknown variables** it is useful to construct the [equations of motion](Modeling%20Particle%20Dynamics) to understand the system.
3. ***[Equations of Motion](Modeling%20Particle%20Dynamics):*** We can use Newton's equations to construct what is known as the equations of motion. What this means is that the resultant force in a certain direction is equal to the mass times the acceleration in that direction. <br>We can find an expression for the position, the speed, and some time duration by integrating these equations. <br>Be aware of the fact that the acceleration and angular acceleration is *always* the acceleration of the center of mass of that body.

>[!note] Flowchart
> To solve a system with the least amount of effort
> 1. Try solving with **[conservation of energy](Conservation%20of%20Energy)**.
> 2. If **1.** is not possible, try solving with **[impulse and momentum](Impulse%20and%20Momentum%20for%20Particles)**.
> 3. If **2.** is not possible, try solving by **integrating the [equations of motion](Modeling%20Particle%20Dynamics)**.


#### Motion of Objects
We find the displacement or time duration (as a result of external [forces](Force) and [moments](Moment) or immediately as a result of an acceleration or velocity being applied) by understanding the exact relation between the acceleration, the velocity, the trajectory, and the time. <br>This study is referred to as **kinematics**.<br>For [particles](Modeling%20Particle%20Motion) we study translation of the particle compared to a motionless, and a moving reference frame. <br> For [rigid bodies](Modeling%20Rigid%20Body%20Motion) we study both the translation and the rotation of the body. <br>In the case of more circular paths it is possible to transition between coordinate systems[^cart][^nt][^pc]. <br>In these coordinate systems it is usually impractical to integrate the motion in a certain direction directly because the directions vectors aren't constant, but instead are constantly changing. Therefore the expressions for acceleration and velocity are given as (vector) equations that are true for any point in time.







---
Status: #sprout #missingLink

---
# Based on:
1. J. L. Meriam, L. G. Kraige, J. N. Bolton, *Engineering Mechanics Dynamics*, 8th ed, US.
2. J. Schilder, B. De Gooijer, _Mechanical Vibrations_, 4-2019, NL.


[^cart]: **[[Motion in Cartesian Coordinates]]**
[^nt]: **[[Motion in Normal-Tangent Coordinates]]**
[^pc]: **[[Motion in Polar Coordinates]]**






%%
==LEARNING OVERVIEW NOTE IS REPLACED BY INTRODUCTION NOTE==
%%