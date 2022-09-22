package com.example.nodo.service.iplm;


import com.example.nodo.entities.Sach;
import com.example.nodo.entities.TacGia;
import com.example.nodo.repository.TacGiaRepository;
import com.example.nodo.service.TacGiaService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TacGiaServiecIplm implements TacGiaService {

    private final TacGiaRepository tacGiaRepository;

    public TacGiaServiecIplm(TacGiaRepository tacGiaRepository) {
        this.tacGiaRepository = tacGiaRepository;
    }

    @Override
    public List<TacGia> getAll() {
        return this.tacGiaRepository.findAll();
    }

    @Override
    public TacGia finById(Integer id) {
        return this.tacGiaRepository.findById(id).get();
    }

    @Override
    public TacGia create(TacGia tacGia) {
        List<TacGia> tacGiaList = this.tacGiaRepository.findAll();
        if (tacGiaList.size() == 0) {
            tacGia.setMa("TG" + 1);
        } else {
            tacGia.setMa("TG" + (tacGiaList.get(tacGiaList.size() - 1).getId() + 1));
        }
        return this.tacGiaRepository.save(tacGia);
    }

    @Override
    public TacGia update(TacGia tacGia) {
        return this.tacGiaRepository.save(tacGia);
    }

    @Override
    public void delete(Integer id) {
        this.tacGiaRepository.deleteById(id);
    }
}
