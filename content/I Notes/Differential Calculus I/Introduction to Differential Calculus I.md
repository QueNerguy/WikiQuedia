---
title: Introduction to Differential Calculus I
draft: false
---
Tags: [[differentials]], [[calculus]], [[vector math]]

Type: #hub

---
# Introduction to Differential Calculus I
Differential equations are very common in almost any engineering discipline, and knowing how to deal with them is very important for any aspiring engineer. It is assumed that [calculus I](Calculus%20I%20Learning%20Overview) is understood as a prerequisite for this subject.
## Introduction
Equations that are of some form $y = f(x)$ are very useful. These equations immediately relate the position of one axis to the position in the other. Differential equations may instead contain a [derivative](Differentiation) in it in such a way that we can't immediately read off either position because it is influenced by the derivative term. We thus want to eliminate these differential forms and find a solution that looks like the equation above. <br>Eliminating these derivatives and so on is what differential calculus is about.
### Terminology
There are some very common terms that you will see again and again in differential calculus. <br>To start, differential equations in this subject are *always* referred to as **ordinary** differential equations. The term *ordinary* is used to differentiate from [partial differential](Partial%20Differentiation) equations[^whyorddiffeq]. Ordinary differential equations will have a functions of a single variable only. <br>Furthermore, all of the equations in this subject are **linear**. What this means is that we can substitute derivatives like $\ddot{y}$ with any arbitrary variable, say $a$, and get an equation that looks like that of a line. Alternatively, from a *linear algebra*%%==LINKJE LINALG==%% point of view we can say that every equation is a linear combination of our differential terms. <br>Another term which is mentioned often is the **order** of a differential equation. This naming is similar to naming for polynomials, where the *grade* refers to the highest power found in the polynomial. For differential equations the order refers to the highest derivative that is found. If the highest derivative looks like $x''$, then we have a *second order* differential equation.
### Solving Differential Equations
This subject has 4 notes that pertain to finding solutions to different *orders* of differential equations. These are
1. ***[[First Order Ordinary Differential Equations]]:*** This note serves as the introduction to the world of differential equations. It divides the first order DEs into the two types: *separable* and *linear* equations, the first of which can be solved by reordering and [integrating](Integration), and the second of which requires a trick to be able to solve.
2. ***[[Second Order Ordinary Differential Equations]]:*** In this note the framework is laid for solving second order DEs, the method of which can be extended to any dimension, as is made concrete in the note on [general order DEs](Generalized%20Ordinary%20Differential%20Equations). The distinction is made between *homogeneous* and *nonhomogeneous equations*. Finding solutions to the second requires first finding a solution to the homogeneous equation, by using the general method of guessing a solution $y = e^{\lambda t}$, and adding the *particular solution* onto that to satisfy the whole equation instead of just a part of it.
3. ***[[Generalized Ordinary Differential Equations]]:*** bla
4. ***[[Vector Valued Ordinary Differential Equations]]:*** bla bla



%%
Introduction%20to%20Differential%20Calculus%20I
%%






---
Status: #sprout #missingLink

---
# Based on:
1. C. H. Edwards, D. E. Penney, D. Calvis, _Differential Equations and Boundary Value Problems_, 5th ed, US.



[^whyorddiffeq]: Wikipedia, *Differential equation*, [link](https://en.wikipedia.org/wiki/Differential_equation#Ordinary_differential_equations).
