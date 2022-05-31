/*
 * Beginning of main.js 
 * 
 * Author: Jon Håkon Lia <jonlia28@innlandetfylke.no>
 */


/* 
 * This code however is outdated now if i am going to be using classes,
 * i will change the parant calss up so it has the properise of Car_Avatar.
 * Then i will make child classes that exstends from the perent class but, 
 * the childclasses will each be for a individual car, 
 * that can be modifyide by the user.
 */ 
    

class Car_Avatar extends Avatar {
    constructor(name, color, speed, engine, wheel_size, fuel) {
        
        if (isNaN(wheel_size)) 
        {
           console.log(`${wheel_size} is not a number`);
        } 
        
        else 
        {
            this._wheel_size = wheel_size;
        }
        
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
        this._engine = engine;
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
        
    get engine()
    {
        return this._engine;
    }

    get wheel_size()
    {
        return this._wheel_size;
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

/*
 * Collecting value from the website.
 */ 

const output = () => 
    {
        const name = document.getElementById('Name').value;
        const productions_year = document.getElementById('Productions_year').value;
        const color = document.getElementById('Color').value;
        const engine = document.getElementById('Engine').value;
        const choose_car = document.getElementById('Choose_car').value;

        const information = `
        Carbrand : ${choose_car} <br>
        Name of the car: ${name} <br>
        Production year: ${productions_year} <br>
        Color: ${color} <br>
        Engine: ${engine} <br>`

        document.getElementById('Info').innerHTML = information;
};

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
 * Declering the variabels Start ant Stop and 
 * Assignig the to the values from the id's from htlm 'start' and 'stop'.
 */

const Stop = document.getElementById('Stop');
const Start = document.getElementById('Start');

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

/*
 * Make Animation for the Cars
 * The first two animation is for when the cars spwan on the track
 */ 

gsap.from("#Ferrari", {duration: 3, opacity: 1, scale: 0.5});
gsap.from("#Lambo", {duration: 3, opacity: 1, scale: 0.5});

/*
 * These are three diffrent animations is for when the ferrari drives.
 * The first one goes fast, then the next slower htan the first and so on.
 * i am using gasp to animate the pictures that coresponde,
 * with the pictures htat have the id's "Ferrari" and "Lambo".
 */ 

const Driving_Ferrari = gsap.to('#Ferrari', {duration: 50, x: 5100, y:10, paused: true });
const Drifting_Ferrari = gsap.to('#Ferrari', {duration: 80, x: 5100, y: 10, paused: true});
const Chocing_car_Ferrari = gsap.to('#Ferrari', {duration: 100, x: 5100, y: 10, paused: true})

const Driving_Lambo = gsap.to('#Lambo', {duration: 50, x: 5100, y:10, z: 200, paused: true});
const Drifting_Lambo = gsap.to('#Lambo', {duration: 80, x: 5100, y: 10, paused: true});
const Chocing_car_Lambo = gsap.to('#Lambo', {duration: 100, x: 5100, y: 10, paused: true})


/*
 * Make two array to store the diffrent animations for "Ferrari" and "Lambo"
 */

const Driving_styels_Ferrari = [Driving_Ferrari, Drifting_Ferrari, Chocing_car_Ferrari];
const Driving_styels_Lambo = [Driving_Lambo, Drifting_Lambo, Chocing_car_Lambo];

/*
 * Make two random varibels that store a random driving skill.
 * Use Math.floor() here to round down to the closest number. 
 * Use Math.random() to get a pseudorandom number between 0 and 1.
 * Multiplaying this with the length of the array so we get a random vaule,
 * that can corespone to the diffrent variabels in the arrays
 */

const random_driving_Ferrari = Math.floor(Math.random() * Driving_styels_Ferrari.length);
console.log(random_driving_Ferrari, Driving_styels_Ferrari[random_driving_Ferrari])

const random_driving_Lambo = Math.floor(Math.random() * Driving_styels_Lambo.length);
console.log(random_driving_Lambo, Driving_styels_Lambo[random_driving_Lambo])

/*
 * Making function to start and stop the animation of the cars driving.
 */

function resumeDriving() {
    console.log('resumeDriving');
    Driving_styels_Ferrari[random_driving_Ferrari].play();
    Driving_styels_Lambo[random_driving_Lambo].play();

};

function pauseDriving() {
    console.log('pauseDriving');
    Driving_styels_Ferrari[random_driving_Ferrari].pause();
    Driving_styels_Lambo[random_driving_Lambo].pause();
};


/*
 * Add addeventListener on Stop and Start
 */
Stop.addEventListener('click', pauseDriving);
Start.addEventListener('click', resumeDriving);