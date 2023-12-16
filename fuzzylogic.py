import numpy as np
import skfuzzy as fuzz
from skfuzzy import control as ctrl

# Antecedents
height= ctrl.Antecedent(np.arange(70, 165), 'height')
weight = ctrl.Antecedent(np.arange(8, 50), 'weight')
# Consequents
cmd = ctrl.Consequent(np.arange(0, 10), "command")
print(height, weight, cmd)
# Height memberships
cao = [132, 138, 147]
trung_binh_cao = [121, 127, 135]
thap = [107, 115, 123]
height["cao"] = fuzz.trimf(height.universe, cao)
height["trung_binh_cao"] = fuzz.trimf(height.universe, trung_binh_cao)
height["thap"] = fuzz.trimf(height.universe, thap)
# Weight memberships
weight['nang'] = fuzz.trimf(weight.universe, [33.6, 35.8, 38.3])
weight['trung_binh_nang'] = fuzz.trimf(weight.universe, [23.7, 25.0, 34.8])
weight['nhe'] = fuzz.trimf(weight.universe, [16.9, 18.6, 24.7])
# Command memberships (lệnh)
cmd['khoe'] = fuzz.trimf(cmd.universe, [8, 9, 10])
cmd['hoi_khoe'] = fuzz.trimf(cmd.universe, [4, 5, 8])
cmd['yeu'] = fuzz.trimf(cmd.universe, [0, 3, 4])
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
# Enter values to test

height_value = float(input("Enter height"))

while height_value < 100 or height_value > 150:
    try:
        height_value = float(input("Please choose a number between 100 and 150 "))
    except ValueError:
        print('We expect you to enter a valid integer')

weight_value = float(input("Enter weight"))

while weight_value < 15 or weight_value > 40:
    try:
        weight_value = float(input("Please choose a number between 15 and 40 "))
    except ValueError:
        print('We expect you to enter a valid integer')

cmd_output.input["height"] = height_value
cmd_output.input["weight"] = weight_value

cmd_output.compute()
# Print output command and plots
print("Command is defined between 15 y 25")
print(cmd_output.output["command"])
if cmd_output.output["command"] >= 8:
    print("Khoe")
elif cmd_output.output["command"] < 8 and cmd_output.output["command"] >= 4:
    print("Hoi Khoe")
else:
    print("Yeu")

# cmd.view(sim=cmd_output)

# input("1")
# height.view()
# input("2")

# weight.view()
# input("3")
