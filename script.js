
const beep = () =>{
    let beepSound = new Audio('./assets/bit-1.mp3')
    beepSound.volume = 0.2;
    beepSound.play()
}

let hunger = 5;
let happiness = 5;
let energy = 5;

const hungerDisplay = document.getElementById("hunger");
const happinessDisplay = document.getElementById("happiness");
const energyDisplay = document.getElementById("energy");
const vivian = document.getElementById("vivian");

function updateStats() {
  hungerDisplay.textContent = hunger;
  happinessDisplay.textContent = happiness;
  energyDisplay.textContent = energy;
  if (hunger <= 2 || energy <= 2 || happiness <= 2) {
    vivian.style.filter = "grayscale(80%)";
  } else {
    vivian.style.filter = "grayscale(0%)";
  }
}

// Botones
document.getElementById("feed").addEventListener("click", () => {
    beep()
  hunger = Math.min(10, hunger + 2);
  happiness = Math.max(0, happiness - 1);
  updateStats();
});

document.getElementById("play").addEventListener("click", () => {
      beep()
  happiness = Math.min(10, happiness + 2);
  energy = Math.max(0, energy - 1);
  updateStats();
});

document.getElementById("sleep").addEventListener("click", () => {
      beep()
  energy = Math.min(10, energy + 3);
  hunger = Math.max(0, hunger - 1);
  updateStats();
});

setInterval(() => {
    let a = Math.floor(Math.random()*3) 
if(a ===0){
  hunger = Math.max(0, hunger - 1);
}else if(a ===1){
  happiness = Math.max(0, happiness - 1);
}else{
  energy = Math.max(0, energy - 1);
}
  updateStats();
}, Math.random()*5000+5000);

updateStats();
console.log("w")