---
title: "Finding Exteme values"
draft: false
---
Tags: [[calculus]], [[differentials]], [[eigenvalues]], [[intervals]], [[vector math]]   <br>07-05-2025

---
# Finding Exteme values
### Defining Types
Extreme values are values on a graph (in any dimension) where a maximum or minimum height is reached. There's two types of extreme values:
1. ___Local extremes___ are points on a graph where a maximum or minimum is reached, but there are other points on the graph with a higher or lower height. These points are identified by the fact that the [derivative](Differentiation.md) is 0 - meaning the function doesn't climb at this point - and eliminating the possibility of this point being a _[saddle point](Saddle%20Points)_, sometimes also referred to as an _inflection point_.
2. ___Global extremes___ are are points on a graph where a maximum or minimum is reached and there are no other values that reach a higher or lower height. Because of this there are only 2 global extremes.
To find extremes take a [derivative](Differentiation.md), and set it to be equal to 0. From here solve for the location subsequently the height reached at this point.
#### Eliminating Saddle Points
[Saddle points](Saddle%20Points) can sometimes be found instead of an extreme value. To check wether a point is an extremum or just a saddle point, perform the _second derivative test_. There are two ways to perform the second derivative test:
1. By constructing a ___[Hessian matrix](Hessian%20Matrix)___ ($H_f$)[^wikiSDT] and finding the [eigenvalues](Eigenvectors%20and%20Eigenvalues) of this matrix. <br>To construct a Hessian matrix, calculate all possible [partial derivatives](Partial%20Differentiation) and arrange them in the matrix according to [this](hessian%20matrix%20general%20solution.md) formula (see also [this more complete explanation](Hessian%20Matrix)). <br>After constructing the Hessian matrix, calculate it's [eigenvalues](Eigenvectors%20and%20Eigenvalues), to evaluate what type of point you're dealing with.
	1. __Maximum__ is reached when the Hessian matrix is _negative-definite_, meaning that all the eigenvalues are positive.
	2. __Minimum__ is reached when the Hessian matrix is _positive-definite_, meaning that all the eigenvalues are positive.
	3. __Saddle point/inflection point__ is reached when the Hessian matrix is _indefinite_, meaning that the eigenvalues are both positive and negative.
 
2. By performing _only_ a ___second derivative test___[^cueSDT]. <br>This test consists of differentiating the function twice, and plugging in the coordinates of the point you want to check for.
	1. __Maximum__ is reached when  $f^{\prime\prime} (x) < 0$.
	2. __Minimum__ is reached when  $f^{\prime\prime} (x) > 0$.
	3. __Saddle point/inflection point__ is reached when $f^{\prime\prime} (x) = 0$.

These tests look at the [second derivative](Differentiation.md#Second%20Derivative) to know wether the derivative is climbing at that point. If it is climbing, that would imply that after the critical point the original function would increase it's slope, meaning it also climbs. It would also mean the original function was declining before this point, meaning it had higher points before. This combination means the critical point has to be a minimum because all points directly next to it are higher. <br>Same reasoning can be applied to other values for the second derivative.

> [!warning]
> While option __2__ is easiest, it is not detailed in _Calculus A Complete Course_, so it probably will not get points when used on the VU test, even though it works the same in essence as the Hessian matrix. <br>I included it here mostly for completeness' sake and because of the fact that the TU Delft uses it and it is a quicker method of checking.

### Finding Extreme Values
To find the extreme values in a single-variable case we would realize that the derivative at that point is 0, so we take the derivative of the function, equal it to 0, and solve for $x$ to find the coordinate. <br>A similar process is the case for multivariable functions, where extremes can be reached in both directions, as seen in the graph for a saddle below. <br>![[Saddle_point_80%.png|450]]<br>By Nicoguaro - Own work, CC BY 3.0, [link](https://commons.wikimedia.org/w/index.php?curid=20570051)<br><br>The red dot depicted above is an example of a saddle point. At this point it is seen that the $x$ direction reaches a local maximum, while the $y$ direction reaches a local minimum. <br>To find these extremes, we take the [partial derivative](Partial%20Differentiation) to get the slope in both directions, and equal it to 0. 
To find the _critical point_ of the function above, we find a point where the slope in both directions is 0. This only happens at the red dot. <br>We can visualize this fact by noticing that, if we take any slice in the direction of a major axis, we get a parabola in a 2D space. Observe that the intersection of the extrema of the two parabola types (parabola with a minimum in the one direction, parabola with a maximum in the other direction) is at this red dot. This implies that the only point where both partial derivatives are 0 is also at the red dot. <br>Because this point is an intersection of __both__ parabolas with a _minimum_ and parabolas with a _maximum_, there are neighboring points that are higher, as well as neighboring points that are lower. As such this critical point is __not an extremum__, but instead a saddle point. This illustrates the importance of performing the [second derivative tests](#eliminating%20saddle%20points) outlined above.




### Finding the Extreme Values on Restricted Domains
When dealing with [restricted domains](Domain) it is important to take into account the edge of the [domain](Domain) that encloses the function. This is because if the function does not reach a local extremum _within_ the domain, there will be higher points on the boundary of the domain. <br>The slope of the function on the boundary of the domain may not have a derivative that's 0, as the function might be _climbing still_, to a higher extremum that falls outside of the domain. Even so, the edge of the domain may have the highest value that the function reaches if we neglect the area outside. <br>The way to check for these extremes is by substituting the formula for the edge of the domain, into the formula for the graph. Doing this creates the expression of a line that assumes every height of the function, as it traces the boundary line of the domain.  Because of this fact we can check this new line for extreme values by finding where the slope is 0. The location of these points will be the location of the extremes reached on the boundary of the domain. 
- [An example of this process](example%20boundary%20extremum.md)







---
__[Home](!%20Calculus%20II%20Learning%20Overview)__

---
_Status:_ #ripe

---
# References:
[^wikiSDT]: [Wikipedia - Hessian matrix, Second derivative test](https://en.wikipedia.org/wiki/Hessian_matrix#Second-derivative_test)
[^cueSDT]: [Cuemath - Second derivative test](https://www.cuemath.com/calculus/second-derivative-test/)
1. R. A. Adams, Christopher Essex, _Calculus A Complete Course_, 9th ed.
2. Openstax, _Calculus Volume 1_, [link](https://openstax.org/details/books/calculus-volume-1).
3. Openstax, _Calculus Volume 2_, [link](https://openstax.org/details/books/calculus-volume-2).
4. Openstax, _Calculus Volume 3_, [link](https://openstax.org/details/books/calculus-volume-3).
5. Wikipedia, _Hessian matrix_, [link](https://en.wikipedia.org/wiki/Hessian_matrix)