package com.example.nodo.service;

import com.example.nodo.entities.Sach;
import com.example.nodo.entities.TacGia;

import java.util.List;

public interface SachService {

    List<Sach> getAll();

    Sach finById(Integer id);

    Sach create(Sach sach);

    Sach update(Sach sach);

    void delete(Integer id);

}
