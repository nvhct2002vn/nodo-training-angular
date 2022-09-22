package com.example.nodo.service;

import com.example.nodo.entities.NhaXuatBan;

import java.util.List;

public interface NhaXuatBanService {

    List<NhaXuatBan> getAll();

    NhaXuatBan finById(Integer id);

    NhaXuatBan create(NhaXuatBan nhaXuatBan);

    NhaXuatBan update(NhaXuatBan nhaXuatBan);

    void delete(Integer id);
}
