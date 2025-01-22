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


def listOperation():
    listVar = []
    listVar.append(1)
    listVar.append(2)
    listVar.append(3)
    listVar.append(4)
    listVar.remove(2)
    listVar.pop(0)
    listVar.pop()
    listVar.insert(0, 1)
    print(listVar)
    print(listVar[0:1])
    print(listVar[0:2])
    print(listVar[0:])
    print(listVar[:1])
    listTwo = [4, 5, 6, 7]
    listVar.extend(listTwo)
    print(listVar)
    print(listVar + listTwo)
    print(listVar * 2)
    for x in listVar:
        print(x)
    for x in range(len(listVar)):
        print(x)
    listVar.reverse()
    print(listVar)
    print(listVar.sort())
    listVar.clear()
    print(listVar)


primitiveData()
nonPrimitiveData()
listOperation()
