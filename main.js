let numOne=document.getElementById("num1");
let button=document.getElementById("btn");
let plus=document.getElementById("plus");
let minus=document.getElementById("minus");
let divide=document.getElementById("divide");
let multiply=document.getElementById("multiply");
let clear=document.getElementById("clear");
let numbers=document.getElementsByClassName("numbers")

let result=document.getElementById("result")





for(let i=0;i<numbers.length;i++){
    numbers[i].addEventListener("click",function(){
        numOne.value+=numbers[i].innerHTML
    })
    
}
let num;
let opertor;
plus.addEventListener("click",function(){
    
    num= Number(numOne.value)
    
    numOne.value=null; 
    opertor="+" ;
   
})

minus.addEventListener("click",function(){
    
    num= Number(numOne.value)
    numOne.value=null; 
    opertor="-" ;
})

divide.addEventListener("click",function(){
    
    num= Number(numOne.value)
    numOne.value=null; 
    opertor="/" ;
})

multiply.addEventListener("click",function(){
    
    num= Number(numOne.value)
    numOne.value=null;  
    opertor="*";
})

result.addEventListener("click",function(){
    let sum=0;
    let numB= 0;
    
    numB=Number(numOne.value)
  switch (opertor) {
      case "+":
          sum=num+numB
          numOne.value=`${sum}`;
          break;
      case "-":
        sum=num-numB
        numOne.value=`${sum}`;
          break;
      case "/":
        sum=num/numB
        numOne.value=`${sum}`;
          break;
      case "*":
        sum=num*numB
        numOne.value=`${sum}`;
          break;
     
  
      default:
          break;
  }

   
    
}
)

clear.addEventListener("click",function(){
    numOne.value=null;
    num=0;
   
})



