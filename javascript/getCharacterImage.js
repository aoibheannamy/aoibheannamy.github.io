/**
 * Function to read in JSON file of character images,
 * check which character is in the selected row and what their emotion is,
 * then load the corresponding image
 */
function setCharacterImage() {
    if (charNo == "1") {
        callJokerImages();
        draw();
    } else if (charNo == "2") {
        callGangster1Images();
        draw();
    } else if (charNo == "3") {
        callGangster2Images();
        draw();
    } else if (charNo == "4") {
        callGangster3Images();
        draw();
    } else if (charNo == "5") {
        callGangster4Images();
        draw();
    }
}

/**
                      * Function to hold and call the avatar images for the Joker character
                      * Checks the emotion in the table and matches with the correct image
                  */
