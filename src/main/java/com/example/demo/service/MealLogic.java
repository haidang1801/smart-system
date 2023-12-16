package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.ChieuCaoCanNang;
import com.example.demo.entities.ThucDon;
import com.example.demo.repository.ThucDonRepository;

@Service
public class MealLogic {
	@Autowired
	private ThucDonRepository thucDonRepository;
	
	@Autowired
	private FuzzyLogic fuzzyLogic;
	
	public String getThucDon(Integer economy, Double healthyNumber, Double age, String sex, Double weight, Double height) {
		String result = "";
		
		// Xử lý mức độ kinh tế
		String economyText = "";
		if(economy == 1) economyText = "trung_binh";
		else economyText = "kha";
		
		// Xử lý chỉ số sức khỏe
		String healthyText = "";
		if(healthyNumber >= 4) healthyText = "binh_thuong";
		else healthyText = "yeu";
		
		//Xử lý mức độ sức khỏe
		String healthyLevel = "";
		ChieuCaoCanNang x = fuzzyLogic.find(sex, age);
		String[] thap = x.getThap().split("_");
		String[] nhe = x.getNhe().split("_");
		String[] cao = x.getCao().split("_");
		String[] nang = x.getNang().split("_");
		System.out.println(thap[0]);
		if(height >= Double.parseDouble(thap[0]) && height <= Double.parseDouble(thap[2]) && Double.parseDouble(nang[0]) <= weight && weight <= Double.parseDouble(nang[2])) {
			healthyLevel = "thap_nang";
		}
		if(height >= Double.parseDouble(cao[0]) && height <= Double.parseDouble(cao[2]) && Double.parseDouble(nhe[0]) <= weight && weight <= Double.parseDouble(nhe[2])) {
			healthyLevel = "cao_nhe";
		}
		
		
		System.out.println(economyText + "+" + healthyText + "+" + healthyLevel);
		ThucDon kq;
		if(economyText.equals("trung_binh")) {
			if(healthyText.equals("yeu")) {
				if(healthyLevel.equals("thap_nang")) kq = thucDonRepository.findTrungBinhThapNang(age);
				else kq = thucDonRepository.findTrungBinhCaoNhe(age);
			}else {
				kq = thucDonRepository.findTrungBinhBinhThuong(age);
			}
		}else {
			if(healthyText.equals("yeu")) {
				if(healthyLevel.equals("thap_nang")) kq = thucDonRepository.findKhaThapNang(age);
				else kq = thucDonRepository.findKhaCaoNhe(age);
			}else {
				kq = thucDonRepository.findKhaBinhThuong(age);
			}
		}
		System.out.println(kq);
		return kq.getThucDon();
	}
}
	