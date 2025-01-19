# Global variable declaration.
globalVariable = "Global variable"


class Variable:
    # Static variable declaration.
    staticVariable = "Static variable"

    def __init__(self):
        # Instance variable declaration.
        self.instanceVariable = "Instance variable"

    def showLocalVariable(self):
        # Local variable declaration.
        localVariable = "Local variable"
        return localVariable


v = Variable()
print(globalVariable)
print(v.instanceVariable)
print(v.showLocalVariable())
print(v.staticVariable)
