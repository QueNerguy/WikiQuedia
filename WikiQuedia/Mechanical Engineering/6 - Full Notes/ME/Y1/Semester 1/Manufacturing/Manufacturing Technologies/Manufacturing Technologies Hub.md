2025-01-27 12:57

Status: #child

Tags: [[metal working]], [[plastic working]], [[molding]], [[deforming processes]], [[seperating processes]], [[machining processes]], [[Joining]], [[additive manufacturing]]

---
# Manufacturing Technologies
When making a part choosing the right manufacturing technology is imperative for the quality of the end product. This choice will be based on things like _desired batch size_, _price_, _surface finish_, and how _complicated_ the shape is will also change the technology used.

>[!info] Note
>This subject is not about understanding concepts, but more about giving an overview of different methods with which one can manufacture something. Consider this page a hub from where to search for applicable manufacturing technologies.

## Categories
### 1 - Casting
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
```dataview
LIST
FROM #shaping_and_forming 
WHERE file.name = "Design Rules"
```
```dataview
LIST
FROM #shaping_and_forming 
WHERE file.name != "Design Rules"
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
```dataview
LIST
FROM #welding
```

##### Non-Welding
```dataview
LIST
FROM #non-welding
```
---
### 6 - Additive manufacturing
```dataview
LIST
FROM #additive
```
## Terms and Disambiguation
%%
==Link for referencing==:
Manufacturing%20Technologies%20Hub#Terms%20and%20Disambiguation
%%
- ___Pattern:___ A replica of the object to be cast. This can be the whole object, or just a part of it, like in [sand casting procedures](Sand%20Casting.md)[^pattern]. 
- ___Die:___ A specialized tool to work metal. The precision of these parts greatly influences the quality of the product. For example a [stamping die](https://en.wikipedia.org/wiki/File:ProgressiveDieToyota-strip-scrap.jpg)[^die]
- ___Mold:___ A block with cavities that are filled during a [molding or casting process](#1%20-%20casting). The mold can be made of anything, but metal molds require a lot of engineering for proper heat distribution in the mold.
- ___Flash:___ Left over material after a compressing operation. This happens when the volume of the product exceeded the volume of the die. For a mental image: think the residue on the edges of [old timey stamps](https://upload.wikimedia.org/wikipedia/en/7/71/WilliamStoughton-personalseal.jpg).
- ___Billet:___ Workpiece when it's located in a die and about to be edited.
- ___Punch:___ A Tool used to indent or penetrate a surface.





# Based on:
1. H.J.J. Kals, _Industrial Production, The Manufacture of Mechanical Products_, 5th ed.
2. Vrije Universiteit, M. Mehrpouya, [link to course](https://canvas.utwente.nl/courses/15351)

# References:
[^pattern]: [Wikipedia - Pattern (casting)](https://en.wikipedia.org/wiki/Pattern_(casting))
[^die]: [Wikipedia - Die (manufacturing)](https://en.wikipedia.org/wiki/Die_(manufacturing))