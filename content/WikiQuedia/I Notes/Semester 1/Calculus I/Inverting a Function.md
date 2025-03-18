---
title: How to Invert a Function
draft: false
---
Tags: [[calculus]], [[algebra]] <br>26-01-2025

---
# Inverting a Function
### Definition
A normal function expressed in terms of $x$ or potentially other variables is $f(x)$. Usually we define $y=f(x)=ax^3$ or some other form instead of $ax^3$. Now when we want to define the function _not in terms of $x$_ but instead _in terms of $y$_ we isolate $x$ from the function and write $x=f^{-1}(y)=\sqrt[3]{\frac{y}{a}}$. This is the same as writing $x=f(y)=\sqrt[3]{\frac{y}{a}}$, but the $f^{-1}$ signals that the function has been _inversed_.
- ___$f^{-1}$ is called the inverse of $f$___.

Generally when asked to calculate the inverse of a function the question actually means: _calculate the inverse of $f(x)$ in terms of $x$_, which means calculating the inverse but _also_ swapping coordinates.
- __In this example:__
	1. $f(x)=y=ax^{3}\to x=ay^{3}$ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (<- Swapping coordinates)
	2. $f^{-1}\left(x\right)=\sqrt[3]{\frac{x}{a}}$ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (<- actually calculating the inverse)

### Existance
When calculating the inverse it's important to look at whether the graph that's being inverted is actually invertible. When inverting the function geometrically what you're doing is rotating the function by $90\textdegree$ to the right or mirroring through the line $y=x$. Therefore when a function crosses a horizontal line the inverse cannot exist. For example $y=x^2$ can't exist, that's why when taking a root the result is always $\pm\sqrt{}$.  
- ___Existance:___ To check whether an inverse exists is therefore to check whether a solution $y=a$ has more than one solution[^inverse_wiki]. Yes? then it's not invertible. [Per definition](Differentiation%20and%20Techniques.md#First%20Derivative), when a function has an extreme value a horizontal line _must_ cross the function at least once. Thus check whether a function is invertible by taking its derivative and finding it's roots[^root].







---
__[Home](!%20Learning%20Overview%20(Calculus%20I).md)__

---
_Status:_ #ripe

---
# References:
[^inverse_wiki]: [Wikipedia - Inverse function theorem](https://en.wikipedia.org/wiki/Inverse_function_theorem)
[^root]: A root of a function is the solution of a function where it is equal to $0$. Finding the roots of $f(x)$ means finding wehre $f(x)=0$.
1. Robert A. Adams, Christopher Essex, _Calculus A Complete Course_, 9th ed.