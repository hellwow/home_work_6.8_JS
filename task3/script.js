const trafficLightEl = document.querySelector('#trafficLight');
const trafficLightE2 = document.querySelector('#trafficLight');
const trafficLightE3 = document.querySelector('#trafficLight');

function makeGreen() {
    trafficLightEl.style.background = ('green');
    trafficLightEl.removeEventListener('click', makeYellow);
    trafficLightEl.addEventListener('click', makeRed);
}

trafficLightEl.addEventListener('click', makeGreen);

function makeYellow() {
    trafficLightE2.style.background = ('yellow');
    trafficLightE2.removeEventListener('click', makeRed);
    trafficLightE2.addEventListener('click', makeGreen);
}

trafficLightE2.addEventListener('click', makeYellow);

function makeRed() {
    trafficLightE3.style.background = ('red');
    trafficLightE3.removeEventListener('click', makeGreen);
    trafficLightE3.addEventListener('click', makeYellow);
}

trafficLightE3.addEventListener('click', makeRed);