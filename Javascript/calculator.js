var btnReset= document.getElementById("btnReset");
var btnResult=document.getElementById("btnResult");
var buttons= document.querySelectorAll(".btn");
var spanScreen= document.getElementById("lblscreen");


buttons.forEach(function(element){  
  element.addEventListener("click",function(){   
    spanScreen.textContent= spanScreen.textContent+ element.textContent;
  });
});

btnReset.addEventListener("click",function(){
  spanScreen.textContent="";
});

btnResult.addEventListener("click",function(){

  var cal= spanScreen.textContent;
  spanScreen.textContent= eval(cal);
  console.log("result: " +eval(cal));
});
