// var person = [
//   ,
// ];

var persons = [];
var person ={ 
  
};




var i = 1;
while (i <= 20) {
  
  person = new Object();
  person.name = "ABC" + i;
  person.age = i + 10;
  person.address = "amsterdam new west" + i;
  person.mobile = "068342145" + i;
  person.emailid = "abc" + i + "@gmail.com";
  persons.push(person);
  i++;
}

addTabel();
function addTabel()
{
 var tbl= document.getElementById("tbl");

 persons.forEach(element => {
  addRow(tbl,element); 
  console.log(element)  ;
 });
}

function addRow(tbl, objRowValue )
{
  var tr= document.createElement('tr');
  addCell(tr,objRowValue);
  tbl.appendChild(tr);
}

function addCell(tr,objRowValue)
{
  for(var property in objRowValue)
  {
    if(objRowValue.hasOwnProperty(property))
    {    
      var td= document.createElement('td');
      td.innerHTML= objRowValue[property];
      tr.appendChild(td);
    }
  }
}

colorevenRow();

function colorevenRow()
{
  var table=  document.getElementById("tbl");
  var rows = table.getElementsByTagName("tr") ;
  for(var i = 0; i <= rows.length; i++)
  {
      if(i%2==0){
          rows[i].style.backgroundColor = "grey" ;
      }     
  }
}


//console.log(persons);