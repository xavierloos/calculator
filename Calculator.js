
//variables that will hold the two numbers and the operation to make
var x;
var y;
var opera;
//we create the funtion to get all the elements
function myCalculator(){
    var result = document.getElementById("result");
    var sum = document.getElementById("sum");
    var rem = document.getElementById("rem");
    var mult = document.getElementById("mult");
    var div = document.getElementById("div");
    var equal = document.getElementById("equal");
    var n1 = document.getElementById('one');
    var n2 = document.getElementById("two");
    var n3 = document.getElementById("three");
    var n4 = document.getElementById("four");
    var n5 = document.getElementById("five");
    var n6 = document.getElementById("six");
    var n7 = document.getElementById("seven");
    var n8 = document.getElementById("eight");
    var n9 = document.getElementById("nine");
    var n0 = document.getElementById("zero");
    var reset=document.getElementById("reset");
//inside this funtion we will create a few more functions to get the button pressed and assign the value which will apper in the result once it is pressed
    n1.onclick = function(){
        result.textContent = result.textContent + "1";
    }
    n2.onclick = function(){
        result.textContent = result.textContent + "2";
    }
    n3.onclick = function(){
        result.textContent = result.textContent + "3";
    }
    n4.onclick = function(){
        result.textContent = result.textContent + "4";
    }
    n5.onclick = function(){
        result.textContent = result.textContent + "5";
    }
    n6.onclick = function(){
        result.textContent = result.textContent + "6";
    }
    n7.onclick = function(){
        result.textContent = result.textContent + "7";
    }
    n8.onclick = function(){
        result.textContent = result.textContent + "8";
    }
    n9.onclick = function(){
        result.textContent = result.textContent + "9";
    }
    n0.onclick = function(){
        result.textContent = result.textContent + "0";
    }
//we create a function to reset the screen to null
    reset.onclick = function(){
        resetScreen();
    }
//we create the operations which contains the 2 vars as X and Y and the kind of operation to make as it clear the result content
    sum.onclick = function(){
        x = result.textContent;
        opera="+";
        clear();
    }
    rem.onclick = function(){
        x = result.textContent;
        opera="-";
        clear();
    }
    mult.onclick = function(){
        x = result.textContent;
        opera="*";
        clear();
    }
    div.onclick = function(){
        x = result.textContent;
        opera="/";
        clear();
    }
    equal.onclick = function(){
        y = result.textContent;
        total();
    }
}
//we create the funtion to delete everything 
function clear(){
    result.textContent="";
}
//we delete everything and we set the numbers to 0 and the operator to null
function resetScreen(){
    result.textContent="";
    x=0;
    y=0;
    opera=""
}
//we make the function for the operation which will take the X value and in any case will make the operation correspondent (+-*/) and will take the value from Y and will save the result in the var FINAL
function total(){
    var final=0;
    switch(opera){
        case "+":
            final=parseFloat(x)+parseFloat(y);
            break;
        case "-":
            final=parseFloat(x)-parseFloat(y);
            break;
        case "*":
            final=parseFloat(x)*parseFloat(y);
            break;
        case "/":
            final=parseFloat(x)/parseFloat(y);
            break;
    }
    resetScreen();
    result.textContent=final;
}
