package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MessageService {
	@Autowired
	private FuzzyLogic fuzzyLogic;
	@Autowired
	private ActionLogic actionLogic;
	@Autowired
	private MealLogic mealLogic;
	
	
	public String solveMessage(String message) {
        if (message.contains("n"))
            return meal(message);
        else return action(message);
    }
	private String action(String message) {
		Integer action1 = 0, action2 = 0, action3 = 0, timeAction1 = 0, timeAction2 = 0, timeAction3 = 0;
		String[] infors = message.split("_");
		action1 = Integer.parseInt(infors[0]);
		action2 = Integer.parseInt(infors[1]);
		action3 = Integer.parseInt(infors[2]);
		timeAction1 = Integer.parseInt(infors[3]);
		timeAction2 = Integer.parseInt(infors[4]);
		timeAction3 = Integer.parseInt(infors[5]);
		System.out.println(actionLogic.getPointAction(action1, action2, action3, timeAction1, timeAction2, timeAction3));
		String result = actionLogic.getTextAction(actionLogic.getPointAction(action1, action2, action3, timeAction1, timeAction2, timeAction3), action1, action2, action3);
		return result;
	}
	private String meal(String message) {
        double height = 0, weight = 0;
        double age = 0;
        Integer economy = 0;
        String sex= "";
        String[] infors = message.split("_");
        sex = infors[0];
        age = Double.parseDouble(infors[1]);
        economy = Integer.parseInt(infors[2]);
        height = Double.parseDouble(infors[3]);
        weight = Double.parseDouble(infors[4]);
        if(sex.equals("nữ")) sex = "nu";
        if (age < 2 || age > 10
            || height <= 0 || weight <= 0
            || (!sex.equalsIgnoreCase("nam") && !sex.equalsIgnoreCase("nu")))
            return "Không thể nhận dạng thông tin cần tư vấn ở tuVanKhauPhanAn";
        Double healthyNumber = fuzzyLogic.getChiSoSucKhoe(fuzzyLogic.getChieuCaoCanNang(sex, age, weight, height));
        String thucDon = mealLogic.getThucDon(economy, healthyNumber, age, sex, weight, height);
        return thucDon;
    }
}
