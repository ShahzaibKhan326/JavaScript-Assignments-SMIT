// ----------------------Chapter (17-To-20)-------------------------------------

//------------------Question (1)------------------------

// var myArray = [ [],[],[]]

//------------------Question (2)------------------------

// var myArray = [ [0,1,2,3],[1,0,1,2],[2,1,0,1]]
// console.log(myArray)

//------------------Question (3)------------------------

// console.log("Counting 1 to 10")
// for(var i = 1 ; i <=10 ; i++)
// {
//     console.log(i);
// }


//------------------Question (4)------------------------

// var user_Table_number = prompt("Enter a number to show its muiltilication table")
// var user_Table_count = prompt("Enter length muiltiplication table")
// var count = user_Table_count;
// if(!user_Table_number || user_Table_number === "" || isNaN(user_Table_number))
// {
//     console.log("Please Enter a valid Number!")
// }
// else
// {
//     for(i=1 ; i<=count ; i++)
// {
//     console.log(user_Table_number + " X " + i + " = " + (user_Table_number*i))
// }
// }

//------------------Question (5)------------------------

// var fruits = ["apple","banana","mango","orange","strawberry"];
// var count =fruits.length;
// for(var i =0; i<=count ; i++ )
// {
//     console.log("Element at index " + i + " is " + fruits[i])
// }

//------------------Question (6)------------------------

// ---------------A------------------

// for(var i =1 ; i<=15 ; i++)
// {
//     console.log(i);
// }

// ---------------B------------------

// for(var i = 10 ; i>=1 ; i--)
// {
//     console.log(i);
// }

// ---------------C------------------

// for(var i = 0; i<=20 ; i++)
// {
//    if(i%2 === 0)
//    {
//     console.log(i)
//    }
// }

// ---------------D------------------
 
// for(var i = 0; i<=20 ; i++)
// {
//    if(i%2 !== 0)
//    {
//     console.log(i)
//    }
// }

// ---------------E------------------

// for(var i = 2; i<=20 ; i++)
// {
//    if(i%2 === 0)
//    {
//     console.log(i +"K")
//    }
// }

//------------------Question (7)------------------------

// A = ["cake", "apple pie", "cookie", "chips", "patties"]

// var user_input =prompt("Enter the text to search!")
// var found=false;

// console.log("Array :")
// console.log(A)
// for(var i = 0 ; i<=A.length ; i ++)
// {
//     if(user_input == A[i])
//     {
//         console.log("your file founded at index " +  i)
//         found =true;   
//     }
// }

// if(found === false)
// {
//     console.log("your file was not found")
// }

//------------------Question (8)------------------------

// A = [24, 53, 78, 91, 12]

// var A_sort =A.sort();
// console.log(A_sort);
// console.log("The largest number is " + A_sort.pop())

//------------------Question (9)------------------------

// A = [24, 53, 78, 91, 12]

// var A_sort =A.sort();
// console.log(A_sort);
// console.log("The smallest number is " + A_sort.shift())

//------------------Question (10)------------------------

for(i =5 ; i <= 100 ; i++)
{
    console.log(i+5)
}
