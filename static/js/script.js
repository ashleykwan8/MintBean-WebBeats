// import * as Tone from 'tone'

// create a synth and connect it to the main output (your speakers)
// const synth = new Tone.Synth().toDestination();

//play a middle 'C' for the duration of an 8th note
// synth.triggerAttackRelease("C4", "8n");


// document.querySelector(".key-white").addEventListener("mousedown", async () => {
//     const synth = new Tone.Synth().toDestination();
//     await Tone.start();
//     synth.triggerAttackRelease("C4", "8n");
//     alert("You cliecked me");
//     console.log("works?");
// })

// let elementKey = document.getElementById("C-sharp");
// console.log("HI")
// console.log(elementKey)

// let Key = document.querySelectorAll("#C-sharp")
// console.log(Key);

// function callMe(evt) {
//     Key.addEventListener("mousedown", (evt) => {

//     alert("You cliecked me");
//     console.log("works?");
// });

// callMe();
let Key = document.getElementById("hi")
let KeyC = document.getElementById("C")
let KeyCS = document.getElementById("C-sharp")
let KeyD = document.getElementById("D")
let KeyDS = document.getElementById("D-sharp")
let KeyE = document.getElementById("E")
let KeyF = document.getElementById("F")
let KeyFS = document.getElementById("F-sharp")
let KeyG = document.getElementById("G")
let KeyGS = document.getElementById("G-sharp")
let KeyA = document.getElementById("A")
let KeyAS = document.getElementById("A-sharp")
let KeyB = document.getElementById("B")
const synth = new Tone.MembraneSynth().toMaster();
let now = Tone.now()


function myFunction() {
    // keys playing
    
    KeyC.addEventListener("mousedown", async () => {
        
        
        synth.triggerAttackRelease("C4")
});
    KeyCS.addEventListener("mousedown", async () => {
        
    
  
    synth.triggerAttackRelease("C#4")
});
    KeyD.addEventListener("mousedown", async () => {
        
    
  
    synth.triggerAttackRelease("D4", "8n")
});
    KeyDS.addEventListener("mousedown", async () => {
        
    
  
    synth.triggerAttackRelease("D#4", "8n")
});
    KeyE.addEventListener("mousedown", async () => {
        
    
  
    synth.triggerAttackRelease("E4", "8n")
});
    KeyF.addEventListener("mousedown", async () => {
        
    
  
    synth.triggerAttackRelease("F4", "8n")
});
    KeyFS.addEventListener("mousedown", async () => {
        
    
  
    synth.triggerAttackRelease("F#4", "8n")
});
    KeyG.addEventListener("mousedown", async () => {
        
    
  
    synth.triggerAttackRelease("G4", "8n")
});
    KeyGS.addEventListener("mousedown", async () => {
        
    
  
    synth.triggerAttackRelease("G#4", "8n")
});
    KeyA.addEventListener("mousedown", async () => {
        
    
  
    synth.triggerAttackRelease("A4", "8n")
});
    KeyAS.addEventListener("mousedown", async () => {
        
   
  
    synth.triggerAttackRelease("A#4", "8n")
});
    KeyB.addEventListener("mousedown", async () => {
        
    
  
    synth.triggerAttackRelease("B4", "8n")
});

}


myFunction() 