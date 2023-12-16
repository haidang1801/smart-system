package com.example.demo.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "chieu_cao_can_nang")
public class ChieuCaoCanNang {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected Integer id;
	private double tuoi;
    private String thap;
    private String trungBinhCao;
    private String cao;
    private String nhe;
    private String trungBinhNang;
    private String nang;
    private String gioiTinh;
	public ChieuCaoCanNang(Integer id, double tuoi, String thap, String trungBinhCao, String cao, String nhe,
			String trungBinhNang, String nang, String gioiTinh) {
		super();
		this.id = id;
		this.tuoi = tuoi;
		this.thap = thap;
		this.trungBinhCao = trungBinhCao;
		this.cao = cao;
		this.nhe = nhe;
		this.trungBinhNang = trungBinhNang;
		this.nang = nang;
		this.gioiTinh = gioiTinh;
	}
	public ChieuCaoCanNang() {
		super();
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
	public String getThap() {
		return thap;
	}
	public void setThap(String thap) {
		this.thap = thap;
	}
	public String getTrungBinhCao() {
		return trungBinhCao;
	}
	public void setTrungBinhCao(String trungBinhCao) {
		this.trungBinhCao = trungBinhCao;
	}
	public String getCao() {
		return cao;
	}
	public void setCao(String cao) {
		this.cao = cao;
	}
	public String getNhe() {
		return nhe;
	}
	public void setNhe(String nhe) {
		this.nhe = nhe;
	}
	public String getTrungbinhNang() {
		return trungBinhNang;
	}
	public void setTrungbinhNang(String trungBinhNang) {
		this.trungBinhNang = trungBinhNang;
	}
	public String getGioiTinh() {
		return gioiTinh;
	}
	public void setGioiTinh(String gioiTinh) {
		this.gioiTinh = gioiTinh;
	}
	public String getNang() {
		return nang;
	}
	public void setNang(String nang) {
		this.nang = nang;
	}
    
}
