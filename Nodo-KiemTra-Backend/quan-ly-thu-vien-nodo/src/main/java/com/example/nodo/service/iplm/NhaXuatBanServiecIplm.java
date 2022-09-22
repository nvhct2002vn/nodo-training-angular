package com.example.nodo.service.iplm;


import com.example.nodo.entities.NhaXuatBan;
import com.example.nodo.repository.NhaXuatBanRepository;
import com.example.nodo.service.NhaXuatBanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NhaXuatBanServiecIplm implements NhaXuatBanService {

    private final NhaXuatBanRepository nhaXuatBanRepository;

    @Autowired
    public NhaXuatBanServiecIplm(NhaXuatBanRepository nhaXuatBanRepository) {
        this.nhaXuatBanRepository = nhaXuatBanRepository;
    }


    @Override
    public List<NhaXuatBan> getAll() {
        return this.nhaXuatBanRepository.findAll();
    }

    @Override
    public NhaXuatBan finById(Integer id) {
        return this.nhaXuatBanRepository.findById(id).get();
    }

    @Override
    public NhaXuatBan create(NhaXuatBan nhaXuatBan) {
        int ma;
        List<NhaXuatBan> nhaXuatBanList = this.nhaXuatBanRepository.findAll();
        if (nhaXuatBanList.size() == 0) {
            ma = 1;
        } else {
            ma = nhaXuatBanList.get(nhaXuatBanList.size() - 1).getId() + 1;
        }
        nhaXuatBan.setMa("NXB" + ma);
        return this.nhaXuatBanRepository.save(nhaXuatBan);
    }

    @Override
    public NhaXuatBan update(NhaXuatBan nhaXuatBan) {
        return this.nhaXuatBanRepository.save(nhaXuatBan);
    }

    @Override
    public void delete(Integer id) {
        this.nhaXuatBanRepository.deleteById(id);
    }
}
