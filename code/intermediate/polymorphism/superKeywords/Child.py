class Parent:
    def __init__(self):
        print("Parent constructor called")

    def printInfo(self):
        print("Method from parent called")


class Child(Parent):
    def __init__(self):
        # super().__init__()
        Parent.__init__(self)
        print("Constructor from child called")

    def printInfo(self):
        super().printInfo()
        print("Method from child called")


child = Child()
child.printInfo()
