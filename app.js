const firstElement = document.getElementById("num1")
const secondElement = document.getElementById("num2")
const resultElement = document.getElementById("result")
const plusBtn = document.getElementById("plus")
const minusBtn = document.getElementById("minus")
const multBtn = document.getElementById("multiplication")
const divBtn = document.getElementById("division")
const equalsBtn = document.getElementById("equals")

let operator = ""

plusBtn.onclick = function() {
    operator = "+"
}

minusBtn.onclick = function() {
    operator = "-"
}

multBtn.onclick = function() {
    operator = "*"
}

divBtn.onclick = function() {
    operator = "/"
}

function computeElements(number1, number2) {
    const value1 = Number(number1.value)
    const value2 = Number(number2.value)
    if (operator == "/") {
        if (value2 == 0) {
            return "Error! Division by zero"
        }
    }
    switch (operator) {
        case "+":
            return value1 + value2
            break
        case "-":
            return value1 - value2
            break
        case "*":
            return value1 * value2
            break
        case "/":
            return value1 / value2
            break
    }
}

function printResult(result) {
    if (result < 0) {
        resultElement.style.color = "red"
    } else {
        resultElement.style.color = "black"
    }
    resultElement.textContent = result
}

equalsBtn.onclick = function() {
    const result = computeElements(firstElement, secondElement)
    printResult(result)
}

