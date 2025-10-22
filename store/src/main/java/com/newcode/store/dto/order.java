package com.newcode.store.dto;

import java.util.List;

public class order {
    private kunde kunde;
    private List<item> items;

    public order(kunde kunde , List<item> items) {
        this.kunde = kunde;
        this.items = items;
    }
    public order(){}
    public kunde getKunde() {
        return kunde;
    }
    public void setKunde(kunde kunde) {
        this.kunde = kunde;
    }
    public List<item> getItems() {
        return items;
    }
    public void setItems(List<item> items) {
        this.items = items;
    }

    @Override
    public String toString() {
        return "Order{" +
                "kunde=" + kunde +
                ", items=" + items +
                '}';
    }
    // Getter + Setter + toString()
}
