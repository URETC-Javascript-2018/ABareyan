
function add() {
  var number1 = parseInt(document.getElementById("num1").value);
  var number2 = parseInt(document.getElementById("num2").value);


  var sum = number1 + number2;
  console.log("sum:", sum);

  var subtraction = number1 - number2;
  console.log("subtraction:", subtraction);

  var multiply = number1 * number2;
  console.log("multiply:", multiply);

  var division = number1 / number2;
  console.log("division:", division);

  document.getElementById("sum").value = sum;
  document.getElementById("subtraction").value = subtraction;
  document.getElementById("multiply").value = multiply;
  document.getElementById("division").value = division;



  }

  function sum(){
    var number1 = parseInt(document.getElementById("num1").value);
    var number2 = parseInt(document.getElementById("num2").value);

    var sum = number1 + number2
    console.log("sum:", sum);

    document.getElementById("sum").value = sum;
  }

  function subtraction(){
    var number1 = parseInt(document.getElementById("num1").value);
    var number2 = parseInt(document.getElementById("num2").value);

    var subtraction = number1 - number2
    console.log("subtraction:", subtraction);

    document.getElementById("subtraction").value = subtraction;
  }

  function multiply(){
    var number1 = parseInt(document.getElementById("num1").value);
    var number2 = parseInt(document.getElementById("num2").value);

    var multiply = number1 * number2
    console.log("multiply:", multiply);

    document.getElementById("multiply").value = multiply;
  }

  function division(){
    var number1 = parseInt(document.getElementById("num1").value);
    var number2 = parseInt(document.getElementById("num2").value);

    var division = number1 / number2
    console.log("division:", division);

    document.getElementById("division").value = division;
  }
