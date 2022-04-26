/*
 * Beginning of main.js 
 * 
 * Author: Jon Håkon Lia <jonlia28@innlandetfylke.no>
 */

class Avatar {
    constructor (name, size, color, speed, fuel) {
        
        if (isNaN(size)) 
        {
           console.log(`${size} is not a number`);
        } 
        else 
        {
            this._size = size;
        }

        if (isNaN(speed)) 
        {
           console.log(`${speed} is not a number`);
        } 
        else 
        {
            this._speed = speed;
        }

        if (isNaN(fuel)) 
        {
           console.log(`${fuel} is not a number`);
        } 
        else 
        {
            this._fuel = fuel;
        }

        this._name = name;
        this._color = color;
    }

    get name() 
    {
        return this._name;
    }

    get size()
    {
        return this._size;
    }

    get color()
    {
        return  this._color;
    }

    get speed() 
    {
        return this._speed;
    }

    get fuel()
    {
        return this._fuel;
    }

    fuel_consumption(min_value, rate_of_consumption)
    {
        return (min_value + (this._speed * rate_of_consumption)) 
    }
    fuel_level() 
    {
    (100 - fuel_consumption)     
    }
}

class Car_Avatar extends Avatar {
    constructor(name, size, color, speed, engine, wheel_size, fuel) {
        super(name, size, color, speed);

        if (isNaN(wheel_size)) 
        {
           console.log(`${wheel_size} is not a number`);
        } 
        else 
        {
            this._wheel_size = wheel_size;
        }
        
        this._engine = engine;
    }

    get engine()
    {
        return this._engine;
    }

    get wheel_size()
    {
        return this._wheel_size;
    }
}


class Space_ship_Avatar extends Avatar {
    constructor(name, size, color, speed, engine, fuel) {
        super(name, size, color, speed);

        if (isNaN(fuel)) 
        {
           console.log(`${fuel} is not a number`);
        } 
        else 
        {
            this._fuel = fuel;
        }
        
        this._engine = engine;
    }

    get engine()
    {
        return this._engine;
    }

    get fuel()
    {
        return this._fuel;
    }
}

class Robot_Avatar extends Avatar {
    constructor(name, size, color, speed, prosessing_unit, battery) {
        super(name, size, color, speed);
        
        this._prosessing_unit = prosessing_unit;
        this._battery  = battery;
    }

    get prosessing_unit()
    {
        return this._prosessing_unit;
    }

    get battery()
    {
        return this._battery;
    }
}

/*
 * Declering Date.now()
 * 
 */

let start = new Date(); 
let end = new Date();

const Time = () =>
{
    let end = new Date()
    let elapsed = end.getTime() - start.getTime()
}





/*
 * Collecting value from the website
 *
 */ 


const Avatar_function = () => 
{
    const name = document.getElementById('Name').value;
    const size = document.getElementById( 'Size' ).value;
    const color = document.getElementById('Color').value;
    const speed = document.getElementById('Speed').value;

    const information = `
    Name: ${name}
    Size: ${size}
    Color: ${color}
    Speed: ${speed}`

    document.getElementById('Info').innerHTML = information;
}

