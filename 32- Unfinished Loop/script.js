
// => Error
function createArray(number) {
    const newArray = [];
    for (let counter = 1; counter <= number;) {     // Not exit Update (Increment)
        newArray.push(counter);
    }
    return newArray;
}

// => The correct solution
function createArray(number) {
    const newArray = [];
    for (let counter = 1; counter <= number;counter++ ) {
        newArray.push(counter);
    }
    return newArray;
}