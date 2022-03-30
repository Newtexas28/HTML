/*
 * Beginning of main.js 
 * 
 * Author: Jon Håkon Lia <jonlia28@innlandetfylke.no>
 */  

/*
 * Making the class Pizza
 * Validate the input data in the constructor of the class 
 * Finding information about classes using the website:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#species
 * 
 */ 

class Pizza {
    constructor(name, size, price, ingredients) {
        if(name in Object.values(pizza_names)) {
            this._name = name;    
        }
        else {
            console.log(`Specified name: ${name} is not defined.`)
        }
        
        if (size === "Big" || size === "Small") {
            this._size = size;
        }
        else {
            console.log(`Specified size: ${size} is not defined.`)
        }

        if (isNaN(price)) {
           console.log(`${price} is not a number`);
        } 
        else{
            this._price = price;
        }
        
        this._ingredients = ingredients;
    }

    get name() {
        return this._name;
    }

    get size() {
        return this._size;
    }

    get price() {
        return this._price;
    }

    get ingredients() {
        return this._ingredients;
    }

};

class Drink {
    constructor(name, price) {
        if(name in Object.values(drink_names)) {
            this._name = name;    
        }
        else {
            console.log(`Specified name: ${name} is not defined.`)
        }

        if (isNaN(price)) {
            console.log(`${price} is not a number`);
        } 
        else {
            this._price = price;
        }
    }
    get name() {
        return this._name;
    }

    get price() {
        return this._price;
    }
};

class Menu {
    constructor() {
        let pizza_list = [];
        for (const key in pizza_names) {
            const size = "Big";
            const name = pizza_names[key];
            const price_large = pizza_price_large[key];
            const ingredients = pizza_ingredients[key];
            const pizza = Pizza(name, size, price_large, ingredients);
            pizza_list.push(pizza);
            
            size = "Small"; 
            const price_small = pizza_price_small[key];
            pizza = Pizza(name, size, price_small, ingredients);
            pizza_list.push(pizza);
        };

        let drink_list = [];
        for (const key in drink_names) {
            const name = drink_names[key];
            const price = drink_price[key];
            const drink = Drink(name, price);
            drink_list.push(drink);
        };
        this._pizza_list = pizza_list;
        this._drink_list = drink_list;

        /*
        for (const key in object) {
            if (Object.hasOwnProperty.call(object, key)) {
                const element = object[key];
                
            }
        }*/
    } 
};

const pizza = new Menu(pizza_names[chosen_pizza], pizza_ingredients[chosen_pizza], ) 

/*
 * Making five different dictionary to store the name of the pizza, ingredients,
 * the of price the pizza, name of the drink, price of the drink.
 * Get the key from the website for which pizza and drink to select.
 * Use the key for the pizza to look up other attributes for pizza such as:
 * name, ingredients and price.
 * Do the same for drinks.
 */

const pizza_names = {
    "01": "DEN ENKLE",
    "02": "BIFFEN",
    "03": "KOKKENS KYLLING",
    "04": "FALAFELEN",
    "05": "KRUTTSTERK",
    "06": "SQUASHEN",
    "07": "TOSPANNET",
    "08": "DOBBELDEKKER",
    "09": "KEBABEN",
    "10": "DRENGEN"
};

const pizza_ingredients = {
    "01": "Ost Tomatsaus",
    "02": "Ost Tomatsaus Biff Bacon Løk",
    "03": "Ost Tomatsaus Kylling Løk Mais Sjampinjong",
    "04": "Ost Tomatsaus Falafel Rødløk Gulpaprika Oliven Sjampinjong",
    "05": "Ost Tomatsaus Chili Kylling Rødløk Jalapeno",
    "06": "Ost Tomatsaus Kvitlauk Squash Raudpaprika Raudløk Oliven Sukkererter Fetaost",
    "07": "Ost Tomatsaus Pepperoni Skinke Ananas",
    "08": "Ost Tomatsaus Skinke Kjøttdeig Oregano",
    "09": "Ost Tomatsaus Chili Kebabkjøtt Mais Raudløk Jalapeño",
    "10": "Ost Tomatsaus Skinke Bacon"

};

const pizza_price_large = {
    "01": 135,
    "02": 229,
    "03": 208,
    "04": 199,
    "05": 204,
    "06": 179,
    "07": 176,
    "08": 199,
    "09": 218,
    "10": 199
};

const pizza_price_small = {
    "01": 95,
    "02": 159,
    "03": 149,
    "04": 142,
    "05": 156,
    "06": 135,
    "07": 135,
    "08": 146,
    "09": 159,
    "10": 145
}

const drink_names = {
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

        const total_price = pizza_price_small[chosen_pizza] + pizza_price_large[chosen_pizza] + (drink_price[chosen_drink] * number_of_drinks);
        const total_price_mva = pizza_price_small[chosen_pizza] + (pizza_price_small[chosen_pizza] / 5)  + pizza_price_large[chosen_pizza] + pizza_price_large[chosen_pizza] / 5 + ((drink_price[chosen_drink] + (drink_price[chosen_drink]) / 5) * number_of_drinks);
        /*
         * Putting all the info info one string and sending it back to the website.
         */
        
        const pizza_output = `Pizza: ${pizza_names[chosen_pizza]} <br>
        Topping: ${pizza_array.sort().join(", ")} <br>
        Drikke:  ${drink_names[chosen_drink]}  ${number_of_drinks} stk. <br>
        Pris uten mva:  ${total_price}kr <br>
        Pris med mva: ${total_price_mva}kr`;
    
        document.getElementById('result').innerHTML = pizza_output;
    };