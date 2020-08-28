var firstp= document.getElementById("first");
console.log("byelementbyid:" + firstp);

var pbyclass= document.getElementsByClassName("special")[0];
console.log("class:" +pbyclass);

var queryP= document.querySelector("#first");
console.log("query:" + queryP);

var queryallp= document.querySelectorAll("#first")[0];
console.log("queryall:"+queryallp);

var tagP= document.getElementsByTagName("p")[0];
console.log("tag:" + document.getElementsByTagName("p")[0]);

var btn= document.getElementById("btnclickme");
// //var body= document.getElementsByTagName("body")[0];
// var isPurple=false;
// btn.addEventListener("click",function(){
// if(isPurple)
// {  
//   console.log("white:"+isPurple);
//     document.body.style.background="white";}    
// else 
// {  
//   console.log("purple:"+isPurple);
//   document.body.style.background="purple";  
// }
// isPurple=!isPurple;
// });



btn.addEventListener("click",function(){
document.body.classList.toggle("purple");
})

