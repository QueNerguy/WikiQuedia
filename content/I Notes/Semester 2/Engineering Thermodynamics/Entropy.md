---
title: "Entropy"
draft: false
---
tags:      <br>21-07-2025

---
# Entropy
If the meaning of some of the terms used on this page is unknown or ambiguous, please refer back to the [introductory page](Introduction%20to%20Engineering%20%20Thermodynamics) where a lot of the communication for thermodynamics is laid out.
### Interpretation
I highly recommend watching [this](https://youtu.be/DxL2HoqLbyA?si=7vSBamIKN4eZ_OKC) video by [Veritasium](https://www.youtube.com/@veritasium), for a beautiful explanation and intuition of how entropy operates. <br><br>Entropy, $S$, is an _extensive property_ that is a measure of how spread out energy is. When connecting two systems together, the energy is free to flow between those systems, in random directions. Because of this random flow, by chance, the system is most likely to find an equilibrium state, where the energy is about constant throughout the space[^standdistr]. This spreading out of the energy, is the entropy increasing. <br>As a law, entropy tends to a maximum. This may seem counterintuitive, because humans decrease the entropy of systems all the time by *manufacturing* ordered and unlikely states; in engines and heating systems, or by [machining](Physical%20Machining%20Methods) a part. However, this law still holds true, because, to manufacture a decrease in entropy at place $a$, the entropy at place $b$ *has* to increase to facilitate the process. As such, the entropy of the *total system* still increases[^earth]. <br>Because entropy tends to a maximum, it introduces [irreversibility](https://en.wikipedia.org/wiki/Second_law_of_thermodynamics#Introduction) to the system. A smoked joint will seldom become unsmoked. Some processes do *appear* reversible, the direction that time flows in isn't of much influence to the process. 
>"For example, the orbiting of the planets around the Sun may be thought of as practically reversible: A movie of the planets orbiting the Sun which is run in reverse would not appear to be impossible."[^wikiquote]

As the consequence of increasing entropy is a more chaotic state, a different way to think about entropy is as a measure of **chaos**. The more chaos a system has, the higher the entropy[^wikiref1][^readerref]. <br>Entropy describes the energy spread or chaos of a system, but it only works as a measure of **change** in this energy spread. It is a property that is not inherent to a certain state. Instead, it only plays a role when comparing two thermodynamic states, where energy would spread out during the process of getting from state $a$ to state $b$[^wikiref2]. As such, when the entropy of a certain state is discussed, the entropy is compared to a certain [standard state](https://en.wikipedia.org/wiki/Standard_state). <br>Entropy is a _path variable_, a variable whose value depends only on the path the system took to get from state $a$ to state $b$, unlike state variables, whose value only depends on the current state. The physical reason for this is because there's many ways for energy to spread out during a certain process, and the mechanisms of this spread depend on how the process operated.  <br>There is an exception to this however. When we idealize certain processes to be [reversible](https://en.wikipedia.org/wiki/Reversible_process_(thermodynamics)), we assume no spontaneous entropy generation in the process. As reversible processes operate the same, independent of the direction of time, the entropy increase and decrease has to be the same in both directions of the process. As such, *for reversible processes*, entropy is a _state variable_.

%%Entropy is a measure of how spread out energy is (veri quote) as energy spreads out more it is less available for work. the more the energy disperses the higher the entropy. Low entroy means concentration. Entropy tends to a maximum, as a consequence of energy spreading out over time. example is heat flowing naturally to a lower state in systems like a radiator etc. dont hold your fridge door open owo. gas expands to fill a container -> osmosis as well. %%
### Mathematical Formulation

### Inventory


---
__[Home](!%20Engineering%20Thermodynamics%20Learning%20Overview)__

---
_Status:_ #bud

---
# Based On:
[^standdistr]: This is because of the [standard distribution](https://en.wikipedia.org/wiki/Normal_distribution) of all possible states the system can attain. It is possible for all the energy to be present at a small part of the system, instead of spread out over the system, but because there are only a few ways to distribute energy like this, and there are many many more ways to distribute the energy across the whole of the system, the chance of this occurring is just incredibly small. See also [this](https://youtu.be/DxL2HoqLbyA?si=ejBm0CzbjCszFs_3&t=694) part of Veritasium's video.
[^earth]: Even though, as a result of entropy, every system has to become chaos eventually, the earth isn't close to reaching this equilibrium. This is because the earth isn't a closed system. The earth constantly receives energy from photons from the sun, "a steady stream of low entropy", says Veritasium [here](https://youtu.be/DxL2HoqLbyA?si=BeOVsVafTNjRJMG3&t=947). 
[^wikiquote]: [Wikipedia - Introduction to entropy - 3rd paragraph](https://en.wikipedia.org/wiki/Introduction_to_entropy#)
[^wikiref1]: [Wikipedia - Entropy](https://en.wikipedia.org/wiki/Entropy)
[^readerref]: N. Basson, _Engineering Thermodynamics I Course Reader_, NL, [link](https://canvas.utwente.nl/courses/16111/files/4696974?wrap=1).
[^wikiref2]: [Wikipedia - Introduction to entropy - Thermodynamic entropy](https://en.wikipedia.org/wiki/Introduction_to_entropy#Thermodynamic_entropy)
1. N. Basson, _Engineering Thermodynamics I Course Reader_, NL, [link](https://canvas.utwente.nl/courses/16111/files/4696974?wrap=1).
2. Wikipedia, _Entropy_, [link](https://en.wikipedia.org/wiki/Entropy).
3. Wikipedia, _Introduction to entropy_, [link](https://en.wikipedia.org/wiki/Introduction_to_entropy).
4. Veritasium, _The Most Misunderstood Concept in Physics_, 7-2023, US, [link](https://www.youtube.com/watch?v=DxL2HoqLbyA&t=589s).