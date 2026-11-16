# PRODUCTAPP – ỨNG DỤNG BÁN THIẾT BỊ CÔNG NGHỆ
1. Thông tin bài tập

Tên bài nộp: ProductApp

Nền tảng: React Native – Expo

Mục đích: Xây dựng giao diện ứng dụng bán thiết bị công nghệ.

2. Link ứng dụng Expo

Link Expo Snack: https://snack.expo.dev/@hoanghai0501/productapp

3. Giới thiệu ứng dụng

HoangHai Store là ứng dụng bán thiết bị công nghệ, cho phép người dùng xem danh sách các sản phẩm như điện thoại, laptop, tai nghe, đồng hồ thông minh và máy tính bảng.

Ứng dụng hiển thị thông tin sản phẩm bao gồm:

Tên sản phẩm.

Hình ảnh sản phẩm.

Giá bán.

Mô tả sản phẩm.

Ngoài ra, ứng dụng có thanh tìm kiếm giúp người dùng tìm sản phẩm theo tên.


4. Mô tả các component
   
4.1. Component App.js

Chức năng:

Là component chính của ứng dụng.

Kết nối các component Header, SearchBar và ProductList.

Quản lý trạng thái tìm kiếm bằng useState.

Lọc sản phẩm theo tên.

Đoạn code chính:

jsx
const [search, setSearch] = useState('');

const filteredProducts = products.filter((item) =>
  item.name.toLowerCase().includes(search.toLowerCase())
);


Hình ảnh giao diện App.js:

!Giao diện ứng dụng

4.2. Component Header.js

Chức năng:

Hiển thị tên cửa hàng TECHSTORE.

Hiển thị slogan Công nghệ trong tầm tay.

Tạo phần đầu trang cho ứng dụng.

Đoạn code chính:

jsx

const Header = () => {

  return (
  
    <View style={styles.header}>
    
      <Text style={styles.logo}>
      
        HoangHai STORE
        
      </Text>

      <Text style={styles.subtitle}>
      
        Công nghệ trong tầm tay
        
      </Text>
      
    </View>
    
  );
  
};


Hình ảnh giao diện Header:

<img width="334" height="87" alt="image" src="https://github.com/user-attachments/assets/dbd63359-65f1-4d9b-89d2-6aaef456317c" />


4.3. Component SearchBar.js

Chức năng:

Hiển thị ô tìm kiếm sản phẩm.

Nhận dữ liệu thông qua props.

Cập nhật nội dung tìm kiếm khi người dùng nhập.

Đoạn code chính:

jsx

const SearchBar = ({ value, onChangeText }) => {

  return (
  
    <TextInput
    
      style={styles.search}
      
      placeholder="Tìm kiếm sản phẩm..."
      
      value={value}
      
      onChangeText={onChangeText}
      
    />
    
  );
  
};


Hình ảnh giao diện SearchBar:

<img width="333" height="77" alt="image" src="https://github.com/user-attachments/assets/75e23253-9df5-4817-b12c-9f072e67a3d2" />


4.4. Component ProductList.js

Chức năng:

Quản lý danh sách sản phẩm.

Sử dụng FlatList để kết xuất danh sách.

Hiển thị sản phẩm theo 2 cột.

Gọi component ProductCard để hiển thị từng sản phẩm.

Đoạn code chính:

jsx

<FlatList

  data={products}
  
  keyExtractor={(item) => item.id}
  
  numColumns={2}
  
  renderItem={({ item }) => (
  
    <ProductCard
    
      name={item.name}
      
      price={item.price}
      
      description={item.description}
      
      image={item.image}
      
    />
    
  )}
  
/>


Hình ảnh giao diện danh sách sản phẩm:

<img width="318" height="520" alt="image" src="https://github.com/user-attachments/assets/3939e276-ddb4-4b45-bc14-1cac9f302f08" />


5. Dữ liệu sản phẩm

File data/products.js lưu trữ thông tin của 6 sản phẩm:

STT	Tên sản phẩm

1	iPhone 16

2	MacBook Air

3	AirPods Pro

4	Apple Watch

5	Sony Headphones

6	iPad

Mỗi sản phẩm bao gồm các thuộc tính:

id

name

price

description

image


6. Kết quả đạt được

Tổng quan

<img width="319" height="676" alt="image" src="https://github.com/user-attachments/assets/696a3690-68a9-49bd-96c4-631d4cc63c81" />


Xây dựng giao diện ứng dụng bán thiết bị công nghệ bằng React Native Expo.

Hiển thị ít nhất 6 sản phẩm với đầy đủ tên, hình ảnh, giá và mô tả.

Tạo component ProductCard nhận dữ liệu thông qua props.

Sử dụng FlatList để hiển thị danh sách sản phẩm.
