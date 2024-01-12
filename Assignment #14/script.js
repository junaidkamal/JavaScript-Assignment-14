// Chapter 1 Alerts //

//  var firstName = "Junaid";
// var lastName = "Kamal";
// var email = "junaidkamal83@gmail.com";
// var phoneNumber = "0310-*********";
// var password = "123456";

// alert(firstName);
// alert(lastName);
// alert(email);
// alert(phoneNumber);
// alert(password);

// alert("You are learning JavaScript!");

// var msg = "Chapter 1 is Completed!";

// alert(msg);  



// Chapter 2 Variables for string //

//   var myCityName = "karachi";

// var myCountry;

// myCountry = "Pakistan";

// var myTeam = "xyz";
// alert(myTeam);

// var bestMan = "Charlie";
// bestMan = "John";   


// Chapter 3 (Variables for numbers) //

//  var caseQty;
// caseQty = 144;

// var num = "9";
// var numValue = +parseInt(num);
// var result = numValue + 2;
// console.log(result); 

// var newValue ;
// newValue = 4 + 5;
// console.log(newValue); 

// var merchTotal = 100;
// var shippingCharge = 10;
// var orderTotal = merchTotal + shippingCharge ;
// console.log(orderTotal);  

// var myNumber = 3;
// myNumber = myNumber + 2;
// console.log(myNumber);   


//  Chapter 4 (Variable names Legal and Illegal //

//   var productCost = 3.45;

// var nameOfBand;

// var newNumber = 5;

// var myFullName = "Junaid Kamal"  


// Chapter 5 (Math Expression I)  //


//  var remainder = 13 % 2;
// console.log(remainder);

// var num = 20 % 6;
// num = 2;

// var largeNum = 1000 * 2000;
// console.log(largeNum);  

// var variable1 = 12;
// var variable2 = 3;
// var result = variable1 - variable2;
// console.log(result); 

// var num1 = 17;
// var num2 = 3;
// var resultRemainder = num1 % num2;
// console.log(resultRemainder);

// var number1 = 7;
// var number2 = 11;


// var result = number1 * number2;

// alert("The result of multiplying " + number1 + " and " + number2 + " is: " + result);   


// Chapter 6 (Math Expression II) //

//  x++; 
//  x += 1;

//   var y = 100;
//  y -= 1;
// console.log(y);



// var x = 50;
// var y = x++;
// x = 51;
// y = 50; 


// var y = 50;
// var z = --y;
// z = 49;  



// var num = 10;
// var newNum = --num; 


// var originalNum = 6;
// var newNum = originalNum++; 



// var myNumber = 3;
// myNumber++;
// alert("The new value: " + myNumber);  



//  Chapter 7 (Math Expression III) //


//   var calculatedNum = 2 + (2 * 6);
// calculatedNum = 14;


// var calculatedNum = (2 + 2) * 6;
// calculatedNum = 24;


// var calculatedNum = (2 + 2) * (4 + 2);
// calculatedNum = 24;


// var calculatedNum = ((2 + 2) * 4) + 2;
// calculatedNum = 18;

// var cost = (2 + 2) * 4 + 10;

// var unit = 2 + (2 * 4) + 10;

// var pressure = (4 / 2) * 4;   



// Chapter 8 (Concatenating Text Strings)  // 



//  var num = "2" + "2";
// result = "22";


// message = ("Hello," + "Dolly");
// alert(message);


// alert("33" + 3); 


// var num1 = "Pakistan";
// var num2 = "Zindabad";
// alert(num1 + num2); 


// var myName = "Junaid";
// var myNumber = 32;
// var result = myName + myNumber;
// console.log(result);                  


// var firstString = "Sindh";
// var secondString = "Karachi";
// var result = firstString + secondString;
// console.log(result);                         



// Chapter 9 (Prompts) //

//  var firstName = prompt("Enter first name");

// var country = prompt("Country?", "China");

// var yourName = prompt("Enter Your Name");

// var userInput = prompt("Enter your fvrt color:", "Blue");


// var question = "Whose city is your fvrt in Pakistan?";
// var defaultResponse = "Islamabad";
// var userResponse = prompt(question, defaultResponse);


// var question = "What is your favorite color?";
// var defaultResponse = "Black";
// var userResponse = prompt(question, defaultResponse);
// alert("Your favorite color is: " + userResponse);


// Chapter 10 (if statments) //

// var city = "Karachi"; 
// if (city === "Karachi") {
// console.log("The City OF Lights")
// }


// var ZipCode = "10010";
// if (ZipCode === "10010") {
//   alert("Karachi");
// } else {
//   alert("Please write correct city");
// }


// var x = 1;
// if (x === 1) {
//     x = 34;
// }
// console.log(x);



// Chapter 11 (Comparison Operators) //


// if ( variable1 !== variable2 ) {
// }


// if ( variable1 >= variable2 ) {
//      }


// var myVariable = 34;
// if ( myVariable !== 12) {
//     myVariable = 56;
// }
// console.log(myVariable);


// var myNumber = 12;
// if ( myNumber !== 10 ) {
//     alert("Congratulations");
// }

// var enterName = prompt("Enter your Name!");
// if ( enterName !== "John"){
//     alert("No match");
// }



// Chapter 12 (if...else and else if statements) //

// var number1 = 5;
// var number2 = 4;

// if ( number1 >= number2 ){
//     alert("variable1 is greater than or equal to variable2");
// } else {
//     alert("variable1 is less than variable2");
// }


// var SubjectOne = +prompt("Enter Your Math marks");
// var SubjectTwo = +prompt("Enter Your Physics marks");
// var SubjectThree = +prompt("Enter Your English marks");
// var SubjectFour = +prompt("Enter Your Computer marks");
// var SubjectFive = +prompt("Enter Your Urdu marks");

// var totalMarks = 500;

// var ObtainedMarks = SubjectOne + SubjectTwo + SubjectThree + SubjectFour + SubjectFive;

// var percentage = (ObtainedMarks / totalMarks) * 100;

// console.log("Percentage: " + percentage.toFixed(2) + "%");

// if (percentage >= 90) {
//     console.log("Grade: A");
// } else if (percentage >= 80) {
//     console.log("Grade: B");
// } else if (percentage >= 70) {
//     console.log("Grade: C");
// } else if (percentage >= 60) {
//     console.log("Grade: D");
// } else {
//     console.log("Grade: F");
// }



// var a = 10;
// if (a === 10) {
//     alert("a is 10");
// } else {
//     alert("The correct value of a is " + a);
// }


// var presentCity = prompt("Enter city name");
// if ( presentCity === "karachi" ){
//     alert("Welcome in Karachi");
// } else if ( presentCity === "lahore" ){
//     alert("Welcome in Lahore");

// }else {
//     alert("You are in another city");
// }


// Chapter 13 (Testing sets of conditions) //



// if (a === b && c === d) {
//   }
  
// if (a === b || c !== d) {
//   }
  
// if ((name === "Hamza" || name === "Arsalan") && age < 60) {
//   }

// var firstVariable = 5;
// var secondVariable = 10;
// if (firstVariable < secondVariable || firstVariable > secondVariable) {
//     alert("The first variable is either less than or greater than the second variable.");
// } else {   
//     alert("The first variable is equal to the second variable.");
// }


// var firstName = "Junaid";
// var lastName = "Kamal";

// var userFirstName = prompt("Enter your first name:");
// var userLastName = prompt("Enter your last name:");

// if (userFirstName === firstName && userLastName === lastName) {
//     alert("Names match! Welcome, " + userFirstName + " " + userLastName + "!");
// } else {
//     alert("Names do not match. Please try again.");
// }



// Chapter 14 (If statements nested) // 

// var a = 1;
// var c = "Max";

// if (a === 1) {
//     if (c === "Max") {
//         alert("OK");
//     }
// }


// var value1 = 10;
// var value2 = 10;

// if ( value1 === value2) {
//     if ( value1 <= value2) {
//         alert("Both conditins are true etc...");
//     }
// }



// Chapter 15 (Array I) //

// var emptyArray = [];

// var stringArray = ["Junaid Kamal"];
// console.log(stringArray);

// var alphabet = ["h", "i", "j", "k"];
// console.log(alphabet[2]);

// var alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];
// var arrayLength = alphabet.length;
// alert("The total length of array is" + arrayLength);

// var myArray = ["One Number"];
// myArray[1] = "Second Number";
// alert(myArray[1]);



// Chapter 16 (Array II) //

// var myArray = ["One Number"];
// myArray.push("Second Number");
// alert(myArray[myArray.length - 1]);

// var Alphabet = ["h", "i", "j", "k"];
// Alphabet.pop();
// console.log(Alphabet);

// var Alphabet = ["h", "i", "j", "k"];
//    Alphabet.push(5);
//   console.log(Alphabet);



// Chapter 16 (Array III) //


// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// sizes.shift();
// console.log(sizes);

// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// sizes.unshift(1, 2, 3);
// console.log(sizes);

//  var myArray = ["One Number"];
//   myArray.unshift("Hello New");
//    alert(myArray[0]);

// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
//  sizes.splice(2, 0, "L");
//  console.log(sizes);

// var pets = ["dog", "cat", "ox", "duck", "frog"];
// var indexOfDog = pets.indexOf("dog");
// pets.splice(indexOfDog + 1, 3, "elephant", "parrot");
// console.log(pets);

// var pets = ["dog", "cat", "ox", "duck", "frog"];
// var indexOfCat = pets.indexOf("cat");
// var indexOfOx = pets.indexOf("ox");
// pets.splice(indexOfCat, 2);
// console.log(pets);

// var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
// var reducePets = pets.slice(3, 5);
// console.log(reducePets);



// Chapter 17 - 20 (for Loops) //


// for (let i = 0; i <= 11; i++) {
//     console.log("Running", i + 1);
// }

// for (var i = 0; i <= 4; i++) {
// }

// for (let counter = 0; counter < 100; counter++) {
//     console.log("Iteration", counter + 1);
// }

// for (let i = 3; i > 0; i--) {
//     console.log("Iteration", i);
// }

// let array = [1, 2, 3, 4, 5];
// let numberOfElements = array.length;

// console.log(numberOfElements);

// let flag = true;

// var pets = ["Cow", "Dog", "Fox",]
// for (let i = 0; i < pets.length; i++) {
//     console.log(pets);
// }













  





 











  










