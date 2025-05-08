---
title: Summation Background
draft: false
---
Tags: [[calculus]], [[sums]] <br>26-01-2025

---
# Summation -  Background
### Explanation of the Concept
Sums ($\sum$) are a way of iterating over formulas multiple times. With every iteration the solution of what's inclosed in the sum gets added to the next one. For example $\sum^{n}_{n = 1} 1$ gives $1+1+1+...+1$. The iterating starts at $n$ = 1, until the end, $n$, is reached. $n$ can assume any [natural number](https://en.wikipedia.org/wiki/Natural_number) / "_whole value_", that is 1, 2, 3 etc. In the case of $\sum^{n}_{n = 1} 1$ we add 1, $n$ times. <br>If we choose $n$ to be 4 for example, we get:
$$
\sum^{n = 4}_{n = 1} 1=1+1+1+1=4
$$
If we started iterating at $n$ = 0, instead of 1, we would add 5 times.
- Concretely: $n$ = 0, $n$ = 1, $n$ = 2, $n$ = 3, $n$ = 4 $\rightarrow$ 5 times in total.

Sums really become useful when using the iterating values in the sum, like this: $\sum^{n}_{n = 1} n$. In this case if we chose $n$ to be 4 we would get:
$$
\sum^{n = 4}_{n = 1} n = 1 + 2 + 3 + 4 = 10
$$

### Uses of Sums
Sums are a great tool for evaluating repetitive and connected series. They are of great importance for evaluating areas and are used in [integrals](integration%20and%20techniques), for example. <br>In this case the area below the graph is approached by drawing rectangles below it, and adding their area up to approximate the area below the graph. The slimmer the bars get the more accurate the approximation. When the bars reach a thickness that approaches 0, the error with the approximation also approaches 0. 
##### Example of a Use Case
Another use case might be adding the area of the squares shown below.
![[squareHalvingAssignment_80%.png|450]]<br>In this case you would relate the size of the first square to the second, and so on, while making sure the equation scales correctly with every iteration.
###### Solution:
Here we wouldassume the first triangle to have area $1$x$1$, the second $\frac{1}{\sqrt2}$x$\frac{1}{\sqrt2}$, the third $\frac{1}{2}$x$\frac{1}{2}$. <br>Seeing that $1$ is the same as $\frac{1}{\sqrt2 ^{0}}=\frac{1}{1}$ and that $\frac{1}{2}$ is the same as $\frac{1}{\sqrt 2 ^2}$ we see a pattern emerge: <br>$\sqrt 2 ^0$, $\sqrt 2 ^1$, $\sqrt 2 ^2$. <br>The area of a square is the square of it's sides, the resulting sum we construct would then be:
$$
\sum ^{n} _{n = 0} \left( \frac{1}{\sqrt2 ^{n}} \right) ^2=\sum ^{n} _{n = 0} \left( \frac{1}{2} \right) ^n
$$

##### Shifting the Summation Index
In some cases, like $\sum^{12}_{n = 1} 3^{n - 1}$, it is annoying to [evaluate](evaluating%20infinite%20series) with the - 1 still being in the power. In this case it is helpful to change the beginning and end point of the summation, in order to remove the - 1 from the power. This is done by substitution. We would substitute $n-1$ with $m$, $m = n - 1$. This _shifts_ the index, where it would originally go from 1 to 12 with $n$, with $m$ it goes from 0 to 11. The resulting sum is: $\sum^{11}_{m = 0} 3^{m}$, which is way easier to evaluate.












---
__[Home]()__ %%==NEEDS HOMEPAGE still==%%

---
_Status:_ #bud #missingLink

---
# References:
1. R. A. Adams, Christopher Essex, _Calculus A Complete Course_, 9th ed.