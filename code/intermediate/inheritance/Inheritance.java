package code.intermediate.inheritance;

class Parent {
    String name;

    Parent(String name) {
        this.name = name;
        System.out.println("Parent constructor called");
    }

    void printName() {
        System.out.println(this.name);
    }
}

class Child extends Parent {
    int age;

    Child(int age, String name) {
        super(name);
        this.age = age;
        System.out.println("Child constructor called");
    }

    void printAge() {
        System.out.println(this.age);
    }

    public static void main(String args[]) {
        Child c = new Child(21, "Avinash");
        c.printAge();
        c.printName();
    }
}