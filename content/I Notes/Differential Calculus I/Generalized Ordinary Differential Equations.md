---
title: "Generalized Ordinary Differential Equations"
draft: false
---
tags: [[calculus]], [[differentials]], [[integrals]], [[ODE]], [[vector math]]     <br>17-09-2025

---
# Generalized Ordinary Differential Equations
The term *ordinary* is used to differentiate from [partial differential](Partial%20Differentiation) equations[^whyorddiffeq]. Ordinary differential equations will have a functions of a single variable only.

[^whyorddiffeq]: Wikipedia, *Differential equation*, [link](https://en.wikipedia.org/wiki/Differential_equation#Ordinary_differential_equations).

### Geometrical Interpretation
This note will discuss solutions to *generalized* differential equations. The most common (ordinary) differential equations are [first order](First%20Order%20Ordinary%20Differential%20Equations.md)- and [second order](Second%20Order%20Ordinary%20Differential%20Equations.md) ones. This note will discuss solutions to differential equations that are of the $n^{\text{th}}$ order, meaning anything ranging from $y'$, or $y^{(1)}$, to $y^{(n)}$. <br>The way the solution was found for [second order differential equations](Second%20Order%20Ordinary%20Differential%20Equations.md), assuming a solution of $y = e^{\lambda t}$, can be generalized to higher dimensions, as this quirk always persists.<br>There are **two types** of *second order* ordinary differential equations.
1. ***[Homogeneous Ordinary Differential Equations](#1.%20Homogeneous%20Equations)***
2. ***[Nonhomogeneous Ordinary Differential Equations](#2.%20Nonhomogeneous%20Equations)***





### Finding Solutions
There are two types of general DEs.
1. ***[Homogeneous equations](#1.%20Homogeneous%20Equations):*** These equations can be brought into a form that looks like $ay''' + by'' + cy' + dy = 0$. There is no function of a second variable $x$ in the equation.
2. ***[Nonhomogeneous equations](#2.%20Nonhomogeneous%20Equations):*** These equations are a more complicated version of homogeneous equations, where extra terms that can be a function of a second variable $x$ are present. These look like $ay''' + by'' + cy' + dy = f(x)$.
3. ***[Complex equations](#3.%20Complex%20Solutions):*** Some problems will have solutions with complex roots. 
#### 1. Homogeneous Equations
Homogeneous equations are equations where every term in the equation is multiplied by some variant of $y$. For example $2y''' + 3y^" + 6y' + 5 y = 0$. Adding terms without a $y$, like $6t^3$ etc. would make the equation a [non-homogeneous equation](#Non-Homogeneous%20Equations). <br>A general form for the 3rd order would look like
$$
ay''' + by'' + cy' + dy = 0
$$
To solve equations with $n$ derivatives we make use of the same trick we used for [second order differential equations](Second%20Order%20Ordinary%20Differential%20Equations.md#Homogeneous%20Equations). We assume *a* solution for $y$ looks like $y = e^{\lambda t}$. If we substitute this solution for $y$ into the equation above we get
$$
ay''' + by'' + cy' + dy = a \lambda^3 e^{\lambda t} + b \lambda^2 e^{\lambda t} + c \lambda e^{\lambda t} + d e^{\lambda t} = 0
$$
We can reorder this to isolate $e^{\lambda t}$ from the equation.
$$
e^{\lambda t} (a\lambda^3 + b\lambda^2 + c \lambda + d) = 0
$$
$$
a\lambda^3 + b\lambda^2 + c \lambda + d = 0
$$
The last equation is known as the **characteristic equation** of our 3rd order differential equation. The characteristic for an equation with $y^{(n)}$, an $n^{\text{th}}$ order differential equation, is[^erm]
$$
a \lambda^n + b \lambda^{n-1} + \dots + y \lambda^1 + z = 0
$$
This equation reduces solving differential equations to an algebraic problem. The solution to these generalized problems is assumed to be a linear combination of every solution for $y$, with as many solutions as there are roots of the equation.
$$
y = c_1 y_1 + c_ 2 y_2 + \dots + c_n y_n \qquad \Rightarrow \qquad y = c_1 e^{\lambda_1 t} + c_ 2 e^{\lambda_2 t} + \dots + c_n e^{\lambda_n t}
$$
In the case that there are *repeated roots*, meaning multiple $\lambda$s that share the same value, we multiply with our independent variable - in this case $t$ - every time the repetition appears in order to keep our solution set linearly independent. <br>So say we have a 4$^{\text{th}}$ order differential equation, and a root has a multiplicity of 3[^meaning] (this means $\lambda_2 = \lambda_3 = \lambda_4$), then our solution looks like
$$
y = c_1 e^{\lambda_1 t} + c_2 e^{\lambda_2 t} + c_3 t e^{\lambda_3 t} + c_4 t^2 e^{\lambda_4 t}
$$
Notice that when $\lambda_3$ appeared we multiplied with $t$. If we didn't then $e^{\lambda_2 t} = e^{\lambda_3 t}$, and we would have a repeating term, making our solution linearly dependent. <br>We could even shorten this to
$$
y = c_1 e^{\lambda_1 t} + (c_2 + c_3 t + c_4 t^2) e^{\lambda_2 t}
$$
##### Step-by-Step Plan
Our steps for solving *general homogeneous differential equations* are
1. Solving the characteristic equation to find $\lambda$.
$$
ay''' + by'' + cy' + dy \qquad \Rightarrow \qquad a\lambda^3 + b\lambda^2 + c \lambda + d = 0
$$
2. Substituting $\lambda$ into the general solution for $y$. 
	- In the case of **unique roots**: $$y = c_1 e^{\lambda_1 t} + c_ 2 e^{\lambda_2 t} + c_3 e^{\lambda_3 t}$$
	- In the case of **repeating roots** for $\lambda_1$ $\lambda_2$, but not for $\lambda_3$[^meaning2]: $$y = (c_1 + c_2 t) e^{\lambda_1 t} + c_3 e^{\lambda_3 t}$$
3. Using *boundary equations* to solve for $c_1$, $c_2$ and $c_3$.




#### 2. Nonhomogeneous Equations
Nonhomogeneous equations are different to homogeneous equations in that there is a term that isn't multiplied by $y$. A general form for the 3$^{\text{rd}}$ order would look like
$$
ay''' + by'' + cy' + dy = f(t)
$$
The term $f(t)$ is what makes this equation nonhomogeneous.<br>These problems are solved by first treating the function like a homogeneous equation, neglecting $f(t)$, and then adding a term to correct for the omission of $f(t)$ in the solution. The solution to the associated homogeneous equation is referred to as the *complementary solution*, $y_c$, and the corrective term is called the *particular solution*, $y_p$.<br><br>To find the particular solution to the problem we once again use an assumption to find an expression. We assume that the solution will look similar to the extra term $f(t)$. We will use a general form similar to $f(t)$, and differentiate that to fill into the equation for $y$. <br>For example, $f(t)$ might be $4\cos(t) + \sin(t)$. In this case we assume $y_p = A\cos(t) + B\sin(t)$. We now differentiate $y_p$ to become $y_p '$, $y_p ''$ and $y_p '''$ so we can substitute these into the equation above, $ay''' + by'' + cy' + dy = f(t)$. From here we can find an expression for $A$ and $B$. In our example our solution would look something like
$$
\begin{matrix} y_p = A\cos(t) + B\sin(t) \\ y_p' = -A\sin(t) + B\cos(t) \\ y_p'' = -A\cos(t) - B\sin(t) \\ y_p ''' = A\sin(t) - B\cos(t) \end{matrix}
$$
Substituting into $ay''' + by'' + cy' + dy = 4\cos(t) + \sin(t)$ gives us
$$
a[A\sin(t) - B\cos(t)] + b[-A\cos(t) - B\sin(t)] + c[-A\sin(t) + B\cos(t)] + d[A\cos(t) + B\sin(t)] = 4 \cos(t) + \sin(t)
$$
We can group terms together to get
$$
[-aB -bA + cB +dA] \cos(t) + [aA -bB -cA + dB] \sin(t) = 4 \cos(t) + \sin(t)
$$
To find $A$ and $B$ we can thus solve the system of equations
$$
\begin{cases} -aB -bA + cB +dA = 4 \\ aA -bB -cA + dB = 1 \end{cases}
$$
After we have found an expression for $A$ and $B$ we can substitute these back to get an expression for $y_p$. The eventual solution is a combination of $y_p$ and $y_c$.
$$
y = y_c + y_p
$$
Depending on what $f(t)$ looks like we assume different forms to be our solution for $y_p$. If $f(t)$ is a polynomial, say $4x^2 + 3x + 6$, we would say $y_p = Ax^2 + Bx + C$. Note that when terms are missing, for example instead of $4x^2 + 3x + 6$ we would only have $4x^2 + 6$, we still use the full form. In this example don't remove $Bx$ from the expression. Treat and write this form as $4x^2 + 0x + 6$ to solve the eventual system of equations.<br>Below is a list of assumptions for our particular solution for different expression for $f(t)$.


| Expression for $f(t)$                    | Assumed solution for $y_p$[^credit]  |
| ---------------------------------------- | ------------------------------------ |
| $$a\cos (c t)$$                          | $$A\cos(c t) + B\sin(c t)$$          |
| $$a\sin (ct)$$                           | $$A\cos(c t) + B\sin(c t)$$          |
| $$a\cos(c t) + b\sin(c t)$$              | $$A\cos(c t) + B\sin(c t)$$          |
| $$ae^{ct}$$                              | $$Ae^{ct}$$                          |
| Polynomial, $n^{\text{th}}$ grade[^erm2] | $$At^n + Bt^{n-1} + \dots + Yt + Z$$ |

In the case that $c$ is also a root for $y_c$, we use the same trick as before to make the solution unique, namely multiplying by our variable. If, for example, we have root $e^{2t}$, but also want to use $Ae^{2t}$ for our particular solution, we must instead choose $Ate^{2t}$.
##### Solving by *Variation of Parameters*
For some problems $f(t)$ may not follow one of the forms tabulated above. In such cases we can use *variation of parameters* instead. The derivation for this is quite lengthy, and I find that it offers little insight to the processes at play here. For those interested, Paul Dawkins wrote a good explanation [here](https://tutorial.math.lamar.edu/Classes/DE/HOVariationOfParam.aspx/VariationofParameters.aspx) that I would recommend.
The expression for  of an equation $ay''' + by'' + cy' + dy = f(t)$, with complementary solution $y_c = y_1 + y_2 + y_3$, is
$$
y_p = y_1 \int \frac{f(t) W_1 (t)}{W(t)}dt + y_2 \int \frac{f(t) W_2 (t)}{W(t)}dt + y_3 \int \frac{f(t) W_3 (t)}{W(t)}dt
$$
The Wronskian with a subscript is created by replacing the column of that subscript with $(0, 0, 1)$. For a 3$^{\text{rd}}$ order differential equation $W_2$ would look like
$$
W_2 = \begin{bmatrix} e^{\lambda _1 t} & 0 & e^{\lambda _3 t} \\ \lambda _1 e^{\lambda _1 t} & 0 & \lambda_3 e^{\lambda _3 t} \\ \lambda_1^2 e^{\lambda _1 t}& 1 & \lambda_3 ^2 e^{\lambda _3 t}  \end{bmatrix}
$$
- For an example problem using this method, see *Example 1* at the bottom of [this page by Paul Dawkins](https://tutorial.math.lamar.edu/Classes/DE/HOVariationOfParam.aspx/VariationofParameters.aspx).

The general expression for using variation of parameters to find $y_p$ is
$$
y_p = y_1 \int \frac{f(t) W_1 (t)}{W(t)}dt + y_2 \int \frac{f(t) W_2 (t)}{W(t)}dt + \dots + y_n \int \frac{f(t) W_n (t)}{W(t)}dt
$$

##### Step-by-Step Plan
Our steps for solving *general nonhomogeneous differential equations* are
1. Neglecting the nonhomogeneous term and treating our equation like a [homogeneous equation](#Homogeneous%20Equations) whose solution is $y_c$.
2. Assuming an expression for $y_p$ and differentiating this expression. 
$$
y_p = A\cos(c t) + B\sin(c t), \: y_p' = A\sin(t) + B\cos(t)
$$
3. Substituting the obtained values $y_p$, $y_p '$ etc. into the nonhomogeneous equation, and solving for $A$ and $B$. Plug the results in in our expression for $y_p$.
4. Adding $y_c$ and $y_p$ together to find the general solution. 
$$
y = y_c + y_p
$$
5. Using *boundary equations* to solve for $c_1$, $c_2$ and $c_3$.






#### 3. Complex Solutions
Complex solutions for $y$ are solutions where one of the solutions looks like
$$
y_1 = c_1 e^{i\theta}
$$
For equations like these we can use *[Euler's formula](https://en.wikipedia.org/wiki/Euler's_formula)*[^deriv], which states
$$
e^{i \theta} = \cos({\theta}) + i\sin(\theta)
$$
Complex functions where $\lambda$ has a solution $a + bi$ can be deconstructed as follows:
$$
e^{(a+bi)t} = e^{at}e^{ibt} = e^{at}\left[ \cos({bt}) + i\sin(bt) \right]
$$
Solving complex-valued problems isn't too different from solving *normal* problems, the added complexity only comes from using Euler's formula. When we encounter complex roots *alongside* non-complex roots we first write our solution in terms of only $e^{\lambda t}$ (where $\lambda$ can thus be complex), and only afterwards apply Euler's formula.<br>Solving these forms can look like
$$
y = c_1 e^{\lambda_1 t} + c_2 e^{\lambda_2 t} + c_3 e^{(a + bi) t} = c_1 e^{\lambda_1 t} + c_2 e^{\lambda_2 t} + c_3e^{at}\left[ \cos({bt}) + i\sin(bt) \right]
$$

---


For physical systems, say we have a mass on a spring that oscillates back and forth, the motion of the mass is described only by the real axis of the solution above. Thus, the solution for $\vec{\textbf{x}}_p$ is only $\vec{\textbf{x}}_1$. The real part of the solution tells us how much the function decays, and the imaginary part tells us how the solution oscillates[^q3b1b]. For a more complete intuitive understanding of imaginary solutions to differential equations I recommend [this video by 3Blue1Brown](https://youtu.be/-j8PzkZ70Lg?si=DyUTLJWS5O1XEbRf).

[^q3b1b]: 3Blue1Brown, *The Physics of Euler's Formula | Laplace Transform Prelude*, 10-2025, US, [link](https://youtu.be/-j8PzkZ70Lg?si=LLhxjRJosSpOCZIJ).


### Checking Solutions for Linear Dependence
To know if our way of guessing the solution is **applicable** to the problem at hand and with it if our found solution is **valid**, we can check this solution for linear dependence. If we find **linear independence** then that means that our solution is valid. <br><br>Remember from [second order differential equations](Second%20Order%20Ordinary%20Differential%20Equations.md) that the solution for $y$ was a combination of two separate solutions $e^{\lambda t}$.
$$
y = c_1 e^{\lambda_1 t} + c_2 e^{\lambda_2 t}
$$
We can say that the general solution for $y$ is a *linear combination* of $e^{\lambda_1 t}$ and $e^{\lambda_2 t}$. <br>Given a set of solutions $y_1$, $y_2$, $y_3$ we can test whether these solutions are linearly dependent by constructing the **Wronskian**. If they are linearly dependent we can construct a solution like above. <br>Such solutions for the 3$^{\text{rd}}$ order look as follows:
$$
y = c_ 1 y_1 + c_2 y_2 + c_3 y_3
$$
If the solutions aren't linearly independent we have to use the formula for repeating roots.<br>To test linear dependence, remember from linear algebra%%==LINKJE LINALG==%% that for a linearly independent system the *determinant*%%==LINKJE==%% of the system is **non-zero**. To make the above equation into a matrix system we separate the $c$'s and the $y$'s. We use derivatives to fill up the rows so we can create a *square matrix* from the 3 sets of equations. This doesn't change whether the determinant becomes 0 for linearly dependent system.
$$
y = \begin{bmatrix} y_1 & y_2 & y_3 \\ y_1' & y_2' & y_3' \\ y_1'' & y_2'' & y_3'' \end{bmatrix} \begin{bmatrix}c_1\\ c_2\\ c_3\end{bmatrix}
$$
 Because we're filling up rows there's one less derivative than there are solutions, or in other terms: the maximum derivative of $y$ for $n$ solutions is $y^{(n-1)}$[^gensol].<br>To check for linear independence we take the determinant of the $y$-matrix, which is referred to as $W$ for the Wronskian. If $W = 0$ then the system is *linearly dependent*, if $W \ne 0$ then the system is *linearly dependent*, and we can use the above solution for $y$. <br>The **Wronskian** is constructed as
$$
W = \begin{vmatrix} y_1 & y_2 & y_3 \\ y_1' & y_2' & y_3' \\ y_1'' & y_2'' & y_3'' \end{vmatrix} \qquad\qquad \begin{cases} W \ne 0 \rightarrow \text{linear independence} \\ W = 0 \rightarrow \text{linear dependence}\:\:\:\: \end{cases}
$$
The definition of the Wronskian is, for vector valued functions $f$ and $g$ :
$$
W(f, g) = fg' - f'g
$$
In real cases we see solutions where we have $y = f(t)$, and as such the Wronskian won't usually solve without filling in a value for $t$. The way to tackle these problems is by trying to find some point where $W(t) = 0$. This means we try to find a solution for $t$ where the Wronskian is 0, to find if there's some value of $t$ where the solutions _are_ linearly dependent. If no $t$ can be found where this is the case, then the system must be linearly <u>in</u>dependent, and thus we can apply $y = c_ 1 y_1 + c_2 y_2 + c_3 y_3$. <br>If the system *does* turn out to be linearly dependent we apply the formula for repeated roots, which looks like $y = (c_1 + c_2 t) e^{\lambda_1 t} + c_3 e^{\lambda_3 t}$ for a repeated root $\lambda_1 = \lambda_2$.

### Inventory
> [!abstract] Inventory of the Formulas
> - **Characteristic equation**
> $$
> a \lambda^n + b \lambda^{n-1} + \dots + y \lambda^1 + z = 0
> $$
> - For **unique roots**
> $$
> y = c_1 e^{\lambda_1 t} + c_ 2 e^{\lambda_2 t} + \dots + c_n e^{\lambda_n t}
> $$
> - For **repeating roots**
> $$
> y = c_1 e^{\lambda_1 t} + (c_ 2 + c_3 t + c_4 t^2 + c_5 t^3)e^{\lambda_2 t} + \dots + c_n e^{\lambda_n t}
> $$
> In this equation the root $\lambda_2$ repeats 4 times.
> - **Euler's Formula**
> $$
> e^{(a+bi)t} = e^{at}\left[ \cos({bt}) + i\sin(bt) \right]
> $$
> - **Finding $y_p$** using **variation of parameters**
> $$
> y_p = y_1 \int \frac{f(t) W_1 (t)}{W(t)}dt + y_2 \int \frac{f(t) W_2 (t)}{W(t)}dt + \dots + y_n \int \frac{f(t) W_n (t)}{W(t)}dt
> $$
> - The **Wronskian determinant**
> $$
> W(f, g) = fg' - f' g
> $$
> For vector valued functions $f = \vec{\textbf{f}}$ and $g = \vec{\textbf{g}}$. 





---
__[Home](!%20Differential%20Calculus%20I%20Learning%20Overview.md)__

---
_Status:_ #ripe #missingLink 

---
# Based On:
1. C. H. Edwards, D. E. Penney, D. Calvis, _Differential Equations and Boundary Value Problems_, 5th ed, US.
2. P. Dawkins, _Section 3.7 : More on the Wronskian_, 11-2022, US, [link](https://tutorial.math.lamar.edu/classes/de/wronskian.aspx).
3. Wikipedia, _Wronskian_, [link](https://en.wikipedia.org/wiki/Wronskian).

[^gensol]: The general form for the $y$-matrix thus also looks like:<br>$$\begin{bmatrix}y_1 & y_2 & \ldots & y_{n}\\ y_1' & y_2' & \ldots & y_{n}^{\prime}\\ \vdots & \vdots & \ddots & \vdots\\ y_1^{(n-1)} & y_2^{(n-1)} & \ldots & y_{n}^{(n-1)} \end{bmatrix}$$
[^meaning]: Multiplicity of 3 means that the root appears 3 times with the same value.
[^meaning2]: In this case we have $\lambda_1 = \lambda_2 \ne \lambda_3$.
[^erm]: The completely correct way to write this is <br>$$ a_n \lambda^n + a_{n-1} \lambda^{n-1} + \dots + a_1 \lambda^1 + a_0 = 0$$<br>I personally find this notation hard to read with the subscripts for $a$, so I prefer to just use letters instead, even though technically this way of writing is slightly less correct.

[^deriv]: The derivation for this formula isn't relevant to this note, but you can read more on [wikipedia](https://en.wikipedia.org/wiki/Euler's_formula), or see page 166-167 of _Differential Equations and Boundary Value Problems_, the beginning of the chapter *Complex-Valued Functions and Euler's Formula*.
[^credit]: P. Dawkins, _Section 3.9 : Undetermined Coefficients_, 11-2022, US, [link](https://tutorial.math.lamar.edu/classes/de/undeterminedcoefficients.aspx).
[^erm2]: The completely correct way to write this is <br>$$A_n t^n + A_{n-1}t^{n-1} + \dots + A_1t + A_0$$<br>I personally find this notation hard to read with the subscripts for $A$, so I prefer to just use letters instead, even though technically this way of writing is slightly less correct. %%(loser)%%