package com.example.nodo.service.iplm;


import com.example.nodo.entities.NhaXuatBan;
import com.example.nodo.entities.Sach;
import com.example.nodo.exception.TongNhoHoDangMuonException;
import com.example.nodo.exception.TotalBookException;
import com.example.nodo.repository.NhaXuatBanRepository;
import com.example.nodo.repository.SachRepository;
import com.example.nodo.service.NhaXuatBanService;
import com.example.nodo.service.SachService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SachServiecIplm implements SachService {

    private final SachRepository sachRepository;

    @Autowired
    public SachServiecIplm(SachRepository sachRepository) {
        this.sachRepository = sachRepository;
    }

    @Override
    public List<Sach> getAll() {
        return this.sachRepository.findAll();
    }

    @Override
    public Sach finById(Integer id) {
        return this.sachRepository.findById(id).get();
    }

    @Override
    public Sach create(Sach sach) {
        int ma;
        List<Sach> sachList = this.sachRepository.findAll();
        if (sachList.size() == 0) {
            ma = 1;
        } else {
            ma = sachList.get(sachList.size() - 1).getId() + 1;
        }
        sach.setMa("S" + ma);

        sach.setSoLuongConLai(sach.getTongSoSach() - sach.getSoLuongDangMuon());
        return this.sachRepository.save(sach);
    }

    @Override
    public Sach update(Sach sach) {
        if (sach.getTongSoSach() < sach.getSoLuongDangMuon()) {
            throw new TongNhoHoDangMuonException("Tổng không được nhỏ hơn số lượng đang mượn");
        }
        sach.setSoLuongConLai(sach.getTongSoSach() - sach.getSoLuongDangMuon());
        return this.sachRepository.save(sach);
    }

    @Override
    public void delete(Integer id) {
        this.sachRepository.deleteById(id);
    }
}
