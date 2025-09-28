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
2. ***[Nonhomogeneous Ordinary Differential Equations](#Nonhomogeneous%20Equations)***

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
Our steps for solving *homogeneous second order ordinary differential equations* are
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



#### Nonhomogeneous Equations
Nonhomogeneous equations are different to homogeneous equations in that there is a term that isn't multiplied by $y$. A general form for the 2$^{\text{nd}}$ order would look like
$$
ay'' + by' + cy = f(t)
$$
The term $f(t)$ is what makes this equation nonhomogeneous.<br>These problems are solved by first treating the function like a homogeneous equation, neglecting $f(t)$, and then adding a term to correct for the omission of $f(t)$ in the solution. The solution to the associated homogeneous equation is referred to as the *complementary solution*, $y_c$, and the corrective term is called the *particular solution*, $y_p$.<br><br>To find the particular solution to the problem we once again use an assumption to find an expression. We assume that the solution will look similar to the extra term $f(t)$. We will use a general form similar to $f(t)$, and differentiate that to fill into the equation for $y$. <br>For example, $f(t)$ might be $4\cos(t) + \sin(t)$. In this case we assume $y_p = A\cos(t) + B\sin(t)$. We now differentiate $y_p$ to become $y_p '$ and $y_p ''$ so we can substitute these into the equation above, $ay'' + by' + cy = f(t)$. From here we can find an expression for $A$ and $B$. In our example our solution would look something like
$$
\begin{matrix} y_p = A\cos(t) + B\sin(t) \\ y_p' = -A\sin(t) + B\cos(t) \\ y_p'' = -A\cos(t) - B\sin(t) \end{matrix}
$$
Substituting into $ay'' + by' + cy = 4\cos(t) + \sin(t)$ gives us
$$
a[-A\cos(t) - B\sin(t)] + b[-A\sin(t) + B\cos(t)] + c[A\cos(t) + B\sin(t)] = 4 \cos(t) + \sin(t)
$$
We can group terms together to get
$$
[-aA + bB +cA] \cos(t) + [-aB -bA + cB] \sin(t) = 4 \cos(t) + \sin(t)
$$
To find $A$ and $B$ we can thus solve the system of equations
$$
\begin{cases} -aA + bB +cA = 4 \\ -aB -bA + cB = 1 \end{cases}
$$
Depending on what $f(t)$ looks like we assume different forms to be our solution for $y_p$. If $f(t)$ is a polynomial, say $4x^2 + 3x + 6$, we would say $y_p = Ax^2 + Bx + C$. Note that when terms are missing, for example instead of $4x^2 + 3x + 6$ we would only have $4x^2 + 6$, we still use the full form. In this example don't remove $Bx$ from the expression. Treat and write this form as $4x^2 + 0x + 6$ to solve the eventual system of equations. <br>It is possible to have a form that is a *combination* of two forms, for example a polynomial and a sine function. In such cases we can use two assumptions at the same time. For an $f(t)$ like $4t^2 + \cos(8t)$ we would use $[At^2 + Bt + C] + [D\cos(8t) + E\sin(8t)]$. <br>Below is a list of assumptions for our particular solution for different expression for $f(t)$.


| Expression for $f(t)$                    | Assumed solution for $y_p$[^credit2] |
| ---------------------------------------- | ------------------------------------ |
| $$a\cos (c t)$$                          | $$A\cos(c t) + B\sin(c t)$$          |
| $$a\sin (ct)$$                           | $$A\cos(c t) + B\sin(c t)$$          |
| $$a\cos(c t) + b\sin(c t)$$              | $$A\cos(c t) + B\sin(c t)$$          |
| $$ae^{ct}$$                              | $$Ae^{ct}$$                          |
| Polynomial, $n^{\text{th}}$ grade[^erm2] | $$At^n + Bt^{n-1} + \dots + Yt + Z$$ |


In the case that $c$ is also a root for $y_c$, we use the same trick as before to make the solution unique, namely multiplying by our variable. If, for example, we have root $e^{2t}$, but also want to use $Ae^{2t}$ for our particular solution, we must instead choose $Ate^{2t}$.
###### Solving by Variation of Parameters
For some problems $f(t)$ may not follow one of the forms tabulated above. In such cases we can use *variation of parameters* instead. The derivation for this is quite lengthy, and I find that it offers little insight to the processes at play here. For those interested, Paul Dawkins wrote a good explanation [here](https://tutorial.math.lamar.edu/classes/de/VariationofParameters.aspx) that I would recommend.
The expression for $y_p$ of an equation $ay'' + by' + cy = f(t)$, with complementary solution $y_c = y_1 + y_2$, is


$$
y_p = -y_1 \int \frac{y_2 f(t)}{W(t)}dt + y_2 \int\frac{y_1 f(t)}{W(t)}dt
$$




##### Step-by-Step Plan
Our steps for solving *general nonhomogeneous differential equations* are
1. Finding an expression for $y_c$ by neglecting $f(t)$ and solving the resulting [homogeneous equation](#Homogeneous%20Equations).
2. Finding an expression for $y_p$ by either:
	-  Assuming a general form for the solution and differentiating this expression, substituting into the equation to solve for $A$ and $B$. <br>$$y_p = A\cos(c t) + B\sin(c t)$$
	-  Using the [Wronskian](Generalized%20Ordinary%20Differential%20Equations#Checking%20Solutions%20for%20Linear%20Dependence) and the obtained solution for $y_c$ to fill in the equation  below. <br>$$y_p = -y_1 \int \frac{y_2 f(t)}{W(t)}dt + y_2 \int\frac{y_1 f(t)}{W(t)}dt$$
	
3. Adding $y_c$ and $y_p$ together to find the general solution. 
$$
y = y_c + y_p
$$
4. Using *boundary equations* to solve for $c_1$, $c_2$ and $c_3$.


#### Complex Solutions
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
y = c_1 e^{\lambda_1 t} + c_2 e^{(a + bi) t} = c_1 e^{\lambda_1 t} + c_2 e^{at}\left[ \cos({bt}) + i\sin(bt) \right]
$$




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
> - For **complex roots**
> $$
> e^{(a+bi)t} = e^{at}\left[ \cos({bt}) + i\sin(bt) \right]
> $$
> - **Finding $y_p$** using **variation of parameters**
> $$
> y_p = -y_1 \int \frac{y_2 f(t)}{W(t)}dt + y_2 \int\frac{y_1 f(t)}{W(t)}dt
> $$


---
__[Home](WikiQuedia/Mechanical%20Engineering/3%20-%20Tags/Example.md)__ %%NEEDS HOMEPAGE%%

---
_Status:_ #sprout #missingLink

---
# Based On:
1. C. H. Edwards, D. E. Penney, D. Calvis, _Differential Equations and Boundary Value Problems_, 5th ed, US.
2. J. Gill, _Second Order Linear Equations Via Eigenvalues_, 3-2022, US, [link](https://www.youtube.com/watch?v=r1v2P4hjNJ8).
3. P. Dawkins, _Section 3.9 : Undetermined Coefficients_, 11-2022, US, [link](https://tutorial.math.lamar.edu/classes/de/undeterminedcoefficients.aspx).
4. P. Dawkins, *Section 7.4 : Variation of Parameters*, 11-2022, US, [link](https://tutorial.math.lamar.edu/Classes/DE/HOVariationOfParam.aspx/VariationofParameters.aspx).
5. W. Trench, _9.4: Variation of Parameters for Higher Order Equations_, US, [link](https://math.libretexts.org/Courses/Community_College_of_Denver/MAT_2562_Differential_Equations_with_Linear_Algebra/09:_Linear_Higher_Order_Differential_Equations/9.04:_Variation_of_Parameters_for_Higher_Order_Equations).

[^1]: This solution means that we use $y$ as a function of $t$. Useful in for example [dynamics](!%20Dynamics%20Learning%20Overview) problems. If we have a coordinate system $x$, $y$, and $y$ is a function of $x$, then our general solution would of course be $y = e^{\lambda x}$ instead of $y = e^{\lambda t}$.
[^2]: The characteristic equation has two roots because it is a second order polynomial, which always have two roots. The solutions of second order polynomials may take the form of $(\lambda - 3)(\lambda - 6) = 0$, where we know the roots to be 3 and 6.
[^credit1]: This whole chapter of the note is based in it's entirety on the simple explanation given by James Gill. You can watch his video [here](https://www.youtube.com/watch?v=r1v2P4hjNJ8).
[^credit2]: P. Dawkins, _Section 3.9 : Undetermined Coefficients_, 11-2022, US, [link](https://tutorial.math.lamar.edu/classes/de/undeterminedcoefficients.aspx).
[^erm2]: The completely correct way to write this is <br>$$A_n t^n + A_{n-1}t^{n-1} + \dots + A_1t + A_0$$<br>I personally find this notation hard to read with the subscripts for $A$, so I prefer to just use letters instead, even though technically this way of writing is slightly less correct. %%(loser)%%


