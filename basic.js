/* Basic course of JS*/
var a = 5 + 5;
var b = 5.5;
var name = "Pilar";
var middle = "Schnaider";
var p = 'look this "rabbit"';
var p2 = "\\look this \"lion\"";
var drinks = ["vodka", "beer", "cognac", "wine"]; //simple array
var drinks2 = [
    ["Beer", 1],
    ["milk"], 1
]; //multidimensional array
var numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [
        [10, 11, 12], 13, 14
    ]
];
p2 += "A \nnew \tanimal";
a++; //autoincrement


//functions
drinks.push("pepsi"); // push value, last value
console.log(drinks);
drinks.pop(); // delete the last value
console.log(drinks);
drinks.shift();
console.log(drinks); //delete the first value
drinks.unshift("crunch");
console.log(drinks); //delete the first value


console.log(a);
console.log(b);
console.log(name + middle);
console.log(p2.length); //letters count
console.log(p2[0]); //letters count
console.log(numbers[3][0]); //access a multi array

//functions
function hi() {
    //classic function
    console.log("Follow the leader, leader!");
}

hi();
//functions with arguments
function sum(a, b) {

    console.log(a + b);
}

sum(5, 5);

//function and return value
function greetings() {

    return "Good Morning";
}
var g = greetings()
console.log(g);



//local and global scope

var smile = 1;

function happy() {

    var sad = 1;
    console.log(smile); //global scope
    console.log(sad); //local scope


}
//console.log(sad); //undefined
happy();

//conditional logic
function conditions(ans) {

    if (ans) {
        return "hello";
    } else {
        return "bye";
    }

}

var con = conditions(true);
console.log(con);

//strict equality operator
function conditionsE(a, b) {

    if (a !== b) { ///verify data type and ans=="5" will convert the value
        return "hello";
    } else {
        return "bye";
    }

}
// others operators != , >,<, >=,<=, !==

var con = conditionsE(5, "5");
console.log(con);

//
function operators(a, b) {

    if (a < 5 && b > 5) {
        console.log("It is magic");
    } else {
        console.log("Duuh");
    }
}
operators(10, 10);