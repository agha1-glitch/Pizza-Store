package com.newcode.store.controller;

import com.newcode.store.Entity.order;
import com.newcode.store.service.OrderService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OrderController {
    private final OrderService orderService;

    // 💡 Konstruktor-Injection (empfohlen)
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @PostMapping("/api/bestellung")
    public void order(@RequestBody order order) {
        System.out.println("empfang 0:");
        System.out.println(order);
        orderService.createItem(order);
        System.out.println(orderService.getAllItems());

    }
}
