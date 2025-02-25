class Parent:
    def printInfo(self):
        print("Parent info")


class Child(Parent):
    def printInfo(self):
        print("Child info")

child = Child()
child.printInfo()