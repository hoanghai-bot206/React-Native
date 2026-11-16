BT02 - LEARNING APP
1. Thông tin bài tập
Tên ứng dụng: LearningApp
Nền tảng: React Native
Framework: Expo
Ngôn ngữ: JavaScript
Tên bài nộp: LearningApp
2. Link ứng dụng Expo
Expo Project: [Dán link ứng dụng Expo tại đây]
Expo URL: [Dán link chia sẻ ứng dụng tại đây]
3. Mô tả ứng dụng

LearningApp là ứng dụng hỗ trợ sinh viên theo dõi thông tin học tập, thống kê khóa học và quản lý tiến độ các môn học.

Giao diện được thiết kế theo phong cách Dark Dashboard, sử dụng tông màu xanh navy kết hợp tím, xanh lá và vàng.

4. Các component được xây dựng
4.1. Header
Hiển thị lời chào sinh viên.
Hiển thị tên sinh viên.
Hiển thị ảnh đại diện hoặc chữ cái đại diện.

Code: components/Header.js

Hình ảnh giao diện:

!Header Component

4.2. StatCard
Hiển thị tổng số khóa học.
Hiển thị số khóa học đã hoàn thành.
Hiển thị số khóa học đang học.
Hiển thị điểm trung bình.

Code: components/StatCard.js

Hình ảnh giao diện:

!StatCard Component

4.3. CourseCard
Hiển thị tên môn học.
Hiển thị tên giảng viên.
Hiển thị trạng thái môn học.
Hiển thị phần trăm tiến độ học tập bằng thanh Progress Bar.

Code: components/CourseCard.js

Hình ảnh giao diện:

!CourseCard Component

4.4. BottomMenu
Trang chủ.
Khóa học.
Lịch học.
Cá nhân.

Thanh menu được cố định ở cuối màn hình và có trạng thái chọn mục.

Code: components/BottomMenu.js

Hình ảnh giao diện:

!BottomMenu Component

5. Giao diện tổng thể Home

Màn hình Home bao gồm:

Header chào mừng sinh viên.
Khu vực tổng quan học tập.
Các thẻ thống kê StatCard.
Danh sách môn học CourseCard.
Thanh điều hướng BottomMenu.

Hình ảnh giao diện tổng thể:

!Home Screen

6. Kết luận

Ứng dụng LearningApp đã xây dựng được giao diện Home bằng React Native và Expo.

Các component được tách riêng biệt giúp mã nguồn dễ quản lý, tái sử dụng và mở rộng.

Giao diện hỗ trợ hiển thị trên thiết bị di động và sử dụng Expo Go để chạy thử nghiệm.
