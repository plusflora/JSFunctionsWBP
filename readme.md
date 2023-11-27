# JavaScript Functions

![The Scenario](./util/assets/banner-scenario.png)

You work for MerchUp, a company which publishes a small digital storefront that sells promotional goods for touring bands. The codebase is old, and many developers with different preferences for function syntax have worked on it over the past few years.

Your job is refactoring some parts of the code to reduce unnecessary repetition (DRY: Don't Repeat Yourself). There is also some debugging to do as well.

---

![Requirements](./util/assets/banner-requirements.png)

- Refactor some parts of the code to reduce unnecessary repetition (DRY: Don't Repeat Yourself).
- Fix the known bugs in the code caused by incorrect use of function calls.

---
![Tickets](./util/assets/banner-tickets.png)

![Kanban Board](./util/assets/M1L5.1-functions-trello-board.png)

---
![Coding Practice](./util/assets/banner-coding.png)

### Preparatory Steps

Please concentrate your efforts within the "src" folder, as it will serve as your designated working directory for this exercise. It is important to note that no changes need to be made to any files within the util folder in order to successfully complete the task.

- Fork and clone [this](https://git.generalassemb.ly/SEI-Standard-Curriculum/M1L5.1-functions-wbp) repo.
- `cd` into the directory
- Run the following command: `npm i`. this command installs testing dependencies needed to verify your work
- Run the tests in the terminal using the command: `npm run test`
- Expect tests to fail on first run, before changes are made. Confirm that all tests are passing to complete the module.

For this project, there won't be any need to open a browser. All of your code will be running on Node.js, and all your results will be visible in your terminal.

### Step 1

- Open your editor and navigate to `/Refactoring/refactor.js`

- This file contains a function that calculates the full price after tax and shipping for a few of the most commonly sold products. The code is very repetitive, as the previous developer would always copy and paste a block of code every time a new product was added.
- To complete this exercise, find the code that is being repeated for each product and extract it into a function. Then, call that function once for each product and return the result. The function should return an array of updated prices. 
- The code already returns the expected result and passes the automated test, so you will know your refactor is successful if it shortens the code, and the tests still pass after your changes.
- You can run the tests for just this exercise using the `npm test` command.

---
### Step 2

- Navigate to `/firstClassFunctions/firstClassFunctions.js`

- This file contains a function called `formatProducts()`
- Just like in `Refactoring/refactor.js`, you will want to reduce repetition in this function by taking repetitive code and extracting it into a named function.
- On lines 21, 34, and 47, the existing code calls `.map()` with an anonymous function once each for the carousel, grid, and sidebar. Notice that the anonymous function for each has the exact same behavior, since we format the data the same in each place.
- Instead of using this repetitive anonymous function, move that behavior into a named function. Once you've done that, you can pass that named function as the argument to `.map()` once each for grid, sidebar, and carousel, shortening your code substantially.
- Can you refactor this code by extracting the repeated behavior into a function?
- This code already works and passes the tests. You will know your refactoring is successful if the code becomes shorter, and the tests still pass after your changes. You can run the tests for just this exercise using the `npm test` command.

---
### Step 3

- Navigate to `/hoisting/hoisting.js`

- This file contains a set of functions that were implemented by different developers over a long span of time, so each function is defined using different syntax.
- This code will throw an error when run, can you find a way to fix it by only re-ordering the lines of code? If you get stuck, check the lecture notes on how different types of function declarations and expressions are hoisted.
- You can run the tests for just this exercise using the `npm test` command.

### Step 4:

- Navigate to `/parameters/parameters.js`

- This file contains two functions:
  - `isUnique()` is a function that takes a list of IDs and a single ID, and returns true if that single ID is unique in the list.
  - `areAllIdsUnique()` is a function that takes an array of product IDs and returns true if _ALL_ the IDs are unique.

- There is a bug on one line in the `areAllIdsUnique()` function. Can you find it and fix it so the function works as expected? You will need to examine both functions to solve this problem, but you should only make edits to `areAllIdsUnique()`. 

- You can run the tests for just this exercise using the `npm test` command.

<details>

<summary>hint</summary>

This one is pretty tricky because JavaScript is very loose with the types of data you pass as parameters to functions.

In this line: ` const  isThisIdUnique = isUnique(id, allIds);` are the arguments to `isUnique()` passed in the correct order? To find out, try reading the function declaration for `isUnique()` - specifically, pay attention to the parameters that `isUnique()` accepts.

Later in your JavaScript career, it is likely that you will work with a technology called TypeScript, which is very powerful for helping avoid bugs like this.

</details>

<br>

_Solution code is available in the util folder, should you find yourself stuck._