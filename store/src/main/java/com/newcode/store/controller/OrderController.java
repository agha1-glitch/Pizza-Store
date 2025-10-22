package com.newcode.store.controller;

import com.newcode.store.dto.order;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OrderController {

    @PostMapping("/api/bestellung")
    public void order(@RequestBody order order) {
        System.out.println("empfang 0:");
        System.out.println(order);

    }
}
