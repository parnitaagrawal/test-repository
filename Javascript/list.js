window.setTimeout(function() {
  
var todo=["walk"];

var input= prompt("what you want to do?");

while(input!="quit")
{
    if(input==="list")
    {
     ListTOdo();
    }
    else if(input==="new")
    {
     addTodo();
    }
    else if(input==="delete")
    {
      deleteTodo();
    }
    input= prompt("what you want to do?");
}

  console.log("Quit the app");



function ListTOdo()
{
  console.log("*************");
  todo.forEach(function(arritem,index)
  {        
    console.log(index + ": " + arritem);        
  });  
  console.log("*************");  
}

function addTodo()
{
  var listitem= prompt("what you want to add?");
  todo.push(listitem);
  console.log("added todo");
}

function deleteTodo()
{
  var index=prompt("enter index to delete todo");

      todo.splice(index,1);
      console.log("deleted todo");
}


}, 2000);