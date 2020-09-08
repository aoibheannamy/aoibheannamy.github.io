/**
 * Function to read in JSON file of character images,
 * check which character is in the selected row and what their emotion is,
 * then load the corresponding image
 */
function setCharacterImage() {
    // create variable to hold the parsed JSON file
    let locationBack = null;
    let bg;

    try {
        // use the JSON.stringify() method to convert the data into a string before attempting to parse it
        var stringified = JSON.stringify(backgrounds);
        // Now locationBack is the parsed result
        locationBack = JSON.parse(stringified);

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

