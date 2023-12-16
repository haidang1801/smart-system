package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.repository.VanDongRepository;

@Service
public class ActionLogic {
	@Autowired
	private VanDongRepository vanDongRepository;
	
	public Integer getPointAction(Integer action1, Integer action2, Integer action3, Integer timeAction1, Integer timeAction2, Integer timeAction3) {
		Integer point = 0;
		point += vanDongRepository.findPointById(action1);
		point += vanDongRepository.findPointById(action2);
		point += vanDongRepository.findPointById(action3);

		if(action1 == 1) {
			switch (timeAction1) {
			case 1:
				point += 3;
				break;
			case 2:
				point += 2;
				break;
			case 3:
				point += 1;
				break;
			default:
				break;
			}
		}else {
			switch (timeAction1) {
			case 1:
				point += 1;
				break;
			case 2:
				point += 2;
				break;
			case 3:
				point += 3;
				break;
			default:
				break;
			}
		}
		if(action2 == 1) {
			switch (timeAction2) {
			case 1:
				point += 3;
				break;
			case 2:
				point += 2;
				break;
			case 3:
				point += 1;
				break;
			default:
				break;
			}
		}else {
			switch (timeAction2) {
			case 1:
				point += 1;
				break;
			case 2:
				point += 2;
				break;
			case 3:
				point += 3;
				break;
			default:
				break;
			}
		}
		if(action3 == 1) {
			switch (timeAction3) {
			case 1:
				point += 3;
				break;
			case 2:
				point += 2;
				break;
			case 3:
				point += 1;
				break;
			default:
				break;
			}
		}else {
			switch (timeAction3) {
			case 1:
				point += 1;
				break;
			case 2:
				point += 2;
				break;
			case 3:
				point += 3;
				break;
			default:
				break;
			}
		}
		return point;
	}
	
	public String getTextAction(Integer pointAction, Integer action1, Integer action2, Integer action3) {
		String actionText1 = vanDongRepository.findTypeById(action1);
		String actionText2 = vanDongRepository.findTypeById(action2);
		String actionText3 = vanDongRepository.findTypeById(action3);
		if(pointAction < 8) {
			return "Trẻ hiện đang trong giai đoạn phát triển thể chất và trí tuệ mạnh mẽ. Do đó, cần khuyến khích trẻ tham gia các hoạt động đa dạng, bao gồm cả thể chất và trí tuệ v:\r\n"
					+ "Đối với các hoạt động thể chất, Theo khuyến nghị của Tổ chức Y tế Thế giới (WHO), trẻ em từ 2 đến 10 tuổi cần được vận động ít nhất 60 phút mỗi ngày ngày có thể hơn nếu trẻ thức sự thích các hoạt động thể chất. Thời gian vận động này có thể được chia thành nhiều lần trong ngày, mỗi lần ít nhất 15 phút.. Các hoạt động này có thể bao gồm:\r\n"
					+ "Chơi các trò chơi vận động như bóng đá, cầu lông, đá cầu, bơi lội,...\r\n"
					+ "Tham gia các lớp học thể dục, thể thao.\r\n"
					+ "Giúp đỡ bố mẹ làm việc nhà.\r\n"
					+ "Đối với các hoạt động trí tuệ, trẻ cần được khuyến khích tham gia ít nhất 30-60 phút mỗi ngày có thể hơn nếu trẻ thức sự thích các hoạt động trí tuệ (không bao gồm thời gian học trên trường lớp). Các hoạt động này có thể bao gồm:\r\n"
					+ "Học các môn học như toán, tiếng Việt, ngoại ngữ,...\r\n"
					+ "Đọc sách, truyện.\r\n"
					+ "Chơi các trò chơi trí tuệ như xếp hình, rubik,..\r\n"
					+ "Không nên bắt ép trẻ học tập quá nhiều tránh việc gây áp lực mà nên để trẻ phát triển bản thân theo năng khiếu của trẻ.\r\n"
					+ "Nếu trẻ không nghe lời ngay thì có thể tăng dần thời gian chơi và học của trẻ theo từng ngày nhưng không nên để trẻ , hay bắt ép trẻ vận động hay học tập quá 180 phút trong ngày.\r\n";	
		}else {
			if(actionText1.equals("Khác") && actionText2.equals("Khác") && actionText3.equals("Khác") ) {
				return "Trẻ hiện đang trong giai đoạn phát triển thể chất và trí tuệ mạnh mẽ. Do đó, cần khuyến khích trẻ tham gia các hoạt động đa dạng, bao gồm cả thể chất và trí tuệ :\n"
						+ "Đối với các hoạt động thể chất, Theo khuyến nghị của Tổ chức Y tế Thế giới (WHO), trẻ em từ 2 đến 10 tuổi cần được vận động ít nhất 60 phút mỗi ngày ngày có thể hơn nếu trẻ thức sự thích các hoạt động thể chất. Thời gian vận động này có thể được chia thành nhiều lần trong ngày, mỗi lần ít nhất 15 phút.. Các hoạt động này có thể bao gồm:\r\n"
						+ "Chơi các trò chơi vận động như bóng đá, cầu lông, đá cầu, bơi lội,...\r\n"
						+ "Tham gia các lớp học thể dục, thể thao.\r\n"
						+ "Giúp đỡ bố mẹ làm việc nhà.\r\n"
						+ "Đối với các hoạt động trí tuệ, trẻ cần được khuyến khích tham gia ít nhất 30-60 phút mỗi ngày có thể hơn nếu trẻ thức sự thích các hoạt động trí tuệ (không bao gồm thời gian học trên trường lớp). Các hoạt động này có thể bao gồm:\r\n"
						+ "Học các môn học như toán, tiếng Việt, ngoại ngữ,...\r\n"
						+ "Đọc sách, truyện.\r\n"
						+ "Chơi các trò chơi trí tuệ như xếp hình, rubik,..\r\n"
						+ "Không nên bắt ép trẻ học tập quá nhiều tránh việc gây áp lực mà nên để trẻ phát triển bản thân theo năng khiếu của trẻ.\r\n"
						+ "Nếu trẻ không nghe lời ngay thì có thể tăng dần thời gian chơi và học của trẻ theo từng ngày nhưng không nên để trẻ , hay bắt ép trẻ vận động hay học tập quá 180 phút trong ngày.\r\n";
				
			}else if(!actionText1.equals("Thể chất") && !actionText2.equals("Thể chất") && !actionText3.equals("Thể chất")) {
				return "Có vẻ con bạn đang thực sự thiếu những hoạt động thể chất trong hoạt động hàng ngày.\r\n"
						+ "Trẻ em cần tham gia các hoạt động thể chất và trí tuệ một cách cân bằng. Các hoạt động thể chất giúp trẻ phát triển thể chất, tăng cường sức khỏe, giảm nguy cơ mắc các bệnh mãn tính. Các hoạt động trí tuệ giúp trẻ phát triển tư duy, sáng tạo, giải quyết vấn đề,...\r\n"
						+ "Trẻ chỉ có hoạt động trí tuệ và các hoạt động  trò chơi điện tử, xem tivi, điện thoại  , thiếu hoạt động thể chất có thể gặp phải các vấn đề sau:\r\n"
						+ "Thừa cân, béo phì\r\n"
						+ "Thiếu hụt vitamin D, canxi\r\n"
						+ "Mất tập trung, khó tập trung\r\n"
						+ "Tăng nguy cơ mắc các bệnh lý tim mạch, tiểu đường,...\r\n"
						+ "Tăng nguy cơ trầm cảm, lo âu,...\r\n"
						+ "Dễ mắc các bệnh về mắt ,và cột sống\r\n"
						+ "Dưới đây là một số gợi ý cụ thể để cha mẹ có thể tư vấn cho trẻ:\r\n"
						+ "Giải thích cho trẻ tầm quan trọng của việc tham gia các hoạt động thể chất: Cha mẹ cần giải thích cho trẻ hiểu rằng các hoạt động thể chất giúp trẻ phát triển khỏe mạnh cả về thể chất và tinh thần. Trẻ cần được vận động thường xuyên để có thể phát triển toàn diện.\r\n"
						+ "Điều chỉnh thời gian sử dụng thiết bị điện tử: Cha mẹ cần quy định thời gian sử dụng thiết bị điện tử cho trẻ, không nên cho trẻ sử dụng thiết bị điện tử quá 3 giờ mỗi ngày.\r\n"
						+ "Khuyến khích trẻ tham gia các hoạt động thể chất đa dạng: Cha mẹ có thể khuyến khích trẻ tham gia các hoạt động thể chất ngoài trời, các hoạt động trí tuệ như học tập, đọc sách, chơi trò chơi,...\r\n"
						+ "Tìm kiếm các hoạt động mà trẻ yêu thích: Cha mẹ cần tìm hiểu sở thích của trẻ để khuyến khích trẻ tham gia các hoạt động mà trẻ yêu thích.\r\n"
						+ "Dưới đây là một số hoạt động thể chất cụ thể mà cha mẹ có thể khuyến khích trẻ tham gia:\r\n"
						+ "Các môn thể thao: bóng đá, cầu lông, bóng rổ, bơi lội,...\r\n"
						+ "Các hoạt động ngoài trời: đi bộ, đạp xe, chơi đùa ở công viên,...\r\n"
						+ "Các hoạt động vận động trong nhà: nhảy dây, chơi bóng rổ mini,...\r\n"
						+ "Các hoạt động giúp đỡ bố mẹ làm việc nhà: quét nhà, lau nhà, rửa bát,...\r\n"
						+ "Cha mẹ cần kiên nhẫn và đồng hành cùng trẻ để giúp trẻ hình thành thói quen tham gia các hoạt động thể chất.\r\n"
						+ "Dưới đây là một số ví dụ cụ thể về cách cha mẹ có thể tư vấn cho trẻ:\r\n"
						+ "Cha mẹ có thể nói với trẻ rằng: \"Con biết không, vận động giúp con phát triển cơ bắp, xương khớp chắc khỏe. Con vận động nhiều thì con sẽ không bị béo phì, mắc các bệnh tim mạch, tiểu đường. Con vận động cũng giúp con học tập tốt hơn, con sẽ có nhiều năng lượng để học bài, giải quyết các bài tập khó.\"\r\n"
						+ "Cha mẹ có thể cùng trẻ lên kế hoạch cho các hoạt động thể chất: \"Tuần này, cuối tuần chúng ta đi chơi công viên nhé.”\r\n"
						+ " Lưu ý\r\n"
						+ "Cha mẹ cần dành thời gian quan tâm, lắng nghe trẻ để hiểu rõ hơn về nhu cầu và sở thích của trẻ.\r\n"
						+ "Cha mẹ cần kiên nhẫn và đồng hành cùng trẻ trong quá trình phát triển.\r\n"
						+ "Đối với các hoạt động thể chất, trẻ cần được khuyến khích tham gia ít nhất 60 phút mỗi ngày , dù trẻ không thích thì vẫn cần bố mẹ hướng dẫn và tạo thói quen hoạt động cho trẻ vì đây đang là giai đoạn phát triển của trẻ.";
			}else if(!actionText1.equals("Trí tuệ") && !actionText2.equals("Trí tuệ") && !actionText3.equals("Trí tuệ")) {
				return "Có vẻ con bạn đang cần thêm những hoạt động về trí tuệ trong hoạt động hàng ngày.\r\n"
						+ "Trẻ em cần tham gia các hoạt động thể chất và trí tuệ một cách cân bằng. Các hoạt động thể chất giúp trẻ phát triển thể chất, tăng cường sức khỏe, giảm nguy cơ mắc các bệnh mãn tính. Các hoạt động trí tuệ giúp trẻ phát triển tư duy, sáng tạo, giải quyết vấn đề,... Theo khuyến nghị của Tổ chức Y tế Thế giới (WHO), trẻ em từ 2 đến 10 tuổi cần được hoạt động trí tuệ 30-60 phút mỗi ngày.\r\n"
						+ "Khuyến khích trẻ tham gia các hoạt động trí tuệ, giúp trẻ phát triển toàn diện cả về thể chất và trí tuệ.\r\n"
						+ "Các bước thực hiện:\r\n"
						+ "Trẻ có thể đang gặp phải một số vấn đề sau:\r\n"
						+ "Trẻ thiếu hứng thú với các hoạt động trí tuệ.\r\n"
						+ "Trẻ không biết cách lựa chọn các hoạt động trí tuệ phù hợp với sở thích và khả năng của mình.\r\n"
						+ "Trẻ không có đủ thời gian và không gian để tham gia các hoạt động trí tuệ.\r\n"
						+ "Cha mẹ cần trò chuyện với trẻ để hiểu rõ hơn về sở thích và khả năng của trẻ. Cha mẹ có thể hỏi trẻ những câu hỏi như:\r\n"
						+ "Con thích làm gì?\r\n"
						+ "Con giỏi môn nào?\r\n"
						+ "Con muốn học thêm điều gì?\r\n"
						+ "Cha mẹ cần tạo điều kiện cho trẻ tham gia các hoạt động trí tuệ. Cha mẹ có thể khuyến khích trẻ tham gia các hoạt động trí tuệ dưới đây:\r\n"
						+ "Học tập: học các môn học, đọc sách, tham gia các câu lạc bộ học thuật,...\r\n"
						+ "Trò chơi trí tuệ: xếp hình, rubik, các trò chơi logic,...\r\n"
						+ "Âm nhạc: học đàn, hát,...\r\n"
						+ "Nghệ thuật: vẽ tranh, làm thủ công,...\r\n"
						+ "Khoa học: tham quan bảo tàng, thực hiện các thí nghiệm,...\r\n"
						+ "Công nghệ: học lập trình, sử dụng các thiết bị điện tử một cách an toàn,...\r\n"
						+ "Cha mẹ cần đồng hành cùng trẻ trong các hoạt động trí tuệ. Cha mẹ có thể cùng trẻ học tập, chơi các trò chơi trí tuệ,... để tạo hứng thú cho trẻ.\r\n"
						+ "Dưới đây là một số gợi ý cụ thể cho cha mẹ:\r\n"
						+ "Đối với trẻ nhỏ, cha mẹ có thể cho trẻ chơi các trò chơi trí tuệ đơn giản, phù hợp với lứa tuổi của trẻ.\r\n"
						+ "Đối với trẻ lớn hơn, cha mẹ có thể cho trẻ tham gia các hoạt động ngoại khóa, câu lạc bộ học thuật,...\r\n"
						+ "Cha mẹ cũng có thể khuyến khích trẻ tự tìm hiểu và phát triển các kỹ năng trí tuệ của mình.\r\n"
						+ "Lưu ý\r\n"
						+ "Cha mẹ cần dành thời gian quan tâm, lắng nghe trẻ để hiểu rõ hơn về nhu cầu và sở thích của trẻ.\r\n"
						+ "Cha mẹ cần kiên nhẫn và đồng hành cùng trẻ trong quá trình phát triển.\r\n"
						+ "Nếu trẻ thực sự không thích các hoạt động trí tuệ thì cũng không nên bắt ép trẻ mà ủng hộ trẻ tiếp tục tham gia các hoạt động thể chất đồng thơi khuyên trẻ giảm bớt thời gian sử dụng máy tính, điện thoại....\r\n";
			}else return "Chúc mừng cha mẹ , con bạn đang có một thói quen sinh hoạt tốt và hợp lý. Cha mẹ nên tiếp tục khuyến khích con bạn theo thoi quen hoạt động như vậy để con bạn có thể phát triển toàn diện giữa cả thể chất và trí tuệ.";
		}
	}
}
