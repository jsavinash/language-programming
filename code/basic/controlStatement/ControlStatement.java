package code.basic.controlStatement;

public class ControlStatement {
    public static void main(String args[]) {
        int age = 18;
        if (age > 17) {
            System.out.println("Valid voter");
        } else {
            System.out.println("InValid voter");
        }
        int day = 1;
        switch (day) {
            case 1:
                System.out.println("Case 1");
                break;
            case 2:
                System.out.println("Case 2");
                break;

            default:
                System.out.println("Default");
                break;
        }
        int count = 0;
        while (count < 5) {
            System.out.println("count" + count);
            count++;
        }
        int count2 = 0;
        do {
            System.out.println("count" + count2);
            count2++;
        } while (count2 < 5);
    }
}
