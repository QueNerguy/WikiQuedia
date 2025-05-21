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
The notation under the integral sign ($\int$) denotes the [domain](Domain) over which is integrated. Usually, when calculating the integral of a function $f$, you calculate the infinite integral ($\int_{-\infty}^{\infty} = \int$) to acquire the primitive function $F$, and evaluate it over it's domain afterward. With a domain $[a, b]$, we get the following expression for the integral:
$$
\int_{a}^{b}f\left(x\right)\,dx=\int_{}^{}f\left(x\right)\,dx\Bigg|_{x=a}^{x=b}=F\left(x\right)\Bigg|_{x=a}^{x=b}
$$
When the domain is not defined at an [endpoint](Domain#Definition) $a$, you take the limit after having integrated which looks like this:
$$
F\left(x\right)\Bigg|_{\lim_{x\to a}}^{x=b} = \lim_{x \rightarrow a} F(x) \bigg|_a ^b
$$
Evaluating an integral over a domain from $a$ to $b$ is notated as follows:
$$
F(x)\bigg|^{x = a}_{x = b} = F\left(a\right)-F\left(b\right)
$$
In the case of the limit shown previously (the same applies for limits in both directions) the notation is as follows.
$$
\lim_{x\to a}F\left(x\right)-F\left(b\right)
$$
---

Taking limits in integrals and improper integration is also discussed in the note [[Improper Integrals]].

### Integrating Methods
When a function is too complicated to integrate, and doesn't look like any [rules of thumb](Rules%20of%20Thumb%20Integration), there are two ways to solve it: _[substitution](#Substitution)_ and _[integration by parts](#Integration%20by%20Parts)_, in combination with using the rules of thumb.
#### Substitution
This method is analogous to [substitution for differentiation](Differentiation#Substitution). We substitute functions of $x$ by $u$, $v$, etc., as many times as needed, until a function in the form of the [rules of thumb](Rules%20of%20Thumb%20Integration) is reached and it is possible to integrate directly.

- __Example:__ When given a function like $\int_{}^{}\frac{1}{2x+1}\,dx$, it is useful to substitute in such a way that we get $\int_{}^{}\frac{1}{u}du$, that way we can directly integrate. 
	- Set $u=2x+1$. -> Then: $u^{\prime}=\frac{\,du}{\,dx}=2$. Thus: $\,dx=\frac12\cdot \,du$. 
	- The resulting function is $\int_{}^{}\frac{1}{u}\cdot\frac12\,du=\frac12\int_{}^{}\frac{1}{u}\,du$. This function can be evaluated directly from the rules of thumb.
	- After substitution the resulting function is: $\frac12\cdot\ln\left|2x+1\right|+C_1$. 

> [!Note]
> It is imperitive that when substituting $u=f(x)$ the values at which the function is _evaluated_ are also changed in terms of $u$. A function $\int_{x=1}^{x=3}$ when substituted with $u=x^2$ gives upper and lower limits of $u(x=1)=1$ and $u(x=3)=9$ respectively, therefore the integral with substitution becomes: $\int_{u=1}^{u=9}$. It is now in terms of $u$, which allows for immediate evaluation after calculating the integral in terms by plugging in the values obtained for $u$.
> It _is_ also possible to keep the integral evaluated in terms of $x$ as in the original. This would require back-substitution of the $u$ and $v$ values, back to terms of $x$ <u>after</u> calculating the integral, resulting in unnecessary steps.

#### Integration by Parts
This method is based on [the substitution method](#Substitution). It is used for even more complicated functions, usually functions that are a combination of two factors of $x$.
To solve these divide the function in the integral in two parts: $u$ and $\mathrm{d}v$. differentiate $u$ to $\mathrm{d}u$ and integrate $\mathrm{d}v$ to $v$.
Then substitute them into the ___formula___:
$$
\int_{}^{}u\,dv=uv-\int_{}^{}v\,du
$$
##### Not Solving Immediately?
- It might happen that the function doesn't solve immediately and that this operation has to be multiple times.
- It also might happen that the solution has a repeating $\int_{}^{}v\mathrm{d}u$, this would happen with for things that have a $f\left(x\right)=e^{x}$ in them. In this case it is sometimes possible to solve by equalling the left and right hand side of the original as described in the following paragraph:
- ___Solving repeating integrals:___
	1. Double substitution into the original formula gives the original term $\int_{}^{}u\mathrm{d}v$ back:
		$$
		\int_{}^{}u\,dv=uv-\int_{}^{}v\,du=\left(\ldots\right)-\int_{}^{}u\,dv
		$$
	
	2. Here we see the repeating of the $\int_{}^{}u\mathrm{d}v$, and therefore we can apply simple algebra: 
		$$
		\int_{}^{}u\,dv=\left(\ldots\right)-\int_{}^{}u\,dv\to2\int_{}^{}u\,dv=\left(\ldots\right)\to\int_{}^{}u\,dv=\frac12\cdot\left(\ldots\right)
		$$
	
	3. This then yields a solution for the original question $\int_{}^{}u\mathrm{d}v$.
> [!Note]
> In this case it is not necessary to substitute with $u=f(x)$ as with the [substitution method](#Substitution), because the function $f(x)$ is not replaced in the integral as it is with the substitution method and the integral stays in terms of $x$, instead of terms of $u$ as we saw previously, meaning that when calculating $\int_{}^{}u\,dv=uv-\int_{}^{}v\,du$ the $u$ and $v$ etc. values are replaced by a function $f(x)$ immediately, instead of after integration or not at all, like with the substitution method.


---
### General Formulas
For a list of common functions that already have their operations calculated, see the following notes: <br>[RoT integration](Rules%20of%20Thumb%20Integration), [RoT differentiation](Rules%20of%20Thumb%20Differentiation), [General RoT](math%20equations.md).

---





##### useful sites:
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
