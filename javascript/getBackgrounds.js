/**
 * Function to read in JSON file of background images,
 * check which has been selected in the table,
 * load the corresponding image - dropdown
 */
function setBackgroundImage(that) {

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
    if (that.value == "BoardRoom") {
        id = locationBack.data[0].BoardRoom;
        console.log("ID: "+id);
        bg = loadImage(id);
        console.log("Value:" + that.value + " bg: " + bg);
    } else if (that.value == "Beach") {
        id = locationBack.data[0].Beach;
        bg = loadImage("'"+id+"'");
    } else if (that.value == "Forest") {
        id = locationBack.data[0].Forest;
        bg = loadImage("'"+id+"'");
    } else if (that.value == "Bedroom") {
        id = locationBack.data[0].Bedroom;
        bg = loadImage("'"+id+"'");
    } else if (that.value == "Club/Bar") {
        id = locationBack.data[0].Club/Bar;
        bg = loadImage("'"+id+"'");
    } else if (that.value == "Office") {
        var id = locationBack.data[0].Office;
        bg = loadImage("'"+id+"'");
    } else if (that.value == "Prison") {
        var id = locationBack.data[0].Prison;
        bg = loadImage("'"+id+"'");
    } else if (that.value == "Street") {
        var id = locationBack.data[0].Street;
        bg = loadImage("'"+id+"'");
    } else if (that.value == "Supermarket") {
        var id = locationBack.data[0].Supermarket;
        bg = loadImage("'"+id+"'");
    } else if (that.value == "Warehouse") {
        var id = locationBack.data[0].Warehouse;
        bg = loadImage("'"+id+"'");
    }


}