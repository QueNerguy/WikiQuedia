---
title: Differentiation and it's Techniques
draft: false
---
Tags: [[differentiation]], [[calculus]], [[interval syntax]] <br>25-01-2025

---
# Differentiation and Techniques

### Notation
There are a few ways to denote differentiating a function $f\left(x\right)$.
1. __$f^{\prime}\left(x\right)$__ or __$\left\lbrack f\left(x\right)\right\rbrack^{\prime}$__, or in multivariable calculus: __$\left\lbrack f\left(x\right)\right\rbrack_{x}^{\prime}$__. The last notation means differentiating $f\left(x\right)$ with respect to $x$. To increase the amount of times differentiated, add extra accents.
2. __$\frac{d}{dx}f\left(x\right)$__, the '_Leibniz notation_'. This notation automatically incorporates multivariability because the operator is directly with respect to $x$. To increase the amount of times differentiated, square the operator.
3. __$D\left\lbrack f\left(x\right)\right\rbrack$__ or __$D_{}^{1}\left\lbrack f\left(x\right)\right\rbrack$__ or in the case of multivariable calculus: __$D_{x}^{1}\left\lbrack f\left(x\right)\right\rbrack$__. The last notation means differentiating with respect to $x$. To increase the amount of times differentiated, increase the power. It is best to always include the power $1$ in the term to avoid confusion with potential other $D$ terms.

### Basic rules
When calculating derivatives there's three rules that always apply. You might not use all of them at the same time because some terms are irrelevent however.
#### 1 - Product rule
When two terms in multiplication both need differentiating the product rule is applied:
$$
D_{x}^{1}\left\lbrack f\left(x\right)\cdot g\left(x\right)\right\rbrack=f^{\prime}\left(x\right)\cdot g\left(x\right)+f\left(x\right)\cdot g^{\prime}\left(x\right)
$$
Intuitively this means: the first term (differentiated) _times_ the second term _+_ the first term _times_ the second term (differentiated)[^differentiation].
An example would be $D_{x}^{1}\left\lbrack y\right\rbrack=D_{x}^{1}\left\lbrack x^{2}\cdot y^{2}\right\rbrack$
#### 2 - Chain rule
When a variable is enclosed in a different function that depends on that variable, for example $\sin\left(x\right)$ the differentiating process follows the chain rule.
$$
D_{x}^{1}\left\lbrack f\left(g\left(x\right)\right)\right\rbrack=f^{\prime}\left(g\left(x\right)\right)\cdot g^{\prime}\left(x\right)
$$
So the highest ranking function (differentiated) _times_ the enclosed function (differentiated)[^differentiation].
#### 3 - Inverse function rule
When the variable to be differentiated is below a dividing line the rule to differentiate is as follows:
$$
D_{x}^{1}\left\lbrack\frac{g\left(x\right)}{f\left(x\right)}\right\rbrack=\frac{nat-tan}{n^{2}}
$$
- with:
	-  $n$:  'noemer' or 'denominator'
	-  $t$: 'teller' or 'numerator'
_The total meaning_ is: \[noemer $\cdot$ derivative(teller) -  teller $\cdot$ derivative(noemer)\] / noemer².

### Methods of Differentiating
For most functions the [basic rules](#basic%20rules) are sufficient to find a solution. In some cases where there are multiple layers of functions of $x$ or multiple multiplications of functions of $x$ it is useful to use the _substitution method_ in combination with the [basic rules](#basic%20rules).
#### Substitution
For complicated functions, such as $\ln\left(\cos\left(x^{2}\right)\right)$ it's usually smart to use the substitution technique whereby you isolate a part of the expression, in this case for example $x^2$ and $\cos\left(\right)$ and substitute them for a variable $u$ and $v$. Then you differentiate using the above rules and resubstitute the original terms.
- __Solution to Example:__ 
	In this case it would be $\ln\left(\cos\left(u\right)\right)$ -> $\ln\left(v\right)$. Then calculate $u^{\prime}$ and $v^{\prime}$  and apply chain rule to get: $u^{\prime}=2x$;  $v^{\prime}=-\sin\left(u\right)\cdot u^{\prime}$.
	Therefore the total solution is: $D_{x}^{1}\left\lbrack\ln\left(v\right)\right\rbrack=\frac{1}{v}\cdot v^{\prime}$ -> $\frac{1}{v}\cdot\left(-\sin\left(u\right)\cdot u^{\prime}\right)$. 
	Now substitute for $u$ and $v$ and the solution is: $\frac{1}{\cos\left(x^{2}\right)}\cdot-\sin\left(x^{2}\right)\cdot2x=\frac{-2x\sin\left(x^{2}\right)}{\cos\left(x^{2}\right)}=-2x\tan\left(x^{2}\right)$
> [!tip] Note:
> This is checkable with [the derivative calculator](https://www.derivative-calculator.net/)


### Geometrically
#### Origin
Differentiation is a form of taking a [limit](Calculating%20Limits.md). The interpretation of taking a differential is calculating the slope. This means $\frac{\Delta y}{\Delta x}$. If we want to know the slope at every single point we calculate the slope as the length of the line approaches $0$, which is where the limit part comes in. the notation as Leibniz made it is the Delta becomes a $\mathrm{d}$ or $\partial$, depending on the direction and the amount of variables. $\partial$ is used in multivariable calculus where we differentiate in a single direction in 3D (meaning the slope in this one direction), or higher dimensions.
#### Geometric Meaning
##### First Derivative
The first derivative at a point returns the slope of its original function at that point. The height ($y$-value) of the graph shows the slope of the original, the location ($x$-value) gives the location of this slope in the original function. The $x$-axis is therefore unchanged when differentiating (with respect to $x$ that is.) When the first derivative is $0$, that means the original function changes direction. This could mean that it __1:__ has an extremum[^extremum] here, or __2:__ that it changes direction but reaches no extreme value, for example $x^3$, at $x=0$.
##### Second Derivative
As discussed above, taking the derivative of a function at a point returns the slope of the function at that point. When taking a _second derivative_ the result is naturally the direction of the first derivative at that location.
Taking the second derivative is then useful for interpreting the original function without sketching it. Taking the second derivative where the first derivative is $0$ will tell you wether the _Inflection point_[^inflection_point] on the original function is an _extremum_[^extremum] or not.
- ___If $f^{\prime}=0$ :___ Then for $f\text{''}$:
	- __$y\ne0$:__  This is not an extreme value.
	- __$y>0$:__ The slope of the function is positive, therefore it's climbing after this point. This means that at this point there is a local/global _minimum_.
	- __$y<0$:__ The slope of the function is negative, therefore it's descending after this point. This means that at this point there is a local/global _maximum_.

### Rules of Thumb
By rules of thumb (RoT) I mean quick equations and their solution, in general terms.

1. (General rule for non-variable powers)
$$
D_{x}\left\lbrack u^{n}\right\rbrack=n\cdot u^{n-1}\cdot u^{\prime}
$$
2. (sine, cosine, tangent) <br>
	a.
	$$
	D_{x}\left\lbrack\sin\left(u\right)\right\rbrack=\cos\left(u\right)\cdot u^{\prime}
	$$
	b. 
	$$
	D_{x}\left\lbrack\cos\left(u\right)\right\rbrack=-\sin\left(u\right)\cdot u^{\prime}
	$$
	c.
$$
D_{x}\left\lbrack\tan\left(u\right)\right\rbrack=\sec^{2}\left(u\right)=\frac{1}{\cos^{2}\left(u\right)}\cdot u^{\prime}
	$$
3. (arcsine, arccosine, arctangent)<br>
	a.
	$$
	D_{x}\left\lbrack\arcsin\left(u\right)\right\rbrack=\frac{1}{\sqrt{1^2-u^{2}}}\cdot u^{\prime}
	$$
	b.
	$$
	D_{x}\left\lbrack\arccos\left(u\right)\right\rbrack=-\frac{1}{\sqrt{1^2-u^{2}}}\cdot u^{\prime}
	$$
	c. 
	$$
	D_{x}\left\lbrack\arctan\left(u\right)\right\rbrack=\frac{1}{u^{2}+1}\cdot u^{\prime}
	$$
4. (Absolute values)
$$
D_{x}\left\lbrack|u|\right\rbrack=\frac{u}{\left\lbrack u\right\rbrack}\cdot u^{\prime}
$$
5. (Natural logarithms)
$$
D_{x}\left\lbrack\ln\left(u\right)\right\rbrack=\frac{1}{u}\cdot u^{\prime}
$$
6. (Rule for [variable powers](quick%20math%20equations.md#powers%20of%20$x$))
$$
D_{x}\left\lbrack a^{u}\right\rbrack=D_{x}\left\lbrack e^{u\ln\left(a\right)}\right\rbrack=a^{u}\cdot\ln\left(a\right)\cdot u^{\prime}
$$
See also: [RoT Integration](Integration%20and%20Techniques.md#Rules%20of%20Thumb), [General RoT](quick%20math%20equations.md).




---






##### useful sites:
1. [Derivative calculator](https://www.derivative-calculator.net/)
2. Wolfree Alpha %% I cant currently find a working link tho :( %%
3. [Desmos (for graphing)](https://www.desmos.com/calculator)
4. 
---
__[Home](!%20Learning%20Overview%20(Calculus%20I).md)__

---
_Status:_ #ripe

---

# References:
[^inflection_point]: An inflection point is a point on the graph of a function where it changes directions
[^extremum]: An extremum is the greatest value a graph reaches compared to the points to the left and right. This could be either __1:__ a local extreme, meaning that there might be other more extreme values on the graph, but this point is still higher than it's surrounding points. There can be infinite local extremes. Or __2:__ a global extreme. This is where the graph of the function reaches its absolute extreme. There can be only two global extremes, a minimum and a maximum value that no other point reaches. [wiki page on this](https://en.wikipedia.org/wiki/Maximum_and_minimum)
[^differentiation]: [Wikipedia - Differentiation rules](https://en.wikipedia.org/wiki/Differentiation_rules)
1. Robert A. Adams, Christopher Essex, _Calculus A Complete Course_, 9th ed.
2. Openstax, _Calculus Volume 1_, [link](https://openstax.org/details/books/calculus-volume-1)
3. Openstax, _Calculus Volume 2_, [link](https://openstax.org/details/books/calculus-volume-2)
4. Openstax, _Calculus Volume 3_, [link](https://openstax.org/details/books/calculus-volume-3)
