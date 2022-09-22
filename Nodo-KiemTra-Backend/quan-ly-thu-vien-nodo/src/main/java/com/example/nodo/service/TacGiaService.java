package com.example.nodo.service;

import com.example.nodo.entities.NhaXuatBan;
import com.example.nodo.entities.TacGia;

import java.util.List;

public interface TacGiaService {

    List<TacGia> getAll();

    TacGia finById(Integer id);

    TacGia create(TacGia tacGia);

    TacGia update(TacGia tacGia);

    void delete(Integer id);

}
