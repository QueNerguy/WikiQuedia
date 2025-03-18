---
title: Integration and it's Techniques
draft: false
---
Tags: [[calculus]], [[differentiation]], [[integration]], [[interval syntax]], [[limits]] <br>26-01-2025

---
# Integration and Techniques
### Definition
Taking an integral is the reciprocal of [differentiating a function](Differentiation%20and%20Techniques.md), therefore a lot of  the same  [quick rules](Differentiation%20and%20Techniques.md#Rules%20of%20Thumb) apply from differentiation, just _the other way around_. 
> [!warning] Remember!
> Divide by $u^{\prime}$ when taking an integral of just $\tan{(u)}$ for example, out of this list.

### Notation
The most standard way to denote the primitive[^primitive] is as __$F(x)$__
$$F\left(x\right)=\int_{x=a}^{x=b}f\left(x\right)\mathrm{d}x$$
The notation under the integral sign ($\int$) denotes the [domain](Intervals;%20Domain%20and%20Range.md#Definitions) over which is integrated. Usually when calculating the integral of a function you calculate the infinite integral ($\int$) to acquire the primitive function and evaluate it over it's domain afterward:
$$\int_{a}^{b}f\left(x\right)\,\mathrm{d}x=\int_{}^{}f\left(x\right)\,\mathrm{d}x\Bigg|_{x=a}^{x=b}=F\left(x\right)\Bigg|_{x=a}^{x=b}$$
When the domain is not defined at its [endpoints](Intervals;%20Domain%20and%20Range.md#Definitions)  you take the limit after integration, which looks like this:
$$F\left(x\right)\Bigg|_{\lim_{x\to a}}^{x=b}$$
- _Evaluating_ of an integral:
$$F\left(a\right)-F\left(b\right)$$
- In the case of the previous _limit_ (this also works for two limits):
$$\lim_{x\to a}F\left(x\right)-F\left(b\right)$$

### Methods of Integrating
When a function is too complicated to integrate, and doesn't follow any [rules of thumb](#ruules%20of%20thumb) there are two ways to solve it left: _[substitution](#substitution)_, and _[integrating by parts](#integration%20by%20parts)_, in combination with the basic rules of thumb.
#### Substitution
This method is analogous to [substitution for differentiation](Differentiation%20and%20Techniques.md#Substitution). We substitute functions of $x$ by $u$, $v$, etc., as many times as needed, until a function in the form of the [rules of thumb](#ruules%20of%20thumb) is reached and it is possible to integrate directly.

- __Example:__ When given a function like $\int_{}^{}\frac{1}{2x+1}\mathrm{d}x$, it is useful to substitute in such a way that we get $\int_{}^{}\frac{1}{u}du$, that way we can directly integrate. 
	- Set $u=2x+1$. -> Then: $u^{\prime}=\frac{\mathrm{d}u}{\mathrm{d}x}=2$. Thus: $\mathrm{d}x=\frac12\cdot du$. 
	- The resulting function is $\int_{}^{}\frac{1}{u}\cdot\frac12du=\frac12\int_{}^{}\frac{1}{u}du$. This function can be evaluated directly from the rules of thumb.
	- After substitution the resulting function is: $\frac12\cdot\ln\left|2x+1\right|+C_1$. 

> [!Note]
> It is imperitive that when substituting $u=f(x)$ the values at which the function is _evaluated_ are also changed in terms of $u$. A function $\int_{x=1}^{x=3}$ when substituted with $u=x^2$ gives upper and lower limits of $u(x=1)=1$ and $u(x=3)=9$ respectively, therefore the integral with substitution becomes: $\int_{u=1}^{u=9}$. It is now in terms of $u$, which allows for immediate evaluation after calculating the integral in terms by plugging in the values obtained for $u$.
> It _is_ also possible to keep the integral evaluated in terms of $x$ as in the original. This would require back-substitution of the $u$ and $v$ values, back to terms of $x$ <u>after</u> calculating the integral, resulting in unnecessary steps.

#### Integration by Parts
This method is based on [the substitution method](#substitution). It is used for even more complicated functions, usually functions that are a combination of two factors of $x$.
To solve these divide the function in the integral in two parts: $u$ and $\mathrm{d}v$. differentiate $u$ to $\mathrm{d}u$ and integrate $\mathrm{d}v$ to $v$.
Then substitute them into the ___formula___:
$$\int_{}^{}u\mathrm{d}v=uv-\int_{}^{}v\mathrm{d}u$$
##### Not Solving Immediately?
- It might happen that the function doesn't solve immediately and that this operation has to be multiple times.
- It also might happen that the solution has a repeating $\int_{}^{}v\mathrm{d}u$, this would happen with for things that have a $f\left(x\right)=e^{x}$ in them. In this case it is sometimes possible to solve by equalling the left and right hand side of the original as described in the following paragraph:
- ___Solving repeating integrals:___
	1. $$\int_{}^{}u\mathrm{d}v=uv-\int_{}^{}v\mathrm{d}u=\left(\ldots\right)-\int_{}^{}u\mathrm{d}v$$
	2. Here we see the repeating of the $\int_{}^{}u\mathrm{d}v$, and therefore we can apply simple algebra: $$\int_{}^{}u\mathrm{d}v=\left(\ldots\right)-\int_{}^{}u\mathrm{d}v\to2\int_{}^{}u\mathrm{d}v=\left(\ldots\right)\to\int_{}^{}u\mathrm{d}v=\frac12\cdot\left(\ldots\right)$$
	3. This then yields a solution for the original question $\int_{}^{}u\mathrm{d}v$.
> [!Note]
> In this case it is not necessary to substitute with $u=f(x)$ as with the [substitution method](#substitution), because the function $f(x)$ is not replaced in the integral as it is with the substitution method and the integral stays in terms of $x$, instead of terms of $u$ as we saw previously, meaning that when calculating $\int_{}^{}u\mathrm{d}v=uv-\int_{}^{}v\mathrm{d}u$ the $u$ and $v$ etc. values are replaced by a function $f(x)$ immediately, instead of after integration or not at all, like with the substitution method.

### Geometrically
Taking the integral of a function is analagous to summing the area under the curve of the original function. The sign $\int$ is a deformed $\Sigma$. The integral basically sums the area, the _$y$-value_ $\cdot$ _the $x$-value_ as $x$ goes to $0$, -> as $x$ becomes $\mathrm{d}x$. Thus $\Sigma y\cdot \mathrm{d}x$, with as many steps as there are $\mathrm{d}x$ in $\left\lbrack x_1,x_2\right\rbrack$[^intervals] ->  $\int y\cdot \mathrm{d}x$. 

### Rules of Thumb
By rules of thumb (RoT) I mean quick equations and their solution, in general terms.

1. (General rule for non-variable powers)$$\int_{}^{}{u^{n}d}x=\frac{1}{n+1}\cdot u^{n+1}\cdot\frac{1}{u^{\prime}}^{}$$
2. $\frac{1}{u}$ ($1$ over $u$) $$\int_{}^{}\frac{1}{u}\mathrm{d} x=\ln\left|u\right|\cdot\frac{1}{u^{\prime}}$$
3. (sine, cosine, tangent)
	a. $$\int_{}^{}\sin\left(u\right)\,\mathrm{d}x=-\cos\left(u\right)\cdot\frac{1}{u^{\prime}}$$
	b. $$\int_{}^{}\cos\left(u\right)\mathrm{d} x=\sin\left(u\right)\cdot\frac{1}{u^{\prime}}$$
	c. _$\int\tan\left(u\right)\mathrm{d} x$_ only exists for $u$ with max $x$ powers of $1$, it's better to calculate these integrals with substitution etc. to avoid mistakes. 
4. 
	a. $$\int_{}^{}\frac{1}{a^{2}+x^{2}}\,\mathrm{d}x=\arctan\left(\frac{x}{a}\right)\cdot\frac{1}{a}$$
	b. $$\int_{}^{}\frac{1}{\sqrt{a^{2}-x^{2}}}\mathrm{d}x=\arcsin\left(\frac{x}{a}\right)\cdot\frac{1}{u^{\prime}}$$
	c. $$\int_{}^{}-\frac{1}{\sqrt{a^{2}-x^{2}}}\mathrm{d}x=\arccos\left(\frac{x}{a}\right)\cdot\frac{1}{u^{\prime}}\text{ }\cup\text{ }-\arcsin\left(\frac{x}{a}\right)\cdot\frac{1}{u^{\prime}}$$
5. (natural logarithm)$$\int_{}^{}\ln\left(x\right)\,\mathrm{d}x=x\ln\left|x\right|-x$$

> [!warning] Look out!
> These solutions are the solutions to the general form, but they are missing a possible $C$ value. When _differentiating_ a value, like $5$, it disappears. Therefore we have to assume there could be a value $C$ appearing with $F(x)$ after doing the reverse operation, integration.

See also: [RoT differentiation](Differentiation%20and%20Techniques.md#Rules%20of%20Thumb), [General RoT](quick%20math%20equations.md).





---





##### useful sites:
1. [Integral calculator](https://www.integral-calculator.com/)
2. Wolfree Alpha %% I cant currently find a working link tho :( %%
3. [Desmos (for graphing)](https://www.desmos.com/calculator)





---
__[Home](!%20Learning%20Overview%20(Calculus%20I).md)__

---
_Status:_ #ripe

---
# References:
[^primitive]: The integrated function $F(x)$ of the original $f(x)$.
[^intervals]: [An explanation](Intervals;%20Domain%20and%20Range.md) of this notation or just intervals themselves.
1. Openstax, _Calculus Volume 1_, [link](https://openstax.org/details/books/calculus-volume-1)
2. Openstax, _Calculus Volume 2_, [link](https://openstax.org/details/books/calculus-volume-2)
3. Openstax, _Calculus Volume 3_, [link](https://openstax.org/details/books/calculus-volume-3)
