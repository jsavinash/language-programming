package code.intermediate.polymorphism.instanceInitializerBlock;

public class InstanceInitializerBock {
    String name;
    static Integer age;

    { // Instance initializer block
        System.out.println("Instance initializer block");
        this.name = "Avinash";
    }

    static {
        System.out.println("Static instance initializer block");
        age = 21;
    }

    InstanceInitializerBock() {
        System.out.println("Constructor block executed");
    }

    public static void main(String[] args) {
        InstanceInitializerBock in = new InstanceInitializerBock();
        System.out.println(in.name);
        System.out.println(InstanceInitializerBock.age);
    }
}
