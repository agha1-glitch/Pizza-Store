package com.newcode.store.repository;


import com.newcode.store.Entity.kunde;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface KundeRepository extends JpaRepository<kunde, Long> {
}
