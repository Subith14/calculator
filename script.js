// 1.Display number in text box

function buttonClick(num) {
    input.value+=num
}

// 2.clear text box 
function clearBox(){
    input.value=""
}

// 3.Evaluate expression 

function evaluateExp(){
    input.value=eval(input.value)
}


// 4.Remove last item from the text box 
function removelastitem(){
    input.value=input.value.slice(0,-1);
}