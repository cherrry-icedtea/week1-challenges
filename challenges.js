
// 1
/* challenge one! create a program that stores what you eat today for breakfast
lunch, and dinner, returns a string with all of them in it*/


// let mealStore = (meal1, meal2, meal3) => {
//     meal1 = ("breakfast:" + meal1)
//     meal2 = ("lunch:" + meal2)
//     meal3 = ("dinner:" + meal3)

//     return daysFood = `${meal1}, ${meal2}, ${meal3}`
// }

// let firstFood = "pancakes", secondFood = "blt", thirdFood =  "steakandchips";
// console.log(mealStore(firstFood, secondFood, thirdFood))


//2
/* pass in a parameter called num, if less than or equal to zero, return message, 
if div by 3 return "fizz" 
if div 5 return "buzz"
if both, return fizzbuzz
if neither return num*/

// const fbmes = ["Number chosen must be above 0", "fizz", "buzz", "fizz buzz"]

// const fbz = (num1) => {
//     if (num1 <= 0) {
//         return fbmes[0]
//     } else if (((num1 % 3) === 0) && ((num1 % 5) ===0)) {
//         return fbmes[3]
//     } else if ((num1 % 3) === 0) {
//         return fbmes[1]
//     } else if ((num1 % 5) === 0) {
//         return fbmes[2]
//     } else {
//         return num1
//     }
// }

// console.log(fbz(15))


// 3
//DO AGAIN LATER DOESN'T WORK+

// let checkEven = (num1, num2) => {

//     if (typeof num1), {
//         return answer = "make sure you input 2 numbers"
//     }

// }

// console.log(checkEven(5, 6))



// 4 
/* random number generator that generates 6 random numbers between 1-50, add them to an array and return the array */
const nums = [5];
let numText = ""
let numRand = () => {

    for (let i = 0; i < (5); i++) {
        nums.push(Math.floor((Math.random() * 50) + 1))
        
    //     if (i = 0) {
    //         numText = nums[i]
    //    } else {
    //     numText = (numText + ", "+nums[i])
    //    }

    }
    return nums
}

console.log(numRand())