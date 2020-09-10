/**
 * Function to read in JSON file of background images,
 * check which has been selected in the table,
 * load the corresponding image - dropdown
 */
function setBackgroundImage(that) {

    // create variable to hold the parsed JSON file
    let locationBack = null;
    var id;

    try {
        // use the JSON.stringify() method to convert the data into a string before attempting to parse it
        stringified = JSON.stringify(backgrounds);
        // Now locationBack is the parsed result
        locationBack = JSON.parse(stringified);

    } catch (e) {
        // display error if the JSON file does not parse correctly
        console.log("There was an error in parsing the JSON file!");
    }


    /**
     * Checks which background is selected and changes image dependent on the result
     */

    if (that.value == "BoardRoom") {
        id = locationBack.data[0].BoardRoom;
        console.log("ID: " + id);
        bg = loadImage(id);
        console.log("Value:" + that.value + " bg: " + bg);
    } else if (that.value == "Beach") {
        id = locationBack.data[0].Beach;
        bg = loadImage(id);
    } else if (that.value == "Forest") {
        id = locationBack.data[0].Forest;
        bg = loadImage(id);
    } else if (that.value == "Bedroom") {
        id = locationBack.data[0].Bedroom;
        bg = loadImage(id);
    } else if (that.value == "Club/Bar") {
        id = locationBack.data[0].Club / Bar;
        bg = loadImage(id);
    } else if (that.value == "Office") {
        var id = locationBack.data[0].Office;
        bg = loadImage(id);
    } else if (that.value == "Prison") {
        var id = locationBack.data[0].Prison;
        bg = loadImage(id);
    } else if (that.value == "Street") {
        var id = locationBack.data[0].Street;
        bg = loadImage(id);
    } else if (that.value == "Supermarket") {
        var id = locationBack.data[0].Supermarket;
        bg = loadImage(id);
    } else if (that.value == "Warehouse") {
        var id = locationBack.data[0].Warehouse;
        bg = loadImage(id);
    } else if (that.value == "") {
        bg = loadImage('../Images/placeholderImage.jpg');
    }


    /*
        switch (backgrounds) {
            case "BoardRoom":
                bg = loadImage(locationBack[0].BoardRoom);
                console.log("Board room loaded");
                break;
            case "Beach":
                bg = loadImage(locationBack[0].Beach);
                break;
            case "Forest":
                bg = loadImage(locationBack[0].Forest);
                break;
            case "Bedroom":
                bg = loadImage(locationBack[0].Bedroom);
                break;
            case "Club/Bar":
                bg = loadImage(locationBack[0].Club / Bar);
                break;
            case "Office":
                bg = loadImage(locationBack[0].Office);
                break;
            case "Prison":
                bg = loadImage(locationBack[0].Prison);
                break;
            case "Street":
                bg = loadImage(locationBack[0].Street);
                break;
            case "Supermarket":
                bg = loadImage(locationBack[0].Supermarket);
                break;
            case "Warehouse":
                bg = loadImage(locationBack[0].Warehouse);
                break;
            default:
                break;
        }*/
}