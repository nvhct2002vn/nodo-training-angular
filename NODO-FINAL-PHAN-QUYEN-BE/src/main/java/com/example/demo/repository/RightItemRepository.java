package com.example.demo.repository;

import com.example.demo.entity.RightItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RightItemRepository extends JpaRepository<RightItem, Integer> {
}