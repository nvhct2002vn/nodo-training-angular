package com.example.demo.service.impl;

import com.example.demo.entity.NhomQuyen;
import com.example.demo.repository.NhomQuyenRepository;
import com.example.demo.service.NhomQuyenService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NhomQuyenServiceImpl implements NhomQuyenService {

    private final NhomQuyenRepository nhomQuyenRepository;

    public NhomQuyenServiceImpl(NhomQuyenRepository nhomQuyenRepository) {
        this.nhomQuyenRepository = nhomQuyenRepository;
    }

    @Override
    public List<NhomQuyen> getAll() {
        return this.nhomQuyenRepository.findAll();
    }
}
