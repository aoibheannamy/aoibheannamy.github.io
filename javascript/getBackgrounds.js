/**
 * Function to read in JSON file of background images,
 * check which has been selected in the table,
 * load the corresponding image - dropdown
 */
function setBackgroundImage() {

    // create variable to hold the parsed JSON file
    let locationBack = null;
    //var id;

    try {
        // use the JSON.stringify() method to convert the data into a string before attempting to parse it
        stringified = JSON.stringify(backgrounds);
        // Now locationBack is the parsed result
        locationBack = JSON.parse(stringified);

    } catch (e) {
        // display error if the JSON file does not parse correctly
        console.log("There was an error in parsing the JSON file!");
    }
    alert("stringified:" + locationBack);

    /**
     * Checks which background is selected and changes image dependent on the result
     */
    switch (backgrounds) {
        case "BoardRoom":
            bg = loadImage("'" + locationBack[0].BoardRoom + "'");
            console.log("Board room loaded");
            break;
        case "Beach":
            bg = loadImage("'" + locationBack.data[0].Beach + "'");
            break;
        case "Forest":
            bg = loadImage("'" + locationBack.data[0].Forest + "'");
            break;
        case "Bedroom":
            bg = loadImage("'" + locationBack.data[0].Bedroom + "'");
            break;
        case "Club/Bar":
            bg = loadImage("'" + locationBack.data[0].Club / Bar + "'");
            break;
        case "Office":
            bg = loadImage("'" + locationBack.data[0].Office + "'");
            break;
        case "Prison":
            bg = loadImage("'" + locationBack.data[0].Prison + "'");
            break;
        case "Street":
            bg = loadImage("'" + locationBack.data[0].Street + "'");
            break;
        case "Supermarket":
            bg = loadImage("'" + locationBack.data[0].Supermarket + "'");
            break;
        case "Warehouse":
            bg = loadImage("'" + locationBack.data[0].Warehouse + "'");
            break;
        default:
            break;
    }
}