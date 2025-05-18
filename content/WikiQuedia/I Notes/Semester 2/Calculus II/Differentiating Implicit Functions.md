---
title: "Differentiating Implicit Functions"
draft: false
---
Tags: [[differentials]]   <br>13-05-2025

---
# Differentiating Implicit Functions
See [implicit functions](Implicit%20Functions) for an explanation on what an implicit function is.
### Definition
When differentiating an [implicit function](Implicit%20Functions), the operation involves taking [partial derivatives](Partial%20Differentiation) and applying the [chain rule](Partial%20Differentiation#Differentiating%20Variables%20as%20Functions). <br>When taking the partial derivative $D_x [z]$ of a function $f(x, y, z) = c$, you differentiate all terms with respect to $x$ while realizing that $z$ is a function, this means applying the chain rule. Because $z$ is a part of the function itself however, you always get a $D_x [z]$ term in the differentiated function. To obtain the solution to $D_x [z]$ you simply isolate it from this expression. <br>Alternatively, we can use the _Implicit Function Theorem_, which states for a function $f(x, y, z)$, where we want to differentiate $z$ with respect to $x$:[^wIFT]
$$
D_x [z] = \frac{\partial z}{\partial x} = - \frac{D_x [f]}{D_z [f]} = - \frac{f_x}{f_z}
$$
This equation is derived from computing $D_x [z]$ using the [chain rule](Partial%20Differentiation#Differentiating%20Variables%20as%20Functions). Using the chain rule is just as convenient, while at the same time being more intuitive.
#### Example Using Chain Rule.
___Task___: Find $D_x [z]$ of the implicit function $f(x, y, z) = x^2 + y^4 - z^3 + 3xy^2 = 8$[^excred]. <br><br>___Solution:___
###### Finding $D_x [f]$
To find the [partial derivative](Partial%20Differentiation) with respect to $x$, differentiate the whole function with respect to $x$, while keeping in mind that $z$ is a function. Thus, the derivative of $z \ne 0$, but instead the derivative becomes $D_x [z]$, because we're differentiating $z$ [as a function](Partial%20Differentiation#Differentiating%20Variables%20as%20Functions) and not a variable.
$$
f(x, y, z) = x^2 + y^4 - z^3 + 3xy^2 = 8
$$
$$
D_x [f] = 2x + 0 - 3z^2 \cdot D_x [z] + 3y^2 = 0
$$
Here 8 and our $y$ became 0, this is because we both treat and thus [differentiate](Differentiation.md) them as constants. <br>Also notice that $D_x [z]$ already appeared in the expression. This will always happen for all implicit formulas when differentiating the function, it's not specific to this equation. <br>From here we will try to isolate $D_x [z]$ from the equation, as that is the character we want to know.
$$
-3z^2 \cdot D_x [z] = - 2x - 3y^2
$$
$$
D_x [z] = \frac{- 2x - 3y^2}{- 3z^2} = \frac{2x + 3y^2}{3z^2}
$$

(Could also be obtained immediately if we had shifted $-3z^2 D_x [z]$ to the right instead of $2x + 3y$.)<br><br>
Thus the partial derivative of $z$ with respect to $x$ is:
$$
D_x [z] = \frac{2x + 3y^2}{3z^2}
$$










---
__[Home](!%20Calculus%20II%20Learning%20Overview)__

---
_Status:_ #ripe

---
# References:
[^wIFT]: [Wikipedia - Implicit function](https://en.wikipedia.org/wiki/Implicit_function#General_formula_for_derivative_of_implicit_function)
[^excred]: Example taken from [The Organic Chemistry Tutor - Implicit Differentiation With Partial Derivatives Using The Implicit Function Theorem | Calculus 3](https://www.youtube.com/watch?v=OBELQIPH5xY).
1. R. A. Adams, Christopher Essex, _Calculus A Complete Course_, 9th ed.
2. Openstax, _Calculus Volume 1_, [link](https://openstax.org/details/books/calculus-volume-1).
3. Openstax, _Calculus Volume 2_, [link](https://openstax.org/details/books/calculus-volume-2).
4. Openstax, _Calculus Volume 3_, [link](https://openstax.org/details/books/calculus-volume-3).
5. Wikipedia, _Implicit function_, [link](https://en.wikipedia.org/wiki/Implicit_function).
6. The Organic Chemistry Tutor, _Implicit Differentiation With Partial Derivatives Using The Implicit Function Theorem | Calculus 3_, [link](https://www.youtube.com/watch?v=OBELQIPH5xY).
7. 3Blue1Brown, _Implicit differentiation, what's going on here? | Chapter 6, Essence of calculus_ [link](https://www.youtube.com/watch?v=qb40J4N1fa4).
