For vector valued solutions, we can use linear algebra%%==LINKJE==%% to solve these equations. We want to try to construct a system of (2) equations from $ay^" + by' + cy = 0$, so that we can construct a linear system. We want to bring the equation above to the general form below, namely
$$
\vec{\textbf{u}} = A \vec{\textbf{v}}
$$
An alternate form of this equation that we wish to use is 
$$
\dot{\vec{\textbf{v}}} = A \vec{\textbf{v}}
$$
We can do this by first defining a vector $\vec{\textbf{v}}$, using only $y$ and $y'$. We will bring $y''$ into the matrix equation later.
$$
\vec{\textbf{v}}  = \begin{bmatrix} v_1 \\ v_2 \end{bmatrix} = \begin{bmatrix} y \\ y' \end{bmatrix}
$$
Then we define $\dot{\vec{\textbf{v}}}$.
$$
\dot{\vec{\textbf{v}}} = \begin{bmatrix} v_1' \\ v_2' \end{bmatrix} = \begin{bmatrix} y' \\ y'' \end{bmatrix}
$$
Our complete equation now looks like
$$
\dot{\vec{\textbf{v}}} = A \vec{\textbf{v}} \Rightarrow \begin{bmatrix} y' \\ y'' \end{bmatrix} = A \begin{bmatrix} y \\ y' \end{bmatrix}

$$
Because $y''$ appears only in the left hand side, we want to find a way to replace $y''$ with an equation in terms of $y$ and $y'$. For this we can use the equation $ay^" + by' + cy = 0$.
$$
y'' = - \frac{c}{a} y - \frac{b}{a} y' 
$$
With this our equation becomes
$$
\begin{bmatrix} y' \\ - \frac{c}{a} y - \frac{b}{a} y'  \end{bmatrix} = A \begin{bmatrix} y \\ y' \end{bmatrix}
$$
From this equation we can easily observe what the expression for $A$ should be, and we can rewrite to
$$
\begin{bmatrix}0 & 1\\ - \frac{c}{a} & - \frac{b}{a} \end{bmatrix} \begin{bmatrix} y \\ y' \end{bmatrix}
$$

If we know the begin values for $y$ and $y'$, we have an equation we can solve.
$$
\begin{bmatrix}0 & 1\\ - \frac{c}{a} & - \frac{b}{a} \end{bmatrix} \begin{bmatrix} y \\ y' \end{bmatrix} = \begin{bmatrix} y_0 \\ y'_0 \end{bmatrix}
$$
$$
( A-\lambda I ) = 0
$$
We can use $( A-\lambda I ) = 0$ to compute what eigenvalues we have, and the associated eigenvectors ($\vec{\textbf{u}}_1$ and $\vec{\textbf{u}}_2$), and plug those into the equation for $y = c_1 e^{\lambda_1 t} \cdot \vec{\textbf{u}}_1 + c_2 e^{\lambda_2 t} \cdot \vec{\textbf{u}}_2$.



---

#missingLink 

---

# Based On:
1. P. Dawkins, _Section 5.7 : Real Eigenvalues_, 11-2022, US, [link](https://tutorial.math.lamar.edu/classes/de/RealEigenvalues.aspx).
2. J. Gill, _Second Order Linear Equations Via Eigenvalues_, 3-2022, US, [link](https://www.youtube.com/watch?v=r1v2P4hjNJ8).