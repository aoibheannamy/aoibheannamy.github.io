/**
 * Function to read in JSON file of background images,
 * check which has been selected in the table,
 * load the corresponding image - dropdown
 */
function setBackgroundImage(that) {

    // create variable to hold the parsed JSON file
    let locationBack = null;
    //let bg, backgroundLocation;

    try {
        // use the JSON.stringify() method to convert the data into a string before attempting to parse it
        var stringified = JSON.stringify(backgrounds);
        // Now locationBack is the parsed result
        locationBack = JSON.parse(stringified);

    } catch (e) {
        // display error if the JSON file does not parse correctly
        console.log("There was an error in parsing the JSON file!");
    }
    alert(" parsed: "+locationBack);



    /**
     * Checks which background is selected and changes image dependent on the result
     */

    if (that.value == "BoardRoom") {
        bg = loadImage(locationBack[0].BoardRoom);
        console.log("Value:" + that.value+" bg: "+bg);
    } else if (that.value == "Beach") {
        bg = loadImage(locationBack[0].Beach);
    } else if (that.value == "Forest") {
        bg = loadImage(locationBack[0].Forest);
        console.log("Value:"+that.value);
    } else if (that.value == "Bedroom") {
        bg = loadImage(locationBack[0].Bedroom);
    } else if (that.value == "Club/Value") {
        bg = loadImage(locationBack[0].Club / Bar);
    } else if (that.value == "Office") {
        bg = loadImage(locationBack[0].Office);
    } else if (that.value == "Prison") {
        bg = loadImage(locationBack[0].Prison);
    } else if (that.value == "Street") {
        bg = loadImage(locationBack[0].Street);
    } else if (that.value == "Supermarket") {
        bg = loadImage(locationBack[0].Supermarket);
    } else if (that.value == "Warehouse") {
        bg = loadImage(locationBack[0].Warehouse);
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