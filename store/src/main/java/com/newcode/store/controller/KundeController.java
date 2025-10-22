package com.newcode.store.controller;

import com.newcode.store.dto.Entfernungsmesser;
import com.newcode.store.dto.Punkt;
import com.newcode.store.dto.kunde;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class KundeController {
    private double entfernung;

    @PostMapping("/KundeAdresse")
    public double adresse(@RequestBody kunde kunde) throws Exception {
        System.out.println("empfang 1:");
        System.out.println(kunde);
        Entfernungsmesser messer = new Entfernungsmesser();
        double messen =0;
        try {
            Punkt b = new Punkt(51.546098, 7.309465);

            messen = messer.messen(kunde.getAdresse(),b);
        } catch (Exception e) {
                System.out.println("nicht geklappt");
        }

        entfernung=messen;
        System.out.println(entfernung);
        return messen;
    }


}
