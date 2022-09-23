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
    private Integer id;

    @ManyToOne()
    @JoinColumn(name = "ID_BAN_DOC")
    private BanDoc banDoc;

    @ManyToOne()
    @JoinColumn(name = "ID_SACH")
    private Sach sach;

    @Column(name = "SO_LUONG")
    private Integer soLuong;

    @Column(name = "NGAY_GIO_MUON")
    private LocalDateTime ngayGioMuon;

    @Column(name = "NGAY_GIO_TRA")
    private LocalDateTime ngayGioTra;

    @Column(name = "TRANG_THAI")
    private Integer trangThai;

    @Column(name = "GHI_CHU", length = 255)
    private String ghiChu;
}
