// const { Tone } = require("tone/build/esm/core/Tone")

// const { Tone } = require("tone/build/esm/core/Tone")

let record = document.querySelector("#record-btn")

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
const newSynth = new Tone.Synth().toMaster();
const synthButton = document.getElementById("synth");
const membrButton = document.getElementById("membrsynth");


let now = Tone.now()


let clicked = false
let keyNotes = []
let countRecording = 0
let dictRecordings = {}

function myRecordings() {

  
    record.addEventListener("click", (e) => {
        // alert("YOU")
        

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
            countRecording = countRecording + 1
            newRecording.id = ("RECORDING" + countRecording)  //NOTE: Decided  to include a class or id for now in case we wanted to customize each button uniquely per different instrument recorded or used?
            

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
            

            console.log("THE KEYBOARD", keyNotes)

            // for (let key in dictRecordings) {
            //     console.log(key)
            //     console.log(dictRecordings[key])
            //     document.querySelector("#" + key).addEventListener("click", () => {
            //         const synth = new Tone.MembraneSynth().toMaster();
            //         const notes = dictRecordings[key];
            //         console.log("DID WE MAKE IT HERE", notes, key)
            //     } )
            // }
            
            // function go(noteArr, keyKey) {
            //     // Membrane Synth https://tonejs.github.io/docs/r12/MembraneSynth
            //     const synth = new Tone.MembraneSynth().toMaster();
            //     const notes = noteArr;
            //     console.log("WHAT ARE THE NOTES", notes)
              
            //     const synthPart = new Tone.Sequence(
            //       function(time, note) {
            //         synth.triggerAttackRelease(note, "10hz", time);
            //       },
            //       notes,
            //       "8n"
            //     );
              
            //     synthPart.start();
              
            //     /**
            //      * Play Controls
            //      */
                

            //     let playing = false;
            //     document.querySelector("#" + keyKey).addEventListener("click", function() {
            //       if (!playing) {
            //         Tone.Transport.start();
            //         playing = true;
            //       } else {
            //         Tone.Transport.stop();
            //       }
            //     });
            //   }
            //   go();
            //TODO: Instead of looping, use a dictionary to query in using .get()
              for (let key in dictRecordings) {
                console.log(key)
                console.log(dictRecordings[key])

                //TODO: Check this line....possibly looping error causing repeats 
                document.querySelector("#" + key).onclick = function() {
                const synth = new Tone.MembraneSynth().toMaster();
                const notes = dictRecordings[key];
                console.log("WHAT ARE THE NOTES", notes)
              
                const synthPart = new Tone.Sequence(
                  function(time, note) {
                    synth.triggerAttackRelease(note, "10hz", time);
                  },
                  notes,
                  "8n"
                  
                );

                synthPart.start();
              
                /**
                 * Play Controls
                 */
                let playing = false;
                document.querySelector("#" + key).onclick = function() {
                    if (!playing) {
                        Tone.Transport.start();
                        playing = true;
                      } else {
                        Tone.Transport.stop();
                      }
                }
                // let playing = false;
                // if (!playing) {
                //     Tone.Transport.start();
                //     playing = true;
                //   } else {
                //     Tone.Transport.stop();
                //   }
                }
       
           
            }


            // let synthPart = new Tone.Sequence(
            //     function(time, note) {
            //         synth.triggerAttackRelease(note, "10hz", time);
            //     }, keyNotes, "4n" );

            // synthPart.start()
            // Tone.Transport.start()
            // keyNotes = []
            // return dictRecordings;
         

            // for (i = 0; i < keyNotes.length; i++ ) {
            //     console.log(keyNotes[i])
            // }


        } 
        
        else {
            record.innerHTML = "Finish"
            clicked = true
            alert("Recording is starting")
            keyNotes = []
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
                console.log("FOR D KEYS", keyNotes)
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

    // const membrSynthButton = document.getElementById("membrsynth");
    if (membrButton) {
        clicked = true;
        console.log("This membraneButton is", clicked)
    }
    else{
        return;
    }

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

function synthPlay() {

    // const synthButton = document.getElementById("synth");

    if (synthButton) {
        clicked = true;
        console.log("This synthButton is", clicked)
    }
    else{
        return;
    }
    
    

    KeyC.addEventListener("mousedown", async () => {
        newSynth.triggerAttackRelease("C4","10n");
        
        //console.log(keyNotes) 
    });


    KeyCS.addEventListener("mousedown", async () => {
        newSynth.triggerAttackRelease("C#4", "10n")
        //console.log(keyNotes)

    });

    KeyD.addEventListener("mousedown", async () => {
        newSynth.triggerAttackRelease("D4", "10n")
        //console.log(keyNotes)
    });

    KeyDS.addEventListener("mousedown", async () => {
        newSynth.triggerAttackRelease("D#4", "10n")
        //console.log(keyNotes)
        
    });

    KeyE.addEventListener("mousedown", async () => {
        newSynth.triggerAttackRelease("E4", "10n")
        //console.log(keyNotes)
    });

    KeyF.addEventListener("mousedown", async () => {
        newSynth.triggerAttackRelease("F4", "10n")
        //console.log(keyNotes)
    });

    KeyFS.addEventListener("mousedown", async () => {
        newSynth.triggerAttackRelease("F#4", "10n")
        //console.log(keyNotes)
    });

    KeyG.addEventListener("mousedown", async () => {
        newSynth.triggerAttackRelease("G4", "10n")
        //console.log(keyNotes)
    });


    KeyGS.addEventListener("mousedown", async () => {
        newSynth.triggerAttackRelease("G#4", "10n")
        //console.log(keyNotes)
    });


    KeyA.addEventListener("mousedown", async () => {
        newSynth.triggerAttackRelease("A4", "10n")
        //console.log(keyNotes)
    });


    KeyAS.addEventListener("mousedown", async () => {
        newSynth.triggerAttackRelease("A#4", "10n")
        //console.log(keyNotes)
    });

    KeyB.addEventListener("mousedown", async () => {
        newSynth.triggerAttackRelease("B4", "10n")
        //console.log(keyNotes)
    });
   
}

// buttons for changing the sounds
// const instrumentOptions = document.querySelector("#instrument-select")

// const currentSound = "membrsynth"
// const changeSound = (currentSound) => {
//     switch (currentSound) {
//         case "membrsynth":
//             return new Tone.MembraneSynth().toMaster();
//         case "synth":
//             return new Tone.Synth().toMaster();
//     }
// };


// instrumentOptions.addEventListener("change", (event) => {
//     currentSound = event.target.value;
    
//     synth = changeSound(currentSound)
// });



// membrSynthButton.addEventListener("click", () => {
//     freePlay()
//     console.log("This is membrsynth!")
// });


// synthButton.addEventListener("click", () => {
//     synthPlay()
//     console.log("This is the synth!")
// });





//Create a function to play back the music when user clicks on their Recordings
// function playBackMusic() {

//     document.querySelector

// }


//Start recordings
myRecordings() 

//No Recordings being made
freePlay()

// changeSound()
synthPlay()


// for (let key in dictRecordings) {
//     console.log("HELLO")
//     console.log(key, dictRecordings[key])
// }

// let arrayN = [1,2,3]
// console.log(arrayN)
// console.log(keyNotes)

