package com.example.nodo.service;

import com.example.nodo.entities.BanDoc;
import com.example.nodo.entities.TacGia;

import java.util.List;

public interface BanDocService {

    List<BanDoc> getAll();

    BanDoc finById(Integer id);

    BanDoc create(BanDoc banDoc);

    BanDoc update(BanDoc banDoc);

    void delete(Integer id);

}
