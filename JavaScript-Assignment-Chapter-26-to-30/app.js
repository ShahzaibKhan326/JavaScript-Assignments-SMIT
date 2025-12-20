// ---------------------Chapter (26-To-30)------------------------------

// ------------------Qustion (1)--------------------

// var user_integer = prompt("Enter a positive integer \n Example 1.4 0.3 or 4.6 ");
// // var user_integer = 3.5; //for direct value assign
// console.log("Number : "+user_integer);

// var round_integer = Math.round(user_integer)
// console.log("Round off value : "+round_integer);

// var floor_integer  = Math.floor(user_integer)
// console.log("Floor value : "+floor_integer);

// var ceil_integer = Math.ceil(user_integer)
// console.log("Ceil value : "+ceil_integer);

// ------------------Qustion (2)--------------------

// var user_integer = prompt("Enter a positive integer \n Example 1.4 0.3 or 4.6 ");
// var user_integer = -2.673; //for direct value assign
// console.log("Number : "+user_integer);

// var round_integer = Math.round(user_integer)
// console.log("Round off value : "+round_integer);

// var floor_integer  = Math.floor(user_integer)
// console.log("Floor value : "+floor_integer);

// var ceil_integer = Math.ceil(user_integer)
// console.log("Ceil value : "+ceil_integer);

// ------------------Qustion (3)--------------------

// var number = prompt("Enter a Nagative to Value to convert to positive value \n Example : -2 -44 or -4")
// console.log("Input : "+number);
// var conv_num = Math.abs(number);
// console.log("Output : "+conv_num)

// ------------------Qustion (4)--------------------

// var dice_limit = 6;

// var random_dice = Math.random();

// var final_dice = (random_dice*dice_limit) + 1;
// console.log(final_dice)
// var floor_dice = Math.floor(final_dice);
// console.log(floor_dice)

// ------------------Qustion (5)--------------------

// var coin_sides = 2;
// var random_side = Math.floor(Math.random()*coin_sides)+1;

// -----------A-------------
// console.log(random_side === 1 ? "Head" : "Tails")

// -----------B-------------
// if(random_side === 1)
// {
//     console.log("Random coin value: Heads" )
// }
// else
// {
//     console.log("Random coin value: Tails" )
// }

// ------------------Qustion (6)--------------------

// var max_value=100;
// var min_value=1;

// var random_number  = Math.floor(Math.random()*max_value)+min_value;
// console.log("Random Number between 1 and 100: ")
// console.log("Number is : "  + random_number)

// ------------------Qustion (7)--------------------
 
// var user_weight = prompt("Enter your weight in kilograme");
// var user_weight = parseFloat(user_weight)
// console.log("The weight of the user is \n"+user_weight +" kilogrames.");

// ------------------Qustion (8)--------------------
 
// var my_random_num = Math.floor(Math.random()*10)+1;

// var user_random = prompt("Enter Random number between 1 and 10");
// if(user_random < 1 || user_random > 10)
// {
//     console.log("Please enter Number between 1 and 10!")
// }
// else if(user_random == my_random_num)
// {
//     console.log("Congratualtion Your number is match with the random number!")
// }
// else if(user_random+2 === my_random_num || user_random-2 === my_random_num)
// {
//   console.log("You are so close to guess random number")
// }
// else 
// {
//     console.log("Try again!")
// }
// console.log("Random Number is : "+my_random_num)
// console.log("Your Random  Number is : "+user_random)