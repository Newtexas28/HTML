/*
 * Begining of main.js
 */

/*
 * Setting up a dictonary and using numbers as the keys to be able get a,
 * random joke in a new array 
 */ 
const jokes = { 
    0: 'Hvorfor går alle svenskene med hendene i lomma? De vil ikke at noen skal se at alle fingrene ikke er like lange.',
    1: 'To blondiner var i skogen for å lete etter et juletre. Etter et par timer hadde de rukket å få frosne fingre og tær da den ene utbryter: Nå orker jeg ikke mer. Jeg tar det neste treet jeg ser, uansett om det er pyntet eller ikke.', 
    2: 'Ola: Pappa kan jeg få låne en hakke? Pappa: Hva skal du med den? Ola: Hakke peiling.', 
    3: 'Petter: pappa, pappa jeg scoret 2 mål på fotballkampen i dag, Pappa: men så bra hva ble stillingen? Petter: 1-1',    
    4: 'Hørt om han som skulle opptre, men så forsov han seg og kom ikke opp før halv fire?',
    5: 'Hva spiser spøkelser til frokost? Bøskiver.', 
    6: 'Hva får du hvis du putter en hund i en badstue? En hot dog.', 
    7: 'Har du hørt om de to eplene som ble stoppet i døra av eplenektar?', 
    8: 'Hørt om selen som var så fryktelig selopptatt?', 
    9: 'Jeg leverte tilbake kortstokken fordi fire kortene var knekt.', 
    10: 'Hvor mange indianere er det plass til i et tre? En hel stamme.', 
    11: 'Kannibalen var kommet til byen og var sulten, han gikk inn på McDonalds og bestilte barnemeny.', 
    12: 'Har du hørt om kannibalgutten som ikke ville leke med de andre på skolen? Moren hadde sagt at han ikke måtte leke med maten.', 
    13: 'Hva er likheten mellom en blomsterbutikk og Galtvort? Du finner harry potter begge steder.', 
    14: 'Det var fest i fruktfatet. Hvorfor ble det så mørkt spurte bananen? Fordi pæra har gått.', 
    15: 'Hva kalles soldater som går hånd i hånd? Leiesoldater.', 
    16: 'Jeg visste ikke at du kunne svømme. Hvor lærte du det? I vannet.', 
    17: 'Hvor kommer de sølete sporene fra? Jeg vet ikke, de har fulgt etter meg hele tiden.', 
    18: 'Hva gjør elefantene når de vil vite hva klokka er? De går ut i urskogen.',    
    19: 'Hvor ble du påkjørt? Rett foran bilen.', 
    20: 'Har du hørt om sauen som falt ned et tak og ble lam?', 
    21: 'Du er ikke sann. Nei jeg er grus.', 
    22: 'Det var en gang, men nå er det en korridor.', 
    23: 'Kelneren deler ut bestikk ved bordet. Pappa: Prøver du å bestikke meg?', 
    24: 'Har du hørt om den ene sandhaugen som ble skuffet over den andre.',
    25: 'Hva er favorittfilmen til fuglene? Pip Pip Langstrømpe.'
    };
    
/* 
 * random() is a helper function.
 * Making a random function to find a key (number) between,
 * 0 and 25 to look up a joke from the dictionary.
 * The length of  the list of keys is used as the maximum integer number,
 * when drawing a key. The drawn key is used to look up in the dictionary,
 * to return a text string.
 */

const random = () => {
    const value = jokes[Math.floor(Math.random() * Object.keys(jokes).length)];
    return value;
};

/*
 * Making four new helper functions below: red(), blue(), green() and gold().
 * Creating a new local variabel inside the function and assign it to:
 * document.getElementById("russekort");. 
 * Then give each function its own backgroundColor by giving the local variabel,
 * element a new style and backgroundColor.  
 */ 

const red =() => {
    const element = document.getElementById("russekort");
    element.style.backgroundColor = "rgba(231, 22, 22, 0.849)";
};

const blue = () => {
    const element = document.getElementById("russekort");
    element.style.backgroundColor = "rgb(70, 70, 248)";
};

const green = () => {
    const element = document.getElementById("russekort");
    element.style.backgroundColor = "green"
};

const gold = () => {
    const element = document.getElementById("russekort");
    element.style.backgroundColor = "gold"
};

/*
 * Define a variable to select file (chooseFile)
 * Define a variable to predefined a select file (imgPreview) 
 */

const chooseFile = document.getElementById("choose-file");
const imgPreview = document.getElementById("file");

const byttbilete = () => {
  const files = chooseFile.files[0];
  if (files) 
  {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(files);
    fileReader.addEventListener("load",
      function () 
      {
        imgPreview.style.display = "block";
        imgPreview.innerHTML = '<img src="' + this.result + '" />';
      }
    );    
  };
};

/*
 * Declaring the output function.
 * Getting input from from website
 * Using parseInt() to convert a string to Int.
 * Using .value to retrieve the value of input elements from the website and 
 * .toString to convert numbers into a string.
 * Making strings to send back to the website.
 * Sending the different local variables back to the website and 
 * replacing the original information with the strings in the code below.
 * The random function is used to select a joke/quote
 */
const output = () => {
    const namn = document.getElementById('Russenamn');
    const adresse = document.getElementById('Russeadresse');
    const skule = document.getElementById('Namn_på_skule_stad');
    const telefon = parseInt(document.getElementById('Russetelefon').value);

    const s = 'VGS: ' + skule.value;
    const n = 'Namn: '+ namn.value;
    const a = 'Adr: ' + adresse.value;
    const t = 'Tlf: ' + telefon.toString();

    document.getElementById('skulestad').innerHTML = s;
    document.getElementById('namn').innerHTML = n;
    document.getElementById('telefon').innerHTML = t;
    document.getElementById('adresse').innerHTML = a;
    document.getElementById('sitat').innerHTML = random();
};