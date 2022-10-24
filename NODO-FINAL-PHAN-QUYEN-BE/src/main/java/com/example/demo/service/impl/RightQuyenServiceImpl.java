package com.example.demo.service.impl;

import com.example.demo.entity.RightQuyen;
import com.example.demo.repository.RightQuyenRepository;
import com.example.demo.service.RightQuyenService;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class RightQuyenServiceImpl implements RightQuyenService {

    private final RightQuyenRepository rightQuyenRepository;

    public RightQuyenServiceImpl(RightQuyenRepository rightQuyenRepository) {
        this.rightQuyenRepository = rightQuyenRepository;
    }

    @Override
    public List<RightQuyen> getAll() {
        return this.rightQuyenRepository.findAll();
    }

    @Override
    public List<RightQuyen> getByNhomQuyenMenu(Integer id) {
        return this.rightQuyenRepository.getByNhomQuyenMenu(id);
    }

    @Override
    public List<RightQuyen> create(List<RightQuyen> rightQuyens) {
        return this.rightQuyenRepository.saveAll(rightQuyens);
    }

    @Override
    public void deleteById(Integer idNQ, Integer[] idDel) {
        for (Integer x : idDel
        ) {
            this.rightQuyenRepository.deleteById(idNQ, x);
        }
    }

}
