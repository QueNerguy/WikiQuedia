---
title: "Generalized Ordinary Differential Equations"
draft: false
---
tags: [[calculus]], [[differentials]], [[integrals]], [[ODE]], [[vector math]]     <br>17-09-2025

---
# Generalized Ordinary Differential Equations

### Geometrical Interpretation
This note will discuss solutions to *generalized* differential equations. The most common (ordinary) differential equations are [first order](First%20Order%20Ordinary%20Differential%20Equations)- and [second order](Second%20Order%20Ordinary%20Differential%20Equations) ones. This note will discuss solutions to differential equations that are of the $n$th order, meaning anything ranging from $y'$, or $y^{(1)}$, to $y^{(n)}$.


### Definition

#### Check for Solutions
Remember from [second order differential equations](Second%20Order%20Ordinary%20Differential%20Equations) that the solution for $y$ was a combination of two separate solutions $e^{\lambda t}$.
$$
y = c_1 e^{\lambda_1 t} + c_2 e^{\lambda_2 t}
$$
We can say that the general solution for $y$ is a *linear combination* of $e^{\lambda_1 t}$ and $e^{\lambda_2 t}$. <br>Given a set of solutions $y_1$, $y_2$, $y_3$ we can test whether these solutions are linearly dependent by constructing the **Wronskian**. If they are linearly dependent we can construct a solution like above. Such solutions look as follows:
$$
y = c_ 1 y_1 + c_2 y_2 + c_3 y_3
$$
To test linear dependence, remember from linear algebra%%==LINKJE LINALG==%% that for a linear independent system the *determinant*%%==LINKJE==%% of the system is **non-zero**. To make the above equation into a matrix system we separate the $c$'s and the $y$'s.
$$
y = \begin{bmatrix} y_1 & y_2 & y_3 \\ y_1' & y_2' & y_3' \\ y_1'' & y_2'' & y_3'' \end{bmatrix} \begin{bmatrix}c_1\\ c_2\\ c_3\end{bmatrix}
$$
We use derivatives to fill up the rows so we can create a *square matrix* from the 3 $y$-solutions. Because we're filling up rows there's one less derivative than there are solutions, or in other terms: the maximum derivative of $y$ for $n$ solutions is $y^{(n-1)}$[^gensol].<br>To check for linear independence we take the determinant of the $y$-matrix and call it $W$ for the Wronskian. If $W = 0$ then the system is *linearly dependent*, if $W \ne 0$ then the system is *linearly dependent*, and we can use the above solution for $y$. <br>The **Wronskian** is constructed as
$$
W = \begin{vmatrix} y_1 & y_2 & y_3 \\ y_1' & y_2' & y_3' \\ y_1'' & y_2'' & y_3'' \end{vmatrix} \qquad\qquad \begin{cases} W \ne 0 \rightarrow \text{linear independence} \\ W = 0 \rightarrow \text{linear dependence}\:\:\:\: \end{cases}
$$
In real cases we see solutions where we have $y = f(x)$, and as such the Wronskian won't usually solve without filling in a value for $x$. The way to tackle these problems is by trying to find some point where $W(x) = 0$. This means we try to find a solution for $x$ where the Wronskian is 0, to find if there's some value of $x$ where the solutions _are_ linearly dependent. If no $x$ can be found where this is the case, then $W$ must be linearly <u>in</u>dependent, and thus we can apply $y = c_ 1 y_1 + c_2 y_2 + c_3 y_3$.



---
__[Home](WikiQuedia/Mechanical%20Engineering/3%20-%20Tags/Example.md)__

---
_Status:_ #bud #missingLink 

---
# Based On:
1. C. H. Edwards, D. E. Penney, D. Calvis, _Differential Equations and Boundary Value Problems_, 5th ed, US.
2. P. Dawkins, _Section 3.7 : More on the Wronskian_, 11-2022, US, [link](https://tutorial.math.lamar.edu/classes/de/wronskian.aspx).
3. Wikipedia, _Wronskian_, [link](https://en.wikipedia.org/wiki/Wronskian).

[^gensol]: The general form for the $y$-matrix thus also looks like:<br>$$\begin{bmatrix}y_1 & y_2 & \ldots & y_{n}\\ y_1' & y_2' & \ldots & y_{n}^{\prime}\\ \vdots & \vdots & \ddots & \vdots\\ y_1^{(n-1)} & y_2^{(n-1)} & \ldots & y_{n}^{(n-1)} \end{bmatrix}$$