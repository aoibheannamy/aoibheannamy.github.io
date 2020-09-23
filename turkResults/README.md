# Turk Results Folder
This folder contains the batch results from all the successful tasks created on Amazon's Mechanical Turk. 
* The Spectacular Now results .csv files contain the frames labelled for that scene, for both the male and female character;
    * They contain the raw, unchanged results according to MTurk, so include all the set properties such as time allocated etc.
    * The scripts in the folder **pythonScripts** can be used to obtain the answers given, and convert into a JSON object;
* The Character Labeleld Results spreadsheets contain the results for the task of labelling character's physical appearance based on the edited CharacterCreator website.
    * The spreadsheet was converted to a JSON object, which was then evaluated for the best labelled results: this is stored in _CharacterLabelledDetailsBest.json_;
