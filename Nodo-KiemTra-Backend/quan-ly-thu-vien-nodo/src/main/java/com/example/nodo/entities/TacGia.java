package com.example.nodo.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.List;


@Data
@Entity
@Table(name = "VIETHIEN_TAC_GIA")
public class TacGia {
    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = "tacGiaSeq", sequenceName = "VIETHIEN_TAC_GIA_SEQ")
    private Integer id;

    @Column(name = "MA", length = 10)
    private String ma;

    @Column(name = "TEN", length = 54)
    private String ten;

    @Column(name = "SDT", length = 15)
    private String sdt;

    @Column(name = "DIA_CHI", length = 255)
    private String diaChi;

    @Column(name = "MO_TA", length = 255)
    private String moTa;

    @OneToMany(mappedBy = "tacGia",cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Sach> sachList;
}
