console.log("Hey there! I am using Javascript")
let total = 3 + 4;
if (3 == 3) {
    console.log("Hey I am in!");
}
let random = Math.random();
if (random > 6) {
    console.log("It's Correct!!");
} else {

    console.log("It's incorrect");
}
let num = 3;
if (num % 2 === 0) {
    console.log("even")
} else {
    console.log("odd")
}
// const day = prompt('Enter a day').toLowerCase();
// if (day === 'monday' && day.indexOf(' ')) {
//     console.log("Ughh Why are the modays even come!");
// } else if (day === 'saturday') {

//     console.log("Saturdays are best as sundays are following")
// }

const userInput = prompt('Enter your name')
if (userInput) {
    console.log("True");
} else {
    console.log("False")
}

// let firstName = prompt("Enter your first name")
// if (!firstName) {
//     firstName = prompt("Try again")
// }
const day = 2;
switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("No words")

} 