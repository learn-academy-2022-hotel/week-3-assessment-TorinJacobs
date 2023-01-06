// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// PSEUDOCODE: 
    // Declare a function called fibonacciArray
    // input: a number
    // output: an array of numbers equal in length and value to the Fibonacci sequence of the input
// TEST
describe("fibonacciArray", () => {
  it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence", () => {
    const fibLength1 = 6
    // Expected output: [1, 1, 2, 3, 5, 8]
    const fibLength2 = 10
    // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    expect(fibonacciArray(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibonacciArray(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})

// GOOD FAIL:
// ➜  week-3-assessment-TorinJacobs git:(week-3-torin-jacobs) ✗ yarn jest
// yarn run v1.22.19
// warning package.json: No license field
// $ /Users/learnacademy/Desktop/week-3-assessment-TorinJacobs/node_modules/.bin/jest
//  FAIL  ./code-challenges.test.js
//   fibonacciArray
//     ✕ takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence

//   ● fibonacciArray › takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence

//     ReferenceError: fibonacciArray is not defined

//       22 |     const fibLength2 = 10
//       23 |     // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
//     > 24 |     expect(fibonacciArray(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
//          |     ^
//       25 |     expect(fibonacciArray(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
//       26 |   })
//       27 | })

//       at Object.expect (code-challenges.test.js:24:5)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.185 s
// Ran all test suites.
// error Command failed with exit code 1.
// info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

// b) Create the function that makes the test pass.
//  PROCESS: The fibonacci sequence involves a sequence of numbers, starting at 0 and followed by 1 where by each following number involves the sum of the two prior numbers in the sequence. For instance starting with 0 then 1 the next number in the sequence is the sum of 0+1=1 because those are the two numbers prior to it's placement in the sequence. Following this logic we get 1+1=2, then 2+1=3. The sequence of the sums create the fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, and so on. However, since the expected output array starts with a value of 1 at the 0 index and also 1 at the 1 index, I will utilize those values as a variable in my function for simplicity. A for loop works well for this since it will continue running code until the specified condition is met which will be the fibLength number.

const fibonacciArray = (number) => {
  let fibStart = [1, 1]
  for (let i=2; i<number; i++) {
    fibStart.push(fibStart[i-1] + fibStart[i-2])
  }
  return fibStart
}
// PASS  ./code-challenges.test.js
//   fibonacciArray
//   ✓ takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.17 s
// Ran all test suites.
// ✨  Done in 0.93s.


// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// PSEUDOCODE:
// Declare a function called minutesStudied
// INPUT: Object
// OUTPUT: Array of the values sorted from least to greatest
// TEST
describe("minutesStudied", () => {
  it("returns an array of the values sorted from least to greatest", () => {
    expect(minutesStudied(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
    // Expected output: [15, 15, 20, 30, 30, 60, 90]
    expect(minutesStudied(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
    // Expected output: [10, 15, 20, 45, 60, 65, 100]
  })
})

// GOOD FAIL:
// minutesStudied
// ✕ returns an array of the values sorted from least to greatest

// ● minutesStudied › returns an array of the values sorted from least to greatest

// ReferenceError: minutesStudied is not defined

//   91 | describe("minutesStudied", () => {
//   92 |   it("returns an array of the values sorted from least to greatest", () => {
// > 93 |     expect(minutesStudied(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
//      |     ^
//   94 |     expect(minutesStudied(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
//   95 |   })
//   96 | })

//   at Object.expect (code-challenges.test.js:93:5)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 passed, 2 total
// Snapshots:   0 total
// Time:        0.186 s, estimated 1 s
// Ran all test suites.
// error Command failed with exit code 1.
// info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

// b) Create the function that makes the test pass.
// PROCESS: declare a function called minutesStudied that inputs an object as an argument and uses the .sort method to return the values in ascending order to an array.

const minutesStudied = (object) => {
  return Object.values(object).sort((a,b)=>a-b)
}
// TEST PASSED:
//  PASS  ./code-challenges.test.js
// minutesStudied
//   ✓ returns an array of the values sorted from least to greatest

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.166 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.72s.
// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.
// TEST
 describe("sumGrowth", () => {
  it("takes in an array and returns an array of the accumulating sum", () => {
    expect(sumGrowth(accountTransactions1)).toEqual([100, 83, 60, 51])
    expect(sumGrowth(accountTransactions2)).toEqual([250, 161, 261, 165])
    expect(sumGrowth(accountTransactions3)).toEqual([])
 })
 })
const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

// GOOD FAIL:
//sumGrowth
// ✕ takes in an array and returns an array of the accumulating sum

// ● sumGrowth › takes in an array and returns an array of the accumulating sum

//   ReferenceError: sumGrowth is not defined

//     171 |  describe("sumGrowth", () => {
//     172 |   it("takes in an array and returns an array of the accumulating sum", () => {
//   > 173 |     expect(sumGrowth(accountTransactions1)).toEqual([100, 83, 60, 51])
//         |     ^
//     174 |     expect(sumGrowth(accountTransactions2)).toEqual([250, 161, 261, 165])
//     175 |     expect(sumGrowth(accountTransactions3)).toEqual([])
//     176 |  })

//     at Object.expect (code-challenges.test.js:173:5)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 2 passed, 3 total
// Snapshots:   0 total
// Time:        0.197 s, estimated 1 s
// Ran all test suites.
// error Command failed with exit code 1.

// b) Create the function that makes the test pass.
// INPUT: array of numbers
// OUTPUT: array of numbers with each accumulated sum
// PROCESS: declare a function sumGrowth that iterates through the array to produce the specified output by adding each sequential indexed value to the sum of the prior indexed values. An array of 0 will produce an empty array.

const sumGrowth = (arr) => {
  let growingNum = 0
  return arr.map((value) => {
    growingNum = growingNum + value
    return growingNum
  })
}
