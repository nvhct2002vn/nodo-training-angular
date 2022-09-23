package com.example.nodo.entities;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;


@Data
@Entity
@Table(name = "VIETHIEN_SACH")
public class Sach {
    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = "sachSeq", sequenceName = "VIETHIEN_SACH_SEQ")
    private Integer id;

    @Column(name = "MA", length = 10)
    private String ma;

    @Column(name = "TEN", length = 54)
    private String ten;

    @ManyToOne()
    @JoinColumn(name = "ID_NXB")
    private NhaXuatBan nhaXuatBan;

    @ManyToOne()
    @JoinColumn(name = "ID_TACGIA")
    private TacGia tacGia;

    @Column(name = "CHU_DE", length = 30)
    private String chuDe;

    @Column(name = "NAM_SAN_XUAT")
    private LocalDateTime namSanXuat;

    @Column(name = "MOTA", length = 255)
    private String moTa;

    @Column(name = "SO_LUONG_CON_LAI")
    private Integer soLuongConLai;

    @Column(name = "SO_LUONG_DANG_MUON")
    private Integer soLuongDangMuon;

    @Column(name = "TONG_SO_SACH")
    private Integer tongSoSach;

    @OneToMany(mappedBy = "sach",cascade = CascadeType.ALL)
    @JsonIgnore
    private List<MuonSach> muonSachList;
}
