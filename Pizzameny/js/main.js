/*
 * Beginning of main.js 
 * 
 * Author: Jon Håkon Lia <jonlia28@innlandetfylke.no>
 */  

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
        const ekstra = document.getElementById('Ekstra').value;
        const fjern = document.getElementById('Fjern').value;
        let textforloop = "<br>" + "Ingrediensene er: " + "<br>";
        let textforofloop = "<br>" + "Ingrediensene er: " + "<br>";

        const pizza_array = chosen_pizza.split(" ");

        /*
         * Search for item to remove using splice to remove that item.
         * Using if statement to check if index to pizza_array,
         * is equal to input from fjern and if so than use .splice
         */

        for (let i = 0; i<pizza_array.length; i++) 
        {
            x = pizza_array[i]

            if (x === fjern) 
            {
               pizza_array.splice(i, 1)
            };
        };

        if (ekstra != "") 
        {
            pizza_array.push(ekstra)
        };    
    /*
     * Using 2 different loops to create a text string of all the ingredients 
     */
        for (let i = 0; i < pizza_array.length; i++) 
        {
            textforloop += pizza_array[i] + "<br>";
        };
    
        for (let x of pizza_array) 
        {
            textforofloop += x + "<br>";
        };
    /*
     * Returing the strings back to the website
     */
        const pizza = "Ingrediensene er: " + pizza_array.sort().join(" + ");

        document.getElementById("forloop").innerHTML = textforloop;
        document.getElementById("forofloop").innerHTML = textforofloop;
        document.getElementById('result').innerHTML = pizza;
    };

