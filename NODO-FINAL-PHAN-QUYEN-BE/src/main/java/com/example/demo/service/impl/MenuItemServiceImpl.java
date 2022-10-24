package com.example.demo.service.impl;

import com.example.demo.entity.MenuItem;
import com.example.demo.entity.NhomQuyen;
import com.example.demo.repository.MenuItemRepository;
import com.example.demo.repository.NhomQuyenRepository;
import com.example.demo.service.MenuItemService;
import com.example.demo.service.NhomQuyenService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MenuItemServiceImpl implements MenuItemService {

    private final MenuItemRepository menuItemRepository;

    public MenuItemServiceImpl(MenuItemRepository menuItemRepository) {
        this.menuItemRepository = menuItemRepository;
    }

    @Override
    public List<MenuItem> getAll() {
        return this.menuItemRepository.findAll();
    }
}
