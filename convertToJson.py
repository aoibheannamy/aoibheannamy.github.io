import pandas as pd
import json

df = pd.read_excel(r'C:/Users/amaye/Desktop/aoibheannamy.github.io/turkResults/CharacterLabelledResults.xls')
#print(df)

json_str = df.to_json(orient='records')
print('Excel sheet to JSON:\n',json_str)

# here we write the data from the Excel file to a json object 
with open('turkResults/CharactersLabelled.json', "w") as file_write:
    # write json data into file
    json.dump(json_str, file_write)