/*
 * Beginning of main.js 
 * 
 * Author: Jon Håkon Lia <jonlia28@innlandetfylke.no>
 */  

/*
 * Making five different dictionary to store the name of the pizza, ingredients,
 * the of price the pizza, name of the drink, price of the drink.
 * Get the key from the website for which pizza and drink to select.
 * Use the key for the pizza to look up other attributes for pizza such as:
 * name, ingredients and price.
 * Do the same for drinks.
 */

const pizza_name = {
    "01": "DEN ENKLE",
    "02": "BIFFEN",
    "03": "KOKKENS KYLLING"
};

const pizza_ingredients = {
    "01": "Ost Tomatsaus",
    "02": "Ost Tomatsaus Biff Bacon Løk",
    "03": "Ost Tomatsaus Kylling Løk Mais Sjampinjong"
};


const pizza_price = {
    "01": 135,
    "02": 229,
    "03": 208
};

const drink_name = {
    "00": "0",
    "01": "Cola",
    "02": "Fanta",
    "03": "Peppsi",
    "04": "Monster"
};

const drink_price = {
    "00": 0,
    "01": 25,
    "02": 25,
    "03": 25,
    "04": 30
};

/*
 * Make a function called output()
 * Methods found at: https://www.w3schools.com/js/js_array_methods.asp
 * .split(" ") split a text string into multiple strings and put them into an array.
 * .splice(i, 1) Using splice in this case to remove elements of an array,
 *  without leaving "holes" or replace an elementin the array.  
 * .push(object) Push adds an object(that is a text string) or text string to an excisting array. 
 * .sort() sorts the text strings in alphabethical order. 
 * .join(" + ") adds a text string in between each element 
 * and join all the textstring all into one textstring.  
 * Collecting value from the website, that using .split() to convert the input
 * from a string to ann array
 */

const output = () => 
    {
        const chosen_pizza = document.getElementById('velgpizza').value;
        const chosen_drink = document.getElementById('velgdrikke').value;
        const number_of_drinks = document.getElementById('antalldrikke').value;
        const extra = document.getElementById('Ekstra').value;
        const remove = document.getElementById('Fjern').value;

        /*
         * Find the ingredients from the dictionary and split the incoming string info,
         * into an array of the individual strings with ingredients.  
         */

        const pizza_array = pizza_ingredients[chosen_pizza].split(" ");

        /*
         * Search for item to remove and use splice to remove that item.
         * Use if statement in the for loop to check if the string in pizza_array
         * is equal to the input string "remove" and use .splice() to remove 
         * the string from the pizza array.
         */

        for (let i = 0; i < pizza_array.length; i++) 
        {
            x = pizza_array[i]

            if (x === remove) 
            {
               pizza_array.splice(i, 1)
            };
        };

        if (extra != "") 
        {
            pizza_array.push(extra)
        };

        /*
         * Add the price for the pizza and the drink.
         */

        const total_price = pizza_price[chosen_pizza] + (drink_price[chosen_drink] * number_of_drinks);
        
        /*
         * Putting all the info info one string and sending it back to the website.
         */

        const pizza = `Pizza: ${pizza_name[chosen_pizza]} <br>
        Topping: ${pizza_array.sort().join(", ")} <br>
        Drikke:  ${drink_name[chosen_drink]}  ${number_of_drinks} stk. <br>
        Pris:  ${total_price}kr`;

        
        document.getElementById('result').innerHTML = pizza;
    };