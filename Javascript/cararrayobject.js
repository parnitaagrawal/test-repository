var tbl= document.getElementById("tbl");

var Cars=[];

var i=0;
var j=0;

while(i<30)
{ 
  Car= new Object();
  Car.name="i10" + i;
  Car.speed=20 +i;
  Car.modelyear="201"+i;
  Car.type="Hashback";
  Car.colors=[];
  Car.colors.push({name:"red",code:"rgb(255, 0 ,0)",isSelected:false},{name:"green", code:"rgb(0, 255 ,0)",isSelected:false},{name:"blue", code:"rgb(0, 0 ,255)",isSelected:false},{name:"yellow",code:"rgb(255, 255 ,0)",isSelected:false},{name:"magenta", code:"rgb(0, 255 ,255)",isSelected:false},{name:"brown", code:"rgb(255, 0 ,255)",isSelected:false})
  if(i>=Car.colors.length)
  {
    let j= i % Car.colors.length;
    Car.colors[j].isSelected=true;
  }
  else{  
    Car.colors[i].isSelected=true;
  }
  Cars.push(Car);
  i++;
}
  
console.log(Cars);

addTabel();
function addTabel()
{
 var tbl= document.getElementById("tbl");
  const length= Cars.length; 
 Cars.forEach(element => {
  addRow(tbl,element,length); 
  console.log(element)  ;
 });
}

function addRow(tbl, objRowValue, length )
{
  var tr= document.createElement('tr');
  addCell(tr,objRowValue,length);
  tbl.appendChild(tr);
}

function addCell(tr,objRowValue,length)
{
  

  for(var property in objRowValue)
  {
    if(objRowValue.hasOwnProperty(property))
    {    
      var td= document.createElement('td');
      if(property==="colors")
      {

        let k= objRowValue[property].length;

        for (var j=0; j<k;j++) 
        {
          if(objRowValue[property][j].isSelected==true)
          {
            td.innerHTML= objRowValue[property][j].name;
            td.style.backgroundColor= objRowValue[property][j].code;
          }
        }
      }
      else
      {
        td.innerHTML= objRowValue[property];
      }
      
      tr.appendChild(td);
    }
  }
}
