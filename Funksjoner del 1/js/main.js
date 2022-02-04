const klikk = () => {
        document.getElementById('random').innerHTML = Math.floor((Math.random() * 100));;
    };

const input1 = 12;
const input2 = 45;

const sum = () => {
    document.getElementById('sum').innerHTML = input1 * input2;
};