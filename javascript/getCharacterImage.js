/**
 * Function to read in JSON file of character images,
 * check which character is in the selected row and what their emotion is,
 * then load the corresponding image
 */
function setCharacterImage() {

    // create variable to hold the parsed JSON file
    let characterImage = null;
    let img, charNo, charEmotion;

    try {
        // use the JSON.stringify() method to convert the data into a string before attempting to parse it
        var stringified = JSON.stringify(characters);
        // Now characterImage is the parsed result
        //console.log(typeof stringified);
        characterImage = JSON.parse(stringified);

    } catch (e) {
        // display error message in console if the JSON file does not parse correctly
        console.log("There was an error in parsing the JSON file!!");
    }

    if (charNo == "1") {
        charNo = 1;
        characterEmotion();
    } else if (charNo == "2") {
        charNo = 2;
        characterEmotion();
    } else if (charNo == "3") {
        charNo = 3;
        characterEmotion();
    } else if (charNo == "4") {
        charNo = 4;
        characterEmotion();
    } else if (charNo == "5") {
        charNo = 5;
        characterEmotion();
    } else {
        alert("That character was not found!");
    }
}

/**
 * This function takes the character emotion from the tabulator table of frames
 * and checks what the emotion is and matches it dependent on the character number
 * chosen
 */
function characterEmotion() {
    let img, charNo;
    switch (charEmotion) {
        case "Neutral":
            img = characterImage[charNo].Neutral;
            break;
        case "Angry":
            img = characterImage[charNo].Angry;
            break;
        case "SinisterGrin":
            img = characterImage[charNo].SinisterGrin;
            break;
        case "Smile":
            img = characterImage[charNo].Smile;
            break;
        case "Laughing":
            img = characterImage[charNo].Laughing;
            break;
        case "Sneer":
            img = characterImage[charNo].Sneer;
            break;
        case "Stern":
            img = characterImage[charNo].Stern;
            break;
        case "Grin":
            img = characterImage[charNo].Grin;
            break;
        case "Shock":
            img = characterImage[charNo].Shock;
            break;
        case "Sad":
            img = characterImage[charNo].Sad;
            break;
        case "Scared":
            img = characterImage[charNo].Scared;
            break;
        default:
            alert("No image file found");



    }

}


