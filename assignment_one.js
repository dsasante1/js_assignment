// Exercise1: Calculate the area and perimeter of a rectangle


// Step 1: Define variables for length and width of the rectangle

const length = 5
let width = 10
let area = 0


// Step 2: Calculate the area of the rectangle using the formula: area = length * width

area = length * width
console.log(`area = ${area}`)

// Step 3: Update the width by adding 2 to it using assignment operator

width += 2

// Step 4: Calculate the perimeter of the rectangle using the formula: perimeter = 2 * (length + width)

let perimeter = 2 * (length + width)

console.log(`perimeter = ${perimeter}`)


// Step 5: Display the calculated area and perimeter using string interpolation

console.log(`the area of the triangle is ${area}
the perimeter of the triangle is ${perimeter}`)


// Step 6: Calculate the square root of the area using the Math object

let areaSquareRoot = Math.sqrt( area );


// Step 7: Display the square root of the area using string interpolation

console.log(`the square root of area ${area} is ${areaSquareRoot}`)

// Step 8: Convert the area to a string and display its length using string methods

let stringArea = area.toString().length

console.log(`the string length of area is ${stringArea}`)
