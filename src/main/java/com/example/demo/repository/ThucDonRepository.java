package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.ThucDon;

@Repository
public interface ThucDonRepository extends JpaRepository<ThucDon, Integer> {
	@Query(value = "SELECT * FROM smart_system_official.thuc_don where muc_do_kinh_te = 'trung_binh' and muc_do_suc_khoe = 'cao_nhe' and tuoi = ?;", nativeQuery = true)
	ThucDon findTrungBinhCaoNhe(double age);
	@Query(value = "SELECT * FROM smart_system_official.thuc_don where muc_do_kinh_te = 'trung_binh' and muc_do_suc_khoe = 'thap_nang' and tuoi = ?;", nativeQuery = true)
	ThucDon findTrungBinhThapNang(double age);
	@Query(value = "SELECT * FROM smart_system_official.thuc_don where muc_do_kinh_te = 'trung_binh' and muc_do_suc_khoe = 'binh_thuong' and tuoi = ?;", nativeQuery = true)
	ThucDon findTrungBinhBinhThuong(double age);
	@Query(value = "SELECT * FROM smart_system_official.thuc_don where muc_do_kinh_te = 'kha' and muc_do_suc_khoe = 'cao_nhe' and tuoi = ?;", nativeQuery = true)
	ThucDon findKhaCaoNhe(double age);
	@Query(value = "SELECT * FROM smart_system_official.thuc_don where muc_do_kinh_te = 'kha' and muc_do_suc_khoe = 'thap_nang' and tuoi = ?;", nativeQuery = true)
	ThucDon findKhaThapNang(double age);
	@Query(value = "SELECT * FROM smart_system_official.thuc_don where muc_do_kinh_te = 'kha' and muc_do_suc_khoe = 'binh_thuong' and tuoi = ?;", nativeQuery = true)
	ThucDon findKhaBinhThuong(double age);
}
