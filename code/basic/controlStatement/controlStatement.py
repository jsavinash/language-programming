def controlStatement():
    age = 18
    if age > 17:
        print("Voter valid")
    else:
        print("Voter invalid")
    count = 0
    while count < 5:
        print(count)
        count += 1
    for x in range(0, 5):
        print(x)

    def switchImplementation(params):
        dictionary = {
            'a': "A Called",
            'b': "B Called",
            'c': "C Called",
        }
        return dictionary.get(params)
    print(switchImplementation('a'))


controlStatement()
