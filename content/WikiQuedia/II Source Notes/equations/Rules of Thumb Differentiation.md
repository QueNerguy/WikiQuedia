# Rules of Thumb Differentiation
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
6. (Rule for [variable powers](math%20equations.md#powers%20of%20$x$))
$$
D_{x}\left\lbrack a^{u}\right\rbrack=D_{x}\left\lbrack e^{u\ln\left(a\right)}\right\rbrack=a^{u}\cdot\ln\left(a\right)\cdot u^{\prime}
$$

