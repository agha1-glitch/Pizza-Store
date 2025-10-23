package com.newcode.store.service;

import com.newcode.store.Entity.item;
import com.newcode.store.repository.ItemRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ItemService {

    private final ItemRepository itemRepository;

    public ItemService(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

    public List<item> getAllItems() {
        return itemRepository.findAll();
    }

    public Optional<item> getItemById(Long id) {
        return itemRepository.findById(id);
    }

    public item createItem(item item) {
        return itemRepository.save(item);
    }


    public void deleteItem(Long id) {
        itemRepository.deleteById(id);
    }
}
