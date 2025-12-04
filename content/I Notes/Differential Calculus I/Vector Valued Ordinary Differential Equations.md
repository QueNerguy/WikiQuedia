---
title: "Vector Valued Ordinary Differential Equations"
draft: false
---
tags: [[calculus]], [[differentials]], [[integrals]], [[ODE]], [[linear algebra]], [[vector math]]     <br>30-09-2025

---
# Vector Valued Ordinary Differential Equations
The term *ordinary* is used to differentiate from [partial differential](Partial%20Differentiation) equations[^whyorddiffeq]. Ordinary differential equations will have a functions of a single variable only.

[^whyorddiffeq]: Wikipedia, *Differential equation*, [link](https://en.wikipedia.org/wiki/Differential_equation#Ordinary_differential_equations).

### Geometrical Interpretation
[Differentiation](Differentiation) is not so different for vector valued functions compared to scalar ones. 
Differentiating a vector $\vec{\textbf{a}}$ means  *differentiating the elements* in $\vec{\textbf{a}}$.<br>Thus, in math speak we have
$$
\vec{\textbf{a}} = \begin{bmatrix} a_1 \\ a_2 \\ a_3 \end{bmatrix} \qquad \Rightarrow \qquad \vec{\textbf{a}}' = \begin{bmatrix} a_1' \\ a_2' \\ a_3' \end{bmatrix}
$$


To differentiate [matrices](Matrices) is the exact same: Differentiating [matrix](Matrices) $A$ means *differentiating the elements* in $A$. Remember, a matrix can be seen as a collection of vectors making up it's basis, and as such the same rules apply.<br>In math speak: 
$$
A' = \left[ a_{ij}' \right]
$$

### Solving General Ordinary Differential Equations
Because [differentiation](Differentiation) of vectors is so closely related to differentiation of scalars, we can apply much the same methods for solving *any* vector valued differential equation as we did for solving [generalized differential equations](Generalized%20Ordinary%20Differential%20Equations) to solve most differential equations you'll come across.

#### Example of Solving Process
**To illustrate** the above statement, we will solve the following system, which is a *second order ordinary differential equation*, differentiated with respect to time.
$$
\begin{cases} 4 \ddot{x} \:\:\:\:\:\:\:\:\:\:\:\:\:\:\:\:\:\:\:\: + \:\:\: \dot{y} + 2x + y = 0 \\ \:\:\ddot{x} + 2\ddot{y} +  2\dot{x} + 2\dot{y} \:\:\:\:\:\:\:\:\:\:\: + y = 0\end{cases}
$$
We can rewrite this into a vector form as follows:
$$
\begin{bmatrix} 4 & 0 \\ 1 & 2 \end{bmatrix} \begin{bmatrix} \ddot{x} \\ \ddot{y} \end{bmatrix} + \begin{bmatrix} 0 & 1 \\ 2 & 2 \end{bmatrix} \begin{bmatrix} \dot{x} \\ \dot{y} \end{bmatrix} + \begin{bmatrix} 2 & 1 \\ 0 & 1 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}
$$
We can rewrite this slightly by using the inverse of the fact that differentiating a vector means *differentiating the elements* of that vector. 
$$
\begin{bmatrix} 4 & 0 \\ 1 & 2 \end{bmatrix} \ddot{\begin{bmatrix} x \\ y \end{bmatrix}} + \begin{bmatrix} 0 & 1 \\ 2 & 2 \end{bmatrix} \dot{\begin{bmatrix} x \\ y \end{bmatrix}} + \begin{bmatrix} 2 & 1 \\ 0 & 1 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}
$$
This is a useful formulation, because if we give these matrices some arbitrary names, and also give a variable to our coordinate system of $x$ and $y$ we are very close to the formulation of a [second order differential equation](Second%20Order%20Ordinary%20Differential%20Equations).<br>For example, lets call our coordinate vector $\vec{\textbf{q}}$ and choose $A$, $B$ and $C$ as the names for our matrices.
$$
A \ddot{\vec{\textbf{q}}} + B \dot{\vec{\textbf{q}}} + C \vec{\textbf{q}} = 0
$$
Now, this resembles a *homogeneous* second order differential equation to a t!<br>The exact same process can be done for any order of differential equation with vectors, as long as the expression is linear. That means that when we see $\cos(x)$ appear we have to jump through a couple of hoops to solve%%==LINKJE SOLVING NON LINEAR ORDINARY DIFFERENTIAL EQUATIONS==%%.<br>Continuing the example: To solve the scalar counterpart of these differential equations we start with some trial solution $y = e^{\lambda t}$. Now, because we want a solution for a *vector*, $\vec{\textbf{q}}$, we also guess a trial solution with a vector. Our trial solution is
$$
\vec{\textbf{q}} = \begin{bmatrix} v_1 \\ v_2 \end{bmatrix} e^{\lambda t} = \vec{\textbf{v}} e^{\lambda t}
$$
From here we use the familiar process:
1. Differentiating $\vec{\textbf{q}}$ to $\dot{\vec{\textbf{q}}}$ and $\dot{\vec{\textbf{q}}}$ and substituting into the original equation to find the *characteristic equation*.
2. Solving the characteristic equation to find $\lambda$.
3. Substituting $\lambda$ into the general solution for $y$ to get the *general solution*. 
4. Using *boundary equations* to solve for $c_1$ and $c_2$ to get the *complete solution*.

So, let's do that. 
$$
\vec{\textbf{q}} = \vec{\textbf{v}} e^{\lambda t}
$$
$$
\dot{\vec{\textbf{q}}} = \lambda \vec{\textbf{v}} e^{\lambda t}
$$
$$
\ddot{\vec{\textbf{q}}} = \lambda^2 \vec{\textbf{v}} e^{\lambda t}
$$
When we substitute the new expressions for $\vec{\textbf{q}}$, $\dot{\vec{\textbf{q}}}$ and $\ddot{\vec{\textbf{q}}}$ into the original equation, we get
$$
A \ddot{\vec{\textbf{q}}} + B \dot{\vec{\textbf{q}}} + C \vec{\textbf{q}} \quad = \quad \lambda^2 A \vec{\textbf{v}} e^{\lambda t} + \lambda B \vec{\textbf{v}} e^{\lambda t} + C \vec{\textbf{v}} e^{\lambda t} = 0
$$
To solve the equation $\lambda^2 A \vec{\textbf{v}} e^{\lambda t} + \lambda B \vec{\textbf{v}} e^{\lambda t} + C \vec{\textbf{v}} e^{\lambda t} = 0$ we can divide everything by $e^{\lambda t}$ to just get
$$
(\lambda^2 A + \lambda B + C) \vec{\textbf{v}} = 0
$$
Do keep in mind that this division introduces the possibility of $e^{\lambda t}$ being 0, but, for a *finite* time $t$, $e^{\lambda t}$ can never become 0. <br>From the above expression we can find $\lambda$ by quickly putting back the original expressions for $A$, $B$ and $C$.
$$
\left( \lambda^2 \begin{bmatrix} 4 & 0 \\ 1 & 2 \end{bmatrix} + \lambda \begin{bmatrix} 0 & 1 \\ 2 & 2 \end{bmatrix} + \begin{bmatrix} 2 & 1 \\ 0 & 1 \end{bmatrix} \right) \vec{\textbf{v}} = 0
$$
$$
\left( \begin{bmatrix} 4 \lambda^2 & 0 \\ \lambda^2 & 2\lambda^2 \end{bmatrix} + \begin{bmatrix} 0 & \lambda \\ 2 \lambda & 2 \lambda \end{bmatrix} + \begin{bmatrix} 2 & 1 \\ 0 & 1 \end{bmatrix} \right) \vec{\textbf{v}}= 0
$$
$$
\begin{bmatrix} 4 \lambda^2 + 2 & \lambda + 1 \\ \lambda^2 + 2\lambda & 2\lambda^2 + 2\lambda + 1 \end{bmatrix} \vec{\textbf{v}} = 0
$$
For this system to become 0 we have **two** possibilities: either $\vec{\textbf{v}}$ is the 0-vector, which solution isn't of interest to us, as for physical systems this just means that there is no motion, or the matrix is linearly dependent%%==linkje basisregel van linalg of iets dergelijks==%%. In the last case that means that the determinant%%==linkje DETERMINANT==%% must be 0. As such we compute 
$$
\begin{vmatrix} 4 \lambda^2 + 2 & \lambda + 1 \\ \lambda^2 + 2\lambda & 2\lambda^2 + 2\lambda + 1 \end{vmatrix} = 8\lambda^4 + 7\lambda^3 + 5\lambda^2 + 2\lambda + 2 = 0
$$
The [exact solutions](https://www.wolframalpha.com/input?i2d=true&i=%5C(40)Power%5Bx%2C2%5D%20%2B%202%5C(41)%5C(40)2Power%5Bx%2C%202%5D%2B%202x%20%2B%201%5C(41)%20-%20%5C(40)x%20%2B%201%5C(41)%5C(40)Power%5Bx%2C%202%5D%2B%202x%5C(41)%20%3D%200) for $\lambda$ are too long to mention here, but the approximate solutions are
$$
\begin{matrix} \lambda_1 = -0.7 - 0.6i \\ \lambda_2 = -0.7 + 0.6i \\ \lambda_3 = 0.4 - i \\ \lambda_4 = 0.4 + i  \end{matrix}
$$
Now that we have found solutions for $\lambda$, let's look at the guessed solution. $\vec{\textbf{q}} = \vec{\textbf{v}} e^{\lambda t}$, we still need to find $\vec{\textbf{v}}$. We can do this by filling in the result of $\lambda$ into the matrix above and row reducing%%==LINKJE ROW REDUCTION OR WHATEVER==%% to find the associated vector.
$$
\vec{\textbf{v}}_1 \rightarrow
\left[\begin{array}{rr|r}
4 \lambda_1^2 + 2 & \lambda_1 + 1 & 0 \\
\lambda_1^2 + 2\lambda_1 & 2\lambda_1^2 + 2\lambda_1 + 1  & 0
\end{array}\right]
$$
In this case the **4** solutions for $\vec{\textbf{v}}$ will be [complex](#3.%20Complex%20Solutions). <br>We will find $\vec{\textbf{q}}$ to be a linear combination of the 4 roots:
$$
\vec{\textbf{q}} = c_1 \vec{\textbf{v}}_1 e^{\lambda_1 t} + c_2 \vec{\textbf{v}}_2 e^{\lambda_2 t} + c_3 \vec{\textbf{v}}_3 e^{\lambda_3 t} + c_4 \vec{\textbf{v}}_4 e^{\lambda_4 t}
$$

>[!error]
> These have to be linearly dependent in some way, $\vec{\textbf{q}}$ only has two dimensions.


%%
>[!warning]
> In the example above the quadratic formula was used to obtain a solution for $\lambda$. For polynomials of 5$^{\text{th}}$ degree or higher a method like this doesn't exist. This means that this method is not viable for solving *any* order differential equation, only differential equations up to and including 4$^{\text{th}}$ order, unless you get lucky with the matrices somehow.

%%

### Solving Two Term Differential Equations
This chapter will discuss solving any order differential equation of the form
$$
\vec{\textbf{x}}^{(n)} = A \vec{\textbf{x}} \qquad \text{or} \qquad \vec{\textbf{x}}^{(n)} + A \vec{\textbf{x}} = 0
$$
This is especially useful for [first order differential equations](First%20Order%20Ordinary%20Differential%20Equations.md) because they <u>only</u> have expression this as their *homogeneous* form. 
> [!note]
> The above equation can be any *homogeneous equation*. To make the explanation more concrete however, from now on we will treat the case of the first order $\vec{\textbf{x}}'$, but remember that the methods look and act the same regardless of the order. 


$A$ is the transformation [matrix](Matrices) that changes the coordinate vector $\vec{\textbf{x}}$ to become the differentiated coordinate vector $\vec{\textbf{x}}'$. To make the vector form more similar to the notation we would use for scalar valued functions, we could rewrite the above equation to $\vec{\textbf{x}}' - A \vec{\textbf{x}} = 0$. <br>We cannot integrate these equations directly [like we did before](First%20Order%20Ordinary%20Differential%20Equations.md#Separable%20Equations) for first order systems. Instead, we may use the same trick we used for [second order systems](Second%20Order%20Ordinary%20Differential%20Equations.md), where we take a **trial solution** of $\vec{\textbf{x}} = \vec{\textbf{v}}e^{\lambda t}$, with derivative $\vec{\textbf{x}}' = \lambda \vec{\textbf{v}} e^{\lambda t}$. <br>If we substitute this into the equation $\vec{\textbf{x}}' = A \vec{\textbf{x}}$, we get
$$
\vec{\textbf{x}}' = A \vec{\textbf{x}} \qquad \Rightarrow \qquad \lambda \vec{\textbf{v}} e^{\lambda t} = A \vec{\textbf{v}} e^{\lambda t}
$$
We can divide by $e^{\lambda t}$ as it appears on both sides and get
$$
\lambda \vec{\textbf{v}} = A \vec{\textbf{v}}
$$
>[!abstract] Higher Order Differential Cases
> For higher order differentials we would use $\vec{\textbf{x}} = \vec{\textbf{v}}e^{\alpha t}$. The reason for this slight change will be apparent after we substitute this into the equation for the second order:
> $$
> \vec{\textbf{x}}'' = A \vec{\textbf{x}} \qquad \Rightarrow \qquad \alpha ^2 \vec{\textbf{v}} e^{\alpha}t = A \vec{\textbf{v}} e^{\alpha t}
> $$
> $$
> \alpha ^2 \vec{\textbf{v}} e^{\alpha}t = A \vec{\textbf{v}} e^{\alpha t} \quad \Rightarrow \quad \lambda \vec{\textbf{v}} e^{\alpha}t = A \vec{\textbf{v}} e^{\alpha t} \quad \Rightarrow \quad \lambda \vec{\textbf{v}} = A \vec{\textbf{v}}
> $$
> From here we can continue the computation in exactly the same way as the first order.

You might recognize this form from the explanation of [eigenvalues](Eigenvectors%20and%20Eigenvalues). Here too our goal is to find $\vec{\textbf{v}}$, and thus we can use the same principles as used to find the eigenvalues of a matrix. <br>We rearrange the equation to get
$$
A\vec{\textbf{v}} - \lambda I\vec{\textbf{v}} = 0 \qquad \Rightarrow \qquad (A - \lambda I) \vec{\textbf{v}} = 0
$$
For $\left( A - \lambda I \right)$ to become 0 under multiplication with $\vec{\textbf{v}}$ we have two solutions.
1. $\vec{\textbf{v}}$ is 0.
2. $\left( A - \lambda I \right)$ is linearly dependent.

Linearly dependent matrices essentially have one dimension less than they are big. In a 2D space you can imagine this as the matrix creating a line instead of a plane. To find out whether the matrix makes this plane or a line we may use the determinant%%==LINKJE DETERMINANT==%%, because it is similar to a measure of the area under the matrix. Because lines have no area, the determinant is 0. <br>Thus, assuming $\vec{\textbf{v}}$ isn't the 0-vector, we can thus find $\lambda$ by solving
$$
 \left| A - \lambda I \right| = 0
$$
We can then find $\vec{\textbf{v}}$ by using the earlier equation $(A - \lambda I) \vec{\textbf{v}} = 0$ and solving the augmented matrix $\left[ A - \lambda I \: | \: 0 \right]$. Notice that $\vec{\textbf{v}}$ is the *eigenvector* of matrix $A$. <br>Recount from [generalized ODEs](Generalized%20Ordinary%20Differential%20Equations.md) that the solution to any differential equation can be written as a linear combination of every solution for $\vec{\textbf{x}}$, with as many solutions as there are roots of the *characteristic equation*. In the case of our $\vec{\textbf{x}}$ then, we can write for our **general solution** that
$$
\vec{\textbf{x}} = c_1 \vec{\textbf{x}}_1 + c_2 \vec{\textbf{x}}_ 2 + \dots + c_n \vec{\textbf{x}}_n \qquad \Rightarrow \qquad \vec{\textbf{x}} = c_1 \vec{\textbf{v}}_1 e^{\lambda _1 t} + c_2 \vec{\textbf{v}}_2 e^{\lambda _2 t} + \dots + c_n \vec{\textbf{v}}_n e^{\lambda _n t}
$$
The solution for $\vec{\textbf{x}}$ can thus be found by finding the *eigenvalues*, $\lambda$, and the *[eigenvectors](Eigenvectors%20and%20Eigenvalues)*, $\vec{\textbf{v}}$, of matrix $A$. <br>The amount of eigenvalues, and subsequently the amount of particular solutions, is determined by the dimension of matrix $A$. The amount of roots the characteristic equation will have is the same as the dimension of $A$.

---
To generalize the use of this method further, the continuing chapters outline how to solve problems in the following situations.
1. ***The equation is [nonhomogeneous](#1.%20Nonhomogeneous%20Differential%20Equations).***
2. ***The equation has [repeating eigenvalues](#2.%20Repeating%20Eigenvalues).***
3. ***The equation has [complex solutions](#3.%20Complex%20Solutions).***
4. ***The equation has specified [initial values](#4.%20Initial%20Value%20Problems).***
5. ***We wish to solve using [matrix exponentials](#5.%20Solving%20Using%20Matrix%20Exponentials).***
#### 1. Nonhomogeneous Differential Equations
Nonhomogeneous first order DEs are of the form
$$
\vec{\textbf{x}}' = A \vec{\textbf{x}} + \vec{\textbf{f}}(t)
$$
$\vec{\textbf{f}}(t)$ is the term that makes this equation nonhomogeneous, it isn't multiplied with $\vec{\textbf{x}}$.<br>In [generalized differential equations](Generalized%20Ordinary%20Differential%20Equations.md) we saw that a solution for $y$ is made up of a *complementary solution* $y_c$, which is the solution to the homogeneous version of the desired equation, and a *particular solution* $y_p$. For matrices we would say
$$
\vec{\textbf{x}} = \vec{\textbf{x}}_c + \vec{\textbf{x}}_p
$$
Like we saw for generalized differential equations there's 2 ways to find the particular solution. 
1. ___Method of Undetermined Coefficients:___ The easiest way to find $\vec{\textbf{x}}_p$ is to assume a solution based on what the nonhomogeneous term, referred to as $\vec{\textbf{f}}(t)$, looks like. For example if we had the equation[^creditbook]. 
$$
\vec{\textbf{x}}' = \begin{bmatrix} 3 & 2 \\ 7 & 5 \end{bmatrix} \vec{\textbf{x}} + \begin{bmatrix} 3 \\ 2t \end{bmatrix}
$$
We can split up $\begin{bmatrix} 3 \\ 2t \end{bmatrix}$ into a normal vector and a variable (namely $t$) dependent part.
$$
\vec{\textbf{x}}' = \begin{bmatrix} 3 & 2 \\ 7 & 5 \end{bmatrix} \vec{\textbf{x}} + \begin{bmatrix} 0 \\ 2 \end{bmatrix} t + \begin{bmatrix} 3 \\ 0 \end{bmatrix}
$$
Our nonhomogeneous part $\vec{\textbf{f}}(t)$ is then $\begin{bmatrix} 0 \\ 2 \end{bmatrix} t + \begin{bmatrix} 3 \\ 0 \end{bmatrix}$. This looks like a first degree polynomial, $at + b$, so our assumption of what the particular solution will look like would be
$$
\vec{\textbf{x}}_p = \vec{\textbf{a}}t + \vec{\textbf{b}} \qquad \Rightarrow \qquad \vec{\textbf{x}}_p = \begin{bmatrix} a_1 \\ a_2 \end{bmatrix} t + \begin{bmatrix} b_1 \\ b_2 \end{bmatrix} = \begin{bmatrix} a_1 t + b_1 \\ a_2 t + b_2 \end{bmatrix}
$$
Similarly to solving scalar valued functions, our next step is to substitute $\vec{\textbf{x}}_p$ for $\vec{\textbf{x}}$ and $\vec{\textbf{x}}_p'$ for $\vec{\textbf{x}}'$ in the original equation. Realizing that $\vec{\textbf{x}}_p' = \begin{bmatrix} a_1 \\ a_2 \end{bmatrix}$ this gives us
$$
\vec{\textbf{x}}_p' = \begin{bmatrix} 3 & 2 \\ 7 & 5 \end{bmatrix} \vec{\textbf{x}}_p + \begin{bmatrix} 3 \\ 2t \end{bmatrix} \qquad \Rightarrow \qquad \begin{bmatrix} a_1 \\ a_2 \end{bmatrix}  = \begin{bmatrix} 3 & 2 \\ 7 & 5 \end{bmatrix} \begin{bmatrix} a_1 t + b_1 \\ a_2 t + b_2 \end{bmatrix} + \begin{bmatrix} 3 \\ 2t \end{bmatrix}
$$
Reordering a bit to give us a solution with one matrix that's in terms of $t$ and one that's not:
$$
\begin{bmatrix} a_1 \\ a_2 \end{bmatrix} = \begin{bmatrix} 3a_1 + 2a_2 \\ 7a_1 + 5a_2 + 2 \end{bmatrix}t + \begin{bmatrix} 3b_1 + 2b_2 + 3 \\ 7b_1 + 5b_2 \end{bmatrix}
$$
We can further solve this by seeing that the left hand can be written as $\begin{bmatrix} 0 \\ 0 \end{bmatrix} t + \begin{bmatrix} a_1 \\ a_2 \end{bmatrix}$, and therefore that the matrix that's multiplied with $t$ on the right is equal to 0, whereas the other matrix is equal to $\begin{bmatrix} a_1 \\ a_2 \end{bmatrix}$. This gives us the system
$$
\begin{cases} 3 a_1 + 2a_2 = 0 \\ 7a_1 + 5a_2 + 2 = 0\\ 3b_1 + 2b_2 + 3 = a_1 \\ 7b_1 + 5b_2 = a_2 \end{cases}
$$
Skipping some steps, we find that $a_1 = 4$, $a_2 = -6$, $b_1 = 17$ and $b_2 = -25$. Our solution for $\vec{\textbf{x}}_p$ is then
$$
\vec{\textbf{x}}_p = \begin{bmatrix} 4 \\ -6 \end{bmatrix} t + \begin{bmatrix} 17 \\ -25 \end{bmatrix}
$$
Below is a list of assumptions for our particular solution for different expression for $\vec{\textbf{f}}(t)$.

| Expression for $f(t)$                                                                   | Assumed solution for $y_p$[^credit]                                                              |
| --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| $$\vec{\textbf{a}}\cos (\vec{\textbf{c}} t)$$                                           | $$\vec{\textbf{A}}\cos(\vec{\textbf{c}} t) + \vec{\textbf{B}}\sin(\vec{\textbf{c}} t)$$          |
| $$\vec{\textbf{a}}\sin (\vec{\textbf{c}}t)$$                                            | $$\vec{\textbf{A}}\cos(\vec{\textbf{c}} t) + \vec{\textbf{B}}\sin(\vec{\textbf{c}} t)$$          |
| $$\vec{\textbf{a}}\cos(\vec{\textbf{c}} t) + \vec{\textbf{a}}\sin(\vec{\textbf{c}} t)$$ | $$\vec{\textbf{A}}\cos(\vec{\textbf{c}} t) + \vec{\textbf{B}}\sin(\vec{\textbf{c}} t)$$          |
| $$\vec{\textbf{a}}e^{\vec{\textbf{c}}t}$$                                               | $$\vec{\textbf{A}}e^{\vec{\textbf{c}}t}$$                                                        |
| Polynomial, $n^{\text{th}}$ grade[^erm2]                                                | $$\vec{\textbf{A}}t^n + \vec{\textbf{B}}t^{n-1} + \dots + \vec{\textbf{Y}}t + \vec{\textbf{Z}}$$ |
Do note that in this case the capital letters do **not** indicate matrices, but represent vectors.

2. ___Method of Variation of Parameters:___ The method of variation of parameters can be used for equations where $\vec{\textbf{f}}(t)$ isn't in the table above. To find $\vec{\textbf{x}}_p$ we make use of the complementary solution. We start with
$$
\vec{\textbf{x}}_c = X \vec{\textbf{c}}
$$
Here, $\vec{\textbf{c}}$ is the vector that contains all constants $c_1$, $c_2$, etc. To illustrate the meaning of the fundamental matrix $X$ which contains the solution for $\vec{\textbf{x}}$ if it were a homogeneous system, take the following complementary solution[^source]:
$$
\vec{\textbf{x}}_c = c_1 e^{-2t} \begin{bmatrix} 1 \\ -3 \end{bmatrix} + c_2 e^{5t} \begin{bmatrix} 2 \\ 1 \end{bmatrix}
$$
To find $X$ we combine the two vectors, but isolate $c_1$ and $c_2$.
$$
\vec{\textbf{x}}_c = \begin{bmatrix} e^{-2t} + 2e^{5t} \\ -3e^{-2t} + e^{5t} \end{bmatrix} \begin{bmatrix} c_1 \\ c_2 \end{bmatrix} = X \vec{\textbf{c}}
$$
Thus we find that
$$
X = \begin{bmatrix} e^{-2t} + 2e^{5t} \\ -3e^{-2t} + e^{5t} \end{bmatrix}
$$
From the form $X \vec{\textbf{c}}$ we can eliminate the undetermined constants. Our goal is to find a solution
$$
\vec{\textbf{x}}_p = X \vec{\textbf{u}}
$$
And so the remaining step is to find an expression for $\vec{\textbf{u}}$. I don't think the derivation is particularly relevant here, if interested, a good derivation can be found on page 366 of _Differential Equations and Boundary Value Problems_.
$$
\vec{\textbf{u}} = \int X^{-1} \: \vec{\textbf{f}}(t) \: dt
$$
Thus our **final equation** to find $\vec{\textbf{x}}_p$ becomes
$$
\vec{\textbf{x}}_p = X \int X^{-1} \: \vec{\textbf{f}}(t) \: dt
$$

#### 2. Repeating Eigenvalues
When solving the characteristic equation it may happen that a solution for $\lambda$ appears more than once. In other words, $\lambda$ has a multiplicity of more than 1. If this happens there are 2 scenarios:
1. ***We can use a single [eigenvalue](Eigenvectors%20and%20Eigenvalues) to find multiple [eigenvectors](Eigenvectors%20and%20Eigenvalues):*** When substituting the repeating root into $(A - \lambda I)\vec{\textbf{v}} = 0$ we may get a solution for $\vec{\textbf{v}}$ with a free variable. For example[^source] we may find a solution with a free variable $c$, and $b = - \frac{3}{2} a$. In that case our $\vec{\textbf{v}}$ becomes
$$
\vec{\textbf{v}} = c \begin{bmatrix} 0 \\ 0 \\ 1 \end{bmatrix} + \frac{1}{2}a \begin{bmatrix} 2 \\ -3 \\ 0 \end{bmatrix}
$$
To get two eigenvectors from this single eigenvector, realize that these solutions must per definition be linearly independent, and thus we could write
$$
\vec{\textbf{v}} = c \vec{\textbf{v}}_1 + \frac{1}{2}a \vec{\textbf{v}}_2
$$
$$
\vec{\textbf{v}}_1 = \begin{bmatrix} 0 \\ 0 \\ 1 \end{bmatrix}, \quad \vec{\textbf{v}}_2 = \begin{bmatrix} 2 \\ -3 \\ 0 \end{bmatrix}
$$
We now have two linearly independent vectors that have the same properties as the eigenvector, and we can use them as such in our solutions to differential equations. <br>Because this is possible with this $\lambda$, we call this repeating root a complete eigenvalue.<br>
2. ***The multiplicative eigenvalue doesn't produce enough independent vectors:*** Consider the following system[^source] where we have the repeating eigenvalue $\lambda = 4$. 
$$
(A - 4I)\vec{\textbf{v}} = \begin{bmatrix} -3 & -3 \\ 3 & 3 \end{bmatrix} \begin{bmatrix} a \\ b \end{bmatrix} = 0
$$
Solving for $a$ and $b$ gives us $a = -b$, but no free variable that can create a second linearly independent vector. If we say $a = 1$ then the only solution for $\vec{\textbf{v}}$ is
$$
\vec{\textbf{v}}_1 = \begin{bmatrix} 1 \\ -1 \end{bmatrix}
$$
Therefore we can't use method **1.** and we call the eigenvalue $\lambda = 4$ *defective*. <br>In this chapter a multiplicity of 2 for a single eigenvalue will be discussed, not the general case. <br>We find a solution by trial. To show the whole thought process that leads to the final expression, we must first show why the previous methods used for multiplicities don't work here. <br>We thus start by using the same technique as used for repeated roots in scalar equations, where we multiply the repeating term with $t$. We choose a yet to be determined second eigenvector $\vec{\textbf{v}}_2$ and write
$$
\vec{\textbf{x}}_2 = \vec{\textbf{v}}_2 te^{\lambda t}
$$
The term $\vec{\textbf{x}}_2$ is used because we have already found an eigenvector, meaning that the expression for $\vec{\textbf{x}}_1$ already exists. <br>We can substitute $\vec{\textbf{x}}_2$ into the original equation $\vec{\textbf{x}}' = A \vec{\textbf{x}}$. While substituting, keep in mind that applying the chain rule for the derivative of $\vec{\textbf{x}}_2$ yields $\vec{\textbf{x}}_2' = \vec{\textbf{v}}_2 \lambda t e^{\lambda t} + \vec{\textbf{v}}_2 e^{\lambda t}$.
$$
\vec{\textbf{x}}_2' = A \vec{\textbf{x}}_2 \qquad \Rightarrow \qquad \left( \vec{\textbf{v}}_2 \lambda t e^{\lambda t} + \vec{\textbf{v}}_2 e^{\lambda t} \right) = A \left( \vec{\textbf{v}}_2 te^{\lambda t} \right)
$$
We can see two equations emerge from this,
$$
\left( \vec{\textbf{v}}_2 \lambda \right) te^{\lambda t} = \left(A \vec{\textbf{v}}_2 \right) te^{\lambda t} \qquad \text{and} \qquad \vec{\textbf{v}}_2 e^{\lambda t} = 0 \cdot e^{\lambda t}
$$
Thus we have that $\vec{\textbf{v}}_2$ is 0. This means that multiplying by $t$ does not give a non-zero answer for the second eigenvector, **and this method doesn't work**.<br>Next, we try a combination of *both eigenvectors*, the known eigenvector $\vec{\textbf{v}}_1$, and the to-be-determined second eigenvector, $\vec{\textbf{v}}_2$. <br>We try
$$
\vec{\textbf{x}}_2 = \left( \vec{\textbf{v}}_1 t + \vec{\textbf{v}}_2 \right) e^{\lambda t}
$$
Once again, we substitute $\vec{\textbf{x}}_2$ into the equation $\vec{\textbf{x}}_2' = A \vec{\textbf{x}}_2$, whilst keeping in mind that the derivative of $\vec{\textbf{x}}_2$ is $\vec{\textbf{v}}_1 e^{\lambda t} + \vec{\textbf{v}}_1 \lambda t e^{\lambda t} + \vec{\textbf{v}}_2 \lambda e^{\lambda t}$.
$$
\vec{\textbf{x}}' = A \vec{\textbf{x}} \quad \Rightarrow \quad \vec{\textbf{v}}_1 e^{\lambda t} + \vec{\textbf{v}}_1 \lambda t e^{\lambda t} + \vec{\textbf{v}}_2 \lambda e^{\lambda t} = A \left( \vec{\textbf{v}}_1 t + \vec{\textbf{v}}_2 \right) e^{\lambda t}
$$
Here too, we can see two equations emerge, namely the terms with $te^{\lambda t}$, and those with $e^{\lambda t}$.
$$
\left( \vec{\textbf{v}}_1 + \vec{\textbf{v}}_2 \lambda \right) e^{\lambda t} = A \vec{\textbf{v}}_2 e^{\lambda t} \quad \text{and} \quad \vec{\textbf{v}}_1 \lambda t e^{\lambda t} = A \vec{\textbf{v}}_1t e^{\lambda t}
$$
$$
\vec{\textbf{v}}_1 + \vec{\textbf{v}}_2 \lambda = A \vec{\textbf{v}}_2 \quad \text{and} \quad \vec{\textbf{v}}_1 \lambda = A \vec{\textbf{v}}_1
$$
$$
(A - \lambda I) \vec{\textbf{v}}_2 = \vec{\textbf{v}}_1 \quad \text{and} \quad (A - \lambda I) \vec{\textbf{v}}_1 = 0
$$
Recognize the second term of the last equation as part of the steps taken to find $\vec{\textbf{v}}_1$ in the first place. The appearance of this term *confirms* that $\vec{\textbf{v}}_1$ is indeed an eigenvector, and by extension, so will be $\vec{\textbf{v}}_2$. <br>To find $\vec{\textbf{v}}_2$, we can solve the augmented matrix $\left[A- \lambda I \: | \: \vec{\textbf{v}}_1 \right]$. <br>Continuing the numerical example, where, as shown at the start, we have $\lambda = 4$ and the augmented matrix was
$$
\left[A- \lambda I \: | \: \vec{\textbf{v}}_1 \right] = \left[ \begin{array}{cc|c} -3 & -3 & 1 \\ 3 & 3 & -1 \end{array} \right]
$$
We can now find $\vec{\textbf{v}}_2$ by row reducing this matrix. <br>Another - more direct - way to find $\vec{\textbf{v}}_2$ can be found by rewriting some of the previous formulas. Namely, we can simplify the original equation $(A - \lambda I) \vec{\textbf{v}}_2 = \vec{\textbf{v}}_1$ by substituting into the second equation we obtained[^arithmetic]. <br>This yields
$$
(A - \lambda I)^2 \vec{\textbf{v}}_2 = 0
$$
We can thus always find $\vec{\textbf{v}}_2$ by solving the augmented matrix $\left[\begin{array}{c|c} (A-\lambda I)^2 & 0  \end{array}\right]$. %%<br>Because we guessed $\vec{\textbf{x}}_2 = \left( \vec{\textbf{v}}_1 t + \vec{\textbf{v}}_2 \right) e^{\lambda t}$, we have for our solutions $\vec{\textbf{x}}_1$ and $\vec{\textbf{x}}_2$ ==end of this example went missing and im too lazy to find it in that shit book agane==%%


>[!abstract] Inventory
> When a system has repeating [eigenvalues](Eigenvectors%20and%20Eigenvalues) *with multiplicity 2* we start by finding the [eigenvector](Eigenvectors%20and%20Eigenvalues) associated with these eigenvalues. If that eigenvector is of the form
> $$
> \vec{\textbf{v}} = a \vec{\textbf{v}}_1 + b \vec{\textbf{v}}_2
> $$
> then we have found the two eigenvectors $\vec{\textbf{v}}_1$ and $\vec{\textbf{v}}_2$ we can use in it's place. If it doesn't, we solve the system
> $$
> (A - \lambda I)^2 \vec{\textbf{v}}_2 = 0
> $$
> to obtain a second eigenvector $\vec{\textbf{v}}_2$. We call the first found eigenvector $\vec{\textbf{v}}_1$. If this method is used, the solutions for $\vec{\textbf{x}}_c$ are
> $$
> \vec{\textbf{x}}_1 = \vec{\textbf{v}}_1 e^{\lambda t}
> $$
> $$
> \vec{\textbf{x}}_2 = \left( \vec{\textbf{v}}_1 t + \vec{\textbf{v}}_2 \right) e^{\lambda t}
> $$






#### 3. Complex Solutions
Trying to find the [eigenvalues](Eigenvectors%20and%20Eigenvalues) for some real systems may yield imaginary eigenvalues as a result of the characteristic equation. For example[^source] see the characteristic equation
$$
(4 - \lambda) ^2 + 9 = 0 \qquad \Rightarrow \qquad \lambda = 4 \pm \sqrt{-9} = 4 \pm 3i
$$
In the case of complex eigenvalues we always have a solution $\lambda$ and a solution $\bar{\lambda}$, in this case we have $\lambda_1 = \lambda = 4 + 3i$ and $\lambda_2 = \bar{\lambda} = 4 - 3i$. The appearance of a positive and a negative imaginary part is a result of the square root as part of the definition of $i$. A square root's solutions are always plus or minus the *enclosed term* and as a result complex solutions will always have a positive and a negative <u>imaginary</u> term.  <br>Complex solutions are no less valid than real solutions, and the [eigenvectors](Eigenvectors%20and%20Eigenvalues) $\vec{\textbf{v}}$ can be found all the same by solving $\left[ A - \lambda I \right] \vec{\textbf{v}} = 0$. The resulting eigenvector can also be complex. To show how these are treated: In the case of the first example we could have a solution for the eigenvector like $\vec{\textbf{v}}_1 = \begin{bmatrix} 1 \\ i \end{bmatrix}$. This eigenvector can be split into a real and an imaginary part, $\vec{\textbf{v}}_1 = \begin{bmatrix} 1 \\ 0 \end{bmatrix} + \begin{bmatrix} 0 \\ 1 \end{bmatrix} i$. Calling only the real part is done by writing $\text{Re} \left[ \vec{\textbf{v}}_1 \right]$, and the imaginary part by writing $\text{Im} \left[ \vec{\textbf{v}}_1 \right]$. The result from calling $\text{Im} \left[ \vec{\textbf{v}}_1 \right]$ does not include $i$ itself! <br>For complex solutions we can save some time on finding the eigenvectors, because even though we will have **two** roots for $\lambda$ (namely $\lambda_1 = \lambda$ and $\lambda_2 = \bar{\lambda}$) the solution for $\vec{\textbf{x}}$ of this homogeneous system *can* use only **one** of these values to find **both** eigenvectors if we wish to. The system requires two solutions - because there are two roots to the characteristic equation - but because our solution is complex we can break the solution for one of them up into a *real* and an *imaginary* part, and thus get two solutions from a single eigenvalue and eigenvector combination. We thus don't need to compute a $\vec{\textbf{v}}_2$ and can choose the $\lambda$ that eases our computations as much as possible.<br>To illustrate see the following problem. We have found the first solution for $\vec{\textbf{x}}$, call it $\vec{\textbf{x}}_a$, and we want to use this expression alone to get a complete formulation for $\vec{\textbf{x}}$. We have
$$
\vec{\textbf{x}}_a = \vec{\textbf{v}}_1 e^{\lambda t} = \begin{bmatrix} 1 \\ i \end{bmatrix} e^{(4 - 3i) t}
$$
We can break this solution up by using *[Euler's formula](https://en.wikipedia.org/wiki/Euler's_formula)*[^deriv], which has
$$
e^{i \theta} = \cos({\theta}) + i\sin(\theta)
$$
To apply this to our case, know that complex functions where $\lambda$ has a solution $a + bi$ can be deconstructed as follows:
$$
e^{(a+bi)t} = e^{at}e^{ibt} = e^{at}\left[ \cos({bt}) + i\sin(bt) \right]
$$
Thus, in our case, we get
$$
\vec{\textbf{x}}_a = \begin{bmatrix} 1 \\ i \end{bmatrix} e^{(4 - 3i) t} = \begin{bmatrix} 1 \\ i \end{bmatrix} e^{4t} \left[ \cos(-3t) + i\sin(-3t) \right]
$$
$$
\vec{\textbf{x}}_a = e^{4t} \begin{bmatrix} \cos(-3t) + i\sin(-3t) \\ i[\cos(-3t) + i\sin(-3t)] \end{bmatrix} = e^{4t} \begin{bmatrix} \cos(-3t) + i\sin(-3t) \\ i\cos(-3t) - \sin(-3t) \end{bmatrix}
$$
To illustrate that the above equation for $\vec{\textbf{x}}_a$ is indeed a linear combination of $\vec{\textbf{x}}_1$ and $\vec{\textbf{x}}_2$ and thus a complete and valid solution for $\vec{\textbf{x}}$, we can break it up into the real and imaginary parts, where $\vec{\textbf{x}}_1 = \text{Re}[\vec{\textbf{x}}]$ and $\vec{\textbf{x}}_2 = \text{Im}[\vec{\textbf{x}}]$.
$$
\vec{\textbf{x}}_1 = \text{Re}[\vec{\textbf{x}}] = e^{4t} \begin{bmatrix} \cos(-3t) \\ - \sin(-3t) \end{bmatrix}
$$
$$
\vec{\textbf{x}}_2 = \text{Im}[\vec{\textbf{x}}] = \text{Im}\left[ e^{4t} \begin{bmatrix} i\sin(-3t) \\ i\cos(-3t) \end{bmatrix} \right] = e^{4t} \begin{bmatrix} \sin(-3t) \\ \cos(-3t) \end{bmatrix}
$$
Finally, to show that $\vec{\textbf{x}}_a$ is indeed a linear combination we can combine the terms again. While combining, keep in mind that $\vec{\textbf{x}}_2$ is the imaginary part, and must thus be multiplied with $i$ again to give back the original equation, thus $\vec{\textbf{x}}_a = \text{Re}[\vec{\textbf{x}}_a] + i \cdot \text{Im} [\vec{\textbf{x}}_a]$. Back substituting $\vec{\textbf{x}}_1 = \text{Re}[\vec{\textbf{x}}_a]$ and $\vec{\textbf{x}}_2 = \text{Im}[\vec{\textbf{x}}_a]$ from before, we get
$$
\vec{\textbf{x}}_a = \vec{\textbf{x}}_1 + i \vec{\textbf{x}}_2 = e^{4t} \begin{bmatrix} \cos(-3t) \\ - \sin(-3t)] \end{bmatrix} + ie^{4t} \begin{bmatrix} \sin(-3t) \\ \cos(-3t) \end{bmatrix}
$$
Thus we have found a complete expression for $\vec{\textbf{x}}$ without ever having to compute the second eigenvector.

%%Make real by wegpoetsing van $i$???
Note that this solution is no more or less valid than the original solution for $\vec{\textbf{x}}_p$, it is just a different form of the same solution. Be aware that this is still a particular solution, not the general solution.<br>The **general real**[^genimag] **solution** is
$$
\vec{\textbf{x}}_{\text{real}} = c_1 \vec{\textbf{x}}_1 + c_2 \vec{\textbf{x}}_2 = c_1 e^{4t} \begin{bmatrix} \cos(-3t) \\ - \sin(-3t)] \end{bmatrix} + c_ 2e^{4t} \begin{bmatrix} \sin(-3t) \\ \cos(-3t) \end{bmatrix}
$$
Lastly, the associated scalar solution looks like
$$
\vec{\textbf{x}}_\text{real} = \begin{cases} e^{4t} [c_1 \cos(-3t) + c_ 2\sin(-3t)] \\ e^{4t} [c_2 \cos(-3t) - c_1\sin(-3t)] \end{cases}
$$
%%

>[!abstract] Inventory
> The long and short of complex solutions is that solving them is done using the same methods and steps as are necessary for non-complex solutions, with the difference being applying *Euler's formula* and not necessarily having to compute all eigenvectors to find a solution. 


%%> Furthermore, depending on the use case it can be beneficial to find a real solution $\vec{\textbf{x}}_\text{real}$ instead of the original complex $\vec{\textbf{x}}$.%%

---

For physical systems, say we have a mass on a spring that oscillates back and forth, the motion of the mass is described only by the real axis of the solution above. Thus, the solution for $\vec{\textbf{x}}_p$ is only $\vec{\textbf{x}}_1$. The real part of the solution tells us how much the function decays, and the imaginary part tells us how the solution oscillates[^q3b1b]. For a more complete intuitive understanding of imaginary solutions to differential equations I recommend [this video by 3Blue1Brown](https://youtu.be/-j8PzkZ70Lg?si=DyUTLJWS5O1XEbRf).

[^q3b1b]: 3Blue1Brown, *The Physics of Euler's Formula | Laplace Transform Prelude*, 10-2025, US, [link](https://youtu.be/-j8PzkZ70Lg?si=LLhxjRJosSpOCZIJ).





#### 4. Initial Value Problems
To find the complete solution for $\vec{\textbf{x}}$, eliminating the constants $c$, we need a constraint (initial value) for $\vec{\textbf{x}}$, for example we could have $\vec{\textbf{x}}(3) = \vec{\textbf{b}}$. To find a complete expression for $\vec{\textbf{x}}$, notice that we can rewrite the general solution for $\vec{\textbf{x}}$ to
$$
\vec{\textbf{x}} = X\vec{\textbf{c}}
$$
$X$ is a matrix containing every solution $\vec{\textbf{x}}_1$, $\vec{\textbf{x}}_2$ etc, named the *fundamental matrix*, and $\vec{\textbf{c}}$ contains all constants $c_1$, $c_2$ etc. <br>We know that $\vec{\textbf{x}}(3) = \vec{\textbf{b}}$, and we can thus rewrite this equation to
$$
\vec{\textbf{x}}(3) = X(3) \vec{\textbf{c}} = \vec{\textbf{b}}
$$
To find $\vec{\textbf{c}}$ we can solve the *augmented matrix* $\left[ X(3) \: | \: \vec{\textbf{b}} \right]$.



#### 5. Solving Using Matrix Exponentials
It is possible to construct a solution to the equation $\vec{\textbf{x}}' = A\vec{\textbf{x}}$ directly from the matrix $A$, using the same methodology as used to solve [scalar differential equations](Generalized%20Ordinary%20Differential%20Equations.md)[^seealso]. <br>To start it is important to know the computational rules of **exponential matrices**. Without proving this[^proof], for a matrix with only entries along it's diagonal $D = \begin{bmatrix} a & 0 \\ 0 & b \end{bmatrix}$, we have
$$
e^D = \begin{bmatrix} e^a & 0 \\ 0 & e^b \end{bmatrix}, \quad e^{\vec{\textbf{0}}} = I
$$
To find an expression for a general matrix $A$, we invoke the definition of a scalar exponent, $e^a$, which has
$$
e^a = \frac{a^0}{0!} + \frac{a^1}{1!} + \frac{a^2}{2!} + \dots + \frac{a^n}{n!}
$$
In the case of this general matrix $A$ this looks like
$$
e^A = \frac{A^0}{0!} + \frac{A^1}{1!} + \frac{A^2}{2!} + \dots + \frac{A^n}{n!} = I + A + \frac{A^2}{2} + \frac{A^3}{6} + \dots \frac{A^n}{n!}
$$
For exponentials with powers of a matrix and a scalar, such as the variable $t$, we get
$$
e^{At} = I + At + \frac{A^2t^2}{2} + \frac{A^3 t^3}{6} + \dots + \frac{A^n t^n}{n!}
$$
An example of how to compute matrices with this formulation is given [here](example%20computing%20a%20exponential%20with%20a%20matrix%20At.md).
<br><br>**This chapter is currently unfinished**




%%==UNFINISHED TEXT, NEEDS REST OF METHODOLOGY DESCRIBED YET. CURRENT INFO TAKEN FROM CHAPTER 5.6==%%









---
__[Home](!%20Differential%20Calculus%20I%20Learning%20Overview.md)__ 

---
_Status:_ #sprout #missingLink 

---
# Based On:
1. C. H. Edwards, D. E. Penney, D. Calvis, _Differential Equations and Boundary Value Problems_, 5th ed, US.


[^creditbook]:  C. H. Edwards, D. E. Penney, D. Calvis, _Differential Equations and Boundary Value Problems_, p363, 5th ed, US.
[^erm2]: The completely correct way to write this is <br>$$\vec{\textbf{A}}_n t^n + \vec{\textbf{A}}_{n-1}t^{n-1} + \dots + \vec{\textbf{A}}_1t + \vec{\textbf{A}}_0$$<br>I personally find this notation hard to read with the subscripts for $\vec{\textbf{A}}$, so I prefer to just use letters instead, even though technically this way of writing is slightly less correct.

[^deriv]: The derivation for this formula isn't relevant to this note, but you can read more on [Wikipedia](https://en.wikipedia.org/wiki/Euler's_formula), or see page 166-167 of _Differential Equations and Boundary Value Problems_, the beginning of the chapter *Complex-Valued Functions and Euler's Formula*.
[^genimag]: Remembering that $\vec{\textbf{x}}_2$ was the imaginary term, the general **complex** solution is then $$\vec{\textbf{x}}_{\text{complex}} = c_1 \vec{\textbf{x}}_1 + c_2 \vec{\textbf{x}}_2 = c_1 e^{4t} \begin{bmatrix} \cos(-3t) \\ - \sin(-3t)] \end{bmatrix} + c_2 i e^{4t} \begin{bmatrix} \sin(-3t) \\ \cos(-3t) \end{bmatrix}$$
[^source]: Example from C. H. Edwards, D. E. Penney, D. Calvis, _Differential Equations and Boundary Value Problems_, 5th ed, US.

[^arithmetic]: The validity of the conclusion may not be obvious immediately, so here are the intermediary steps: We substitute $\vec{\textbf{v}}_1$ from the equation $(A - \lambda I) \vec{\textbf{v}}_2 = \vec{\textbf{v}}_1$ into $(A - \lambda I) \vec{\textbf{v}}_1 = 0$.<br>$$(A - \lambda I) (A - \lambda I) \vec{\textbf{v}}_2 = 0$$<br>$$(A - \lambda I)^2 \vec{\textbf{v}}_2 = 0$$
[^seealso]: For more info on specific orders of differential equations, check out the notes [[First Order Ordinary Differential Equations]], [[Second Order Ordinary Differential Equations]] and the already linked note [[Generalized Ordinary Differential Equations]].
[^proof]: A proof can be found on page 352 of the source material for this note, _Differential Equations and Boundary Value Problems_, 5th ed.
