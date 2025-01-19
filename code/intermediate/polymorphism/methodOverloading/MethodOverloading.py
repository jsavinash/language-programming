def print_name(*args):
    if len(args) == 1:
        print("Name :-" + args[0])
    elif len(args) == 2:
        print("Name :-" + args[0], "Age :-", + args[1])
    elif len(args) == 3:
        print("Name :-" + args[0], "Age :-", + args[1], "Height :-", +args[2])

print_name("Name")
print_name("Name", 24)
print_name("Name", 24, 5.6)