---
title: Calculating Limits
draft: false
---
Tags: [[calculus]], [[limits]], [[interval syntax]] <br>26-01-2025

---
# Calculating Limits
### Definition
Limits  __$\lim_{x\to a} f(x)$__  are a way of examining what the value of $f(x)$ at point $x=a$ is.
These are used to find the $y$-value of functions at places where there is a perforation or an asymptote. For example the formula $y=\frac{1}{x-1}$ can't exist when $x=1$ because it would be dividing by $0$. Therefore a limit is used to _approximate_ the value of $y$ at point $x=1$.
##### Technicalities on Existance
- The way a limit is defined it can't exist if the $y$-value when approached from the left, $\lim_{x\to a-}$, doesn't equal the  $y$-value when approached from the right, $\lim_{x\to a+}$. Therefore $y=\frac{1}{x}$ has no limit as it's left asymptote approaches $-\infty$ and it's right asymptote approaches $\infty$.
- When calculating limits that have a sudden jump in value like $y=\frac{x}{|x|}$ then the limit can't be calculated at the end points either, but the left and right limit can.
- When the left limit can be calculated the function is called '_left continuuous_', and when the right limit can be calculated the function is called '_right continuous_'.

### Types
Theres a few different results one can get when calculating a limit.
1. __Coordinates:__ When the limit is calculated for a perforation just a $y$-value comes out of the limit, giving you the coordinates of the missing point in the function.
2. __Asymptotes:__ When the limit is calculated for a line that is approached, but never reached, as $x$ goes to $\pm\infty$ then this line is called an asymptote and the result takes the form of $\lim_{x\to\pm\infty}f\left(x\right)=ax+b$ (which forms a straight line).
> [!note] Keep in mind
> ___a.___ When the limit at a point $\lim_{x\to a}$ is calculated the result is almost always either __1:__ coordinates to a perforation, or __2:__ the coordinates of a vertical asymptote (a line $x=a$)
> ___b.___ When the limit $\lim_{x\to\pm\infty}$ is calculated the result is almost always either __1:__ the y value of a horizontal asymptote, or __2:__ the function of a line that is the asymptote.

### Calculating Techniques
When calculating a limit there are a few tricks that are applied.
1. __Dividing by $\infty$:__ Because dividing by a large number means the result goes to $0$, dividing any number by $\infty$ makes the original number $0$.
	- Therefore when calculating $\lim_{x\to\pm\infty}\frac{x}{x+1}$ we divide by the highest power in the denominator, in this case $x^1$, which yields: $\lim_{x\to\pm\infty}\frac{\frac{x}{x}}{\frac{x}{x}+\frac{1}{x}}=\frac{1}{1+0}=1$. This means that the result is a horizontal asymptote $y=1$.<br>
> [!tip] Note
> If the numerator had had a higher power, the result woud've been $x$ instead of $1$, meaning a non horizontal line as an asymptote.

2. __Factoring:__ If dividing by $\infty$ is inappropriate or not possible it is best to try to factor the denominator and numerator. The goal is to simplify the expression so that the fraction disappears, or at least changing the location of the perforation, so that it is possible to plug in the limit value directly and get a result. [This](Factoring%20and%20Fraction%20Decomposition.md) note goes more in depth on Factoring.
	- This is used most often when $x$ doesn't go to $\infty$ but instead approaches a value $a$.

### Edge cases
#### Priority
It might sometimes occur that the result of taking a limit has $\infty\cdot e^{-\infty}$, what, in this case would be the result? The rules of importance of magnitude are as follows:
$$
a^{\infty}\gg\infty^{a}\gg\log_{a}\left(\infty\right)
$$
Therefore, in the previous example, the solution would prioritize the $e^{-\infty}$, whose result is $0$, making the result of this expression also $0$, and not $\infty$.











---
__[Home](!%20Learning%20Overview%20(Calculus%20I).md)__

---
_Status:_ #ripe

---
# References:
1. R. A. Adams, Christopher Essex, _Calculus A Complete Course_, 9th ed.