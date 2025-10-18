---
title: "Vector Valued Ordinary Differential Equations"
draft: false
---
tags:      <br>30-09-2025

---
# Vector Valued Ordinary Differential Equations

### Geometrical Interpretation
Differentiation is not so different for vector valued functions, as opposed to scalar ones. Differentiating [matrix](Matrices) $A$ means *differentiating the elements* in $A$. <br>In math speak:
$$
A' = \left[ a_{ij}' \right]
$$
To differentiate vectors is the exact same. Remember, a matrix can be seen as a collection of vectors making up it's basis, and as such the same rules apply.

### Solving First Order Ordinary Differential Equations
[First order differential equations](First%20Order%20Ordinary%20Differential%20Equations) typically look like
$$
\vec{\textbf{x}}' = A \vec{\textbf{x}}
$$
The above equation is a *homogeneous equation*. $A$ is the transformation [matrix](Matrices) that changes the coordinate vector $\vec{\textbf{x}}$ to become the differentiated coordinate vector $\vec{\textbf{x}}'$. To make the vector form more similar to the notation we would use for scalar valued functions, we could rewrite the above equation to $\vec{\textbf{x}}' - A \vec{\textbf{x}} = 0$. <br>A matrix system can be seen as a collection of equations, like the one below for a 3 dimensional matrix $A$.
$$
\begin{cases} x_1' = P_{1,1} x_1 + P_{1,2} x_2 + P_{1,3} x_3 \\ x_2' = P_{2,1} x_1 + P_{2,2} x_2 + P_{2,3} x_3 \\ x_3' = P_{3,1} x_1 + P_{3,2} x_2 + P_{3,3} x_3 \end{cases}
$$
We cannot integrate these equations directly [like we did before](First%20Order%20Ordinary%20Differential%20Equations#Separable%20Equations) for first order systems. Instead, we may use the same trick we used for [second order systems](Second%20Order%20Ordinary%20Differential%20Equations), where we take a trial solution of $\vec{\textbf{x}} = \vec{\textbf{v}}e^{\lambda t}$, with derivative $\vec{\textbf{x}}' = \lambda \vec{\textbf{v}} e^{\lambda t}$. If we substitute this into the equation $\vec{\textbf{x}}' = A \vec{\textbf{x}}$, we get
$$
\vec{\textbf{x}}' = A \vec{\textbf{x}} \qquad \Rightarrow \qquad \lambda \vec{\textbf{v}} e^{\lambda t} = A \vec{\textbf{v}} e^{\lambda t}
$$
We can divide by $e^{\lambda t}$ as it appears on both sides and get
$$
\lambda \vec{\textbf{v}} = A \vec{\textbf{v}}
$$
You might recognize this form from the explanation of [eigenvalues](Eigenvectors%20and%20Eigenvalues). Here too our goal is to find $\vec{\textbf{v}}$, and thus we can use the same principles as used to find the eigenvalues of a matrix. <br>We rearrange the equation to get
$$
A\vec{\textbf{v}} - \lambda I\vec{\textbf{v}} = 0 \qquad \Rightarrow \qquad (A - \lambda I) \vec{\textbf{v}} = 0
$$
For $\left( A - \lambda I \right)$ to become 0 under multiplication with $\vec{\textbf{v}}$ we have two solutions.
1. $\vec{\textbf{v}}$ is 0.
2. $\left( A - \lambda I \right)$ is the 0-matrix.

The determinant%%==LINKJE DETERMINANT==%% is measure of the area under the matrix, and because the 0-matrix has no area, the determinant is 0. Subsequently the determinant of $\left( A - \lambda I \right)$ is 0 as well. <br>Assuming $\vec{\textbf{v}}$ isn't the 0-vector, we can thus find $\lambda$ by solving
$$
 \left| A - \lambda I \right| = 0
$$
We can then find $\vec{\textbf{v}}$ by using the earlier equation $(A - \lambda I) \vec{\textbf{v}} = 0$ and solving the augmented matrix $\left[ A - \lambda I \: | \: 0 \right]$. $\vec{\textbf{v}}$ is the *eigenvector* of matrix $A$. Recount from [generalized ODEs](Generalized%20Ordinary%20Differential%20Equations) that the solution to any differential equation can be written as a linear combination of every solution for $\vec{\textbf{x}}$, with as many solutions as there are roots of the *characteristic equation*. In the case of our $\vec{\textbf{x}}$ then, we can write for our **general solution** that
$$
\vec{\textbf{x}} = c_1 \vec{\textbf{x}}_1 + c_2 \vec{\textbf{x}}_ 2 + \dots + c_n \vec{\textbf{x}}_n \qquad \Rightarrow \qquad \vec{\textbf{x}} = c_1 \vec{\textbf{v}}_1 e^{\lambda _1 t} + c_2 \vec{\textbf{v}}_2 e^{\lambda _2 t} + \dots + c_n \vec{\textbf{v}}_n e^{\lambda _n t}
$$
The solution for $\vec{\textbf{x}}$ can thus be found by finding the *eigenvalues*, $\lambda$, and the *[eigenvectors](Eigenvectors%20and%20Eigenvalues)*, $\vec{\textbf{v}}$, of matrix $A$. 
#### Nonhomogeneous First Order Differential Equations
Nonhomogeneous first order DEs are of the form
$$
\vec{\textbf{x}}' = A \vec{\textbf{x}} + \vec{\textbf{f}}(t)
$$
$\vec{\textbf{f}}(t)$ is the term that makes this equation nonhomogeneous, it isn't multiplied with $\vec{\textbf{x}}$.<br>In [generalized differential equations](Generalized%20Ordinary%20Differential%20Equations) we saw that a solution for $y$ is made up of a *complementary solution* $y_c$, which is the solution to the homogeneous version of the desired equation, and a *particular solution* $y_p$. For matrices we would say
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
Reordering a bit to give us a solution with one matrix in terms of $t$ and one that's not:
$$
\begin{bmatrix} a_1 \\ a_2 \end{bmatrix} = \begin{bmatrix} 3a_1 + 2a_2 \\ 7a_1 + 5a_2 + 2 \end{bmatrix}t + \begin{bmatrix} 3b_1 + 2b_2 + 3 \\ 7b_1 + 5b_2 \end{bmatrix}
$$
We can further solve this by seeing that the left hand is the same as $0 \cdot t + \begin{bmatrix} a_1 \\ a_2 \end{bmatrix}$, and therefore that the matrix that's multiplied with $t$ solves to 0, whereas the other matrix solves to $\begin{bmatrix} a_1 \\ a_2 \end{bmatrix}$. This gives us the system
$$
\begin{cases} a_1 + 2a_2 = 0 \\ 7a_1 + 5a_2 + 2 = 0\\ 3b_1 + 2b_2 + 3 = a_1 \\ 7b_1 + 5b_2 = a_2 \end{cases}
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
Do note that in this case the capital letters do **not** need to indicate matrices. <br>
2. ___Method of Variation of Parameters:___ The method of variation of parameters can be used for equations where $\vec{\textbf{f}}(t)$ isn't in the table above. To find $\vec{\textbf{x}}_p$ we make use of the complementary solution. We start with
$$
\vec{\textbf{x}}_c = X \vec{\textbf{c}}
$$
Like this we can eliminate the undetermined constants. Our goal is to find a solution
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

#### Complex Solutions to First Order Differential Equations






#### Initial Value Problems
To find the complete solution for $\vec{\textbf{x}}$, eliminating the constants $c$, we need a constraint (initial value) for $\vec{\textbf{x}}$, for example we could have $\vec{\textbf{x}}(3) = \vec{\textbf{b}}$. To find a complete expression for $\vec{\textbf{x}}$, notice that we can rewrite the general solution for $\vec{\textbf{x}}$ to
$$
\vec{\textbf{x}} = X\vec{\textbf{c}}
$$
$X$ is a matrix containing every solution $\vec{\textbf{x}}_1$, $\vec{\textbf{x}}_2$ etc. <br>We know that $\vec{\textbf{x}}(3) = \vec{\textbf{b}}$, and we can thus rewrite this equation to
$$
\vec{\textbf{x}}(3) = X(3) \vec{\textbf{c}} = \vec{\textbf{b}}
$$
To find $\vec{\textbf{c}}$ we can solve the *augmented matrix* $\left[ X(3) \: | \: \vec{\textbf{b}} \right]$.



### Solving Second Order Ordinary Differential Equations





---
__[Home](WikiQuedia/Mechanical%20Engineering/3%20-%20Tags/Example.md)__ %%==NEEDS HOMEPAGE==%%

---
_Status:_ #bud #missingLink 

---
# Based On:
1. C. H. Edwards, D. E. Penney, D. Calvis, _Differential Equations and Boundary Value Problems_, 5th ed, US.


[^creditbook]:  C. H. Edwards, D. E. Penney, D. Calvis, _Differential Equations and Boundary Value Problems_, p363, 5th ed, US.
[^erm2]: The completely correct way to write this is <br>$$\vec{\textbf{A}}_n t^n + \vec{\textbf{A}}_{n-1}t^{n-1} + \dots + \vec{\textbf{A}}_1t + \vec{\textbf{A}}_0$$<br>I personally find this notation hard to read with the subscripts for $\vec{\textbf{A}}$, so I prefer to just use letters instead, even though technically this way of writing is slightly less correct. 


