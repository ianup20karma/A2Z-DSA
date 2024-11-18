public class LearningJava {
    // PILOT - SAMPLE CODE

    /* public static void main(String[] args) {
        System.out.println("Hello World!");
    } */

    // DATA TYPES

    /*
    public static void main(String[] args) {

        // Primitive Data Types:

        byte byteNum = 100;
        System.out.println("byte range: " + Byte.MIN_VALUE + " (-2^7) to " + Byte.MAX_VALUE + " (2^7 - 1).");
        // byte range: -128 (-2^7) to 127 (2^7 - 1).
        System.out.println("Space occupied by a byte: " + Byte.SIZE + " bits (" + Byte.SIZE / 8 + " byte)." + " Example : " + byteNum + "\n");
        // Space occupied by a byte: 8 bits (1 byte). Example : 100

        short shortNum = 32000;
        System.out.println("short range: " + Short.MIN_VALUE + " (-2^15) to " + Short.MAX_VALUE + " (2^15 - 1).");
        // short range: -32768 (-2^15) to 32767 (2^15 - 1).
        System.out.println("Space occupied by a short: " + Short.SIZE + " bits (" + Short.SIZE / 8 + " byte)." + " Example : " + shortNum + "\n");
        // Space occupied by a short: 16 bits (2 byte). Example : 32000

        int intNum = 2147387654;
        System.out.println("int range: " + Integer.MIN_VALUE + " (-2^31) to " + Integer.MAX_VALUE + " (2^31 - 1).");
        // int range: -2147483648 (-2^31) to 2147483647 (2^31 - 1).
        System.out.println("Space occupied by a int: " + Integer.SIZE + " bits (" + Integer.SIZE / 8 + " byte)." + " Example : " + intNum + "\n");
        // Space occupied by a int: 32 bits (4 byte). Example : 2147387654

        long longNum = 9223372036854775800L; // L suffix required
        System.out.println("long range: " + Long.MIN_VALUE + " (-2^63) to " + Long.MAX_VALUE + " (2^63 - 1).");
        // long range: -9223372036854775808 (-2^63) to 9223372036854775807 (2^63 - 1).
        System.out.println("Space occupied by a long: " + Long.SIZE + " bits (" + Long.SIZE / 8 + " byte)." + " Example : " + longNum + "\n");
        // Space occupied by a long: 64 bits (8 byte). Example : 9223372036854775800

        float floatNum = 3.4028235E35F; // F suffix required, 6-7 decimal digits of precision
        System.out.println("float range: " + Float.MIN_VALUE + " (-1.4 x 10^-45) to " + Float.MAX_VALUE + " (3.4028235 x 10^38).");
        // float range: 1.4E-45 (-1.4 x 10^-45) to 3.4028235E38 (3.4028235 x 10^38).
        System.out.println("Space occupied by a float: " + Float.SIZE + " bits (" + Float.SIZE / 8 + " byte)." + " Example : " + floatNum + "\n");
        // Space occupied by a float: 32 bits (4 byte). Example : 3.4028234E35

        double doubleNum = 3.141592653589793; // 15-16 decimal digits of precision
        System.out.println("double range: " + Double.MIN_VALUE + " (4.9 x 10^-324) to " + Double.MAX_VALUE + " (1.8 x 10^308).");
        // double range: 4.9E-324 (4.9 x 10^-324) to 1.7976931348623157E308 (1.8 x 10^308).
        System.out.println("Space occupied by a double: " + Double.SIZE + " bits (" + Double.SIZE / 8 + " byte)." + " Example : " + doubleNum + "\n");
        // Space occupied by a double: 64 bits (8 byte). Example : 3.141592653589793

        char charVar = 'a';
        System.out.println("char range: " + Character.MIN_VALUE + " (\u0000 - Unicode value 0) to " + Character.MAX_VALUE + " (\uffff - Unicode value 65535).");
        // char range: NUL (NUL - Unicode value 0) to ? (? - Unicode value 65535).
        System.out.println("Space occupied by a char: " + Character.SIZE + " bits (" + Character.SIZE / 8 + " byte)." + " Example : " + charVar + "\n");
        // Space occupied by a char: 16 bits (2 byte). Example : a
        
        boolean booleanVar = true;
        // boolean range: Not precisely defined (but typically 1 bit in memory, though it could be 1 byte depending on JVM implementation).
        System.out.println("Boolean Values: " + booleanVar + " " + !booleanVar + "\n");
        // Boolean Values: true false

        // Reference Data Types:

        // String: A sequence of characters (not a primitive, but a reference type). (<DATA_TYPE> * n bytes)
        // Arrays: A collection of elements of the same type. (2 * n bytes)
        // Classes and Interfaces: User-defined types, such as objects of classes you create.
        
    }
    */

    public static void main(String[] args) {
        System.out.println(!false);
    }
}