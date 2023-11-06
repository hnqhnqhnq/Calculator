const buttons = document.querySelectorAll(".button");
const textBox = document.querySelector(".calculator-textbox");
let value = 0;
let numberPoint = 0;
let inlineValue = 0;

function updateValue(button){
    textBox.value = textBox.value + button.textContent;
    value = parseFloat(textBox.value);
    textBox.scrollLeft = textBox.scrollWidth;
}

function deleteContent(){
    textBox.value="";
    value = 0;
    numberPoint = 0;
    inlineValue = 0;
}

function writeContent(button){
    if(button.textContent >= "0" && button.textContent <= "9")
        updateValue(button);
    else if(button.textContent == "." && numberPoint == 0 
        && textBox.value[textBox.value.length-1]>= "0" && textBox.value[textBox.value.length-1] <="9"){
            numberPoint++;
            updateValue(button);
    }
    else{
        
    }
}

buttons.forEach((button) => {
    button.addEventListener("click", ()=>{
        if(button.textContent == "AC")
            deleteContent();
        else 
            writeContent(button);
    });
});
