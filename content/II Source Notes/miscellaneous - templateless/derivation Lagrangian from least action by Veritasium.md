#### Referencing:
1. Veritasium, _The Closest We’ve Come to a Theory of Everything_, 19:36-23:16, 10-2024, US, [link](https://youtu.be/Q10_srZ-pbs?si=UoO_SDOIwTMj3ijm&t=1176).

#### Derivation:
Starting with the definition of action. Nature optimizes for action, it tends to a minimum given that
1. Energy is conserved
2. Energy is the same for all paths

Mathematically speaking we can say that for the principal of least action we have
$$
\delta S_0 = 0
$$
Where $S_0$ is the action, and $\delta$ gives the differential for *path variables*. <br>The heavier an object is, the more action is required for it's motion, similarly, when the object moves faster the action increases too. Lastly the bigger the distance that the object covered the greater the action required was. Mathematically we express this as
$$
S_0 = \int mvds
$$
Plugging this into the principle of least action we get
$$
\delta S_0 = \delta\int mvds
$$
To try to obtain a recognizable term within the integral (now $mv$) we can substitute $ds$. We do this by using the same thought process we used to get equations for [particle motion](Particle%20Motion#Velocity), namely
$$
v = \frac{ds}{dt} \qquad \Rightarrow \qquad ds = vdt
$$
Substituting this into the previous equation we get
$$
\delta\int mvds = \delta\int mv^2 dt
$$
We now have a recognizable term, namely, we can recognize in $mv^2$ the expression for the kinetic energy, $E_k = \frac{1}{2}mv^2$. Thus $mv^2$ is twice the kinetic energy, and we can write
$$
\delta\int mv^2 dt = \delta\int (E_k + E_k) dt
$$
As is one of the conditions for the principle of least action to be valid, the total energy is conserved.
$$
E_{\text{total}} = E_k + E_p + E_{\text{rest}}
$$
For convenience's sake, from this point on $E_k$ will be referred to as $T$, $E_p$ will be referred to as $V$ and $E_{\text{total}}$ will be referred to as $E_t$.
$$
E_t = T + V + E_{\text{rest}}
$$
We can isolate $T$ and substitute the result into the equation we obtained earlier from the principle of least action.
$$
\delta S_0 = \delta\int (T + T) dt = 0
$$
$$
T = E_t - V - E_{\text{rest}} 
$$
$$
\delta S_0 = \delta\int (T + E_t - V - E_{\text{rest}} ) dt = 0
$$
We can break up the lengthy integral into two parts. We do this because the total energy is constant and we can compute the resulting integral.
$$
\delta\int (T + E_t - V - E_{\text{rest}} ) dt = \delta\int (T - V - E_{\text{rest}} ) dt + \delta \int E_t dt
$$
$$
(\dots ) = \delta\int (T - V - E_{\text{rest}} ) dt + \delta (E_t \cdot t)
$$
We can take the derivative of $E_tt$ by applying the [product rule](Differentiation#Product%20Rule) to obtain
$$
(\dots) = \delta\int (T - V - E_{\text{rest}} ) dt + E_t \delta t + t\delta E_t
$$
Because we know that the energy is conserved, the total energy is constant, and $\delta E_t$ becomes 0. <br>We reorder to obtain
$$
\delta\int (T - V - E_{\text{rest}} ) dt = - E_t \delta t
$$
To remove the remaining $E_t \delta t$ term and get 0 on the right side, we must make time constant. We do this by only considering those paths that take the same amount of time to take. This stipulation narrows our scope for the entire integral, from all possible paths to all paths that have a certain traversal time, and at the same time this **introduces a new condition** to the eventual result. <br>We are now able to write
$$
\delta S_0 = \delta\int (T - V - E_{\text{rest}} ) dt = 0
$$
The **Lagrangian**, $L$, is the term that appears in the brackets.
$$
L = T - V - E_{\text{rest}} 
$$
For the purpose of mechanics we set $E_{\text{rest}}$ to 0. These rest energies are what are known as *nonconservative energies*. Because these energies can completely dissipate during motion and these energy flows are usually hard to correctly model we set it's value to 0. <br>Thus for all intents and purposes
$$
L = T - V
$$
We thus end up with **another condition** for the use of Lagrangian mechanics, namely that the Lagrangian can't hold for *nonconservative systems*.

---
To conclude, the formulation of the Lagrangian as $L = T - V$ holds when
1. ***The time, $t$, is fixed.***
2. ***There are no nonconservative energies.***

To work with the Lagrangian **1.** the start- and endpoints (coordinates) need to be known, and **2.** the start- and end times need to be known.






