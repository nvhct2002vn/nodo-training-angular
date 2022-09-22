package com.example.nodo.repository;

import com.example.nodo.entities.BanDoc;
import com.example.nodo.entities.NhaXuatBan;
import com.example.nodo.entities.Sach;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BanDocRepository extends JpaRepository<BanDoc, Integer> {
    @Query("select bd from BanDoc bd order by bd.id asc ")
    List<BanDoc> findAll();
}
