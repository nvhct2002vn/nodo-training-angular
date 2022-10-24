package com.example.demo.controller;


import com.example.demo.entity.NhomQuyen;
import com.example.demo.service.NhomQuyenService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/nhom-quyen")
public class NhomQuyenController {

    private final NhomQuyenService nhomQuyenService;

    public NhomQuyenController(NhomQuyenService nhomQuyenService) {
        this.nhomQuyenService = nhomQuyenService;
    }

    @GetMapping
    public ResponseEntity<List<NhomQuyen>> getAll() {
        return ResponseEntity.ok(this.nhomQuyenService.getAll());
    }
}
