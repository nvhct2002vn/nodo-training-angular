package com.example.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "nhom_quyen_menu")
public class NhomQuyenMenu {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @ManyToOne()
    @JoinColumn(name = "nhom_quyen_id")
    private NhomQuyen nhomQuyen;

    @ManyToOne()
    @JoinColumn(name = "menu_item_id")
    private MenuItem menuItem;

    @OneToMany(mappedBy = "nhomQuyenMenu")
    @JsonIgnore
    private List<RightQuyen> rightQuyenList;
}