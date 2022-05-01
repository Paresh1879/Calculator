const container = document.createElement('div');
container.setAttribute('class', 'container');
container.setAttribute('name',"calc");
const body= document.querySelector("body");
body.appendChild(container);


let buttons = ["C","CE","/","-","7","8","9","log","x²","4","5","6","1/x","√x","3","2","1","*","+","0","00",".","="]

const input = document.createElement("input");
input.setAttribute('class', 'input');
input.setAttribute('type',"text");
container.appendChild(input);

for(let i=0;i<buttons.length;i++){
    let btn = document.createElement('span');
    btn.innerHTML=buttons[i];
    container.appendChild(btn);
    btn.setAttribute('class', 'num'); 
    btn.addEventListener('click',add);
    switch(true){
        case buttons[i]=="C":
             btn.classList.add("c");
             break;
        case buttons[i]=="CE":
             btn.classList.add("ce");
             break;
        case buttons[i]=="+":
            btn.classList.add("add");
            break;
         default:
           break;
    }
}


 function add(){
   for(let i=0;i<10;i++){
       if(this.innerHTML==i){
           input.value +=this.innerHTML;
       }
   }
      if(this.innerHTML=="log"){
         log();
        
      }
      if(this.innerHTML=="+"){
        input.value +=this.innerHTML;
    }
    if(this.innerHTML=="."){
      input.value +=this.innerHTML;
    }
    if(this.innerHTML=="-"){
      input.value +=this.innerHTML;
    }
    if(this.innerHTML=="/"){
      input.value +=this.innerHTML;
    }
    if(this.innerHTML=="*"){
      input.value +=this.innerHTML;
    }
  
      
      if(this.innerHTML=="="){
          input.value =eval(input.value);
      }
      if(this.innerHTML=="√x"){
          squareRoot();
      }
      if(this.innerHTML=="x²"){
        square();
      }
      if(this.innerHTML=="1/x"){
        squareNumRoot();
      }
      if(this.innerHTML=="C"){
          input.value=" ";
      }
      if(this.innerHTML=="CE"){
        lastDelete();
      }
   
}

function log(){
  let loga = input.value;
  let lo = Math.log(loga);
  input.value = lo;
}
function squareRoot(){   
    var squareRoot= input.value;
    var sqrt = Math.sqrt(squareRoot);
    input.value = sqrt;
  }


  function square(){
    var squared = input.value;
    var sqr = squared*squared;
    input.value = sqr;
  }
  
  function squareNumRoot(){
    var sqaureNumRoot = input.value;
    var sqrn = 1/sqaureNumRoot;

  }  

  function lastDelete(){
    var lastDelete= input.value;
    input.value = lastDelete.substring(0, lastDelete.length - 1);
  }; 

  var keys = ["1","2","3","4","5","6","7","8","9","/","*","-","+",".",'0'];
  document.addEventListener("keypress",function(event) {

    if(keys.includes(event.key)){
    input.value += event.key;
    }
    if(event.keyCode =="13"){
      input.value = eval(input.value);
   }
   
  })

 
  document.addEventListener("keydown",function(event){
    if(event.keyCode==27){
      input.value = " ";
    }
    if(event.keyCode==8){
      lastDelete();
    }
  })