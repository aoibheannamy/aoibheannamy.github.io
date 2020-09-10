/**
 * Function to read dialogue, including who speaks and their inflection,
 * from the tabulator table of frames
 * to then load the corresponding text in the speech bubble
 */
function readDialogue() {

    var characterName;

    if (charSpeak == 1) {
        charSpeaking = "Character " + charSpeak + " said " + inflection + ":";
    } else if (charSpeak == 2) {
        charSpeaking = "Character " + charSpeak + " said " + inflection + ":";
    } else if (charSpeak = 3) {
        charSpeaking = "Character " + charSpeak + " said " + inflection + ":";
    } else if (charSpeak = 4) {
        charSpeaking = "Character " + charSpeak + " said " + inflection + ":";
    } else {
        charSpeaking = "No Character is speaking.";
    }

 
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


