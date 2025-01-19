class Parent:
    def __init__(self, name):
        self.name = name
        print("Parent constructor called")

    def printName(self):
        return f"Name :: {self.name}"

    def __str__(self):
        return f"{self.name}"


class Child(Parent):
    def __init__(self, name, age):
        # Parent.__init__(self, name)
        super().__init__(name)
        self.age = age
        print("Child constructor called")

    def printAge(self):
        return f"Name :: {self.age}"

    def __str__(self):
        return f"{self.age}"


c = Child("Avinash", 21)
print(c.printAge())
print(c.printName())
