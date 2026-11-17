# BÀI TẬP 06 - SCHEDULE APP
1. Thông tin bài tập

Tên ứng dụng: ScheduleApp

Công nghệ: React Native / Expo

Chức năng: Quản lý và hiển thị lịch học sinh viên.

2. Link ứng dụng Expo
3. 
Expo Snack: https://snack.expo.dev/@hoanghai0501/scheduleapp

Tên ứng dụng: ScheduleApp

5. Giới thiệu ứng dụng

ScheduleApp là ứng dụng quản lý lịch học sinh viên, giúp sinh viên theo dõi thời gian học tập, môn học, phòng học và giảng viên theo từng ngày trong tuần.

Các chức năng chính

Hiển thị thông tin sinh viên.

Hiển thị lịch học trong tuần từ thứ 2 đến chủ nhật.

Cho phép chọn ngày cần xem lịch học.

Hiển thị danh sách môn học theo ngày được chọn.

Hiển thị thời gian, phòng học và giảng viên.

Hiển thị màu sắc riêng cho từng môn học.

Thông báo khi ngày được chọn không có lịch học.

4. Các thành phần giao diện (Components)
5. 
4.1. Component Header

Mô tả:

Hiển thị tên ứng dụng Student Schedule.

Hiển thị thông tin sinh viên.

Hiển thị mã số sinh viên.

Thiết kế màu nền gradient xanh dương.

Hình ảnh giao diện:

<img width="332" height="193" alt="image" src="https://github.com/user-attachments/assets/df353f0e-1220-41e7-86b1-fb50f2ee4dde" />

4.2. Component WeekDays

Mô tả:

Hiển thị 7 ngày trong tuần.

Cho phép người dùng chọn ngày.

Ngày được chọn có màu nền xanh dương.

Các ngày còn lại có nền trắng.

Hình ảnh giao diện:

<img width="308" height="225" alt="image" src="https://github.com/user-attachments/assets/97905c1f-4f8a-41cd-b960-e66aacc80b6f" />


4.3. Component ScheduleCard

Mô tả:

Hiển thị thông tin từng môn học.

Hiển thị tên môn học và mã môn học.

Hiển thị phòng học.

Hiển thị tên giảng viên.

Hiển thị thời gian học.

Mỗi môn học có màu sắc riêng.

Hình ảnh giao diện:

<img width="282" height="224" alt="image" src="https://github.com/user-attachments/assets/f64ed78f-fbed-428f-8e79-e863c9981eda" />


4.4. Component ScheduleList

Mô tả:

Hiển thị danh sách môn học trong ngày.

Sử dụng ScheduleCard để hiển thị từng môn học.

Hiển thị thông báo khi không có lịch học.

Code:

Chèn code của component ScheduleList tại đây.


4.5. Component App

Mô tả:

Là component chính của ứng dụng.

Quản lý ngày được chọn bằng useState.

Lọc dữ liệu môn học theo ngày.

Kết hợp Header, WeekDays và ScheduleList.

Hiển thị giao diện tổng thể của ứng dụng.

Hình ảnh giao diện tổng thể:

<img width="314" height="640" alt="image" src="https://github.com/user-attachments/assets/62a1009f-67e6-47bf-a3b8-8c1fc51b4ac3" />


5. Kết quả thực hiện

Sau khi hoàn thành, ứng dụng ScheduleApp có thể hiển thị lịch học theo từng ngày trong tuần, cho phép sinh viên xem thông tin môn học, thời gian, phòng học và giảng viên.

Ứng dụng có giao diện trực quan, dễ sử dụng và được chia thành nhiều component để thuận tiện cho việc quản lý và phát triển.


