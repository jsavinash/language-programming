package code.basic.datatype;

import java.util.Arrays;

public class Datatype {
    void primitiveData() {
        // Boolean
        Boolean booleanDataType = true;

        // Numeric
        // Character
        Character characterDataType = 'a';

        // Integer
        int intDataType = 1;
        byte byteDataType = 1;
        long longDataType = 1;
        short shortDataType = 1;

        // Floating point
        float floatDataType = 1.2f;
        double doubleDataType = 1.222;

        System.out.println(booleanDataType);
        System.out.println(characterDataType);
        System.out.println(intDataType);
        System.out.println(byteDataType);
        System.out.println(longDataType);
        System.out.println(shortDataType);
        System.out.println(floatDataType);
        System.out.println(doubleDataType);
    }

    void nonPrimitiveData() {
        // Non primitive
        String stringDataType = "String value";
        int[] intArrayDataType = { 1, 2, 3, 4 };

        System.out.println(stringDataType);
        System.out.println(Arrays.toString(intArrayDataType));
    }

    public static void main(String args[]) {
        Datatype dt = new Datatype();
        dt.primitiveData();
        dt.nonPrimitiveData();
    }
}