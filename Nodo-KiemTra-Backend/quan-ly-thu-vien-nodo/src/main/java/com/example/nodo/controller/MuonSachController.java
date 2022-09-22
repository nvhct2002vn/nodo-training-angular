package com.example.nodo.controller;


import com.example.nodo.entities.MuonSach;
import com.example.nodo.entities.TacGia;
import com.example.nodo.service.MuonSachService;
import com.example.nodo.service.TacGiaService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("api/v1/borrow-books")
public class MuonSachController {

    private final MuonSachService muonSachService;

    public MuonSachController(MuonSachService muonSachService) {
        this.muonSachService = muonSachService;
    }


    @GetMapping
    public ResponseEntity<List<MuonSach>> getAll() {
        return ResponseEntity.ok(this.muonSachService.getAll());
    }

    @GetMapping("{id}")
    public ResponseEntity<MuonSach> finById(@PathVariable("id") Integer id) {
        return ResponseEntity.ok(this.muonSachService.finById(id));
    }

    @PostMapping
    public ResponseEntity<MuonSach> create(@RequestBody MuonSach muonSach) {
        return ResponseEntity.ok(this.muonSachService.create(muonSach));
    }

    @PutMapping("{id}")
    public ResponseEntity<MuonSach> update(@RequestBody MuonSach muonSach) {
        return ResponseEntity.ok(this.muonSachService.update(muonSach));
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable("id") Integer id) {
        this.muonSachService.delete(id);
    }
}
