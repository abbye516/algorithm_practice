/*
let bank = 100
let wallet = 20

let withdraw = function (amount) {
    if (bank > 0) {
        bank -= amount
        wallet += amount
    }
    else {
        console.log('sorry bank has no money')
    }
}

let deposit = function(amount){
    if(wallet >0){
        wallet -= amount
        bank += amount
    }
    else{
        console.log('wallet is empty')
    }
}

deposit(25)
console.log(wallet)
*/

/* -------Random # Challenge ---------------

const randomNum = 3
let guesses = 0

let guess = function(number){
    if(number === randomNum){
        console.log(`you got it right in ${guesses} guesses`)
    }
    else{
        console.log('keep guessing')
        guesses++
    }
}
guess(2)
guess(2)
guess(3)


console.log(guesses)
*/
/* -------_Shopping cart challenge -------

let shoppingCart = []
let object = {}
let addToCart = function (itemName, itemPrice) {
    shoppingCart.push({name: itemName, price: itemPrice})
}

let priceCheck = function (itemName) {
    for (let i of shoppingCart) {
        if (i.name === itemName) {
           return console.log(`${i.price} shekels`)
        }
        else {
           return console.log(`item doesnt exist`)
        }
    }
}

let totalPriceCheck = function () {
    let totalPrice = 0
    for (let i of shoppingCart) {
      totalPrice += i.price
    }
    console.log(`The total price is $${totalPrice}`)
}

addToCart('apples', 6)
addToCart('oranges', 8)
addToCart('shoes', 4)
addToCart('shoes', 4)

priceCheck('ssdshoes')
 */
/*-----------------Highest Number -----------------
let array = [4,6,2,7,10,8,2]

let findHighestNum = function(){
    let biggestNum = 0
    for(let i of array){
       if(i > biggestNum){
           biggestNum = i
       }
    }
    console.log(biggestNum)
}

findHighestNum()
*/
/*----------Lowest Number---------------
let array = [3433, 34343434,3343432,3432, 2]

let findLowestNum = function(){
    let lowestnum = array[0]
    for(let i of array){
        if(i < lowestnum){
            lowestnum = i
        }
    }
    console.log(lowestnum)
}
findLowestNum()
*/

/*----------Greatest Occurring Number---------------
let array = [ 4, 6, 8, 3, 4, 7, 8, 2, 4]

let findMostOccuringNum = () => {
    let obj = {}
    for (i of array) {
        if (obj[i]) {
            obj[i]++
        }
        else {
            obj[i] = 1
        }
    }
    let mostCommon = 0
    let mostComNum
    for (o in obj) {
        if (obj[o] > mostCommon) {
            mostCommon = obj[o]
            mostComNum = o
        }
    }
    console.log(`Most common number is: ${mostComNum}`)
}
findMostOccuringNum()
*/
/*----------Promotion/Demotion Challenge----------------
let clerks = ["abby", "ethan", "jake", "gavi"]
let managers = ["leesh", "jorie", "zach"]
let ceo = ["mom"]

let promotion = (name) => {
    for(clerk of clerks){
        if(name === clerk){
            clerks.splice(name, 1)
            managers.push(name)
        }
        else{
            for(manager of managers){
                if(name === manager){
                    console.log(`${name} in managers`)
                    // managers.splice(name,1)
                    // ceo.push(name)
                }
                else{
                    for(c of ceo){
                        if(name === c){
                            return console.log(ceo)
                        }
                    }
                }
            }
        }
    }
}
promotion("jake")

console.log(ceo)
*/
/*-----summing two smallest Numbers------ 
let numbers = [1,2,3,4]
function sumTwoSmallestNumbers(numbers) {  
    let smallest 
    let secondsmallest
    for(number of numbers){
      if(number < smallest){
        smallest = number
      }
      else{
          smallest = number
      }
    }
    console.log(smallest)
  }

  sumTwoSmallestNumbers(numbers)
  */

/*--------COLT STEELE VIDEOS */
/*FINDING IF ARRAY 2 IS THE SQUARES OF ARRAY 1
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        console.log('false')
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    console.log('true')
    return true
}

same([1,2,3,2,5], [9,1,4,4,25])
*/

/*-------Valid anagrams--------

let validanagram = function (str1, str2) {
    if (str1.length !== str2.length) {
        console.log('not anagrams')
        return false
    }
    const counter = {}
    for (let i in str1) {
        let letter = str1[i]
        counter[letter] ? counter[letter]++ : counter[letter] = 1
    }
    for (let i in str2) {
        let letter = str2[i]
        if (!counter[letter]) {
            console.log('not anagrams')
            return false
        }
        else{
            counter[letter] -= 1
            console.log(counter)

        }
    }
    console.log('u have an anagram')
    return true
}
let word1 = "sdss"
let word2 = "sdsd"

validanagram(word1, word2)
*/
/*---------------Pointers method------------
// Count unique values:
// accepts a sorted Array and counts unique values//

let uniqueValues = function (array) {
    if (array.length === 0) {
        console.log('empty array')
        return 0
    }
    array.sort()
    let pointerOneIndex = 0
    for (let pointerTwoIndex = 1; pointerTwoIndex < array.length; pointerTwoIndex++) {
        if (array[pointerOneIndex] !== array[pointerTwoIndex]) {
            pointerOneIndex++z
            array[pointerOneIndex] = array[pointerTwoIndex]
        }
    }
    return console.log(pointerOneIndex + 1);
}
let array = []
uniqueValues(array)
*/

/*-------------Frequency counter- same frequency--*/
//udemy section 6 #1- check if to numbers countain same frequency of digits
//ex: 123 && 321 ---> same frequency
/*
function sameFrequency(num1, num2){
    let num1String = num1.toString()
    let num2String = num2.toString()
    if(num1String.length !== num2String.length){
        console.log('not same length')
        console.log(num2String)
        return false
    }
    let counter= {}
    for(let number of num1String){
        counter[number] ? counter[number]++ : counter[number] = 1
        console.log(counter)
    }
    for(let number of num2String){
      if(!(counter[number])){
          console.log('not same # of digits')
          return false
      }
      else{
          counter[number]--
      }
    }
    console.log('same amount of digits')
    return true
}
sameFrequency(2424245524, 2424542442)
*/
//////////////////////
//udemy section 6 #2- check if there are duplicates in an array or a number
// function areThereDuplicates() {
//     let counter = {}
//     for (let arg of arguments) {
//         if(!counter[arg]){
//             counter[arg] = 1
//         }
//         else{
//             console.log('theres a duplicate')
//             return true
//         }

//     }
//     console.log(`no dups`)
//     return false
// }
/*
//udemy why to solve using pointers
function areThereDuplicates(...args) {
    // Two pointers
    args.sort((a,b) => a > b);
    let start = 0;
    let next = 1;
    while(next < args.length){
      if(args[start] === args[next]){
          console.log('true')
          return true
      }
      start++
      next++
    }
    console.log('false')
    return false
  }

areThereDuplicates(1,2,33,1,2)
*/

////Multiple pointers- average pair #5
/*
function averagePair(arr, average) {
    let start = 0
    let next = arr.length-1
    if (arr.length < 0) {
        return false
    }
    while (start < next) {
        let avg = (arr[start] + arr[next]) / 2
        if (avg === average) {
            console.log(`true`)
            return true

        }
        else if (avg < average){
            start++
        }
        else{
            next--
        }
    }
    console.log(`false`)
    return false
}
averagePair([1, 2,3], 2.5)
*/

/*ex #6 Multiple pointers- if string two contains string one (same order)*/
/*
function isSubsequence(str1, str2) {
    let i = 0;
    let j = 0;
    while (i < str1.length) {
        if (str1[i] === str2[j]) {
            return true
        }
        i++;
        j++;
    }
    console.log(`false; pairs: ${str1[i]} and ${str2[j]}`)
    return false
}
isSubsequence('hello', ' world')
*/
//#7 finding max sum of a sub array in an array
function maxSubarraySum(arr, maxNum) {
    if (arr.length < maxNum) {
        return null
    }
    let maxSum = 0
    for (let i = 0; i < maxNum; i++) {
        maxSum += arr[i]
    }
    let tempSum = maxSum
    for (let i = maxNum; i< arr.length; i++) {
        //this adds the next number and subtracts the first of the array, instead of having ot loop
        //over the whole array again   
        tempSum = tempSum - arr[i - maxNum] + arr[i]
    }
    if (tempSum > maxSum) {
        maxSum = tempSum
        console.log(maxSum)
    }
    return maxSum
}
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)