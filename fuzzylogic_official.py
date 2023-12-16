from flask import Flask, request, jsonify
import sklearn
import numpy as np
import skfuzzy as fuzz
from skfuzzy import control as ctrl

app = Flask(__name__)


@app.route("/python/<file_path>", methods=["POST"])
def fuzzy_logic(file_path):
    # Input
    string = file_path.split(";")
    cao = [float(i) for i in string[0].split("_")]
    trung_binh_cao = [float(i) for i in string[1].split("_")]
    thap = [float(i) for i in string[2].split("_")]
    nang = [float(i) for i in string[3].split("_")]
    trung_binh_nang = [float(i) for i in string[4].split("_")]
    nhe = [float(i) for i in string[5].split("_")]
    height_value = float(string[6])
    weight_value = float(string[7])
    # Antecedents
    height = ctrl.Antecedent(np.arange(70, 165), "height")
    weight = ctrl.Antecedent(np.arange(8, 50), "weight")
    # Consequents
    cmd = ctrl.Consequent(np.arange(0, 10), "command")
    print(cao)
    print(trung_binh_cao)
    print(thap)
    print(nang)
    print(trung_binh_nang)
    print(nhe)
    print(height, weight, cmd)
    # Height memberships
    height["cao"] = fuzz.trimf(height.universe, cao)
    height["trung_binh_cao"] = fuzz.trimf(height.universe, trung_binh_cao)
    height["thap"] = fuzz.trimf(height.universe, thap)
    # Weight memberships
    weight["nang"] = fuzz.trimf(weight.universe, nang)
    weight["trung_binh_nang"] = fuzz.trimf(weight.universe, trung_binh_nang)
    weight["nhe"] = fuzz.trimf(weight.universe, nhe)
    # Command memberships (lệnh)
    cmd["khoe"] = fuzz.trimf(cmd.universe, [8, 9, 10])
    cmd["hoi_khoe"] = fuzz.trimf(cmd.universe, [4, 5, 8])
    cmd["yeu"] = fuzz.trimf(cmd.universe, [0, 3, 4])
    # Rule system
    # Rules for yeu
    rule1 = ctrl.Rule(
        (height["cao"] & weight["nhe"]) | (height["thap"] & weight["nang"]), cmd["yeu"]
    )
    # Rules for hoi khoe
    rule2 = ctrl.Rule(
        (height["cao"] & weight["trung_binh_nang"])
        | (height["trung_binh_cao"] & weight["nhe"])
        | (height["trung_binh_cao"] & weight["nang"])
        | (height["thap"] & weight["nhe"]),
        cmd["hoi_khoe"],
    )
    # Rules for khoe
    rule3 = ctrl.Rule(
        (height["cao"] & weight["nang"])
        | (height["trung_binh_cao"] & weight["trung_binh_nang"])
        | (height["thap"] & weight["trung_binh_nang"]),
        cmd["khoe"],
    )
    # Control System Creation and Simulation
    cmd_ctrl = ctrl.ControlSystem([rule1, rule2, rule3])
    cmd_output = ctrl.ControlSystemSimulation(cmd_ctrl)
    cmd_output.input["height"] = height_value
    cmd_output.input["weight"] = weight_value

    cmd_output.compute()
    # Print output command and plots
    print("Command is defined between 0 y 10")
    print(cmd_output.output["command"], type(cmd_output.output["command"]))
    # if (cmd_output.output['command'] >= 8):
    #     print('Khoe')
    # elif (cmd_output.output['command'] < 8 and cmd_output.output['command'] >= 4):
    #     print('Hoi Khoe')
    # else:
    #     print('Yeu')
    print(file_path)
    return str(cmd_output.output["command"])

if __name__ == "__main__":
    app.run()
