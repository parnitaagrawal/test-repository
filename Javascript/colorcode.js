
  var colorcode=[
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
                 ]   
  
  var alldiv= document.querySelectorAll(".square"); 
  var level=3;
  var startnewgame= document.getElementById("spanStart");
  var easy= document.getElementById("spanEasy");
  var hard=document.getElementById("spanHard");
  var questioncolorcode;
  var lblcode= document.getElementById("lblcolorcode");
  var msg= document.getElementById("spanMsg");
  var header= document.getElementById("divheader");  
  
  getDivAccordingtoLevel(3);
  easy.classList.add("selected");
  
  startnewgame.addEventListener("click",function(){
    if(level==3)
    {
      getDivAccordingtoLevel(3);
      level=3;
    }
    else if(level==6)
    {
      getDivAccordingtoLevel(6);
      level=6;
    }
  })

  easy.addEventListener("click",function(){ 
  easy.classList.add("selected");
  hard.classList.remove("selected");
  getDivAccordingtoLevel(3);
  level=3;
  })

  hard.addEventListener("click",function(){
    hard.classList.add("selected");
    easy.classList.remove("selected");
    getDivAccordingtoLevel(6);
    level=6;
  }) 

  function MakeAlldivNone()
  {
    for(i=0;i<alldiv.length;i++)
    {
      alldiv[i].setAttribute("style","display:none");
    }
  }

  function getDivAccordingtoLevel(todisplayvalue)
  {
    lblcode.textContent="";
    msg.textContent="";
    header.style.backgroundColor="Black";
    let random = colorcode.sort(() => .5 - Math.random()).slice(0,todisplayvalue)
    questioncolorcode = random.sort(()=>.5 - Math.random()).slice(0,1);
    console.log("question"+questioncolorcode);
    MakeAlldivNone();
    random.forEach(function(el,index)
    {    
      if(index<todisplayvalue)    
      {
        alldiv[index].style.background = el;  
        alldiv[index].style.display="block";
      }      
    }) 
    lblcode.textContent=  questioncolorcode;
  }  

  RegisterAllDivClickEvent();

  function RegisterAllDivClickEvent()
  {
    for(var i=0;i<alldiv.length;i++)
  {
    alldiv[i].addEventListener("click",function(){
      console.log("insidediv click"+questioncolorcode);
      console.log("currentdivstyleback"+ this.style.backgroundColor);
        if(this.style.backgroundColor===questioncolorcode[0])
        {
          for(var j=0;j<level;j++)
          {
          alldiv[j].setAttribute("style","display:block");
          alldiv[j].style.backgroundColor=questioncolorcode[0];
          }
          header.style.backgroundColor=questioncolorcode[0];
          msg.textContent="Good Job";
        }
        else{         
          this.setAttribute("style","display:none");
          msg.textContent="try again!";
        }
    })
  }
  }










