package code.intermediate.polymorphism.methodOverriding;

class Parent {
    void printInfo() {
        System.out.println("Parent Info");
    }
}

class MethodOverloading extends Parent {
    void printInfo() {
        System.out.println("Child Info");
    }
    public static void main(String args[]){
        MethodOverloading mo = new MethodOverloading();
        mo.printInfo();
    }
}