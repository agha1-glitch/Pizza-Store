package com.newcode.store.repository;


import com.newcode.store.Entity.item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemRepository extends JpaRepository<item, Long> {
}
