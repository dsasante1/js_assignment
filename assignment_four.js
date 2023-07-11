// Exercise 4: Manipulating and displaying information from a user input


// Step 1: Store the user's full name into a const variable

const fullUserName = 'ama ghana'

// Step 2: Extract the first name and last name from the user input

const firstName =  fullUserName.split(' ')[0]

const lastName =  fullUserName.split(' ')[1]


// Step 3: Capitalize the first letter of the first name


const capitalizeFirstName = firstName[0].toUpperCase() + firstName.slice(1)


// Step 4: Reverse the last name

const lastNameReveresed = lastName.split('').reverse().join('')

// Step 5: Count the number of characters in the full name

const numberOFCharacters = fullUserName.trim().length


// Step 6: Check if the full name contains the letter 'a'

const hasA = fullUserName.includes('a')


// Step 7: Display the extracted information using template literals

console.log(`
full name = ${fullUserName}

first name = ${firstName}

last name = ${lastName}

capitalize first name = ${capitalizeFirstName }

last name reversed = ${lastNameReveresed}

number of characters = ${numberOFCharacters}

does the fullname has an a = ${hasA}

`)

