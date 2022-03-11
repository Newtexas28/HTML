/*
 * Beginning of main.js 
 * 
 * Author: Jon Håkon Lia <jonlia28@innlandetfylke.no>
 */  

/*
 * Make a function called output()
 *
 */ 

const output = () => {
    const Pizzaingrediens = ["ost", "Tommatsaus"];

    const addtopping1 = document.getElementById('add1');
    const addtopping2 = document.getElementById('add2');
    const remove1 = document.getElementById('remove1');
    const remove2 = document.getElementById('remove2');

    const a1 = Pizzaingrediens.push(addtopping1);
    Pizzaingrediens.push(addtopping2);
    Pizzaingrediens.pop(remove1); 
    Pizzaingrediens.pop(remove2);

    const ingridiensene = "Ingridiensene er: " + addtopping1;

    document.getElementById('topping').innerHTML = ingridiensene;
};