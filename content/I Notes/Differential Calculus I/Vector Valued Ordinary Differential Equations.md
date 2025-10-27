---
title: "Vector Valued Ordinary Differential Equations"
draft: false
---
tags: [[calculus]], [[differentials]], [[integrals]], [[ODE]], [[linear algebra]], [[vector math]]     <br>30-09-2025

---
# Vector Valued Ordinary Differential Equations

### Geometrical Interpretation
Differentiation is not so different for vector valued functions, as opposed to scalar ones. Differentiating [matrix](Matrices) $A$ means *differentiating the elements* in $A$. <br>In math speak:
$$
A' = \left[ a_{ij}' \right]
$$
To differentiate vectors is the exact same. Remember, a matrix can be seen as a collection of vectors making up it's basis, and as such the same rules apply.

### Solving Ordinary Differential Equations
This chapter will discuss solving any order differential equation of the form
$$
\vec{\textbf{x}}^{(n)} = A \vec{\textbf{x}}
$$
This is especially useful for [first order differential equations](First%20Order%20Ordinary%20Differential%20Equations.md) because they <u>only</u> have expression this as their *homogeneous* form. <br>The above equation can be any *homogeneous equation*. To make the explanation more concrete however, from now on we will treat the case of the first order $\vec{\textbf{x}}'$, but remember that the methods look and act the same regardless of the order. <br>$A$ is the transformation [matrix](Matrices) that changes the coordinate vector $\vec{\textbf{x}}$ to become the differentiated coordinate vector $\vec{\textbf{x}}'$. To make the vector form more similar to the notation we would use for scalar valued functions, we could rewrite the above equation to $\vec{\textbf{x}}' - A \vec{\textbf{x}} = 0$. <br>A matrix system can be seen as a collection of equations, like the one below for a 3 dimensional matrix $A$.
$$
\begin{cases} x_1' = P_{1,1} x_1 + P_{1,2} x_2 + P_{1,3} x_3 \\ x_2' = P_{2,1} x_1 + P_{2,2} x_2 + P_{2,3} x_3 \\ x_3' = P_{3,1} x_1 + P_{3,2} x_2 + P_{3,3} x_3 \end{cases}
$$
We cannot integrate these equations directly [like we did before](First%20Order%20Ordinary%20Differential%20Equations.md#Separable%20Equations) for first order systems. Instead, we may use the same trick we used for [second order systems](Second%20Order%20Ordinary%20Differential%20Equations.md), where we take a trial solution of $\vec{\textbf{x}} = \vec{\textbf{v}}e^{\lambda t}$, with derivative $\vec{\textbf{x}}' = \lambda \vec{\textbf{v}} e^{\lambda t}$. If we substitute this into the equation $\vec{\textbf{x}}' = A \vec{\textbf{x}}$, we get
$$
\vec{\textbf{x}}' = A \vec{\textbf{x}} \qquad \Rightarrow \qquad \lambda \vec{\textbf{v}} e^{\lambda t} = A \vec{\textbf{v}} e^{\lambda t}
$$
We can divide by $e^{\lambda t}$ as it appears on both sides and get
$$
\lambda \vec{\textbf{v}} = A \vec{\textbf{v}}
$$
For higher order differentials we would use $\vec{\textbf{x}} = \vec{\textbf{v}}e^{\alpha t}$. The reason will be apparent after we substitute this into the equation for the second order, $\vec{\textbf{x}}'' = A \vec{\textbf{x}}$.
$$
\vec{\textbf{x}}'' = A \vec{\textbf{x}} \qquad \Rightarrow \qquad \alpha ^2 \vec{\textbf{v}} e^{\alpha}t = A \vec{\textbf{v}} e^{\alpha t}
$$
We can substitute $\alpha ^2$ by $\lambda$ and divide out $e^{\alpha t}$ like we did above to get 
$$
\alpha ^2 \vec{\textbf{v}} e^{\alpha}t = A \vec{\textbf{v}} e^{\alpha t} \quad \Rightarrow \quad \lambda \vec{\textbf{v}} e^{\alpha}t = A \vec{\textbf{v}} e^{\alpha t} \quad \Rightarrow \quad \lambda \vec{\textbf{v}} = A \vec{\textbf{v}}
$$
From here we can continue the computation in exactly the same way as the first order.
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
We can then find $\vec{\textbf{v}}$ by using the earlier equation $(A - \lambda I) \vec{\textbf{v}} = 0$ and solving the augmented matrix $\left[ A - \lambda I \: | \: 0 \right]$. $\vec{\textbf{v}}$ is the *eigenvector* of matrix $A$. Recount from [generalized ODEs](Generalized%20Ordinary%20Differential%20Equations.md) that the solution to any differential equation can be written as a linear combination of every solution for $\vec{\textbf{x}}$, with as many solutions as there are roots of the *characteristic equation*. In the case of our $\vec{\textbf{x}}$ then, we can write for our **general solution** that
$$
\vec{\textbf{x}} = c_1 \vec{\textbf{x}}_1 + c_2 \vec{\textbf{x}}_ 2 + \dots + c_n \vec{\textbf{x}}_n \qquad \Rightarrow \qquad \vec{\textbf{x}} = c_1 \vec{\textbf{v}}_1 e^{\lambda _1 t} + c_2 \vec{\textbf{v}}_2 e^{\lambda _2 t} + \dots + c_n \vec{\textbf{v}}_n e^{\lambda _n t}
$$
The solution for $\vec{\textbf{x}}$ can thus be found by finding the *eigenvalues*, $\lambda$, and the *[eigenvectors](Eigenvectors%20and%20Eigenvalues)*, $\vec{\textbf{v}}$, of matrix $A$. <br>The amount of eigenvalues, and subsequently the amount of particular solutions, is determined by the dimension of matrix $A$. The amount of roots the characteristic equation will have is the same as the dimension of $A$.
#### Nonhomogeneous Differential Equations
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
Do note that in this case the capital letters do **not** need to indicate matrices.

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

#### Repeating Eigenvalues
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
Therefore we can't use method **1.** and we call the eigenvalue $\lambda = 4$ *defective*. <br>In this chapter a multiplicity of 2 for a single eigenvalue will be discussed, not the general case. <br>We find a solution by trial. We start by using the same technique as used for repeated roots in scalar equations, where we multiply the repeating term with $t$. We choose a yet to be determined second eigenvector $\vec{\textbf{v}}_2$ and write
$$
\vec{\textbf{x}}_2 = \vec{\textbf{v}}_2 te^{\lambda t}
$$
The term $\vec{\textbf{x}}_2$ is used because we have already found an eigenvector so we can construct $\vec{\textbf{x}}_1$, we however can not construct $\vec{\textbf{x}}_2$ immediately because the second eigenvector is missing. <br>We can substitute $\vec{\textbf{x}}_2$ into the original equation $\vec{\textbf{x}}' = A \vec{\textbf{x}}$, applying the chain rule for the derivative of $\vec{\textbf{x}}_2$ yields $\vec{\textbf{x}}_2' = \vec{\textbf{v}}_2 \lambda t e^{\lambda t} + \vec{\textbf{v}}_2 e^{\lambda t}$.
$$
\vec{\textbf{x}}_2' = A \vec{\textbf{x}}_2 \qquad \Rightarrow \qquad \left( \vec{\textbf{v}}_2 \lambda t e^{\lambda t} + \vec{\textbf{v}}_2 e^{\lambda t} \right) = A \left( \vec{\textbf{v}}_2 te^{\lambda t} \right)
$$
We can see two equations emerge from this,
$$
\left( \vec{\textbf{v}}_2 \lambda \right) te^{\lambda t} = \left(A \vec{\textbf{v}}_2 \right) te^{\lambda t} \qquad \text{and} \qquad \vec{\textbf{v}}_2 e^{\lambda t} = 0 \cdot e^{\lambda t}
$$
Thus we have that $\vec{\textbf{v}}_2$ is 0. This means that multiplying by $t$ does not give a non-zero answer for the second eigenvector. Instead, we try a combination of both eigenvectors, the known eigenvector $\vec{\textbf{v}}_1$, and the to be determined second eigenvector $\vec{\textbf{v}}_2$. We try
$$
\vec{\textbf{x}}_2 = \left( \vec{\textbf{v}}_1 t + \vec{\textbf{v}}_2 \right) e^{\lambda t}
$$
Once again, we substitute $\vec{\textbf{x}}_2$ into the equation $\vec{\textbf{x}}_2' = A \vec{\textbf{x}}_2$, realizing that the derivative of $\vec{\textbf{x}}_2$ is $\vec{\textbf{v}}_1 e^{\lambda t} + \vec{\textbf{v}}_1 \lambda t e^{\lambda t} + \vec{\textbf{v}}_2 \lambda e^{\lambda t}$.
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
Recognize the second term as part of the steps taken to find $\vec{\textbf{v}}_1$ in the first place. The appearance of this term confirms that $\vec{\textbf{v}}_1$ is indeed an eigenvector, and by extension, so will $\vec{\textbf{v}}_2$ be. <br>We can solve the augmented matrix $\left[A- \lambda I \: | \: \vec{\textbf{v}}_1 \right]$ to find $\vec{\textbf{v}}_2$. In the start of our example we already had used an expression for $(A- \lambda I) = (A - 4I)$.
$$
\vec{\textbf{v}}_2 = \left[A- \lambda I \: | \: \vec{\textbf{v}}_1 \right] = \left[ \begin{array}{cc|c} -3 & -3 & 1 \\ 3 & 3 & -1 \end{array} \right]
$$
We can now find $\vec{\textbf{v}}_2$ by row reducing this matrix. Alternatively, we can simplify the original equation $(A - \lambda I) \vec{\textbf{v}}_2 = \vec{\textbf{v}}_1$ by substituting into the second equation we obtained[^arithmetic]. This yields
$$
(A - \lambda I)^2 \vec{\textbf{v}}_2 = 0
$$
We can thus always find $\vec{\textbf{v}}_2$ by solving $\left[\begin{array}{c|c} (A-\lambda I)^2 & 0  \end{array}\right]$. <br>Because we guessed $\vec{\textbf{x}}_2 = \left( \vec{\textbf{v}}_1 t + \vec{\textbf{v}}_2 \right) e^{\lambda t}$, we have for our solutions $\vec{\textbf{x}}_1$ and $\vec{\textbf{x}}_2$


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






#### Complex Solutions
Trying to find the [eigenvalues](Eigenvectors%20and%20Eigenvalues) for some real systems may yield imaginary eigenvalues as a result of the characteristic equation. For example[^source] see the characteristic equation
$$
(4 - \lambda) ^2 + 9 = 0 \qquad \Rightarrow \qquad \lambda = 4 \pm \sqrt{-9} = 4 \pm 3i
$$
In the case of complex eigenvalues we always have a solution $\lambda$ and a solution $\bar{\lambda}$, in this case we have $\lambda_1 = \lambda = 4 + 3i$ and $\lambda_2 = \bar{\lambda} = 4 - 3i$. The appearance of a positive and a negative imaginary part is a result of the square root as part of the definition of $i$. A square root's solutions are always plus or minus the enclosed term, thus complex solutions will always have a positive and a negative imaginary term.  <br>Complex solutions are no less valid than real solutions, and the [eigenvectors](Eigenvectors%20and%20Eigenvalues) $\vec{\textbf{v}}$ can be found all the same by solving $\left[ A - \lambda I \right] \vec{\textbf{v}} = 0$. The resulting eigenvector can have a complex solution. Building on the first example we could have a solution for the eigenvector like $\vec{\textbf{v}}_1 = \begin{bmatrix} 1 \\ i \end{bmatrix}$. This eigenvector can be split into a real and an imaginary part, $\vec{\textbf{v}}_1 = \begin{bmatrix} 1 \\ 0 \end{bmatrix} + \begin{bmatrix} 0 \\ 1 \end{bmatrix} i$. The real part is sometimes denoted as $\text{Re} \left[ \vec{\textbf{v}}_1 \right]$, and the imaginary part as $\text{Im} \left[ \vec{\textbf{v}}_1 \right]$. <br>Even though we have **two** roots for $\lambda$, namely $\lambda_1 = \lambda$ and $\lambda_2 = \bar{\lambda}$, the solution for $\vec{\textbf{x}}$ of this homogeneous system *can* only use one of these values. The system requires two solutions because there are two roots, but because our solution is complex we can break the solution for a single root up into a real and an imaginary part, and thus yield two solutions from a single eigenvalue. We thus don't need to compute $\vec{\textbf{v}}_2$ and can choose the $\lambda$ that eases our computations as much as possible.
$$
\vec{\textbf{x}}_p = \vec{\textbf{v}}_1 e^{\lambda t} = \begin{bmatrix} 1 \\ i \end{bmatrix} e^{(4 - 3i) t}
$$
We can break this solution up by using *[Euler's formula](https://en.wikipedia.org/wiki/Euler's_formula)*[^deriv], which states
$$
e^{i \theta} = \cos({\theta}) + i\sin(\theta)
$$
Complex functions where $\lambda$ has a solution $a + bi$ can be deconstructed as follows:
$$
e^{(a+bi)t} = e^{at}e^{ibt} = e^{at}\left[ \cos({bt}) + i\sin(bt) \right]
$$
Thus, in our case, we get
$$
\vec{\textbf{x}}_p = \begin{bmatrix} 1 \\ i \end{bmatrix} e^{(4 - 3i) t} = \begin{bmatrix} 1 \\ i \end{bmatrix} e^{4t} \left[ \cos(-3t) + i\sin(-3t) \right]
$$
$$
\vec{\textbf{x}}_p = e^{4t} \begin{bmatrix} \cos(-3t) + i\sin(-3t) \\ i[\cos(-3t) + i\sin(-3t)] \end{bmatrix} = e^{4t} \begin{bmatrix} \cos(-3t) + i\sin(-3t) \\ i\cos(-3t) - \sin(-3t) \end{bmatrix}
$$
To illustrate that the above equation for $\vec{\textbf{x}}_p$ is indeed a linear combination of $\vec{\textbf{x}}_1$ and $\vec{\textbf{x}}_2$, we can break it up into the real and imaginary parts, where $\vec{\textbf{x}}_1 = \text{Re}[\vec{\textbf{x}}]$ and $\vec{\textbf{x}}_2 = \text{Im}[\vec{\textbf{x}}]$.
$$
\vec{\textbf{x}}_1 = \text{Re}[\vec{\textbf{x}}] = e^{4t} \begin{bmatrix} \cos(-3t) \\ - \sin(-3t)] \end{bmatrix}
$$
$$
\vec{\textbf{x}}_2 = \text{Im}[\vec{\textbf{x}}] = \text{Im}\left[ e^{4t} \begin{bmatrix} i\sin(-3t) \\ i\cos(-3t) \end{bmatrix} \right] = e^{4t} \begin{bmatrix} \sin(-3t) \\ \cos(-3t) \end{bmatrix}
$$
If we don't want to find a complex solution for $\vec{\textbf{x}}_p$, we can combine $\vec{\textbf{x}}_1$ and $\vec{\textbf{x}}_2$ instead to get a solution
$$
\vec{\textbf{x}}_{p\:\text{real}} = \vec{\textbf{x}}_1 + \vec{\textbf{x}}_2 = e^{4t} \begin{bmatrix} \cos(-3t) \\ - \sin(-3t)] \end{bmatrix} + e^{4t} \begin{bmatrix} \sin(-3t) \\ \cos(-3t) \end{bmatrix}
$$
Note that this solution is no more or less valid than the original solution for $\vec{\textbf{x}}_p$, it is just a different form of the same solution. Be aware that this is still a particular solution, not the general solution.<br>The **general real**[^genimag] **solution** is
$$
\vec{\textbf{x}}_{\text{real}} = c_1 \vec{\textbf{x}}_1 + c_2 \vec{\textbf{x}}_2 = c_1 e^{4t} \begin{bmatrix} \cos(-3t) \\ - \sin(-3t)] \end{bmatrix} + c_ 2e^{4t} \begin{bmatrix} \sin(-3t) \\ \cos(-3t) \end{bmatrix}
$$
Lastly, the associated scalar solution looks like
$$
\vec{\textbf{x}}_\text{real} = \begin{cases} e^{4t} [c_1 \cos(-3t) + c_ 2\sin(-3t)] \\ e^{4t} [c_2 \cos(-3t) - c_1\sin(-3t)] \end{cases}
$$

>[!abstract] Inventory
> The long and short of complex solutions is that solving them is done using the same methods and steps as are necessary for non-complex solutions, with the difference being applying *Euler's formula* and not having to compute all eigenvectors to find a solution. 
> Furthermore, depending on the use case it can be beneficial to find a real solution $\vec{\textbf{x}}_\text{real}$ instead of the original complex $\vec{\textbf{x}}$.








#### Initial Value Problems
To find the complete solution for $\vec{\textbf{x}}$, eliminating the constants $c$, we need a constraint (initial value) for $\vec{\textbf{x}}$, for example we could have $\vec{\textbf{x}}(3) = \vec{\textbf{b}}$. To find a complete expression for $\vec{\textbf{x}}$, notice that we can rewrite the general solution for $\vec{\textbf{x}}$ to
$$
\vec{\textbf{x}} = X\vec{\textbf{c}}
$$
$X$ is a matrix containing every solution $\vec{\textbf{x}}_1$, $\vec{\textbf{x}}_2$ etc, named the *fundamental matrix*, and $\vec{\textbf{c}}$ contains all constants $c_1$, $c_2$ etc. <br>We know that $\vec{\textbf{x}}(3) = \vec{\textbf{b}}$, and we can thus rewrite this equation to
$$
\vec{\textbf{x}}(3) = X(3) \vec{\textbf{c}} = \vec{\textbf{b}}
$$
To find $\vec{\textbf{c}}$ we can solve the *augmented matrix* $\left[ X(3) \: | \: \vec{\textbf{b}} \right]$.



#### Solving Using Matrix Exponentials
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