# Trivia Game - Jeopardy style

Testing your knowledge should always be a fun game, because it makes the user WANT to take part in the quiz instead of the dreaded feeling of them HAVING to. I know we don't get quizzed on the information we've learned from SEI course but it's nice to know if we're able to speak the engineering lingo in the real world. Instead of straight up quizzing you "What does HTML stand for?" I've incorporated the quiz to be like Jeopardy style.

## Table of Contents:
- [User Stories](https://github.com/daisyy125/ga-project-1#user-stories)
- [Wireframes](https://github.com/daisyy125/ga-project-1#wireframes)
- [Planning](https://github.com/daisyy125/ga-project-1#planning-checklist)
- [Technologies](https://github.com/daisyy125/ga-project-1#technologies)
- [Installation](https://github.com/daisyy125/ga-project-1#installation)
- [Usage](https://github.com/daisyy125/ga-project-1#usage)
- [UX Modifications/Hurdles/Unsolved problems](https://github.com/daisyy125/ga-project-1#modificationshurdlesunsolved-problems)
- [Future Add-ons](https://github.com/daisyy125/ga-project-1#future-add-ons)
- [Credits](https://github.com/daisyy125/ga-project-1#credits)


## User Stories:

(1) Who are the users?

*Coders & Engineer beginners.*

(2) Why are they using the product/service?

*To test their knowledge and to learn basic coding terminologies.*

(3) What are they going to do?

*I'm a huge fan of Jeopardy so it will be in an Answer - Question format to test their knowledge. It will also be a place filled with "fun facts" about coding.*

## Wireframes:
I used a free program Wireframe.cc to create my wireframes. This is to get an idea of how I want my layout to be for the quiz board & multiple choice modal.

**Gameboard page:** https://wireframe.cc/iTfj9f

![](https://github.com/daisyy125/ga-project-1/blob/master/images/wireframes/gameboard-mock.png)

**Modal with multiple choices:** https://wireframe.cc/L6JPw5

![](https://github.com/daisyy125/ga-project-1/blob/master/images/wireframes/multiplechoice-mock.png)


## Planning checklist:

I created a [Trello Board](https://trello.com/b/zqiH9Ljg/ga-project-1-trivia-game) to keep my planning organized with the project tasks, reference links, and due dates. Thanks to my Instructor Assistant for the suggestion, Esin Saribudak :purple_heart:

**Bronze version**
- [x] 3 categories
- [x] 4 answers each category
- [x] Multiple choice questions
- [x] Score keeping

**Silver version**
- [x] Expand nav with About & Instructions
- [x] Player can enter their name for scoreboard to reflect
- [x] Page styling
- [ ] Timer for multiple choice

**Gold version**
- [ ] Open field to type in question
- [ ] Keep track of high scores
- [x] Mobile version

## Technologies:
- HTML (passed HTML5 Validator)
- CSS (passed CSS Validator)
- Javascript
- Flexbox

## Installation:
- Download folder ga-project-1. Which will include the following files:
    - index.html
    - CSS folder with style.css
    - script.js
    - Images folder with wireframes
    - Images folder with screenshots of live game
- Open index.html file in browser to start play the game (Google Chrome recommended).

## Usage:

![](https://github.com/daisyy125/ga-project-1/blob/master/images/livegame/live-game.png)

- Nav options allow users to click on "About the game" or "How to play" to learn more about the game and rules.

- User can then enter their name in the input field to start the trivia.

- There are three categories, each with four questions. Each question has a different prize amount. The higher the prize amount, the harder the question gets. User can select any question amount on the board to answer.

- A modal will appear with question and three multiple choice answers to select. Based on the user selection: If the answer is correct - the prize amount will be added to the score at the bottom of the main page; If the answer is incorrect - the prize amount will be deducted from the score at the bottom of the main page.

- User is only allowed to answer each question once.

## Modifications/Hurdles/Unsolved Problems

**Modifications:**
- UX: It was more user friendly to change the "click" action on the multiple choice radio buttons (shown on wireframe) to "click" the entire multiple choice line item. This way if users are playing on the phone, its easier for them to select answer choice. 

- UX: My GA Instructor, Jen, also suggested to have a X close button on the quiz modal instead of setting a timeout on the modal when the question is answered. That way users are able to reflect on question & answer they selected.

- UX: I created responsive version of the game for users to be able to play on their smaller devices.

- Code: I originally started the javascript with one question (individually), that way I can QA and ensure the code works as expected. Then I refactored using event propagation.

**Hurdles:**

I was prepared for the project to be hard but I didn't realize how complicated it can get. Every time I got one function to work, a new issue would arise. Luckily I had awesome GA Instructors to guide me along and provided great feedback (also a different angle) on how to tackle the hurdles.

- I wanted to display a response when the user selects an answer, notifying them if the answer was correct or incorrect. I couldn't get the correct corresponding div to display and eventually found a workaround (suggested by my GA IA) where I would create a new p node, append directly after the multiple choice answer user selected.

- It was a bit tricky to get the multiple choice function to only allow users to select only ONE multiple choice answer. I have tried multiple ways but the outcome I got still allowed the user to select each multiple choice answer one time (therefore, each question allowed them 3 multiple choice select). My GA Instructors worked through this with me and I was able to update the code to have it working as I planned (Thank you Jen & Hou).

**Unsolved problems:**
- Occasionally the score would return a NaN and need to resolve it.

## Future Add-ons
- Menu bar for mobile version
- Timer for multiple choice
- Keep track of scores from previous games (ex. scoreboard of high scorers)
- 2 player game
- Open field to type in question. This will be a big challenge since we need to set logic to match what user typed in to the correct answer. Issue I foresee this add-on to run into: possibility typo from user.


## Credits

Thank you to my wonderful GA Instructors (& IA's) and GA classmates for providing technical and moral support throughout!

Credits to amazing sources that I'm thankful for! Sending them many many thanks!

**Markup help:**

Styling & setup - https://help.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax

Table of contents - https://www.setcorrect.com/portfolio/work11/

Programming terminologies for quiz - https://hackr.io/blog/programming-terms-definitions-for-beginners

**Game help:**

Quiz - https://www.sitepoint.com/how-why-use-html5-custom-data-attributes/

Stackoverflow - https://stackoverflow.com/questions/13093126/insert-unicode-character-into-javascript

https://stackoverflow.com/questions/40147856/disable-click-event-on-all-controls-using-javascript

Unicode Characters - https://www.fileformat.info/info/unicode/char/2714/index.htm


