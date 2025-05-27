---
title: "Improper Integrals"
draft: false
---
Tags: [[calculus]], [[integrals]], [[limits]], [[intervals]]   <br>20-05-2025

---
# Improper Integrals
### Definition
Improper [integrals](Integration) are integrals that have a specified [domain](Domain), but a domain with [limits](Calculating%20Limits) that approach infinity. <br>Because these limits approach infinity, there is a chance the integral approaches infinity as well, though this doesn't have to be the case, the integral may also converge. <br>To calculate these integrals, temporarily substitute the infinite limit with a variable, and after having computed the integral, substitute back and evaluate the resulting limit.
$$
\int_a ^{\infty} f(x)dx \Rightarrow \lim_{r \rightarrow \infty} \int_a ^{r} f(x)dx = \lim_{r \rightarrow \infty} F(x) \bigg|_a ^{r} = \lim_{r \rightarrow \infty} F(r) - F(a)
$$
The math works out the same as evaluating normally, but a limit is introduced to evaluate the infinite value. Therefore this works for a domain with infinite limits on both sides or as a lower limit too.




---
This is briefly discussed in the note [Integration](Integration#Definition), chapter _Definition_.




---
__[Home](!%20Calculus%20II%20Learning%20Overview)__

---
_Status:_ #ripe

---
# References:

1. R. A. Adams, Christopher Essex, _Calculus A Complete Course_, 9th ed.