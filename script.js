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
let dictRecordings = {}

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

            let recordName = "RECORDING" + (countRecording)
            newRecording.innerHTML = recordName
            document.body.appendChild(newDivRecording)
            newDivRecording.appendChild(newRecording)

            //Create a dictionary object to hold the recordings to their values -> music notes array
                // key -> recordingID
                //value -> array 
           
            console.log("THE KEYS TO DICT ARE", keyNotes)
            console.log(keyNotes.length)
 

           //Adding the key value pairs to dictionary
            dictRecordings[recordName] = []

            //Pushing the keynote values to the value array. Was not working before if the key was assigned to keyNotes. Was returning an empty array
            for (i = 0; i<keyNotes.length; i++) {
                console.log(keyNotes[i])
                dictRecordings[recordName].push(keyNotes[i])
            }

       

            console.log(dictRecordings)
            console.log(dictRecordings[recordName].length)

            //Clear the array in javascript
            keyNotes = []

            console.log("THE KEYBOARD", keyNotes)
            return dictRecordings;
         

            // for (i = 0; i < keyNotes.length; i++ ) {
            //     console.log(keyNotes[i])
            // }


        } 
        
        else {
            record.innerHTML = "Finish"
            clicked = true
            alert("Recording is starting")
            // keyNotes = []
            console.log("THE NEW KEYBOARD IS", keyNotes)

            KeyC.addEventListener("mousedown", async () => {
                synth.triggerAttackRelease("C4")
                keyNotes.push("C4")
                //console.log(keyNotes) 
            });


            KeyCS.addEventListener("mousedown", async () => {
                synth.triggerAttackRelease("C#4")
                keyNotes.push("C#4")
                //console.log(keyNotes)

            });

            KeyD.addEventListener("mousedown", async () => {
                synth.triggerAttackRelease("D4", "8n")
                keyNotes.push("D4")
                //console.log(keyNotes)
            });

            KeyDS.addEventListener("mousedown", async () => {
                synth.triggerAttackRelease("D#4", "8n")
                keyNotes.push("D#4")
                //console.log(keyNotes)
                
            });

            KeyE.addEventListener("mousedown", async () => {
                synth.triggerAttackRelease("E4", "8n")
                keyNotes.push("E4")
                //console.log(keyNotes)
            });
        
            KeyF.addEventListener("mousedown", async () => {
                synth.triggerAttackRelease("F4", "8n")
                keyNotes.push("F4")
                //console.log(keyNotes)
            });

            KeyFS.addEventListener("mousedown", async () => {
                synth.triggerAttackRelease("F#4", "8n")
                keyNotes.push("F#4")
                //console.log(keyNotes)
            });

            KeyG.addEventListener("mousedown", async () => {
                synth.triggerAttackRelease("G4", "8n")
                keyNotes.push("G4")
                //console.log(keyNotes)
            });


            KeyGS.addEventListener("mousedown", async () => {
                synth.triggerAttackRelease("G#4", "8n")
                keyNotes.push("G#4")
                //console.log(keyNotes)
            });


            KeyA.addEventListener("mousedown", async () => {
                synth.triggerAttackRelease("A4", "8n")
                keyNotes.push("A4")
                //console.log(keyNotes)
            });


            KeyAS.addEventListener("mousedown", async () => {
                synth.triggerAttackRelease("A#4", "8n")
                keyNotes.push("A#4")
                //console.log(keyNotes)
            });

            KeyB.addEventListener("mousedown", async () => {
                synth.triggerAttackRelease("B4", "8n")
                keyNotes.push("B4")
                //console.log(keyNotes)
            });

            // console.log(keyNotes) 
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

// sample code for changing the tones
// keyboard.addEventListener("change", (event) => {
//     currentInstrument = event.target.value;

//     synth = changeInstrument(currentInstrument);
// });


//Create a function to play back the music when user clicks on their Recordings
// function playBackMusic() {

//     document.querySelector

// }



//Start recordings
myRecordings() 

//No Recordings being made
freePlay()

changeSound()



// for (let key in dictRecordings) {
//     console.log("HELLO")
//     console.log(key, dictRecordings[key])
// }

// let arrayN = [1,2,3]
// console.log(arrayN)
// console.log(keyNotes)

