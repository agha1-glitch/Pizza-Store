package com.newcode.store.dto;

public class Punkt {


        private double latitude;
        private double longitude;

        public Punkt(double latitude, double longitude) {
            this.latitude = latitude;
            this.longitude = longitude;
        }

        public double getLatitude() { return latitude; }
        public double getLongitude() { return longitude; }

}
