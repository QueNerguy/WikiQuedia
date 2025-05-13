---
title: "Differentiating Implicit Functions"
draft: false
---
Tags:    <br>13-05-2025

---
# Differentiating Implicit Functions
See [implicit functions](implicit%20functions) for an explanation on what an implicit function is.
### Definition
When differentiating an [implicit function](implicit%20functions) the operation involves taking [partial derivatives](partial%20differentiation) and applying the [chain rule](partial%20differentiation#Differentiating%20variables%20as%20functions). After computing the derivative in the wanted direction, isolate the wanted partial derivative to obtain a solution. <br>Alternatively, we can use the _Implicit Function Theorem_, which states for a function $f(x, y, z)$, where we want to differentiate $z$ with respect to $x$:[^wIFT]
$$
D_x [z] = \frac{\partial z}{\partial x} = - \frac{D_x [f]}{D_z [f]} = - \frac{f_x}{f_z}
$$
This equation is derived from computing $D_x [z]$ using the [chain rule](partial%20differentiation#Differentiating%20variables%20as%20functions). Using the chain rule is just as convenient, while at the same time being more intuitive.
#### Example Using Chain Rule.
___Task___: Find $D_x [z]$ of the implicit function $f(x, y, z) = x^2 + y^4 - z^3 + 3xy^2 = 8$[^excred]. <br><br>___Solution:___
###### Finding $D_x [f]$
To find the [partial derivative](partial%20differentiation) with respect to $x$, differentiate the whole function with respect to $x$, while keeping in mind that $z$ is a function. Thus, the derivative of $z \ne 0$, but instead the derivative becomes $D_x [z]$, because we're differentiating $z$ [as a function](partial%20differentiation#Differentiating%20variables%20as%20functions) and not a variable.
$$
f(x, y, z) = x^2 + y^4 - z^3 + 3xy^2 = 8
$$
$$
D_x [f] = 2x + 0 - 3z^2 \cdot D_x [z] + 3y^2 = 0
$$
Here 8 and our $y$ became 0, this is because we both treat and thus [differentiate](Differentiation%20and%20Techniques) them as constants. <br>Also notice that $D_x [z]$ already appeared in the expression. This will always happen for all implicit formulas when differentiating the function, it's not specific to this equation. <br>From here we will try to isolate $D_x [z]$ from the equation, as that is the character we want to know.
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
_Status:_ #sprout

---
# References:
[^wIFT]: [Wikipedia - Implicit function](https://en.wikipedia.org/wiki/Implicit_function#General_formula_for_derivative_of_implicit_function)
[^excred]: Example taken from [The Organic Chemistry Tutor - Implicit Differentiation With Partial Derivatives Using The Implicit Function Theorem | Calculus 3](https://www.youtube.com/watch?v=OBELQIPH5xY).
1. R. A. Adams, Christopher Essex, _Calculus A Complete Course_, 9th ed.
2. Wikipedia, _Implicit function_, [link](https://en.wikipedia.org/wiki/Implicit_function).
3. The Organic Chemistry Tutor, _Implicit Differentiation With Partial Derivatives Using The Implicit Function Theorem | Calculus 3_, [link](https://www.youtube.com/watch?v=OBELQIPH5xY).
4. 3Blue1Brown, _Implicit differentiation, what's going on here? | Chapter 6, Essence of calculus_ [link](https://www.youtube.com/watch?v=qb40J4N1fa4).
