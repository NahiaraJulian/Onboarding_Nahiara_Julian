//Difficulty Level: Low
/*
//1
{
    let num1 = 4
    let num2 = 5
    
    if (num1 > num2){
        console.log (num1)
    }else{
        console.log (num2)
    }
}
    
//2
{
    if (num1 > num2){
        console.log(num1)
    }else if(num2 > num1){
        console.log(num2)
    }else{
        console.log("The numbers are equal")
    }
    
}

//3
{
    if (num1 == num2){
        console.log("The numbers are equal")
    }else{
        console.log("The numbers are different")
    }
}

//4
{
    let date1 = "2018-9-2"
    let date2 = "2023-7-5"

    if (date1 > date2){
        console.log(`The date ${date1} is greater than ${date2}`)
    }else if (date2 > date1){
        console.log(`The date ${date2} is greater than ${date1}`)
    }else{
        console.log(`The date are the same`)
    }
}

//5
{
    let date3 = "2024-10-5"
    let date4 = "2024-10-5"

    if (date4 > date3){
        console.log(`The date ${date4} is greater than ${date3}`)
    }else if (date3 > date4) {
        console.log(`The date ${date3} is greater than ${date4}`)
    }else{
        console.log(`The date are the same`)
    }
}

//6
{
    let numA = 5
    let numB = 7
    let numC = 9

    if (numA > numB && numA > numC){
        console.log(`The number ${numA} is the largest`)
    }else if (numB > numA && numB > numC){
        console.log(`The number ${numB} is the largest`)
    }else{
        console.log(`The number ${numC} is the largest`)
    }
}
*/
//Dificilty Level: Medium
//1
/*
{
    const enterColor = prompt ("Enter one color: red, blue or green").toLowerCase()
    const red = "The color of passion."
    const blue = "The color of the sea."
    const green = "The color of nuture."
    
    switch (enterColor){
        case "red":
        alert(`Red: ${red}`)
            break;
        case "blue":
            alert(`Blue: ${blue}`)
            break;
        case "green":
            alert(`Green: ${green}`)
            break;
        default:
            alert("Invalid Color")
            break;
    }
}

//2
{
    const num1 = Number(prompt("Enter the first number (1-100)"))
    const num2 = Number(prompt("Enter the second number (1-100)"))
    if(num1 <= 1 || num1 >= 100 || num2 <= 1 || num2 >= 100){
        alert("The numbers must be from 1 to 100")
    }else{
        const operacion = (prompt("Enter the operation: addition, subtraction, multiplication, division")).toLowerCase ()
        switch(operacion) {
            case "addition":
                alert(`The addition of ${num1} + ${num2} is ${num1 + num2}`)
                break;
            case "subtraction":
                alert(`The subtraction of ${num1} - ${num2} is ${num1 - num2}`)
                break;
            case "multiplication":
                alert(`The multiplication of ${num1} * ${num2} is ${num1 * num2}`)
                break;
            case "division":
                alert(`The division of ${num1} / ${num2} is ${num1 / num2}`)
                break;
            default:
                alert("Invalid operation")
        }
    }
}
*/

/*
//3
{
    let person1 = {
        name: "Mia",
        age: 25,
        height: 1.50,
    }
    let person2 = {
        name: "Mary",
        age: 37,
        height: 1.42,
    }

    if(person1.age > person2.age && person1.height > person2.height){
        console.log(`${person1.name} is older and taller than ${person2.name}.`)
    }else if(person1.age > person2.age && person1.height < person2.height){
        console.log(`${person1.name} is the older and ${person2.name} is the taller of the two.`)
    }else if(person1.age < person2.age && person1.height > person2.height){
        console.log(`${person2.name} is the older and ${person1.name} is the taller of the two`)
    }else if(person1.age < person2.age && person1.height < person2.height){
        console.log(`${person2.name} is older and taller than ${person1.name}`)
    }
}
    */
/*
//4
let name = prompt("Enter your name")
let age = Number(prompt("Enter your age"))
let height = Number(prompt("Enter your height"))
let vision = Number(prompt("Enter the state of your vision, from 1 to 10"))
if(age >= 18 && height > 1.10 && vision >= 8){
    console.log("You are qualified to drive")
}
*/

//5
/*
{
    let age = Number(prompt("Enter your age"))
    if(age <= 12){
        alert("You are a infant")
    }else if(age <= 18){
        alert("You are an adolescent")
    }else if(age <= 45){
        alert("You are a older young")
    }else if(age <= 100){
        alert("You are a elderly")
    }else if(age > 100){
        alert("Are you really that old?")
    }
}
*/

/*
//6
{
    let multiplyBy = (prompt("Enter a number from 1 to 3"))
    let chosenNum = Number(prompt("Enter the number you want"))

    switch(multiplyBy){
        case "1":
            alert(`The number entered is ${chosenNum}`)
            break;
        case "2":
            alert(`Twice the number entered is ${chosenNum * 2}`)
            break;
        case "3":
            alert(`Three times the number entered is ${chosenNum * 3}`)
            break;
        default:
            alert(`The value is not allowed`)    
    }
}
*/

//Difficulty level: Hight
//1 (como en la consigna)


    let customerName = prompt("Enter your name")
    let myName = "Nahiara"
    let welcome = `Welcome ${customerName}`
    let farewell = `Oh, we're sorry! You can leave this page`
    
    if(customerName == myName){
        alert(welcome)
    }else{
        let pass = prompt("Do you have a normal or VIP pass?").toLowerCase()
        if(pass == "vip"){
            alert(welcome)
        }else{
            let entrance = prompt("Do you have a entrance?").toLowerCase()

            if(entrance == "yes"){
                let useEntr = prompt("Do you want to use it?").toLowerCase()
                if(useEntr == "yes"){
                    alert(welcome)
                }else if(useEntr == "no"){
                    alert(farewell)
                }
            }else if(customerName !== myName || pass == "normal" || entrance == "no"){
                let buy = prompt("Do you want to buy?").toLowerCase()
                switch(buy){
                    case "no":
                        alert(farewell)
                        break;
                    case "yes":
                        let money = Number(prompt("How much money do you have available?"))
                        if(money >= 1000){
                            alert(`Good! that was successful. ${welcome}`)
                        }else if(money < 1000){
                            alert(farewell)
                        }
                }
            }
        }
    }



/*
//1 - variante (sin pass: normal)
{
    let myName = "Nahiara"
    let customerName = prompt("Enter your name")
    let welcome = `Welcome ${customerName}`
    let farewell = `Oh, we're sorry! You can leave this page`

    switch(customerName){
        case myName:
            alert(welcome)
            break;
        default:
            let pass = prompt("Do you have a VIP pass?").toLowerCase()
            switch(pass){
                case "yes":
                    alert(welcome)
                    break;
                default:
                    let entrance = prompt("Do you have a entrance?").toLowerCase()
                    if(entrance == "yes"){
                        let useEntr = prompt("Do you want to use it?").toLowerCase()
                        if(useEntr == "yes"){
                            alert(welcome)
                        }else if(useEntr == "no"){
                            alert(farewell)
                        }
                    }else if(customerName !== myName || pass == "no" || entrance == "no"){
                        let buy = prompt("Do you want to buy?").toLowerCase()
                        switch(buy){
                            case "no":
                                alert(farewell)
                                break;
                            case "yes":
                                let money = Number(prompt("How much money do you have available?"))
                                if(money >= 1000){
                                    alert(`Good! that was successful. ${welcome}`)
                                }else if(money < 1000){
                                    alert(farewell)
                                }
                        }
                    }               
            }

    }
}
        
*/
