---
title: "Second Order Ordinary Differential Equations"
draft: false
---
tags: [[calculus]], [[differentials]], [[integrals]], [[ODE]]     <br>08-09-2025

---
# Second Order Ordinary Differential Equations
- ***Second order***, because the derivatives are double (in combination with singular derivatives), not of a higher order. Equations with *only* a first derivative ($f'$) would see it called a [first order ordinary differential equation](First%20Order%20Ordinary%20Differential%20Equations).
- ***Ordinary*** because we can rewrite this equation to only depend on only **a single variable**. For example $s$ depends on $t$ by rewriting to
$$
ds = v(t)dt
$$

### Geometrical Interpretation
Second order ordinary differential equations build on the knowledge of [first order ordinary differential equations](First%20Order%20Ordinary%20Differential%20Equations). The solutions to these problems are found in a different way however. <br>The *goal* of solving differential equations is to eliminate the differentials and solve for the differentiated variable. So if we encounter $dy$ in an equation, we would try to create an equation that has no differential $dy$, only $y$.<br>There are **two types** of *second order* ordinary differential equations.
1. ***[Homogeneous Ordinary Differential Equations](#Homogeneous%20Equations)***
2. ***[Non-Homogeneous Ordinary Differential Equations](#Non-Homogeneous%20Equations)***

These are further discussed in the chapters below.


### Definition
#### Homogeneous Equations
Homogeneous equations are equations where every term in the equation is multiplied by some variant of $y$. For example $3y^" + 6y' + 5 y = 0$. Adding terms without a , like $6x^3$ etc. would make the equation a [non-homogeneous equation](#Non-Homogeneous%20Equations).<br>In general these equations look like
$$
ay^" + by' + cy = 0
$$
[Non-homogeneous equations](#Non-Homogeneous%20Equations) also use the solution outlined below, but it's not the only operation required to solve those equations. <br>We can't solve these problems by just [integrating](Integration) both sides. We had the same problem for [linear equations of first order DEs](First%20Order%20Ordinary%20Differential%20Equations#Linear%20Equations), so we once again want to use a trick to *still* be able to solve these problems. This time we also make use of the weird properties of powers of $e$, and we *assume* that *a* solution for $y$ will look like $y = e^{\lambda t}$[^1]. If we substitute this into our formula, we get
$$
ay^" + by' + cy = a \lambda^2 e^{\lambda t} + b \lambda e^{\lambda t} + c e^{\lambda t} = 0
$$
We can reorder this to isolate $e^{\lambda t}$ from the equation.
$$
e^{\lambda t} (a\lambda^2 + b\lambda + c) = 0
$$
$$
a\lambda^2 + b\lambda + c = 0
$$
This equation is very useful, because for our solution we have that either $e^{\lambda t}= 0$, or $a\lambda^2 + b\lambda + c = 0$. Because we want to find $y = e^{\lambda t}$, we need an expression for $\lambda$. Our best shot is thus using the second term, or solving 
$$
a\lambda^2 + b\lambda + c = 0
$$
This equation is known as **the characteristic equation**. <br><br>In the case of our equation $3y^" + 6y' + 5 y = 0$, we would solve the characteristic equation $3 \lambda^2 + 6\lambda + 5 = 0$.
$$
3y^" + 6y' + 5 y = 0 \qquad \Rightarrow \qquad 3 \lambda^2 + 6\lambda + 5 = 0
$$
Because the characteristic equation always has two roots[^2], the final **general solution** for $y$ is a linear combination of those two roots.
$$
y = c_1 e^{\lambda_1 t} + c_2 e^{\lambda_2 t}
$$
In the case of duplicate roots, which can happen for characteristic equations that split like $(\lambda - 2)(\lambda - 2) = 0$ where we have $\lambda_1 = 2$ and $\lambda_2 = 2$, our solution equation doesn't hold and we have to amend it so our solution is *still* a linear combination of both roots. Our **general solution for duplicate roots** is[^credit1]
$$
y = c_1 e^{\lambda_1 t} + c_2 t e^{\lambda_2 t}
$$
##### Step-by-Step Plan
Thus our steps for solving *homogeneous second order ordinary differential equations* are
1. Solving the characteristic equation to find $\lambda$.
$$
ay^" + y' + c y = 0 \qquad \Rightarrow \qquad a \lambda^2 + b\lambda + c = 0
$$
2. Substituting $\lambda$ into the general solution for $y$. 
	- In the case of **unique roots**: $$y = c_1 e^{\lambda_1 t} + c_2 e^{\lambda_2 t}$$
	- In the case of **duplicate roots**: $$y = c_1 e^{\lambda_1 t} + c_2 t e^{\lambda_2 t}$$
3. Using *boundary equations* to solve for $c_1$ and $c_2$.



>[!note]
>It's possible that you recognize the term **characteristic equation** from linear algebra%%==LINKJE LINALG==%%, and indeed the solutions for $\lambda$ are the *eigenvalues*%%==LINKJE EIGENVALUE==%% of our equation $ay^" + by' + cy = 0$. 
>This means that it is also very possible to solve *vector valued second order differential equations* by constructing a matrix and finding it's eigenvalues. The complete method is explained in more detail [in this note](explanation%20use%20of%20linear%20algebra%20for%20solving%20second%20order%20ODEs).



#### Non-Homogeneous Equations

##### Step-by-Step Plan


### Inventory
> [!abstract] Inventory of the Formulas
> - **Characteristic equation**
> $$
> a\lambda^2 + b\lambda + c = 0
> $$
> - For **unique roots**
> $$
> y = c_1 e^{\lambda_1 t} + c_2 e^{\lambda_2 t}
> $$
> - For **duplicate roots**
> $$
> y = c_1 e^{\lambda_1 t} + c_2 t e^{\lambda_2 t}
> $$


---
__[Home](WikiQuedia/Mechanical%20Engineering/3%20-%20Tags/Example.md)__ %%NEEDS HOMEPAGE%%

---
_Status:_ #sprout #missingLink

---
# Based On:
1. C. H. Edwards, D. E. Penney, D. Calvis, _Differential Equations and Boundary Value Problems_, 5th ed, US.
2. J. Gill, _Second Order Linear Equations Via Eigenvalues_, 3-2022, US, [link](https://www.youtube.com/watch?v=r1v2P4hjNJ8).

[^1]: This solution means that we use $y$ as a function of $t$. Useful in for example [dynamics](!%20Dynamics%20Learning%20Overview) problems. If we have a coordinate system $x$, $y$, and $y$ is a function of $x$, then our general solution would of course be $y = e^{\lambda x}$ instead of $y = e^{\lambda t}$.
[^2]: The characteristic equation has two roots because it is a second order polynomial, which always have two roots. The solutions of second order polynomials may take the form of $(\lambda - 3)(\lambda - 6) = 0$, where we know the roots to be 3 and 6.
[^credit1]: This whole chapter of the note is based in it's entirety on the simple explanation given by James Gill. You can watch his video [here](https://www.youtube.com/watch?v=r1v2P4hjNJ8).




