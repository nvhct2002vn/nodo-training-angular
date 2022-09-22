package com.example.nodo.service.iplm;


import com.example.nodo.entities.BanDoc;
import com.example.nodo.entities.NhaXuatBan;
import com.example.nodo.repository.BanDocRepository;
import com.example.nodo.repository.NhaXuatBanRepository;
import com.example.nodo.service.BanDocService;
import com.example.nodo.service.NhaXuatBanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BanDocServiecIplm implements BanDocService {

    private final BanDocRepository banDocRepository;

    @Autowired
    public BanDocServiecIplm(BanDocRepository banDocRepository) {
        this.banDocRepository = banDocRepository;
    }


    @Override
    public List<BanDoc> getAll() {
        return this.banDocRepository.findAll();
    }

    @Override
    public BanDoc finById(Integer id) {
        return this.banDocRepository.findById(id).get();
    }

    @Override
    public BanDoc create(BanDoc banDoc) {
        List<BanDoc> banDocList = this.banDocRepository.findAll();
        int ma;
        if (banDocList.size() == 0) {
            ma = 1;
        } else {
            ma = banDocList.get(banDocList.size() - 1).getId() + 1;
        }
        banDoc.setMa("BD" + ma);
        return this.banDocRepository.save(banDoc);
    }

    @Override
    public BanDoc update(BanDoc banDoc) {
        return this.banDocRepository.save(banDoc);
    }

    @Override
    public void delete(Integer id) {
        this.banDocRepository.deleteById(id);
    }
}
