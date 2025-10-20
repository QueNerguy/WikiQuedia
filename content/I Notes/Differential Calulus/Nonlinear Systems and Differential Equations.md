---
title: Nonlinear Systems and Differential Equations
draft: false
---
tags: [[calculus]], [[differentials]], [[integrals]], [[ODE]], [[linear algebra]], [[vector math]]     <br>20-10-2025

---
# Nonlinear Systems and Differential Equations

### Interpretation
Nonlinear systems are systems that can stretch and deform axes in a non-constant way. A linear system scales and rotates axes by the same amount, irrespective of the position along the axes, nonlinear systems don't[^ref3b1b]. 

### Mathematical Formulation
yap
#### Critical Points
Critical points of a function $f(x, y)$ are points that satisfy the condition $f(x, y) = 0$. Critical points of a system treats the intersection of both or multiple functions, and have the condition that these intersect, and are 0.
$$
f(x, y) = g(x, y) = 0
$$
Solving these system gives us the coordinates to the critical point, namely $x_*$ and $y_*$. These solutions can either be constants ($x_*$) or variables ($x_*(t)$). 
1. **A constant solution** indicates that the critical solution is a point or a collection of points.
2. **Variable solutions** tell us that the critical solution is a line, or any bigger geometrical object, depending on the dimension of the solution[^dim]. 
 
The resulting equation that satisfies the conditions is called the **equilibrium**. There may be multiple equilibrium solutions ($\rightarrow$ lines and points) possible.
##### Classification of Critical Points
A point is called **stable** if an increase in $t$ near the equilibrium does not move our position away from the equilibrium. Thus a point is stable if an increase in $t$ keeps our position a constant distance/curve away from the equilibrium, or moves the position closer to the equilibrium. In practice this means that slightly nudging the state of a system (this is equivalent to changing $t$ slightly) will see the system quickly return to the equilibrium. <br>For *unstable* equilibria, a change in $t$ results in the system actively moving *away* from the equilibrium. <br>The best case scenario has our system has **asymptotic stability**, where our location always moves towards the equilibrium as $t$ increases, reaching it at $t = \infty$. This term provides a subdivision within the group of stable equilibria. <br><br>To help classify critical points of nonlinear systems we can make use of the fact that at **small distances** to the equilibrium point a system for vector function $\vec{\textbf{x}}'(t)$ can be assumed to be linear. The linear system close to this point can be described with
$$
\vec{\textbf{u}}' = J\vec{\textbf{u}}
$$
Where $J$ is the [Jacobian matrix](acobian%20Matrix). The vector $\vec{\textbf{u}}$ is constructed by first finding the coordinates $x_*$ and $y_*$ of the critical point. The expression for $\vec{\textbf{u}}$ is then
$$
\vec{\textbf{u}} = \begin{bmatrix} x - x_* \\ y - y_* \end{bmatrix}
$$
So if we have a critical point at $(1, 4)$, then the expression for $\vec{\textbf{u}}$ is
$$
\vec{\textbf{u}} = \begin{bmatrix} x - 1 \\ y - 4 \end{bmatrix}
$$
Note that $x$ does not represent any function $x(t)$, but the actual coordinate $x$. <br>We can classify equilibria as stable by looking at the [eigenvalues](Eigenvectors%20and%20Eigenvalues) of matrix $A$ - or in the case of a linearization matrix $J$ - as follows:
1. If the real parts of $\lambda_1$ and $\lambda_2$ are **negative**, then the critical point of this matrix is **asymptotically stable**.
2. If the real parts of $\lambda_1$ and $\lambda_2$ are **zero**, then the critical point of this matrix is **stable**, but not asymptotically stable.
3. If on of the real parts of $\lambda_1$ and $\lambda_2$ is **positive**, then the critical point of this matrix is **unstable**.

We can use these properties in our previously conceived linearization of a system, and apply them to the real system. These properties transfer always.


%%
### Inventory
> [!abstract] Inventory of the Formulas
> - For the **linearization of a system** $\vec{\textbf{x}}'(t)$
> $$
> \vec{\textbf{u}}' = J\vec{\textbf{u}}
> $$
> - For the **definition of** $\vec{\textbf{u}}$
> $$
> \vec{\textbf{u}} = \begin{bmatrix} x - x_* \\ y - y_* \end{bmatrix}
> $$

could be cool idk ill just put ts as a comment for now ^^
%%


---
__[Home](WikiQuedia/Mechanical%20Engineering/3%20-%20Tags/Example.md)__

---
_Status:_ #bud

---
# Based On:
1. C. H. Edwards, D. E. Penney, D. Calvis, _Differential Equations and Boundary Value Problems_, 5th ed, US.
2. Wikipedia, _Nonlinear system_, [link](https://en.wikipedia.org/wiki/Nonlinear_system).
3. 3Blue1Brown, _Linear transformations and matrices | Chapter 3, Essence of linear algebra_, 8-2020, US, [link](https://youtu.be/kYB8IZa5AuE?si=tpdOAdWenMDf1cSh).


[^ref3b1b]: 3Blue1Brown, _Linear transformations and matrices | Chapter 3, Essence of linear algebra_, 8-2020, US, [link](https://youtu.be/kYB8IZa5AuE?si=tpdOAdWenMDf1cSh).
[^dim]: If the resulting polynomial solution has grade 2 ($ax^2 + bx + c$) then the resulting geometrical object will be 2D, or a plane. This is the case for every dimension.
