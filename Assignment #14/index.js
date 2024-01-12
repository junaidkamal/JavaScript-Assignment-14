// Chapter 21 (Changing Case) //


// var allLower = userInput.toLowerCase();


// x = x.toLowerCase();


// y = y.toUpperCase();


// var originalString = "Hello World";
// var lowerCaseString = originalString.toLowerCase();


// var myArray = ["Hello", "World"];
// var dynamicLowerCase = myArray[0].toLowerCase();


// var myString = "Hello World";
// var upperCaseString = myString.toUpperCase();
// alert(upperCaseString);


// var cityName = "kaRacHi";
// var capitalizedName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();
// console.log(capitalizedName);



// Chapter 22 - 25 (Strings) // 


// var sameWords = "captain";
// var slicedPart = sameWords.slice(1, 3);
// console.log(slicedPart);


// var sameWords = "captain";
// var numberOfCharacters = sameWords.length;
// console.log(numberOfCharacters);


// var animal = "elephant";
// var seg = animal.slice(1, 5);
// console.log(seg);


// var myString = "example";
// var numberOfCharacters = myString.length;
// console.log(numberOfCharacters);


// var originalString = "example";
// var numberOfCharacters = originalString.length;
// console.log("Number of characters:", numberOfCharacters);
// var slicedString = originalString.slice(1, -3);
// console.log("Sliced string:", slicedString);


// var text = "To be or not to be.";
// var indx = text.indexOf("be");
// The value of indx will be 3. 


// var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");
// The value of indx will be 16


// var text = "To be or not to go. That is the question. To go or not to go.";
// var indx = text.lastIndexOf("go");
// console.log("Index of the first character of the last 'go':", indx);



// var myString = "example";
// var indexNum = 3;

// if (myString.charAt(indexNum) !== undefined) {
    
//     console.log("Segment at indexNum exists:", myString.charAt(indexNum));
// } else {

//     console.log("Segment at indexNum does not exist.");
// }


// var myString = "abcde";
// var characterAtIndex2 = myString.charAt(2);
// console.log(characterAtIndex2);


// var text = "This is a sample text.";
// var cha = text.charAt(9);
// console.log("The 10th character:", cha);


// var str = "Hello, World!";
// var x = str.charAt(str.length - 1);
// console.log("The last character:", x);


// var input = "exampleString";
// var cha = input.charAt(4);
// console.log("The 5th character:", cha);


// var myString = "example";
// var targetCharacter = 'a'; 
// if (myString.charAt(2) === targetCharacter) {
    
//     console.log("The 3rd character is", targetCharacter);
// } else {
    
//     console.log("The 3rd character is not", targetCharacter);
// }



// var originalString = "no, not at all, no way";
// var charArray = []; 
// for (var i = 0; i < originalString.length; i++) {
//     charArray[i] = originalString.charAt(i);
// }

// console.log("Original Array:", charArray);
// var revisedReply = originalString.replace("no", "yes");
// console.log("Revised String:", revisedReply);


// var str = "12345";
// var newStr = str.replace("1", "one");
// console.log("Original String:", str);
// console.log("Revised String:", newStr);


// var x = "abcabcabc";
// var y = x.replace(/a/g, "z");
// console.log(y); 




// Chapter 26 (Rounding Numbers)  //


// var originalNumber = 5.8;
// var roundedNumber = Math.round(originalNumber);
// console.log(roundedNumber); 


// var origNum = 7.3;
// var roundNum = Math.ceil(origNum);
// console.log(roundNum);


// var origNum = 7.8;
// var roundNum = Math.floor(origNum);
// console.log(roundNum); 


// var originalNumber = 4.6;
// var roundedNumber = Math.round(originalNumber);
// console.log(roundedNumber); 


// var originalNumber = 0.5;
// var roundedNumber = Math.floor(originalNumber);
// console.log(roundedNumber); 




// Chapter 27 (Random Numbers) //


// var randomNumber = Math.random();  
// var scaledNumber = Math.floor(randomNumber * 50) + 1;
// console.log(scaledNumber);


// var randomNumber = Math.random();
// console.log(randomNumber);



// function rollDice() {
    
//     var result = Math.floor(Math.random() * 6) + 1;
    
//     return result;
// }

// var diceResult = rollDice();
// console.log("The dice rolled:", diceResult);




// function tossCoin() {
    
//     var randomNumber = Math.random();
    
    
//     var result = (randomNumber < 0.5) ? "Heads" : "Tails";
    
//     return result;
// }

// var coinResult = tossCoin();
// console.log("The coin landed on:", coinResult);




// Chapter 28, 29 (Converting Strings) //


// var str = "123";
// var number = parseInt(str);
// console.log(number);



// function convertStringToInteger() {
//     var str = "123";
//     var number = parseInt(str);

//     return number;
// }

// var result = convertStringToInteger();

// console.log(result); 



// var number = 123;
// var str1 = number.toString();
// console.log(str1); 



// function convertNumberToString() {
//     var number = 42;
//     var str = number.toString();
//     return str;
// }

// var result = convertNumberToString();
// console.log(result);  


// var decimalString = "3.14";
// var integerValue = parseInt(decimalString);
// console.log(integerValue);  



// Chapter 30 (Controlling the length of  decimals) // 


// var num = 3.14159265359;
// var newNum = num.toFixed(4);
// console.log(newNum); 


// var num = 3.14159265359;
// num = Number(num.toFixed(2));
// console.log(num);  



// if (num.toFixed(2).toString().length > 4) {

//     console.log("The number has more than 4 characters.");
// } else {
//     console.log("The number does not have more than 4 characters.");
// }


// var originalNumber = 123.456789;
// var roundedString = originalNumber.toFixed(2).toString();
// alert("Rounded to 2 decimal places: " + roundedString);






















