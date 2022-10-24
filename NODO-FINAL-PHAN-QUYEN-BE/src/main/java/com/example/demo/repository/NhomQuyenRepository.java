package com.example.demo.repository;

import com.example.demo.entity.NhomQuyen;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NhomQuyenRepository extends JpaRepository<NhomQuyen, Integer> {
}