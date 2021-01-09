var input = document.getElementById("input");
input.value="0";

numberZero = () => {
    if(input.value[0]=="0") {
        input.value = "0";
    } else{
        input.value=input.value+"0";
    }
}

numberOne = () => {
    if(input.value[0]=="0") {
        input.value = "1";
    } else{
        input.value=input.value+"1";
    }
}

numberTwo = () => {
    if(input.value[0]=="0") {
        input.value = "2";
    } else{
        input.value=input.value+"2";
    }
};

numberThree = () => {
    if(input.value[0]=="0") {
        input.value = "3";
    } else{
        input.value=input.value+"3";
    }
};

numberFour = () => {
    if(input.value[0]=="0") {
        input.value = "4";
    } else{
        input.value=input.value+"4";
    }
};

numberFive = () => {
    if(input.value[0]=="0") {
        input.value = "5";
    } else{
        input.value=input.value+"5";
    }
};

numberSix = () => {
    if(input.value[0]=="0") {
        input.value = "6";
    } else{
        input.value=input.value+"6";
    }
};

numberSeven = () => {
    if(input.value[0]=="0") {
        input.value = "7";
    } else{
        input.value=input.value+"7";
    }
};

numberEight = () => {
    if(input.value[0]=="0") {
        input.value = "8";
    } else{
        input.value=input.value+"8";
    }
};

numberNine = () => {
    if(input.value[0]=="0") {
        input.value = "9";
    } else{
        input.value=input.value+"9";
    }
};

sum = () => {
    if(input.value.length[-1]=="+") {
        input.value = input.value
    } else{
        input.value=input.value+"+";
    }
};

sub = () => {
    input.value=input.value+"-";
};

multiple = () => {
    input.value=input.value+"X";
};

divide = () => {
    input.value=input.value+"/";
};

clr = () => {
    input.value = "0";
};

equal = () => {
    input.value = "0";
};

removeLastChar = () => {
    input.slice(0, -1);
};