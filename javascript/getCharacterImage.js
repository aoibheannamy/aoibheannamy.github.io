/**
 * Function to read in JSON file of character images,
 * check which character is in the selected row and what their emotion is,
 * then load the corresponding image
 */
function setCharacterImage() {

    // create variable to hold the parsed JSON file
    let characterImage = null;
    // load and insert image
    myTable = Tabulator.prototype.findTable('#example-table')[0];
    var data = myTable.getData();
    // get the character number and respective emotion for that rowIndex
    var charNo = (data[rowIndex].CharacterNumber);
    var charEmotion = data[rowIndex].Emotion;
    console.log("Char no: " + charNo + ", emotion: " + charEmotion);

    // read in JSON file of character images
    try {
        // use the JSON.stringify() method to convert the data into a string before attempting to parse it
        var stringified = JSON.stringify(characters);
        // Now characterImage is the parsed result
        characterImage = JSON.parse(stringified);

    } catch (e) {
        // display error message in console if the JSON file does not parse correctly
        console.log("There was an error in parsing the JSON file!!");
    }


    switch (charEmotion) {
        case "Neutral":
            img = loadImage(characterImage.emotions[charNo - 1].Neutral);
            break;
        case "Angry":
            img = loadImage(characterImage.emotions[charNo - 1].Angry);
            break;
        case "SinisterGrin":
            img = loadImage(characterImage.emotions[charNo - 1].SinisterGrin);
            break;
        case "Smile":
            img = loadImage(characterImage.emotions[charNo - 1].Smile);
            break;
        case "Laughing":
            img = loadImage(characterImage.emotions[charNo - 1].Laughing);
            break;
        case "Sneer":
            img = loadImage(characterImage.emotions[charNo - 1].Sneer);
            break;
        case "Stern":
            img = loadImage(characterImage.emotions[charNo - 1].Stern);
            break;
        case "Grin":
            img = loadImage(characterImage.emotions[charNo - 1].Grin);
            break;
        case "Shock":
            img = loadImage(characterImage.emotions[charNo - 1].Shock);
            break;
        case "Sad":
            img = loadImage(characterImage.emotions[charNo - 1].Sad);
            break;
        case "Scared":
            img = loadImage(characterImage.emotions[charNo - 1].Scared);
            break;
        default:
            alert("No image file found");



    }

}


