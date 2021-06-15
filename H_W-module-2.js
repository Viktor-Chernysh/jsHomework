// ==========1
// function checkAge(age) {
//   if (age >= 18) { // Change this line
//     return "You are an adult";
//   }

//   return "You are a minor";
// }


// =============2
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line 

//   if (password === ADMIN_PASSWORD) { 
//     return "Welcome!"
//   } 
     
//   return "Access denied, wrong password!";
//   // Change code above this line
// }

// =============3
// function checkStorage(available, ordered) {
//   // Change code below this line

//   if (ordered === 0) {
//    return "Your order is empty!";
//   } 
//   if (ordered > available) {
//    return "Your order is too large, not enough goods in stock!";
//   }
  
//   return "The order is accepted, our manager will contact you";
// }

// ============5
// const fruits = ["apple", "plum", "pear", "orange"];

// // Change code below this line
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1];


// ================6
// const fruits = ["apple", "plum", "pear", "orange"];

// // Write your code under this line
// fruits[1] = "peach";
// fruits[3] = "banana";


// =============7
// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const fruitsArrayLength = fruits.length;


// ==============8
// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex]


// ==================9
// function getExtremeElements(array) {
//   // Change code below this line
//   const firstElementOfArray = array[0];
//   const lastElementOfArray = array[array.length - 1];
//   return [firstElementOfArray, lastElementOfArray]

//   // Change code above this line
// }
                //  Variant 2
//  function getExtremeElements(array) {
//   // Change code below this line

// array.splice(1, array.length - 2)
//   // Change code above this line
//   return array
// }

// =================10
// function splitMessage(message, delimeter) {
//   let words;
//   // Change code below this line
//   words = message.split(delimeter)
//   // Change code above this line
//   return words;
// }


// ================11
// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
// return message.split(' ').length * pricePerWord
//    // Change code above this line
// }

           
// ================12
// function makeStringFromArray(array, delimeter) {
//   let string;
//   // Change code below this line
//   string = array.join(delimeter)
//   // Change code above this line
//   return string;
// }

// ===================13
//  function slugify(title) {
//   // Change code below this line
//  const slug = title.toLowerCase().split(' ').join("-")

//  return slug
//   // Change code above this line
// }

// ==================14
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);


// ===================15
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line


// ===============16
// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line

// const newArray = firstArray.concat(secondArray);
 
//   if (newArray.length > maxLength) {
//      newArray.length = maxLength
//   return newArray.slice()
//   }
  
// return newArray
//     // Change code above this line
//   }

                    //  Variant2
// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
// let newArray = firstArray.concat(secondArray);
//   newArray.length = maxLength
// return newArray.length > maxLength ? newArray.slice() : newArray

//     // Change code above this line
//   }


// =======================17
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Change this line
//   console.log(i);
// }


// ===============18
// function calculateTotal(number) {
//  // Change code below this line
//   let total = 0;
// for (let i = 0; i <= number; i += 1) {
// total +=i
// }
// return total

//   // Change code above this line
// }

// ==============19
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i +=1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }


// ====================22
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
// for (let i = 0; i < order.length; i += 1) {
// total += order[i]
// }
//   // Change code above this line
//   return total;
// }

// =================21
// function findLongestWord(string) {
//   // Change code below this line
// const newString = string.split(' ')
// let longestWord = string[0]

// for (i = 0; i < newString.length; i += 1) {
// if (longestWord.length < newString[i].length) {
// longestWord = newString[i]
// }
// }
// return longestWord
//   // Change code above this line
// }


// ==================22
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
// for (let i = min; i <= max; i += 1) {

// numbers.push(i)
// }
//   // Change code above this line
//   return numbers;
// }


// ======================23
// function filterArray(numbers, value) {
//   // Change code below this line
//   const newArray = [] 
// for (let number of numbers) {
//   if (number > value) {
    
//       newArray.push(number)
//   }
// }

// return newArray
//   // Change code above this line
// }

// ================24
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit); // Change this line
// }

// =================25
// function getCommonElements(array1, array2) {
//   // Change code below this line
//   const newArray = [];
// for (const arr of array1) {
// if (array2.includes(arr) === true) {
// newArray.push(arr)
// }
// }

// return newArray;
//  // Change code above this line
// }


// ================26
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (let number of order) {
//     total += number;
//   }

//   // Change code above this line
//   return total;
// }

// ===================27
// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (let number of numbers) {
    
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }

// =======================28
// const a = 3 % 1;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 3;


// =======================29
// function getEvenNumbers(start, end) {
//    // Change code below this line
// const newArray = [];
//   for (let i = start; i <= end; i += 1) {
//   if (i % 2 === 0) { 
//   newArray.push(i)
//   }
//   }
// return newArray

//     // Change code above this line
//   }


// ==========================30
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// ======================31
// function findNumber(start, end, divisor) {
//   // Change code below this line
//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {      
//       return i;
//     }
//   }

//   return i;
//   // Change code above this line
// }


// =================32
// function includes(array, value) {
//   // Change code below this line
// for (let arr of array) {
// if (arr === value) {
// return true
// }
// }
//   return false
//   // Change code above this line
// }
