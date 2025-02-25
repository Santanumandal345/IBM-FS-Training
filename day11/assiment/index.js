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

// Example usage:
console.log(removeDup([1, 2, 3, 2, 4, 5, 1, 6])); // Output: [1, 2, 3, 4, 5, 6]



