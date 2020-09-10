/**
 * Function to read dialogue, including who speaks and their inflection,
 * from the tabulator table of frames
 * to then load the corresponding text in the speech bubble
 */
function readDialogue() {



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
        //alert("That character was not found!");
    }
}

/**
 * This function takes the character emotion from the tabulator table of frames
 * and checks what the emotion is and matches it dependent on the character number
 * chosen - loads the respective image
 */
function characterEmotion() {
    switch (charEmotion) {
        case "Neutral":
            img = loadImage(characterImage.number[charNo].Neutral);
            break;
        case "Angry":
            img = loadImage(characterImage.number[charNo].Angry);
            break;
        case "SinisterGrin":
            img = loadImage(characterImage.number[charNo].SinisterGrin);
            break;
        case "Smile":
            img = loadImage(characterImage.number[charNo].Smile);
            break;
        case "Laughing":
            img = loadImage(characterImage.number[charNo].Laughing);
            break;
        case "Sneer":
            img = loadImage(characterImage.number[charNo].Sneer);
            break;
        case "Stern":
            img = loadImage(characterImage.number[charNo].Stern);
            break;
        case "Grin":
            img = loadImage(characterImage.number[charNo].Grin);
            break;
        case "Shock":
            img = loadImage(characterImage.number[charNo].Shock);
            break;
        case "Sad":
            img = loadImage(characterImage.number[charNo].Sad);
            break;
        case "Scared":
            img = loadImage(characterImage.number[charNo].Scared);
            break;
        default:
            alert("No image file found");



    }

}


