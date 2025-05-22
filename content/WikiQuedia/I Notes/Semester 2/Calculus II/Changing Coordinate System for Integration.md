---
title: "Changing Coordinate System for Integration"
draft: false
---
Tags: [[calculus]], [[Integration]], [[intervals]]   <br>20-05-2025

---
# Changing Coordinate System for [Integration](Multiple%20Integration)
---
These are the alternate coordinate systems that are discussed, in order to make integration of circular-esque objects easier.
1. [[Polar Coordinates]]
2. [[Cylindrical Coordinates]]
3. [[Spherical Coordinates]]
---
## Integration in [[Polar Coordinates]]
> [!example] Starting Equations
>1. $x = r \cdot \cos(\theta)$
> 2. $y = r \cdot \sin(\theta)$
> 3. $r^2 = x^2 + y^2$
> 4. $\frac{y}{x} = \tan(\theta)$
> 5. $dA = rdrd\theta$

### Geometry
_Polar coordinates_ define a point in space as:
1. A radial distance ($r$) from the origin (also known as the pole).
2. An angle ($\theta$ or $\phi$) with the _polar axis_, a line, typically drawn to point __to the right__ of the pole.

Polar coordinates are useful for working with circular objects in __2 dimensions__. <br>A [domain](Domain) in polar coordinates is often denoted with $R$.<br>Converting coordinates directly from cartesian to polar is done by applying the equations above. Do notice that when converting a term of $r$ is added to the expression. [Integrals](Multiple%20Integration) for polar coordinates, then, are always of the form:
$$
\iint_D f(x, y) dydx = \iint_D = f(x, y) dA = \iint_R f(r, \theta) r drd\theta
$$
The reason for this is that area elements on circles work slightly different from rectangles. An part of the area for a circle is given by the difference in radius, multiplied by a fraction of the circumference. This fraction of the circumference is a function of both $\theta$ and $r$ however, and this is where the extra $r$ comes from.
$$
\Delta A_{\text{rectangle}} = \Delta x \cdot \Delta y \xRightarrow{\text{infinitesimal}} dA = dxdy
$$
$$
\Delta A_{\text{circle}} = \Delta r \cdot r \Delta \theta = r \Delta r \Delta \theta \xRightarrow{\text{infinitesimal}} dA = rdrd\theta
$$
Converting $dA$ like this is always necessary when constructing an expression for an area in polar coordinates. The reason for this is that every double integral starts with $\iint_R dA$, meaning that to find the area in polar coordinates we always substitute for $dA$, thus we always end up with an expression $\iint_R rdrd\theta$. <br>The upper and lower bounds of the domain for $\theta$ are also slightly different from cartesian coordinates. As you know, a whole revolution on a circle has an angle in radians of $2\pi$. Therefore the standard domain of $\theta$, unless otherwise specified, has a [range](Range) $[0, 2\pi]$. 
### Definition
For the region $R$, pictured below, whose radius runs from $r = 0$ to the function $r = f(\phi)$, and whose angle has a range $\phi = [a, b]$, we may obtain the following [integral](Multiple%20Integration) to solve for the area:
$$
A_R = \iint_R dA= \iint_R rdrd\phi = \int_{a}^{b} \int_{0}^{r = f(\phi)} rdrd\phi
$$
Notice that, as the function is bound by the function $r = f(\theta)$ and the origin, we may also write a [single integral](Integration) over $f(\phi)$. <br>The thing we have to keep in mind here, is that, unlike with cartesian coordinates, the first step of the double integral always integrates $r$. So we can't eliminate the first integral by integrating over $f(\phi)$ only like we would in cartesian coordinates. Instead, resulting from integrating $r$ and evaluating the upper bound to be the function $r = f(\phi)$, we obtain the following single integral:
$$
A_R = \frac{1}{2}\int_{a}^{b} [f(\phi)]^2 d\phi
$$
Because single integrals are unintuitive like this, it is always preferred to use double integrals to obtain areas for polar coordinates.
<br>![[Polar_coordinates_integration_region_80%.png|450]]<br>By Jitse Niesen - Own work, created using Inkscape, Public Domain, [link](https://commons.wikimedia.org/w/index.php?curid=1680425)<br><br>When a region that is most easily expressed in polar coordinates has a [domain](Domain) that has a bound of a function that is not circular-adjacent, $f(x) = x^3$ for example, it is usually still easiest to compute the area by using polar coordinates. To do this, it is necessary to convert this function $f(x)$ to polar coordinates first, however. In this case we would have a limit for the domain as follows:
$$
f(x) = x^3 \rightarrow f(r, \theta) = \left( r\cos(\theta) \right) ^3 = r^3 \cos^3 (\theta)
$$
### Changing Variables
An easy way to quickly change the coordinate system is to use the method of _[changing variables](Changing%20Variables%20for%20Integration)_. The expression of using this technique to switch to polar coordinates is as follows:
$$
\iint_{D} f_1(x, y) dA = \iint_{R} f_2(r, \theta) \cdot |J(r, \theta)| dA = \iint_{R} f_2(r, \theta) \cdot \begin{vmatrix} D_r[x] & D_{\theta}[x] \\ D_r[y] & D_{\theta} [y] \end{vmatrix} rdrd\theta
$$

## Integration in [[Cylindrical Coordinates]]
Cylindrical coordinates are a continuation of polar coordinates to 3 dimensional space. The third dimension is the $z$-axis, similar to cartesian coordinates.











---
__[Home](!%20Calculus%20II%20Learning%20Overview)__

---
_Status:_ #sprout

---
# References:

1. R. A. Adams, Christopher Essex, _Calculus A Complete Course_, 9th ed.
2. Wikipedia, _Polar coordinates_, [link](https://en.wikipedia.org/wiki/Polar_coordinate_system).
