class OuterClass:
    class EmptyClass:
        pass
    class InnerClass:
        name = "Inner class name" #static / class variable
        def __init__(self):
            print("Innner class constructor called")

    name = "Outer class name"
    innerClassObj = InnerClass()

    def __init__(self):
        print("Outer constructor class called")

    def __str__(self):
        return f"{self.name}({self.innerClassObj.name})"

    def printName(self):
        return f"{self.name}"

outerClass = OuterClass()