---
title: "Eigenvectors and Eigenvalues"
draft: false
---
Tags: [[linear algebra]], [[eigenvectors]], [[eigenvalues]]   <br>08-05-2025

---
# Eigenvectors and Eigenvalues
### Geometrical Interpretation
When transforming a space by a _square_ matrix $A$, the newly transformed space contains axes that are not moved by the transformation, these vectors are only scaled. If you would multiply only a _scalar_ with these vectors they would return to the size and orientation they had in the original space. <br>These vectors that only get scaled by this transformation are called the __eigenvectors__ ($\textbf{v}$) of the transformation matrix, and the amount they get scaled are the __eigenvalues__ ($\lambda$) of the transformation matrix. 
#### Existence
Every matrix has at least 1 eigenvalue and associated eigenvector, as long as it is a _square matrix_. Rotational matrices will have at least one complex eigenvalues, whose eigenvector will span the complex vector space. This vector represents the axis of rotation, imagine the space to rotate around this eigenvector, thus leaving it unchanged.
#### Eigenspace
The length of the eigenvector is not that relevant, because the only use of this vector is to give the direction in which the matrix _only_ scales vectors, the amount of scaling is already given by the eigenvalue. Because of this, it is useful to draw a line/axis in the direction of the eigenvector. This line is the __eigenspace__. Every vector on this line is also an eigenvector of the matrix. The eigenspace is then spanned by the eigenvectors[^setosa].

### Calculations
The order of the chapters here is the order in which you go to solve these problems. Unless given, you cannot (easily) calculate the eigenvector without an eigenvalue.
#### Eigenvalues
To find the eigenvalues we realize that transforming the eigenvector $\textbf{v}$ with matrix $A$ is the same as scaling this vector by the eigenvalue.
$$
A \textbf{v}= \lambda \textbf{v}
$$
To simplify following calculations, we rewrite to:
$$
A \textbf{v} - \lambda \textbf{v} = \vec{0}
$$
$$
(A - \lambda I) \textbf{v} = \vec{0} 
$$
To solve this equation, notice that there are two solutions, either $\textbf{v} = \vec{0}$, or $(A - \lambda I) = \vec{0}$. To solve for $\lambda$ we realize that the area under the zero vector is also 0, meaning we can use the determinant%%==linkje determinant pls==%% to compute this. We have:
$$
\det (A - \lambda I) = 0
$$
To compute the eigenvalue $\lambda$ now, we calculate the determinant, and solve for $\lambda$ afterward. 
Solving the determinant here produces the __characteristic equation__, a polynomial whose _roots_ are the eigenvalues.
<br>Another geometric interpretation behind the equation $(A - \lambda I) \textbf{v} = \vec{0}$ is that $(A - \lambda I) \textbf{v}$ "Squishes the whole space into a lower dimension"[^3b1b1], namely, a line. The area under a line is 0, therefore the determinant is also 0, and we compute from here.
###### Quick Method 2D Matrices
&nbsp&nbsp&nbsp&nbsp | Credit for this method goes to 3Blue1Brown, find his video [here](https://www.youtube.com/watch?v=e50Bj7jn9IQ). |
In engineering and many other applications, eigenvalues are very common and useful, but computing them is inefficient. <br>In a __2 dimensional__ case there is a much easier way to calculate the eigenvalues:
$$
\lambda_1, \lambda_2 = \textrm{m} \pm \sqrt{\textrm{m}^2-D}
$$
The variables used in this formula are easy to read from the 2x2 matrix.
- $\textrm{m}$, the _mean_ of the diagonal of the matrix. For $A=\begin{bmatrix}a & b\\ c & d\end{bmatrix}$ the mean $\textrm{m}$ is $\frac{a + d}{2}$. 
- $D$, the _determinant_%%==linkje determinant==%% of the matrix. For $A=\begin{bmatrix}a & b\\ c & d\end{bmatrix}$ the determinant $D$ is $ad - bc$.

Both of these calculations can be done easily and quickly in your head, allowing for quick evaluation of the eigenvalues. <br>For the derivation and geometrical understanding of this formula and some examples, watch [3Blue1Brown's video](https://www.youtube.com/watch?v=e50Bj7jn9IQ).

#### Eigenvectors
When the eigenvalue $\lambda$ is known, we know that transforming the eigenvector $\textbf{v}$ with matrix $A$ is the same as scaling this vector by the eigenvalue.
$$
A \textbf{v}= \lambda \textbf{v}
$$
To calculate the eigenvector we rewrite to:
$$
A \textbf{v} - \lambda \textbf{v} = 0
$$
$$
(A - \lambda I) \textbf{v} = 0 
$$
To solve for $\textbf{v}$ now, we row reduce%%==linkje row reduction operaties enzo==%% the matrix created by $(A - \lambda I)$. <br>This process may produce multiple eigenvectors, which is due to the fact that multiple eigenvectors might share a single eigenvalue. These eigenvectors still produce only an axis that gets scaled, by the same amount this time, and not a higher dimensional space.
#### Eigenspace
As the eigenspace represents the axes of a matrix that only get scaled under matrix $A$, the eigenspace is constructed from the eigenvectors. The length of the eigenvectors does not matter, $\begin {bmatrix}1\\ 1\end{bmatrix}$ is just as valid as base for the eigenspace as $\begin{bmatrix}99\\ 99\end{bmatrix}$, because they have the same direction.








---
__[Home](Example.md)__ %%==needs homepage==%%

---
_Status:_ #ripe  #missingLink

---
# References:
[^setosa]: [setosa - Eigenvectors and Eigenvalues](https://setosa.io/ev/eigenvectors-and-eigenvalues/) $\leftarrow$ interactive visuals to better understand eigenvectors and spaces.
[^3b1b1]: [3Blue1Brown - Eigenvectors and eigenvalues | Chapter 14, Essence of linear algebra - 6:58](https://youtu.be/PFDu9oVAE-g?feature=shared&t=418)
1. D. C. Lay, S. R. Lay, J. J. McDonald, _Linear Algebra and Its Applications_, 6th ed.
2. Wikipedia, _Eigenvalues and eigenvectors_, [link](https://en.wikipedia.org/wiki/Eigenvalues_and_eigenvectors).
3. 3Blue1Brown, _A quick trick for computing eigenvalues | Chapter 15, Essence of linear algebra_, [link](https://www.youtube.com/watch?v=e50Bj7jn9IQ).
4. 3Blue1Brown, _Eigenvectors and eigenvalues | Chapter 14, Essence of linear algebra_, [link](https://www.youtube.com/watch?v=PFDu9oVAE-g).
