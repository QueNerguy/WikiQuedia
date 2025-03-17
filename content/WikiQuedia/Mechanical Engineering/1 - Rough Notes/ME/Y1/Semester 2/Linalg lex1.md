# Determinants

It is allowed to row reduce a matrix during a determinant calculation
- Rules of computation:
	1. adding rows etc does nothing
	2. interchanging rows changes the sign of the determinant (multiply by $-1$ in the end)
	3. multiplication of a row means multiplication of the determinant by that value. (you have to divide by the multiplier in the end to reach the actual determinant) -> row scale scales determinant
	4. $\det\left(A\right)\cdot\det\left(B\right)=\det\left(AB\right)$ 
	5. if $A$ is triangular - lower or upper - then the determinant is the product of the entries on the diagonal
	6. $\det\left(A\right)=\det\left(A^{T}\right)$, therefore row and column operations have the same 5 previously mentioned rules.

When using _cofactor expansion_ to calculate the determinant of a matrix: 
1. cross out a value somewhere in the matrix, and cross out the associated row and column and make a matrix with the leftover values.
2. the determinant of the matrix is the value that was crossed out _times_ the determinant of the leftover matrix, _plus_ the same operation for all the values along _either_ the row or the column. every value thats taken from the original matrix is multiplied by $+1$ or $-1$, with the formula being: $\left(-1\right)^{i+j}$. 

### invertability
- if matrix invertible: $\det\left(A\right)\ne0$,  $\det\left(A\right)=-1^{rank}\cdot x$, with rank being the amount of pivots

