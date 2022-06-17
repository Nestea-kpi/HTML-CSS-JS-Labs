function Task1 (){
 a = Math.floor(Math.random() * (1000 - 2 + 1 )) + 10;
  var b = Number.isInteger(a);
  if(b){
      if (a%2==0){
          console.log("Введене число " + a + " є парним!");
      }
      else {
        console.log("Введене число " + a + " не є парним!");
      }
  } 
  else {
    console.log(" ")
  }
}

function Task2(){
  var arr = [];
  var sum = 0;
  while(true)
  {
    let flag = true;
    for (a=1; a<20;a++) {
         if(a===1){
           console.log("1 не просте число!!!");
         }
         else {
    for(k = 2; k < a; k++){
        if(a % k == 0){
            flag = false;
            break;
            }
            else {
       flag = true;}
     }
     if(flag){
        arr.push(a);
        if(arr.length == 5){ 
         
        for(k = 0; k < arr.length;k++){
         console.log(arr[k]);
          sum += arr[k];
        }
      }
      }

    }
      console.log("Сума перших 5 простих чисел дорівнює " + parseInt(sum));
      
     
}

  break;
  }
}



function Task3()
{
    var addit ;
    let a=88;
    addit = Math.floor((Math.pow(10, a + 1) + 10 -(9 * a)) / 81);
    console.log(addit);
}



but.addEventListener("click", Task1, true);
but1.addEventListener("click", Task2, false);
but2.addEventListener("click", Task3, false);
