var firstNumber = document.getElementById("firstNumber")
var secondNumber =  document.getElementById("secondNumber")

var h1 = document.getElementById("result")
var addButton = document.getElementById("add")
var minButton = document.getElementById("subtract")
var multButton = document.getElementById("multiply")
var divButton = document.getElementById("divide")
var equalButton = document.getElementById("equal")
var clearButton = document.getElementById("clear")
var operator = "+"

addButton.addEventListener('click',function(){
    operator = "+"
    })

minButton.addEventListener('click',function(){ 
    operator = "-"
    })

multButton.addEventListener('click',function(){ 
    operator = "*"
    })

divButton.addEventListener('click',function(){ 
    operator = "/"
    })

equalButton.addEventListener('click',function(){ num1 = parseFloat(firstNumber.value)
    num2 = parseFloat(secondNumber.value)
    if (operator == "+")
        var sum = (num1 + num2)
    if (operator == "-")
        var sum = (num1 - num2)
    if (operator == "*")
        var sum = (num1 * num2)
    if (operator == "/")
        var sum = (num1 / num2)
    h1.innerHTML= num1 + operator +num2+" = "+sum
    document.getElementById("firstNumber").value = ""
    document.getElementById("secondNumber").value = ""})

clearButton.addEventListener('click',function(){ 
        document.getElementById("firstNumber").value = ""
        document.getElementById("secondNumber").value = ""
        h1.innerHTML= "result goes here"
    })
