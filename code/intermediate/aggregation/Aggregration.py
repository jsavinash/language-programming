class Address:
    def __init__(self, street_address, city, state, pin_code):
        self.street_address = street_address
        self.city = city
        self.state = state
        self.pin_code = pin_code


class Home:
    def __init__(self, house_no, address):
        self.house_no = house_no
        self.address = address

    def printHomeInfo(self):
        return f"{self.house_no}, {self.address.street_address}"


h = Home("414", Address("Street Address", "City", "State", "345566"))
print(h.printHomeInfo())
