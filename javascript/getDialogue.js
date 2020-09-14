/**
 * Function to read dialogue, including who speaks and their inflection,
 * from the tabulator table of frames
 * to then load the corresponding text in the speech bubble
 */
function readDialogue() {

    myTable = Tabulator.prototype.findTable('#example-table')[0];
    var data = myTable.getData();
    // find dialogue for rowIndex
    // is the character speaking and who is it?
    var charSpeak = data[rowIndex].CharacterSpeaking;
    // what do they say? and set it to variable used in drawWords() function
    textWords = data[rowIndex].WhatDoTheySay;
    // get their inflection
    var inflection = data[rowIndex].Inflection;
    

    if (charSpeak != 0) {
        charSpeaking = "Character " + charSpeak +" "+ inflection + ":";
    } else {
        charSpeaking = "No Character is speaking.";
    }


}


