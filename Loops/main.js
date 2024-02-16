//Level Low
//1
/*
for (let i = Number(prompt(`Enter a number between 1 and 100`)); i >= 1 && i <= 100; i--){
    console.log(i)
}

//2
let enterNum = Number(prompt(`Enter a number between 1 and 10`))
for (let i = 1; i >= 1 && i<=10; i++) {
    console.log(`${i} x ${enterNum} = ${i*enterNum}`)
}
*/
/*
//3
let enterNum = Number(prompt(`Enter a number, enter 0 for end`))
let addNumbers = 0
while (enterNum) {
    addNumbers = addNumbers + enterNum
    enterNum = Number(prompt(`Enter a number, enter 0 for end`))
}
alert(`The addition of the numbers entered is ${addNumbers}`)
/*

//4
let enterNum
let addNumbers = 0
do {
    enterNum = Number(prompt(`Enter a number, enter 0 for end`))
    addNumbers = addNumbers + enterNum
} while (enterNum && enterNum !=0);
alert(`The addition of the numbers entered is ${addNumbers}`)

//5
const student = {
    name: "Nahiara",
    lastName: "Julian",
    origin: "Argentina",
    studies: "Industrial Design",
}

for (const key in student) {
    console.log(key)
}
//6
for (const key in student) {
    console.log(student[key])
}


//Level Medium
//1
let secret = Number(prompt("What is the secret number?"))
let attempts = 1
do {
    if (secret > addNumbers){
        alert("The number entered is greater than the secret")
        secret = Number(prompt("What is the secret number?"))
    }else if (secret < addNumbers){
        alert("The number entered is less than the secret")
        secret = Number(prompt("What is the secret number?"))
    }
    attempts ++
} while (secret !== addNumbers);
if (secret == addNumbers){
    alert(`You got it right! The secret number was ${addNumbers} and you made ${attempts} attempts`)
}

//2
let enterNumber = Number(prompt("Enter a number"))

for (let i = 0; i <= enterNumber; i++) {
    if(enterNumber % i == 0){
        console.log(i)
    }
}

//3

/*
//4
const dateLimit = "1997-8-3"
const dates = ["1984-18-2","1998-3-2","1973-15-7","2024-31-10","2018-1-9"]
for (const date of dates){
    if (date >= dateLimit){
        console.log(date)
    }
}

//5
let colors = ["Red","Green","Blue","Violet","Orange","Black","White"]
for (const color of colors) {
    console.log(color)
}

//6
function createArrayColors() {
    let colors = ["Red","Green","Blue","Violet","Orange","Black","White"]
    for (const color of colors) {
        console.log(color)
    }
}
createArrayColors()

//7
let numbers =[5,7,1,3,50]
for (const number of numbers) {
    let double = `The number is ${number} and its double is ${number * 2}`
    console.log(double)
}

//8
const mother = {name:`Maria`,lastName:`Lopez`,age:`40`,member:`mother`}
const father = {name:`Juan`,lastName:`Perez`,age:`38`,member:`father`}
const daughter = {name:`Romina`,lastName:`Perez`,age:`13`,member:`daughter`}
const son = {name:`Tomás`,lastName:`Perez`,age:`10`,member:`son`}

let membersOfFamily = [mother,father,daughter,son]

function presentationOfFamily() {
    for (const member of membersOfFamily) {
        console.log(`Hello, I am ${member.name} and I am ${member.age} years old.`)
    }
}

presentationOfFamily()


//Level High
//1

//2
let numArray = [5,9,54,25,61,35,10,22,7,49]
function findLargestNumber(numArray) {
    let largest = numArray[0]
    for (let i = 0; i < numArray.length; i++) {
        if(numArray[i] > largest){
            largest = numArray[i]
        }
    }
    console.log(largest)
}
findLargestNumber(numArray)
*/
