var num1, num2;
var op;
var resultado;


resultado = num1 + num2;
resultado = num1 - num2;
resultado = num1 / num2;
resultado = num1 * num2;

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
readline.question(`Digite um número `, num1 => {
    
    readline.question(`Digite outro número `, num2 => {

        readline.question(`Digite a op `, op => {
            console.log(typeof num1, typeof num2);
            if (op == '+') {
                resultado = Number(num1) + Number(num2)
            }

            if (op == '-') {
                resultado =  Number(num1) - Number(num2)
            }
            if (op == '*') {
                resultado =  Number(num1) * Number(num2)
            }

            if (op == '/') {
                resultado =  Number(num1) / Number(num2)
            }
            console.log(`o resultado é ${resultado}!`);
            readline.close();
        });

    });
});



