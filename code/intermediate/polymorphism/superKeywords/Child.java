package code.intermediate.polymorphism.superKeywords;

class Parent {
    String name;

    Parent(String name) {
        this.name = name;
    }

    void printInfo() {
        System.out.println("Parent class");
    }
}

public class Child extends Parent {
    String age;

    Child(String age, String name) {
        this.age = age;
        super(name);
    }

    void printInfo() {
        super.printInfo();
        System.out.println("Child class");
    }

    public static void main(String[] args) {
        Child sk = new Child("21", "Avinash");
        sk.printInfo();
    }
}
