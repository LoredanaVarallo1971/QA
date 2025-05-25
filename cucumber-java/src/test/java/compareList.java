import java.io.IOException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class compareList {

    public static void main(String[] args) throws IOException {
        List<StoreItems> store1 = new ArrayList<>();
        store1.add(new StoreItems("apple", 1.00, "fruit"));
        store1.add(new StoreItems("orange", 1.50, "fruit"));
        store1.add(new StoreItems("banana", .75, "fruit"));
        List<StoreItems> store2 = new ArrayList<>();
        store2.add(new StoreItems("banana", .75, "fruit"));
        store2.add(new StoreItems("apple", 1.00, "fruit"));
        store2.add(new StoreItems("orange", 1.50, "vegetable"));
        compareList c = new compareList();
        c.compare(store1, store2);
    }

    public void compare(List<StoreItems> store1, List<StoreItems> store2) {

        Set<StoreItems> st1 = new HashSet<>(store1);
        Set<StoreItems> st2 = new HashSet<>(store2);
        Set<StoreItems> diff1 = new HashSet<>(st1); //(A-B)
        diff1.removeAll(st2);
        Set<StoreItems> diff2 = new HashSet<>(st2); //(B-A)
        diff2.removeAll(st1);

        for (StoreItems s1 : diff1) {
            System.out.println("Name:" + s1.getName() + " Price:" + s1.getPrice() + " Category:" + s1.getCategory());
        }
        for (StoreItems s2 : diff2) {
            System.out.println("Name:" + s2.getName() + " Price:" + s2.getPrice() + " Category:" + s2.getCategory());
        }

    }
}
