import pandas as pd
import json

df = pd.read_excel(r'C:/Users/amaye/Desktop/aoibheannamy.github.io/turkResults/CharacterLabelledResults.xls')
#print(df)

df1 = pd.DataFrame(df, columns=['Input.image_url','Answer.blouse','Answer.complexion','Answer.dress','Answer.earrings','Answer.eyeColour','Answer.facialHair','Answer.gender','Answer.glasses','Answer.hair','Answer.hairColour','Answer.hat','Answer.jacket','Answer.makeup','Answer.pants','Answer.scar','Answer.shirt','Answer.shoes','Answer.skirt','Answer.tattoo','Answer.tie','Answer.vest'])

#group = df1.groupby('Input.image_url')
#print(group.get_group('https://raw.githubusercontent.com/aoibheannamy/MScProject/master/ImagesForMechTurk/Snatch4180.jpg?token=APCQXYWEADJJMYZQGI2GRL27GQSN4'))

df1.loc[df1['Input.image_url' == "https://raw.githubusercontent.com/aoibheannamy/MScProject/master/ImagesForMechTurk/Snatch4180.jpg?token=APCQXYWEADJJMYZQGI2GRL27GQSN4", 'character_name'] = 'Snatch1'
df1.loc[df1['Input.image_url' == 'https://raw.githubusercontent.com/aoibheannamy/MScProject/master/ImagesForMechTurk/video4frame1080.jpg?token=APCQXYTRFUBUZQF4N4BVC2K7GQSSK', 'character_name'] = 'Snatch2'
df1.loc[df1['Input.image_url' == 'https://raw.githubusercontent.com/aoibheannamy/MScProject/master/ImagesForMechTurk/SpectacularNow2.jpg?token=APCQXYU7FERMOZSJWCOQE5S7GQSO4', 'character_name'] = 'SpectacularNowFemale'
df1.loc[df1['Input.image_url' == 'https://raw.githubusercontent.com/aoibheannamy/MScProject/master/ImagesForMechTurk/spectacularNow1.jpg?token=APCQXYUYWFGAUXEWHB5PQ627GQSP4', 'character_name'] = 'SpectacularNowMale'
df1.loc[df1['Input.image_url' == 'https://raw.githubusercontent.com/aoibheannamy/MScProject/master/ImagesForMechTurk/video3frame1290.jpg?token=APCQXYTH2NF4VNTLLPMJNZC7GQSQW', 'character_name'] = 'GoodWillHuntingMatt'
df1.loc[df1['Input.image_url' == 'https://raw.githubusercontent.com/aoibheannamy/MScProject/master/ImagesForMechTurk/video3frame2070.jpg?token=APCQXYSSRCBLT2CZZKTLEEK7GQSRO', 'character_name'] = 'GoodWillHuntingRobin'
df1.loc[df1['Input.image_url' == 'https://raw.githubusercontent.com/aoibheannamy/MScProject/master/ImagesForMechTurk/video5frame240.jpg?token=APCQXYTYWLO6PN7MU36PI2C7GQSTQ', 'character_name'] = 'TheBreakUpMale'
df1.loc[df1['Input.image_url' == 'https://raw.githubusercontent.com/aoibheannamy/MScProject/master/ImagesForMechTurk/video5frame360.jpg?token=APCQXYXCWYZDXJQIHTN5ZQK7GQSUK', 'character_name'] = 'TheBreakUpFemale'
df1.loc[df1['Input.image_url' == 'https://raw.githubusercontent.com/aoibheannamy/MScProject/master/ImagesForMechTurk/video6frame0.jpg?token=APCQXYSE4GFGEC3CYAQE5IS7GQSVC', 'character_name'] = 'Joker'
df1.loc[df1['Input.image_url' == 'https://raw.githubusercontent.com/aoibheannamy/MScProject/master/ImagesForMechTurk/video6frame60.jpg?token=APCQXYVTXLOOTT7LCZSZZCC7GQSWQ', 'character_name'] = 'Gangster1'
df1.loc[df1['Input.image_url' == 'https://raw.githubusercontent.com/aoibheannamy/MScProject/master/ImagesForMechTurk/video6frame870.jpg?token=APCQXYTLADSWP2D2UXNETQK7GQSXK', 'character_name'] = 'Gangster2'
df1.loc[df1['Input.image_url' == 'https://raw.githubusercontent.com/aoibheannamy/MScProject/master/ImagesForMechTurk/video6frame1020.jpg?token=APCQXYW2S4JKCZ24ZWJP3CK7GQSV2', 'character_name'] = 'Gangster3'

print(df1)

#json_str = df1.to_json(orient='records')
#print('Excel sheet to JSON:\n',json_str)

# here we write the data from the Excel file to a json object 
#with open('turkResults/CharactersLabelledDetails.json', "w") as file_write:
    # write json data into file
#    json.dump(json_str, file_write)