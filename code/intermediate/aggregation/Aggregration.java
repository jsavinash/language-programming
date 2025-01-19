
class Address {
    String streetAddress;
    String city;
    String state;
    String pincode;

    Address(String streetAddress,
            String city,
            String state,
            String pincode) {
        this.streetAddress = streetAddress;
        this.city = streetAddress;
        this.state = streetAddress;
        this.pincode = streetAddress;
    }
}

public class Aggregration {
    String houseNo;
    Address address;

    Aggregration(String houseNo, Address address) {
        this.houseNo = houseNo;
        this.address = address;
    }

    void showAddress() {
        System.out.println(this.houseNo + this.address.streetAddress + this.address.city + this.address.state
                + this.address.pincode);
    }

    public static void main(String args[]) {
        Address address = new Address("Street Address", "City Name", "State name", "Pincode number");
        Aggregration aggregration = new Aggregration("house number", address);
        aggregration.showAddress();
    }
}