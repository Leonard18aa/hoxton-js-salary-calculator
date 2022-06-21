// Instructions
// - Create variables and/or calculate:
//   - The gross salary. Use 500 EUR for now.
//   - Employee pension contribution, use 5% if not sure 🙂 
//     - Taxable amount (salary minus pension)
//   - Now the #fun part - calculate how much the person is taxed based on:
//     - 0% tax on 0-80 EUR per month
//     - 4% on amounts between 80-250 EUR
//     - 8% on amounts between 250-450 EUR
//     - 10% on everything over 450 EUR.
// - Calculate the take-home pay by subtracting the tax from the taxable income
// - Output the final result to the console. [Come up with a nice understandable message]

// Get the app to work with the salary of 500 EUR first

let payment = 500
console.log("Your salary is " + payment)
let EmployeePensionContribution = 0.05 
let taxableAmount = payment * EmployeePensionContribution
console.log("You will be taxed " + taxableAmount + "for the Employee pension contribution")


let for80to250 = 0.04
let tax4percent = 170
let total1 = tax4percent * for80to250
console.log("From 80-250 euro tou will be taxed " + total1)
let for250to450 = 0.08
let tax8percent = 200
let total2 = tax8percent * for250to450
console.log("From 250-450 euro you will be taxed " + total2)
let for450over = 0.1
let tax10percent = 25
let total3 = tax10percent * for450over
console.log("From 450 euro over you will be taxed " + total3)

let totalTaxes = total1 + total2 + total3
console.log("Your total taxes are " + totalTaxes)

let YourNetPayement = payment - taxableAmount -totalTaxes
console.log("Your Net payment is " + YourNetPayement)
