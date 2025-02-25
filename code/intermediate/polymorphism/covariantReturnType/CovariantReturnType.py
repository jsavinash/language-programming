class A:
    def get(self):
        return self


class B(A):
    def get(self):
        return self

    def getMessage(self):
        print("Welcome to covariant return type")


b = B()
b.get().getMessage()
