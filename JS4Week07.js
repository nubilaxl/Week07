/*
1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
       a. Programmatically subtract the value of the first element in the array from the value in the last element of the array.
          Do not use numbers to reference the last element, find it programmatically.
          ages[7] - ages[0] is not allowed!
       b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
       c. Use a loop to iterate through the array and calculate the average age.
*/
       let ages = [3, 9, 23, 64, 2, 8, 28, 93];

       // The arrow function to subtract the first and last elements of an array of numbers
       // takes an array parameter, ag. The arrow function calculates the difference by finding the position
       // of the last and first elements. The function uses the length property - 1 to obtain the last element.
       // The first element is always at the 0th position.
       const subtractFirstLast = (ag) => ag[ag.length-1] - ag[0]; 
       console.log("----- 1a). subtracting first and last");  
       
       // The function call to subract the first and last ages.
       console.log( subtractFirstLast(ages));

       ages.push(45);     // The push method adds the number 45 to a new element at the end of the array.
       console.log("----- 1b). subtracting after adding new age");
       console.log( subtractFirstLast(ages));


       // The average of ages is calculated through an arrow function with an array parameter, ag.
       const average = ag =>  {
              let total = 0;              // initializing the total
              for( i in ag)               // for each i element in the array
              {
                     total += ag[i];      // the total accumulates the array value for all elements
              }
              return total/ag.length;     // the average is the total divided by the number of elements (length)  
       };
       
       console.log("----- 1c). Average age including new age = 45");
       console.log( average(ages));

       ages.pop();
       console.log("----- 1c). Average age of original array");
       console.log( average(ages));

/*
2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
       a. Use a loop to iterate through the array and calculate the average number of letters per name.
       b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
*/
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let countArray= [];                              // Declaration of an array to hold the character counts
const avg = (arra) => {                          // The arrow function take an array of strings
       arra.forEach(element => {                 // A foreach arrow to process each string in the array
              countArray.push(element.length);   // Store the length of each string via pushing to the countArray
       });
        return average(countArray);              // Pass the countArray to average all of the string counts.

}
console.log("----- 2a). Average length of names");
console.log(avg(names));

let stringOfNames = "";
const concatNames = (nameArray) => {             // The arrow function takes an array of names as a parameter
       nameArray.forEach(element => {            // A foreach arrow processes each name string
              stringOfNames += element + ' ';    // Each element and a space is accumulated into string of names.
       });
      stringOfNames.trim();                      // Trims any excess spaces from front and back of the string
      return stringOfNames; 
};
console.log("----- 2b). Concatenating names in an array");
console.log(concatNames(names));

/*
3. How do you access the last element of any array?
*/
console.log("----- 3). Last element in an array");   // The last element of an array is found by finding the
console.log("array[array.length-1]");                 // position through the length property and subtracting 1.
/*
4. How do you access the first element of any array?
*/

console.log("----- 4). First element in an array");   // The first element of any array is at position zero.
console.log("array[0]");

/*
5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
       For example:

       let names = ["Kelly", "Sam", "Kate"];    // starting with this array
       let nameLengths = [5, 3, 4];             // create a new array
*/
let nameLengths = [];

const getLength = arra => {                      // The getLength arrow function takes an array of strings
       let tempLengths = [];
       arra.forEach(element => {                 // The string length is calculated for each element of the array 
              tempLengths.push(element.length);  // The lengths are put on the end of the array in succession.
       });
       return tempLengths;                       // The arrow function returns an array of length information
}
nameLengths = getLength(names);
console.log("----- 5). Array of name lengths");
console.log(nameLengths);
/*
6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
*/
let sumNumber = 0
const sumLengths = arra => {              // The arrow function takes an array of numbers
       arra.forEach(element => {          // Each element number is summed and accumulated.
            sumNumber += element;  
       });
       return sumNumber;                  // The summed numbers are returned.
}
console.log("----- 6). Sum of elements in name lengths array");
console.log(sumLengths(nameLengths));
/*
7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
*/
const nWords = (word, n) => {             // The arrow function takes a word and a number as parameters.
     let result = '';                     // Initializing the resultant string variable
     for ( i = 0; i < n; i++)             // In a for loop that processes n number of times,
              result += word;             // Accumulate a concatenated string of the same word 
     return result;                       // Returns the string result
}
console.log("----- 7). n number of concatenated words");
console.log(nWords("Hello", 3));


/*
8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
*/
const fullName = (a,b) => a + ' ' + b;    // Arrow function to concatenate two parameters with a space between
console.log("----- 8). Full name separated by space");
console.log(fullName("Mary", "Johnson"));
/*
9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
*/
const sumGreaterHundred = (arra) => {     // An arrow function takes an array of numbers as a parameter
       let sumTemp = 0;
       arra.forEach(element => {          // For each element in the array calculate the sum of numbers
              sumTemp += element;
       });
       return sumTemp > 100;              // Return a boolean result if the sum is greater than 100
}
console.log("----- 9). Is array sum greater than 100?");
console.log(sumGreaterHundred(ages));
console.log(sumGreaterHundred([40, 50, 9]));

/*
10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
*/
const averageOfArray = ag =>  {           // An arrow function takes an array of numbers as its parameter.
       let total = 0;
       for( i in ag)                      // For each index i in the array
       {
              total += ag[i];             // calculate the total of the elements
       }
       return total/ag.length;            // Return the total divided by the number of elements or average   
};
console.log("----- 10). Average of an array of numbers");
console.log(averageOfArray([10, 15, 20, 25, 50]));




/*
11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
*/
const isAverageGreater = (array1, array2) => averageOfArray(array1) > averageOfArray(array2);  // Arrow function
                                   // returns boolean result using the averageOfArray function in an expression
                                   // that compares the average of each array of numbers.
console.log("----- 11). Is the average of the first array of numbers greater than the second?");
console.log(isAverageGreater(ages, [10, 15, 20, 25, 50]));

/*
12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
*/

const willBuyDrink = (isHotOutside, moneyInPocket) => isHotOutside && (moneyInPocket > 10.50);
                                   // Arrow function takes a boolean and a number as parameters. The function
                                   // evaluates an And expression to determine the boolean result.

console.log("----- 12). Will you buy a drink if it is hot outside?");
console.log(willBuyDrink(true, 10.51));
console.log(willBuyDrink(false, 13));


/*
13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
*/
// I created a function to calculate a shopping cart total that includes sales tax. I created this function
// because many frontend websites in ecommerce have shopping carts. The function takes an array of item prices and 
// the sales tax rate for the state. The function accumulates the total of all item prices, then 
// returns the total cost including sales tax.

const checkoutTotal = (costOfGoodsArr, salesTaxRate = 0.08) => {
              let totalCost = 0;
              costOfGoodsArr.forEach(element => {
                     totalCost += element;      
       });
       return totalCost *(1 + salesTaxRate);     // The total cost is the total plus the tax.
};

console.log("----- 13). Checkout cart total of an array of prices and sales tax rate");
console.log(checkoutTotal([20.99, 15.49, 7.00], 0.091));