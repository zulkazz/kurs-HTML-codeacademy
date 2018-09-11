var firstName = "John";
var lastName = "Doe";
var active = true;
var age = 43;
var ageString = "43";

var max = 5;
var i = 0;

for (i = 0; i < max; i++) {
    console.log("for" + firstName + i);
}

i = 0;

while (i < max){
    console.log("while" + firstName + i);
    i++;
}

i = 0;

do {
    console.log("doWhile" + firstName + i);
    i++;
} while (i < max);

switch (firstName) {
    case "Marco":
        console.log("Hello instructor!");
        break;
    case "John":
        console.log("Hello John");
        break;
    default:
        console.log("Sorry, don't recognise the name!");
}

function sayHello(name) {
    return "Hello " + name;
}

console.log(sayHello(firstName));

=================================================================
    
    var user = {
    firstName: "John",
    lastName: "Doe",
    active: true,
    age: 43,
    sayHello: function() {
        return "Hello " + this.firstName;
    }
};

console.log(user.sayHello());

==================================================================
    
    if (age < 20) {
    console.log("John is very young");
} else if (age > 20 && age < 50) {
    console.log("John is middle age");
} else {
    console.log("John is enjoying the twilight of his life");
}

===============================================================
    
    var user = {
    firstName: "John",
    lastName: "Doe",
    active: true,
    age: 43,
    address: {
        line1: "43",
        line2: "Milton Road",
        city: "Hampton",
        postCode: "HA12 9TA",
        country: "UK"
    },
    sayHello: function() {
        return "Hello " + this.firstName +
            " and my profession is " + this.profession;
    }
};

user.profession = "Developer";

console.log(user);
console.log(user.address);

====================================================================
    
    var user = {
    firstName: "John",
    lastName: "Doe",
    active: true,
    age: 43,
    address: {
        line1: "43",
        line2: "Milton Road",
        city: "Hampton",
        postCode: "HA12 9TA",
        country: "UK"
    },
    sayHello: function() {
        return "Hello " + this.firstName +
            " and my profession is " + this.profession;
    },
    hobbies: ["coding", "hacking", "sailing"]
};

for (var i = 0; i < user.hobbies.length; i++) {
    console.log(user.hobbies[i]);
    
}

user.hobbies[user.hobbies.length] = "cooking";

for (var i = 0; i < user.hobbies.length; i++) {
    console.log(user.hobbies[i]);
}

=======================================================================
    
    var user = {
    firstName: "John",
    lastName: "Doe",
    active: true,
    age: 43,
    address: {
        line1: "43",
        line2: "Milton Road",
        city: "Hampton",
        postCode: "HA12 9TA",
        country: "UK"
    },
    sayHello: function() {
        return "Hello " + this.firstName +
            " and my profession is " + this.profession;
    },
    hobbies: ["coding", "hacking", "sailing"]
    printHobbies: function() {
        console.log("Hobbies length: " this.hobbies.length);
        for (var i = 0; i < user.hobbies.length; i++) {
        console.log(this.hobbies[i]);
        }
    }


    
};

user.printHobbies();
user.hobbies[user.hobbies.length] = "cooking";
user.printHobbies();

=================================================================
    

function addName() {
    
    var firstName = prompt("Please type your first name");
    
    var data = document.getElementById("data");
    
    var dataDiv = document.createElement("div");
    dataDiv.innerHTML = "<div>" + firstName + "</div>";
    
    data.appendChild(dataDiv);
    
}