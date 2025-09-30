---
title: "Eigenvectors and Eigenvalues"
draft: false
---
Tags: [[linear algebra]], [[eigenvectors]], [[eigenvalues]], [[vector math]]   <br>08-05-2025

---
# Eigenvectors and Eigenvalues
### Geometrical Interpretation
When transforming a space by a _square_ matrix $A$, there are axes that are not moved during this transformation but are only scaled. The vectors on these axes are called the __eigenvectors__ ($\vec{\textbf{v}}$), and the amount they get scaled are the __eigenvalues__ ($\lambda$) of the transformation matrix. <br>Because the eigenvalues give the amount of scaling, the length of the eigenvectors becomes arbitrary. The only use of this vector is to give the direction in which the axes point. The line following this direction is the __eigenspace__. Because this line points in the same direction as the eigenvectors, every vector on this line is an eigenvector of $A$ and we can say that the eigenspace is *spanned by the eigenvectors*[^setosa].
#### Existence
Every matrix has at least 1 eigenvalue and associated eigenvector, as long as it is a _square matrix_. Rotational matrices will have at least one complex eigenvalues, whose eigenvector will span the complex vector space. This vector represents the axis of rotation, imagine the space to rotate around this eigenvector, thus leaving it unchanged.


### Definition
The order of the chapters here is the order in which you solve these problems.
#### Eigenvalues
Under some matrix $A$ we know that the *[eigenvectors](#Eigencvectors)* are vectors that only get scaled by $A$, not rotated in any way. The *eigenvalues* are the scalars that tell us by how much these eigenvectors get scaled. Every eigenvector has it's own unique eigenvalue. <br>To find the eigenvalues of a matrix, we realize that transforming the eigenvector $\textbf{v}$ with matrix $A$ is the same as scaling this vector by the eigenvalue, and we write
$$
A \textbf{v}= \lambda \textbf{v}
$$
To simplify following calculations, we rewrite to
$$
A \textbf{v} - \lambda \textbf{v} = 0
$$
$$
(A - \lambda I) \textbf{v} = 0
$$
For $\left( A - \lambda I \right)$ to become 0 under multiplication with $\vec{\textbf{v}}$ we have two solutions.
1. $\vec{\textbf{v}}$ is 0.
2. $\left( A - \lambda I \right)$ is the 0-matrix.

The determinant%%==LINKJE DETERMINANT==%% is measure of the area under the matrix, and because the 0-matrix has no area, the determinant is 0. Subsequently the determinant of $\left( A - \lambda I \right)$ is 0 as well. <br>Assuming $\vec{\textbf{v}}$ isn't the 0-vector, we can thus find $\lambda$ by solving
$$
 \left| A - \lambda I \right| = 0
$$
To compute the eigenvalue $\lambda$ now, we compute the determinant, which produces what's known as the characteristic equation, seen below.
$$
a\lambda² + b\lambda + c = 0
$$
Another geometric interpretation behind $(A - \lambda I) \vec{\textbf{v}} = 0$ is that $(A - \lambda I) \vec{\textbf{v}}$ "Squishes the whole space into a lower dimension"[^3b1b1]. We know that finding the determinant is akin to finding the area for 2 x 2 spaces, finding the volume for 3 x 3 spaces and so on. A lower dimension version of a 2 x 2 space is a line, and a lower dimension version of a 3 x 3 space is an plane. Finding the area of a line gives us 0 and thus the determinant is also 0, and finding the volume of a plane also gives us 0. The determinant of the lower space is thus 0, and as $(A - \lambda I) \vec{\textbf{v}}$ squishes the space into a lower dimension the determinant of this system has to be 0. We can thus safely say that
$$
 \left| A - \lambda I \right| = 0
$$


##### Quick Method for 2D Matrices
&nbsp&nbsp&nbsp&nbsp | Credit for this method goes to 3Blue1Brown, find his video [here](https://www.youtube.com/watch?v=e50Bj7jn9IQ). |
In engineering and many other applications, eigenvalues are very common and useful, but computing them is inefficient. <br>In a __2 dimensional__ case there is a much easier way to calculate the eigenvalues, namely
$$
\lambda_1, \lambda_2 = \textrm{m} \pm \sqrt{\textrm{m}^2-D}
$$
The variables used in this formula are easy to read from the 2 x 2 matrix.
- $\textrm{m}$, the _mean_ of the diagonal of the matrix. For $A=\begin{bmatrix}a & b\\ c & d\end{bmatrix}$ the mean $\textrm{m}$ is $\frac{a + d}{2}$. 
- $D$, the _determinant_%%==linkje determinant==%% of the matrix. For $A=\begin{bmatrix}a & b\\ c & d\end{bmatrix}$ the determinant $D$ is $ad - bc$.

Both of these calculations can be done easily and quickly in your head, allowing for quick evaluation of the eigenvalues. <br>For the derivation and geometrical understanding of this formula and some examples, watch [3Blue1Brown's video](https://www.youtube.com/watch?v=e50Bj7jn9IQ).

#### Eigenvectors
When the eigenvalue $\lambda$ is known, we know that transforming the eigenvector $\textbf{v}$ with matrix $A$ is the same as scaling this vector by the eigenvalue.
$$
A \textbf{v}= \lambda \textbf{v}
$$
To calculate the eigenvector we rewrite to
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
__[Home](WikiQuedia/Mechanical%20Engineering/3%20-%20Tags/Example.md)__ %%==needs homepage==%%

---
_Status:_ #ripe  #missingLink

---
# Based On:
[^setosa]: See: [setosa - Eigenvectors and Eigenvalues](https://setosa.io/ev/eigenvectors-and-eigenvalues/) $\leftarrow$ interactive visuals to better understand eigenvectors and spaces.
[^3b1b1]: 3Blue1Brown, _Eigenvectors and eigenvalues | Chapter 14, Essence of linear algebra_, 6:58, 9-2016, US, [link](https://www.youtube.com/watch?v=PFDu9oVAE-g).
1. D. C. Lay, S. R. Lay, J. J. McDonald, _Linear Algebra and Its Applications_, 6th ed.
2. Wikipedia, _Eigenvalues and eigenvectors_, [link](https://en.wikipedia.org/wiki/Eigenvalues_and_eigenvectors).
3. 3Blue1Brown, _A quick trick for computing eigenvalues | Chapter 15, Essence of linear algebra_, 5-2021, US, [link](https://www.youtube.com/watch?v=e50Bj7jn9IQ).
4. 3Blue1Brown, _Eigenvectors and eigenvalues | Chapter 14, Essence of linear algebra_, 9-2016, US, [link](https://www.youtube.com/watch?v=PFDu9oVAE-g).
