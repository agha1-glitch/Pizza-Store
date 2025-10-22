package com.newcode.store.Entity;


import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "orders")
public class order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(cascade = CascadeType.ALL)
    private kunde kunde;

    @OneToMany(cascade = CascadeType.ALL)
    private List<item> items;

    public order() {}

    public order(kunde kunde, List<item> items) {
        this.kunde = kunde;
        this.items = items;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

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
}

