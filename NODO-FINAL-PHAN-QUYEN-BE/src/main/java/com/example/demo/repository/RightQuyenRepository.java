package com.example.demo.repository;

import com.example.demo.entity.RightQuyen;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RightQuyenRepository extends JpaRepository<RightQuyen, Integer> {

    @Query("Select r from RightQuyen r where r.nhomQuyenMenu.id =:id")
    List<RightQuyen> getByNhomQuyenMenu(Integer id);

    @Modifying
    @Query("delete from RightQuyen r where r.nhomQuyenMenu.id =:idNQ and r.rightItem.id =:idDel")
    void deleteById(@Param("idNQ") Integer idNQ, @Param("idDel") Integer idDel);
}