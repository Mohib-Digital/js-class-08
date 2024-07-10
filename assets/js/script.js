// Chapter No.18   (for loop)

// for loop programs

// var myFruitsArray = ["Mango", "Banana", "Peach", "Graphs", "Apricot"]

// for (var myIndex = 0; myIndex < myFruitsArray.length; myIndex++) {
//     console.log(myFruitsArray[myIndex])
// }

// =================================================================================

// var myFruitsArray = ["Mango", "Banana", "Peach", "Graphs", "Apricot"];
// var anyFruitsName = prompt("Enter your correct fruits name:");


// for (myIndex = 0; myIndex < myFruitsArray.length; myIndex++) {
//      if(anyFruitsName === myFruitsArray[myIndex]){
//         console.log("Yes your fruit name is in the array list");
//      }
// }

// ================================================================================


// var stationaryArray = ['Pencil', 'Erraser', 'Shopner', 'Calculator', 'Geometry Box']

// for (var index = 0; index < stationaryArray.length; index++) {
//     console.log(`On index ${index} we have: ` + stationaryArray[index])
// }

// Output 
// On index 0 we have: Pencil
// On index 1 we have: Erraser
// On index 2 we have: Shopner
// On index 3 we have: Calculator
// On index 4 we have: Geometry Box

// ================================================================================

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


