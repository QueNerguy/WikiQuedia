---
title: "Lagrange Multipliers"
draft: false
---
Tags: [[calculus]], [[vector math]], [[differentials]], [[intervals]] <br>14-05-2025

---
# Lagrange Multipliers
Lagrange multipliers offer a different way to solve constraint problems[^note]. They are useful especially when there are too many _unknown_ variables to solve for to use subtitution methods.
### Geometric Interpretation
When evaluating the extreme values of a function, under the domain constrained by a different function we find two types of extreme values.
1. Extreme values inside the domain.
2. Extreme values on the edge of the domain.

When a level curve is drawn on the original function at a maximum or minimum, it touches the original function and travels in the same direction. Mathematically this is evident because the expression that draws only the boundary would also have a maximum here. This means it has a derivative of 0, and per definition, so does a level curve. Alternatively, find a great visual explanation [here](https://youtu.be/8mjcnxGMwFo?feature=shared&t=201). <br>Because the function and the domain share the same [tangent line](Tangents%20in%20Higher%20Dimensions%20-%203D) at the maximum/minimum, they also share the same normal line. This normal line can be constructed with the [gradient](Gradient). The only difference in the gradient would be the size, meaning how much they change in a direction at that point, which makes sense as these are two different graphs. The direction of increase stays the same however and this is what allows us to use the gradient to create a system of equations.
### Definition
The lagrange multiplier offers a system of equations to solve for the maximum value a function reaches. It does this by realizing the gradients of the function and the [domain](Domain) have the same direction, though not the same size. This allows us to construct an equality, namely, for a function $f$ constrained on a domain given by $g$ we have
$$
\nabla f = \lambda \cdot \nabla g
$$
Where the $\lambda$ corrects for the difference in size of these vectors. $\rightarrow$ If $f$ increased twice as much on it's maximum as $g$ did, $\lambda$ would be 2. <br>For 3D spaces this equation gives 3 new equations which can be used to solve for the _unknowns_. There is, however, one new _unknown_, in $\lambda$. Depending on the dimension of the gradient there can be more or less equations, every dimension has their own equation.
$$
x_f = \lambda \cdot x_g
$$
$$
y_f = \lambda \cdot y_g
$$
$$
z_f = \lambda \cdot z_g
$$
The only reason we would choose to use the lagrange multiplier instead of solving by substituting, is because we have too many variables that we don't know a value of. If we have 2, we could substitute the first, and solve for the second, but if we have 3 or more we need to find extra equation to obtain the values for these _unknowns_ for.


%%==TODO: [[WikiQuedia - incl original files/III Tags/maths related/interval syntax]] hernoemen naar intervals==%%


---
__[Home](!%20Calculus%20II%20Learning%20Overview)__

---
_Status:_ #ripe

---
# References:
[^note]: For an explanation on constraints see the note [[Domain]].<br>For a review of a different way to solve constraint problems, see the note [[Finding Extreme Values]], specifically the chapter [Finding the Extreme Values on Restricted Domains](Finding%20Extreme%20Values#Finding%20the%20Extreme%20Values%20on%20Restricted%20Domains).
1. R. A. Adams, Christopher Essex, _Calculus A Complete Course_, 9th ed.
2. Wikipedia, _Lagrange multiplier_, [link](https://en.wikipedia.org/wiki/Lagrange_multiplier).
3. Dr. Trefor Bazett, _Lagrange Multipliers | Geometric Meaning & Full Example_, [link](https://www.youtube.com/watch?v=8mjcnxGMwFo).