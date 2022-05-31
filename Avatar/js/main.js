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

/*
 * Declering the variabels Start ant Stop and 
 * Assignig the to the values from the id's from htlm 'start' and 'stop'.
 */

const Stop = document.getElementById('Stop');
const Start = document.getElementById('Start');


/*
 * Make Animation for the Cars
 * 
 */ 

//gsap.from("#Lambo", {duration: 3, opacity: 0, scale: 1});

const Driving = gsap.to('#Lambo', {duration: 1, x: 500, paused: true , yoyo: true, repeat: 30});
//const Drifting = gsap.to('#Lambo', {duration: 1, x: 500, paused: true});
//const Chocing_car = gsap.to('#Lambo', {duration: 1, x: 500, paused: true})

/*
const random_driving = () => {
    const value = Math.floor(Math.random() * Object.keys(jokes).length);
    return value;
};
*/
/*
 * Making function to start and stop the animation of the cars driving.
 */


function resumeDriving() {
    console.log('resumeDriving');
    Driving.play();
};

function pauseDriving() {
    console.log('pauseDriving');
    Driving.pause();
};

Stop.addEventListener('click', pauseDriving);
Start.addEventListener('click', resumeDriving);

/*
 * Assign the variabel audioContext to AudioContext()
 * Assign the variabel audioElement to collects the audio from html.
 * using a querSelector to look for the first element,
 * that matches the discription 'audio'
 * The variabel track is assign the audioelement from html.
 */

const audioContext = new AudioContext();
const audioElement = document.querySelector( 'audio' );
const track = audioContext.createMediaElementSource(audioElement);
track.connect( audioContext.destination );
console.log(audioElement)

/*
 * Declering playButton and stopButton that collects the values from 'Start' and 'Stop'
 * Then assign both playButton and stopButton to two diffrent addEventListener
 * This code controls the backgroud sound when the cars are raceing.
 * 
 * Inside the addEventListener playButton the code check first if the audio file is suspended.
 * If the audio file is suspended then audioContext will be sett to resume playing. 
 * Then it check if the dataset === 'false', then set audioElement to audioElement.play()
 * and set dataset === 'true'
 * If this.dataset.playing === 'true', then play the dataset and set dataset to 'false'.
 * 
 * Inside the addEventListener stopButton, the code check if audioContext === 'suspended'.
 * If audio element is 'suspended' set audioContext to audioContext.resume().
 * If the this.dataset.playing === 'trur', pause audioElement and set dataset to false. 
 * 
 * The last addEventListener audioElement checks if the audio element has stopped playing,
 * if so, set playButton.dataset.playing = 'false'
 */
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
        const name = document.getElementById('Name').value;
        const size = document.getElementById('Size').value;
        const color = document.getElementById('Color').value;
        const speed = document.getElementById('Speed').value;
        const choose_car = document.getElementById('Choose_car').value;

        name.toString()

        const information = `
        Name: ${name} <br>
        Size: ${size} <br>
        Color: ${color} <br>
        Speed: ${speed} <br>`

        document.getElementById('Info').innerHTML = information;
    };
