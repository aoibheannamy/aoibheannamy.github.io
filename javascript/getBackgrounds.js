/**
 * Function to read in JSON file of background images,
 * check which has been selected in the table,
 * load the corresponding image
 */
function setBackgroundImage() {

    // payload 
    let locationBack = null;
    let bg;

    try {
        // Parse a JSON
        locationBack = JSON.parse(payload);
    } catch (e) {
        // display error
        console.log("There was an error in parsing the JSON file!");
    }

    // Now userData is the parsed result


    /**
     * Checks which background is selected and changes image dependent on the result
     */
    switch (location) {
        case "BoardRoom":
            bg = loadImage(locationBack['BoardRoom']);
            break;
        case "Beach":
            bg = loadImage(locationBack['Beach']);
            break;
        case "Forest":
            bg = loadImage(locationBack['Forest']);
            break;
        case "Bedroom":
            bg = loadImage(locationBack['Bedroom']);
            break;
        case "Club/Bar":
            bg = loadImage(locationBack['Club/Bar']);
            break;
        case "Office":
            bg = loadImage(locationBack['Office']);
            break;
        case "Prison":
            bg = loadImage(locationBack['Prison']);
            break;
        case "Street":
            bg = loadImage(locationBack['Street']);
            break;
        case "Supermarket":
            bg = loadImage(locationBack['Supermarket']);
            break;
        case "Warehouse":
            bg = loadImage(locationBack['Warehouse']);
            break;
        default:
            break;
    }
}