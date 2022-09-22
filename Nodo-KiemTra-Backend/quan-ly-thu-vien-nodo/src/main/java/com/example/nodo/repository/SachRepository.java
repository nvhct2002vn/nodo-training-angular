package com.example.nodo.repository;

import com.example.nodo.entities.NhaXuatBan;
import com.example.nodo.entities.Sach;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SachRepository extends JpaRepository<Sach, Integer> {
    @Query("select s from Sach s order by s.id asc ")
    List<Sach> findAll();
}
