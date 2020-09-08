/**
 * Function to read in JSON file of character images,
 * check which character is in the selected row and what their emotion is,
 * then load the corresponding image
 */
function setCharacterImage() {

    // create variable to hold the parsed JSON file
    let characterImage = null;
    let img, charNo, characterEmotion;

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
    
    alert("character images: "+characterImage);

    // get count of length of data entries in JSON object
//
    /*
    let neutralArray = [];
    for (var i = 0; i <= characterImage.length; i++) {
        neutralArray.push(characterImage[i].Neutral);
    }
    console.log(neutralArray);
*/




    if (charNo == "1") {
        switch (charEmotion) {
            case "Neutral":
                emotions = "Neutral"

        }

    } else if (charNo == "2") {

    } else if (charNo == "3") {

    } else if (charNo == "4") {

    } else if (charNo == "5") {

    }
}


