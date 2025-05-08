___Task___: Find the extreme values of $z = f(x,y)=2xy$ on the closed disk $x^2 + y^2 \leq 4$. <br><br>___Solution:___ 
###### Function
To find the extreme values of $f$ we take the partial derivative in both directions, and realize this direction reaches an extreme value when the partial derivative is 0. <br>For the $x$-direction:
 $$
D_x[2xy] = 2y = 0
$$
$$
y = 0
$$

Thus in $x$-direction an extremum is found when $y$ = 0. <br>For the $y$-direction:
$$
D_y[2xy] = 2x = 0
$$
$$
x = 0
$$

Thus in $y$-direction an extremum is found when $x$ = 0. 
Plugging these expressions into on another, we get an extremum at $(0, 0)$ <br>The height attained at this point is:
$$
f(x, y) = f(0, 0) = 2 \cdot 0 \cdot 0 = 0
$$

Thus the extremum on the function $f$ is:
- 0, attained at $(0, 0)$.

###### Boundary
The boundary of the domain $x^2 + y^2 \leq 4$ has formula $x^2 + y^2 = 4$. <br>To find the extreme values, first, substitute this boundary into $f(x,y)$. 
$$
x^2 + y^2 = 4 \rightarrow y = \sqrt{4-x^2}
$$ 
$$
f(x, y) = 2xy \rightarrow f(x, \sqrt{4-x^2}) = 2x \cdot \sqrt{4-x^2}
$$

Now we can find the location of the extreme values by realizing that the derivative of this function at this extreme is 0.
$$
f^{\prime}(x, \sqrt{4-x^2}) = D_x [2x] \cdot \sqrt{4-x^2} + 2x \cdot D_x [\sqrt{4-x^2}] = 0
$$

$$
= 2 \sqrt{4-x^2} + 2x \cdot \frac{1}{2} \cdot (4-x^2)^{- \frac{1}{2}} \cdot -2x
$$
$$
= 2 \sqrt{4-x^2} - \frac{2x^2}{\sqrt{4-x^2}} = 0
$$
$$
2 \sqrt{4-x^2} = \frac{2x^2}{\sqrt{4-x^2}}
$$
$$
2(4-x²) = 2x^2 \rightarrow 4-x² = x^2
$$
$$
4 = 2x^2 \rightarrow x² = 2
$$
$$
x = \pm \sqrt{2}
$$

With the $x$-coordinate known, we can find the $y$-coordinate on the boundary of the disk by substituting the found $x$ into this formula.
$$
x^2 + y^2 = 4 \rightarrow (\pm \sqrt{2})² + y² = 2 + y² = 4
$$
$$
y² = 2 \rightarrow y = \pm \sqrt{2}
$$

Now we know the coordinates of the extremes at the boundaries are: 
$$
(\sqrt{2}, \sqrt{2}), (- \sqrt{2}, \sqrt{2}), (\sqrt{2}, - \sqrt{2}), (- \sqrt{2}, - \sqrt{2})
$$
To find the height, or $z$ value at these coordinates, plug them into the original expression for $f$.
$$
z = f(x, y) = f(\pm \sqrt{2}, \pm \sqrt{2}) = 2 \cdot \pm \sqrt{2} \cdot \pm \sqrt{2}
$$
$$
z = 4 \lor z = -4
$$

Thus the extrema at the boundary are:
- 4, attained at $(\sqrt{2}, \sqrt{2})$ and $(- \sqrt{2}, - \sqrt{2})$.
- -4, attained at $(- \sqrt{2}, \sqrt{2})$ and $(\sqrt{2}, - \sqrt{2})$.






