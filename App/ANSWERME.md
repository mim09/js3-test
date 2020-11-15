1. In the project there was a house that did not have a lord. Which house was this? And what did you do to deal with this situation?

Answer House AArryn of Errie
        I have  tried to fetch using the link from the SwornMember arrays. Then from, the new data I tried to extract a name.


2. You could have used XMLHttpRequest, the library axios or the fetch API to get the data from the server. And you could have used callbacks, async/await and/or promises. What did you use and why?
(_TIP: There is no right way, all have their advantages and disadvantages. Explain your decision making listing the advantages/disadvantages of each technology/approach_)

Answer: I used fetch Api because its promise and I can fetch a lot of data from different Api's and I don have to use a lot of back up functions.


3. Let's say you were a huge fan of Object Oriented Programming and the api offered the option to get all the data you needed at once. What classes would you make and what functions would they have?
(_TIP: You do not have to write out the implementation of the functions (but you can if it makes it easier to think it through)_)
(_TIP: If you are unsure between two decisions, then write a comment with the alternative you considered but decided against with arguments. There is again no one correct answer here, but we want to see you think in an OOP way_)
(_TIP: If you want the code highlighting, it is also fine to create a `.js` file and then write down here what file to look at_)

I dont understand the question fully but we make classes to make out program easy readable and reusable
for example in the example below we have a class rectange under it there is a constructor that get height and width then in the get area it returns the calculated value of area  from the method calaArea.
i have also another example in script.js.

Example (taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
```
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  get area() {
    // get the area of the rectangle
  }

  calcArea() {
    // calculate the area of the rectangle
  }
}
```
