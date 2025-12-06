// var str = "I like color blue because it is the sign of peace";
var str= prompt("write any sentence using blue color")
var color_found =false;
var str_color = str.indexOf("blue");
console.log(str_color)

if(str_color !== -1)
{
    var before_text =  str.slice(0,str_color);
console.log(before_text);
var after_text = str.slice(str_color+4);
console.log(after_text);

var final_text = before_text + " green " + after_text + ".";
console.log(final_text)
color_found =true;
}
if(color_found === false)
{
    console.log(" blur color is not found")
}