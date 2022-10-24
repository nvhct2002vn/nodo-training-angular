package com.example.demo.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "right_quyen")
public class RightQuyen {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @ManyToOne()
    @JoinColumn(name = "nhom_quyen_menu_id")
    private NhomQuyenMenu nhomQuyenMenu;

    @ManyToOne()
    @JoinColumn(name = "right_item_id")
    private RightItem rightItem;
}