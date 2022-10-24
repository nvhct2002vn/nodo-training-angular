package com.example.demo.repository;

import com.example.demo.entity.NhomQuyenMenu;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NhomQuyenMenuRepository extends JpaRepository<NhomQuyenMenu, Integer> {
}