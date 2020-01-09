# Trivia Game

Testing your knowledge should always be a fun game, because it makes the user WANT to take part in the quiz instead of the dreaded feeling of them HAVING to. I know we don't get quizzed on the information we've learned from SEI course but it's nice to know if we're able to speak the engineering lingo in the real world. 

## Table of Contents:
- [User Stories](https://github.com/daisyy125/ga-project-1#user-stories)
- [Wireframes](https://github.com/daisyy125/ga-project-1#wireframes)
- [Planning](https://github.com/daisyy125/ga-project-1#planning-checklist)
- [Technologies](https://github.com/daisyy125/ga-project-1#technologies)
- Installation - how to install your program
- Usage - instructions on how to use project after installation. include screenshots of project in action
- [UX Modifications/Hurdles/Unsolved problems](https://github.com/daisyy125/ga-project-1#modificationshurdlesunsolved-problems)
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

I started off my MVP version of the game by creating logic individually (each question modal). That way I can QA and ensure it works before refactoring the code using event propagation.

**Bronze version**
- [x] 3 categories
- [x] 4 answers each category
- [x] Multiple choice questions
- [x] Score keeping

**Silver version**
- [x] Expand nav with About & Instructions
- [ ] Player can enter their name for scoreboard to reflect
- [x] Page styling
- [ ] Timer for multiple choice

**Gold version**
- [ ] Open field to type in question
- [ ] Keep track of high scores
- [ ] Mobile version

## Technologies:
- HTML
- CSS
- Javascript
- Flexbox

## Modifications/Hurdles/Unsolved Problems

**UX modifications:**
- It was more user friendly to change the "click" action on the multiple choice radio buttons (shown on wireframe) to "click" the entire multiple choice line item. This way if users are playing on the phone, its easier for them to select answer choice. 

- My GA Instructor, Jen, also suggested to have a X close button on the quiz modal instead of setting a timeout on the modal when the question is answered. That way users are able to reflect on question & answer they selected.

**Hurdles:**

I was prepared for the project to be hard but I didn't realize how complicated it can get. Every time I got one function to work, a new issue would arise. Luckily I had awesome GA Instructors to guide me along and provided great feedback (also a different angle) on how to tackle the hurdles.

- I wanted to display a response when the user selects an answer, notifying them if the answer was correct or incorrect. I couldn't get the correct corresponding div to display and eventually found a workaround (suggested by my GA IA) where I would create a new p node, append directly after the multiple choice answer user selected.

- It was a bit tricky to get the multiple choice function to only allow users to select only ONE multiple choice answer. I have tried multiple ways but the outcome I got still allowed the user to select each multiple choice answer one time (therefore, each question allowed them 3 multiple choice select). My GA Instructor worked through this with me and I was able to update the code to have it working as I planned.

**Unsolved problems:**
- There is still lingering issues with users able to select another answer once they close out the question and goes back into the same question.

## Credits

Credits to amazing sources that I'm thankful for! Sending them many many thanks!

**Markup help:**

Styling & setup - https://help.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax

Table of contents - https://www.setcorrect.com/portfolio/work11/

Programming terminologies for quiz - https://hackr.io/blog/programming-terms-definitions-for-beginners

**Game help:**

Quiz - https://www.sitepoint.com/how-why-use-html5-custom-data-attributes/

Stackoverflow - https://stackoverflow.com/questions/13093126/insert-unicode-character-into-javascript

Unicode Characters - https://www.fileformat.info/info/unicode/char/2714/index.htm


