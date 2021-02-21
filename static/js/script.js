// import * as Tone from 'tone'

// create a synth and connect it to the main output (your speakers)
// const synth = new Tone.Synth().toDestination();

//play a middle 'C' for the duration of an 8th note
// synth.triggerAttackRelease("C4", "8n");


// document.querySelector(".key-white").addEventListener("click", async () => {
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
//     Key.addEventListener("click", (evt) => {

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


function myFunction() {
    Key.addEventListener("click", async () => {
        alert("Hello World")
        const synth = new Tone.MonoSynth().toMaster();
      
        synth.triggerAttackRelease("C1", "8n")
        
        // await Tone.start()
        // console.log('audio is ready')
        // synth.triggerAttackRelease("C4", "8n");

    });
    KeyC.addEventListener("click", async () => {
        
        const synth = new Tone.MembraneSynth().toMaster();
      
        synth.triggerAttackRelease("C2", "8n")
});
    KeyCS.addEventListener("click", async () => {
        
    const synth = new Tone.MembraneSynth().toMaster();
  
    synth.triggerAttackRelease("C5", "8n")
});
    KeyD.addEventListener("click", async () => {
        
    const synth = new Tone.MembraneSynth().toMaster();
  
    synth.triggerAttackRelease("D2", "8n")
});
    KeyDS.addEventListener("click", async () => {
        
    const synth = new Tone.MembraneSynth().toMaster();
  
    synth.triggerAttackRelease("D5", "8n")
});
    KeyE.addEventListener("click", async () => {
        
    const synth = new Tone.MembraneSynth().toMaster();
  
    synth.triggerAttackRelease("E5", "8n")
});
    KeyF.addEventListener("click", async () => {
        
    const synth = new Tone.MembraneSynth().toMaster();
  
    synth.triggerAttackRelease("f2", "8n")
});
    KeyFS.addEventListener("click", async () => {
        
    const synth = new Tone.MembraneSynth().toMaster();
  
    synth.triggerAttackRelease("D5", "8n")
});
    KeyG.addEventListener("click", async () => {
        
    const synth = new Tone.MembraneSynth().toMaster();
  
    synth.triggerAttackRelease("G2", "8n")
});
    KeyGS.addEventListener("click", async () => {
        
    const synth = new Tone.MembraneSynth().toMaster();
  
    synth.triggerAttackRelease("G4", "8n")
});
    KeyA.addEventListener("click", async () => {
        
    const synth = new Tone.MembraneSynth().toMaster();
  
    synth.triggerAttackRelease("A2", "8n")
});
    KeyAS.addEventListener("click", async () => {
        
    const synth = new Tone.MembraneSynth().toMaster();
  
    synth.triggerAttackRelease("D5", "8n")
});
    KeyB.addEventListener("click", async () => {
        
    const synth = new Tone.MembraneSynth().toMaster();
  
    synth.triggerAttackRelease("B2", "8n")
});

}


myFunction() 

