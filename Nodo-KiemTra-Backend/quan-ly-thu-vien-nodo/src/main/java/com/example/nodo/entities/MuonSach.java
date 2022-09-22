package com.example.nodo.entities;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;


@Data
@Entity
@Table(name = "VIETHIEN_MUON_SACH")
public class MuonSach {
    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = "muonSachSeq", sequenceName = "VIETHIEN_MUON_SACH_SEQ")
    public Integer id;

    @ManyToOne()
    @JoinColumn(name = "ID_BAN_DOC")
    public BanDoc banDoc;

    @ManyToOne()
    @JoinColumn(name = "ID_SACH")
    public Sach sach;

    @Column(name = "SO_LUONG")
    public Integer soLuong;

    @Column(name = "NGAY_GIO_MUON")
    public LocalDateTime ngayGioMuon;

    @Column(name = "NGAY_GIO_TRA")
    public LocalDateTime ngayGioTra;

    @Column(name = "TRANG_THAI")
    public Integer trangThai;

    @Column(name = "GHI_CHU", length = 255)
    public String ghiChu;
}
