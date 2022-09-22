package com.example.nodo.controller;


import com.example.nodo.entities.Sach;
import com.example.nodo.service.SachService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/book")
public class SachController {

    private final SachService sachService;

    public SachController(SachService sachService) {
        this.sachService = sachService;
    }

    @GetMapping
    public ResponseEntity<List<Sach>> getAll() {
        return ResponseEntity.ok(this.sachService.getAll());
    }

    @GetMapping("{id}")
    public ResponseEntity<Sach> findById(@PathVariable("id") Integer id) {
        return ResponseEntity.ok(this.sachService.finById(id));
    }

    @PostMapping()
    public ResponseEntity<Sach> create(@RequestBody Sach sach) {
        return ResponseEntity.ok(this.sachService.create(sach));
    }

    @PutMapping("{id}")
    public ResponseEntity<Sach> update(@RequestBody Sach sach) {
        return ResponseEntity.ok(this.sachService.update(sach));
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable("id") Integer id) {
        this.sachService.delete(id);
    }
}
