package com.example.nodo.controller;


import com.example.nodo.entities.NhaXuatBan;
import com.example.nodo.service.NhaXuatBanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("api/v1/publisher")
public class NhaXuatBanController {

    private NhaXuatBanService nhaXuatBanService;

    @Autowired
    public NhaXuatBanController(NhaXuatBanService nhaXuatBanService) {
        this.nhaXuatBanService = nhaXuatBanService;
    }

    @GetMapping
    public ResponseEntity<List<NhaXuatBan>> getAll() {
        return ResponseEntity.ok(this.nhaXuatBanService.getAll());
    }

    @GetMapping("{id}")
    public ResponseEntity<NhaXuatBan> finById(@PathVariable("id") Integer id) {
        return ResponseEntity.ok(this.nhaXuatBanService.finById(id));
    }

    @PostMapping
    public ResponseEntity<NhaXuatBan> create(@RequestBody NhaXuatBan nhaXuatBan) {
        return ResponseEntity.ok(this.nhaXuatBanService.create(nhaXuatBan));
    }

    @PutMapping("{id}")
    public ResponseEntity<NhaXuatBan> update(@RequestBody NhaXuatBan nhaXuatBan) {
        return ResponseEntity.ok(this.nhaXuatBanService.update(nhaXuatBan));
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable("id") Integer id) {
        this.nhaXuatBanService.delete(id);
    }
}
