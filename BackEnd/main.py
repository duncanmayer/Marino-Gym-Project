from os import path
from bs4 import BeautifulSoup
import requests
import re
import csv
from datetime import datetime, timedelta, date
from dataclasses import dataclass

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

weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

# A data class representing gym information
@dataclass
class GymInfo:
    location: str
    count: int
    date: str
    time: str


# csv_file of gym data with duplicates -> list of unique gym info pieces
# Opening the csv file in this Python project, and returning a list
def uniques():
    non_duplicate_gym_info = []
    
    file_path = path.relpath("/home/ubuntu/BackEnd/csv_file.csv")
    file = open(file_path, 'r')


    for line in file:
        oneLineInfo = line.strip().split(',')
        oneLineToGymInfo = GymInfo(oneLineInfo[0], oneLineInfo[1], oneLineInfo[2], oneLineInfo[3])

        if oneLineToGymInfo not in non_duplicate_gym_info:
            non_duplicate_gym_info.append(oneLineToGymInfo)

    return non_duplicate_gym_info


unique_data = uniques()


def web_data_to_class():
    file_path = path.relpath("/home/ubuntu/BackEnd/csv_file.csv")
    f = open(file_path, 'a')


    writer = csv.writer(f)

    now = datetime.now()

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
        writer.writerow(
            [locations[i], facility_count[i], date_updated[i], time_updated[i], now.strftime("%Y-%m-%d %H:%M:%S")])

    f.close()


# web data -> str
# gets facility count data from scrape, in order goes
# 2nd Floor, Gym, 3rd Floor Weights, 3rd Floor Cardio, Track, 4th Floor Squash,
def pull_facility_count(data):
    count_list = []
    pattern = re.compile(r'.*Last Count: (\d+)Updated:')
    matches = re.findall(pattern, data)

    for m in matches:
        count_list.append(int(m))

    return count_list


# web data -> str
# Pulls the dates of the different counts updating
def pull_date_updated(data):
    date_list = []
    pattern = re.compile(r'Updated: \d+\/\d+\/\d+.*')
    matches = re.findall(pattern, data)

    for m in matches:
        date_list.append(m[9:19])

    return date_list


# web data -> str
# Pulls the time of the different counts being updated
def pull_time_updated(data):
    time_list = []
    pattern = re.compile(r'Updated: \d+\/\d+\/\d+.*')
    matches = re.findall(pattern, data)

    for m in matches:
        length = len(m)
        time_list.append(m[20:length])

    return time_list


web_data_to_class()


# find all data points of a specific gym floor each day
def find_all_at_location(gym_location):
    dataset = unique_data
    all_at_location = []

    for i in range(len(dataset)):
        if gym_location == dataset[i].location:
            all_at_location.append(dataset[i])

    return all_at_location


# find average per day in a specific gym location
def find_average_on_day(gym_location, date):
    dataset = find_all_at_location(gym_location)
    occupancy_tally = 0
    index = 0

    for i in range(len(dataset)):
        if date == dataset[i].date:
            occupancy_tally = occupancy_tally + int(dataset[i].count)
            index = index + 1
            print(dataset[i])

    print(occupancy_tally / index)

# takes a given amount of gym-info and coverts it into Dict.  We pass in the data instead of feeding
# it the uniques list because we call this in backend.py, where uniques array is undefined
def gym_info_to_dict(gym_data):
    dict_list = []
    for g in gym_data:
        most_recent_date = date.fromisoformat(
            datetime.strptime(g.date, "%m/%d/%Y").strftime('%Y-%m-%d'))
        Dict = {'Location': g.location, 'Count': g.count, 'Date': g.date, 'Time': g.time,
                'Weekday': weekdays[most_recent_date.weekday()]}
        dict_list.append(Dict)

    return dict_list


# go back 7 days from most recent datapoint
def filter_last_week():
    dataset = unique_data
    last_week_list = []

    # in datetime you can add and substract dates

    most_recent_date = date.fromisoformat(
        datetime.strptime(dataset[len(dataset) - 1].date, "%m/%d/%Y").strftime('%Y-%m-%d'))
    # used to subtract a week from most_recent
    delta = timedelta(7)
    one_week_ago = most_recent_date - delta

    # later dates are 'greater' than earlier dates
    for gym_data in dataset:
        gym_data_date = date.fromisoformat(datetime.strptime(gym_data.date, "%m/%d/%Y").strftime('%Y-%m-%d'))
        if gym_data_date >= one_week_ago:
            last_week_list.append(gym_data)

    return last_week_list

