# BÀI TẬP 05 – ANIMATION APP

1. Thông tin bài tập

Tên ứng dụng: AnimateApp

Công nghệ: React Native

Nền tảng: Expo

Ngôn ngữ: JavaScript

Chủ đề: Ứng dụng theo dõi mục tiêu học tập.

2. Link ứng dụng Expo

Link Expo: https://snack.expo.dev/@hoanghai0501/animateapp

3. Mô tả ứng dụng

AnimateApp là ứng dụng theo dõi mục tiêu học tập, giúp sinh viên quản lý tiến độ học tập và theo dõi kết quả hoàn thành mục tiêu.

Ứng dụng có chức năng:

Hiển thị mục tiêu học tập.

Hiển thị thẻ tiến độ học tập.

Nút bắt đầu thực hiện mục tiêu.

Cập nhật tiến độ sau mỗi lần nhấn nút.


Hiển thị thông báo khi hoàn thành mục tiêu.

Sử dụng hiệu ứng Animation để tạo chuyển động cho các thành phần giao diện.

4. Cấu trúc Components

4.1. ProgressCard.js

Chức năng:

Hiển thị tên mục tiêu học tập.

Hiển thị số giờ đã hoàn thành.

Hiển thị phần trăm tiến độ.

Thanh tiến độ thay đổi theo kết quả học tập.

Code chính:

jsx
const percentage = Math.min(
  (completedHours / goalHours) * 100,
  100
);


4.2. ActionButton.js

Chức năng:

Hiển thị nút bắt đầu học.

Khi nhấn nút, tiến độ học tập tăng lên.

Khi hoàn thành mục tiêu, nút thay đổi trạng thái.

Code chính:

jsx

<TouchableOpacity

  style={styles.button}
  onPress={onPress}
  disabled={disabled}
  
>
>
  <Text style={styles.buttonText}>
    {isCompleted
      ? '✓ Đã hoàn thành mục tiêu'
      : '🚀 Bắt đầu học (+1 giờ)'}
  </Text>
  
</TouchableOpacity>


4.3. AnimatedMessage.js

Chức năng:

Hiển thị thông báo hoàn thành.

Thành phần xuất hiện với hiệu ứng mờ dần.

Phóng to từ kích thước nhỏ đến bình thường.

Di chuyển từ dưới lên trên.

Code hiệu ứng Animation:

jsx

Animated.parallel([

  Animated.spring(scaleAnim, {
    toValue: 1,
    friction: 4,
    tension: 50,
    useNativeDriver: true,
    
  }),

  Animated.timing(translateYAnim, {
  
    toValue: 0,
    duration: 600,
    useNativeDriver: true,
    
  }),

  Animated.timing(fadeAnim, {
  
    toValue: 1,
    duration: 600,
    useNativeDriver: true,
  }),
  
]).start();


4.4. App.js

Chức năng:

Kết nối các component.

Quản lý trạng thái tiến độ học tập.

Xử lý sự kiện nhấn nút.

Truyền dữ liệu đến các component.

Code chính:

jsx
const [completedHours, setCompletedHours] = useState(0);
const [showMessage, setShowMessage] = useState(false);

const handleStart = () => {
  if (completedHours >= 5) return;

  const newHours = completedHours + 1;
  setCompletedHours(newHours);

  setShowMessage(false);

  setTimeout(() => {
    setShowMessage(true);
  }, 100);
};

5. Hình ảnh kết quả ứng dụng
Giao diện ban đầu

<img width="334" height="627" alt="image" src="https://github.com/user-attachments/assets/cef3a79b-d568-4856-958f-b8bde245ee5e" />


Giao diện khi thay đổi tiến độ

<img width="335" height="473" alt="image" src="https://github.com/user-attachments/assets/e23b0f34-77b1-4192-aae8-70c694732cca" />


Giao diện khi xuất hiện Animation

<img width="330" height="156" alt="image" src="https://github.com/user-attachments/assets/f499935c-30f2-4106-8176-16cc40d2d2dc" />


Giao diện khi hoàn thành mục tiêu

<img width="315" height="653" alt="image" src="https://github.com/user-attachments/assets/67278947-7a86-4424-9d3f-102486c0b177" />


6. Kết luận

Xây dựng ứng dụng React Native bằng Expo.
Chia giao diện thành các component riêng biệt.
Sử dụng useState để quản lý trạng thái.
Sử dụng Animated để tạo hiệu ứng chuyển động.
Kết hợp nhiều hiệu ứng như Scale, TranslateY và Opacity.
Truyền dữ liệu và xử lý sự kiện giữa các component.

Kết quả: Hoàn thành ứng dụng AnimateApp theo dõi mục tiêu học tập với các hiệu ứng Animation.
