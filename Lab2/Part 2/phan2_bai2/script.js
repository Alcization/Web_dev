function cal() {
    var op = document.getElementById("cal");
    var num1 = op.getElementsByClassName("firstNumber")[0].value;
    var num2 = op.getElementsByClassName("secondNumber")[0].value;
    var operator = op.getElementsByClassName("operator")[0].value;
    if (!num1 || !num2) {
        return alert("Please enter enough operands");
    }
    if (!operator) {
        return alert("Please enter operator");
    }
    switch (operator) {
        case '+':
            document.getElementById("result").innerHTML = parseFloat(num1) + parseFloat(num2);
            break;
        case '-':
            document.getElementById("result").innerHTML = parseFloat(num1) - parseFloat(num2);
            break;
        case '*':
            document.getElementById("result").innerHTML = parseFloat(num1) * parseFloat(num2);
            break;
        case '/':
            if (parseFloat(num2) == 0) {
                return alert("Cannot divided by 0");
            }
            document.getElementById("result").innerHTML = parseFloat(num1) / parseFloat(num2);
            break;
        case '^':
            document.getElementById("result").innerHTML = Math.pow(parseFloat(num1), parseFloat(num2));
            break;
        default:
            return alert("Invalid operator!");
    }
}

function reset() {
    location.reload();
}