package com.example.nodo.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Data
@Entity
@Table(name = "VIETHIEN_BAN_DOC")
public class BanDoc {
    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = "banDocSeq", sequenceName = "VIETHIEN_BAN_DOC_SEQ")
    public Integer id;

    @Column(name = "MA", length = 10)
    public String ma;

    @Column(name = "TEN", length = 54)
    public String ten;

    @Column(name = "SDT", length = 15)
    public String sdt;

    @Column(name = "DIA_CHI", length = 255)
    public String diaChi;

    @Column(name = "NGAY_SINH")
    public LocalDateTime ngaySinh;

    @Column(name = "NGAY_TAO_TAI_KHOAN")
    public LocalDateTime ngayTaoTaiKhoan;

    @Column(name = "HANG")
    public Integer hang;

    @OneToMany(mappedBy = "banDoc",cascade = CascadeType.ALL)
    @JsonIgnore
    public List<MuonSach> muonSachList;
}
