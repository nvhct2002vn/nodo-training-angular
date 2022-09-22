package com.example.nodo.repository;

import com.example.nodo.entities.MuonSach;
import com.example.nodo.entities.NhaXuatBan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MuonSachRepository extends JpaRepository<MuonSach, Integer> {

}
