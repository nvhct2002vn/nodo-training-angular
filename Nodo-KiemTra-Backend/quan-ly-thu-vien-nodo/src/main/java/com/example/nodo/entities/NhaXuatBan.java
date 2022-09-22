package com.example.nodo.entities;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Fetch;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "VIETHIEN_NHA_XUAT_BAN")
public class NhaXuatBan {

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = "nxbSeq", sequenceName = "VIETHIEN_NHA_XUAT_BAN_SEQ")
    public Integer id;

    @Column(name = "MA", length = 10)
    public String ma;

    @Column(name = "TEN", length = 54)
    public String ten;

    @Column(name = "TRANG_THAI")
    public Integer trangThai;

    @Column(name = "DIACHI", length = 255)
    public String diaChi;

    @Column(name = "MOTA", length = 255)
    public String moTa;

    @OneToMany(mappedBy = "nhaXuatBan",cascade = CascadeType.ALL)
    @JsonIgnore
    public List<Sach> sachList;

}
