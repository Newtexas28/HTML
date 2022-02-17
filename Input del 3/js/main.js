/*
 * Begining of main.js
 * Author: Jon Håkon Lia <jonlia28@innlandetfylke.no>
 */ 

/*
 * Making the functions plus(), minus(), multiplication() and division(),
 * for the arithmetic operation between the two input values.
 * The functions return the result of the of operation.
 * I use parseInt() to convert the incoming input string to a number.
 * Then the result is converted into a string again for the output field.
 */

const plus = () => {
    const input1 = parseInt(document.getElementById('input1').value);
    const input2 = parseInt(document.getElementById('input2').value);
    const plus = input1 + input2;
    const p = plus.toString();
    document.getElementById('resultat').innerHTML = p;
};

const minus = () => {
    const input1 = parseInt(document.getElementById('input1').value);
    const input2 = parseInt(document.getElementById('input2').value);
    const minus = input1 -input2;
    const mi = minus.toString();
    document.getElementById('resultat').innerHTML = mi;
};

const multiplication = () => {
    const input1 = parseInt(document.getElementById('input1').value);
    const input2 = parseInt(document.getElementById('input2').value);
    const mulitplication = input1 * input2;
    const mu = mulitplication.toString()
    document.getElementById('resultat').innerHTML = mu;
};

const division = () => {
    const input1 = parseInt(document.getElementById('input1').value);
    const input2 = parseInt(document.getElementById('input2').value);
    const division = input1 / input2;
    const di = division;
    document.getElementById('resultat').innerHTML = di;
};