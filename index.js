let items = document.querySelectorAll(".item");
let input = document.querySelector("#input");
let firstValueBoolean = false;
let firstValue = "";
let secondValue = "";
let finalValue = "";
let operator = "";
let flag = false;
let flag1 = false;
let count = 0;

function answer() {
  if (operator === "+") {
    finalValue = Number(firstValue) + Number(secondValue);
  }
  if (operator === "-") {
    finalValue = (Number(firstValue * 10) - Number(secondValue * 10)) / 10;
  }
  if (operator === "*") {
    finalValue = Number(firstValue) * Number(secondValue);
  }
  if (operator === "/") {
    finalValue = Number(firstValue) / Number(secondValue);
  }
  firstValue = finalValue;
  console.log(finalValue);
  secondValue = "";
}

function reset() {
  input.value = "";
  firstValueBoolean = false;
  firstValue = "";
  secondValue = "";
  finalValue="";
  flag=false;
  count=0;
  flag1=false;
  operator="";
}

function handleMltipleOpertaion(item){
    if (
        item.id == "plus" ||
        item.id == "minus" ||
        item.id == "multiply" ||
        item.id == "divide"
      ){
          input.value+=item.innerText;
          answer();
          operator=item.innerText;
         
          return;
      }
        input.value+=item.innerText;
        secondValue+=item.innerText;
        console.log(secondValue)
        console.log(finalValue);
      
}

function handlefirstOpertation(item){
    if(count==0 && item.innerText==="-"){
         input.value+=item.innerText;
         count++;
         return;
    }
  else  if(count==1){
        input.value+=item.innerText;
        firstValue=Number(input.value);
        console.log(firstValue)
        count++;
        return;
    }
    else {
        count=3;
       // console.log(count);
    if (
        item.id == "plus" ||
        item.id == "minus" ||
        item.id == "multiply" ||
        item.id == "divide"
      ) {
        input.value += `${item.innerText}`;
        operator = item.innerText;
        flag = true;
        return;
      }
      input.value += `${item.innerText}`;
      firstValue += item.innerText;
      console.log(firstValue);
    }
    
   
}


function updateInput(event) {
  let item = event.target;
  if (item.id === "clr") {
    reset();
    return;
  }
   if (item.id === "ans") {
    update();
    return;
  }
  if (!flag) {
     handlefirstOpertation(item)
     
  } 
  else {
     handleMltipleOpertaion(item);
    
}
}

function update(){
    answer();
    input.value = finalValue
}

items.forEach((item) => {
  item.addEventListener("click", updateInput);
});
