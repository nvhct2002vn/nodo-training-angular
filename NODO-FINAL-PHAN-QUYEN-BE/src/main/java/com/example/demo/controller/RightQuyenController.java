package com.example.demo.controller;


import com.example.demo.entity.RightQuyen;
import com.example.demo.service.RightQuyenService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/right-quyen")
public class RightQuyenController {

    private final RightQuyenService rightQuyenService;

    public RightQuyenController(RightQuyenService rightQuyenService) {
        this.rightQuyenService = rightQuyenService;
    }

    @GetMapping
    public ResponseEntity<List<RightQuyen>> getAll() {
        return ResponseEntity.ok(this.rightQuyenService.getAll());
    }

    @GetMapping("getByNhomQuyenMenu")
    public ResponseEntity<List<RightQuyen>> getByNhomQuyenMenu(@RequestParam("idNhomQuyenMenu") Integer id) {
        return ResponseEntity.ok(this.rightQuyenService.getByNhomQuyenMenu(id));
    }

    @PostMapping
    public ResponseEntity<List<RightQuyen>> create(@RequestBody List<RightQuyen> rightQuyens) {
        return ResponseEntity.ok(this.rightQuyenService.create(rightQuyens));
    }

    @GetMapping("deleteById")
    public void deleteById(@RequestParam("idNQ") Integer idNQ, @RequestParam("idDel") Integer[] idDel) {
        this.rightQuyenService.deleteById(idNQ, idDel);
    }

}
