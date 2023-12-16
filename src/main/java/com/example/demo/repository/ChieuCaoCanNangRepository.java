package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.ChieuCaoCanNang;

@Repository
public interface ChieuCaoCanNangRepository extends JpaRepository<ChieuCaoCanNang, Long> {
	@Query(value = "SELECT * FROM smart_system_official.chieu_cao_can_nang where gioi_tinh like 'nu';", nativeQuery = true)
	List<ChieuCaoCanNang> findAllByNu();
	
	@Query(value = "SELECT * FROM smart_system_official.chieu_cao_can_nang where gioi_tinh like 'nam';", nativeQuery = true)
	List<ChieuCaoCanNang> findAllByNam();
	
	@Query(value = "SELECT * FROM smart_system_official.chieu_cao_can_nang where tuoi = ?;", nativeQuery = true)
	List<ChieuCaoCanNang> findAllByTuoi(double tuoi);
}
