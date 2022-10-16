from bs4 import BeautifulSoup
import requests
import re
import csv
from datetime import datetime


url = "https://connect2concepts.com/connect2/?type=circle&key=2A2BE0D8-DF10-4A48-BEDD-B3BC0CD628E7"

headers = {
    # Looks like the site probably blocks commonly used User-Agent headers for scraping, but it takes garbage just fine :)
    "User-Agent": "XY"
}
response = requests.post(url, headers=headers, allow_redirects=False)
if response.status_code != 200:
    print(response)
    exit()
else:
    content = response.content

soup = BeautifulSoup(response.content, 'html.parser')


class GymInfo:
    def __init__(self, location, count, date, time):
        self.location = location
        self.count = count
        self.date = date
        self.time = time



now = datetime.now()

def web_data_to_class(data):

    f = open('csv_file.csv', 'a')

    writer = csv.writer(f)

    locations = ["Marino Second Floor",
                 "Marino Gymnasium",
                 "Marino Third Floor Weight Room",
                 "Marino Third Floor Cardio",
                 "Marino Track",
                 "SquashBuster Fourth Floor"]
    facility_count = pull_facility_count(soup.get_text())
    date_updated = pull_date_updated(soup.get_text())
    time_updated = pull_time_updated(soup.get_text())

    for i in range(6):
        writer.writerow([locations[i], facility_count[i], date_updated[i], time_updated[i], now.strftime("%Y-%m-%d %H:%M:%S")]);

    f.close()







# gets facility count data from scrape, in order goes
# 2nd Floor, Gym, 3rd Floor Weights, 3rd Floor Cardio, Track, 4th Floor Squash,
def pull_facility_count(data):
    count_list = []
    pattern = re.compile(r'.*Last Count: (\d+)Updated:')
    matches = re.findall(pattern, data)

    for m in matches:
        count_list.append(int(m))

    return count_list


# Pulls the dates of the different counts updating
def pull_date_updated(data):
    date_list = []
    pattern = re.compile(r'Updated: \d+\/\d+\/\d+.*')
    matches = re.findall(pattern, data)

    for m in matches:
        date_list.append(m[9:19])

    return date_list


def pull_time_updated(data):
    time_list = []
    pattern = re.compile(r'Updated: \d+\/\d+\/\d+.*')
    matches = re.findall(pattern, data)

    for m in matches:
        length = len(m)
        time_list.append(m[20:length])

    return time_list


web_data_to_class(soup.get_text())

print(pull_facility_count(soup.get_text()))
print(pull_date_updated(soup.get_text()))
print(pull_time_updated(soup.get_text()))
