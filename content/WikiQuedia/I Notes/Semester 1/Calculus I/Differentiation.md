---
title: Differentiation
draft: false
---
Tags: [[differentials]], [[calculus]] <br>25-01-2025

---
# Differentiation
Differentiating is the reciprocal of [integration](Integration.md), therefore a lot of  the same [quick rules](Rules%20of%20Thumb%20Integration) apply from integration, just in _reverse_. These rules I call _rules of thumb_.<br>Find the rules of thumb of differentiation [here](Rules%20of%20Thumb%20Differentiation).
### Geometrical Interpretation
Differentiation is a form of taking a [limit](Calculating%20Limits.md). The interpretation of taking a differential is calculating the slope of a function by taking $\frac{\Delta y}{\Delta x}$. <br>If we want to know the slope at a single point, we calculate the slope as the length of $\Delta$ approaches 0 so we don't have to account for neighboring points anymore. To denote the fact that the line segment corresponding to $\Delta$ has a 0-length, we denote it as $d$, making $\frac{\Delta y}{\Delta x}$ become $\frac{dy}{dx}$ in Leibniz notation. In this wiki it is usually preferred to write the more common $\frac{dy}{dx}$ operator as $D_x$ or simply $D$ instead. $D[f]$ means the derivative of $f$.
#### Meaning of Derivatives
##### First Derivative
The first derivative at a point returns the slope of its original function at that point. <br>The height ($y$-value) of the graph shows the _slope_ of the original function, the location ($x$-value) gives the _location_ of this slope in the original function. The $x$-axis is therefore unchanged when differentiating (with respect to $x$ at least). <br>When the first derivative is 0, that means the original function is horizontal at that point. This could mean two things.
1. The function has an __extremum__[^extremum] here. This is a point like a maximum or minimum, whose direct neighboring points are either both lower, or both higher. This would imply this point is the lowest/highest in the area, a _local extremum_, or it might be the lowest/highest overall, a _global extremum_.
2. The function changes direction but reaches no extreme value. For example, $x^3$ at $x=0$ has slope 0, but the directly neighbouring points are both lower _and_ higher, which means no highest or lowest point has been reached and thus there is no extremum, but instead an _inflection point_.
##### Second Derivative
As discussed above, taking the derivative of a function at a point returns the slope of the function at that point. When taking a _second derivative_ the result is the direction of the first derivative at that location. It is also equivalent to the acceleration of the first graph.
Taking the second derivative is then useful for interpreting the original function without sketching it. Taking the second derivative where the first derivative is $0$ will tell you wether the _Inflection point_[^inflection_point] on the original function is an _extremum_[^extremum] or not.
- ___If $f^{\prime}=0$ :___ Then for $f\text{''}$:
	- __$y\ne0$:__  This is not an extreme value.
	- __$y>0$:__ The slope of the function is positive, therefore it's climbing after this point. This means that at this point there is a local/global _minimum_.
	- __$y<0$:__ The slope of the function is negative, therefore it's descending after this point. This means that at this point there is a local/global _maximum_.


### Definition
The derivative of a function $f$ gives the slope of the function at a point. Taking a derivative changes nothing about the directions of the function (usually the direction is just $x$), but it does change the value of the function (usually the value is just $y$). The value of the derivative at a point, is the slope of the original function at that point. <br>Because the direction remains unchanged, you can use the location where the derivative had a certain value, and plug it directly in to the original function, to find the height at this location on the original graph. <br>There are a few ways to denote differentiating a function $f\left(x\right)$.
1. __$f^{\prime}\left(x\right)$__ or __$\left\lbrack f\left(x\right)\right\rbrack^{\prime}$__. This notation just means differentiating $f\left(x\right)$. To increase the amount of times differentiated, add extra accents or write it like this: $f^{3} (x)$. This means the third derivative of $f$.
2. __$\frac{d}{dx}f\left(x\right)$__, the '_Leibniz notation_'. This notation automatically incorporates multivariability because the operator is directly with respect to $x$. To increase the amount of times differentiated, square the operator.
3. __$D\left\lbrack f\left(x\right)\right\rbrack$__ or __$D_{}^{1}\left\lbrack f\left(x\right)\right\rbrack$__ or in the case of multivariable calculus[^partdiff]: __$D_{x}^{1}\left\lbrack f\left(x\right)\right\rbrack$__. The last notation means differentiating with respect to $x$. To increase the amount of times differentiated, increase the power. It is best to always include the power $1$ in the term to avoid confusion with potential other $D$ terms.
#### Computational Rules
When computing derivatives, there's three rules that always apply. 
##### Product rule
When two functions of $x$ in multiplication both need differentiating with respect to $x$, the product rule is applied[^differentiation].
$$
D_{x}\left\lbrack f\left(x\right)\cdot g\left(x\right)\right\rbrack=f^{\prime}\left(x\right)\cdot g\left(x\right)+f\left(x\right)\cdot g^{\prime}\left(x\right)
$$
An example of such a case would be $D_{x}^{1} [x^{2} \cdot \sin(x)]$, which evaluates to $2x \sin(x) + x^2 \cos(x)$.
##### Chain rule
When a variable is enclosed in a different function which depends on that variable, for example $\sin\left(x\right)$ the differentiating process follows the _chain rule_[^differentiation].
$$
D_{x}\left\lbrack f\left(g\left(x\right)\right)\right\rbrack=f^{\prime}\left(g\left(x\right)\right)\cdot g^{\prime}\left(x\right)
$$
An example of such a case woud be $D_x [\sin(x^2)]$, which evaluates to $\cos(x^2) \cdot 2x$.
##### Inverse function rule
When a fraction is to be differentiated, the rule to differentiate is as follows:
$$
D_{x}\left\lbrack\frac{g\left(x\right)}{f\left(x\right)}\right\rbrack=\frac{nat-tan}{n^{2}}
$$
The _Dutch_ meaning is: 
$$
\frac{\textrm{noemer} \cdot \textrm{afgeleide van teller} - \textrm{teller} \cdot \textrm{afgeleide van noemer}}{\textrm{noemer}^2}
$$
Or, most importantly, in math-speak:
$$
\frac{f \cdot g' - g \cdot f'}{f^2}
$$

>[!note]
>Even though these rules always apply, they may be omitted from notation at times. For example, when differentiating $x^2$, we can apply the chain rule and write the result as $2x \cdot x'$, but seeing as $x' = 1$, we omit the use of the chain rule and just write $2x$ immediately.
### Differentiating Complicated Functions
For most functions the [basic rules](#Computational%20Rules) are sufficient to find a solution. In some cases where there are multiple layers of functions of $x$, or multiple multiplications of functions of $x$, it is useful to use the _substitution method_ in combination with the basic rules.
For complicated functions, such as $\ln\left(\cos\left(x^{2}\right)\right)$ it's usually necessary to use the _substitution technique_, in combination with the  basic rules, whereby you isolate a part of the expression, in this case, for example, $x^2$ and $\cos$, and substitute these functions for a variable $u$ and $v$. Then you differentiate using the above rules and, after obtaining a solution, resubstitute the original terms.
- __Solution to Example:__ 
	In this case we would substitute as follows: <br>$\ln\left(\cos\left(u\right)\right) \rightarrow \ln\left(v\right)$. <br>We would then calculate $u^{\prime}$ and $v^{\prime}$  and apply chain rule to get: <br>$u^{\prime}=2x$;  $v^{\prime}=-\sin\left(u\right)\cdot u^{\prime}$.
	Therefore the total solution is: <br>$D_{x}\left\lbrack\ln\left(v\right)\right\rbrack=\frac{1}{v}\cdot v^{\prime} \rightarrow \frac{1}{v}\cdot\left(-\sin\left(u\right)\cdot u^{\prime}\right)$. <br>Now substitute the expressions for $u$ and $v$ and the solution is: <br>$\frac{1}{\cos\left(x^{2}\right)}\cdot-\sin\left(x^{2}\right)\cdot2x=\frac{-2x\sin\left(x^{2}\right)}{\cos\left(x^{2}\right)}=-2x\tan\left(x^{2}\right)$
> [!tip] Tip
> This result is checkable with [the derivative calculator](https://www.derivative-calculator.net/)




---
### General Formulas
For a list of common functions that already have their operations calculated, see the following notes: <br>[RoT differentiation](Rules%20of%20Thumb%20Differentiation), [RoT integration](Rules%20of%20Thumb%20Integration), [General RoT](math%20equations.md).

---






##### useful sites:
1. [Derivative calculator](https://www.derivative-calculator.net/)
2. [Wolfree Alpha](https://archive.ph/gfhPu) (use tor-browser)
3. [Desmos (for graphing)](https://www.desmos.com/calculator)

---
__[Home](!%20Calculus%20I%20Learning%20Overview.md)__

---
_Status:_ #ripe

---

# References:
[^partdiff]: See the [note on Partial Differentiation](Partial%20Differentiation) for an explanation of multivariable differentiation, and a more accurate notation on $D^1$.
[^inflection_point]: An inflection point is a point on the graph of a function where it changes directions
[^extremum]: An extremum is the greatest value a graph reaches compared to the points to the left and right. This could be either __1:__ a local extreme, meaning that there might be other more extreme values on the graph, but this point is still higher than it's surrounding points. There can be infinite local extremes. Or __2:__ a global extreme. This is where the graph of the function reaches its absolute extreme. There can be only two global extremes, a minimum and a maximum value that no other point reaches. [wiki page on this](https://en.wikipedia.org/wiki/Maximum_and_minimum)
[^differentiation]: [Wikipedia - Differentiation rules](https://en.wikipedia.org/wiki/Differentiation_rules)
1. R. A. Adams, Christopher Essex, _Calculus A Complete Course_, 9th ed.
2. Openstax, _Calculus Volume 1_, [link](https://openstax.org/details/books/calculus-volume-1).
3. Openstax, _Calculus Volume 2_, [link](https://openstax.org/details/books/calculus-volume-2).
4. Openstax, _Calculus Volume 3_, [link](https://openstax.org/details/books/calculus-volume-3).
