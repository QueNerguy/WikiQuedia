# Rules of Thumb Integration
By rules of thumb (RoT) I mean quick equations and their solution, in general terms. 

##### General rule for non-variable powers
$$
\int u^{n}\,dx=\frac{1}{n+1}\cdot u^{n+1}\cdot\frac{1}{u^{\prime}}
$$

##### $1 / u$
$$
\int\frac{1}{u}\,dx=\ln\left|u\right|\cdot\frac{1}{u^{\prime}}
$$

##### Sine, Cosine, Tangent
$$
\int\sin\left(u\right)\,dx = -\cos\left(u\right)\cdot\frac{1}{u^{\prime}}
$$
$$
\int\cos\left(u\right)\,dx=\sin\left(u\right)\cdot\frac{1}{u^{\prime}}
$$
- $\int\tan\left(u\right)\mathrm{d} x$ only exists for $u$ with max $x$ powers of $1$, it's better to calculate these integrals with substitution etc. to avoid mistakes. 
##### Arcsine, Arccosine, Arctangent
$$
\int\frac{1}{a^{2}+x^{2}}\,dx=\arctan\left(\frac{x}{a}\right)\cdot\frac{1}{a}
$$
$$
\int\frac{1}{\sqrt{a^{2}-x^{2}}}\,dx=\arcsin\left(\frac{x}{a}\right)\cdot\frac{1}{u^{\prime}}
$$
$$
\int \frac{-1}{\sqrt{a^{2}-x^{2}}}\,dx=\arccos\left(\frac{x}{a}\right)\cdot\frac{1}{u^{\prime}}\text{ }\lor\text{ }-\arcsin\left(\frac{x}{a}\right)\cdot\frac{1}{u^{\prime}}
$$
##### Natural logarithm
$$
\int\ln\left(x\right)\,dx = x\ln\left|x\right| - x
$$
##### The _improper integral_
$$
I = \int_{- \infty}^{\infty} e^{- x^2}dx = \sqrt{\pi}
$$

> [!danger] Warning
> These solutions are the solutions to the general form, but they are missing a possible $C$ value. When _differentiating_ a value, like $5$, it disappears. Therefore we have to assume there could be a value $C$ appearing with $F(x)$ after doing the reverse operation, integration.

---
To ease some calculations, consider using the [integral calculator](https://www.integral-calculator.com/) by David Scherfgen.
