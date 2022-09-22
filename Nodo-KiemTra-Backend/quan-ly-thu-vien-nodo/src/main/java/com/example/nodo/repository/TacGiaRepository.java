package com.example.nodo.repository;

import com.example.nodo.entities.NhaXuatBan;
import com.example.nodo.entities.TacGia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TacGiaRepository extends JpaRepository<TacGia, Integer> {

    @Query("select tg from TacGia tg order by tg.id asc ")
    List<TacGia> findAll();
}
