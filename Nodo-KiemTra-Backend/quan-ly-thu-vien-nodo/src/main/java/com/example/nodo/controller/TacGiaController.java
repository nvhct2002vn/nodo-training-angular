package com.example.nodo.controller;


import com.example.nodo.entities.TacGia;
import com.example.nodo.service.TacGiaService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("api/v1/author")
public class TacGiaController {

    private final TacGiaService tacGiaService;

    public TacGiaController(TacGiaService tacGiaService) {
        this.tacGiaService = tacGiaService;
    }


    @GetMapping
    public ResponseEntity<List<TacGia>> getAll() {
        return ResponseEntity.ok(this.tacGiaService.getAll());
    }

    @GetMapping("{id}")
    public ResponseEntity<TacGia> finById(@PathVariable("id") Integer id) {
        return ResponseEntity.ok(this.tacGiaService.finById(id));
    }

    @PostMapping
    public ResponseEntity<TacGia> create(@RequestBody TacGia tacGia) {
        return ResponseEntity.ok(this.tacGiaService.create(tacGia));
    }

    @PutMapping("{id}")
    public ResponseEntity<TacGia> update(@RequestBody TacGia tacGia) {
        return ResponseEntity.ok(this.tacGiaService.update(tacGia));
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable("id") Integer id) {
        this.tacGiaService.delete(id);
    }
}
