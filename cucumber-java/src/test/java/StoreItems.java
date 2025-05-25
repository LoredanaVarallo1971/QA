import java.util.Objects;

public class StoreItems {
    private String name;
    private double price;
    private String category;

    public StoreItems(String name, double price, String category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        StoreItems that = (StoreItems) o;
        return Double.compare(price, that.price) == 0 && Objects.equals(
                name,
                that.name
        ) && Objects.equals(category, that.category);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, price, category);
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }
}
