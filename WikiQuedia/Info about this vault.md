[Obsidian Help](https://help.obsidian.md)  


This vault is built around [this](https://youtu.be/hSTy_BInQs8?si=fYEnp4fk4BcbyShW) video

### Summary:
1.  Folder layout:
	1. ==Rough Notes==: Just notepad stuff. Notes from lectures, things thought of that need remembering, or things to do all go in here.
	2. ==Sources==: Summaries or links to source material for actual notes. Template would go like this: \[Title of article/book or whatever\], then \# referencing: \[and a link\].
	3. ==Tags==: Storing of tags. Tags in this case are just empty notes that are hyperlinked at the beginning of a note, like this: [[Example]]. _Formatting:_ After title of note: Tags: [[Example]] (and then enter). This folder needs no subdividing folders, everything just goes into the tags folder.
	4. ==Indexes==: When a tag has a lot of links mentioning it, move it to this folder and add an index, meaning: Add a list with all the mentions linked and organize them under categories. This makes it easier to find where to start when wanting to read about a \[category\] related topic. This folder needs no subdividing folders, everything just goes into the indexes folder.
	5. ==Template==: Just stores template for notes, doesn't need editing all that much.
	6. ==Full Notes==: Where the actual final notes go. This folder also forms the basis of the "Zettelkasten" shit.
2. For the template bit: there are three tags:
	1. ```#baby```  This tag signals that a note is unfinished or just bare bones layout.
	2. ```#child```  This tag signals that a note is under construction but close to or basically finished, or that it might be subject to later change.
	3. ```#adult```  This tag signals that a note is completely finished or that it is reasonably beleaved not to be subject to any later change.
3. For making a new note: press ```ctrl + O```, type the name and press ```enter```.
4. For searching for a note: press ```ctrl + O```.
5. For inserting a template: press ```ctrl + N```.

### Installed plugins:
##### Needed for Operation of Notes:
1. [Dataview](https://blacksmithgu.github.io/obsidian-dataview/)
##### Just QOL:
1. [mathlive](https://github.com/danzilberdan/obsidian-mathlive) 
2. [mathlive in Editor Mode](https://publish.obsidian.md/hub/02+-+Community+Expansions/02.05+All+Community+Expansions/Plugins/mathlive-in-editor-mode)


### Referencing
This is a simple footnote[^1].
This is another footnote[^2].
Yet another footnote[^note].

[^1]: This is the referenced text.
[^2]: Add 2 spaces at the start of each new line.
  This lets you write footnotes that span multiple lines.
[^note]: Named footnotes still appear as numbers, but can make it easier to identify and link references.
##### Formatting
Use [IEEE](https://journals.ieeeauthorcenter.ieee.org/wp-content/uploads/sites/7/IEEE_Reference_Guide.pdf) as a base or fallback for referencing. My own standard, based on this, is as follows:
1. Initials+last name author/name website/name company/name publisher, _Title of article or whatever in italics_, $n$th ed./year of publishing, [link](#formatting).

_Dot_ at the end, and every entry seperated by a _comma_. A _slash_ here means choosing the option that's available, in order of importance. If an option is not available at all leave it out.
### Creating Formulas
To create formulas use a plugin called [mathlive in Editor Mode](https://publish.obsidian.md/hub/02+-+Community+Expansions/02.05+All+Community+Expansions/Plugins/mathlive-in-editor-mode), and/or [mathlive](https://github.com/danzilberdan/obsidian-mathlive) These plugins allow for easy real time rendering and nice editing without using LaTeX writing from the user.
The __hotkeys__ for making a new formula are ```ctrl + m``` for a math block, and
```ctrl + shift + m``` for an inline math block, and to toggle visibility it's ```ctrl + j```
 $$5\cdot e^{6}$$
 
It is also possible to just use the LaTeX syntax directly of course if need be.
[Simple tutorial](https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference)
[Overview of complete LaTeX syntax](https://en.wikibooks.org/wiki/LaTeX/Mathematics#Matrices_in_running_text)

## Quick Access Syntax
1. <u>text</u> (for __underlines__)
2. &nbsp; (for __extra spaces__ that are not to be parsed)
3. <br> (for __extra enters__ that are not to be parsed)


### Callouts [Syntax](https://help.obsidian.md/Editing+and+formatting/Callouts#Supported+types)
The syntax for callouts:
1. 
> [!note]
> No aliases

2. 
> [!abstract]
> Aliases: `summary`, `tldr`

3. 
> [!info]
> No aliases

4. 
> [!todo]
> No aliases

5. 
> [!tip]
> No aliases

6. 
> [!success]
> Aliases: `check`, `done`

7. 
> [!question]
> Aliases: `help`, `faq`

8. 
> [!warning]
> Aliases: `caution`, `attention`

9. 
> [!failure]
> Aliases: `fail`, `missing`

10. 
> [!danger]
> Alias: `error`

11. 
> [!bug]
> No aliases

12. 
> [!example]
> No aliases

13. 
> [!quote]
> Alias: `cite`



---