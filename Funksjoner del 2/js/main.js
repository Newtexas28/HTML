// Begining of main.js
/*
const user_time = () => {
    parseInt().document.getElementById('input_time').value.innerHTML
};
*/
const given_time = 3729 

console.log(given_time);

//Making a function that calculates hours from det global constant "given_time".
const hours = (given_time) => {
    return Math.trunc(given_time / 3600)
};

//Making a function that calculates minutes from det global constant "given_time", with the value from the function "hours".
const minutes = (given_time, hours) => {
    const remaining_seconds = given_time - (hours * 3600)
    return Math.trunc(remaining_seconds / 60);
};

//Making a function that calculates seconds from det global constant "given_time", with the value from the function "hours" and "minutes".
const seconds = (given_time, hours, minutes) => {
    const remaining_seconds = given_time - (hours * 3600) - (minutes * 60)
    return remaining_seconds;
};
//Making a function with all the value from the three previous functions and putting their values in a string assigne to the constant time.  
const total_time = () => {
        const h = hours(given_time)
        const m = minutes(given_time, h)
        const s = seconds(given_time, h, m)
        const time = 'Dette er tiden:' + ' ' + h.toString() + ' timer, ' + m.toString() + ' minutter, ' +  s.toString() + ' sekunder.';
        console.log(time)
        document.getElementById('time').innerHTML = time    
};