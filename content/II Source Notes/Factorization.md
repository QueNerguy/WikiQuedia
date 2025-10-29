### Factorization
26-01-2025
#### Referencing
1. R. A. Adams, C. Essex, _Calculus A Complete Course_, 9th ed, CA.



#### Synopsis
Factoring is a way of dividing a complicated polynomial into smaller parts that are easier to work on, either for [integrating](Integration), [differentiating](Differentiation), or [taking limits](Calculating%20Limits) for example. <br>2$^{\text{nd}}$ degree polynomials ($ax^{2}+bx+c$) can always be decomposed as some combination $(dx+e)$ and $(fx+g)$. <br>When factoring, start with dividing by the value in front of $x^2$ to obtain a polynomial of the form $x^{2}+ax+b$ where there is no scalar in front of $x^2$. From here there's two types of results:
1. ***Short Form:*** 
$$
ux^{2}-v^{2} = \left(\sqrt{u}x+v\right)\left(\sqrt{u}x-v\right)
$$
2. ***Long Form:***
$$
x^{2}+2uv\cdot x+uv = \left(x+u\right)\left(x+v\right)
$$

Thus, when dealing with a polynomial $x^{2}+ax+b$ we are looking for two terms whose sum is equal to $b$, and whose combination is equal to $a$. <br>Finding these terms might sometimes be difficult to do mentally, or the solution might even be a **complex number**. In these cases we can use the [quadratic formula](https://en.wikipedia.org/wiki/Quadratic_formula), which states that for a general 2$^{\text{nd}}$ order polynomial $ax^{2}+bx+c$ we have
$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} \qquad \Rightarrow \qquad \begin{cases} x_1 = \frac{-b + \sqrt{b^2 - 4ac}}{2a} \\ x_2 = \frac{-b - \sqrt{b^2 - 4ac}}{2a} \end{cases}
$$
To get a factorized form of $ax^{2}+bx+c$ we can then write
$$
ax^{2}+bx+c = (x - x_1)(x - x_2)
$$
Or, in it's totality:
$$
ax^{2}+bx+c = \left(x - \frac{-b + \sqrt{b^2 - 4ac}}{2a} \right) \left(x - \frac{-b - \sqrt{b^2 - 4ac}}{2a} \right)
$$


%%
- This one is based on the full form below. However, instead of using this form it is generally easier to divide the whole original fraction by the coefficient in front of the $x^2$, namely $ac$, and use the form above instead of the one below. 
$$
\left(ax+b\right)\left(cx+d\right)=ac\cdot x^2+\left(ad+bc\right)\cdot x+bd
$$
The way to factor the quadratic forms seen on the right hand side is just by looking at patterns and similarities with these here formulas.%%





%%

### In Fractions
In some scenarios there are other ways of simplifying that are better suited.
1. ___Grade teller $\ge$ grade denominator:___ In this case the best way to simplify a _fraction_ is to do polynomial [long division](https://en.wikipedia.org/wiki/Long_division). 
2. ___Grade denominator $\ge$ grade teller:___ In this case [partial fraction decomposition](#Partial%20Fraction%20Decomposition) is the best way to simplify the fraction.








---
__[Home](!%20Calculus%20I%20Learning%20Overview.md)__

---
_Status:_ #ripe

---
# Based On:
[^goatedFilmpje]: blackpenredpen, _Partial Fraction Decomposition Study Guide (how setup)_, 9-2020, US, [link](https://www.youtube.com/watch?v=DfTJOsqxIJ4).


1. blackpenredpen, _Partial Fraction Decomposition Study Guide (how setup)_, 9-2020, US, [link](https://www.youtube.com/watch?v=DfTJOsqxIJ4).

%%