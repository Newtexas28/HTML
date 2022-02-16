/*
 * Beging of main.js
 */
    
/*
 * Making a function plus to add the two input values together,
 * add returning the value.
 * using parsInt to convert the incoming input from the website thats a string
 * and converting it into numbers. Then converting the numbers into string again
 */

const plus = () => {
    const input1 = parseInt(document.getElementById('input1').value);
    const input2 = parseInt(document.getElementById('input2').value);
    const plus = input1 + input2;
    const p = plus.toString();
    document.getElementById('resultat').innerHTML = p;
};

/*
 * Making a function minus to subtract the two input values from each other,
 * in this case subtracting input2 from input1 and returing the value.
 * using parsInt to convert the incoming input from the website thats a string
 * and converting it into numbers. Then converting the numbers into string again
 */

const minus = () => {
    const input1 = parseInt(document.getElementById('input1').value);
    const input2 = parseInt(document.getElementById('input2').value);
    const minus = input1 -input2;
    const mi = minus.toString();
    document.getElementById('resultat').innerHTML = mi;
};

/*
 * Making a function multiplication to multipli input1 and input2
 * the returning the value.
 * using parsInt to convert the incoming input from the website thats a string
 * and converting it into numbers. Then converting the numbers into string again  
 */

const multiplication = () => {
    const input1 = parseInt(document.getElementById('input1').value);
    const input2 = parseInt(document.getElementById('input2').value);
    const mulitplication = input1 * input2;
    const mu = mulitplication.toString()
    document.getElementById('resultat').innerHTML = mu;
};

/*
 * Making a function to divide the numbers from input1 with the numbers from input2,
 * then returning the value.
 * using parsInt to convert the incoming input from the website thats a string
 * and converting it into numbers. Then converting the numbers into string again
 */

const division = () => {
    const input1 = parseInt(document.getElementById('input1').value);
    const input2 = parseInt(document.getElementById('input2').value);
    const division = input1 / input2;
    const di = division;
    document.getElementById('resultat').innerHTML = di;
};