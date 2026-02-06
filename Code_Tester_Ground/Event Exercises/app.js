// console.log("hello world!")
// --------------------------Print message----------------------------------------------------

function popup(message)
{
    console.log(message);
}
// --------------------------Check Email address----------------------------------------------------

function checkAddress(emailFeild)
{
    var validEmail = "email"
    var userEmail = document.getElementById(emailFeild).value;
    if(userEmail === validEmail)
    {
        alert("verified");
    }
    else
    {
        alert("not verified")
    }
}

// --------------------Enter city name using zip value-----------------------------------------
function fillCity()
{
    var cityName;
    var zipCode = document.getElementById("zip").value;

    switch(zipCode)
    {
        case "00" :
        cityName = "karachi";
        break;
        case "01"  :
        cityName = "lahore"

    }
    document.getElementById("city").value = cityName
    zipCode ="";
}

// --------------------------paragraph Extender-----------------------------------------------
// function showMore()
// {
//     var hiddenPara = document.getElementById("hidden");
//     if(hiddenPara.sytle.display === "none")
//     {
//         hiddenPara.style.display ='block';  
//     }
//     else
//     {
//         hiddenPara.style.display ='none';  
//     }

// }

// ---------------------image visible/invisible--------------------------------

function makeVisible()
{
    var image = document.getElementById("hiddenImage");
    image.style.display = "block";
}
function makeInVisible()
{
    var image = document.getElementById("hiddenImage");
    image.style.display = "none";
}

// ---------------------image visible/invisible--------------------------------

function changeImage(eid,newPic)
{
  var image = document.getElementById(eid);
  image.src =newPic;
}

// var m = document.getElementById("heading").style.margin;
var element = document.getElementById("heading");
var m = window.getComputedStyle(element).margin;
console.log(m);


// -----------------Target  all element by tag name---------------------------


// var p = document.getElementsByTagName("p");
// p[3].style.color ="red";


// for(var i =0; i < p.length ; i++)
// {
//    p[i].style.color ="red";
// }

// -----------------Target some element by tag name---------------------------

var boxPara = document.getElementById("box");
var para = boxPara.getElementsByTagName("p");
for(var i =0; i < para.length ; i++)
{
   para[i].style.color ="red";
}