// Chapter No.18   (for loop)

// for loop progams

// for (var i = 1; i <= 10; i++) {
//     console.log("Your Name");
// }



// for loop program
// for (var a = 1; a <= 100; a = a + 10) {
//     for (var b = a; b < a + 10; b++) {
//         document.write(b + " ");
//     }
//     document.write("<br>");
// }


// =======================================================================================

// flag system using for loop:

// var myArray = ["Islamabad", "Lahoor", "Peshawar", "Karachi", "Quetta"]
// var enterAnyCity = prompt("Please! Enter your favorite city!")

// flag = false;

// for (var i = 0; i < myArray.length; i++) {
//     if (enterAnyCity === myArray[i]){
//         flag = true;
//         break;
// }
// }

// if (flag) {
//     console.log(`${enterAnyCity} is my favorite city`)
// }
// else {
//     console.log(`${enterAnyCity} is not my favorite city`)
// }


// Array element ka sum print kare
//Description
// user se 5 numbers le and unko aik aik kar k array me rakhe
//

// var numbers = [];
// var sum = 0;
// for(var i = 0; i<5; i++){
//     var num = +prompt("enter number");
//     numbers.push(num);
//     sum = sum + numbers[i];
// } 
// console.log(numbers);
// console.log({sum})