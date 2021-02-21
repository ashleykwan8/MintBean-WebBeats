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
// document.getElementById("#hi").addEventListener("click", myFunction);

function myFunction() {
    Key.addEventListener("click", async () => {
        alert("Hello World")
        const synth = new Tone.MembraneSynth().toMaster();
      
        synth.triggerAttackRelease("C2", "8n")
        
        // await Tone.start()
        // console.log('audio is ready')
        // synth.triggerAttackRelease("C4", "8n");

    });
} 

myFunction() 
