//henter input frå brukaren frå nettsida
/*
const input1 = parseInt.document.getElementById(input1).value.innerHTML;
const input2 = parseInt.document.getElementById(input2).value.innerHTML;

function summer () {
    return document.getElementById('sum').value = input1 * input2;
};
*/

const input1 = document.getElementById(input1).innerHTML;
const input2 = document.getElementById(input2).innerHTML;

const sum = () => {
    document.getElementById(sum).innerHTML = input1 * input2
};