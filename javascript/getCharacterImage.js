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
function callJokerImages() {

    // check what the emotion is in that particular row and match with the correct image 
    if (charEmotion == "Neutral") {
        img = loadImage(jokerImages[0]);
    } else if (charEmotion == "Angry") {
        img = loadImage(jokerImages[1]);
    } else if (charEmotion == "Stern") {
        img = loadImage(jokerImages[2]);
    } else if (charEmotion == "Sneer") {
        img = loadImage(jokerImages[3]);
    } else if (charEmotion == "Laughing") {
        img = loadImage(jokerImages[4]);
    } else if (charEmotion == "SinisterGrin") {
        img = loadImage(jokerImages[5]);
    } else if (charEmotion == "Grin") {
        img = loadImage(jokerImages[6]);
    } else if (charEmotion == "Grimace") {
        img = loadImage(jokerImages[7]);
    } else if (charEmotion == "Anxious") {
        img = loadImage(jokerImages[8]);
    }
}

/**
    * Function to hold and call the avatar images for Gangster1 character
    * Checks the emotion in the table and matches with the correct image
*/
function callGangster1Images() {
    // check what the emotion is in that particular row
    if (charEmotion == "Neutral") {
        img = loadImage(gang1Images[0]);
    } else if (charEmotion == "Angry") {
        img = loadImage(gang1Images[1]);
    } else if (charEmotion == "Sneer") {
        img = loadImage(gang1Images[2]);
    } else if (charEmotion == "Laughing") {
        img = loadImage(gang1Images[3]);
    } else if (charEmotion == "Grin") {
        img = loadImage(gang1Images[4]);
    } else if (charEmotion == "Shock") {
        img = loadImage(gang1Images[5]);
    } else if (charEmotion == "Serious") {
        img = loadImage(gang1Images[6]);
    }
}


/**
    * Function to hold and call the avatar images for Gangster2 character
    * Checks the emotion in the table and matches with the correct image
*/
function callGangster2Images() {
    // store links in variables according to the emotion of avatar
    // store all images in an array
    // check what the emotion is in that particular row
    if (charEmotion == "Neutral") {
        img = loadImage(gang2Images[0]);
    } else if (charEmotion == "Angry") {
        img = loadImage(gang2Images[1]);
    } else if (charEmotion == "Sneer") {
        img = loadImage(gang2Images[2]);
    } else if (charEmotion == "Laughing") {
        img = loadImage(gang2Images[3]);
    } else if (charEmotion == "Grin") {
        img = loadImage(gang2Images[4]);
    } else if (charEmotion == "Shock") {
        img = loadImage(gang2Images[5]);
    } else if (charEmotion == "Serious") {
        img = loadImage(gang2Images[6]);
    } else if (charEmotion == "SinisterGrin") {
        img = loadImage(gang2Images[6]);
    }
}
/**
    * Function to hold and call the avatar images for Gangster3 character
    * Checks the emotion in the table and matches with the correct image
*/
function callGangster3Images() {
    // check what the emotion is in that particular row
    if (charEmotion == "Neutral") {
        img = loadImage(gang3Images[0]);
    } else if (charEmotion == "Angry") {
        img = loadImage(gang3Images[1]);
    } else if (charEmotion == "Sneer") {
        img = loadImage(gang3Images[2]);
    } else if (charEmotion == "Laughing") {
        img = loadImage(gang3Images[3]);
    } else if (charEmotion == "Grin") {
        img = loadImage(gang3Images[4]);
    } else if (charEmotion == "Shock") {
        img = loadImage(gang3Images[5]);
    } else if (charEmotion == "SinisterGrin") {
        img = loadImage(gang3Images[6]);
    }
}
/**
    * Function to hold and call the avatar images for Gangster4 character
    * Checks the emotion in the table and matches with the correct image
*/
function callGangster4Images() {
    // store links in variables according to the emotion of avatar
    var gang4Neutral = 'https://raw.githubusercontent.com/aoibheannamy/aoibheannamy.github.io/master/Images/Gangster4Images/Gangster4Neutral.png?token=APCQXYUB24DNIFJ5TGCEME27KC25G';
    var gang4Sad = 'https://raw.githubusercontent.com/aoibheannamy/aoibheannamy.github.io/master/Images/Gangster4Images/Gangster4Sad.png?token=APCQXYVUQMVPTXL4XKKRRMK7KC472';
    var gang4Scared = 'https://raw.githubusercontent.com/aoibheannamy/aoibheannamy.github.io/master/Images/Gangster4Images/Gangster4Scared.png?token=APCQXYXIGRWABC7JLSTDHWS7KC262';
    var gang4Shock = 'https://raw.githubusercontent.com/aoibheannamy/aoibheannamy.github.io/master/Images/Gangster4Images/Gangster4Shock.png?token=APCQXYXBWLVSCE5YG2KQ6HC7KC27W';
    // store all images in an array
    var gang4Images = [gang4Neutral, gang4Sad, gang4Scared, gang4Shock];
    // check what the emotion is in that particular row
    if (charEmotion == "Neutral") {
        img = loadImage(gang4Images[0]);
    } else if (charEmotion == "Sad") {
        img = loadImage(gang4Images[1]);
    } else if (charEmotion == "Scared") {
        img = loadImage(gang4Images[2]);
    } else if (charEmotion == "Shock") {
        img = loadImage(gang4Images[3]);
    }
}