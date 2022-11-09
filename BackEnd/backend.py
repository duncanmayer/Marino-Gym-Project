from flask import Flask, render_template
from flask_cors import CORS

from main import gym_info_to_dict, filter_last_week

app = Flask(__name__)
CORS(app)

@app.route("/")
def marino_data():
    return gym_info_to_dict(filter_last_week())

@app.route("/home/")
def display_home():
    return render_template('home.html')

@app.route("/graph")
def display_graph():
    return render_template('graphs.html')

@app.route("/graph/Marino2nd")
def display_Marino2nd():
    return render_template('Marino2ndFloor.html')

@app.route("/graph/Marino3rdSelect")
def display_Marino3rdSelect():
    return render_template('Marino3rdFloorSelect.html')

@app.route("/graph/Marino3rdWeight")
def display_Marino3rdWeight():
    return render_template('Marino3rdFloorWeights.html')

@app.route("/graph/MarinoGym")
def display_MarinoGym():
    return render_template('MarinoGymnasium.html')

@app.route("/graph/MarinoTrack")
def display_MarinoTrack():
    return render_template('MarinoTrack.html')

@app.route("/graph/SB4thFloor")
def display_SB4thFloor():
    return render_template('SquashBusters4thFloor.html')




if __name__ == "__main__":
    app.run(host="0.0.0.0")
