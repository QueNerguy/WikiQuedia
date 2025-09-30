---
title: "Vector Valued Ordinary Differential Equations"
draft: false
---
tags:      <br>30-09-2025

---
# Vector Valued Ordinary Differential Equations

### Geometrical Interpretation
Differentiation is not so different for vector valued functions, as opposed to scalar ones. Differentiating matrix $A$ means *differentiating the elements* in $A$. <br>In math speak:
$$
A' = \left[ a_{ij}' \right]
$$
To differentiate vectors is the exact same. Remember, a matrix can be seen as a collection of vectors making up it's basis, and as such the same rules apply.

### Definition
#### First Order
First order differential equations typically look like
$$
\vec{\textbf{x}}' = A \vec{\textbf{x}}
$$
The above equation is a *homogeneous equation*. $A$ is the transformation matrix that changes the coordinate vector $\vec{\textbf{x}}$ to become the differentiated coordinate vector $\vec{\textbf{x}}'$. To make the vector form more similar to the notation we would use for scalar valued functions, we could rewrite the above equation to $\vec{\textbf{x}}' - A \vec{\textbf{x}} = 0$. <br>A matrix system can be seen as a collection of equations, like the one below for a 3 dimensional matrix $A$.
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
We can then find $\vec{\textbf{v}}$ by using the earlier equation $(A - \lambda I) \vec{\textbf{v}} = 0$, and solving the augmented matrix $\left[ A - \lambda I \: | \: 0 \right]$. $\vec{\textbf{v}}$ is thus the *eigenvector* of matrix $A$. Recount from [generalized ODEs](Generalized%20Ordinary%20Differential%20Equations) that the solution to any differential equation can be written as a linear combination of every solution for $\vec{\textbf{x}}$, with as many solutions as there are roots of the *characteristic equation*. In the case of our $\vec{\textbf{x}}$ then, we can write for our **general solution** that
$$
\vec{\textbf{x}} = c_1 \vec{\textbf{x}}_1 + c_2 \vec{\textbf{x}}_ 2 + \dots + c_n \vec{\textbf{x}}_n \qquad \Rightarrow \qquad \vec{\textbf{x}} = c_1 \vec{\textbf{v}}_1 e^{\lambda _1 t} + c_2 \vec{\textbf{v}}_2 e^{\lambda _2 t} + \dots + c_n \vec{\textbf{v}}_n e^{\lambda _n t}
$$
The solution for $\vec{\textbf{x}}$ can thus be found by finding the *eigenvalues*, $\lambda$, and the *[eigenvectors](Eigenvectors%20and%20Eigenvalues)*, $\vec{\textbf{v}}$, of matrix $A$. 
%%needs nonhomogeneous stuffs, partly covered last tings in 5.1, maybe 5.2 somewehere?%%
##### Initial Value Problems
To find the complete solution for $\vec{\textbf{x}}$, eliminating the constants $c$, we need a constraint (initial value) for $\vec{\textbf{x}}$, for example we could have $\vec{\textbf{x}}(3) = \vec{\textbf{b}}$. To find a complete expression for $\vec{\textbf{x}}$, notice that we can rewrite the general solution for $\vec{\textbf{x}}$ to
$$
\vec{\textbf{x}} = X\vec{\textbf{c}}
$$
$X$ is a matrix containing every solution $\vec{\textbf{x}}_1$, $\vec{\textbf{x}}_2$ etc. <br>We know that $\vec{\textbf{x}}(3) = \vec{\textbf{b}}$, and we can thus rewrite this equation to
$$
\vec{\textbf{x}}(3) = X(3) \vec{\textbf{c}} = \vec{\textbf{b}}
$$
To find $\vec{\textbf{c}}$ we can solve the *augmented matrix* $\left[ X(3) \: | \: \vec{\textbf{b}} \right]$.



#### Second Order





---
__[Home](WikiQuedia/Mechanical%20Engineering/3%20-%20Tags/Example.md)__ %%==NEEDS HOMEPAGE==%%

---
_Status:_ #bud #missingLink 

---
# Based On:


