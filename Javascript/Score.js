var txtScoreSet= document.querySelector("#txtSetScoreEnd");
var lblScoreSet= document.querySelector("#lblGameEndScore");

var player1= document.getElementById("btnp1");
var player2= document.getElementById("btnp2");
var reset= document.getElementById("btnReset");

var lb1=document.getElementById("lb1");
var lb2=document.getElementById("lb2");
var scoreend=5;
var player1Score=0;
var player2Score=0;
lblScoreSet.textContent=5;

player1.addEventListener("click",function(){
  
  if(player1Score<scoreend)
  {
    player1Score+=1;
    lb1.textContent=player1Score;
    if( player1Score==scoreend)
  {
    lb1.style.color="green";
    player1.disabled=true;
    player2.disabled=true;
  }
  }  
});

player2.addEventListener("click",function(){
  
  if(player2Score<scoreend)
  {
    player2Score+=1;
    lb2.textContent=player2Score;
    if( player2Score==scoreend)
  {
    lb2.style.color="green";
    player1.disabled=true;
    player2.disabled=true;
  }
  }  
})

txtScoreSet.addEventListener("change",function(){

  var txt= txtSetScoreEnd.value;
  console.log("press: "+ txt);
  lblScoreSet.textContent=txt;
  scoreend=txt;
  
})

reset.addEventListener("click",function()
{
  lb1.textContent=0;
  lb2.textContent=0;  
  player1.disabled=false;
  player2.disabled=false;
  lb2.style.color="black";
  lb1.style.color="black";
  scoreend=5;
  player1Score=0;
  player2Score=0;
  txtScoreSet.value="";
  lblScoreSet.textContent=5;
})

