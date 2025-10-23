package com.newcode.store.repository;

import com.newcode.store.Entity.order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<order, Long> {

}
