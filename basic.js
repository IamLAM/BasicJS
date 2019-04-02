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

// function and return boolean values

function bool(a, b) {

    return a < b;

}

bool(5, 10);



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
//others operators OR

//chaining if-else
function conditionalIF(num) {
    // Only change code below this line
    if (num < 5) {
        return "Tiny";
    } else if (num < 10) {

        return "Small";
    } else if (num < 15) {

        return "Medium";
    } else if (num < 20) {
        return "Large";
    } else {
        return "Huge";
    }


}

var cF = conditionalIF(7);
console.log(cF);

//golf
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    // Only change code below this line

    if (strokes == 1) {
        return names[0];
    } else if (strokes <= par - 2) {
        return names[1];
    } else if (strokes == par - 1) {
        return names[2];
    } else if (strokes == par) {
        return names[3];
    } else if (strokes == par + 1) {
        return names[4];
    } else if (strokes == par + 2) {
        return names[5];
    } else if (strokes >= par + 3) {
        return names[6];
    }

    // Only change code above this line
}

// Change these values to test
var gS = golfScore(5, 5);
console.log(gS);

//conditional switch
var val = 2;
switch (val) {

    case 1:
        console.log("a");
        break;
    case 2:
        console.log("aa");
        break;
    case 3:
        console.log("aaa");
        break;
    case 4:
        console.log("aaaa");
        break;
    default:
        console.log("Many many letters a");

}

//objects

var cat = {

    "name": "firulais",
    "legs": 4,
    "tails": 1,
    friends: ["human", "nobody"] // i can put quotation marks or not "friends"


};

console.log(cat.name);
console.log(cat.friends);
console.log(cat["name"]);
console.log(cat["friends"]);
cat.name = "Tiger Woods"; //updating name
console.log(cat.name);
cat.run = "too fast";
console.log(cat);
delete cat.legs;
console.log(cat);

// hasOwnProperty
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp) {
    // Your Code Here
    if (myObj.hasOwnProperty(checkProp))
        return myObj[checkProp];
    else
        return "Not Found";
}

// Test your code by modifying these values
var check = checkObj("gift");
console.log(check);

//complex objects
var myMusic = [{
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },


    {
        "artist": "ACDC",
        "title": "Thunderstruck",
        "release_year": 1980,
        "formats": [
            "MP3",
            "DVD"

        ],
        "gold": false


    }
];
console.log(myMusic[1].artist); //accessing nested objects

//loops
var i = 0;
while (i < 5) {
    console.log("ja");
    i++;

}

for (i = 1; i < 5; i++)
    console.log("ja");

do {

    console.log("ja");
    i++;
} while (i < 5);


//Setup
var contacts = [{
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop) {

    i = 0;
    while (i < contacts.length) {
        if (contacts[i].firstName === name) {
            if (contacts[i].hasOwnProperty(prop))
                return contacts[i][prop];
            else {
                return "No such property";

            }
        }
        i++;

    }
    return "No such contact";
}

var resultado = lookUpProfile("Akira", "likes");
console.log(resultado);