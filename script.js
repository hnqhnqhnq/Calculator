const buttons = document.querySelectorAll(".button");
const textBox = document.querySelector(".calculator-textbox");
let numberPoint = 0;
let result = 0;

function calculateValue(button){
    if(button.textContent == "="){
        try {
            result = eval(textBox.value);
            textBox.value = result;

            if(textBox.value.includes("."))
                numberPoint = 1;
            else
                numberPoint = 0;
            
        } catch (error) {
            textBox.value = "Error";
        }
    } 
    else
        updateText(button);
}

function updateText(button){
    textBox.value = textBox.value + button.textContent;
    textBox.scrollLeft = textBox.scrollWidth;
}

function deleteContent(){
    textBox.value="";
    numberPoint = 0;
    result = 0;
}

function writeContent(button){
    if(button.textContent >= "0" && button.textContent <= "9")
        updateText(button);
    else if(button.textContent == "." && numberPoint == 0 
        && textBox.value[textBox.value.length-1]>= "0" && textBox.value[textBox.value.length-1] <="9"){
        numberPoint++;
        updateText(button);
    }
    else
        calculateValue(button);
}

buttons.forEach((button) => {
    button.addEventListener("click", ()=>{
        if(button.textContent == "AC")
            deleteContent();
        else 
            writeContent(button);
    });
});

//git commit
