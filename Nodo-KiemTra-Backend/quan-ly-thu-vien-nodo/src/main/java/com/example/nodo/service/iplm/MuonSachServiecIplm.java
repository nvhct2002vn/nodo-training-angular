package com.example.nodo.service.iplm;


import com.example.nodo.entities.MuonSach;
import com.example.nodo.entities.NhaXuatBan;
import com.example.nodo.entities.Sach;
import com.example.nodo.exception.BeforeDateException;
import com.example.nodo.exception.TotalBookException;
import com.example.nodo.repository.MuonSachRepository;
import com.example.nodo.repository.NhaXuatBanRepository;
import com.example.nodo.service.MuonSachService;
import com.example.nodo.service.NhaXuatBanService;
import com.example.nodo.service.SachService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(rollbackFor = Exception.class)
public class MuonSachServiecIplm implements MuonSachService {

    private final MuonSachRepository muonSachRepository;
    private final SachService sachService;

    @Autowired
    public MuonSachServiecIplm(MuonSachRepository muonSachRepository, SachService sachService) {
        this.muonSachRepository = muonSachRepository;
        this.sachService = sachService;
    }

    @Override
    public List<MuonSach> getAll() {
        return this.muonSachRepository.findAll();
    }

    @Override
    public MuonSach finById(Integer id) {
        return this.muonSachRepository.findById(id).get();
    }

    @Override
    public MuonSach create(MuonSach muonSach) {
        Sach sach = this.sachService.finById(muonSach.getSach().getId());

        if (muonSach.getSoLuong() > sach.getSoLuongConLai()) {
            throw new TotalBookException("Số lượng sách mượn vượt quá số lượng sách còn trong kho");
        } else if (muonSach.getNgayGioTra().isBefore(muonSach.getNgayGioMuon())) {
            throw new BeforeDateException("Ngày giờ mượn không được lớn hơn ngày giờ trả");
        }

        if (muonSach.getSoLuong() <= sach.getSoLuongConLai()) {
            sach.setSoLuongDangMuon(muonSach.getSoLuong() + sach.getSoLuongDangMuon());
            sach.setSoLuongConLai(sach.getSoLuongConLai() - muonSach.getSoLuong());
        }
        return this.muonSachRepository.save(muonSach);

    }

    @Override
    public MuonSach update(MuonSach muonSach) {
        Sach sach = this.sachService.finById(muonSach.getSach().getId());
        MuonSach muonSachById = this.muonSachRepository.findById(muonSach.getId()).get();

        if ((muonSach.getSoLuong() - muonSachById.getSoLuong()) > sach.getSoLuongConLai()) {
            throw new TotalBookException("Số lượng sách mượn vượt quá số lượng sách còn trong kho");
        } else if (muonSach.getNgayGioTra().isBefore(muonSach.getNgayGioMuon())) {
            throw new BeforeDateException("Ngày giờ mượn không được lớn hơn ngày giờ trả");
        }
        if (muonSach.getSoLuong() != muonSachById.getSoLuong()) {
//            sach.setSoLuongDangMuon(sach.getSoLuongDangMuon() - muonSachById.getSoLuong() + muonSach.getSoLuong());
//            sach.setSoLuongConLai((muonSachById.getSoLuong() - muonSach.getSoLuong()) + sach.getSoLuongConLai());

            sach.setSoLuongDangMuon((muonSach.getSoLuong() - muonSachById.getSoLuong()) + sach.getSoLuongDangMuon());
            sach.setSoLuongConLai(sach.getTongSoSach() - sach.getSoLuongDangMuon());
        }
        if (muonSach.getTrangThai() != muonSachById.getTrangThai()) {
            if (muonSach.getTrangThai() == 1) {
                sach.setSoLuongDangMuon(sach.getSoLuongDangMuon() + muonSach.getSoLuong());
                sach.setSoLuongConLai(sach.getSoLuongConLai() - muonSach.getSoLuong());
            } else { // đã trả
                sach.setSoLuongDangMuon(sach.getSoLuongDangMuon() - muonSach.getSoLuong());
                sach.setSoLuongConLai(muonSach.getSoLuong() + sach.getSoLuongConLai());
            }
        }
        return this.muonSachRepository.save(muonSach);
    }

    @Override
    public void delete(Integer id) {
        this.muonSachRepository.deleteById(id);
    }
}
