
/*
 * Begining of main.js
 */

/*
 *
 */

const initialValue = 0;
const array = [2, 3, 4, 2, 4, 44, 54];

const average = array.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue)/array.length
/*
 * Making a console.log() to check if the awner id correct.
 */


const sum = (x, y, z, n) => {
    return (x + y + z + n)/array.length;
};

console.log(average);
console.log(sum(...array));
const output = () => {
    document.getElementById('average').innerHTML = average;
};