
var result = 0;
var result_temp = "";
var operator = '+';
var first = true;
var operator_ant = '+';

function press(parameter) {
    result_temp += parameter;
    console.log("result_temp = " + result_temp);
    console.log("result = " + result);
}

/* function press(parameter) {

    if (operator === '+') {
        result = result + parameter;
    }
    else if (operator === '-') {
        result = result - parameter;
    }
    else if (operator === '*') {
        if (first) {
            result = 1;
        }
        result = result * parameter;
    }
    else if (operator === '/') {
        if (first) {
            result = 1;
        }
        result = result / parameter;
    }
    else {
        result = parameter;
    }

    if (first) { first = false; }
}
 */
function calculate() {

    // debugger;
    setOP("=");
    var displayDiv = document.querySelector("#display");
    // console.log(displayDiv);
    displayDiv.innerText = result;

}

function clr() {

    // debugger;

    result = 0;
    result_temp = "";
    calculate();
}

function setOP(setOP) {


    operator = setOP;

    if (!(first)) {

        if (operator_ant === '+') {
            result = result + +result_temp;
        }
        else if (operator_ant === '-') {
            result = result - +result_temp;
        }
        else if (operator_ant === '*') {

            result = result * +result_temp;
        }
        else if (operator_ant === '/') {

            result = result / +result_temp;
        }
        else {
            result = +result_temp;

        }

        result_temp = "";
    }
    else {
        result = +result_temp;
        result_temp = "";
        first = false;
    }

    if (!(operator === "=")) {
        operator_ant = operator;
    }


    console.log("result_temp = " + result_temp);
    console.log("result = " + result);


}
