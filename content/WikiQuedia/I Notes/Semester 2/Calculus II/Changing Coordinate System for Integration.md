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

Polar coordinates are useful for working with circular objects in __2 dimensions__. <br>A [domain](Domain) in polar coordinates is often denoted with $R$.<br>Converting coordinates directly from cartesian to polar is done by applying the equations above. Do notice that when converting a term of $r$ is added to the expression. [Integrals](Multiple%20Integration) for polar coordinates, then, are always of the form
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
For the region $R$, pictured below, whose radius runs from $r = 0$ to the function $r = f(\phi)$, and whose angle has a range $\phi = [a, b]$, we may obtain the following [integral](Multiple%20Integration) to solve for the area
$$
A_R = \iint_R dA= \iint_R rdrd\phi = \int_{a}^{b} \int_{0}^{r = f(\phi)} rdrd\phi
$$
Notice that, as the function is bound by the function $r = f(\theta)$ and the origin, we may also write a [single integral](Integration) over $f(\phi)$. <br>The thing we have to keep in mind here, is that, unlike with cartesian coordinates, the first step of the double integral always integrates $r$. So we can't eliminate the first integral by integrating over $f(\phi)$ only like we would in cartesian coordinates. Instead, resulting from integrating $r$ and evaluating the upper bound to be the function $r = f(\phi)$, we obtain the following single integral
$$
A_R = \frac{1}{2}\int_{a}^{b} [f(\phi)]^2 d\phi
$$
Because single integrals are unintuitive like this, it is always preferred to use double integrals to obtain areas for polar coordinates.
<br>![[Polar_coordinates_integration_region_80%.png|450]]<br>By Jitse Niesen - Own work, created using Inkscape, Public Domain, [link](https://commons.wikimedia.org/w/index.php?curid=1680425)<br><br>When a region that is most easily expressed in polar coordinates has a [domain](Domain) that has a bound of a function that is not circular-adjacent, $f(x) = x^3$ for example, it is usually still easiest to compute the area by using polar coordinates. To do this, it is necessary to convert this function $f(x)$ to polar coordinates first, however. In this case we would have a limit for the domain as follows
$$
f(x) = x^3 \rightarrow f(r, \theta) = \left( r\cos(\theta) \right) ^3 = r^3 \cos^3 (\theta)
$$
### Changing Variables
An easy way to quickly change the coordinate system is to use the method of _[changing variables](Changing%20Variables%20for%20Integration)_. The expression of using this technique to switch to polar coordinates is
$$
\iint_{D} f_1(x, y) dA = \iint_{R} f_2(r, \theta) \cdot |J(r, \theta)| dA = \iint_{R} f_2(r, \theta) \cdot \begin{vmatrix} D_r[x] & D_{\theta}[x] \\ D_r[y] & D_{\theta} [y] \end{vmatrix} rdrd\theta
$$

## Integration in [[Cylindrical Coordinates]]
Cylindrical coordinates are a continuation of [polar coordinates](Polar%20Coordinates) to 3 dimensional space. The third dimension is the $z$-axis, similar to cartesian coordinates.
> [!example] Starting Equations
>1. $x = r \cdot \cos(\theta)$
> 2. $y = r \cdot \sin(\theta)$
> 3. $z = z$
> 4. $r^2 = x^2 + y^2$
> 5. $dV = r dr d\theta dz$

Integration in cylindrical coordinates works the same as [integration in polar coordinates](#Integration%20in%20Polar%20Coordinates), only the $z$-axis is added to add height to the system, making it 3D instead of 2D. <br>_Cylindrical coordinates_ define a point in space as:
1. A radial distance ($r$) from the origin.
2. An angle ($\theta$ or $\phi$) with the _polar axis_, a line, typically drawn to point __to the right__ of the origin.
3. A height ($z$) above the origin. This is equivalent to the $z$-axis in cartesian coordinates.

Because the base uses polar coordinates, we construct a volume element as the height ($z$) times the area element from polar coordiantes, creating
$$
dV = rdrd\theta dz
$$
This volume element is a part of the circle that the base creates, that extends out along the $z$-axis to create a volume. <br>Converting coordinates directly from cartesian to cylindrical is done by applying the equations above. [Integrals](Multiple%20Integration) for cylindrical coordinates, then, are always of the form
$$
\iiint_D f(x, y, z) dzdydx = \iiint_D f(x, y, z) dV = \iiint_R f(r, \theta, z) rdr d\theta dz
$$

### Changing Variables
An easy way to quickly change the coordinate system is to use the method of _[changing variables](Changing%20Variables%20for%20Integration)_. The expression of using this technique to switch to cylindrical coordinates is
$$
\iint_{D} f_1(x, y, z) dV = \iint_{R} f_2(r, \theta, z) \cdot |J(r, \theta, z)| dA = \iint_{R} f_2(r, \theta, z) \cdot \begin{vmatrix} D_{r}[x] & D_{\theta}[x] & D_z[x] \\ D_{r}[y] & D_{\theta} [y] & D_z[y] \\ D_{r} [z] & D_{\theta} [z] & D_{z} [z] \end{vmatrix} rdrd\theta dz
$$

## Integration in [[Spherical Coordinates]]
Spherical coordinates are a variation of [cylindrical coordinates](Cylindrical%20Coordinates), where the $z$-axis is replaced by another angle to define the volume. This allows for quick evaluation of spherical objects.
> [!example] Starting Equations
>1. $x = r \sin(\phi) \cdot \cos(\theta)$
> 2. $y = r \cdot \sin(\phi) \cdot \sin(\theta)$
> 3. $z = r \cos(\phi)$
> 4. $r^2 = x^2 + y^2 + z^2$
> 5. $dV = r^2 \sin(\phi) dr d\theta dz$

_Spherical coordinates_ define a point in space as:
1. A radial distance ($r$) from the origin (also known as the pole).
2. An angle ($\theta$) with the _polar axis_, a line, typically drawn to point __upward__ from the pole.
3. An angle ($\phi$) around the _polar axis_.
![[Kugelkoord_funnsyphereSphericalCoordinatesSwitchedAngles_80%.png|450]]<br>By Ag2gaeh - Own work, CC BY-SA 4.0, [link](https://commons.wikimedia.org/w/index.php?curid=134565435)

> [!note] $\theta$ and $\phi$ are switched with the [definition on Wikipedia](https://en.wikipedia.org/wiki/Spherical_coordinate_system).

Just like with [cylindrical coordinates](Cylindrical%20Coordinates), the base uses [polar coordinates](Polar%20Coordinates). <br>Unlike [cylindrical integration](#Integration%20in%20Cylindrical%20Coordinates), volume elements don't point along the $z$-axis, up from the base. Instead, they are small parts of the whole sphere, directed along $r$. This means that the volume element is harder to construct. We construct it by finding the surface elements for constant angles, one for a constant $\theta$, and one for a constant $\phi$. We combine the surfaces of these elements to find a volume element.
- For some constant angle $\phi$, surface elements are surface elements on the base, just rotated slightly, this has no influence on the surface element however. They thus have the same expression as area elements from [integration in polar coordinates](#Integration%20in%20Polar%20Coordinates), that is
$$
dA_{\phi} = r drd\theta
$$
- For some constant angle $\theta$, a surface elements are the distance between the polar axis and the angle $\theta$, which is $\sin(\theta)$. This distance changes based on $r$, and thus the expression of the area is
$$
dA_{\theta} = r \sin(\phi) d\phi dr
$$
If we combine these area elements we arrive at an expression for the volume element we want to obtain.
$$
dV = r^2 \sin(\phi) dr d\theta d\phi
$$
Converting coordinates directly from cartesian to spherical is done by applying the equations above. [Integrals](Multiple%20Integration) for spherical coordinates, then, are always of the form
$$
\iiint_D f(x, y, z) dzdydx = \iiint_D f(x, y, z) dV = \iiint_R f(r, \theta, z) rdr d\theta dz
$$

### Changing Variables
An easy way to quickly change the coordinate system is to use the method of _[changing variables](Changing%20Variables%20for%20Integration)_. The expression of using this technique to switch to spherical coordinates is
$$
\iint_{D} f_1(x, y, z) dV = \iint_{R} f_2(r, \theta, \phi) \cdot |J(r, \theta, \phi)| dA = \iint_{R} f_2(r, \theta, \phi) \cdot \begin{vmatrix} D_{r}[x] & D_{\theta}[x] & D_{\phi}[x] \\ D_{r}[y] & D_{\theta} [y] & D_{\phi}[y] \\ D_{r} [z] & D_{\theta} [z] & D_{\phi} [z] \end{vmatrix} rdrd\theta dz
$$








---
__[Home](!%20Calculus%20II%20Learning%20Overview)__

---
_Status:_ #ripe

---
# References:

1. R. A. Adams, Christopher Essex, _Calculus A Complete Course_, 9th ed.
2. Wikipedia, _Polar coordinates_, [link](https://en.wikipedia.org/wiki/Polar_coordinate_system).
