---
title: Differentiation
draft: false
---
Tags: [[differentials]], [[calculus]], [[limits]] <br>25-01-2025

---
# Differentiation
Differentiating is the reciprocal of [integration](Integration.md), therefore a lot of  the same [quick rules](Rules%20of%20Thumb%20Integration) apply from integration, just in _reverse_. These rules I call _rules of thumb_.<br>Find the rules of thumb of differentiation [here](Rules%20of%20Thumb%20Differentiation).
### Geometrical Interpretation
Differentiation is a form of taking a [limit](Calculating%20Limits.md). The interpretation of a derivative is the slope of a function at a certain point. <br>Computing the slope between two points is done by taking $\frac{\Delta y}{\Delta x}$, where we take the distance between two points in $y$ direction, and divide by the distance between those points in $x$ direction.<br><br>![[Wiki_slope_in_2d_80%.png|350]]<br>By Maschen - Own work, CC BY-SA 3.0, [link](https://commons.wikimedia.org/w/index.php?curid=27658172)<br><br>If we want to know the slope at a single point, however, we calculate the slope as the distance between two points ($\Delta y, \Delta x$) approaches 0, because if the distance between two points is 0 the second point is at the location of the first point, meaning we have found the slope at single point. To annotate the fact that the line segments of size $\Delta x$ now have a _0-length_, we denote these segments as $dx$ instead, making $\frac{\Delta y}{\Delta x}$ become $\frac{dy}{dx}$ in Leibniz notation. Think of $dx$ as an infinitesimally small (read: very very small) step in $x$ direction[^ermackchually]. The operator $dx$ is called a [differential](https://en.wikipedia.org/wiki/Differential_(mathematics)). <br><br>Consider the following curve (black), where the slope is found at a certain point. Here, the line tangent to the curve is drawn, using the derivative to find the slope of the line. You can think of the derivative as an expression, giving the direction of travel of the curve at every point. Fill in the coordinates of a point to find the slope at that point. <br><br>![[Tangent_to_a_curve_80%.png|300]]<br>By Jacj at English Wikipedia / Later versions were uploaded by Oleg Alexandrov at en.wikipedia. - Transferred from en.wikipedia to Commons., Public Domain, [link](https://commons.wikimedia.org/w/index.php?curid=2068616)<br>
> [!note] Keep in Mind
> In this wiki it is usually preferred to write the more common $\frac{d}{dx}$ operator as $D_x$ or simply $D$ instead. 
> $D_x[f]$ means the derivative of $f$ with respect to $x$.
##### First Derivative
The first derivative at a point returns the slope of its original function at that point. <br>The height ($y$-value) of the graph shows the _slope_ of the original function, the location ($x$-value) gives the _location_ of this slope in the original function. The $x$-axis is therefore unchanged when differentiating (with respect to $x$ at least). <br>When the first derivative is 0, that means the original function is horizontal at that point. This could mean two things.
1. The function has an __extreme__[^extremum] here. This is a point like a maximum or minimum, whose direct neighboring points are either both lower, or both higher. This would imply this point is the lowest/highest in the area, a _local extreme_, or it might be the lowest/highest overall, a _global extreme_.
2. The function changes direction but reaches no extreme value. For example, $x^3$ at $x=0$ has slope 0, but the directly neighboring points are both lower _and_ higher, which means no highest or lowest point has been reached and thus there is no extreme, but instead an _inflection point_.
##### Second Derivative
As discussed above, taking the derivative of a function at a point returns the slope of the function at that point. When taking a _second derivative_ the result is the direction of the first derivative at that location. It is also equivalent to the acceleration of the first graph.
Taking the second derivative is then useful for interpreting the original function without sketching it. Taking the second derivative where the first derivative is $0$ will tell you whether the _Inflection point_[^inflection_point] on the original function is an _extreme_[^extremum] or not.
- ___If $f^{\prime}=0$ :___ Then for $f\text{''}$:
	- __$y\ne0$:__  This is not an extreme value.
	- __$y>0$:__ The slope of the function is positive, therefore it's climbing after this point. This means that at this point there is a local/global _minimum_.
	- __$y<0$:__ The slope of the function is negative, therefore it's descending after this point. This means that at this point there is a local/global _maximum_.


### Definition
The derivative of a function $f$ gives the slope of the function at a point. Taking a derivative changes nothing about the directions of the function (usually the direction is just $x$), but it does change the value of the function (usually the value is just $y$). The value of the derivative at a point, is the slope of the original function at that point. <br>Because the direction remains unchanged, you can use the location where the derivative had a certain value, and plug it directly in to the original function, to find the height at this location on the original graph. <br>There are a few ways to denote differentiating a function $f\left(x\right)$.
1. ___$f^{\prime}\left(x\right)$___ or ___$\left\lbrack f\left(x\right)\right\rbrack^{\prime}$___. This notation just means differentiating $f\left(x\right)$. To increase the amount of times differentiated, add extra accents or write it like this: $f^{3} (x)$. This means the third derivative of $f$.
2. ___$\frac{d}{dx}f\left(x\right)$___, the '_Leibniz notation_'. This notation automatically incorporates multivariability because the operator is directly with respect to $x$. To increase the amount of times differentiated, square the operator.
3. ___$D\left\lbrack f\left(x\right)\right\rbrack$___ or ___$D_{}^{1}\left\lbrack f\left(x\right)\right\rbrack$___ or in the case of multivariable calculus[^partdiff]: __$D_{x}^{1}\left\lbrack f\left(x\right)\right\rbrack$__. The last notation means differentiating with respect to $x$. To increase the amount of times differentiated, increase the power. It is best to always include the power $1$ in the term to avoid confusion with potential other $D$ terms.
#### Computational Rules
When computing derivatives, there's three rules that always apply. 
##### Product Rule
When two functions of $x$ in multiplication both need differentiating with respect to $x$, the product rule is applied[^differentiationproduct].
$$
D_{x}\left\lbrack f\left(x\right)\cdot g\left(x\right)\right\rbrack=f^{\prime}\left(x\right)\cdot g\left(x\right)+f\left(x\right)\cdot g^{\prime}\left(x\right)
$$
An example of such a case would be $D_{x}^{1} [x^{2} \cdot \sin(x)]$, which evaluates to $2x \sin(x) + x^2 \cos(x)$.
##### Chain Rule
When a variable is enclosed in a different function which depends on that variable, for example $\sin\left(x\right)$ the differentiating process follows the _chain rule_[^differentiationchain].
$$
D_{x}\left\lbrack f\left(g\left(x\right)\right)\right\rbrack=f^{\prime}\left(g\left(x\right)\right)\cdot g^{\prime}\left(x\right)
$$
An example of such a case would be $D_x [\sin(x^2)]$, which evaluates to $\cos(x^2) \cdot 2x$.
##### Inverse Function Rule
When a fraction is to be differentiated, the rule to differentiate is
$$
D_{x}\left\lbrack\frac{g\left(x\right)}{f\left(x\right)}\right\rbrack=\frac{nat-tan}{n^{2}}
$$
The _Dutch_ meaning is:
$$
\frac{\textrm{noemer} \cdot \textrm{afgeleide van teller} - \textrm{teller} \cdot \textrm{afgeleide van noemer}}{\textrm{noemer}^2}
$$
Or, most importantly, in math-speak we get
$$
\frac{f \cdot g' - g \cdot f'}{f^2}
$$

>[!note]
>Even though these rules always apply, they may be omitted from notation at times. For example, when differentiating $x^2$, we can apply the chain rule and write the result as $2x \cdot x'$, but seeing as $x' = 1$, we omit the use of the chain rule and just write $2x$ immediately.
### Substitution Method
For most functions the [basic rules](#Computational%20Rules) are sufficient to find a solution. However, for complicated functions, such as $\ln\left(\cos\left(x^{2}\right)\right)$ it's usually necessary to use the substitution method. <br>With the substitution method, you replace a part of the expression which makes it hard to differentiate, and replace it with $u$ or $v$. You then differentiate these terms as functions, which they are, and after obtaining a solution for the differential, you resubstitute them so the solution is in terms of $x$ again. This is the solution to the original derivative.
- [Solution to mentioned example](example%20substitution%20method%20differentiation)






---
### General Formulas
For a list of common functions that already have their expressions calculated, see the following notes: <br>[RoT differentiation](Rules%20of%20Thumb%20Differentiation), [RoT integration](Rules%20of%20Thumb%20Integration), [General RoT](math%20equations.md).

---






# Useful Sites
1. [Derivative calculator](https://www.derivative-calculator.net/)
2. [Wolfree Alpha](https://archive.ph/gfhPu) (use tor-browser)
3. [Desmos (for graphing)](https://www.desmos.com/calculator)

---
__[Home](!%20Calculus%20I%20Learning%20Overview.md)__

---
_Status:_ #ripe

---

# Based On:
[^partdiff]: See the [note on Partial Differentiation](Partial%20Differentiation) for an explanation of multivariable differentiation, and a more accurate notation on $D^1$.
[^inflection_point]: An inflection point is a point on the graph of a function where it changes directions
[^extremum]: An extremum is the greatest value a graph reaches compared to the points to the left and right. This could be either __1:__ a local extreme, meaning that there might be other more extreme values on the graph, but this point is still higher than it's surrounding points. There can be infinite local extremes. Or __2:__ a global extreme. This is where the graph of the function reaches its absolute extreme. There can be only two global extremes, a minimum and a maximum value that no other point reaches. <br>See: [Wikipedia - Maximum and minimum](https://en.wikipedia.org/wiki/Maximum_and_minimum).
[^differentiationchain]: Wikipedia, *Differentiation rules*, _Chain rule_, [link](https://en.wikipedia.org/wiki/Differentiation_rules#Chain_rule).
[^differentiationproduct]: Wikipedia, *Differentiation rules*, _Product rule_, [link](https://en.wikipedia.org/wiki/Differentiation_rules#Product_rule).
[^ermackchually]: *Technically speaking* this isn't the correct way to describe these derivatives. The $dy/dx$ is an operator onto itself and can't be broken up into pieces if we want to be completely rigorous. However, it is still possible to *act* as if it is a fraction. In essence the treatment of the $dy/dx$ operator as a fraction made up of differential $dy$ and $dx$ avoids using the [Jacobian matrix](Jacobian%20Matrix) to arrive at the same final form.
1. R. A. Adams, C. Essex, _Calculus A Complete Course_, 9th ed, CA.
2. Openstax, _Calculus Volume 1_, [link](https://openstax.org/details/books/calculus-volume-1).
3. Openstax, _Calculus Volume 2_, [link](https://openstax.org/details/books/calculus-volume-2).
4. Openstax, _Calculus Volume 3_, [link](https://openstax.org/details/books/calculus-volume-3).
5. Wikipedia, *Differentiation rules*, [link](https://en.wikipedia.org/wiki/Differentiation_rules).
