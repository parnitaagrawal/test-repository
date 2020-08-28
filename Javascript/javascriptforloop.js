// var i,j;
//   var rows=5;
//    for(i=1;i<=rows;i++)
//    {
// 	for(j=1;j<=i;j++)
//      document.write("*");
     
// 	document.write("<br>");
//    }


   var cnt=1;
   var spacechr=5;
   var msg= "";
   var output="1";
   var finaloutput="";
   
debugger;
   while(cnt<=5)
   {
      if(cnt==1)
      {
         output="1";
         msg=msg+output;
      }
      else
      {
         output= String(Math.pow(11,cnt-1));
         var out= output.split('');
         out.forEach(function(innerItem){
            msg = msg+ innerItem +" ";
         });     
           // console.log(msg); 

      }
      while(spacechr>=1)
      {
         finaloutput+="*";
         spacechr--;
      }

      spacechr=spacechr-1;

     var sum= finaloutput+msg;
      
      document.write(sum);
      document.write("<br>");
      msg="";
      cnt++;
   }

   