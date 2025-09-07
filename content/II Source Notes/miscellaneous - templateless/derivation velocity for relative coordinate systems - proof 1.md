To find $\dot{\hat{\bf i}}$ and $\dot{\hat{\bf j}}$, we apply roughly the same thought process as we used [here](Motion%20in%20Normal-Tangent%20Coordinates#Acceleration) to find an expression for $\dot{\hat{\textbf{e}}}_t$. We want to find an expression for $d\hat{\bf i}$ and $d\hat{\bf j}$ first, and divide by the [differential](Differentiation#Interpretation) $dt$ to find the *time derivative* of $\bf\hat{i}$ and $\bf\hat{j}$. <br>We can use the image below to conclude that the differential $d\hat{\bf i}$ points in the $\hat{\bf j}$ direction, and that the differential $d\hat{\bf j}$ points in the $- \hat{\bf i}$ direction. Because we are modelling a possible rotation of the coordinate system, we can approximate the translation by a part of an arc-length. As the formula for part of an arc-length is *radius*$\times$*angle*, for a small angle $d\theta$ we have
$$
d\hat{\textbf{i}} = d\theta \hat{\textbf{j}} \qquad \text{and} \qquad d\hat{\textbf{j}} = - d\theta \hat{\textbf{i}}
$$
Dividing by $dt$ to get the time derivative, we get
$$
\dot{\hat{\textbf{i}}} = \dot{\theta} \hat{\textbf{j}} \qquad \text{and} \qquad \dot{\hat{\textbf{j}}} = - \dot{\theta} \hat{\textbf{i}}
$$
<br>![[derivation_idot_and_jdot_dynamics_relative_coordinate_80.png|400]]<br>source: *Engineering Mechanics Dynamics*, p374, 8th ed[^sus].<br><br>Ultimately we want every part of the expression for $\dot{\hat{\textbf{i}}}$ and $\dot{\hat{\textbf{j}}}$ to be vectorial, not scalar. The way to do this is by using a cross product for multiplying $\dot{\pmb{\theta}}$ and the basis vectors. One of the properties of the cross product is that the resulting vector will point perpendicular to the vectors that make it up. As $\dot{\vec{\pmb{\theta}}}$ points in $\hat{\textbf{k}}$-direction, we can imagine a plane going out of the page through the arrow for $\hat{\textbf{i}}$ for the plane spanned by $\dot{\vec{\pmb{\theta}}}$ and $\hat{\textbf{i}}$. The vector perpendicular to this plane is then $\hat{\textbf{j}}$. Using the same reasoning for the plane spanned by $\dot{\vec{\pmb{\theta}}}$ and $\hat{\textbf{j}}$, we conclude that we can substitute $\vec{\pmb{\omega}} \times \hat{\textbf{i}}$ for $\dot{\theta} \hat{\textbf{j}}$, and $\vec{\pmb{\omega}} \times \hat{\textbf{j}}$ for $- \dot{\theta} \hat{\textbf{i}}$[^minus]. The resulting equation becomes
$$
\dot{\hat{\textbf{i}}} = \vec{\pmb{\omega}} \times \hat{\textbf{i}} \qquad \text{and} \qquad \dot{\hat{\textbf{j}}} = \vec{\pmb{\omega}} \times \hat{\textbf{j}}
$$

%%

---

%%



[^sus]: This suspiciously swastika-shaped construction has no ideological implications as far as I am aware.
[^minus]: Notice that the negative sign disappears as well. This is because the vector $- d\dot{\theta} \hat{\textbf{i}}$ points *upward* from the plane spanned by  $\dot{\vec{\pmb{\theta}}}$ and $\hat{\textbf{j}}$, if we see that plane as a positively rotated version of the plane spanned  by  $\dot{\vec{\pmb{\theta}}}$ and $\hat{\textbf{i}}$. As this plane's perpendicular vector has no negative sing either, it can be assumed that neither will the one spanned by  $\dot{\vec{\pmb{\theta}}}$ and $\hat{\textbf{j}}$. <br>Also math stuff something something.