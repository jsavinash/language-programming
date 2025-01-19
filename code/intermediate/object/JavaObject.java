package code.intermediate.object;

public class JavaObject {
    String name = "String"; // Data

    String printName() {
        return this.name; // Action or Behaviour
    }

    public static void main(String args[]) {
        JavaObject jb = new JavaObject(); //Object
        System.out.println(jb.printName());
    }
}
