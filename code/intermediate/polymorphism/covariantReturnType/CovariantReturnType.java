class A {
    A get() {
        return this;
    }
}

class B {
    B get() {
        return this;
    }

    void getMessage() {
        System.out.println("Welcome covariant type");
    }
    public static void main(String args[]){
        new B().get().getMessage();
    }
}