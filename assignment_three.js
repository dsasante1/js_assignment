

// Exercise 3: Calculate the compound interest and display a savings summary


// Step 1: Define variables for principal amount, interest rate, and time period

let principalAmount = 100

let interestRate = 15

let timePeriod = 5

let numberInterestApplied = 3


// Step 2: Calculate the compound interest using the formula: A = P * (1 + r/n)^(nt)

let compoundInterest = principalAmount * (1 + interestRate / numberInterestApplied )^(numberInterestApplied * timePeriod)


// Step 3: Round the compound interest to 2 decimal places using the toFixed() method

compoundInterest = compoundInterest.toFixed(2)


// Step 4: Display the compound interest

console.log(`compound interest ${compoundInterest}`)


// Step 5: Update the interest rate by decrementing it by 0.01 using the decrement operator

interestRate -= 0.01


// Step 6: Calculate the new compound interest with the updated interest rate


let updateCompoundInterest = principalAmount * (1 + interestRate / numberInterestApplied )^(numberInterestApplied * timePeriod)


// Step 7: Calculate the difference between the new and previous compound interests

let compoundInterestDifference = updateCompoundInterest - compoundInterest

// Step 8: Display the new compound interest and the difference compared to the previous interest

console.log(`
compound Interest = ${compoundInterest}
updated compound interest = ${updateCompoundInterest}
`)

// Step 9: Convert the compound interest to a string and extract the cents using string methods

let compoundInterestString = compoundInterest.toString()

let cent = compoundInterestString.slice(compoundInterestString.indexOf('.'))


// Step 10: Display the extracted cents from the compound interest

console.log(`cent = ${cent}`)

// Step 11: Calculate the total amount by adding the principal and compound interest


let totalAmount = compoundInterest + principalAmount

// Step 12: Display the total amount using string interpolation and the toLocaleString() method

console.log(`total amount = ${totalAmount.toLocaleString()}`)




