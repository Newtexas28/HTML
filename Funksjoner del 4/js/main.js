
/*
 * Begining of main.js
 */

/*
 * 
 */

const initialValue = 0;



const average = array.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue)/array.length

/*
 * Making a function sum with the input values x, y, z, n.
 * Then returning the vaule of the first 4 value elmements in the array
 * and dividing it on the length of the array
 */ 


const sum = (x, y, z, n, array) => {
    return (x + y + z + n) / array.length;
};

/*
 * Making a console.log() to check if the anwser is correct.
 */

console.log(average);
console.log(sum(...array));

/*
 * making a function to retrun the value of average, 
 * when cliking the button on the website. 
 */
const output = () => {
    let new_array = parseInt(document.getElementById('input1').value);
    const array = new_array.split(" ");

    document.getElementById('average').innerHTML = toString(sum);
};