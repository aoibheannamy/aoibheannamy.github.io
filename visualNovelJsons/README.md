# Visual Novel JSON Folder
This folder contains the JSON objects which can be utilised in the visual novel, excluding the character ones.

The background locations are contained in _backgroundLocations.json_ and _backgroundLocations2.json_, the first was used in the visual novel and the second contains the raw GitHub links to the backgound images. Any JSON file starting with _KillTheBatman_ has the scene information for the scene "Kill the Batman". _KillTheBatmanAppearances.json_ contains the manually labelled appearances of the characters before they were labelled via MTurk. _KillTheBatmanFrame.json_ contains the manually labelled frames from the Kill The Batman scene.

This provides a template for future scenes in the visual novel: by replciating the JSON file for different frames and backgrounds, the visual novel should be capable of loading it and portraying a new scene.