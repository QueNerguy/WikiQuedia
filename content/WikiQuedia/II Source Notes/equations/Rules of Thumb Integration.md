# Rules of Thumb Integration
By rules of thumb (RoT) I mean quick equations and their solution, in general terms. 

1. (General rule for non-variable powers) 
$$
\int u^{n}\,dx=\frac{1}{n+1}\cdot u^{n+1}\cdot\frac{1}{u^{\prime}}
$$

2. $\frac{1}{u}$ ($1$ over $u$) 
$$
\int\frac{1}{u}\,dx=\ln\left|u\right|\cdot\frac{1}{u^{\prime}}
$$

3. (sine, cosine, tangent)<br>
	a. 
	$$
	\int\sin\left(u\right)\,dx = -\cos\left(u\right)\cdot\frac{1}{u^{\prime}}
	$$
	b. 
	$$
	\int\cos\left(u\right)\,dx=\sin\left(u\right)\cdot\frac{1}{u^{\prime}}
	$$
	c. _$\int\tan\left(u\right)\mathrm{d} x$_ only exists for $u$ with max $x$ powers of $1$, it's better to calculate these integrals with substitution etc. to avoid mistakes. 
4. (arcsine, arccosine, arctangent)<br>
	a. 
	$$
	\int\frac{1}{a^{2}+x^{2}}\,dx=\arctan\left(\frac{x}{a}\right)\cdot\frac{1}{a}
	$$
	b. 
	$$
	\int\frac{1}{\sqrt{a^{2}-x^{2}}}\,dx=\arcsin\left(\frac{x}{a}\right)\cdot\frac{1}{u^{\prime}}
	$$
	c. 
	$$
	\int \frac{-1}{\sqrt{a^{2}-x^{2}}}\,dx=\arccos\left(\frac{x}{a}\right)\cdot\frac{1}{u^{\prime}}\text{ }\cup\text{ }-\arcsin\left(\frac{x}{a}\right)\cdot\frac{1}{u^{\prime}}
	$$
5. (natural logarithm)
$$
\int\ln\left(x\right)\,dx = x\ln\left|x\right| - x
$$


> [!danger] Warning
> These solutions are the solutions to the general form, but they are missing a possible $C$ value. When _differentiating_ a value, like $5$, it disappears. Therefore we have to assume there could be a value $C$ appearing with $F(x)$ after doing the reverse operation, integration.

