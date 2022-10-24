package com.example.demo.controller;


import com.example.demo.entity.RightItem;
import com.example.demo.entity.RightQuyen;
import com.example.demo.service.RightItemService;
import com.example.demo.service.RightQuyenService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/right-item")
public class RightItemController {

    private final RightItemService rightItemService;

    public RightItemController(RightItemService rightItemService) {
        this.rightItemService = rightItemService;
    }

    @GetMapping
    public ResponseEntity<List<RightItem>> getAll() {
        return ResponseEntity.ok(this.rightItemService.getAll());
    }

}
