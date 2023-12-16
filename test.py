string = "91_93_95;85_87_90;79_81_85;13_15_20;10_12_15;7_9_13;90.0;30.0"
x = string.split(";")
y = [float(i) for i in x[0].split("_")]
print(y[0], type(y[0]))
print(y[1], type(y[1]))
print(y[2], type(y[2]))