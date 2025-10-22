package com.newcode.store.dto;

public class kunde {
    private String name;
    private String tel;
    private String adresse;
    private String bestellung;

    public kunde() {}

    public kunde(String name, String tel, String adresse, String bestellung) {
        this.name = name;
        this.tel = tel;
        this.adresse = adresse;
        this.bestellung = bestellung;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public String getTel() {
        return tel;
    }
    public void setTel(String tel) {
        this.tel = tel;
    }

    public String getAdresse() {
        return adresse;
    }
    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    public String getBestellung() {
        return bestellung;
    }
    public void setBestellung(String bestellung) {
        this.bestellung = bestellung;
    }



    @Override
    public String toString() {
        return "Kunde{" +
                "name='" + name + '\'' +
                ", tel='" + tel + '\'' +
                ", adresse='" + adresse + '\'' +
                ", bestellung='" + bestellung + '\'' +
                '}';
    }
}
