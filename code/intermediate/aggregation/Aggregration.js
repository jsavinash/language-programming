function Address(streetAddress, city, state, pincode) {
    this.streetAddress = streetAddress;
    this.city = city;
    this.state = state;
    this.pincode = pincode;
}

function Home(houseNo, address) {
    this.houseNo = houseNo;
    this.address = address;
    this.printHomeInfo = function () {
        return `${this.houseNo}, ${this.address.streetAddress}, ${this.address.city} ,${this.address.state}, ${this.address.pincode}`;
    }
}
var home = new Home('414', new Address("Street Address", "City", "State", "547766"));
console.log(home.printHomeInfo());