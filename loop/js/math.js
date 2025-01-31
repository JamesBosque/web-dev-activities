//USE FOR LOOP TO COMPUTE THE SUM OF 1 - 20
function sum() {
    const num = document.getElementById('number').value;
    const display = document.getElementById('display');

    let answer = "";
    let sum = 0;

    for (let a = 1; a <= num; a++) {
        answer += a + "</br>";

        sum += a;
    }

    answer += "The sum is " + sum;
    display.innerHTML = answer;

    /*  let sum = 0;
        for (let a = 1; a < 21; a++) {
            console.log(a);
            sum += a;
    
        }
        console.log("The sum is:", sum);
     */
}

//FACTORIAL of a number
function factorial() {

    let number = document.getElementById('number').value;

    let answer = "";
    let product = number;
    let num = number;
    while (num > 1) {
        answer += num + "<br/>"
        product *= (num - 1);
        num--;

    }
    answer += num + "<br/>"
    answer += "The factorial of " + number + " is: " + product;
    document.getElementById('display').innerHTML = answer;

/*     let num = 5;
    let product = num;

    while (num > 1) {
        console.log(num);
        product *= (num - 1);
        num--;

    }
    console.log("The factorial of 5 is:", product);
 */}

function odd() {
    let number = document.getElementById('number').value;
    const display = document.getElementById('display');

    let answer = "";

    for (let a = 1; a <= number; a++) {
        if (a % 2 !== 0) {
            answer += a + "</br>";
        }

    }

    display.innerHTML = answer;
}

function even() {
    let number = document.getElementById('number').value;
    const display = document.getElementById('display');

    let answer = "";

    for (let a = 1; a <= number; a++) {
        if (a % 2 === 0) {
            answer += a + "</br>";
        }

    }

    display.innerHTML = answer;
}




