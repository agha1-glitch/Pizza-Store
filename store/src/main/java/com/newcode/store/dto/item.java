package com.newcode.store.dto;

import java.util.Arrays;

public class item {  // 👈 großgeschrieben nach Java-Konvention
    private String type;
    private String name;
    private double preis;
    private String bild;
    private String grosse;
    private String [] extras;
    private String [] extras1;
    private String pizzasauce;
    private String [] sauce;

    public item() {}  // ✅ Pflicht für JSON-Deserialization

    public item(String type, String name, double preis, String bild, String grosse,
                String [] extras, String [] extras1, String pizzasauce, String [] sauce) {
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

    public String[] getExtras() {
        return extras;
    }

    public void setExtras(String[] extras) {
        this.extras = extras;
    }

    public String[] getExtras1() {
        return extras1;
    }

    public void setExtras1(String[] extras1) {
        this.extras1 = extras1;
    }

    public String getPizzasauce() {
        return pizzasauce;
    }

    public void setPizzasauce(String pizzasauce) {
        this.pizzasauce = pizzasauce;
    }

    public String[] getSauce() {
        return sauce;
    }

    public void setSauce(String[] sauce) {
        this.sauce = sauce;
    }

    @Override
    public String toString() {
        return "item{" +
                "type='" + type + '\'' +
                ", name='" + name + '\'' +
                ", preis=" + preis +
                ", bild='" + bild + '\'' +
                ", grosse='" + grosse + '\'' +
                ", extras=" + Arrays.toString(extras) +
                ", extras1=" + Arrays.toString(extras1) +
                ", pizzasauce='" + pizzasauce + '\'' +
                ", sauce=" + Arrays.toString(sauce) +
                '}';
    }
}
