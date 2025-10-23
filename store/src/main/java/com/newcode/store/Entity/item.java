package com.newcode.store.Entity;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "items")
public class item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String type;
    private String name;
    private double preis;
    private String bild;
    private String grosse;

    @ElementCollection
    private List<String> extras;

    @ElementCollection
    private List<String> extras1;

    private String pizzasauce;

    @ElementCollection
    private List<String> sauce;

    public item() {}

    public item(String type, String name, double preis, String bild, String grosse,
                List<String> extras, List<String> extras1, String pizzasauce, List<String> sauce) {
        this.type = type;
        this.name = name;
        this.preis = preis;
        this.bild = bild;
        this.grosse = grosse;
        this.extras = extras;
        this.extras1 = extras1;
        this.pizzasauce = pizzasauce;
        this.sauce = sauce;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPreis() {
        return preis;
    }

    public void setPreis(double preis) {
        this.preis = preis;
    }

    public String getBild() {
        return bild;
    }

    public void setBild(String bild) {
        this.bild = bild;
    }

    public String getGrosse() {
        return grosse;
    }

    public void setGrosse(String grosse) {
        this.grosse = grosse;
    }

    public List<String> getExtras() {
        return extras;
    }

    public void setExtras(List<String> extras) {
        this.extras = extras;
    }

    public List<String> getExtras1() {
        return extras1;
    }

    public void setExtras1(List<String> extras1) {
        this.extras1 = extras1;
    }

    public String getPizzasauce() {
        return pizzasauce;
    }

    public void setPizzasauce(String pizzasauce) {
        this.pizzasauce = pizzasauce;
    }

    public List<String> getSauce() {
        return sauce;
    }

    public void setSauce(List<String> sauce) {
        this.sauce = sauce;
    }

    @Override
    public String toString() {
        return "item{" +
                "id=" + id +
                ", type='" + type + '\'' +
                ", name='" + name + '\'' +
                ", preis=" + preis +
                ", bild='" + bild + '\'' +
                ", grosse='" + grosse + '\'' +
                ", extras=" + extras +
                ", extras1=" + extras1 +
                ", pizzasauce='" + pizzasauce + '\'' +
                ", sauce=" + sauce +
                '}';
    }
}

