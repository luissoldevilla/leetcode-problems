import java.lang.Math;

public class App {
    public static void main(String[] args) {
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

                        number = thsnd*100 + hundred*100 + tens*tens + ones;
                        sum = ones + tens + hundred +thsnd;

                        if (sum == 12) {
                            return number;
                        }
                    }
                }
            }
        }

    }
}

