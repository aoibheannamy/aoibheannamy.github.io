/**
 * Function to read in JSON file of background images,
 * checks which has been selected in the dropdown,
 * and loads the corresponding image
 */
function setBackgroundImage() {

    // create variable to hold the parsed JSON file
    let locationBack = null;
    
    try {
        // use the JSON.stringify() method to convert the data into a string before attempting to parse it
        var stringified = JSON.stringify(backgrounds);
        // Now locationBack is the parsed result
        locationBack = JSON.parse(stringified);
    } catch (e) {
        // display error if the JSON file does not parse correctly
        console.log("There was an error in parsing the JSON file!");
    }


    /**
     * Checks which background is selected from the dropdown
     * and loads respective image dependent on the result
     */
    document.getElementById('backgrounds').addEventListener('change', function () {
        console.log('You selected: ', this.value);

        if (this.value == "BoardRoom") {
            id = locationBack.data[0].BoardRoom;
            bg = loadImage(id);
        } else if (this.value == "Beach") {
            id = locationBack.data[0].Beach;
            bg = loadImage(id);
        } else if (this.value == "Forest") {
            id = locationBack.data[0].Forest;
            bg = loadImage(id);
        } else if (this.value == "Bedroom") {
            id = locationBack.data[0].Bedroom;
            bg = loadImage(id);
        } else if (this.value == "Club/Bar") {
            id = locationBack.data[0].Club / Bar;
            bg = loadImage(id);
        } else if (this.value == "Office") {
            var id = locationBack.data[0].Office;
            bg = loadImage(id);
        } else if (this.value == "Prison") {
            var id = locationBack.data[0].Prison;
            bg = loadImage(id);
        } else if (this.value == "Street") {
            var id = locationBack.data[0].Street;
            bg = loadImage(id);
        } else if (this.value == "Supermarket") {
            var id = locationBack.data[0].Supermarket;
            bg = loadImage(id);
        } else if (this.value == "Warehouse") {
            var id = locationBack.data[0].Warehouse;
            bg = loadImage(id);
        } else if (this.value == "") {
            bg = loadImage('../Images/placeholderImage.jpg');
        }
    });

}