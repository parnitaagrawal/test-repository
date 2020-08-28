var movie =[
  {
    title:"RHTDM",
    rating:4,
    hasWatched:true
  },
  {
    title:"DDLJ",
    rating:3,
    hasWatched:false
  },
  {
    title:"Kasoor",
    rating:2,
    hasWatched:false
  },
  {
    title:"Don",
    rating:5,
    hasWatched:true
  }
];

for(var i=0; i<movie.length;i++)
{
  if(movie[i].hasWatched===true)
  {
    console.log("you have seen \"" + movie[i].title + "\" - " + movie[i].rating + " stars")
  }
  else if(movie[i].hasWatched===false)
  {
    console.log("you have not seen \"" + movie[i].title + "\" - " + movie[i].rating + " stars")
  }
}


//method inside and object- help keep code organised
//namespace collision so differentate by object

var obj={
  name:"charu",
  age:33,
  isCool:true,
  friends:["ankur","sharmila","kiyaan"],
  add: function(x,y)
  {
    return x+y;
  }  
};

var dogSpace={};
dogSpace.speak= function(){
  return "woof";  
}

var catSpace={};
catSpace.speak=function(){
  return "meow";
}

console.log(dogSpace.speak());
console.log(catSpace.speak());



