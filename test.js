const data = [
  {
    id: 1,
    body: "It's important to note that conditional rendering should be used carefully, as it can make your code more complex and harder to maintain. It's generally a good idea to minimize the amount of conditional rendering in your code and to use it only when necessary.",
  },
  {
    id: 2,
    body: "The forEach() method is an array method in JavaScript that executes a provided function once for each element in the array, in order. It does not return a new array, but instead modifies the original array.Here's an example of how to use the forEach()const colors = ['red', 'green', 'blue'];colors.forEach(function(color) {console.log(color);}); This will log each color in the colors array to the console.You can also pass a second argument to the callback function that represents the index of the current element in the array. For example: Note that the forEach() method does not stop executing the callback function when it returns false. If you want to stop the loop code when a certain condition is met, you can use the break statement inside the callback function.",
  },
];

// console.log(data[0].body.includes("code"));

const testArray = data.filter((item) => (item.body).includes("cojjde"));
console.log(testArray);
