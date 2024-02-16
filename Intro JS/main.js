

//Level Low


const myFirstName = "Nahiara"
console.log (myFirstName)

const myLastName = "Julian"
const myAge = 19
const myPet = "Bernie"
const petAge = 5

const fullName = myFirstName + " " + myLastName

const presentationText = `My name is ${myFirstName} ${myLastName} and I am ${myAge} years old.
My pet is ${myPet} and he is ${petAge} years old.`

console.log (presentationText) 

//Level Medium
//1
let sumAges = petAge + myAge
console.log (sumAges)

let restAges = myAge - petAge
console.log (restAges)

let productAges = myAge * petAge
console.log (productAges)

let divisionAges = petAge / myAge
console.log (divisionAges)

//2
const student = {
    name: "Nahiara",
    lastName: "Julian",
    age: 19,
    gender: "F",
    height: 1.61,
}

console.table ("Name:" + " " + student.name)
console.table ("Last name:" + " " + student.lastName)
console.table ("Age:" + " " + student.age)
console.table ("Gender:" + " " +student.gender)
console.table ( "Height:" + " " + student.height)

//3
const pet = {
    name: "Bernie",
    age: 6,
    species: "pet",
    hairColor: "black",
    eyeColor: "brown",
}

console.table ("Name:" + " " + pet.name)
console.table ("Age:" + " " + pet.age)
console.table ("Species:" + " " + pet.species)
console.table ("Hair color:" + " " + pet.hairColor)
console.table ("Eye color:" + " " + pet.eyeColor)

//4
const fruits = ["pears", "apples", "bananas", "grapes", "oranges"]
console.log (fruits)

console.log (fruits [0])
console.log (fruits [2])
console.log (fruits [3])
console.log (fruits [4])



//Level Hight

//1
let enterAge = Number(prompt("Enter your age"))
let iAmAdult = enterAge >= 18
console.log ("I am an adult:" + iAmAdult)



//2
const numbers = [1, 4, 7, 9, 12]
console.log (numbers)

console.log (numbers [0])
console.log (numbers [1])
console.log (numbers [2])
console.log (numbers [3])
console.log (numbers [4])

//3
const dad = {
    name:"Robert",
    lastName:"Julian", 
}

const mom = {
    name: "Elizabeth",
    lastName: "Massi",
}

const brother = {
    name: "Adriel",
    lastName: "Julian",
}

const sister = {
    name: "Melody",
    lastName: "Julian",
}

const sister2 = {
    name: "Lola",
    lastName: "Julian",
}

const family = [dad.name,mom.name,brother.name,sister.name,sister2.name]
console.log (family)

console.log (family [0])
console.log (family [1])
console.log (family [2])
console.log (family [3])
console.log (family [4])

//4
let randomText = sister2.name + " " + "bought" + " " + (numbers [3]) + " " + (fruits [2])
console.log (randomText)