Status: #adult

Tags: [[metal working]], [[plastic working]], [[molding]], [[deforming processes]], [[seperating processes]], [[machining processes]], [[Joining]], [[additive manufacturing]], [[welding]], [[design rules]]

Type: #hub

---
# Manufacturing Technologies
When making a part choosing the right manufacturing technology is imperative for the quality of the end product. This choice will be based on things like _desired batch size_, _price_, _surface finish_, and how _complicated_ the shape is will also change the technology used.

>[!info] Note
>This subject is not about understanding concepts, but more about giving an overview of different methods with which one can manufacture something. Consider this page a hub from where to search for applicable manufacturing technologies.

## Categories
### 1 - Casting
##### Design Rules Casting
```dataview
LIST
FROM #casting and #design_rules
```
##### Temporary Casting
```dataview
LIST
FROM #casting and #temporary
```
##### Permanent Casting
```dataview
LIST
FROM #casting and #permanent
```
---
### 2 - Shaping and Forming
##### Design Rules Shaping and Forming
```dataview
LIST
FROM #shaping_and_forming and #design_rules
```
##### Shaping and Forming Processes
```dataview
LIST
FROM #shaping_and_forming 
WHERE file.name != "Design Rules Shaping and Forming"
```

---
### 3 - Seperating
##### Mechanical
```dataview
LIST
FROM #seperating and #mechanical
```
##### Chemical and Heat Dependent
```dataview
LIST
FROM #seperating and #mystical
```
---
### 4 - Machining
```dataview
LIST
FROM #machining
```
---
### 5 - Joining
##### Welding
###### Arc Welding
```dataview
LIST
FROM #welding and #arc_welding
```
###### Resistance and Friction Based Welding
```dataview
LIST
FROM #welding and #resistance_and_friction_welding
```
##### Non-Welding
```dataview
LIST
FROM #non-welding
```
---
### 6 - Additive manufacturing
##### Metal Based Additive Manufacturing
```dataview
LIST
FROM #additive and #metal_based_3D_printing
```

##### Plastic Based Additive Manufacturing
```dataview
LIST
FROM #additive and #plastic_based_3D_printing
```

##### Polymer Based Additive Manufacturing
```dataview
LIST
FROM #additive and #polymer_based_3D_printing
```
## Terms and Disambiguation
%%
==Link for referencing==:
Manufacturing%20Technologies%20Overview#Terms%20and%20Disambiguation
%%
- ___Workpiece:___ The product that is being worked on with the manufacturing process
- ___Pattern:___ A replica of the object to be cast. This can be the whole object, or just a part of it, like in [sand casting procedures](Sand%20Casting.md)[^pattern]. 
- ___Die:___ A specialized tool to work metal. The precision of these parts greatly influences the quality of the product. For example a [stamping die](https://en.wikipedia.org/wiki/File:ProgressiveDieToyota-strip-scrap.jpg)[^die]
- ___Mold:___ A block with cavities that are filled during a [molding or casting process](#1%20-%20casting). The mold can be made of anything, but metal molds require a lot of engineering for proper heat distribution in the mold.
- ___Flash:___ Left over material after a compressing operation. This happens when the volume of the product exceeded the volume of the die. For a mental image: think the residue on the edges of [old timey stamps](https://upload.wikimedia.org/wikipedia/en/7/71/WilliamStoughton-personalseal.jpg).
- ___Billet:___ Workpiece when it's located in a die and about to be edited.
- ___Punch:___ A Tool used to indent or penetrate a surface.
- ___Lathe:___ A machine tool that spins a [workpiece](!%20Manufacturing%20Technologies%20Overview.md#Terms%20and%20Disambiguation) around in order to be able to perform several machining processes on it, like [turning](Physical%20Machining%20Methods.md#turning).
- ___Thermal distortion:___ Because of the heat produced by a process a product might warp when cooling off slowly. This could lead to: __1.__ shrinkage of the [workpiece](!%20Manufacturing%20Technologies%20Overview.md#Terms%20and%20Disambiguation) or weld, __2.__ waviness along flat surfaces, __3.__ bending of the workpiece or joint.
- ___3D printing:___ 3D printing, or _additive manufacturing_, is a process where a printer is used to print products in 3 dimensions, by adding material, never removing or deforming it. Though the term 3D printing is usually interchanged with the term for the process of [fused deposition modelling](FDM%20-%20Fused%20Deposition%20Modeling.md), this process is just a category within 3D printing.





# Based on:
1. H.J.J. Kals, _Industrial Production, The Manufacture of Mechanical Products_, 5th ed.
2. Vrije Universiteit, M. Mehrpouya, [link to course](https://canvas.utwente.nl/courses/15351).

# References:
[^pattern]: [Wikipedia - Pattern (casting)](https://en.wikipedia.org/wiki/Pattern_(casting))
[^die]: [Wikipedia - Die (manufacturing)](https://en.wikipedia.org/wiki/Die_(manufacturing))