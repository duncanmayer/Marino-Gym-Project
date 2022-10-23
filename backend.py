from flask import Flask

from main import GymInfo, gym_info_to_dict, uniques, filter_last_week

app = Flask(__name__)


# @app.route("/")
# def hello_world():
#     return "<p>Hello, World!</p>"


@app.route("/")
def marino_data():
    return gym_info_to_dict(filter_last_week())
