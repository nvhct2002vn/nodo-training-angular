package com.example.demo.service.impl;

import com.example.demo.entity.NhomQuyenMenu;
import com.example.demo.repository.NhomQuyenMenuRepository;
import com.example.demo.service.NhomQuyenMenuService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NhomQuyenMenuServiceImpl implements NhomQuyenMenuService {

    private final NhomQuyenMenuRepository nhomQuyenMenuRepository;

    public NhomQuyenMenuServiceImpl(NhomQuyenMenuRepository nhomQuyenMenuRepository) {
        this.nhomQuyenMenuRepository = nhomQuyenMenuRepository;
    }

    @Override
    public List<NhomQuyenMenu> getAll() {
        return this.nhomQuyenMenuRepository.findAll();
    }
}
