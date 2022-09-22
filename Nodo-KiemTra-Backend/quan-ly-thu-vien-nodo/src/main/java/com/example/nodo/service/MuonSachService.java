package com.example.nodo.service;

import com.example.nodo.entities.MuonSach;
import com.example.nodo.entities.TacGia;

import java.util.List;

public interface MuonSachService {

    List<MuonSach> getAll();

    MuonSach finById(Integer id);

    MuonSach create(MuonSach muonSach);

    MuonSach update(MuonSach muonSach);

    void delete(Integer id);

}
