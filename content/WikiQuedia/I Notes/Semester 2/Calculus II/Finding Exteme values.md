---
title: "Finding Exteme values"
draft: false
---
Tags: [[differentiation]], [[calculus]], [[eigenvalues]], [[interval syntax]]   <br>07-05-2025

---
# Finding Exteme values
### Defining Types
Extreme values are values on a graph (in any dimension) where a maximum or minimum height is reached. There's two types of extreme values:
1. ___Local extremes___ are points on a graph where a maximum or minimum is reached, but there are other points on the graph with a higher or lower height. These points are identified by the fact that the [derivative](Differentiation%20and%20Techniques) is 0 - meaning the function doesn't climb at this point - and eliminating the possibility of this point being a _[saddle point](saddle%20points)_, sometimes also referred to as an _inflection point_.
2. ___Global extremes___ are are points on a graph where a maximum or minimum is reached and there are no other values that reach a higher or lower height. Because of this there are only 2 global extremes.
To find extremes take a [derivative](Differentiation%20and%20Techniques), and set it to be equal to 0. From here solve for the location subsequently the height reached at this point.
#### Eliminating Saddle Points
[Saddle point](saddle%20points) can sometimes be found instead of an extreme value. To check wether a point is an extremum or just a saddle point, perform the _second derivative test_. There are two ways to perform the second derivative test:
1. By constructing a ___[Hessian matrix](Hessian%20Matrix)___ ($H_f$)[^wikiSDT] and finding the [eigenvalues](Eigenvectors%20and%20Eigenvalues) of this matrix. <br>To construct a Hessian matrix, calculate all possible [partial derivatives](Partial%20Differentiation) and arrange them in the matrix according to [this](hessian%20matrix%20general%20solution.md) formula (see also [this more complete explanation](Hessian%20Matrix)). <br>After constructing the Hessian matrix, calculate it's [eigenvalues](Eigenvectors%20and%20Eigenvalues), to evaluate what type of point you're dealing with.
	1. __Maximum__ is reached when the Hessian matrix is _negative-definite_, meaning that all the eigenvalues are positive.
	2. __Minimum__ is reached when the Hessian matrix is _positive-definite_, meaning that all the eigenvalues are positive.
	3. __Saddle point/inflection point__ is reached when the Hessian matrix is _indefinite_, meaning that the eigenvalues are both positive and negative.
 
2. By performing _only_ a ___second derivative test___[^cueSDT]. <br>This test consists of differentiating the function twice, and plugging in the coordinates of the point you want to check for.
	1. __Maximum__ is reached when  $f^{\prime\prime} (x) < 0$.
	2. __Minimum__ is reached when  $f^{\prime\prime} (x) > 0$.
	3. __Saddle point/inflection point__ is reached when $f^{\prime\prime} (x) = 0$.

> [!warning]
> While option __2__ is easiest, it is not detailed in _Calculus A Complete Course_, so it probably will not get points when used on the VU test, even though it works the same in essence as the Hessian matrix. <br>I included it here mostly for completeness' sake and because of the fact that the TU Delft uses it and it is a quicker method of checking.

### Finding Extreme Values
To find the extreme values in a single-variable case we would realize that the derivative at that point is 0, so we take the derivative of the function, equal it to 0, and solve for $x$ to find the coordinate. <br>A similar process is the case for multivariable functions, where extremes can be reached in both directions, as seen in the graph for a saddle below. <br>![[Saddle_point_80%.png|450]]<br>by Nicoguaro - Own work, CC BY 3.0, [link](https://commons.wikimedia.org/w/index.php?curid=20570051)<br>
The red dot depicted above is an example of a saddle point. At this point it is seen that the $x$ direction reaches a local maximum, while the $y$ direction reaches a local minimum. <br>To find these extremes, we take the [partial derivative](Partial%20Differentiation) to get the slope in both directions, and equal it to 0. <br>If we take the partial derivatives for the graph above we would get 2 equations, one for the partial derivative in $x$ direction, and one in $y$ direction. As can be seen on the graph, the $x$ direction has no slope for all points on the line $x=0$. To make this intuitive, take a mental slice, going in $x$ direction, somewhere on the graph. The resulting 2D image  would have a parabola with it's top at $x=0$, this is the case for any slice you would take of this graph. Therefore the $x$ direction has _maxima_ at $x = 0$. <br>With the same reasoning we can see the $y$ direction has _minima_ at $y=0$. <br>In a general case, to find the _critical points_ of a function we would calculate the directional derivatives, equal them to zero, and find $x$ and or $y$ values from the first or second expression. We would then substitute these results in the other expression obtained from this to find the coordinates, and find the height the graph reaches at those coordinates by backsubstituting into the original formula. In the case of the graph above however, we can see that at the critical point the $x$ direction has a maximum, while the $y$ direction has a minimum. As such this critical point is not an extremum, but a saddle point. <br>This illustrates the importance of doing the [second derivative tests](#eliminating%20saddle%20points), as outlined above.




### Finding the Extreme Values on Restricted Domains
When dealing with [restricted domains](Intervals;%20Domain%20and%20Range) there is one other thing to take into account when finding extreme values, on top of the [general case](finding%20extreme%20values), namely the edge of the [domain](Intervals;%20Domain%20and%20Range) that encloses the function. This is because the function might reach a local extremum within the domain, but if it's not a global extreme, there will be higher points. The extremes on the edge of the domain may not have a derivative that's 0, as the function might be _climbing still_, to a higher extremum that falls outside of the domain. <br>The way to check for these extremes is by substituting the formula for the edge of the domain into the formula for the graph. Doing this creates the expression of a line that assumes every height of the function as it traces the boundary line of the domain.  Because of this fact we can check this new line for extreme values, and those values will be the extremes reached on the boundary of the domain. 
- [An example of this process](example%20boundary%20extremum.md)







---
__[Home](Example.md)__ %%==NEEDS HOMEPAGE==%%

---
_Status:_ #ripe #missingLink 

---
# References:
[^wikiSDT]: [Wikipedia - Hessian matrix, Second derivative test](https://en.wikipedia.org/wiki/Hessian_matrix#Second-derivative_test)
[^cueSDT]: [Cuemath - Second derivative test](https://www.cuemath.com/calculus/second-derivative-test/)
1. R. A. Adams, Christopher Essex, _Calculus A Complete Course_, 9th ed.