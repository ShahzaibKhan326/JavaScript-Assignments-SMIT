
//  console.log("hello world!")

// -----------------------Chapter 58-To-67)------------------------------------------

// ---------------------Question 1 ( 1.0 )--------------------------

var mainContent = document.getElementById("main-content");


// ---------------------Question 1 ( 2.0 )--------------------------

// console.log(mainContent.children)  // HTML Collection

// for(var i = 0 ;i  < mainContent.children.length;i++)
// {
//     console.log(mainContent.children[i].innerHTML)
// }

// ---------------------Question 1 ( 3.0 )--------------------------

// var renderClass = document.getElementsByClassName("render");
// console.log(renderClass)

// for(var i = 0 ;i  < renderClass.length;i++)
// {
//     console.log(renderClass[i].innerHTML)
// }

// ---------------------Question 1 ( 4.0 )--------------------------

// var firstName = document.getElementById("first-name").value = "Alex";

// ---------------------Question 1 ( 5.0 )--------------------------

// var lastName = document.getElementById("last-name").value = "Hales";
// var userEmail = document.getElementById("email").value = "xyz@something.com";

// console.log("User Name : "+  firstName + " " + lastName)
// console.log("User Email : " + userEmail)

// ---------------------Question 2 ( 1.0 )--------------------------

var formContent = document.getElementById("form-content");
// console.log(formContent.nodeType)

// ---------------------Question 2 ( 2.0 )--------------------------

var lastName = document.getElementById("lastName");
// console.log(lastName.nodeType);
// console.log(lastName.firstChild.nodeType);

// ---------------------Question 2 ( 3.0 )--------------------------

lastName.firstChild.nodeValue = "last Name: Zinder";

// ---------------------Question 2 ( 4.0 )--------------------------

// console.log(mainContent.firstElementChild)
// console.log(mainContent.lastElementChild)

// ---------------------Question 2 ( 5.0 )--------------------------

// console.log(lastName.previousElementSibling)
// console.log(lastName.nextElementSibling)

// ---------------------Question 2 ( 6.0 )--------------------------

var emailInput = document.getElementById("email");

console.log(emailInput.parentNode);
console.log(emailInput.parentNode.nodeType);

