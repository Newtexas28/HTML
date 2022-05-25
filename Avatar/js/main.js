/*
 * Beginning of main.js 
 * 
 * Author: Jon Håkon Lia <jonlia28@innlandetfylke.no>
 */

import { startHandler, stopHandler, updateTimer, updateLabel } from "./Time.js";

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
};

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
};


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
};

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
};

const fuel_calculations = (Max_volume, speed, time_from_start) => 
{

};
const Stop = document.getElementById('Stop');
const Start = document.getElementById('Start');


startHandler();
stopHandler();
updateTimer();
updateLabel();

gsap.from("#imgCar", {duration: 3, opacity: 0, scale: 0.5});

const Driving = gsap.to('#imgCar', {duration: 10, x: 500, paused: true , yoyo: true, repeat: 30});
const Drifting = gsap.to('#imgCar', {duration: 10, x: 500, paused: true})

Stop.addEventListener('click', pauseDriving);
Start.addEventListener('click', resumeDriving);


function resumeDriving() {
    console.log('resumeDriving');
    Driving.play();
};

function pauseDriving() {
    console.log('pauseDriving');
    Driving.pause();
};

const audioContext = new AudioContext();
const audioElement = document.querySelector( 'audio' );
const track = audioContext.createMediaElementSource(audioElement);
track.connect( audioContext.destination );

const playButton = document.getElementById( 'Start' );
const stopButton = document.getElementById( 'Stop')

playButton.addEventListener('click', function() {
    if ( audioContext.state === 'suspended' ) {
        audioContext.resume();
    }

    if ( this.dataset.playing === 'false' ) {
        audioElement.play();
        this.dataset.playing = 'true';
    }
    else if ( this.dataset.playing === 'true' ) {
        audioElement.play()
        this.dataset.false
    }
}, false);

stopButton.addEventListener('click', function() {
    if ( audioContext.state === 'suspended' ) {
        audioContext.resume();
    }

    if ( this.dataset.playing = 'true' ) {
       audioElement.pause();
       this.dataset.playing = 'false';
   };
}, false);

audioElement.addEventListener('ended', () => {
    playButton.dataset.playing = 'false';
}, false);

let Condition = true;
function Avatarrace() {
    const input = document.getElementById( 'Input' );
    const race = document.getElementById( 'Race' );
        
    if (Condition === true) {
        input.style.display = "none";
        race.style.display = "block";
        Condition = false;
    }

    else if (Condition === false) {
        input.style.display = "block";
        race.style.display = "none";
        Condition = true;
    }
};

/*
 * Collecting value from the website
 *
 */ 

const output = () => 
    {
        const name = document.getElementById('Name');
        const size = document.getElementById('Size');
        const color = document.getElementById('Color');
        const speed = document.getElementById('Speed');

        const information = `
        Name: ${name}
        Size: ${size}
        Color: ${color}
        Speed: ${speed}`

        document.getElementById('Info').innerHTML = information;
    };
