---
title: Factoring and Fraction Decomposition
draft: false
---
Tags: [[general math rules]], [[algebra]] <br>26-01-2025

---
# Factoring and Fraction Decomposition
### Definition
Factoring is a way of dividing a complicated polynomial into smaller parts that are easier to work on, either for integrating, differentiating, or taking limits for example.


### Methods of Calculating

#### Factoring
A quadratic function $ax^{2}+bx+c$ can always be decomposed as $\left(dx+e\right)\left(fx+g\right)$. 
When factoring there's two types of results:<br>
1. Short
$$
\left(\sqrt{a}x+b\right)\left(\sqrt{a}x-b\right)=ax^{2}-b^{2}
$$
2. Long
$$
\left(x+a\right)\left(x+b\right)=x^{2}+2ab\cdot x+ab
$$

- This one is based on the following full form, however it is generally easier to just divide the whole original fraction by the coefficient in front of the $x^2$, in this case $ac$, and use the above form. 
	$$
	\left(ax+b\right)\left(cx+d\right)=ac\cdot x^2+\left(ad+bc\right)\cdot x+bd
	$$

The way to factor the quadratic forms seen on the right hand side is just by looking at patterns and similarities with these here formulas.
#### Partial Fraction Decomposition
This consists of a few steps[^goatedFilmpje]:
1. ___Factor noemer:___ Make sure the noemer of a function is [factored](#Factoring) in either linear or quadratic functions. For example: $6x+1$, $4x^{2}+2x+3$.
2. ___Choosing constants:___
	- __For linear factors:__ 
		1. Choose a constant _A_ or _B_ etc. and write the factors in the form of $\frac{B}{x+3}$ for example
		2. Multiply the whole equation by the noemer of the original fraction. Because the original expression has been decomposed, the terms under _A_ and _B_ will cancel.
			- __Example:__ $$\frac{7x-23}{\left(x-2\right)\left(x-5\right)}=\frac{A}{x-2}+\frac{B}{x-5}\to7x-23=A\left(x-5\right)+B\left(x-2\right)$$
		3. Solve the resulting system, or plug in random value for $x$, to cancel a term in the brackets and solve directly.
	- __For quadratic factors:__
		1. Choose linear factor, and for the potential remaining linear factor, choose a constant.
			- __Example:__$$\frac{A}{x}+\frac{Bx+C}{x^2+4x+13}$$
			- __Example, repeating factor:__ In this case the repeating factor is the $x^2$. In this case it's treated as $x\cdot x$ and thus a constant is chosen. Do notice that the power of the $x$ goes up with every iteration. This does also follow directly form the arythmetic in the previous example. $$\frac{2x-5}{x^2\left(x+1\right)}=\frac{A}{x^{1}}+\frac{B}{x^{2}}+\frac{C}{x+1}$$
		2. Multiply the whole equation by the noemer of the original fraction. Because the original expression has been decomposed, the terms under the linear factor of _A_ and _B_ will cancel.
		 3. Solve the resulting system, or plug in random value for $x$, to cancel a term in the brackets and solve directly.

### In Fractions
In some scenarios there are other ways of simplifying that are better suited.
1. __Grade teller $\ge$ grade noemer:__ In this case the best way to simplify a _fraction_ is to do [long division](https://en.wikipedia.org/wiki/Long_division). 
2. __Grade noemer $>$ grade teller:__ In this case [partial fraction decomposition](#Partial%20Fraction%20Decomposition) is the best way to simplify the fraction.








---
__[Home](!%20Learning%20Overview%20(Calculus%20I).md)__

---
_Status:_ #ripe

---
# References:
[^goatedFilmpje]: [blackpenredpen - _Ultimate Partial Fraction Decomposition Study Guide (how setup)_](https://www.youtube.com/watch?v=DfTJOsqxIJ4)
1. R. A. Adams, Christopher Essex, _Calculus A Complete Course_, 9th ed.

