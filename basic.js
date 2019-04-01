/* Basic course of JS*/
var a = 5 + 5;
var b = 5.5;
var name = "Pilar";
var middle = "Schnaider";
var p = 'look this "rabbit"';
var p2 = "\\look this \"lion\"";
var drinks = ["vodka", "beer", "cognac", "wine"]; //simple array
var drinks = [
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

drinks.push("pepsi"); // push value, last value

p2 += "A \nnew \tanimal";
a++; //autoincrement

console.log(a);
console.log(b);
console.log(name + middle);
console.log(p2.length); //letters count
console.log(p2[0]); //letters count
console.log(numbers[3][0]); //access a multi array