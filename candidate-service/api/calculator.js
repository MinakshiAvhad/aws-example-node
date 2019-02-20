'use strict';

module.exports.submit = async (event, context) => {
	if(event.body){
		let input = JSON.parse(event.body);
		var operation = input.operation;
		var num1 = input.num1;
		var num2 = input.num2
	}else{
		var operation = event.operation;
		var num1 = event.num1;
		var num2 = event.num2;
	}
    var result, n1, n2;
    if (operation == '+') {
        n1 = parseFloat(num1); // parseFloat can parse a string with a decimal into a number
        n2 = parseFloat(num2); // using here instead of parseInt which is only for whole numbers
        result = n1 + n2;
    } else if (operation == '-') {
        n1 = parseFloat(num1); // parseFloat can parse a string with a decimal into a number
        n2 = parseFloat(num2); // using here instead of parseInt which is only for whole numbers
        result = n1 - n2;
    } else if (operation == '*') {
        n1 = parseFloat(num1); // parseFloat can parse a string with a decimal into a number
        n2 = parseFloat(num2); // using here instead of parseInt which is only for whole numbers
        result = n1 * n2;
    } else if (operation == '/') {
        n1 = parseFloat(num1); // parseFloat can parse a string with a decimal into a number
        n2 = parseFloat(num2); // using here instead of parseInt which is only for whole numbers
        result = n1 / n2;
    }
    result = "RESULT IS = " + result;



    return {
        statusCode: 200,
        body: JSON.stringify({
            message: result,
            input: event,
        }),
    };

};