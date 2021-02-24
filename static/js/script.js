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


let clicked = false
let keyNotes = []
let countRecording = 0

function myRecordings() {

  
    record.addEventListener("click", (e) => {
        alert("YOU")
        

        if (record.innerHTML == "Finish") {
            record.innerHTML = "Record";
            clicked = false
            alert("Stop Recording")
            console.log(keyNotes) // Return the recorded keynotes

            //Creating a new button inside a div for each recording
            //TODO: Finish setting up recording to DOM
            let newDivRecording = document.createElement("div")
            let newRecording = document.createElement("BUTTON")

            newDivRecording.classList.add("my-recordings")
            newRecording.id = ("recording" + countRecording)  //NOTE: Decided  to include a class or id for now in case we wanted to customize each button uniquely per different instrument recorded or used?
            countRecording = countRecording + 1
            newRecording.innerHTML = "RECORDING" + (countRecording)
            document.body.appendChild(newDivRecording)
            newDivRecording.appendChild(newRecording)


        } 
        
        else {
            record.innerHTML = "Finish"
            clicked = true
            alert("Recording is starting")

            KeyC.addEventListener("mousedown", async () => {
                synth.triggerAttackRelease("C4")
                keyNotes.push(synth.triggerAttackRelease("C4"))
                //console.log(keyNotes) 
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
        }

    }); }

function freePlay() {
    KeyC.addEventListener("mousedown", async () => {
        synth.triggerAttackRelease("C4")
        
        //console.log(keyNotes) 
    });


    KeyCS.addEventListener("mousedown", async () => {
        synth.triggerAttackRelease("C#4")
        //console.log(keyNotes)

    });

    KeyD.addEventListener("mousedown", async () => {
        synth.triggerAttackRelease("D4", "8n")
        //console.log(keyNotes)
    });

    KeyDS.addEventListener("mousedown", async () => {
        synth.triggerAttackRelease("D#4", "8n")
        //console.log(keyNotes)
        
    });

    KeyE.addEventListener("mousedown", async () => {
        synth.triggerAttackRelease("E4", "8n")
        //console.log(keyNotes)
    });

    KeyF.addEventListener("mousedown", async () => {
        synth.triggerAttackRelease("F4", "8n")
        //console.log(keyNotes)
    });

    KeyFS.addEventListener("mousedown", async () => {
        synth.triggerAttackRelease("F#4", "8n")
        //console.log(keyNotes)
    });

    KeyG.addEventListener("mousedown", async () => {
        synth.triggerAttackRelease("G4", "8n")
        //console.log(keyNotes)
    });


    KeyGS.addEventListener("mousedown", async () => {
        synth.triggerAttackRelease("G#4", "8n")
        //console.log(keyNotes)
    });


    KeyA.addEventListener("mousedown", async () => {
        synth.triggerAttackRelease("A4", "8n")
        //console.log(keyNotes)
    });


    KeyAS.addEventListener("mousedown", async () => {
        synth.triggerAttackRelease("A#4", "8n")
        //console.log(keyNotes)
    });

    KeyB.addEventListener("mousedown", async () => {
        synth.triggerAttackRelease("B4", "8n")
        //console.log(keyNotes)
    });
   
}






//Start recordings
myRecordings() 

//No Recordings being made
freePlay()


console.log(keyNotes)

