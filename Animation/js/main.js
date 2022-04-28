gsap.from('#Car', {duration: 2, x: 300, scale: 0.1});

let gone = false;

const Lamborghini = document.getElementById('Car');

Lamborghini.addEventListener('click', event => {
    
    if( gone === false ) {
        gsap.to('#Car', {duration: 0.1, x: 300, scale: 0.1});
        gone = true;
    } else {
        gsap.to('#Car', {duration: 2, x: 0, scale: 1});
        gone = false;
    }
});

document.getElementById('roter').addEventListener('click', event => {
    heh.play();
    gsap.to('#Car', {duration: 0.5, y: -100, rotation: "random( -180, 180)"});
});

document.getElementById('rett').addEventListener('click', event => {
    tadaa.play();
    gsap.to('#Car', {duration: 0.5, y: 0, rotation: 0});
});