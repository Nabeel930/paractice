"use strict";
//question 1
console.log("Hello World");
//question 2
let temp = 67;
if (temp < 20) {
    console.log("its cold");
}
//question 3
let apples = 10;
apples -= 3;
console.log(apples);
//question 4
let fname = "nabeel";
let lname = "imran";
let fullname = fname + lname;
console.log(fullname);
//question 5
let no = 5;
if (no > 3) {
    console.log("yes");
}
else {
    console.log("no");
}
// medium
//q6
function calculateArea(radius) {
    return 2 * 3.14 * radius * radius;
}
let x = calculateArea(10);
console.log(x);
//q7
for (let x = 1; x <= 50; x++) {
    if (x % 3 == 0) {
        console.log("fizz");
    }
    else if (x % 5 == 0) {
        console.log("buzz");
    }
    else {
        console.log(x);
    }
}
//q8
let temperature = [100, 67, 98, 90, 10];
let large = temperature[0];
for (let x = 1; x < temperature.length; x++) {
    if (temperature[x] > large) {
        large = temperature[x];
    }
}
console.log("large =", large);
//q9
let age = 25;
if (age < 18) {
    console.log("minor");
}
else {
    console.log("adult");
}
//q10
let array = [1, 2, -6, 6, -9, 8, -2, 4];
function checkno(noarray) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            count++;
        }
    }
    return count;
}
let result = checkno(array);
console.log(result);
//q11
let words = ["apple", "banana", "apricot", "mango", "avacado"];
let startingWithA = [];
function findA(words) {
    for (let i = 0; i < words.length; i++) {
        if (words[i].charAt(0) === "a") {
            startingWithA.push(words[i]);
        }
    }
    return startingWithA;
}
let result1 = findA(words);
console.log(result1);
//q12
let fruits = ["apple", "mango", "orange", "banana", "pineapple", "grapes"];
let result2 = fruits.slice(1, 6);
console.log(result2);
//q13
let no0 = [1, 2, 3, 4, 5, 6, 7];
let no1 = [];
function squared(array) {
    for (let i = 0; i < no0.length; i++) {
        no1.push(no0[i] * no0[i]);
    }
    return no1;
}
let result3 = squared(no0);
console.log(result3);
//q14
let array1 = [9, 8, 7, 6, 5];
let array2 = [];
function reverse(array) {
    for (let i = 0; i < array1.length; i++) {
        array2.unshift(array1[i]);
    }
    return array2;
}
let result4 = reverse(array1);
console.log(result4);
//q15
let scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
let maxScore = 20;
let maxCount = 0;
let minCount = 0;
function max() {
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] > maxScore) {
            maxCount++;
        }
        else {
            minCount++;
        }
    }
    console.log(`score maximize ${maxCount} times`);
    console.log(`score minimize ${minCount} times`);
}
max();
//q16
let array4 = [true, 1, 0, undefined, 3, 9, "", false];
function remove(arr) {
    return arr.filter(Boolean);
}
let result5 = remove(array4);
console.log(result5);
//q17
let array5 = [1, 2, 3];
let array6 = [4, 5, 6];
let concatenatedArray = array5.concat(array6);
console.log(concatenatedArray);
//q18
let array3 = [1, 2, 3, 4, 5];
function sumOfElements(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
let result6 = sumOfElements(array3);
console.log(result6);
//q19
let array7 = [1, 2, 3, 4, 5];
function check(arr, no) {
    for (let i = 0; i < arr.length; i++) {
        if (no === arr[i]) {
            return i;
        }
    }
    return -1;
}
let result7 = check(array7, 9);
console.log(result7);
//q20
let array8 = [1, 2, 3, -4, -5];
function small(arr) {
    let small = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < small) {
            small = arr[i];
        }
    }
    return small;
}
let result8 = small(array8);
console.log(result8);
//q21
let array9 = [1, 2, 3, 4, 5];
function calculateProduct(arr) {
    for (let i = 0; i < arr.length; i++) {
        array9[i] = array9[i] * array9[i];
    }
    return arr;
}
let result9 = calculateProduct(array9);
console.log(result9);
//q22
let array10 = ['apple', 'mango', 'pineapple', 'grapes', 'orange', 'guava', 'melon', 'strawberry'];
function filterByLength(arr, no) {
    return arr.filter(st => st.length > no);
}
let result10 = filterByLength(array10, 6);
console.log('greater then the n characters', result10);
//q23
let array11 = [1, 2, 3, 3, 4, 5, 5, 6, 2, 9, 6, 1, 7, 8];
let duplicates = [];
function findDuplicates(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let x = i + 1; x < arr.length; x++) {
            if (arr[i] === arr[x]) {
                duplicates.push(arr[x]);
            }
        }
    }
    return duplicates;
}
let result11 = findDuplicates(array11);
console.log('duplicates members are : ', result11);
//q24
let array12 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function incrementAll(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i]++;
    }
    return arr;
}
let result12 = incrementAll(array12);
console.log('after increment the value are :', result12);
//q25
let array13 = [1, 2, 3, 4, 5, 2, 6, 7, 2];
function countOccurences(arr, no) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === no) {
            count++;
        }
    }
    return count;
}
let result13 = countOccurences(array13, 2);
console.log('the no times element occure is ', result13);
//q26
let array14 = [1, 2, 3, 4, 5, 6, 7, 8];
function isSorted(arr) {
    let small = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < small) {
            return 'it is not in ascending order';
        }
        small = arr[i];
    }
    return 'it is in ascending order';
}
let result14 = isSorted(array14);
console.log(result14);
//q27
let array15 = ['ali', 'adeel', 'amna', 'ayesha', 'abid'];
function intoString(arr) {
    let last2Names = arr.slice(-2).join(' and ');
    let remainingNames = arr.slice(0, -2).join(', ');
    return `${remainingNames}, ${last2Names}`;
}
let result15 = intoString(array15);
console.log(result15);
//q28
let fahrienhietTemp = [33, 55, 76, 23, 97, 43];
let celciusTemp = [];
function toCelcius(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = (5 / 9) * (arr[i] - 32);
        celciusTemp.push(arr[i]);
    }
    return celciusTemp;
}
let result16 = toCelcius(fahrienhietTemp);
console.log('after conversion to celsius ', result16);
//q29
let array16 = [1, 2, 3, 4, 5, 6, 7];
function minMaxAverage(arr) {
    let max = arr[0];
    let min = arr[0];
    let avg = 0;
    let sum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        else if (arr[i] < min) {
            min = arr[i];
        }
        sum = sum + arr[i];
    }
    avg = sum / arr.length;
    let obj = {
        Minimum: min,
        Maximum: max,
        Average: avg
    };
    return obj;
}
let result17 = minMaxAverage(array16);
console.log(result17);
//q30
let array17 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function swapElements(arr, i, z) {
    let empty = arr[i];
    arr[i] = arr[z];
    arr[z] = empty;
    return arr;
}
let result18 = swapElements(array17, 2, 5);
console.log('after swaping two indeces of an array ', result18);
//q31
function noAppears(str, ch) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == ch) {
            count++;
        }
    }
    return count;
}
let result19 = noAppears('banana', 'n');
console.log('the character appears ', result19, 'times');
//q32
let to_DO = [
    { task: 'homework', completed: true },
    { task: 'shopping', completed: false },
    { task: 'picnic', completed: false },
    { task: 'go to swiming pool', completed: true },
    { task: 'take bath', completed: true }
];
function completedTask(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].completed == false) {
            console.log(arr[i].completed);
        }
    }
}
let result20 = completedTask(to_DO);
console.log(result20);
//q33
let arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
function sortArray(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
let sortedArr = sortArray(arr);
console.log(sortedArr);
//q34
let array19 = [9, 8, 7, 6, 5];
let array20 = [];
function reverseIt(array) {
    for (let i = 0; i < array19.length; i++) {
        array20.unshift(array19[i]);
    }
    return array20;
}
let result21 = reverseIt(array19);
console.log(result21);
//q35
function calculator(operande1, operande2, operator) {
    if (operator == '+') {
        return operande1 + operande2;
    }
    else if (operator == '-') {
        return operande1 - operande2;
    }
    else if (operator == '*') {
        return operande1 * operande2;
    }
    else if (operator == '/') {
        return operande1 / operande2;
    }
}
let result22 = calculator(3, 6, '+');
console.log(result22);
