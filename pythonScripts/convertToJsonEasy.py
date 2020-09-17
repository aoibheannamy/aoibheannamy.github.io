import pandas as pd
import json
# read in excel file 
df = pd.read_excel(r'C:\Users\amaye\Desktop\Youtube\TheDarkKnightLabelled.xlsx', sheet_name='CharacterPhysicalAppearance')
#print(df)

# define orientation of table data
json_str = df.to_json(orient='records')
print('Excel sheet to JSON:\n',json_str)

# here we write the data from the Excel file to a json object 
with open('KillTheBatmanAppearances.json', "w") as file_write:
    # write json data into file
    json.dump(json_str, file_write)