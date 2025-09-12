---
title: "First Order Ordinary Differential Equations"
draft: false
---
tags: [[calculus]], [[differentials]], [[integrals]], [[ODE]]     <br>02-09-2025

---
# First Order Ordinary Differential Equations
- ***First order***, because the derivatives are singular, not of a higher order. Equations with double derivatives ($f^"$) are called a [second order ordinary differential equation](Second%20Order%20Ordinary%20Differential%20Equations).
- ***Ordinary*** because we can rewrite this equation to only depend on only a **single variable**. For example $s$ depends on $t$ by rewriting to
$$
ds = v(t)dt
$$

### Geometrical Interpretation
[Differential](Differentiation) equations appear often in physical models. They are equations where a differential form is part of the equation. Consider for example speed. the speed $v$ is defined as $s/t$. For the speed at an immediate moment we have[^defo] 
$$
v(t) = \frac{ds}{dt}
$$
The equation above is an example of a *differential equation*. <br>To be precise: the above equation is a **first order separable ordinary differential equation**. 
- ***First order***, because the derivative is singular, not of a higher order. A double derivative ($f''$) would see it called a [second order ordinary differential equation](Second%20Order%20Ordinary%20Differential%20Equations). 
- ***Separable***, because it is possible to bring the two variables ($s$ and $t$) to opposing sides of the equal sign by rewriting to 
$$
ds = v(t)dt
$$
- ***Ordinary*** because we can rewrite this equation to only depend on only a **single variable**. For example $s$ depends on $t$ by rewriting to 
$$
ds = v(t)dt
$$
- ***Differential equation***, because this equation deals with [differentials](Differentiation#Geometrical%20Interpretation), in this case $ds$ and $dt$. We can even isolate the differentials from the fraction, writing
$$
ds = v(t) \cdot dt
$$



The *goal* of solving differential equations is to eliminate the differentials and solve for the differentiated variable. So if we encounter $dy$ in an equation, we would try to create an equation that has no differential $dy$, only $y$.<br>There are **two types** of *first order* ordinary differential equations.
1. ***[Separable Ordinary Differential Equations](#Separable%20Equations)***
2. ***[Linear Ordinary Differential Equations](#Linear%20Equations)***

These are further discussed in the chapters below.
### Definition
#### Separable Equations
The easiest differential equations are *separable*. These equations feature a [differential](Differentiation) that is separable from the rest of the terms in the equation to one side of the equal sign. Separating like this allows us to [integrate](Integration) directly. <br>An example of a separable equation would be 
$$
\frac{dy}{dx} = -6xy
$$
because we can (non-rigorously[^math]) break the derivative $dy/dx$ up into differentials, and write
$$
dy = -6xy \cdot dx
$$
From here we can divide both sides by $y$ to finish grouping our variables together. We obtain 
$$
\frac{dy}{y} = -6xdx
$$
Recognize that from this form we can integrate immediately to find an expression in terms of just $y$ and $x$. Integrating both sides gives us
$$
\int \frac{dy}{y} = \int -6xdx
$$
$$
\ln |y| = -3x^2 + C_1
$$
Solving for $y$ gives[^sourcemath]
$$
y = \pm e^{-3x^2 + C_1} = \pm e^{C_1} e^{-3x^2} = C_2e^{-3x^2} 
$$
$C_2$ is a constant that replaces $\pm e^{C_1}$. <br><br>Because separable equations lend themselves to grouping the variables together on either side of the equal sign, the **general form** we try to rewrite to is
$$
f(y)dy = g(x)dx
$$


#### Linear Equations
Linear equations are harder to solve than separable equations because we can't [integrate](Integration) both sides to obtain a solution. This is because the [derivative](Differentiation) and the non-differentiated form are both present in separate terms. <br>An example of such an equation is
$$
(x^2 + 1)\frac{dy}{dx} + 3xy = 6x
$$
Here we see $dy/dx$ and $y$ in separate terms. If we applied the same steps as we did for [separable equations](#Separable%20Equations), we would get
$$
(x^2 + 1)dy + 3xydx = 6xdx
$$
From here there is no way to construct an integral that doesn't have both variables $x$ and $y$ in it somewhere. We can't integrate in two directions with a single integral, so computing this form with an integral is not possible[^explannote]. <br>To still be able to solve such an integral we need a way to find a primitive form, without integrating. The trick that's used to solve these problems uses the [product rule](Differentiation#Product%20Rule) and the quirks of [differentiating](Differentiation) $e$ with polynomial powers. The product rule is formulated as
$$
\frac{d}{dx}[f \cdot g] = f' \cdot g + f \cdot g'
$$
If we can rewrite the first equation in this chapter to look like the right hand of the product rule formula ($f' \cdot g + f \cdot g'$), we can replace it with the left hand of the product rule formula ($\frac{d}{dx}[f \cdot g]$). From that point on we would be able to integrate directly, like we did with separable equations.<br>To find a general solution for these problems, let us rewrite the first equation to a more general form, in order to separate $y$ and $y'$ from the rest of the equation. Thus, we divide by $(x^2 + 1)$ to get
$$
\frac{dy}{dx} + \frac{3xy}{(x^2 + 1)} = \frac{6x}{(x^2 + 1)}
$$
We can substitute $\frac{3x}{(x^2 + 1)}$ with $a$, and $\frac{6x}{(x^2 + 1)}$ with $b$, to aid following steps. Thus, we get the general form

$$
y' + ay = b
$$
Where $a$, $b$ and $c$ can all be functions of a second variable, like $x$.
We will now try to find a way to make $y' + ay$ look like the right hand of the product rule formula, $f \cdot g' + f' \cdot g$. We do this by first constructing a term $\rho$, defined as
$$
\rho = e^{\int a dx}
$$
We now multiply both sides of the equation by $\rho$ to get
$$
\rho y' + a \rho y = \rho b
$$
In order for $\rho y' + a \rho y$ to be the same as the formulation of the product rule, $f \cdot g' + f' \cdot g$, we see that $a\rho$ needs to be the same as $\rho '$, as this would yield $\rho y' + \rho'y$. To check we compute $\rho '$.
$$
\rho ' = \frac{d}{dx}\left[ \rho \right] = \frac{d}{dx}\left[ e^{\int a dx} \right] = a \cdot e^{\int a dx} = a \cdot \rho
$$
Thus we see that $\rho ' = a\rho$, and our equation becomes
$$
\rho y' + \rho'y = \rho b
$$
Because $\rho y' + \rho'y$ follows the formulation of the product rule, we can swap the right and left hand sides of the equation, so we replace $f' \cdot g + f \cdot g'$ with $\frac{d}{dx}[f \cdot g]$. In the case of our example we get
$$
\rho y' + \rho'y = \frac{d}{dx}[\rho \cdot y] = \rho b
$$
From this point on we *are* able to multiply both sides with a differential, in this case $dx$, and can subsequently integrate the whole expression.
$$
\int \frac{d}{dx}[\rho \cdot y] dx = \int \rho b \cdot dx
$$



Realizing that $\int \frac{d}{dx} [f] dx = f$, we can simplify to
$$
\rho \cdot y = \int \rho b dx
$$
$$
y = \frac{\int \rho b dx}{\rho}
$$
This resulting formula **shouldn't be memorized**, instead, memorize the expression for $\rho$ and the steps taken to arrive at the eventual solution. 

- The remainder of the solution to this example is given [here](example%20first%20order%20ordinary%20differential%20equations%20linear%20equations). <br>The computations consist mainly of following integration steps to find an expression for $\rho$ and to solve the integral $\int \rho bdx$.

##### Step-by-Step Plan
In the case of variables $x$ and $y$:
1. Construct $\rho = e^{\int adx}$
2. Multiply both sides by $\rho$
3. Recognize the product rule of the left hand and replace $\rho y' + a\rho y$ with $D_x [\rho y]$.
4. Integrate both sides and solve for $y$

%% FULL RESULT
$$
y = e^{-\int a dx} \left[ \int \left( e^{\int adx} b \right) dx + C \right]
$$
%%
#### Substitution Method
Some equations don't conform themselves to either form discussed above. To solve these types of equations we can substitute parts of the equations for $u$ or $v$ etc. and see if we can rewrite into a form that resembles either a *linear* or a *separable* equation.<br><br>For example let us consider the equation[^sourcemath2]
$$
\frac{dy}{dx} = (x + y + 3)^2
$$
We can substitute $x + y + 3$ with $u$ and see if we obtain a solution.
$$
x + y + 3 = u
$$
$$
y = u - x  - 3
$$
Now substitute $u$ into *both* sides of the equation.
$$
\frac{d[u - x - 3]}{dx} = u^2
$$
$\frac{d}{dx} [u - x - 3]$ simplifies to $du/dx - 1$. Adding $1$ to both sides of the above equation, in order to isolate the derivative, we can rewrite to
$$
\frac{du}{dx} = u^2 + 1
$$
This equation can be solved as a [separable equation](#Separable%20Equations)[^solve].
#### Boundary Value Problems
The solutions to the equations obtained in the chapters above both contained a constant $C$ due to the use of an integral. These solutions are known as *general solutions*[^stack] They are true in all cases but not specific yet. The intersection with the $y$-axis isn't defined yet so an equation like this can assume any value at any point. If we want to solve for a single line we need to define a point the line passes through.<br>For example our previous expression $y = Ce^{-3x^2}$ could have an initial value $y_0$ that is
$$
y(0.5) = 10
$$
So at $x = 0.5$, $y = 10$. Substituting that into our formula we get
$$
10 = Ce^{-3 \cdot \left( 0.5 \right)^2}
$$
We can isolate $C$ to obtain
$$
C = 21.17 \dots
$$
Plugging this into the original equation our *particular solution*[^stack] becomes
$$
y = 21.17 \dots e^{-3x^2}
$$




---
__[Home](WikiQuedia/Mechanical%20Engineering/3%20-%20Tags/Example.md)__ %%NEEDS HOME%%

---
_Status:_ #ripe #missingLink

---
# Based On:
[^defo]: For an explanation on the notation of these derivatives see [this chapter](Differentiation#Definition) on differentiation from calculus I.
[^math]: *Technically speaking* this isn't the correct way to describe these derivatives. The $dy/dx$ is an operator onto itself and can't be broken up into pieces if we want to be completely rigorous. However, it is still possible to *act* as if it is a fraction. In essence the treatment of the $dy/dx$ operator as a fraction made up of differential $dy$ and $dx$ avoids using the [Jacobian matrix](Jacobian%20Matrix) to arrive at the same final form.
[^sourcemath]: C. H. Edwards, D. E. Penney, D. Calvis, _Differential Equations and Boundary Value Problems_, _1.4 Separable Equations and Applications_, 5th ed, US.
[^explannote]: The integral $\int f(a)da$ finds the area under the curve, progressing along the $a$-axis. When integrating along the $a$-axis, we only consider changes in $a$, not any other variable. Even for [multiple integration](Multiple%20Integration) we integrate different variables separately.  <br>For a completer explanation of integrating in multiple directions/dimensions see [here](Multiple%20Integration#Geometric%20Interpretation).
[^stack]: [A good thread discussing the terminology](https://math.stackexchange.com/questions/3779217/confusion-with-regards-to-general-and-particular-solution-terminology-in-differe)
[^sourcemath2]: C. H. Edwards, D. E. Penney, D. Calvis, _Differential Equations and Boundary Value Problems_, _1.6 Substitution Methods and Exact Equations_, 5th ed, US.
[^solve]: The solution to this is as follows: <br>$$\frac{du}{dx} = u^2 + 1$$<br>We try to bring all variables to one side of the equation. We start by multiplying with $dx$ to obtain<br>$$du = (u^2 + 1) dx$$<br>From here we divide by $u^2 + 1$ to isolate $dx$, yielding<br>$$\frac{du}{u^2 + 1} = dx$$<br>Integrating both sides, gives us<br>$$\int \frac{du}{u^2 + 1} = \int dx$$<br>$$\arctan(u) = x + C$$<br>$$u = \tan(x + C)$$<br>We can now substitute $x + y + 3$ for $u$, to get<br>$$x + y + 3 = \tan(x + C)$$<br>Isolating $y$, our general solution becomes<br>$$y = \tan(x + C) - x - 3$$
1. C. H. Edwards, D. E. Penney, D. Calvis, _Differential Equations and Boundary Value Problems_, 5th ed, US.
