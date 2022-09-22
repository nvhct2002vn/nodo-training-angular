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
    public Integer id;

    @Column(name = "MA", length = 10)
    public String ma;

    @Column(name = "TEN", length = 54)
    public String ten;

    @ManyToOne()
    @JoinColumn(name = "ID_NXB")
    public NhaXuatBan nhaXuatBan;

    @ManyToOne()
    @JoinColumn(name = "ID_TACGIA")
    public TacGia tacGia;

    @Column(name = "CHU_DE", length = 30)
    public String chuDe;

    @Column(name = "NAM_SAN_XUAT")
    public LocalDateTime namSanXuat;

    @Column(name = "MOTA", length = 255)
    public String moTa;

    @Column(name = "SO_LUONG_CON_LAI")
    public Integer soLuongConLai;

    @Column(name = "SO_LUONG_DANG_MUON")
    public Integer soLuongDangMuon;

    @Column(name = "TONG_SO_SACH")
    public Integer tongSoSach;

    @OneToMany(mappedBy = "sach",cascade = CascadeType.ALL)
    @JsonIgnore
    public List<MuonSach> muonSachList;
}
