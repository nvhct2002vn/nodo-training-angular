package com.example.nodo.repository;

import com.example.nodo.entities.NhaXuatBan;
import com.example.nodo.entities.TacGia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NhaXuatBanRepository extends JpaRepository<NhaXuatBan, Integer> {
    @Query("select nxb from NhaXuatBan nxb order by nxb.id asc ")
    List<NhaXuatBan> findAll();
}
