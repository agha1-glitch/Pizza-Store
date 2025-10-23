package com.newcode.store.service;

import com.newcode.store.Entity.kunde;
import com.newcode.store.repository.KundeRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class KundeService {

    private final KundeRepository kundeRepository;

    public KundeService(KundeRepository kundeRepository) {
        this.kundeRepository = kundeRepository;
    }

    public List<kunde> getAllItems() {
        return kundeRepository.findAll();
    }

    public Optional<kunde> getItemById(Long id) {
        return kundeRepository.findById(id);
    }

    public kunde createItem(kunde kunde) {
        return kundeRepository.save(kunde);
    }


    public void deleteItem(Long id) {
        kundeRepository.deleteById(id);
    }
}

