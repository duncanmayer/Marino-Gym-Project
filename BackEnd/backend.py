from flask import Flask, render_template
from flask_cors import CORS

from main import gym_info_to_dict, filter_last_week

app = Flask(__name__)
CORS(app)

@app.route("/")
def marino_data():
    return gym_info_to_dict(filter_last_week())

@app.route("/home")
def display_home(name=None):
    return render_template('home.html', name)

if __name__ == "__main__":
    app.run(host="0.0.0.0")
