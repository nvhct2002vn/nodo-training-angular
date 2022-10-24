package com.example.demo.service;

import com.example.demo.entity.RightQuyen;

import java.util.List;

public interface RightQuyenService {

    List<RightQuyen> getAll();

    List<RightQuyen> getByNhomQuyenMenu(Integer id);

    List<RightQuyen> create(List<RightQuyen> rightQuyens);

    void deleteById(Integer idNQ, Integer[] idDel);

}
