import pandas as pd
import json
# read in excel spreadsheet
df = pd.read_excel(r'C:/Users/amaye/Desktop/aoibheannamy.github.io/turkResults/CharacterLabelledResults.xls')
# read in the data specifically from the columns listed
df1 = pd.DataFrame(df, columns=['Names','Answer.blouse','Answer.complexion','Answer.dress','Answer.earrings','Answer.eyeColour','Answer.facialHair','Answer.gender','Answer.glasses','Answer.hair','Answer.hairColour','Answer.hat','Answer.jacket','Answer.makeup','Answer.pants','Answer.scar','Answer.shirt','Answer.shoes','Answer.skirt','Answer.tattoo','Answer.tie','Answer.vest'])

#print to ensure they are correct
print(df1)
#convert spreadsheet to json object, oriented by row
json_str = df1.to_json(orient='records')
print('Excel sheet to JSON:\n',json_str)

# here we write the data from the Excel file to a json object 
with open('turkResults/CharactersLabelledDetails.json', "w") as file_write:
    # write json data into file
    json.dump(json_str, file_write)