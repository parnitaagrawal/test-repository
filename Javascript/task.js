var arr= ["a","b","c"];
//var arr=[1,2,3,4,5,6,7,8,9,10];

  var count= arr.length;
  
  while(count>0)
  {
    console.log(arr[count-1]);
    count--;
  }

  function Uniorm(uniform_arr)
  {
      var firstvalue= uniform_arr[0];

      for(var i =1; i<uniform_arr.length;i++)
      {
        //alert(item);
        if(firstvalue!==uniform_arr[i])
        {
          console.log("false");
          return false;

        }  
      }
      console.log("true");
      return true;
  }

//var sumarr=[1,2,3];
//var sumarr=[10,3,10,4];
var sumarr=[-5,100];
var result=0;

var count= sumarr.length;
console.log(count);
while(count>0)
{
  result=result + sumarr[count-1];
  count--;
}
console.log(result);


var maxarr=[-100,-20,-20];

var maxvalue=0;

maxarr.forEach(function(currentvalue)
{  
  if(maxvalue==0)
  {
    maxvalue=currentvalue;
  }
  else if(maxvalue<currentvalue)
  {
    maxvalue=currentvalue;
  }
});

console.log(maxvalue);
