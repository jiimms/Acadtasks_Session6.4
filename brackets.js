function checkBrackets(expression) {

    var stringToCheck;
    var openbracket = "(";
    var closebracket = ")";
    var parenthesis;
    var i = 0;
    var stack = [];
    var stack1 = [];

    stringToCheck = expression.split(""); //split and convert to array
    document.getElementById("split").innerHTML += stringToCheck + "<br>";

    function filterbrackets(string) { //to separate the braces
        return string == "(" || string == ")";
    }

    parenthesis = stringToCheck.filter(filterbrackets);
    document.getElementById("parens").innerHTML += parenthesis + "<br>";


    if (parenthesis[0] == closebracket) { 
        document.write("Incorrect" + "<br>");
        stack1.push(parenthesis[i]);
    	}	
    else {
    for (i = 0; i < parenthesis.length; i++) {
        if (parenthesis[i] == openbracket) {
            stack.push(parenthesis[i]);
        } else {
            if (stack.length != 0) {
                stack.pop();
            } else {
                stack1.push(parenthesis[i]);
            }
        }
    }


    if (stack == 0 && stack1 == 0) {
        document.write("Correct" + "<br>"); //return "correct";
    } else {
        document.write("Incorrect" + "<br>");
    }


    //console.log(stack == 0 && stack1 == 0);
}console.log(stack == 0 && stack1 == 0);
}
checkBrackets('( ( a + b ) / 5 abd )');
checkBrackets(') )( a + b ) )');
checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 abc / ( a + 3 ) ) ) )');