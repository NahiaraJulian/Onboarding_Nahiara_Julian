//Level Low
//1
/*
function add (){
    console.log(100 + 20)
}

//2
add()

//3
function add2 (num1, num2){
    console.log(num1 + num2)
}

//4
add2 (10,200)

//5
function add3 (num1, num2){
    let result = num1 + num2
    return result
}
let returnAdd = add3 (100,23)
console.log (returnAdd)

//6
const fnAnonymus = function(nu1, nu2){
    console.log(nu1+nu2)
}
fnAnonymus(3,3)

//Level Medium
//1
function greet (name){
    let greeting = `Hello ${name}`
    console.log(greeting)
}
greet("Nahia")

//2
const anonymus = function(number1, number2){
    let multiply = number1 * number2
    return multiply
}
console.log(anonymus(10,60))
console.log(anonymus(4,9))

//3
function area(base, height){
    let triangleArea = `The area of triangle is ${(base * height)/2}`
    return triangleArea
}
console.log(area(5,10))

//4
function perimeter(side1, side2, side3){
    let trianglePerimeter = `The perimeter of triangle is ${side1 + side2 + side3}`
    return trianglePerimeter
}
console.log (perimeter(4,4,2))

//5
function purchase(price, quantity){
    let totalPrice = price * quantity
    if(totalPrice >= 10 && totalPrice < 20){
        let discount = totalPrice - totalPrice * 0.1
        console.log(discount)
    }else if(totalPrice >= 20){
        let discount2 = totalPrice - totalPrice * 0.2
        console.log(discount2)
    }
}
purchase(100,2)
//6
function isAnAdult(age) {
    if (age >= 18){
        alert("You are an adult")
    }else{
        alert("You are not an adult")
    }
}
let enterAge = Number(prompt("Enter your age"))
isAnAdult(enterAge)

//Level High
//1
function payTax(income) {
   if (income <= 10000){
    let tax = income * 0.1
    alert(`The tax is: $${tax}`)
   }else if(income <= 20000){
    let tax = income * 0.15
    alert(`The tax is: $${tax}`)
   }else{
    let tax = income * 0.2
    alert(`The tax is: $${tax}`)
   }
}
let enterIncome = Number(prompt("Enter your annual income"))
payTax(enterIncome)

//2
function checkDay(numOfDay){
    if (numOfDay >=1 && numOfDay <=5){
        alert(`It is a business day`)
    }else if (numOfDay == 6 || numOfDay == 7){
        alert(`It's the weekend`)
    }else{
        alert(`It's not a day`)
    }
}
let numOfDay = Number(prompt("Enter a number to find out what day of the week it is"))
checkDay (numOfDay)

//3
function personalInformation(nameUser){
    if (nameUser == ""){
        alert("The name cannot be empty")
    }else{
        let lastNameUser = prompt("Enter your last name")
        
        if (lastNameUser == ""){
            alert("The last name cannot be empty")
        }else{
            let ageUser = prompt("Enter your age")
            
            if (ageUser == ""){
                alert("The age cannot be empty")
            }else{
                let user ={
                    name:`${nameUser}`,
                    lastName: `${lastNameUser}`,
                    age: `${ageUser}`
                }
                console.log(user)
            } 
        }
    }
}
let nameUser = prompt("Enter your name")
personalInformation (nameUser)
*/

//4
function greet(name){
    alert(`My name is ${name}`)
}
function calculateAge(yearBirth, currentYear){
    let age = currentYear - yearBirth
    alert(`My age is ${age}`)
}
function present(){
    let enterName = prompt("Enter your name")
    greet(enterName)
    
    let yearBirth = Number(prompt("Enter your year of birth")) 
    let currentYear =  Number(prompt("Enter the current year"))
    calculateAge(yearBirth, currentYear)

    alert(`Welcome ${enterName}`)
}

present()