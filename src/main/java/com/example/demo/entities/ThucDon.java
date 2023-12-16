package com.example.demo.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "thuc_don")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ThucDon {
	@Id
	protected Integer id;
	private double tuoi;
	private String mucDoSucKhoe;
	private String thucDon;
	private String mucDoKinhTe;
	
	public ThucDon() {
		super();
	}
	public ThucDon(Integer id, double tuoi, String mucDoSucKhoe, String thucDon, String mucDoKinhTe) {
		super();
		this.id = id;
		this.tuoi = tuoi;
		this.mucDoSucKhoe = mucDoSucKhoe;
		this.thucDon = thucDon;
		this.mucDoKinhTe = mucDoKinhTe;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public double getTuoi() {
		return tuoi;
	}
	public void setTuoi(double tuoi) {
		this.tuoi = tuoi;
	}
	public String getMucDoSucKhoe() {
		return mucDoSucKhoe;
	}
	public void setMucDoSucKhoe(String mucDoSucKhoe) {
		this.mucDoSucKhoe = mucDoSucKhoe;
	}
	public String getThucDon() {
		return thucDon;
	}
	public void setThucDon(String thucDon) {
		this.thucDon = thucDon;
	}
	public String getMucDoKinhTe() {
		return mucDoKinhTe;
	}
	public void setMucDoKinhTe(String mucDoKinhTe) {
		this.mucDoKinhTe = mucDoKinhTe;
	}
	
}
