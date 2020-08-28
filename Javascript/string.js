var counter=100;
var MaxLength= 100;

var spanCounter= document.getElementById("spanCharCounter");
var textInput= document.getElementById("txtInput");
var divSub= document.getElementById("divSubstring");
var btnSub= document.getElementById("btnSubstring");

spanCounter.textContent=counter;
textInput.addEventListener("input",function(){  
    counter--;
    if(counter===0)
    {
      textInput.setAttribute("disabled",true);
    }   
      spanCounter.textContent=counter;
    
});
var fullstring="";
btnSub.addEventListener("click",function(){
showless();
});

function showless()
{
   fullstring= textInput.value;
  let substring= fullstring.substring(0,25); 
  divSub.innerHTML=substring + "<a  href=" + "#"+ " onclick=" + "showmore()"+" > Read More... </a>";
}

function showmore()
{
  divSub.innerHTML=fullstring + "<a  href=" + "#"+ " onclick=" + "showless()"+" > Show less </a>";
}

var btnreplace= document.getElementById("btnReplace");
btnreplace.addEventListener("click",function(){
let newstring= textInput.value.replace(/[,*]/g, "$");
textInput.value=newstring;
});

var string1= "this is my country, I love my country";
var arr= string1.split('');
var counter1=arr.length-1;
var newstring1="";
while(counter1>=0)
{  
  newstring1= newstring1+ arr[counter1]; 
  counter1--;
}
console.log(string1);
console.log(newstring1);

str1="today's";
str2="menu is:";
str3="idli/dosa";

console.log(str1+" " + str2+" "+str3);




