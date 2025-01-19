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


def tupleOperation():
    tuplesVar = ("1", "2", "3")
    print(tuplesVar)
    print(tuplesVar[0])
    print(tuplesVar[0:])
    print(tuplesVar[:2])
    print(tuplesVar[0:1])
    # tuplesVar[2] = '4' //item assignment
    for x in tuplesVar:
        print(x)
    # unpacking
    fruits = ("apple", "orange", "banana")
    (apple, orange, banana) = fruits
    print(apple)
    print(orange)
    print(banana)
    (apple, *orange) = fruits
    print(apple)
    print(orange)
    (apple, *orange, banana) = fruits
    print(apple)
    print(orange)
    print(banana)
    x = list(fruits)
    x[0] = "Avinash"
    y = tuple(x)
    print(y)


def setOperation():
    setVar = {"a", "b", "c"}
    setVar2 = {"d", "e", "f"}
    setVar.add("d")
    setVar.remove("a")
    setVar.discard("b")
    print(setVar)
    for x in setVar:
        print(x)
    print("b" in setVar)
    print("b" not in setVar)
    setVar.update(setVar2)
    print(setVar)
    set1 = {"a", "b", "c"}
    set2 = {1, 2, 3}
    print(set1.union(set2))
    print(set1 | set2)
    print(set1.intersection(set2))


def dictionariesOperation():
    dictionariesVar = {"a": 1}
    dictionariesVar2 = dict(name="Avinash", age=12, demo=1222, dem2="demo2")
    dictionariesVar3 = dict(name="Avinash", age=12, demo=1222, dem2="demo2")
    print("a" in dictionariesVar)
    print(dictionariesVar["a"])
    print(dictionariesVar.get("a"))
    x = dictionariesVar.keys()
    print(x)
    y = dictionariesVar.values()
    print(y)
    z = dictionariesVar.items()
    print(z)
    dictionariesVar["b"] = 2
    print(dictionariesVar)
    dictionariesVar.update({"c": 3})
    print(dictionariesVar)
    dictionariesVar2.pop("name")
    dictionariesVar2.popitem()
    print(dictionariesVar2)
    del dictionariesVar2["age"]
    print(dictionariesVar2)
    dictionariesVar2.clear()
    print(dictionariesVar2)
    for x in dictionariesVar3:
        print(dictionariesVar3[x])
    print(dictionariesVar3.copy())


primitiveData()
nonPrimitiveData()
listOperation()
tupleOperation()
setOperation()
dictionariesOperation()
