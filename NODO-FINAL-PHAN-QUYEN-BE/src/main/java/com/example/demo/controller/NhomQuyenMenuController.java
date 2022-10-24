package com.example.demo.controller;


import com.example.demo.entity.NhomQuyen;
import com.example.demo.entity.NhomQuyenMenu;
import com.example.demo.service.NhomQuyenMenuService;
import com.example.demo.service.NhomQuyenService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/nhom-quyen-menu")
public class NhomQuyenMenuController {

    private final NhomQuyenMenuService nhomQuyenMenuService;

    public NhomQuyenMenuController(NhomQuyenMenuService nhomQuyenMenuService) {
        this.nhomQuyenMenuService = nhomQuyenMenuService;
    }

    @GetMapping
    public ResponseEntity<List<NhomQuyenMenu>> getAll() {
        return ResponseEntity.ok(this.nhomQuyenMenuService.getAll());
    }
}
