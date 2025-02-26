//Part 1: Objects & Methods 
// Problem 1: Create a Student Management System (Using Objects)
const student = {
    name: "Santanu mandal",
    rollNumber: 101,
    marks: {
        Math: 80,
        Science: 65,
        English: 50,
        History: 70
    },
    getAverageMarks: function() {
        const marksArray = Object.values(this.marks); 
        const totalMarks = marksArray.reduce((sum, mark) => sum + mark, 0); // Calculate sum of all marks
        return totalMarks / marksArray.length; // Calculate and return average
    },
    checkPassOrFail: function() {
        return this.getAverageMarks() > 40 ? "Passed" : "Failed"; // Check passing criteria
    }
};

console.log(student.getAverageMarks());  
console.log(student.checkPassOrFail());  









//Q2Problem 2: Library System (Nested Objects & Methods)


const library = {
    books: {
        "Atomic Habits": { author: "James Clear", availableCopies: 3 },
        "The Alchemist": { author: "Paulo Coelho", availableCopies: 5 }
    },
    borrowBook: function(bookName) {
        if (this.books[bookName] && this.books[bookName].availableCopies > 0) {
            this.books[bookName].availableCopies -= 1;
            console.log(`You have borrowed "${bookName}".`);
        } else {
            console.log(`Sorry, "${bookName}" is not available.`);
        }
    },
    returnBook: function(bookName) {
        if (this.books[bookName]) {
            this.books[bookName].availableCopies += 1;
            console.log(`You have returned "${bookName}".`);
        } else {
            console.log(`"${bookName}" does not exist in the library.`);
        }
    }
};

// Borrow a book
library.borrowBook("Atomic Habits");
console.log(library.books["Atomic Habits"].availableCopies);  // Output: 2

// Return a book
library.returnBook("Atomic Habits");
console.log(library.books["Atomic Habits"].availableCopies);  // Output: 3

// Part 2: Conditions & Loops 
// Problem 3: Generate Multiplication Table (For Loop)


function generateTable(num, limit) {
    for (let i = 1; i <= limit; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

// Example 
generateTable(5, 10);




// Problem 4: FizzBuzz (If-Else Conditions)


function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

// Example 
fizzBuzz(15);

//Part 3: String & Array Manipulations 
// Problem 5: Reverse a String Without Using .reverse()


function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]; 
    }
    return reversed;
}


console.log(reverseString("JavaScript")); // Output: tpircSavaJ

//Problem 6: Remove Duplicates from an Array



function removeDup(arr) {
    let unArr = []; 
    for (let i = 0; i < arr.length; i++) {
        if (!unArr.includes(arr[i])) { // Check if the element is already in the unique array
            unArr.push(arr[i]); // Add it if it's not already present
        }
    }
    return unArr;
}

// Example 
console.log(removeDup([1, 2, 3, 2, 4, 5, 1, 5,6])); // Output: [1, 2, 3, 4, 5, 6]

//Problem 7: Find the Longest Word in a Sentence
function longWord(sentence) {
    let words = sentence.split(" "); // Split sentence into an array of words
    let longest = ""; // Variable to store the longest word

    for (let word of words) {
        if (word.length > longest.length) {
            longest = word; // Update longest word if current word is longer
        }
    }

    return longest;
}


console.log(longWord("Coding is amazing and challenging")); // Output: "challenging"

// Part 4: Higher-Level Thinking 
// Problem 8: Custom Array Method (Creating Your Own .map())

function myMap(arr, callback) {
    let result = []; 
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr)); 
    }

    return result;
}


function myCallback(x) {
    return x * 2;
}


console.log(myMap([1, 2, 3, 4], myCallback)); // Output: [2, 4, 6, 8]


//Problem 9: Find the First Non-Repeating Character in a String 


function firstUniqueCharacter(str) {
    let charCount = {}; 

    
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the first character with a count of 1
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null; // Return null if no unique character is found
}

// Example 
console.log(firstUniqueCharacter("aabbcddce")); // Output: "e"

//Problem 10: Nested Loop Challenge – Find Pairs that Sum to a Target 




function findPairs(arr, target) {
    let pairs = []; // Array to store valid pairs

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) { // Start from the next index to avoid duplicate pairs
            if (arr[i] + arr[j] === target) {
                pairs.push([arr[i], arr[j]]);
            }
        }
    }

    return pairs;
}


console.log(findPairs([2, 4, 3, 5, 7, 8, 9], 10)); 
// Output: [ [3, 7], [2, 8], [5, 5] ]



// Problem 11: Implement a Stack in JavaScript

class Stack {
    constructor() {
        this.items = []; // Initialize an empty array to store stack elements
    }

    // Push a value onto the stack
    push(value) {
        this.items.push(value);
    }

    // Pop the last added value from the stack
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items.pop();
    }

    // Peek at the last added value without removing it
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items[this.items.length - 1];
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }
}

// Example usage:
let myStack = new Stack();
myStack.push(10);
myStack.push(20);
console.log(myStack.pop()); // Output: 20
console.log(myStack.peek()); // Output: 10
console.log(myStack.isEmpty()); // Output: false


// Question: - String Manipulation Challenge 
// You are given a string containing alphabets and numbers. Your task is to extract all numbers from the 
// string, sum them up, and return the new modified string where all numbers are replaced with their 
// sum. 


function replaceNumbersWithSum(str) {
    let sum = 0;
    let modifiedStr = str.replace(/\d+/g, (match) => {
        sum += Number(match); // Convert matched numbers to integers and add to sum
        return ""; // Remove numbers from the string
    });

    return modifiedStr + sum; // Append the sum at the end
}

// Exampl
console.log(replaceNumbersWithSum("abc123xyz45pq7")); // Output: "abc175pq"



// Question: - Find Most Frequent Element in an Array


function mostFrequentElement(arr) {
    const frequency = {};

    // Count the frequency of each element
    for (const num of arr) {
        frequency[num] = (frequency[num] || 0) + 1;
    }

    // Find the element with the maximum frequency
    let maxCount = -1;
    let mostFrequent = null;

    for (const num in frequency) {
        if (frequency[num] > maxCount) {
            maxCount = frequency[num];
            mostFrequent = num;
        }
    }

    return mostFrequent;
}

// Example usage
const inputArray = [1, 3, 2, 3, 4, 1, 3, 2, 3, 5];
const output = mostFrequentElement(inputArray);
console.log(output);  // Output: 3
