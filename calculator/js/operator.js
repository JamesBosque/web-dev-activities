function plus() {
    const display = document.getElementById('display').value;
    const display2 = document.getElementById('display2').value;
    const operator = document.getElementById('operator').value;

    if (display2 !== "0") {
        let answer;
        if (operator == "+") {
            answer = Number(display2) + Number(display);
        }
        document.getElementById('display2').value = answer;
        document.getElementById('display').value = "0";
    }
    else {
        document.getElementById('display').value = "0";
        document.getElementById('display2').value = display;

    }
    document.getElementById('operator').value = "+";
}


function minus() {
    const display = document.getElementById('display').value;
    const display2 = document.getElementById('display2').value;
    const operator = document.getElementById('operator').value;

    if (display2 !== "0") {
        let answer;
        if (operator == "-") {
            answer = Number(display2) - Number(display);
        }
        document.getElementById('display2').value = answer;
        document.getElementById('display').value = "0";
    }
    else {
        document.getElementById('display').value = "0";
        document.getElementById('display2').value = display;

    }
    document.getElementById('operator').value = "-";
}


function multi() {
    const display = document.getElementById('display').value;
    const display2 = document.getElementById('display2').value;
    const operator = document.getElementById('operator').value;

    if (display2 !== "0") {
        let answer;
        if (operator == "*") {
            answer = Number(display2) * Number(display);
        }
        document.getElementById('display2').value = answer;
        document.getElementById('display').value = "0";
    }
    else {
        document.getElementById('display').value = "0";
        document.getElementById('display2').value = display;

    }
    document.getElementById('operator').value = "*";
}


function divide() {
    const display = document.getElementById('display').value;
    const display2 = document.getElementById('display2').value;
    const operator = document.getElementById('operator').value;

    if (display2 !== "0") {
        let answer;
        if (operator == "/") {
            answer = Number(display2) / Number(display);
        }
        document.getElementById('display2').value = answer;
        document.getElementById('display').value = "0";
    }
    else {
        document.getElementById('display').value = "0";
        document.getElementById('display2').value = display;

    }
    document.getElementById('operator').value = "/";
}

function equals() {
    const num = document.getElementById('display').value;
    const num2 = document.getElementById('display2').value;
    const operator = document.getElementById('operator').value;
    let answer;

    if (operator == "+") {
        answer = Number(num) + Number(num2);


    }

    else if (operator == "-") {
        answer = Number(num2) - Number(num);

    }
    else if (operator == "*") {
        answer = Number(num) * Number(num2);

    }
    else if (operator == "/") {
        answer = Number(num2) / Number(num);

    }
    document.getElementById('display').value = answer;
    document.getElementById('display2').value = "0";
    document.getElementById('operator').value = "";


}
