BÀI TẬP 01 - REACT NATIVE

1. Thông tin bài tập

Tên ứng dụng: MyApp_V2

Môn học: React Native

Bài tập: Bài 02 - Bài tập 01

2. Link ứng dụng Expo

Link ứng dụng: https://snack.expo.dev/@hoanghai0501/myapp_v2

3. Các dòng code thay đổi giao diện

3.1. Component 1

Tên component: Header.js

Nội dung code: Nội dung và chức năng của code

BookingCar: Hiển thị tên ứng dụng kèm biểu tượng 🚗.

Xin chào! Chào mừng bạn: Hiển thị lời chào người dùng.

🔔: Biểu tượng thông báo.

CODE:

import React from 'react';

import { Text, View, StyleSheet } from 'react-native';

const Header = () => {

  return (
  
    <View style={styles.container}>
    
      <Text style={styles.title}>🚗 BookingCar</Text>
      
      <View style={styles.row}>
      
        <Text style={styles.greeting}>Xin chào! Chào mừng bạn</Text>
        
        <Text style={styles.notification}>🔔</Text>
        
      </View>
      
    </View>
    
  );
  
};

const styles = StyleSheet.create({

  container: {
  
    width: '100%',
    
    backgroundColor: '#1976D2',
    
    padding: 20,
    
    borderRadius: 12,
    
  },
  title: {
  
    fontSize: 24,
    
    fontWeight: 'bold',
    
    color: 'white',
    
    marginBottom: 12,
    
  },
  
  row: {
  
    flexDirection: 'row',
    
    justifyContent: 'space-between',
    
  },
  greeting: {
  
    color: 'white',
    
    fontSize: 15,
    
  },
  notification: {
  
    fontSize: 20,
  },
  
});

export default Header;


Hình ảnh giao diện trước khi thay đổi:

<img width="369" height="112" alt="image" src="https://github.com/user-attachments/assets/f2bf2c14-b897-40dc-8bff-fefe2794130c" />



Hình ảnh giao diện sau khi thay đổi:

<img width="371" height="624" alt="image" src="https://github.com/user-attachments/assets/8c9f31f5-5b2f-493c-b37c-3c82c2c011de" />



3.2. Component 2

Tên component: Main.js

Nội dung code:

Nhập điểm đón: Người dùng nhập địa chỉ muốn đón.

Nhập điểm đến: Người dùng nhập địa chỉ cần đến.

Nhập quãng đường: Người dùng nhập số km của chuyến đi.

Chọn loại xe: Có 3 loại xe:

🏍️ Xe máy.

🚗 Ô tô 4 chỗ.

🚙 Ô tô 7 chỗ.

Tính giá tiền: Tự động tính giá dựa trên loại xe và số km.

Đặt xe: Kiểm tra thông tin và hiển thị thông báo xác nhận chuyến xe.

CODE:

import React, { useState } from 'react';

import {

  Text,
  
  View,
  
  TextInput,
  
  TouchableOpacity,
  
  StyleSheet,
  
  Alert,
  
  ScrollView
  
} from 'react-native';

const Main = () => {

  const [diemDon, setDiemDon] = useState('');
  
  const [diemDen, setDiemDen] = useState('');
  
  const [km, setKm] = useState('0');
  
  const [loaiXe, setLoaiXe] = useState('Xe máy');

  // Danh sách loại xe và giá tiền
  
  const vehicles = [
    {

      name: 'Xe máy',
      
      icon: '🏍️',
      
      base: 10000,
      
      price: 2000,
    },
    
    {
      name: 'Ô tô 4 chỗ',
      
      icon: '🚗',
      
      base: 20000,
      
      price: 5000,
    },
    
    {
      name: 'Ô tô 7 chỗ',
      
      icon: '🚙',
      
      base: 30000,
      
      price: 7000,
    },
    
  ];

  // Chọn loại xe
  
  const selectedVehicle = vehicles.find(
  
    (item) => item.name === loaiXe
  );

  // Tính tổng tiền
  
  const tongTien =
  
    selectedVehicle.base +
    
    (Number(km) || 0) * selectedVehicle.price;

  // Đặt xe
  
  const handleDatXe = () => {
  
    if (!diemDon.trim() || !diemDen.trim()) {
    
      Alert.alert(
      
        'Thông báo',
        
        'Vui lòng nhập đầy đủ điểm đón và điểm đến!'
      );
      return;
    }

    if (!km || Number(km) <= 0) {
    
      Alert.alert(
      
        'Thông báo',
        
        'Vui lòng nhập số km hợp lệ!'
        
      );
      
      return;
    }

    Alert.alert(
    
      'Thông tin đặt xe',
      
      `Điểm đón: ${diemDon}\n` +
      
      `Điểm đến: ${diemDen}\n` +
      
      `Loại xe: ${loaiXe}\n` +
      
      `Quãng đường: ${km} km\n` +
      
      `Giá dự kiến: ${tongTien.toLocaleString('vi-VN')}đ`
      
    );
    
  };

  return (
  
    <ScrollView style={styles.container}>

      <Text style={styles.title}>
      
        📍 Đặt chuyến xe
        
      </Text>

      <Text style={styles.subtitle}>
      
        Nhập thông tin chuyến đi của bạn
        
      </Text>

      {/* Bản đồ */}
      
      <View style={styles.map}>
      
        <Text style={styles.mapIcon}>🗺️</Text>

        <Text style={styles.mapText}>
        
          BẢN ĐỒ MINH HỌA
          
        </Text>

        <Text style={styles.mapSubText}>
        
          Khu vực đón và trả khách
          
        </Text>
        
      </View>

      {/* Điểm đón */}
      
      <View style={styles.location}>
      
        <Text style={styles.label}>
        
          📍 Điểm đón
          
        </Text>

        <TextInput
        
          style={styles.input}
          
          placeholder="Nhập địa chỉ điểm đón..."
          
          value={diemDon}
          
          onChangeText={setDiemDon}
          
        />
        
      </View>

      {/* Điểm đến */}
      
      <View style={styles.location}>
      
        <Text style={styles.label}>
        
          🏁 Điểm đến
          
        </Text>

        <TextInput
        
          style={styles.input}
          
          placeholder="Nhập địa chỉ điểm đến..."
          
          value={diemDen}
          
          onChangeText={setDiemDen}
          
        />
        
      </View>

      {/* Nhập số km */}
      
      <View style={styles.distanceBox}>
      
  <Text style={styles.distanceLabel}>
    
    📏 Quãng đường (km)
    
  </Text>

  <TextInput
  
    style={styles.kmInput}
    
    placeholder="Nhập km"
    
    keyboardType="decimal-pad"
    
    value={km}
    
    onChangeText={(value) => {
    
      if (/^\d*\.?\d*$/.test(value)) {
      
        setKm(value);
        
      }
      
    }}
    
  />

  <Text style={styles.distanceValue}>
    
    {km || '0'} km
    
  </Text>
  
</View>

      {/* Chọn loại xe */}
      
      <Text style={styles.vehicleTitle}>
      
        🚘 Chọn loại xe
        
      </Text>

      {vehicles.map((item) => (
      
        <TouchableOpacity
        
          key={item.name}
          
          style={[
          
            styles.vehicle,
            
            loaiXe === item.name && styles.selectedVehicle
            
          ]}
          
          onPress={() => setLoaiXe(item.name)}
          
        >

          <Text style={styles.vehicleName}>
          
            {item.icon} {item.name}
            
          </Text>

          <Text style={styles.price}>
          
            {(
            
              item.base +
              
              (Number(km) || 0) * item.price
              
            ).toLocaleString('vi-VN')}đ
            
          </Text>

        </TouchableOpacity>
      ))}

      {/* Tổng tiền */}
      <View style={styles.totalBox}>

        <Text style={styles.totalLabel}>
          💰 Tổng giá tiền dự kiến
        </Text>

        <Text style={styles.totalPrice}>
          {tongTien.toLocaleString('vi-VN')}đ
        </Text>

        <Text style={styles.note}>
          Giá được tính theo số km bạn nhập
        </Text>

      </View>

      {/* Đặt xe */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleDatXe}
      >
        <Text style={styles.buttonText}>
          ĐẶT XE NGAY
        </Text>
      </TouchableOpacity>

    </ScrollView>
  );
};

const styles = StyleSheet.create({

  container: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 12,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1976D2',
    marginBottom: 5,
  },

  subtitle: {
    fontSize: 14,
    color: '#888888',
    marginBottom: 15,
  },

  map: {
    height: 130,
    backgroundColor: '#E3F2FD',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 15,
  },

  mapIcon: {
    fontSize: 30,
  },

  mapText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1976D2',
  },

  mapSubText: {
    color: '#666666',
    marginTop: 5,
  },

  location: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 10,
    marginBottom: 12,
  },

  label: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 5,
    color: '#333333',
  },

  input: {
    height: 40,
    color: '#333333',
    fontSize: 14,
  },

  // Ô nhập km
  distanceBox: {
  backgroundColor: '#F5F7FA',
  padding: 8,
  borderRadius: 8,
  alignItems: 'center',
  marginBottom: 10,
  flexDirection: 'row',
  justifyContent: 'space-between',
},

distanceLabel: {
  fontSize: 13,
  color: '#666666',
  flex: 1,
},

kmInput: {
  width: 75,
  height: 35,
  backgroundColor: '#FFFFFF',
  borderWidth: 1,
  borderColor: '#1976D2',
  borderRadius: 6,
  textAlign: 'center',
  fontSize: 15,
  color: '#1976D2',
  padding: 2,
},

distanceValue: {
  fontSize: 13,
  fontWeight: 'bold',
  color: '#1976D2',
  marginLeft: 8,
},

  vehicleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333333',
  },

  vehicle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 14,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },

  selectedVehicle: {
    borderColor: '#1976D2',
    backgroundColor: '#E3F2FD',
  },

  vehicleName: {
    fontSize: 15,
    color: '#333333',
    fontWeight: '500',
  },

  price: {
    fontSize: 15,
    color: '#1976D2',
    fontWeight: 'bold',
  },

  totalBox: {
    backgroundColor: '#E3F2FD',
    padding: 18,
    borderRadius: 10,
    marginTop: 12,
    alignItems: 'center',
  },

  totalLabel: {
    fontSize: 15,
    color: '#333333',
  },

  totalPrice: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1976D2',
    marginVertical: 8,
  },

  note: {
    fontSize: 12,
    color: '#777777',
  },

  button: {
    backgroundColor: '#1976D2',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 20,
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },

});

export default Main;

Hình ảnh giao diện trước khi thay đổi:

<img width="368" height="123" alt="image" src="https://github.com/user-attachments/assets/d8116913-0912-46fe-ae77-9214f06b2ce9" />


Hình ảnh giao diện sau khi thay đổi:

<img width="315" height="469" alt="image" src="https://github.com/user-attachments/assets/1027f993-1476-4e90-8ad4-da5ee05a0cd9" />


3.3. Component 3

Tên component: Footer.js

Nội dung code: Nội dung và chức năng của code

• Đặt xe • Lịch sử
• Thông báo • Cá nhân

CODE:


import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.icon}>🚕</Text>
        <Text style={styles.text}>Đặt xe</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.icon}>📋</Text>
        <Text style={styles.text}>Lịch sử</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.icon}>🔔</Text>
        <Text style={styles.text}>Thông báo</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.icon}>👤</Text>
        <Text style={styles.text}>Cá nhân</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 12,
    borderTopWidth: 1,
    borderColor: '#DDD',
  },
  item: {
    alignItems: 'center',
  },
  icon: {
    fontSize: 20,
  },
  text: {
    fontSize: 12,
    marginTop: 5,
    color: '#333',
  },
});

export default Footer;


Hình ảnh giao diện trước khi thay đổi:

<img width="316" height="101" alt="image" src="https://github.com/user-attachments/assets/ba21fee0-57b0-418e-965d-a5078ce84340" />


Hình ảnh giao diện sau khi thay đổi:

<img width="313" height="72" alt="image" src="https://github.com/user-attachments/assets/e0e63621-e86c-4bf4-89bc-21f06006f838" />

3.4. Component 4

Tên component: Home.js

Nội dung code: Nội dung và chức năng của code

có tác dụng tạo giao diện màn hình chính (Home Screen) của ứng dụng.

CODE:


import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView
} from 'react-native';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import VehicleItem from './VehicleItem';

const Home = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Header />
        <Main />
        
      </ScrollView>

      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF1F8',
    padding: 10,
  },
  content: {
    gap: 12,
    paddingBottom: 15,
  },
});

export default Home;


Hình ảnh giao diện trước khi thay đổi:

<img width="319" height="613" alt="image" src="https://github.com/user-attachments/assets/63fe27a7-ce9c-405b-a150-3c8e65bf1ee2" />


Hình ảnh giao diện sau khi thay đổi:

<img width="316" height="705" alt="image" src="https://github.com/user-attachments/assets/99843cda-bae8-4bf6-9e3b-bac58f34790f" />


4. Kết luận

Hoàn thành bài tập React Native, thực hiện thay đổi giao diện các thành phần trong component và các component, đồng thời chạy ứng dụng bằng Expo.
