[![Custom Badge](https://img.shields.io/badge/-Back_to_spanish-blue?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAtOTYwIDk2MCA5NjAiIHdpZHRoPSIyNHB4IiBmaWxsPSIjZTNlM2UzIj48cGF0aCBkPSJtNDc2LTgwIDE4Mi00ODBoODRMOTI0LTgwaC04NGwtNDMtMTIySDYwM0w1NjAtODBoLTg0Wk0xNjAtMjAwbC01Ni01NiAyMDItMjAycS0zNS0zNS02My41LTgwVDE5MC02NDBoODRxMjAgMzkgNDAgNjh0NDggNThxMzMtMzMgNjguNS05Mi41VDQ4NC03MjBINDB2LTgwaDI4MHYtODBoODB2ODBoMjgwdjgwSDU2NHEtMjEgNzItNjMgMTQ4dC04MyAxMTZsOTYgOTgtMzAgODItMTIyLTEyNS0yMDIgMjAxWm00NjgtNzJoMTQ0bC03Mi0yMDQtNzIgMjA0WiIvPjwvc3ZnPg==)](https://github.com/BeCuber/page_selenium_test)

# [Mock Page for testing with Selenium WebDriver](https://becuber.github.io/page_selenium_test/)

![Index](./images/indexhome.png)

## Description
This repository contains a small collection of the first exercises from the [Foundations Course](https://www.theodinproject.com/paths/foundations/courses/foundations) by **[The Odin Project](https://www.theodinproject.com/)**.

These are basic code examples using **HTML5**, **CSS3** and **JavaScript**, all placed on the same website to serve as a practice lab for basic **Selenium WebDriver** usage.

## Used Technologies
![Static Badge](https://img.shields.io/badge/HTML5-black?style=for-the-badge&logo=HTML5)![Static Badge](https://img.shields.io/badge/CSS3-black?style=for-the-badge&logo=CSS3)![Static Badge](https://img.shields.io/badge/JavaScript-black?style=for-the-badge&logo=JavaScript)

## Goals
Do you need a test page to start learning how to use **Selenium WebDriver**?

Feel free to use this [URL](https://becuber.github.io/page_selenium_test/) to get familiar with a basic DOM structure.

## Project Status
This website contains:
- **Home**: The main page, where you can access the 4 exercises described below. They all have a button in the header that returns to this page.
- **Odin Recipes**: An exercise based on the [**Project: Recipes**](https://www.theodinproject.com/lessons/foundations-recipes) activity.
- **Etch&Sketch**: An exercise based on the [**Project: Etch-a-Sketch**](https://www.theodinproject.com/lessons/foundations-etch-a-sketch) activity.
- **Choose a Dragon**: A free excercise designed to showcase different form widgets by simulating a character selection interface.
- **RockPaperScissors**: An exercise based on the [**Project: Rock Paper Scissors**](https://www.theodinproject.com/lessons/foundations-rock-paper-scissors) activity.
### [Home](https://becuber.github.io/page_selenium_test/index.html)
This page encourages users to interact with elements on the website. 
It contains only 4 buttons that link to the other exercises.

>**Test idea:**
>
>*Do the buttons link to the correct pages?*
### [Odin Recipes](https://becuber.github.io/page_selenium_test/exercises/odin_recipes/odin_recipes.html)

It consists of 4 pages: an introduction page with 3 links to recipes, and the individual recipe pages, which contain navigation buttons.

>**Test idea:**
>
>*Is the navigation between the recipes correct?*
>
>*Do the correct buttons appear to navigate in the right order?*
### [Etch&Sketch](https://becuber.github.io/page_selenium_test/exercises/etch_sketch/etch_sketch.html)

This page displays a panel divided into squares that change to a darker shade when hovered over with the mouse. Each square reacts up to 10 times, getting darker with each interaction. The left panel allows you to adjust the number of squares per side and select a color.

>**Test idea:**
>
>*Does the number of squares match the selected value?*
### [Choose a Dragon](https://becuber.github.io/page_selenium_test/exercises/choose_a_dragon/choose_a_dragon.html)

It simulates a character sheet where you can choose the dragon's color, name, and three attributes  (CON, MAG and STR) as well as purchase items. 
It includes various input elements such as *radio button*, *sliders*, *text inputs* and *selectors*.

The default values for your dragon are:

![default-values](./images/default_values.png)

The sliders modify default values as follows:
- **CON**: each point adds +10 to PV
- **MAG**: each point adds +10 to PM
- **STR**: each point adds +10 to Dmg

The three attributes controlled by sliders cannot exceed a total of **8** points combined.

**Items** available in the selector cost **20 Gold** each.
Each item increases one of the three final attributes (**PV**, **PM** or **Dmg**) by **+5** .
**Up to 3 items** can be selected and will be displayed in the **Equipment** section.

Items can be returned using this button:

![pay-back](./exercises/choose_a_dragon/images/rewind.svg)

The **last purchased item** will be removed and **15 Gold** will be refunded.

Pressing the **Clear** button resets all values to their defaults.

>**Test idea:**
>
>*Is '8' the maximum total allowed for the sliders?*
>
>*Does each assigned point correctly increase the corresponding attribute by +10?*
>
>*Do selected items appear correctly in the 'Equipment' section?*
>
>*Is the selection limited to 3 items, and do they increase an attribute by +5?*
>
>*Can items be correctly removed (disappearing from 'Equipment', refunding 15 Gold, and reducing the attribute by 5)?*
>
>*Does pressing 'Clear' reset all values?*
### [RockPaperScissors](https://becuber.github.io/page_selenium_test/exercises/rock_paper_scissors/rock_paper_scissors.html)

It contains three buttons, one for each **weapon**.
The selected weapon appears in the **Player** box while a randomly chosen weapon appears in the **Computer** box at same time.
The programm awards **+1 point** to the winner according to traditional rules.
If there is a tie, no points are awarded.
The first player to reach **5 points** wins.
Points reset only when a game ends and a new weapon is selected.

>**Test idea:**
>
>*Are points awarded correctly?*
>
>*Is the winner correctly determined?*
>
>*Do all three weapons appear with a similar probability for the 'Computer'?*

## Planned Improvements
- The website will be improved to provide guided interaction with **Selenium WebDriver** and suggested test cases.
- In **Choose a Dragon**, the **Send** button will be used to start a short adventure.
- **More types of widgets** and a **table** structure will be added for interaction with **Selenium WebDriver**.

## Notes
- **Personal use:** This code is primarily for learning and experimentation.
- **Not for Production Use:** This repository is not intended for deployment in production environments or other projects without prior review.

---
Thank you for visiting this website! I'm continuously learning, so any suggestions or feedback are always welcome.