---
title: Style Guide WikiQuedia
draft: false
---
# Style Guide WikiQuedia
If it occurs that there is an issue with the styling where a page doesn't follow the style guide, I would like to ask you to please make an issue report [here](https://github.com/QueNerguy/WikiQuedia/issues).

---

### Formatting
##### Referencing and Backlinks
Referencing is done with footnotes. <br>For not directly referenced sources, but for sources whose influence shimmer through the text, enter them in the '**Based On:**' section.
- Reference **general sources** with:<br>Entry number. Name(s) author/Website/Company/Institute/Publication, _Name article following original formatting_, _chapter_/paragraph/page/timestamp, edition number/month-year of release, country ID[^countryID], [link](https://quenerguy.github.io/WikiQuedia/). <br>Fill in all possible fields, first option takes precedence. <br>End all references with a dot.
	- ***Examples:***
		1. N. Basson, _Engineering Thermodynamics I Course Reader_, [link](https://canvas.utwente.nl/courses/16111/files/4696974?wrap=1).
		2. Wikipedia, _Enthalpy_, [link](https://en.wikipedia.org/wiki/Enthalpy).
		3. R. A. Adams, C. Essex, _Calculus A Complete Course_, 9th ed, CA.
		4. G. Stoffels, _Mathematical Background Engineering Thermodynamics_, p7, 2020, NL, [link](https://canvas.utwente.nl/courses/16111/files/4693672?module_item_id=546655).
		5. C. H. Edwards, D. E. Penney, D. Calvis, _Differential Equations and Boundary Value Problems_, _1.4 Separable Equations and Applications_, 5th ed, US.
		6. J. Gill, _Second Order Linear Equations Via Eigenvalues_, 3-2022, US, [link](https://www.youtube.com/watch?v=r1v2P4hjNJ8).
- Reference **inline source articles** (particularly in footnotes) with: <br>\[Website/Company/Institute/Publication - Name article following original formatting - chapter - page/paragraph/timestamp of video](URL of chapter/article/website)
	- ***Examples:*** <br>See: [Less Boring Lectures - REFERENCE ENTROPY and Specific Heats in 12 Minutes!](https://www.youtube.com/watch?v=kinE5eTVgQw&list=PLd-0K-8ZyM0WdLse-OASmbqzXdpJcCn3P&index=78) <br>[Wikipedia - Gradient - Cartesian coordinates](https://en.wikipedia.org/wiki/Gradient#Cartesian_coordinates) <br>[Wikipedia - Introduction to entropy - 3rd paragraph](https://en.wikipedia.org/wiki/Introduction_to_entropy#)

- Backlinks can be made *once* per (sub)chapter, unless the wording in the reference changes, making it confusable with the first mention, but the source of the concept is the same.
	- Backlinks need to be made **every time**, every time it is mentioned, as long as it hasn't been mentioned before in the same chapter[^reason]. <br>As a result every backlink should be made once for every chapter in an article, if need be.
- Backlinks can not impede the flow of the text, they serve only as a highlight when a concept that has an explanation somewhere in this wiki is mentioned.
- Credit sources for images as:
	1. As prescribed by source of image.
	2. As: <br>source: *name of article/book* / name of author, _chapter_/paragraph/page/timestamp, edition number/month-year of release.
##### Typography
- Use *italics* to:
	1. Signify a name or title.
	2. Give slight emphasis. <br>Use in case of:
		- Previous concepts that are explicitly mentioned or referred to.
		- Use of an important concept that doesn't warrant bold typography.
- Use **bold text** to:
	1. Give major emphasis.<br>Use in case of:
		- Seemingly contradictory statements that need emphasis for visibility in the text.
		- Mention of important concepts or ideas.
		- A summarizing statement in-text.
		- An important remark in-text that is imperative to be read when skimming over the page.
- Use ***bold italic text*** to:
	1. Name concepts in a list that will be explained after, as a substitution for a tile.
##### Listing
Listing explicitly is preferred over inline listing for visibility.
- End lists **without** a dot (.) in case of:
	- Lists of concepts or ideas.
	- Use of incomplete sentences.
- End lists **with** a dot (.) in case of:
	- Lists with full explanations.
	- Use of complete sentences.

Always capitalize the first letter of an entry in a list.
##### Titling
- Enter titles with every first letter a capital. Exceptions to capitalization are prepositions and two-letter-words.
	- Use full sentences, no skipping prepositions.
	- Find titles that encompass the complete scope of their contents. 
	- Optimize titles for researchability.
##### Units
- Notate units in text as LaTeX text: ``` $\text{unit}$ ```
	- ***Examples:*** <br>$\text{Pa}$, $\text{N} \cdot \text{m}$
- Notate units in calculations or overviews as LaTeX text with brackets: ``` $\text{[unit]}$ ```
	- ***Examples:***
	- $100 \text{ [Pa]}$, $28 \text{ [N} \cdot \text{m]}$
- Scientific notation as ``` $\times 10^3$ ```
	-  ***Examples:***
	- $100 \text{ [kPa]} = 100 \times 10^3 \text{ [Pa]}$
##### Tagging
There are 4 grades of tags
1. #bud <br>This indicates a blank or nearly blank note.
2. #sprout <br>This indicates an unfinished note.
3. #ripe <br>This indicates a finished note.
4. #missingLink <br>This indicates that a reference is made somewhere in the note without proper/complete referencing to publications or withing the wiki.
	- Use in combination with #sprout to indicate missing (surrounding) text.
	- Use in combination with #ripe to indicate complete (surrounding) text.


---
### Buildup of Subject Notes
The formatting for subject notes is subject to some flexibility. Following the structure listed below isn't imperative. <br>Use **###** as secondary title. **##** is reserved for the event of possible overarching themes worth titling in the note.
##### Source Notes
Source notes have a strict format that has to be followed always.
- If a note discusses a physics concept and the unit is to be written down, write it down at the end of the note with a single dot-list entry.
	- ***Examples:***
		- __Unit:__ $\text{[Pa]}$
		- __Unit:__ $\text{[J/s]}$, $\text{[W]}$

Template note source notes [here](template%20source%20note.md).
##### Physics
A physics note discussing a certain concept needs the following chapters:
- Interpretation
- Mathematical Formulation
- Inventory
	- Needs to have a summary of the important *math*.
	- Needs to have a callout with the relevant equations from the note.

Template note physics [here](template%20physics%20note).
##### Math
A physics note discussing a certain concept needs the following chapters:
- Geometrical Interpretation
- Definition

Template note math [here](template%20math%20note.md).

---
### Buildup of Hub Notes
#### Math
Math learning requires taking different steps in a course, and the subjects build up to a final understanding of the subject matter. <br>Math hub notes need to have the following steps
- Background
	- Find here the prerequisite subjects and explanatory notes that are needed to understand the main idea of the course.
- Step 1 - \[step name]
- Step 2 - \[step name]
Template note math hub \[here]%%INSERT TEMPLATE REFERENCE%%
#### Physics
Physics learning requires taking different steps in a course, and the subjects build up to a final understanding of the subject matter. <br>Math hub notes need to have the following steps
- Background
	- Find here the prerequisite subjects and explanatory notes that are needed to understand the main goal of the course.
- Physical Concepts
	- Find here, in order of complexness and necessity for backreferencing to the same course, the explanation of physical concepts/relation notes and their associated equations.
- Systems
	- Find here the possible explanation of systems incorporating the physical concepts
- Equation Sheets
	- Find here an overview of the used equations with backlinks to their respective physical concepts.
- Tables
	- Find here datasheets and tables.

Template note physics hub \[here]%%INSERT TEMPLATE REFERENCE%%
#### Miscellaneous
So far the miscellaneous category only includes systems and manufacturing subjects. As these are strictly fact based subjects and don't build any gradual understanding, no ordering or partitioning is necessary. These subjects shall only contain background info and ordering of their contents based on categories.
- Background
	- Find here the prerequisite subjects and explanatory notes that are needed to understand the info of this course.
- Categories
	- \[category 1]
	- \[category 2]

Template note miscellaneous hub \[here]%%INSERT TEMPLATE REFERENCE%%














[^countryID]: Alpha-2 ISO 3166 international standard.<br>A complete list can be found [here](https://www.iban.com/country-codes).
[^reason]: The reason for this is to minimize searching time for the back-reference when quickly looking up a subject.