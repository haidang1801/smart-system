package com.example.demo.service;

import java.io.IOException;
import java.util.List;

import org.apache.http.client.methods.HttpPost;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.apache.http.HttpResponse;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.client.HttpClient;
import org.apache.http.util.EntityUtils;
import org.json.JSONArray;
import com.google.gson.Gson;
import com.google.gson.JsonObject;

import com.example.demo.entities.ChieuCaoCanNang;
import com.example.demo.repository.ChieuCaoCanNangRepository;

@Service
public class FuzzyLogic {
	@Autowired
	private ChieuCaoCanNangRepository chieuCaoCanNangRepository;

	public ChieuCaoCanNang find(String sex, double age) {
		List<ChieuCaoCanNang> datas = chieuCaoCanNangRepository.findAll();
		for (int i = 0; i < datas.size(); i++) {
			ChieuCaoCanNang chieuCaoCanNang = datas.get(i);
			if (sex.toLowerCase().equals(chieuCaoCanNang.getGioiTinh()) && age == chieuCaoCanNang.getTuoi()) {
				return chieuCaoCanNang;
			}
		}
		return null;
	}

	public String getChieuCaoCanNang(String sex, Double age, Double weight, Double height) {
		ChieuCaoCanNang x = find(sex, age);
		System.out.println(x);
		String result = x.getCao().replace(" ", "_") + ";" + x.getTrungBinhCao().replace(" ", "_") + ";"
				+ x.getThap().replace(" ", "_") + ";" + x.getNang().replace(" ", "_") + ";"
				+ x.getTrungbinhNang().replace(" ", "_") + ";" + x.getNhe().replace(" ", "_") + ";" + height + ";"
				+ weight;
		return result;
	}

	public Double getChiSoSucKhoe(String chieuCaoCanNang) {
		//api python
		String pythonApiUrl = "http://localhost:5000/python/" + chieuCaoCanNang;
		// setup client
		HttpClient httpClient = HttpClients.createDefault();
		HttpPost httpPost = new HttpPost(pythonApiUrl);
		try {
			// Gửi yêu cầu và nhận phản hồi
			HttpResponse response = httpClient.execute(httpPost);

			if (response.getStatusLine().getStatusCode() == 200) {
				System.out.println("hai");
				String jsonResponse = EntityUtils.toString(response.getEntity());
				System.out.println(jsonResponse);
				return Double.parseDouble(jsonResponse);
			} else {
				System.err.println(response.getStatusLine().getStatusCode());
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
		return null;
	}
}
