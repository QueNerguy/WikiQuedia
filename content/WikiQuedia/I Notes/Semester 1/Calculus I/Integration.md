---
title: Integration
draft: false
---
Tags: [[calculus]], [[differentials]], [[integrals]], [[intervals]], [[limits]] <br>26-01-2025

---
# Integration
Integrating is the reciprocal of [differentiating](Differentiation.md), therefore a lot of  the same [quick rules](Rules%20of%20Thumb%20Differentiation) apply from differentiation, just in _reverse_. These rules I call _rules of thumb_.<br>Find the rules of thumb of integration [here](Rules%20of%20Thumb%20Integration).

> [!warning] Remember
> Divide by $u^{\prime}$ when taking an integral of, for example, just $\tan{(u)}$ out of the  [quick rules](Rules%20of%20Thumb%20Differentiation) list of differentiation.

### Geometrical Interpretation
Taking the integral of a function means summing the area of very thin rectangles, with width $dx$ and height $y$, under the curve of the function. <br>The integral is based on [Riemann sums](https://en.wikipedia.org/wiki/Riemann_sum) - the sign $\int$ can be thought of as a deformed $\Sigma$ - where the area under a curve is approximated by constructing a series of rectangles under the curve, and adding their respective areas up. These rectangles are found by taking the $y$ value at a certain point on the curve, and multiplying it with a small step in $x$ direction. The smaller the steps of $x$ become, the smaller the error in this approximation, thus, as the size of the steps approaches 0, the error also approaches 0. This 0-sized step is denoted with $dx$. The goal is to find a rectangle for every point $x$, and add them up to find the area under the curve. <br><br>![[Riemann_sum_convergence_80%.png|450]]<br>By Brad219 - Own work created using Inkscape 1.3. Redrawn from original PNG source authored by KSmrq, CC0, [link](https://commons.wikimedia.org/w/index.php?curid=150414772)

### Definition
The most standard way to denote the primitive[^primitive] of $f(x)$ is as __$F(x)$__
$$
F\left(x\right)=\int f\left(x\right)\,dx
$$
The notation under the integral sign ($\int$) denotes the [domain](Domain) over which is integrated. Usually, when calculating the integral of a function $f$, you calculate the infinite integral ($\int_{-\infty}^{\infty} = \int$) to acquire the primitive function $F$, and evaluate it over it's domain afterward. With a domain $[a, b]$, we get the expression for the integral as follows
$$
\int_{a}^{b}f\left(x\right)\,dx=\int_{}^{}f\left(x\right)\,dx\Bigg|_{x=a}^{x=b}=F\left(x\right)\Bigg|_{x=a}^{x=b}
$$
When the domain is not defined at an [endpoint](Domain#Definition) $a$, you take the limit after having integrated which looks like
$$
F\left(x\right)\Bigg|_{\lim_{x\to a}}^{x=b} = \lim_{x \rightarrow a} F(x) \bigg|_a ^b
$$
To finally evaluate the resulting function that was integrated over a domain from $a$ to $b$, is
$$
F(x)\bigg|^{x = a}_{x = b} = F\left(a\right)-F\left(b\right)
$$
In the case of the limit shown previously (the same applies for limits in both directions) the notation is
$$
\lim_{x\to a}F\left(x\right)-F\left(b\right)
$$
> [!note] 
> As integration is the reciprical of [differentiation](Differentiation), we must account for terms lost.
> What is meant by this, is that when we differentiate a value, 3 for example, it disappears. Therefore, when integrating $f$ to obtain $F$, there may have been terms like 3 that would be lost if we differentiate $F$ to obtain $f$ again. 
> Because we don't know which values we might lose when integrating, we always include a constant $c_1$ into the resulting function $F$, to correct for any terms that might have been lost during the integration process.


---

Taking limits in integrals and improper integration is also discussed in the note [[Improper Integrals]].

### Integrating Methods
When a function is too complicated to integrate, and doesn't look like any [rules of thumb](Rules%20of%20Thumb%20Integration), there are two ways to solve it: _[substitution](#Substitution)_ and _[integration by parts](#Integration%20by%20Parts)_, in combination with using the rules of thumb.
#### Substitution
This method is analogous to [substitution for differentiation](Differentiation#Substitution). We substitute functions of $x$ by terms $u$, $v$, etc., as many times as needed, until it is possible to integrate directly, but now with respect to $u$ or $v$ instead of $x$. <br><br>Keep in mind that when substituting in terms of $u$, we need to calculate a [derivative](Differentiation) to get steps of $du$ instead of $dx$. This is because when calculating an integral, we always do it with respect to steps in $x$ direction, $dx$, in order to evaluate every single point on the $x$-axis. Thus, when integrating with respect to $u$, we need to do it with respect to the steps in the $u$ direction, $du$, as well. <br>Finding this $du$ means zooming very deep in on the function, in order to evaluate how the function changes from a point to it's neighboring point. The amount $u$ changes from point 1 to point 2 is $du$, the [differential](https://en.wikipedia.org/wiki/Differential_(mathematics)) of $u$, whose value/size is influenced by how steep the slope of the function of $x$ is. $du$ gives something like a density of the function, the size of the step from point to point for $du$ says something about how much $x$ increases. A function $u = x^2$ sees $u$ increase a lot for every step of 1 in $x$ after a while. Therefore when evaluating an integral with respect to $u$, instead of $x$, we need to correct for the fact that a small step $dx$ sees a much bigger step $du$. We do this by computing the derivative of $u = x^2$, as the slope of the functio relates the increase in steps of $u$ to the steps of $x$. <br>Because we want to find and relate these small steps, we consider $x$ to be _a function_ of these steps $dx$, which means we must apply the [chain rule](Differentiation#Chain%20Rule) when differentiating $x$, and we obtain $D_x [x] = dx$, and $D_x [x^2] = 2xdx$. To obtain $du$ for a substitution like $u = x^2$, we calculate the derivative and isolate $dx$ so we can substitute it into the integral. for $u = x^2$ we therefore find $dx = 2xdu$.
%%
OLD TEXT, perhaps useful:
To find those steps in $u$ direction, $du$, we realize we can take the derivative of $u$, <u>not</u> with respect to a certain direction - that would yield us $\frac{du}{dx}$ or $D_x [u]$, the derivative of $u$ in $x$ direction - but with no regards to direction at all. This _differential_ gives us the derivative of $u$ to be $du$, which we need. $du$ represents a tiny change in the size of $u$. The derivative of $x$ becomes $dx$, a tiny change in the size of $x$. <br>This type of derivative is called the _total derivative_ of a function. This concept is reviewed further in [Partial Differentiation](Partial%20Differentiation#Total%20Derivative), as a part of [calculus II](!%20Calculus%20II%20Learning%20Overview).<br>To obtain $du$ for a substitution like $u = x^2$, we calculate the derivative, using the [chain rule](Differentiation#Chain%20Rule).%% 

$$
\int f(x) dx = \int f(x) \cdot 2x du
$$

- [An example of this process](example%20substitution%20method%20integration)


> [!Note]
> It is imperitive that when substituting $u$ for a certain $f(x)$, the upper and lower bounds where the integral is _evaluated_ are also changed from $x$ to be in terms of $u$. 
> A function $\int_{x = 1}^{x = 3} f(x) dx$ with a subsitution $u = x^2$ gives upper and lower limits of: 
> 1. $u(x = 1) = 1^2 = 1$
> 2. $u(x = 3) = 3^2 = 9$ 
> 
> Therefore the integral becomes: $\int_{u = 1}^{u = 9} f(u) du$. The entire integral is now in terms of $u$, which allows for immediate evaluation after obtaining the primitve $F(u)$, by simply plugging in the values of $u$ as normal.
> Alternatively, it _is_ also possible to keep the upper and lower bounds of the integral in terms of $x$, because this substitution changes nothing about the integration itself, the only change is that we cannot substitute directly. Evaluating would require back-substitution of $u$ to $x$ in the function $F(u)$ to obtain $F(x)$, allowing us to plug in the values for $x$ in the bounds of the integral.
> This method is more inefficient, however.

#### Integration by Parts
This method is based on [the substitution method](#Substitution). It is used for even more complicated functions, usually functions that are a combination of two factors of $x$.
To solve these divide the function in the integral in two parts: $u$ and $\mathrm{d}v$. differentiate $u$ to $\mathrm{d}u$ and integrate $\mathrm{d}v$ to $v$.
Then substitute them into the ___formula___ below.
$$
\int_{}^{}u\,dv=uv-\int_{}^{}v\,du
$$
##### Not Solving Immediately?
- It might happen that the function doesn't solve immediately and that this operation has to be multiple times.
- It also might happen that the solution has a repeating $\int_{}^{}v\mathrm{d}u$, this would happen with for things that have a $f\left(x\right)=e^{x}$ in them. In this case it is sometimes possible to solve by equalling the left and right hand side of the original as described in the following paragraph:
- ___Solving repeating integrals:___
	1. Double substitution into the original formula gives the original term $\int_{}^{}u\mathrm{d}v$ back.
		$$
		\int_{}^{}u\,dv=uv-\int_{}^{}v\,du=\left(\ldots\right)-\int_{}^{}u\,dv
		$$
	
	2. Here we see the repeating of the $\int_{}^{}u\mathrm{d}v$, and therefore we can apply simple algebra. 
		$$
		\int_{}^{}u\,dv=\left(\ldots\right)-\int_{}^{}u\,dv\to2\int_{}^{}u\,dv=\left(\ldots\right)\to\int_{}^{}u\,dv=\frac12\cdot\left(\ldots\right)
		$$
	
	3. This then yields a solution for the original question $\int_{}^{}u\mathrm{d}v$.
> [!Note]
> In this case it is not necessary to substitute with $u=f(x)$ as with the [substitution method](#Substitution), because the function $f(x)$ is not replaced in the integral as it is with the substitution method and the integral stays in terms of $x$, instead of terms of $u$ as we saw previously, meaning that when calculating $\int_{}^{}u\,dv=uv-\int_{}^{}v\,du$ the $u$ and $v$ etc. values are replaced by a function $f(x)$ immediately, instead of after integration or not at all, like with the substitution method.


---
### General Formulas
For a list of common functions that already have their expressions calculated, see the following notes: <br>[RoT integration](Rules%20of%20Thumb%20Integration), [RoT differentiation](Rules%20of%20Thumb%20Differentiation), [General RoT](math%20equations.md).

---





# Useful Sites
1. [Integral calculator](https://www.integral-calculator.com/)
2. [Wolfree Alpha](https://archive.ph/gfhPu) (use tor-browser)
3. [Desmos (for graphing)](https://www.desmos.com/calculator)





---
__[Home](!%20Calculus%20I%20Learning%20Overview.md)__

---
_Status:_ #ripe

---
# References:
[^primitive]: The integrated function $F(x)$ of the original $f(x)$.
1. Openstax, _Calculus Volume 1_, [link](https://openstax.org/details/books/calculus-volume-1).
2. Openstax, _Calculus Volume 2_, [link](https://openstax.org/details/books/calculus-volume-2).
3. Openstax, _Calculus Volume 3_, [link](https://openstax.org/details/books/calculus-volume-3).
