package com.example.demo.service.impl;

import com.example.demo.entity.RightItem;
import com.example.demo.entity.RightQuyen;
import com.example.demo.repository.RightItemRepository;
import com.example.demo.repository.RightQuyenRepository;
import com.example.demo.service.RightItemService;
import com.example.demo.service.RightQuyenService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class RightItemServiceImpl implements RightItemService {

    private final RightItemRepository rightItemRepository;

    public RightItemServiceImpl(RightItemRepository rightItemRepository) {
        this.rightItemRepository = rightItemRepository;
    }


    @Override
    public List<RightItem> getAll() {
        return this.rightItemRepository.findAll();
    }
}
