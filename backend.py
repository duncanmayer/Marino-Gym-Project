from flask import Flask

from main import gym_info_to_dict, filter_last_week

app = Flask(__name__)


@app.route("/")
def marino_data():
    return gym_info_to_dict(filter_last_week())


if __name__ == "__main__":
    app.run(host="0.0.0.0")
