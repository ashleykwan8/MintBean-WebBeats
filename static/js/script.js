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
let record = document.getElementById("record-btn")

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

// let keyNotes = []

// let clicked = false

// //This is function below with 
// record.addEventListener("click", (e) => {
//     alert("YOU")
//     console.log(e)
//     clicked = true
//     console.log(clicked)

// })

// console.log(clicked)
let clicked = false
let keyNotes = []
function myFunction() {

    
    record.addEventListener("click", (e) => {
        alert("YOU")
        clicked = true

        //When recording starts, the button changes
        document.getElementById("record-btn").innerText ="Finish"
        document.getElementById("record-btn").id = "stop-record-btn"
        let stopRecord = document.getElementById("stop-record-btn")
        console.log(stopRecord)

        //Change the finish record button back to record
        stopRecord.addEventListener("click", (e) => {
            alert("STOP RECORDING")
            clicked = false
            document.getElementById("stop-record-btn").innerText ="Record"
            document.getElementById("stop-record-btn").id = "record-btn"
            console.log(clicked)
            // return keyNotes
        })

        console.log(clicked)
        if (clicked === true) {
            alert("YOU ARE RECORDING")}
            // let keyNotes = []

            KeyC.addEventListener("mousedown", async () => {
                synth.triggerAttackRelease("C4")
                keyNotes.push(synth.triggerAttackRelease("C4"))
                // console.log(keyNotes) 
            });


            KeyCS.addEventListener("mousedown", async () => {
                synth.triggerAttackRelease("C#4")
                keyNotes.push(synth.triggerAttackRelease("C#4"))
                //console.log(keyNotes)

            });

            KeyD.addEventListener("mousedown", async () => {
                synth.triggerAttackRelease("D4", "8n")
                keyNotes.push(synth.triggerAttackRelease("D4", "8n"))
                //console.log(keyNotes)
            });

            KeyDS.addEventListener("mousedown", async () => {
                synth.triggerAttackRelease("D#4", "8n")
                keyNotes.push(synth.triggerAttackRelease("D#4", "8n"))
                //console.log(keyNotes)
                
            });

            KeyE.addEventListener("mousedown", async () => {
                synth.triggerAttackRelease("E4", "8n")
                keyNotes.push(synth.triggerAttackRelease("E4", "8n"))
                //console.log(keyNotes)
            });
        
            KeyF.addEventListener("mousedown", async () => {
                synth.triggerAttackRelease("F4", "8n")
                keyNotes.push(synth.triggerAttackRelease("F4", "8n"))
                //console.log(keyNotes)
            });

            KeyFS.addEventListener("mousedown", async () => {
                synth.triggerAttackRelease("F#4", "8n")
                keyNotes.push(synth.triggerAttackRelease("F#4", "8n"))
                //console.log(keyNotes)
            });

            KeyG.addEventListener("mousedown", async () => {
                synth.triggerAttackRelease("G4", "8n")
                keyNotes.push(synth.triggerAttackRelease("G4", "8n"))
                //console.log(keyNotes)
            });


            KeyGS.addEventListener("mousedown", async () => {
                synth.triggerAttackRelease("G#4", "8n")
                keyNotes.push(synth.triggerAttackRelease("G#4", "8n"))
                //console.log(keyNotes)
            });


            KeyA.addEventListener("mousedown", async () => {
                synth.triggerAttackRelease("A4", "8n")
                keyNotes.push(synth.triggerAttackRelease("A4", "8n"))
                //console.log(keyNotes)
            });


            KeyAS.addEventListener("mousedown", async () => {
                synth.triggerAttackRelease("A#4", "8n")
                keyNotes.push(synth.triggerAttackRelease("A#4", "8n"))
                //console.log(keyNotes)
            });

            KeyB.addEventListener("mousedown", async () => {
                synth.triggerAttackRelease("B4", "8n")
                keyNotes.push(synth.triggerAttackRelease("B4", "8n"))
                //console.log(keyNotes)
            });
            console.log(keyNotes)




    })



    // keys playing


//     KeyC.addEventListener("mousedown", async () => {
        
        
//         synth.triggerAttackRelease("C4")
//         keyNotes.push(synth.triggerAttackRelease("C4"))
// });
//     KeyCS.addEventListener("mousedown", async () => {
        
    
  
//     synth.triggerAttackRelease("C#4")
// });
//     KeyD.addEventListener("mousedown", async () => {
        
    
        
//     synth.triggerAttackRelease("D4", "8n")
// });
//     KeyDS.addEventListener("mousedown", async () => {
        
    
  
//     synth.triggerAttackRelease("D#4", "8n")
// });
//     KeyE.addEventListener("mousedown", async () => {
        
    
  
//     synth.triggerAttackRelease("E4", "8n")
// });
//     KeyF.addEventListener("mousedown", async () => {
        
    
  
//     synth.triggerAttackRelease("F4", "8n")
// });
//     KeyFS.addEventListener("mousedown", async () => {
        
    
  
//     synth.triggerAttackRelease("F#4", "8n")
// });
//     KeyG.addEventListener("mousedown", async () => {
        
    
  
//     synth.triggerAttackRelease("G4", "8n")
// });
//     KeyGS.addEventListener("mousedown", async () => {
        
    
  
//     synth.triggerAttackRelease("G#4", "8n")
// });
//     KeyA.addEventListener("mousedown", async () => {
        
    
  
//     synth.triggerAttackRelease("A4", "8n")
// });
//     KeyAS.addEventListener("mousedown", async () => {
        
   
  
//     synth.triggerAttackRelease("A#4", "8n")
// });
//     KeyB.addEventListener("mousedown", async () => {
        
    
  
//     synth.triggerAttackRelease("B4", "8n")
// });

}

console.log(keyNotes)

myFunction() 


console.log(keyNotes)

