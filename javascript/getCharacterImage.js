/**
 * Function to read in JSON file of character images,
 * check which character is in the selected row and what their emotion is,
 * then load the corresponding image
 */
function setCharacterImage() {

    // create variable to hold the parsed JSON file
    let characterImage = null;
    let img, charNo;

    try {
        // use the JSON.stringify() method to convert the data into a string before attempting to parse it
        var stringified = JSON.stringify(batmanCharacters);
        // Now characterImage is the parsed result
        characterImage = JSON.parse(stringified);

    } catch (e) {
        // display error if the JSON file does not parse correctly
        console.log("There was an error in parsing the JSON file!");
    }

    alert("Location is: " + location + " url is: " + locationBack[0].BoardRoom)

    if (charNo == "1") {

    } else if (charNo == "2") {

    } else if (charNo == "3") {

    } else if (charNo == "4") {

    } else if (charNo == "5") {

    }
}

