
// This is the main
public class App {
    public static void main(String[] args) {
        int accesCode = findAccessCode();
        if (accesCode == -1) {
            System.out.println("Could not find the number");
        } else {
            System.out.println("The number is: " + accesCode);
        }
    }

    public static int findAccessCode() {
    
        int ones;
        int tens;
        int hundred;
        int thsnd;
        int number;
        int sum;
    
        for (int i = 0; i < 10; i += 2) {
            for (int j = 0; j < 10; j++ ) {
                if (i != j) {
                    if (Math.sqrt(j*10 + i) == i) {
                        ones = i;
                        tens = j;
    
                        thsnd = ones/tens;
                        hundred = tens%thsnd;
    
                        number = thsnd*1000 + hundred*100 + tens*10 + ones;
                        sum = ones + tens + hundred +thsnd;
    
                        if (sum == 12);
                        return number;
                    }
                }
            }
        }
        return -1;
    }
}

