def primitiveData():
    print(True)
    print(123)
    print("String value")
    print(1.2)


def nonPrimitiveData():
    print(["str", 1, True, 1.2])
    print((1, "str", 1.2, False))
    print({str: "Str"})
    print({1, 2, 3})

primitiveData()
nonPrimitiveData()