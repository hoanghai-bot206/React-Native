
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
