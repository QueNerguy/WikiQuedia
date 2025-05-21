# Rules of Thumb Differentiation
By rules of thumb (RoT) I mean quick equations and their solution, in general terms.

##### General rule for non-variable powers
$$
D_{u}\left\lbrack u^{n}\right\rbrack=n\cdot u^{n-1}\cdot u^{\prime}
$$
##### Sine, Cosine, Tangent

$$
D_{u}\left\lbrack\sin\left(u\right)\right\rbrack=\cos\left(u\right)\cdot u^{\prime}
$$
 
$$
D_{u}\left\lbrack\cos\left(u\right)\right\rbrack=-\sin\left(u\right)\cdot u^{\prime}
$$
$$
D_{u}\left\lbrack\tan\left(u\right)\right\rbrack=\sec^{2}\left(u\right)=\frac{1}{\cos^{2}\left(u\right)}\cdot u^{\prime}
$$

##### Arcsine, Arccosine, Arctangent
$$
D_{u}\left\lbrack\arcsin\left(u\right)\right\rbrack=\frac{1}{\sqrt{1^2-u^{2}}}\cdot u^{\prime}
$$
$$
D_{u}\left\lbrack\arccos\left(u\right)\right\rbrack=-\frac{1}{\sqrt{1^2-u^{2}}}\cdot u^{\prime}
$$
$$
D_{u}\left\lbrack\arctan\left(u\right)\right\rbrack=\frac{1}{u^{2}+1}\cdot u^{\prime}
$$
##### Absolute values
$$
D_{u}\left\lbrack|u|\right\rbrack=\frac{u}{\left\lbrack u\right\rbrack}\cdot u^{\prime}
$$
##### Natural logarithms
$$
D_{u}\left\lbrack\ln\left(u\right)\right\rbrack=\frac{1}{u}\cdot u^{\prime}
$$
##### Rule for [variable powers](math%20equations.md#powers%20of%20$x$)
$$
D_{u}\left\lbrack a^{u}\right\rbrack=D_{u}\left\lbrack e^{u\ln\left(a\right)}\right\rbrack=a^{u}\cdot\ln\left(a\right)\cdot u^{\prime}
$$


---
To ease some calculations, consider using the [derivative calculator](https://www.derivative-calculator.net/) by David Scherfgen.