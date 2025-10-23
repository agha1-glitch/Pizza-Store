package com.newcode.store.service;

import com.newcode.store.Entity.order;
import com.newcode.store.repository.ItemRepository;
import com.newcode.store.repository.OrderRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService {


    private final OrderRepository orderRepository;

    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public List<order> getAllItems() {
        return orderRepository.findAll();
    }

    public Optional<order> getItemById(Long id) {
        return orderRepository.findById(id);
    }

    public order createItem(order item) {
        return orderRepository.save(item);
    }


    public void deleteItem(Long id) {
        orderRepository.deleteById(id);
    }


}
