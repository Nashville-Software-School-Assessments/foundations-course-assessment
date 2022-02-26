/*
    Remember to use comments to define the algorithm(s) needed
    BEFORE you write any code
*/

/*
    Responsibility:
        This function should receive both book objects as input
        and then add their prices together. It should return
        the sum of the prices.

    Parameters:
        1. (object) - A single, distinct book object
        2. (object) - A single, distinct book object

    Returns:
        (number) - The sum of the price of both books
*/
const addAndReturnSum = () => {
}


/*
    Responsibility:
        Provide just the title of a book

    Parameters:
        1. (object) - A single, distinct book object

    Returns:
        (string) - The title of the book object parameter
*/
const accessTitleAndReturn = () => {

}


/*
    Responsibility:
        Determine if a book should be stock on the Bargains table in the store

    Parameters:
        1. (object) - A single, distinct book object

    Returns:
        (boolean) - `true` if the price of the book is less than $20, otherwise `false`
*/
const isBargainBook = () => {

}

const taiko = { id: 1, title: "Taiko", author: "Eiji Yoshikawa", price: 19.00, yearPublished: 1998 }
const quicksilver = { id: 2, title: "Quicksilver", author: "Neal Stephenson", price: 34.00, yearPublished: 2003 }



// Invoke addAndReturnSum and specify the correct arguments
const sumOfBooks =

// If your function algorithm is correct, this should output "Sum of prices is 54"
console.log(`Sum of prices is ${sumOfBooks}`)


// Invoke accessTitleAndReturn and specify a correct argument value
const titleOfBook =

/*
    If your function algorithm is correct, this should output one of the following
        "Title of book is Taiko"
        or
        "Title of book is Quicksilver"
*/
console.log(`Title of book is ${titleOfBook}`)


// Invoke isBargainBook and specify a correct argument value
const placeOnBargainRack =


/*
    If your function algorithm is correct, this should output either
        "Should the book be a bargain? true"
    or
        "Should the book be a bargain? false"
*/
console.log(`Should the book be a bargain? ${placeOnBargainRack}`)
































































// **********  Do not touch this code  **********
export default { accessTitleAndReturn, addAndReturnSum, isBargainBook }
// **********  Do not touch this code  **********
