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

    // load and insert image
    var charNo = ("\""+data[rowIndex].CharacterNumber+"\"");

    var charEmotion = data[rowIndex].Emotion;

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
            img = loadImage(characterImage.number[charNo].emotions["Neutral"]);
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


