package com.newcode.store.dto;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URLEncoder;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Entfernungsmesser {

    // Messe Entfernung in Kilometern zwischen Adresse (als String) und Punkt b
    public double messen(String adresseA, Punkt b) throws Exception {
        Punkt a = geocodeNominatim(adresseA);
        if (a == null) {
            throw new RuntimeException("Keine Geocoding-Ergebnisse für Adresse: " + adresseA);
        }
        return berechneEntfernung(a, b);
    }

    // Geocoding mit OpenStreetMap Nominatim (kein API-Key)
    private Punkt geocodeNominatim(String adresse) throws Exception {
        String encoded = URLEncoder.encode(adresse.trim(), StandardCharsets.UTF_8);
        String urlStr = "https://nominatim.openstreetmap.org/search?q=" + encoded + "&format=json&limit=1";
        URL url = new URL(urlStr);
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestMethod("GET");
        // Nominatim verlangt User-Agent / Kontaktinfo
        conn.setRequestProperty("User-Agent", "MeinApp/1.0 (deine-email@domain.de)");

        int status = conn.getResponseCode();
        if (status != 200) {
            // optional: mehr Logging hier
            conn.disconnect();
            return null;
        }

        BufferedReader in = new BufferedReader(new InputStreamReader(conn.getInputStream(), StandardCharsets.UTF_8));
        StringBuilder sb = new StringBuilder();
        String line;
        while ((line = in.readLine()) != null) {
            sb.append(line);
        }
        in.close();
        conn.disconnect();

        String json = sb.toString().trim();
        // Wenn keine Ergebnisse -> "[]"
        if (json.equals("[]") || json.length() < 5) {
            return null;
        }

        // Einfaches Parsen: lat & lon sind Strings: "lat":"51.123", "lon":"6.123"
        Pattern latPattern = Pattern.compile("\"lat\"\\s*:\\s*\"([^\"]+)\"");
        Pattern lonPattern = Pattern.compile("\"lon\"\\s*:\\s*\"([^\"]+)\"");
        Matcher latM = latPattern.matcher(json);
        Matcher lonM = lonPattern.matcher(json);

        if (latM.find() && lonM.find()) {
            double lat = Double.parseDouble(latM.group(1));
            double lon = Double.parseDouble(lonM.group(1));
            return new Punkt(lat, lon);
        } else {
            return null;
        }
    }

    // Haversine in km
    private double berechneEntfernung(Punkt a, Punkt b) {
        final int R = 6371; // Erdradius in km
        double latDistance = Math.toRadians(b.getLatitude() - a.getLatitude());
        double lonDistance = Math.toRadians(b.getLongitude() - a.getLongitude());
        double haversine = Math.sin(latDistance / 2) * Math.sin(latDistance / 2)
                + Math.cos(Math.toRadians(a.getLatitude()))
                * Math.cos(Math.toRadians(b.getLatitude()))
                * Math.sin(lonDistance / 2) * Math.sin(lonDistance / 2);
        double c = 2 * Math.atan2(Math.sqrt(haversine), Math.sqrt(1 - haversine));
        return R * c;
    }


    }
