/*
 * Beginning of main.js
 */

/*
 * Make a function with the parameter ...numbers. Then using the built in function
 * reduce() to sum the values of the input array.
 * This function was an example from the website: 
 * https://www.codegrepper.com/code-examples/javascript/array+sum+using+spread+in+js
 */

const sum = (...numbers) => {
	return numbers.reduce((accumulator, current) => {
		return accumulator += current;
	});
};

/*
 * Make a function to return the value in result1 and result2, 
 * when cliking the button on the website. 
 * Taking a textstring input from the textarea from the website and 
 * returning the value.
 * the text string is then split up into individual words and then
 * convert into numbers using the object Number.
 * 
 * Then apply the function sum() to the array to sum all elements 
 * and also calculate the average 
 * 
 */

const output = () => {
  const input_string = document.getElementById('Textarea').value;
  const text_array = input_string.split(" ");
  const array_with_numbers = text_array.map(Number);

  const sumer = sum(...array_with_numbers);

  const result1 = "Sum: " + sumer;
  const result2 = "Gjennomsnitt: " + sumer/array_with_numbers.length

  document.getElementById('sum').innerHTML = result1;
  document.getElementById('average').innerHTML = result2; 
};
