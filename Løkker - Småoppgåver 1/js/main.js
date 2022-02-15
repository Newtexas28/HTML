/*
 *Beginning of file
 */

/*
 * Making a function so I can decide if I want to console.log() the for-loop or not,'
 * and being able to send the values back to the website
 * Making a for loop to console.log() the numbers from  1 to 100.
 */

/*
 * Using let instead of const when declearing the global variable numbers and index.
 * Using const will not end an error message to the user but only the first,
 * function will work. Only way to check this is in "utvikler verktøy".
 * Ther you will be able to see where the error is organating from.
 * In this case giving new values to numbers and index coudel resolv in an error
 */

let numbers = [];
let index = 0;

const to_hundred = () => {
    numbers=[];
    for (let i = 1; i < 101; i++)
    {
        numbers[i - 1] = i;
    };
    document.getElementById('to_hundred').innerHTML = numbers;
};

/*
 * Making a function so I can decide if I want to console.log() the for-loop or not,'
 * and being able to send the values back to the website
 * Making a for loop to console.log() every other the numbers from 1 to 100.
 */

const every_other = () => {
    numbers = [];
    index = 0;
    for (let i = 1; i < 101; i += 2)
    {
        numbers[index] = i
        index++
    };
    document.getElementById('every_other').innerHTML = numbers;
};

/*
 * Making a function so I can decide if I want to console.log() the for-loop or not,'
 * and being able to send the values back to the website
 * Making a for loop to console.log() every number dividable by 13.
 * Starting on 13 and jump with 13, because each number of the form,
 * (13 * n) where n is an integer. 
 */

const dividable_by_13 = () => {
    numbers = [];
    index = 0;
    for (let i = 13; i < 1001; i += 13)
    {
        numbers[index] = i;
        index++;
    };
    document.getElementById('dividable_by_13').innerHTML = numbers;
};

/*
 * Making a function so I can decide if I want to console.log() the for-loop or not,'
 * and being able to send the values back to the website
 * Making a for loop to console.log() every third number from 200 to 0-
 */

const down_every_third = () => {
    numbers = [];
    index = 0;
    for (let i = 200; i > 0; i -= 3)
    {
        numbers[index] = i;
        index++;
    };
    document.getElementById('down_every_third').innerHTML = numbers;
};

/*
 * Making a function so I can decide if I want to console.log() the for-loop or not,'
 * and being able to send the values back to the website
 * Making a for loop to console.log() every number dividable by 3 and 5.
 * I am checking if the number is dividable by 3 and 5 by checking the remainder.
 */

const division_by_3_and_5 = () => {
    numbers = [];
    index = 0;
    for (let i = 1; i < 101; i++)
    {
        const n = i % 3
        const m = i % 5
        if (n === 0 && m === 0) {
            numbers[index] = i;
            index++;
        }    
    }
    document.getElementById('division_by_3_and_5').innerHTML = numbers;
};
/*
 * Making a function so I can decide if I want to console.log() the for-loop or not,'
 * and being able to send the values back to the website
 * Making a for loop to console.log() every number dividable by 3 or 5.
 * I am checking if the number is dividable by 3 or 5 by checking the remainder.
 */

const division_by_3_or_5 = () => {
    numbers = [];
    index = 0;
    for (let i = 1; i < 101; i++)
    {
        const n = i % 3
        const m = i % 5
        if (n === 0 || m === 0) {
            numbers[index] = i;
            index++;
        }    
    }
    document.getElementById('division_by_3_or_5').innerHTML = numbers;
};