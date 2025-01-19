package code.intermediate.polymorphism.methodOverloading;

public class MethodOverloading {
    void printInfo(String name) {
        System.out.println("Name :-" + name);
    }

    void printInfo(String name, Integer age) {
        System.out.println("Name :-" + name + "Age" + age);
    }

    void printInfo(String name, Integer age, Double height) {
        System.out.println("Name :-" + name + "Age" + age + "Height :-" + height);
    }

    public static void main(String args[]) {
        MethodOverloading mo = new MethodOverloading();
        mo.printInfo("Avinash");
        mo.printInfo("Avinash", 21);
        mo.printInfo("Avinash", 21, 5.7);
    }
}