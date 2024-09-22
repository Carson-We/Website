import json
import csv

with open('userData.json') as json_file:
    data = json.load(json_file)

with open('userData.csv', 'w', newline='') as csv_file:
    csv_writer = csv.writer(csv_file)
    
    csv_writer.writerow(data[0].keys())
    
    for item in data:
        csv_writer.writerow(item.values())