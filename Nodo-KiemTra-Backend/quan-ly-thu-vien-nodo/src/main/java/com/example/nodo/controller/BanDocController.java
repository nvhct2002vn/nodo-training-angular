package com.example.nodo.controller;


import com.example.nodo.entities.BanDoc;
import com.example.nodo.entities.TacGia;
import com.example.nodo.service.BanDocService;
import com.example.nodo.service.TacGiaService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("api/v1/you-read")
public class BanDocController {

    private final BanDocService banDocService;

    public BanDocController(BanDocService banDocService) {
        this.banDocService = banDocService;
    }


    @GetMapping
    public ResponseEntity<List<BanDoc>> getAll() {
        return ResponseEntity.ok(this.banDocService.getAll());
    }

    @GetMapping("{id}")
    public ResponseEntity<BanDoc> finById(@PathVariable("id") Integer id) {
        return ResponseEntity.ok(this.banDocService.finById(id));
    }

    @PostMapping
    public ResponseEntity<BanDoc> create(@RequestBody BanDoc banDoc) {
        return ResponseEntity.ok(this.banDocService.create(banDoc));
    }

    @PutMapping("{id}")
    public ResponseEntity<BanDoc> update(@RequestBody BanDoc banDoc) {
        return ResponseEntity.ok(this.banDocService.update(banDoc));
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable("id") Integer id) {
        this.banDocService.delete(id);
    }
}
