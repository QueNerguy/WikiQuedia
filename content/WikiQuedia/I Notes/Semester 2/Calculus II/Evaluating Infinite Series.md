---
title: Evaluating Infinite Series
draft: false
---
Tags: [[calculus]], [[sums]]<br>03-05-2025

---
# Evaluating Infinite Series
See [this note](summation%20-%20background) for an explanation of sum notation, intuition behind sums and changing index base.
### Evaluability
A [sum](Summation%20-%20Background.md) that has an infinite amount of steps ($\sum ^{\infty} _{n = 1}$) can often still be evaluated, as long as it __converges__ to a certain value. Geometrically, the value of the sum at a certain step is represented on the $y$-axis, and the step number is represented on the $x$-axis. Convergence means that as the _number of steps_ increases, the _amount of increase per step_ goes to zero, creating a horizontal asymptote - at an infinite $x$-coordinate there is no $y$-variance with an increase in $x$ anymore, creating a plateau. 
#### Determining Convergence
For a series to converge, the steps the summation takes at a high indeces have to become extremely small, in order to create an asymptote. 
##### Convergence Test
Determining whether a series is convergent can be done in two ways:
1. Taking a ___limit___ as the index goes to infinity ($\lim_{n \rightarrow \infty}$). <br>Taking this limit gives you the step the $n$th sum takes, if this step is zero it means the function has a horizontal asymptote. Thus: <br>$\lim_{n \rightarrow \infty} = 0$ means the series concerges.,
2. Looking at the ___notation___ of the summated function. If the steps at high index values become zero, it means the series converges. <br>This is analogous to taking the limit, but it omits the calculating steps. <br>When presented with a function in the form of $\sum ^{\infty} _{n = 1} a \cdot r^n$ we can see that the change per step becomes very small if:
	1. $r$ is smaller than 1 ($\rightarrow 0.001^{999} \approx 0$), or more exactly: between 1 and -1.
	2. $n$ has a negative power ($\rightarrow 10^{-999} \approx 0$).
	- There is more ways in which a series can become convergent which can be seen directly from the formula, but for this general case these two are the only significant ones.
### Evaluating a Geometric Series Summation
While there are multiple different series that all have their own way to solve them (see [this page](https://web.math.ucsb.edu/~cmart07/Evaluating%20Series.pdf) for examples), the geometric series is the only one i'll go into detail about here. <br><br>Before evaluating it is imperative to first determine wether the summation converges at all, if it doesn't, the summation can't be evaluated. 
#### Single Variable Case
In the case the summation only depends on a single variable, namely the index $n$, the expression of the sum has to be rewritten in the form:
$$
\sum^{n}_{n=0} c \cdot r^{n}= c \cdot \sum^{n}_{n=0} r^{n}=s_{n}
$$
The solution ($s_n$) of this sum then is:
$$
s_{n} = \frac{c}{1-r}
$$
#### Multivariable Case
Some summations depend on multiple variables, for example the index $n$, and $x$. You can imagine such an expression as a 3D plot, with the height being the value of the summation and the floor spanned by $x$ and index $n$. With every iteration the sum moves 1 $n$ over, tracing a line through space. When $x$ is unknown however, a surface is created out of all the possible lines. <br>Because of this, evaluating such a summation doesn't yield a single result, but rather a range of possible solutions that depend on the choice of $x$. <br>The evaluation of the _$x$ range_ for which the series still converges can be expressed by a few variables[^cmuedu], namely:
1. The ___radius of convergence___, ($R$). This is the radius from the center of convergence to the edges of the interval of convergence. If you look at the range of $x$ values for which the series converges on a number line, the radius is half the size of that range, and it is centered at the "_center of convergence_" going to the edges of this range.
2. The ___center of convergence___, ($a$). The center of convergence is located at the $x$ location where the solution to the sum is 0. <br>($\rightarrow \sum^{n}_{n=0} f(x, n) =0$, and solve for $x$)
3.  The ___interval of convergence___. The interval is the range of $x$ values that can be used to still give a convergent series. The interval goes around the center of convergence to the edges that the radius gives, -> $[a - R, a + R]$.
##### Finding the Interval of Convergence
As seen above, the _interval of convergence_ requires both the _center of convergence_, $a$, and the _radius of convergence_, $R$, but then gives you all the $x$ values for which the series converges and can be evaluated. <br>To find the interval of convergence requires rewriting the sum to the form:
$$
\sum^{\infty}_{n=0} c_{n} \cdot (x-a)^n
$$
From here we can easily see the _center of convergence_, as the center of convergence is located at the $x$ location where the solution to the sum is 0, which in this case happens when $x=a$, which means the center of convergence is $a$. It might sometimes be useful to solve for the center of convergence _before_ rewriting the sum to aid in the rewriting process, as you would then already know what the $(x-a)^n$ term looks like. See point __2__ above for how to do that. <br>Finding the _radius of convergence_ uses the above form of the sum with the _ratio test_[^cmuedu]:
$$
\frac{1}{R}=\lim_{n \rightarrow \infty} | \frac{c_{n+1}}{c_{n}} |
$$
> [!info]
> To plug the enumerator of this formula in, literally only replace every mention of $n$ in the original expression with $(n+1)$, then simplify the whole expression afterward. Do not forget to divide 1 with your answer to solve for the radius of convergence $R$. 

> [!abstract] Note
> I don't think intuition or derivation of this formula for the ratio test is necessary here. It is just a tool to derive a solution to multivariable sums, and understanding the ratio test itself does not enhance understanding of evaluating sums, which is the point of this note. See the [wiki page](https://en.wikipedia.org/wiki/Ratio_test) with the derivation if you're interested in it anyways.







---
__[Home](Example.md)__ %%==NEEDS HOMEPAGE==%%

---
_Status:_ #bud #missingLink

---
# References:
[^cmuedu]:[CMU edu dings](https://www.math.cmu.edu/~amanita/math122/handouts/m122_f08_rhandout17.pdf)
1. R. A. Adams, Christopher Essex, _Calculus A Complete Course_, 9th ed.
2. C. Martin, _Methods for Evaluating Infinite Series_, [link](https://web.math.ucsb.edu/~cmart07/Evaluating%20Series.pdf).
