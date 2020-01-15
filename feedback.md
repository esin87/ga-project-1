# Project 1 Feedback

## Code Quality - Performing

Criteria: Is the code well formatted? Are variable and function names semantic and sensible? Is the code easy to read and understand?

### Strengths:

-   Excellent use of semantic and intuitive variable names. Code is generally well-formatted, easy to read, and organized in a logical way. Sectioning off CSS by area is also a great approach that makes your code very easy to scan and understand.
-   Comments help other developers understand the purpose of different variables in the JS file.
-   For such a complex and interactive game, it's impressive that you were able to contain the game logic within 121 lines of JS code, including comments. This tells me your code is already quite DRY and modularized.

### Areas for Growth:

-   To DRY up the `playerName` function, you could use `setAttribute` to give `welcome` a welcome class, and you could define those styles in the CSS for any elements with a `welcome` class. Setting CSS styles via DOM manipulation is useful when you want to change or update existing styles, such as changing the display of an item as you do later in the code. (See my changes to `script.js` and `style.css`)
-   To DRY up the last block of code that contains your `multipleChoice.forEach` as well as the `highlightChoice` event listener, I would consider making the code within the `if/else` blocks into two separate helper functions. This might mean you need to change some variable scoping in order to access variables globally, or change where they are defined.
-   There are also two repeated `if` statements in both the `if/else` blocks that change the scoreboard color. These can also be their function (see suggested changes in the `script.js` file).
-   A couple small issues with extra indentations. These should generally be taken care of with the Prettier linter. Let me know if you'd like to troubleshoot the automatic formatter together.

## Technical Requirements - Performing

Criteria: How does the project stack up to the requirements for this project? Is the developer making use of the material we've covered in a way that makes sense?

### Strengths:

-   Project meets all technical requirements, including separation of concerns into distinct HTML, CSS and JS files, deployment via GH pages, running without major errors (investigate the missing favicon error that shows up in the console when you can), and a thorough README.
-   HTML, CSS and JS code all show evidence of understanding key concepts in each language.

### Areas for Growth:

-   Minor suggestion: change the `<title>` tag in the `<head>` of you HTML document to further customize your quiz. That way in the browser tab, your application will show its own name instead of `Document`. Otherwise, no suggestions. :)

## Creativity and Interface - Excelling

Criteria: Is the application easy to navigate? Does it work well in every major browser? Is it responsive? Does it incorporate modern UI Themes?

### Strengths:

-   Innovative and unique concept that showcases your individual interests and abilities.
-   Clean, uncluttered design that is intuitive for the user.
-   Interactive elements that update in a logical way.
-   Responsive design that looks great and works perfectly on a small or large screen.
-   As you learn more about coding, you can update your questions to reflect your deeper level of knowledge, which will be a great way to highlight your technical chops.

### Areas for Growth

-   Minor suggestion: consider using a sans-serif font for a cleaner and more modern look. You could also explore using a CSS framework like Bootstrap, which helps with creating more polished styles.

## Functionality - Excelling

Criteria: Does the application work without errors or bugs? Does it present a complete app, where every feature is fully implemented in a way that makes sense?

### Strengths:

-   Application loads with no major bugs. The Jeopardy game is completely developed, with a beginning, middle, and end to the game.
-   Congrats on reaching the Gold level of your feature plan! Your ideas for future features are great, and I know you can implement them!

### Areas for Growth:

-   I would consider adding functionality that closes the question modal automatically after the user answers and gets feedback. Having to click one less time out of the modal would help improve user experience.

## Presentation - Excelling

Criteria: Is there adequate documentation? Is the repository well organized and free of clutter?

### Strengths:

-   README shows evidence of learning Markdown -- nice use of features such as a table of contents, screenshots of your game, and checkboxes to highlight your feature progress.
-   Your README is incredibly detailed and thorough, and shows how much investment you put into the planning process. You went above and beyond, adding detailed information about how to use the game, as well as your initial approach to the code and how you refactored.
-   Sharing your Trello board shows a methodical and organized approach to project planning, which is a really important skill for developers! It was a great idea to include deadlines and links to resources on your Trello board; however, your board is private and I was not able to see it from the link provided. Consider making it public if you'd like other visitors to your repo to see your detailed planning process!
-   Simple but effective wireframes that show the thought you put into how your application would look and be organized.
-   Repo is very well-organized, with directories for different kinds of files.

### Areas for Growth:

-   None at this time :)

## Hard Requirements - Complete:

-   [x] The project is deployed to GitHub Pages or a custom domain
-   [x] The application renders in the browser and runs without errors
-   [x] The repo has a README that adequately documents the project

## Grade: Pass
