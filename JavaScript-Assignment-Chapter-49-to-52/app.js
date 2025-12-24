// console.log("hello world")

function checkFomData()
{
    var email = document.getElementById("Email").value;
    var password = document.getElementById("password").value;
    var display_box = document.getElementById("display-box");
 
    var validEmail =( email === "shahzaib");
    var validPassword =( password === "123456")

    if(email === "" || password === "")
    {
        display_box.textContent = "Please fill all the feilds"
        return;
    }
    
    if(validEmail && validPassword)
    {
        display_box.textContent = "Login Succusfully"
    }
    else 
    {
        display_box.textContent = "Invalid Email or Password"
    }
       
}

// --------------------Expand Paragraph-------------------------

function expandPara()
{
    

     var hiddenPara = document.getElementById("hiddenPara");
     var toggleButton = document.getElementById("toggleButton")
     if(hiddenPara.style.display === "none")
     {
        hiddenPara.style.display = "inline"
        toggleButton.textContent ="show less"

     }
     else 
     {
        hiddenPara.style.display = "none"
        toggleButton.textContent ="show More"
     }
}

// ------------------------Edit and delete Table data----------------------------------
var s_name ="4";
var s_class = 23;
var s_roll_num = 344355;
var student_array =  [];
function addData(user_name,user_class,user_roll_num)
{
  user_class = s_class;
  user_name = s_name;
  user_roll_num = s_roll_num;
   var tab = document.getElementById("student-table");
   tab.innerHTML = `<tr> <td>${user_name}</td> <td>${user_class}</td> <td>${user_name}</td></tr>`
}
