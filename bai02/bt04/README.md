# BT04 - MultiScreenApp

1. Thông tin bài tập

Tên ứng dụng: MultiScreenApp

Nội dung: Xây dựng ứng dụng quản lý sinh viên với nhiều màn hình.

Công nghệ: React Native, Expo.

Điều hướng: Stack Navigation và Bottom Tab Navigation.

2. Link ứng dụng Expo

Link Expo: https://snack.expo.dev/@hoanghai0501/multiscreenapp

3. Các màn hình của ứng dụng

3.1. Màn hình HomeScreen

Màn hình trang chủ giới thiệu ứng dụng quản lý sinh viên và có nút chuyển đến màn hình danh sách sinh viên.

Code chính:

jsx

<TouchableOpacity

  style={styles.button}
  
  onPress={() => navigation.navigate('List')}
  
>
>
  <Text style={styles.buttonText}>
    
    Xem danh sách sinh viên
    
  </Text>
  
</TouchableOpacity>


Hình ảnh giao diện:

<img width="333" height="638" alt="image" src="https://github.com/user-attachments/assets/8dee0a2a-10e2-425c-9d0f-6519fce2d509" />


3.2. Màn hình ListScreen

Màn hình hiển thị danh sách sinh viên bằng FlatList. Mỗi sinh viên có mã sinh viên, họ tên, lớp và GPA.

Code chính:

jsx

const DATA = [

  {
    id: '1',
    name: 'Nguyễn Văn An',
    studentId: 'SV001',
    className: 'CNTT K45',
    major: 'Công nghệ thông tin',
    gpa: '3.6',
    
  },
  
];


Sử dụng FlatList để hiển thị danh sách:

jsx

<FlatList

  data={DATA}
  keyExtractor={(item) => item.id}
  renderItem={renderItem}
  showsVerticalScrollIndicator={false}
  
/>


Khi chọn một sinh viên, ứng dụng chuyển sang màn hình chi tiết:

jsx

onPress={() =>
  navigation.getParent().navigate('Detail', {
    item: item,
  })
}


Hình ảnh giao diện:

<img width="333" height="638" alt="image" src="https://github.com/user-attachments/assets/46ecaa01-7ff8-4e3f-88a1-30a0f014231d" />


3.3. Màn hình DetailScreen

Màn hình hiển thị thông tin chi tiết của sinh viên được chọn từ danh sách.

Code chính:

jsx

export default function DetailScreen({ route, navigation }) {

  const { item } = route.params;

  return (
  
    <View style={styles.container}>
      <Text style={styles.title}>
        Chi tiết sinh viên

      <Text style={styles.info}>
        Mã sinh viên: {item.studentId}
      </Text>

      <Text style={styles.info}>
        Tên: {item.name}
      </Text>

      <Text style={styles.info}>
        Lớp: {item.className}
      </Text>

      <Text style={styles.info}>
        Ngành: {item.major}
      </Text>

      <Text style={styles.info}>
        GPA: {item.gpa}
      </Text>
      
      <Button
        title="Quay lại danh sách"
        onPress={() => navigation.goBack()}
        
      />
      
    </View>
    
  );
  
}


Hình ảnh giao diện:

<img width="330" height="641" alt="image" src="https://github.com/user-attachments/assets/851222ee-c7cb-4c2d-a5ff-b0fd4168f06e" />


3.4. Màn hình ProfileScreen

Màn hình cá nhân hiển thị thông tin sinh viên đang sử dụng ứng dụng.

Code chính:

jsx
<Text style={styles.name}>
  Nguyễn Hoàng Hải
</Text>

<Text style={styles.role}>
  Sinh viên Công nghệ thông tin
</Text>

<Text style={styles.info}>
  Mã sinh viên: CD-CNTT18A12
</Text>

<Text style={styles.info}>
  Lớp: CNTT18A
</Text>


Hình ảnh giao diện:

<img width="333" height="640" alt="image" src="https://github.com/user-attachments/assets/0b77e097-e698-4b12-8032-8a2e77b4a9f6" />


4. Cấu hình Navigation

Ứng dụng sử dụng Stack Navigation kết hợp Bottom Tab Navigation.

Code chính:

jsx

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


Tạo các tab điều hướng:

jsx

<Tab.Navigator>

  <Tab.Screen
    name="Home"
    component={HomeScreen}
    options={{ title: 'Trang chủ' }}
    
  />

  <Tab.Screen
    name="List"
    component={ListScreen}
    options={{ title: 'Danh sách' }}
  />

  <Tab.Screen
  
    name="Profile"
    component={ProfileScreen}
    options={{ title: 'Cá nhân' }}
  />
  
</Tab.Navigator>


Cấu hình Stack Navigation:

jsx

<NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen
      name="MainTabs"
      component={MainTabs}
      options={{ headerShown: false }}
    />

    <Stack.Screen
      name="Detail"
      component={DetailScreen}
      options={{ title: 'Chi tiết sinh viên' }}
    />
  </Stack.Navigator>
</NavigationContainer>

5. Kết quả đạt được

Xây dựng được màn hình trang chủ.

Hiển thị danh sách sinh viên bằng FlatList.

Chọn sinh viên để xem thông tin chi tiết.

Có nút quay lại danh sách.

Sử dụng Stack Navigation để chuyển màn hình.

Bổ sung Bottom Tab Navigation gồm Trang chủ, Danh sách và Cá nhân.

Hoàn thiện giao diện ứng dụng quản lý sinh viên bằng React Native và Expo.

6. Kết luận

Ứng dụng MultiScreenApp đã hoàn thành các chức năng cơ bản của bài thực hành BT04. Người dùng có thể chuyển đổi giữa các màn hình, xem danh sách sinh viên và xem thông tin chi tiết của từng sinh viên.
