package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.VanDong;

@Repository
public interface VanDongRepository extends JpaRepository<VanDong, Long>{
	@Query(value = "SELECT point FROM smart_system_official.van_dong where id = ?;", nativeQuery = true)
	Integer findPointById(Integer id);
	@Query(value = "SELECT type FROM smart_system_official.van_dong where id = ?;", nativeQuery = true)
	String findTypeById(Integer id);
}	
