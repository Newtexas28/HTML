
/*
 * Begining of main.js
 */

/*
 *
 */

const initialValue = 0;
const array = [1,2,2,4,34,3,64,32,1]

const average = array.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue)/array.length

console.log(average);
const output = () => {};