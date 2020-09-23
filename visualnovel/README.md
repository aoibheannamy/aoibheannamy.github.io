# Visual Novel Folder
This folder contains pages associated with creating the visual novel. The folders contain all the character images. 
The visual novel itself is held in _visualnovel.html_.
* Tabulator table holds the labelled frames from _KillTheBatmanFrame.json_;
* Processing.js/p5.js are utilised to create an animated canvas in which the visual novel plays;
* A modal pops up on page load to provide users with instructions;
* The character images, dialogue and background are loaded via JavaScript scripts (see javascript folder);


Any further development, including portraying different scenes and characters is simple:
* The character JSON used to hold the character images from the Batmans scene can be used as a template for any other scenes characters;
* Backgrounds: can add/remove new images to the JSON file, update the dropdown in the visual novel and update the getBackground.js script;
* The dialogue script should not need changed, and should work for any dialogue labelled in the frames.
* A new set of labelled frames can be input into the tabulator table easily by loading the data in the table - providing it is in the correct format (can see KillTheBatmanFrame.json for template example).