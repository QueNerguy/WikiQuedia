___Task:___ Compute $e^{At}$ for a matrix $A = \begin{bmatrix} 0 & 3 & 4 \\ 0 & 0 & 6 \\ 0 & 0 & 0 \end{bmatrix}$. <br><br>___Solution:___ We know that $e^{At} = I + At + \frac{A^2t^2}{2} + \frac{A^3 t^3}{6} + \dots + \frac{A^n t^n}{n!}$, thus we start by computing some powers of matrix $A$.
$$
A^2 = A A = \begin{bmatrix} 0 & 3 & 4 \\ 0 & 0 & 6 \\ 0 & 0 & 0 \end{bmatrix} \begin{bmatrix} 0 & 3 & 4 \\ 0 & 0 & 6 \\ 0 & 0 & 0 \end{bmatrix} = \begin{bmatrix} 0 & 0 & 18 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{bmatrix}
$$
$$
A^3 = A^2 A = \begin{bmatrix} 0 & 0 & 18 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{bmatrix} \begin{bmatrix} 0 & 3 & 4 \\ 0 & 0 & 6 \\ 0 & 0 & 0 \end{bmatrix} = \begin{bmatrix} 0 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{bmatrix}
$$
Any higher powers higher than 3 will also return a 0-matrix, and thus we can neglect any terms in the definition of $e$ with matrix $A$ to a higher power than 2, as those terms simply disappear. <br>As a result, we can say that
$$
e^{At} = I + At + \frac{A^2t^2}{2} + 0
$$
Substituting the found solution for $A^2$ into this equation, we get
$$
e^{At} = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix} + \begin{bmatrix} 0 & 3 & 4 \\ 0 & 0 & 6 \\ 0 & 0 & 0 \end{bmatrix} t + \frac{t^2}{2} \begin{bmatrix} 0 & 0 & 18 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{bmatrix} = \begin{bmatrix} 1 & 3t & 4t + 9t^2 \\ 0 & 1 & 6t \\ 0 & 0 & 1 \end{bmatrix}
$$
$$
e^{At} = \begin{bmatrix} 1 & 3t & 4t + 9t^2 \\ 0 & 1 & 6t \\ 0 & 0 & 1 \end{bmatrix}
$$

---

Example found in _Differential Equations and Boundary Value Problems_, p354, 5th ed.