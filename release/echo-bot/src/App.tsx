import {
  Box,
  Button,
  // Button,
  CssBaseline,
  Divider,
  // Link,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material';
import {
  ActionRequest,
  AudioActionResponse,
  // ActionRequest,
  // AudioActionResponse,
  ChatController,
  FileActionResponse,
  // FileActionResponse,
  MuiChat,
} from 'chat-ui-react';
import React from 'react';

const muiTheme = createTheme({
  palette: {
    primary: {
      main: '#007aff',
    },
  },
});

export function App(): React.ReactElement {
  const chatCtl = React.useMemo(
    () =>
      new ChatController({
        showDateTime: true,
      }),
    [],
  );

  React.useMemo(() => {
    echo(chatCtl);
  }, [chatCtl]);

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Box sx={{ height: '100%', backgroundColor: 'gray' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            maxWidth: '640px',
            marginLeft: 'auto',
            marginRight: 'auto',
            bgcolor: 'background.default',
          }}
        >
          <Typography sx={{ p: 1 }}>
            Chào mừng đến với hệ thống tư vấn dinh dưỡng và vận động cho trẻ em
            từ 2 đến 10 tuổi
          </Typography>
          <Divider />
          <Box sx={{ flex: '1 1 0%', minHeight: 0 }}>
            <MuiChat chatController={chatCtl} />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

async function action(chatCtl: ChatController): Promise<void> {
  console.log(2);
  await chatCtl.addMessage({
    type: 'text',
    content: `Chọn 3 hoạt động dưới đây mà bạn thường thấy trẻ hoạt động trong ngày hoặc trong tuần.`,
    self: false,
    avatar: '-',
  });
  const req = await chatCtl.setActionRequest({
    type: 'multi-select',
    options: [
      {
        value: '1',
        text: 'Xem các thiết bị điện tử như tivi, máy tính, điện thoại, máy tính bảng,…..(lướt Tictok, Facebook, Youtube,…)\n',
      },
      {
        value: '2',
        text: 'Chơi game điện tử (các trò chơi trên các thiết bị điện tử)\n',
      },
      {
        value: '3',
        text: 'Ngồi một chỗ, lười không hoạt động\n',
      },
      {
        value: '4',
        text: 'Nhận diện màu sắc, hình dáng của đồ vật và chữ cái\n',
      },
      {
        value: '5',
        text: 'Chơi xếp hình (xếp các khối)\n',
      },
      {
        value: '6',
        text: 'Chơi búp bê, ô tô đồ chơi,… (các đồ chơi trong nhà)\n',
      },
      {
        value: '7',
        text: 'Chơi nhập vai ( giả gia đình, bán hàng, …)\n',
      },
      {
        value: '8',
        text: 'Chơi ghép tranh (ghép các mảnh để được bức tranh hoàn chỉnh)\n',
      },
      {
        value: '9',
        text: 'Vẽ tranh\n',
      },
      {
        value: '10',
        text: 'Chơi rubic, ghép lego\n',
      },
      {
        value: '11',
        text: 'Học ngoại ngữ như tiếng Anh, tiếng Nhật, tiếng Nga,…\n',
      },
      {
        value: '12',
        text: 'Chơi các nhạc cụ như đàn piano, violin, đàn tranh, sáo,…\n',
      },
      {
        value: '13',
        text: 'Giúp bố mẹ làm việc nhà như quét nhà, hút bụi, lau nhà, phơi quần áo,…\n',
      },
      {
        value: '14',
        text: 'Thả diều, đạp xe, chạy bộ, ván trượt\n',
      },
      {
        value: '15',
        text: 'Chơi đá bóng, bóng rổ, cầu lông, đá cầu, nhảy dây, trốn tìm, đuổi bắt, trượt patin, bơi lội,..\n',
      },
    ],
  });

  await chatCtl.addMessage({
    type: 'text',
    content: `Chọn thời gian trẻ thực hiện các hoạt động đó.`,
    self: false,
    avatar: '-',
  });

  await chatCtl.addMessage({
    type: 'text',
    content: `Với hoạt động đầu tiên`,
    self: false,
    avatar: '-',
  });
  const action1 = await chatCtl.setActionRequest({
    type: 'select',
    options: [
      {
        value: '1',
        text: 'Ít hơn 30 phút',
      },
      {
        value: '2',
        text: 'Từ 30 phút đến 1 giờ',
      },
      {
        value: '3',
        text: 'Từ 1 giờ đến 3 giờ',
      },
      {
        value: '4',
        text: 'Trên 3 giờ',
      },
    ],
  });
  console.log(action1);
  await chatCtl.addMessage({
    type: 'text',
    content: `Với hoạt động thứ hai`,
    self: false,
    avatar: '-',
  });
  const action2 = await chatCtl.setActionRequest({
    type: 'select',
    options: [
      {
        value: '1',
        text: 'Ít hơn 30 phút',
      },
      {
        value: '2',
        text: 'Từ 30 phút đến 1 giờ',
      },
      {
        value: '3',
        text: 'Từ 1 giờ đến 3 giờ',
      },
      {
        value: '4',
        text: 'Trên 3 giờ',
      },
    ],
  });

  await chatCtl.addMessage({
    type: 'text',
    content: `Với hoạt động thứ ba`,
    self: false,
    avatar: '-',
  });
  const action3 = await chatCtl.setActionRequest({
    type: 'select',
    options: [
      {
        value: '1',
        text: 'Ít hơn 30 phút',
      },
      {
        value: '2',
        text: 'Từ 30 phút đến 1 giờ',
      },
      {
        value: '3',
        text: 'Từ 1 giờ đến 3 giờ',
      },
      {
        value: '4',
        text: 'Trên 3 giờ',
      },
    ],
  });
  // console.log(req.value.split('\n')[0]);
  // console.log(req.value.split('\n')[1].slice(1));
  let messageApi = '';
  const mes: string[] = req.value.split('\n');
  for (let i = 0; i < mes.length; i += 1) {
    if (mes[i].charAt(0) === ',') mes[i] = mes[i].slice(1);
  }
  console.log(mes[0]);
  console.log(mes[1]);
  console.log(mes[2]);
  console.log(mes[3]);
  Object.keys(mes).forEach((index) => {
    console.log(mes.length)
    switch (mes[+index]) {
      case 'Xem các thiết bị điện tử như tivi, máy tính, điện thoại, máy tính bảng,…..(lướt Tictok, Facebook, Youtube,…)':
        messageApi += '1_';
        break;
      case 'Chơi game điện tử (các trò chơi trên các thiết bị điện tử)':
        messageApi += '2_';
        break;
      case 'Ngồi một chỗ, lười không hoạt động':
        messageApi += '3_';
        break;
      case 'Nhận diện màu sắc, hình dáng của đồ vật và chữ cái':
        messageApi += '4_';
        break;
      case 'Chơi xếp hình (xếp các khối)':
        messageApi += '5_';
        break;
      case 'Chơi búp bê, ô tô đồ chơi,… (các đồ chơi trong nhà)':
        messageApi += '6_';
        break;
      case 'Chơi nhập vai ( giả gia đình, bán hàng, …)':
        messageApi += '7_';
        break;
      case 'Chơi ghép tranh (ghép các mảnh để được bức tranh hoàn chỉnh)':
        messageApi += '8_';
        break;
      case 'Vẽ tranh':
        messageApi += '9_';
        break;
      case 'Chơi rubic, ghép lego':
        messageApi += '10_';
        break;
      case 'Học ngoại ngữ như tiếng Anh, tiếng Nhật, tiếng Nga,…':
        messageApi += '11_';
        break;
      case 'Chơi các nhạc cụ như đàn piano, violin, đàn tranh, sáo,…':
        messageApi += '12_';
        break;
      case 'Giúp bố mẹ làm việc nhà như quét nhà, hút bụi, lau nhà, phơi quần áo,…':
        messageApi += '13_';
        break;
      case 'Thả diều, đạp xe, chạy bộ, ván trượt':
        messageApi += '14_';
        break;
      case 'Chơi đá bóng, bóng rổ, cầu lông, đá cầu, nhảy dây, trốn tìm, đuổi bắt, trượt patin, bơi lội,..':
        messageApi += '15_';
        break;
      default:
        break;
    }
  });

  switch (action1.value) {
    case 'Ít hơn 30 phút':
      messageApi += '1';
      break;
    case 'Từ 30 phút đến 1 giờ':
      messageApi += '2';
      break;
    case 'Từ 1 giờ đến 3 giờ':
      messageApi += '3';
      break;
    case 'Trên 3 giờ':
      messageApi += '4';
      break;
    default:
      break;
  }
  switch (action2.value) {
    case 'Ít hơn 30 phút':
      messageApi += '_1';
      break;
    case 'Từ 30 phút đến 1 giờ':
      messageApi += '_2';
      break;
    case 'Từ 1 giờ đến 3 giờ':
      messageApi += '_3';
      break;
    case 'Trên 3 giờ':
      messageApi += '_4';
      break;
    default:
      break;
  }
  switch (action3.value) {
    case 'Ít hơn 30 phút':
      messageApi += '_1';
      break;
    case 'Từ 30 phút đến 1 giờ':
      messageApi += '_2';
      break;
    case 'Từ 1 giờ đến 3 giờ':
      messageApi += '_3';
      break;
    case 'Trên 3 giờ':
      messageApi += '_4';
      break;
    default:
      break;
  }
  console.log(messageApi);
  const urlAPI = `http://localhost:9000/api/sendMessage?message=${messageApi}`;
  const response = await fetch(urlAPI, {
    method: 'POST',
  });

  const parseJson = await response.text();

  console.log(parseJson)
  await chatCtl.addMessage({
    type: 'text',
    content: `${parseJson}`,
    self: false,
    avatar: '-',
  });
  
  await chatCtl.addMessage({
    type: 'text',
    content: `Bạn cần tư vấn thêm về vấn đề gì không?`,
    self: false,
    avatar: '-',
  });

  const question = await chatCtl.setActionRequest({
    type: 'select',
    options: [
      {
        value: '1',
        text: 'có',
      },
      {
        value: '2',
        text: 'không',
      },
    ],
  });

  switch (question.value) {
    case 'có':
      actionExtension(chatCtl);
      break;
    case 'không':
      echo(chatCtl);
      break;
    default:
      break;
  }
}

async function actionExtension(chatCtl :ChatController) {
  await chatCtl.addMessage({
    type: 'text',
    content: `Chọn thắc mắc cần tư vấn thêm?`,
    self: false,
    avatar: '-',
  });

  const request = await chatCtl.setActionRequest({
    type: 'select',
    options: [
      {
        value: '1',
        text: 'Khi tham gia các hoạt động trẻ thường mất tập trung, thiếu kiên nhẫn',
      },
      {
        value: '2',
        text: 'Trẻ ngại giao tiếp, chậm nói',
      },
      {
        value: '3',
        text: 'Trẻ hay ngồi gần tivi, xem các sách báo ở khoảng cách gần, hay nhìn nhầm đồ vật trong khoảng cách 5m đổ lại',
      },
    ],
  });

  switch (request.value) {
    case 'Khi tham gia các hoạt động trẻ thường mất tập trung, thiếu kiên nhẫn':
      await chatCtl.addMessage({
        type: 'text',
        content: `Theo lựa chọn của bạn thì có thể con bạn đang bị mắc hội chứng tăng động giảm chú ý (ADHD) đây là một rối loạn phát triển thần kinh phổ biến ở trẻ em, có thể gây ra các khó khăn trong học tập, sinh hoạt và giao tiếp. Trẻ mắc ADHD thường có các biểu hiện như sau:
        Mất tập trung, không chú ý đến các chi tiết: Trẻ có thể dễ dàng bị phân tâm bởi các kích thích xung quanh, không thể tập trung vào một việc trong thời gian dài. Điều này có thể khiến trẻ gặp khó khăn trong việc học tập, làm việc hoặc thực hiện các nhiệm vụ cần sự tập trung cao.
        Thiếu kiên nhẫn, khó chờ đợi: Trẻ thường muốn mọi thứ diễn ra ngay lập tức, không thể chờ đợi đến lượt mình hoặc đợi đến khi hoàn thành một nhiệm vụ. Điều này có thể khiến trẻ dễ dàng nổi cáu, bốc đồng hoặc có những hành vi nguy hiểm.
        Rất dễ bị kích động, khó kiểm soát hành vi: Trẻ có thể dễ dàng nổi cáu, bốc đồng hoặc có những hành vi nguy hiểm. Điều này có thể khiến trẻ gặp khó khăn trong việc hòa nhập với bạn bè và gia đình.
        Hoạt động quá mức, không thể ngồi yên một chỗ: Trẻ thường di chuyển liên tục, không thể ngồi yên một chỗ trong thời gian dài. Điều này có thể khiến trẻ gặp khó khăn trong việc học tập, làm việc hoặc thực hiện các nhiệm vụ cần sự tập trung cao.
        Nguyên nhân gây ra ADHD vẫn chưa được hiểu rõ, nhưng có thể do sự kết hợp của các yếu tố di truyền và môi trường. 
        Nếu trẻ bị ADHD Cha mẹ có thể tham khảo một số lời khuyên sau để giúp trẻ mắc ADHD phát triển toàn diện:
        Tạo cho trẻ một môi trường học tập và sinh hoạt ổn định, có trật tự: Điều này sẽ giúp trẻ dễ dàng tập trung và chú ý hơn.
        Khuyến khích trẻ tham gia các hoạt động thể chất thường xuyên: Các hoạt động thể chất giúp trẻ giải phóng năng lượng dư thừa và cải thiện khả năng tập trung.
        Lập kế hoạch và lịch trình cụ thể cho trẻ: Điều này sẽ giúp trẻ dễ dàng quản lý thời gian và tập trung vào các công việc cần thiết.
        Kiên nhẫn và thấu hiểu trẻ: Trẻ mắc ADHD cần có thời gian để học cách kiểm soát hành vi của mình. Cha mẹ cần kiên nhẫn và thấu hiểu để giúp trẻ vượt qua những khó khăn này.
        Nếu các biện pháp trên không hiệu quả hoặc trẻ có các biểu hiện bất thường khác, cha mẹ nên đưa trẻ đi thăm khám chuyên gia, chẳng hạn như bác sĩ tâm lý hoặc bác sĩ nhi khoa.
        Cha mẹ hãy nhớ rằng, trẻ mắc ADHD vẫn có thể phát triển toàn diện nếu được cha mẹ quan tâm, hỗ trợ và kiên nhẫn.
        `,
        self: false,
        avatar: '-',
      });
      break;
    case 'Trẻ ngại giao tiếp, chậm nói':
      await chatCtl.addMessage({
        type: 'text',
        content: `Trẻ ngại giao tiếp, chậm nói là một trong những dấu hiệu phổ biến của trẻ tự kỷ. Tuy nhiên, đây không phải là dấu hiệu duy nhất, và không phải tất cả trẻ tự kỷ đều có biểu hiện này.
        Nếu trẻ có biểu hiện ngại giao tiếp, chậm nói, cha mẹ cần lưu ý các biểu hiện khác của trẻ, chẳng hạn như:
        Trẻ không nhìn vào mắt khi giao tiếp.
        Trẻ không đáp ứng với lời gọi tên.
        Trẻ không thể hiện cảm xúc hoặc sở thích của mình.
        Trẻ lặp đi lặp lại các hành động, cử chỉ.
        Trẻ có các hành vi tự kích thích.
        Thì con của bạn có thể đang gặp khó khăn trong việc giao tiếp. bạn nên đưa con đi khám bác sĩ hoặc chuyên gia tâm lý để được chẩn đoán và tư vấn sớm. Nếu con bị tự kỷ, sớm được phát hiện và can thiệp sẽ giúp con cải thiện các kỹ năng giao tiếp và hòa nhập tốt hơn..
        Là phụ huynh bạn  nên :
        Tạo môi trường giao tiếp tích cực cho trẻ.
        Khuyến khích trẻ giao tiếp với mọi người xung quanh.
        Tham gia các hoạt động nhóm hoặc lớp học dành cho trẻ tự kỷ.
        `,
        self: false,
        avatar: '-',
      });
      break;
    case 'Trẻ hay ngồi gần tivi, xem các sách báo ở khoảng cách gần, hay nhìn nhầm đồ vật trong khoảng cách 5m đổ lại':
      await chatCtl.addMessage({
        type: 'text',
        content: `Những biểu hiện trẻ hay ngồi gần tivi, xem các sách báo ở khoảng cách gần, hay nhìn nhầm đồ vật trong khoảng cách 5m đổ lại có thể là dấu hiệu của các vấn đề về mắt, chẳng hạn như cận thị. Cha mẹ nên đưa con đến bệnh viện hoặc cơ sở y tế chuyên khoa để được kiểm tra và tư vấn cụ thể. Nếu con bị cận thị, cha mẹ cần cho con đeo kính đúng độ để giúp con nhìn rõ và ngăn ngừa tình trạng cận thị tiến triển nặng thêm	
        Những điều bố mẹ cần làm để con có một đôi mắt khỏe :
        Cha mẹ nên hạn chế cho con sử dụng các thiết bị điện tử, chẳng hạn như tivi, điện thoại, máy tính, trong thời gian dài.
        Cha mẹ nên khuyến khích con tham gia các hoạt động ngoài trời, chẳng hạn như chơi thể thao, vui chơi ngoài trời, để giúp con nhìn xa hơn.
        Cha mẹ nên cho con ăn uống đầy đủ chất dinh dưỡng, đặc biệt là các loại rau xanh, trái cây, để giúp mắt khỏe mạnh.
        Cha mẹ nên đưa con đi khám mắt định kỳ, ít nhất 2 lần/năm, để kiểm tra tình trạng thị lực của con và phát hiện sớm các vấn đề về mắt.
        `,
        self: false,
        avatar: '-',
      });
      break;
    default:
      break;
  }
  echo(chatCtl)
}

async function meal(chatCtl: ChatController): Promise<void> {
  await chatCtl.addMessage({
    type: 'text',
    content: `Chọn giới tính`,
    self: false,
    avatar: '-',
  });

  let messageApi = '';

  const sex = await chatCtl.setActionRequest({
    type: 'select',
    options: [
      {
        value: '1',
        text: 'nam',
      },
      {
        value: '2',
        text: 'nữ',
      },
    ],
  });
  messageApi += sex.value;
  messageApi += '_';

  await chatCtl.addMessage({
    type: 'text',
    content: `Chọn tuổi`,
    self: false,
    avatar: '-',
  });

  const age = await chatCtl.setActionRequest({
    type: 'select',
    options: [
      {
        value: '1',
        text: '2',
      },
      {
        value: '2',
        text: '3',
      },
      {
        value: '3',
        text: '4',
      },
      {
        value: '4',
        text: '5',
      },
      {
        value: '5',
        text: '6',
      },
      {
        value: '6',
        text: '7',
      },
      {
        value: '7',
        text: '8',
      },
      {
        value: '8',
        text: '9',
      },
      {
        value: '9',
        text: '10',
      },
    ],
  });
  
  messageApi += age.value;
  messageApi += '_';
  
  await chatCtl.addMessage({
    type: 'text',
    content: `Chọn mức độ kinh tế`,
    self: false,
    avatar: '-',
  });

  const economy = await chatCtl.setActionRequest({
    type: 'select',
    options: [
      {
        value: '1',
        text: 'trung bình',
      },
      {
        value: '2',
        text: 'khá',
      },
    ],
  });

  switch (economy.value) {
    case 'trung bình':
      messageApi += "1_";
      break;
    case 'khá':
      messageApi += "2_";
      break;
    default:
      break;
  }

  await chatCtl.addMessage({
    type: 'text',
    content: 'Hãy nhập vào dấu ... trong mẫu câu bên dưới.',
    self: false,
    avatar: '-',
  });

  const text = await chatCtl.setActionRequest({
    type: 'text',
    defaultValue: 'cháu có chiều cao ... cm; cân nặng ... kg',
    placeholder: 'Please enter something',
  });
  const mes: string[] = text.value.split(' ');
  messageApi += mes[4];
  messageApi += '_';    
  messageApi += mes[8];
  console.log(messageApi);
  const urlAPI = `http://localhost:9000/api/sendMessage?message=${messageApi}`;
  const response = await fetch(urlAPI, {
    method: 'POST',
  });

  const parseJson = await response.text();

  await chatCtl.addMessage({
    type: 'text',
    content: `${parseJson}`,
    self: false,
    avatar: '-',
  });

  await chatCtl.addMessage({
    type: 'text',
    content: `Bạn cần tư vấn thêm về vấn đề gì không?`,
    self: false,
    avatar: '-',
  });

  const question = await chatCtl.setActionRequest({
    type: 'select',
    options: [
      {
        value: '1',
        text: 'có',
      },
      {
        value: '2',
        text: 'không',
      },
    ],
  });

  switch (question.value) {
    case 'có':
      mealExtension(chatCtl);
      break;
    case 'không':
      echo(chatCtl);
      break;
    default:
      break;
  }
}

async function mealExtension(chatCtl: ChatController): Promise<void> {
  await chatCtl.addMessage({
    type: 'text',
    content: `Chọn thắc mắc cần tư vấn thêm?`,
    self: false,
    avatar: '-',
  });

  const request = await chatCtl.setActionRequest({
    type: 'select',
    options: [
      {
        value: '1',
        text: 'Thực đơn chưa phù hợp',
      },
      {
        value: '2',
        text: 'Tư vấn về vận động hàng ngày',
      },
      {
        value: '3',
        text: 'Tư vấn về các thực phẩm chức năng bổ sung',
      },
    ],
  });

  switch (request.value) {
    case 'Thực đơn chưa phù hợp':
      mealIssue(chatCtl);
      break;
    case 'Tư vấn về vận động hàng ngày':
      action(chatCtl);
      break;
    case 'Tư vấn về các thực phẩm chức năng bổ sung':
      await chatCtl.addMessage({
        type: 'text',
        content: `1. Siro Fitobimbi Appetito 
        Thương hiệu: Ý
        Sản xuất: Ý
        Giá tham khảo: Khoảng 340.000 VNĐ/lọ 200 ml (Cập nhật tháng 09/2023)
        Đặc điểm nổi bật: Hỗ trợ tiêu hoá Fitobimbi bổ sung vitamin và khoáng chất, tăng cường sức khỏe cho tiêu hóa, giúp bé ăn ngon và khỏe mạnh hơn. Giúp bé cải thiện tình trạng biếng ăn, chậm lớn, suy dinh dưỡng và hấp thu kém. Cung cấp dưỡng chất cho trẻ vừa ốm dậy.
        Đối tượng sử dụng: Trẻ từ 6 tháng đến 12 tuổi. Trẻ có các dấu hiệu biếng ăn, chậm lớn, suy dinh dưỡng, tiêu hóa và hấp thu dinh dưỡng kém. Trẻ vừa ốm dậy, cần bổi bổ để phục hồi sức khỏe.
        2. Vitamin Wellbaby Multi-Vitamin Liquid
        Xuất xứ: Anh Quốc.
        Thành phần: Vitamin A 133mg, Vitamin D 7mg, Vitamin E 5mg, Vitamin C 30mg, Thiamin (Vitamin B1) 0.5mg, Riboflavin (Vitamin B2) 0.8mg, Vitamin B3 (Niacin) 6mg, Vitamin B6 0.5mg, Vitamin B9 (Folic Acid) 80mg, Vitamin B12 1mg, Vitamin B5 (Pantothenic Acid) 2mg, Sắt 4mg, Kẽm 2.5mg, Đồng 150mg, Malt Extract 500mg.
        Công dụng: Bổ sung 14 loại vitamin và khoáng chất cần thiết cho cơ thể, tăng cường đề kháng và khả năng miễn dịch của bé, tăng cường sự phát triển trí não.
        Đối tượng sử dụng: Bé từ 6 tháng đến 4 tuổi.
        Liều dùng: 5ml/ngày.
        Giá thành: 396.000 đồng / hộp 150ml.
        3. Kẹo bổ sung vitamin Mama Ramune Nhật Bản
        Xuất xứ: Nhật Bản.
        Thành phần: bao gồm 6 loại vitamin A, C, D2, B6, E, B5.
        Công dụng: Bổ sung nhiều loại vitamin cho trẻ biếng ăn trong mỗi viên kẹo vị dâu tây thơm ngọt, tan ngay trong miệng nên không sợ bé nuốt trọng, vướng cổ.
        Đối tượng sử dụng: Dùng cho bé trên 1 tuổi.
        Liều dùng: 1 viên mỗi ngày với trẻ dưới 14 tuổi, trẻ trên 14 tuổi dùng 2 viên mỗi ngày.
        Giá thành: 269.000 đồng / hộp 200 viên
        `,
        self: false,
        avatar: '-',
      });
      echo(chatCtl)
      break;
    default:
      break;
  }
}

async function mealIssue(chatCtl: ChatController): Promise<void> {
  await chatCtl.addMessage({
    type: 'text',
    content: `Chọn vấn đề bạn gặp phải với thực đơn được đề xuất`,
    self: false,
    avatar: '-',
  });

  const request = await chatCtl.setActionRequest({
    type: 'select',
    options: [
      {
        value: '1',
        text: 'Hoa quả mua loại khác được không?',
      },
      {
        value: '2',
        text: 'Con tôi không thích ăn cá, nên thay thế thực phẩm nào để vẫn đảm bảo chất dinh dưỡng?',
      },
      {
        value: '3',
        text: 'Nhà tôi ăn thuần chay nên thay thế thực phẩm nào để vẫn đảm bảo chất dinh dưỡng cho con?',
      },
    ],
  });

  console.log("hai")
  switch (request.value) {
    case 'Hoa quả mua loại khác được không?':
      await chatCtl.addMessage({
        type: 'text',
        content: `Có. Tốt nhất là hãy cho bé ăn hoa quả theo mùa để vừa đảm bảo chất dinh dưỡng và an toàn thực phẩm.`,
        self: false,
        avatar: '-',
      })
      break;
    case 'Con tôi không thích ăn cá, nên thay thế thực phẩm nào để vẫn đảm bảo chất dinh dưỡng?':
      await chatCtl.addMessage({
        type: 'text',
        content: `Trong cá có nhiều chất dinh dưỡng mà nhiều người đang thiếu như: protein chất lượng cao, iốt, các vitamin và khoáng chất khác nhau. Đặc biệt các loại cá béo (hay còn gọi là cá dầu) như cá hồi, cá mòi, cá ngừ và cá thu, có chất dinh dưỡng cao. Cá béo cũng chứa nhiều axit béo omega-3, rất quan trọng cho cơ thể và chức năng của não giúp giảm nguy cơ mắc nhiều bệnh. Tốt nhất bạn nên tập cho con ăn cá bằng cách tăng dần lượng cá mỗi lần ăn và đa dạng cách chế biến như làm ruốc, hấp, chiên xù, sốt cà chua, canh cá, chả cá,.…Trong thời gian đó có thể tạm thay thế hoặc bổ sung bằng quả bơ, uống dầu cá hoặc sử dụng thêm dầu oliu.`,
        self: false,
        avatar: '-',
      })
      break;
    case 'Nhà tôi ăn thuần chay nên thay thế thực phẩm nào để vẫn đảm bảo chất dinh dưỡng cho con?':
      await chatCtl.addMessage({
        type: 'text',
        content: `Dưới đây là gợi ý về một số món ăn chay và cách nấu mà bạn có thể nấu cho bé:
        1.Bánh yến mạch nướng giòn:
        Thành phần nguyên liệu để làm món bánh này gồm có: 150g bột yến mạch, 15g bơ thực vật, 80ml nước ấm, 1/4 thìa cà phê muối, một ít bột mì.
        Cách chế biến:
        Bước 1: Trộn bơ thực vật với muối trong bát và trộn đều tay. Đổ nước ấm vào phần bột yến mạch, nhào đều và ủ trong 5 phút.
        Bước 2: Bật lò nước lên nhiệt độ 180°C để làm nóng, quét 1 lớp mỏng hỗn hợp bơ muối vào trong khay bánh nướng, rắc bột mì lên để khi đổ bánh vào không bị dính.
        Bước 3: Cán mỏng phần bột yến mạch khoảng 3mm, cắt bánh thành những miếng tròn có đường kính 6-8cm và xếp đều vào trong khay bánh.
        Bước 4: Cho khay bánh vào bếp, nướng trong khoảng 15 phút thì tiến hành lật bánh, tiếp tục nướng bánh trong lò khoảng 5 phút nữa là được.
        2. Cơm chiên Nhật Bản
        Các nguyên liệu cần chuẩn bị: Cơm gạo lứt (hoặc cơm trắng), dầu thực vật, nước tương, các loại gia vị chay khác, Đậu phụ, đậu tương, cà rốt, bông cải xanh, hạt hạnh nhân.
        Cách chế biến:
        Bước 1: Cắt đậu phụ thành những miếng nhỏ, rán vàng đều trên chảo dầu và vớt ra đĩa.
        Bước 2: Xào bông cải xanh và cà rốt đến khi gần chín thì thêm đậu phụ rán vào xào chung, nêm nếm gia vị vừa ăn.
        Bước 3: Đổ cơm gạo lứt hoặc cơm trắng vào chảo đang xào, thêm giấm và nước tương.
        Bước 4: Sau khi cơm chín, múc ra bát và trang trí với hạt hạnh nhân đê tăng hương vị cũng như tính thẩm mỹ của món ăn.
        3. Canh đậu hũ rong biển
        Các nguyên liệu cần chuẩn bị:  200gr đậu hũ non, 10gr rong biển khô, 70g nấm kim châm, 1 củ cà rốt, nấm rơm và gia vị
        Cách chế biến:
        Ngâm rong biển khô với nước ấm sao cho nở. Đậu hũ cắt miếng vuông vừa ăn, nấm kim châm, nấm rơm cắt phần rễ rửa sạch và cà rốt gọt vỏ rửa sạch thái hoa.
        Phi thơm hành khô cùng chút dầu ăn cho nấm rơm xào qua cùng 1 bát tô nước vào đun sôi tiếp tục cho cà rốt, đậu hũ và nấm kim châm nấu khoảng 5 phút thì cho rong biển vào đun khoảng 2 phút nêm nếm gia vị rồi tắt bếp.
        4. Nấm kho 
        Nguyên liệu cho món nấm rơm kho: 500g nấm rơm, nước tương và gia vị (dầu ăn, muối, hạt nêm).
        Cách làm nấm rơm kho: Nấm rửa sạch ngâm nước muối pha loãng khoảng 15 phút vớt ra để ráo. Ướp nấm với ½ thìa hạt nêm, 1 thìa nước tương sao cho ngấm đều gia vị. Sau đó cho vào niêu đất thêm chút nước lọc bắc lên bếp đun với lửa nhỏ đến khi nước sền sệt thì bạn cho dầu ăn với tiêu vào trộn đều rồi tắt bếp.
        Trên đây là một số món chay ngon bổ dưỡng phù hợp cho trẻ . Chuẩn bị các món ăn chay trường cho bé càng đa dạng món khác nhau càng tốt, giúp bé ăn không ngán.
        `,
        self: false,
        avatar: '-',
      })
      break;
    default:
      break;
  }
  echo(chatCtl)
}

async function echo(chatCtl: ChatController): Promise<void> {
  // chọn kịch bản
  await chatCtl.addMessage({
    type: 'text',
    content: `Bạn muốn tư vấn về?`,
    self: false,
    avatar: '-',
  });
  const mulSel = await chatCtl.setActionRequest({
    type: 'select',
    options: [
      {
        value: 'KB1',
        text: 'Tư vấn về thực đơn ăn hàng ngày',
      },
      {
        value: 'KB2',
        text: 'Tư vấn về vận động hàng ngày',
      },
    ],
  });

  switch (mulSel.value) {
    case 'Tư vấn về thực đơn ăn hàng ngày':
      meal(chatCtl);
      break;
    case 'Tư vấn về vận động hàng ngày':
      console.log('hai');
      action(chatCtl);
      break;
    default:
      break;
  }

  // let mauCauHoi = '';
  // let messageHuongDan = 'Hãy nhập vào dấu ... trong mẫu câu bên dưới.';
  // switch (mulSel.value) {
  //   case '1 : Tư vấn về thực đơn ăn hàng ngày':
  //     mauCauHoi +=
  //       'Chào bác sĩ, tôi muốn hỏi chế độ ăn cho cháu có chiều cao … cm ; cân nặng … kg ; giới tính … ; … tháng tuổi.';
  //     break;
  //   case '2 : Tư vấn về vận động hàng ngày':
  //     mauCauHoi +=
  //       'Chào bác sĩ, cháu nhà tôi có hiện tượng … thì chế độ dinh dưỡng như thế nào để khắc phục ạ ?';
  //     messageHuongDan +=
  //       '\nBạn có thể nhập nhiều hiện tượng vào dấu … , mỗi hiện tượng cách nhau 1 dấu “;”';
  //     break;
  //   case '3 : Hỏi về vai trò và nhu cầu của chất dinh dưỡng':
  //     mauCauHoi +=
  //       'Chào bác sĩ, tôi cần biết thông tin về chất … cho trẻ … tháng tuổi';
  //     break;
  //   default:
  //     break;
  // }

  // await chatCtl.addMessage({
  //   type: 'text',
  //   content: messageHuongDan,
  //   self: false,
  //   avatar: '-',
  // });

  // const text = await chatCtl.setActionRequest({
  //   type: 'text',
  //   defaultValue: mauCauHoi,
  //   placeholder: 'Please enter something',
  // });

  // // const parseJson = await response.json().then((data) => data.message);

  // const urlAPI = `http://localhost:8801/api/sendMessage?message=${text.value}`;
  // const response = await fetch(urlAPI, {
  //   method: 'POST',
  // });

  // const parseJson = await response.text();

  // await chatCtl.addMessage({
  //   type: 'text',
  //   content: `${parseJson}`,
  //   self: false,
  //   avatar: '-',
  // });

  //   await chatCtl.addMessage({
  //     type: 'text',
  //     content: `You have entered:\n${text.value}`,
  //     self: false,
  //     avatar: '-',
  //   });

  //   await chatCtl.addMessage({
  //     type: 'text',
  //     content: `What is your gender?`,
  //     self: false,
  //     avatar: '-',
  //   });
  //   const sel = await chatCtl.setActionRequest({
  //     type: 'select',
  //     options: [
  //       {
  //         value: 'man',
  //         text: 'Man',
  //       },
  //       {
  //         value: 'woman',
  //         text: 'Woman',
  //       },
  //       {
  //         value: 'other',
  //         text: 'Other',
  //       },
  //     ],
  //   });
  //   await chatCtl.addMessage({
  //     type: 'text',
  //     content: `You have selected ${sel.value}.`,
  //     self: false,
  //     avatar: '-',
  //   });

  //   await chatCtl.addMessage({
  //     type: 'text',
  //     content: `What is your favorite picture?`,
  //     self: false,
  //     avatar: '-',
  //   });
  //   const file = (await chatCtl.setActionRequest({
  //     type: 'file',
  //     accept: 'image/*',
  //     multiple: true,
  //   })) as FileActionResponse;
  //   await chatCtl.addMessage({
  //     type: 'jsx',
  //     content: (
  //       <div>
  //         {file.files.map((f) => (
  //           <img
  //             key={file.files.indexOf(f)}
  //             src={window.URL.createObjectURL(f)}
  //             alt="File"
  //             style={{ width: '100%', height: 'auto' }}
  //           />
  //         ))}
  //       </div>
  //     ),
  //     self: false,
  //     avatar: '-',
  //   });

  //   await chatCtl.addMessage({
  //     type: 'text',
  //     content: `Please enter your voice.`,
  //     self: false,
  //     avatar: '-',
  //   });
  //   const audio = (await chatCtl
  //     .setActionRequest({
  //       type: 'audio',
  //     })
  //     .catch(() => ({
  //       type: 'audio',
  //       value: 'Voice input failed.',
  //       avatar: '-',
  //     }))) as AudioActionResponse;
  //   await (audio.audio
  //     ? chatCtl.addMessage({
  //         type: 'jsx',
  //         content: (
  //           <a href={window.URL.createObjectURL(audio.audio)}>Audio downlaod</a>
  //         ),
  //         self: false,
  //         avatar: '-',
  //       })
  //     : chatCtl.addMessage({
  //         type: 'text',
  //         content: audio.value,
  //         self: false,
  //         avatar: '-',
  //       }));

  //   await chatCtl.addMessage({
  //     type: 'text',
  //     content: `Please press the button.`,
  //     self: false,
  //     avatar: '-',
  //   });
  //   const good = await chatCtl.setActionRequest({
  //     type: 'custom',
  //     Component: GoodInput,
  //   });
  //   await chatCtl.addMessage({
  //     type: 'text',
  //     content: `You have pressed the ${good.value} button.`,
  //     self: false,
  //     avatar: '-',
  //   });

  //   echo(chatCtl);
  // }

  // function GoodInput({
  //   chatController,
  //   actionRequest,
  // }: {
  //   chatController: ChatController;
  //   actionRequest: ActionRequest;
  // }) {
  //   const chatCtl = chatController;

  //   const setResponse = React.useCallback((): void => {
  //     const res = { type: 'custom', value: 'Good!' };
  //     chatCtl.setActionResponse(actionRequest, res);
  //   }, [actionRequest, chatCtl]);

  //   return (
  //     <div>
  //       <Button
  //         type="button"
  //         onClick={setResponse}
  //         variant="contained"
  //         color="primary"
  //       >
  //         Good!
  //       </Button>
  //     </div>
  //   );
}
