
// Exercise 2: Calculate the total price of a shopping cart



// Step 1: Define variables for the initial price and quantity of an item

let initialPrice = 100

let itemQuantity = 35 



// Step 2: Display the initial price and quantity

console.log(`
initial price = ${initialPrice}
initial quantity of items = ${itemQuantity}
`)



// Step 3: Apply a discount of 20% using the decrement operator

let discount = 20 / 100

let updatePrice = initialPrice -= discount


// Step 4: Increase the quantity by 1 using the increment operator

itemQuantity += 1

// Step 5: Calculate the total price by multiplying the updated price and quantity

let totalPrice = initialPrice * itemQuantity


// Step 6: Display the updated price, quantity, and total price using template literals


console.log(`
update price = ${updatePrice} 
quantity = ${itemQuantity}
total price = ${totalPrice}`)