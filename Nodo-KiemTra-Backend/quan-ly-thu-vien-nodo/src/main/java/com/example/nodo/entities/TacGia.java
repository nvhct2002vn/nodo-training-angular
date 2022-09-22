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
    public Integer id;

    @Column(name = "MA", length = 10)
    public String ma;

    @Column(name = "TEN", length = 54)
    public String ten;

    @Column(name = "SDT", length = 15)
    public String sdt;

    @Column(name = "DIA_CHI", length = 255)
    public String diaChi;

    @Column(name = "MO_TA", length = 255)
    public String moTa;

    @OneToMany(mappedBy = "tacGia",cascade = CascadeType.ALL)
    @JsonIgnore
    public List<Sach> sachList;
}
