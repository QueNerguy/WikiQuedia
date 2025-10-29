### Factoring and Partial Fraction Expansion
29-10-2025
#### Referencing:
1. Khan Academy, *Partial fraction expansion 1 | Partial fraction expansion | Precalculus | Khan Academy*, [link](https://youtu.be/S-XKGBesRzk?si=cjOlKBNRo5B6ZPIP).
2. E. Cheever, _Partial Fraction Expansion (or Decomposition)_, US, [link](https://lpsa.swarthmore.edu/BackGround/PartialFraction/PartialFraction.html).
3. blackpenredpen, *Ultimate Partial Fraction Decomposition Study Guide (how setup)*, 9-2020, US, [link](https://youtu.be/DfTJOsqxIJ4?si=QOB1-3E5gUGhLad8).

#### Synopsis:
*Partial fraction expansion* (also sometimes called *partial fraction decomposition*) is a technique that simplifies a complicated fraction into a combination of fractions with simpler denominators. This simplification comes in handy when [integrating](Integration) and [differentiating](Differentiation) or when performing Laplace transforms%%==LINKJE LAPLACE==%%.<br>Decomposing a fraction comes in **4** steps
1. Make sure the **denominator** is at least a **grade higher** of a polynomial **than the numerator** is. If this is not the case, consider using polynomial long division[^1] first.
2. Using [factorization](Factorization.md), **decompose the denominator** into the lowest possible degree for the variable. Concretely, this means that for a polynomial $ax^2 + bx + c$ we will try to obtain a factorization with a lower grade than $x^2$ (= grade 2), like the factorization $(dx + e)(fx + g)$, which has grade 1.
3. **Guess a solution** of $A$, $B$, $C$ etc. The guessed function will be a polynomial of 1 degree lower than the polynomial degree in the denominator. <br>If we decompose into $\frac{ \text{numerator} }{(x + 2)(x^2 - 10)}$ we can see that $(x + 2)$ has grade 1, thus we choose $A$ for the numerator of our guess, which is a polynomial of grade 0. In the same way, for $(x^2 - 10)$ we see grade 2, thus for the numerator we choose $Bx + C$. This gives us
$$
\frac{A}{(x + 2)} + \frac{Bx + C}{(x^2 - 10)}
$$
For repeating factors, factors such as $x^2$ which can be written as $x\cdot x$ we have a solution as follows
$$
\frac{ \text{numerator} }{x^2} = \frac{A}{x^1} + \frac{B}{x^2}
$$
This results from factorizing as just $\frac{ \text{numerator} }{x^2}$, and then choosing $Ax + B$. From the resulting fraction we can divide out $x$ from $Ax$.
$$
\frac{Ax + B}{x^2} = \frac{A \cancel{x}}{x^{\cancel{2}}} + \frac{B}{x^2} = \frac{A}{x^1} + \frac{B}{x^2}
$$
This remains true for functions $f(x)$ instead of $x$. 
$$
\frac{ \text{numerator} }{x (x + 2)^3} = \frac{A}{x} + \frac{B}{(x+ 2)^1} + \frac{C}{(x+ 2)^2} + \frac{D}{(x+ 2)^3}
$$
4. **Find a solution for $A$ and $B$**. For the following expression we have 
$$
\frac{x + 3}{(x + 5)(x - 8)} = \frac{A}{x + 5} + \frac{B}{x - 8} = \frac{A(x - 8) + B(x + 5)}{(x + 5)(x - 8)}
$$
To find an expression for $A$ and $B$ we can either solve the system $x + 3 = A(x - 8) + B(x + 5)$, or we can plug in a value for $x$ that eliminates one of the expressions, for example $x = 8$. From this we find $11 = 0 + 13B \quad\Rightarrow\quad B = \frac{11}{13}$. Then we do the same for $x = -5$ to find $A$[^2].

>[!abstract] A Quick Overview of the Steps 
> 1. Perform polynomial long division[^1] to make the denominator a grade or more higher than the numerator.
> 2. [Factorize](Factorization.md) the denominator into $(dx + e)(fx + g)$.
> 3. Assume a numerator of $A$, $B$, $C$ etc. that is a polynomial of a grade lower than the factorized denominator.
> 4. Solve for $A$, $B$, $C$ etc. and substitute into the original guessed expression to obtain the final expanded expression.

##### Example for a First Degree Denominator
Example borrowed from [Khan Academy](https://youtu.be/S-XKGBesRzk?si=cjOlKBNRo5B6ZPIP).<br>Starting with a fraction
$$
\frac{x^2 - 2x -37}{x^2 - 3x - 40}
$$
1. We notice that the numerator both have the same grade, namely 2, and thus we perform polynomial long division. <br>We find that $x^2 - 2x -37$ fits into $x^2 - 3x - 40$ once, with rest $x + 3$. We thus rewrite to
$$
1 + \frac{x + 3}{x^2 - 3x - 40}
$$
2. To factor $x^2 - 3x - 40$ we realize that $5 \cdot 8$ is $40$ and at the same time that $5 - 8$is $-3$. We thus factorize $x^2 - 3x - 40$ to $(x + 5)(x - 8)$. The full fraction becomes
$$
1 + \frac{x + 3}{(x + 5)(x - 8)}
$$
For now we will leave the $1$ out of consideration and focus on only $\frac{x + 3}{(x + 5)(x - 8)}$.
3. Because $x + 3$ is of grade 1, and we have a decomposition into two terms (namely $(x + 5)$ and $(x - 8)$) we choose two variables, namely $A$ and $B$. <br>We *guess* that a solution to $\frac{x + 3}{(x + 5)(x - 8)}$ looks like
$$
\frac{A}{(x + 5)} + \frac{B}{(x - 8)}
$$
To make this into a single fraction we quickly rewrite, obtaining
$$
\frac{A(x - 8) + B(x + 5)}{(x + 5)(x - 8)}
$$
4. We have now found a solution to $\frac{x + 3}{(x + 5)(x - 8)}$ which is of the same form with the denominator, allowing us to find $A$ and $B$ quickly. 
$$
\frac{x + 3}{(x + 5)(x - 8)} = \frac{A(x - 8) + B(x + 5)}{(x + 5)(x - 8)} \qquad\Rightarrow\qquad x + 3 = A(x - 8) + B(x + 5)
$$
We find $A$ by guessing a value for $x$ that makes $B(x + 5)$ disappear. We choose $x = -5$ and get
$$
-5 + 3 = A(-5 - 8) + 0 \quad\Rightarrow\quad -2 = -13A \quad\Rightarrow\quad A = \frac{2}{13}
$$
We use the same trick to find $B$, guessing $x = 8$.
$$
8 + 3 = 0 + B(8 + 5) \quad\Rightarrow\quad 11 = 13B \quad\Rightarrow\quad B = \frac{11}{13}
$$
Substituting this into our guess for our solution to $\frac{x + 3}{(x + 5)(x - 8)}$ we get
$$
\frac{A}{(x + 5)} + \frac{B}{(x - 8)} = \frac{2}{13(x + 5)} + \frac{11}{13(x - 8)}
$$
The complete expression also included $1$, thus our complete answer is
$$
\frac{x^2 - 2x -37}{x^2 - 3x - 40} = 1 + \frac{2}{13(x + 5)} + \frac{11}{13(x - 8)}
$$



##### Example for a Second Degree Denominator
Example borrowed from [blackpenredpen](https://youtu.be/DfTJOsqxIJ4?si=tiefoKgiCo49TEzm&t=330).<br>Starting with a fraction
$$
\frac{4x^2 - 9x + 2}{x^3 + 3x^2 + 4x  + 12}
$$
1. We notice that the  grade of the numerator is lower than that of the denominator, and thus no long division is necessary.
2. We can [factorize](Factorization.md) the denominator into a combination of $(x + 3)$ and $(x^2 + 4)$. We can rewrite the fraction as
$$
\frac{4x^2 - 9x + 2}{(x + 3)(x^2 + 4)}
$$
3. For the first factor $(x + 3)$ we have a first degree polynomial, and thus our guess is a zeroth degree polynomial, $A$. For the second term $(x^2 + 4)$ we have a second order polynomial, and thus we choose the first degree polynomial $Bx + C$ for our guess. The resulting fraction is
$$
\frac{A}{(x + 3)} + \frac{Bx + C}{(x^2 + 4)}
$$
4. We can find $A$, $B$ and $C$ by rewriting the above expression as
$$
\frac{A}{(x + 3)} + \frac{Bx + C}{(x^2 + 4)} = \frac{A(x^2 + 4) + (Bx + C)(x + 3)}{(x + 3)(x^2 + 4)}
$$
To find $A$, $B$ and $C$ we solve
$$
\frac{4x^2 - 9x + 2}{(x + 3)(x^2 + 4)} = \frac{A(x^2 + 4) + (Bx + C)(x + 3)}{(x + 3)(x^2 + 4)} \quad\Rightarrow\quad 4x^2 - 9x + 2 = A(x^2 + 4) + (Bx + C)(x + 3)
$$




##### Example for Repeating Factors
Example borrowed from [blackpenredpen](https://youtu.be/DfTJOsqxIJ4?si=Qve11q0MgTk7QWxi&t=643).<br>Starting with a fraction
$$
\frac{4x - 1}{x(x + 2)^2}
$$
1. We can see that the denominator is a higher grade polynomial than the numerator, so no long division is required.
2. The denominator has been [factorized](Factorization.md) and can't be broken up into smaller pieces.
3. For the first factor we have $x$, which can be considered a first degree polynomial, thus we choose $A$, a zeroth degree polynomial, for our guess. For the second factor we have $(x + 2)^2$, also a first degree polynomial, but it has a multiplicity of 2 so we choose $B$ and $C$ for our guess of numerator.<br>The resulting fraction is
$$
\frac{A}{x} + \frac{B}{(x + 2)^1} + \frac{C}{(x + 2)^2}
$$
4. Reordering the above form we write
$$
\frac{A}{x} + \frac{B}{(x + 2)^1} + \frac{C}{(x + 2)^2} = \frac{A(x + 2)^2}{x(x + 2)^2} + \frac{Bx(x + 2)}{x(x + 2)^2} + \frac{Cx}{x(x + 2)^2} = \frac{A(x + 2)^2 + Bx(x + 2) + Cx}{x(x + 2)^2}
$$
To find $A$, $B$ and $C$ we solve
$$
\frac{4x - 1}{x(x + 2)^2} = \frac{A(x + 2)^2 + Bx(x + 2) + Cx}{x(x + 2)^2} \quad\Rightarrow\quad 4x - 1 = A(x + 2)^2 + Bx(x + 2) + Cx
$$
- In the example above, if we had a **repeating higher order term** $(x^2 + 2)^2$ instead of $(x + 2)^2$, we would've chosen $(Bx + C)$ in place of $B$ in the above solution, and $(Dx + E)$ in place of $C$, because the repeating term is a second order polynomial, so we guess a first order solution. This would make our guess look like
$$
\frac{4x - 1}{x(x6 2 + 2)^2} = \frac{A}{x} + \frac{Bx + C}{(x^2 + 2)^1} + \frac{Dx + E}{(x^2 + 2)^2}
$$











%%

==ORIGINELE TEKST UIT TIJD VAN CALCULUS I==

#### Partial Fraction Decomposition
This consists of a few steps[^goatedFilmpje]:
1. ___Factor denominator:___ Make sure the denominator of a function is [factored](#Factoring) in either linear or quadratic functions. For example: $6x+1$, $4x^{2}+2x+3$.
2. ___Choosing constants:___
	- ___For linear factors:___ 
		1. Choose a constant _A_ or _B_ etc. and write the factors in the form of $\frac{B}{x+3}$ for example
		2. Multiply the whole equation by the denominator of the original fraction. Because the original expression has been decomposed, the terms under _A_ and _B_ will cancel.
			- ___Example:___ $$\frac{7x-23}{\left(x-2\right)\left(x-5\right)}=\frac{A}{x-2}+\frac{B}{x-5}\to7x-23=A\left(x-5\right)+B\left(x-2\right)$$
		3. Solve the resulting system, or plug in random value for $x$, to cancel a term in the brackets and solve directly.
	- ___For quadratic factors:___
		1. Choose linear factor, and for the potential remaining linear factor, choose a constant.
			- ___Example:___$$\frac{A}{x}+\frac{Bx+C}{x^2+4x+13}$$
			- ___Example, repeating factor:___ In this case the repeating factor is the $x^2$. In this case it's treated as $x\cdot x$ and thus a constant is chosen. Do notice that the power of the $x$ goes up with every iteration. This does also follow directly form the arithmetic in the previous example. $$\frac{2x-5}{x^2\left(x+1\right)}=\frac{A}{x^{1}}+\frac{B}{x^{2}}+\frac{C}{x+1}$$
		2. Multiply the whole equation by the denominator of the original fraction. Because the original expression has been decomposed, the terms under the linear factor of _A_ and _B_ will cancel.
		 3. Solve the resulting system, or plug in random value for $x$, to cancel a term in the brackets and solve directly.


%%




[^1]: Example seen in: Khan Academy, *Partial fraction expansion 1 | Partial fraction expansion | Precalculus | Khan Academy*, [link](https://youtu.be/S-XKGBesRzk?si=Piwg96PV8TAyl490&t=63)
[^2]: Stolen from: Khan Academy, *Partial fraction expansion 1 | Partial fraction expansion | Precalculus | Khan Academy*, [link](https://youtu.be/S-XKGBesRzk?si=cjOlKBNRo5B6ZPIP).



#missingLink