BT02 - LEARNING APP

1. Thông tin bài tập
2. 
Tên ứng dụng: LearningApp

Nền tảng: React Native


4. Link ứng dụng Expo
5. 
Expo URL: https://snack.expo.dev/@hoanghai0501/learningapp

7. Mô tả ứng dụng

LearningApp là ứng dụng hỗ trợ sinh viên theo dõi thông tin học tập, thống kê khóa học và quản lý tiến độ các môn học.

4. Các component được xây dựng

4.1. Header
Hiển thị lời chào sinh viên.

Hiển thị tên sinh viên.

Hiển thị ảnh đại diện hoặc chữ cái đại diện.

Code: components/Header.js

import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

export default function Header() {

  return (
  
    <View style={styles.container}>
    
      <View>
      
        <Text style={styles.greeting}>
        
          Xin chào, chào buổi sáng 👋
          
        </Text>

        <Text style={styles.name}>Nguyễn Hoàng Hải</Text>

        <Text style={styles.id}>MSSV: CD-CNTT18A</Text>
        
      </View>

      <View style={styles.avatar}>
      
        <Text style={styles.avatarText}>H</Text>
        
      </View>
      
    </View>
    
  );
  
}

const styles = StyleSheet.create({

  container: { backgroundColor: '#FFF', padding: 20, borderRadius: 18, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 25 },
  
  greeting: { color: '#64748B', fontSize: 14 },
  
  name: { fontSize: 22, fontWeight: 'bold', color: '#1E293B', marginVertical: 6 },
  
  id: { color: '#94A3B8', fontSize: 13 },
  
  avatar: { width: 55, height: 55, borderRadius: 30, backgroundColor: '#6366F1', justifyContent: 'center', alignItems: 'center' },
  
  avatarText: { color: '#FFF', fontSize: 24, fontWeight: 'bold' },

});

Hình ảnh giao diện:

<img width="316" height="142" alt="image" src="https://github.com/user-attachments/assets/030796c3-d74e-40cc-8578-f16d217b4990" />


4.2. StatCard

Hiển thị tổng số khóa học.

Hiển thị số khóa học đã hoàn thành.

Hiển thị số khóa học đang học.

Hiển thị điểm trung bình.

Code: components/StatCard.js

import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

export default function StatCard({ icon, title, value, color }) {

  return (
  
    <View style={styles.card}>
    
      <View style={[styles.icon, { backgroundColor: color }]}>
      
        <Text style={{ fontSize: 23 }}>{icon}</Text>
        
      </View>

      <View style={{ flex: 1 }}>
      
        <Text style={styles.title}>{title}</Text>
        
        <Text style={styles.value}>{value}</Text>
        
      </View>
      
    </View>
    
  );
  
}

const styles = StyleSheet.create({

  card: {
  
    backgroundColor: '#FFFFFF',
    
    width: '48%',
    
    padding: 15,
    
    borderRadius: 15,
    
    flexDirection: 'row',
    
    alignItems: 'center',
    
    marginBottom: 12,
    
    gap: 10,
    
  },
  
  icon: {
  
    width: 42,
    
    height: 42,
    
    borderRadius: 12,
    
    justifyContent: 'center',
    
    alignItems: 'center',
    
  },
  
  title: {
  
    color: '#64748B',
    
    fontSize: 12,
    
  },
  
  value: {
  
    color: '#1E293B',
    
    fontSize: 21,
    
    fontWeight: 'bold',
    
    marginTop: 5,
    
  },
  
});

Hình ảnh giao diện:

<img width="319" height="200" alt="image" src="https://github.com/user-attachments/assets/f1384b3c-8a20-481a-8d29-3c8ff22f8e0d" />


4.3. CourseCard

Hiển thị tên môn học.

Hiển thị tên giảng viên.

Hiển thị trạng thái môn học.

Hiển thị phần trăm tiến độ học tập bằng thanh Progress Bar.

Code: components/CourseCard.js

import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

export default function CourseCard({

  name,
  
  teacher,
  
  progress,
  
  color,
  
}) {

  return (
  
    <View style={styles.card}>
    
      <View style={styles.top}>
      
        <Text style={styles.icon}>📚</Text>

        <Text style={styles.status}>Đang học</Text>
        
      </View>

      <Text style={styles.name}>{name}</Text>

      <Text style={styles.teacher}>
      
        Giảng viên: {teacher}
        
      </Text>

      <View style={styles.progressInfo}>
      
        <Text style={styles.progressText}>
        
          Tiến độ học tập
          
        </Text>

        <Text style={styles.percent}>{progress}%</Text>
        
      </View>

      <View style={styles.progressBar}>
      
        <View
        
          style={[
          
            styles.progress,
            
            {
            
              width: `${progress}%`,
              
              backgroundColor: color,
              
            },
            
          ]}
          
        />
        
      </View>
      
    </View>
    
  );
  
}

const styles = StyleSheet.create({

  card: { backgroundColor: '#FFF', padding: 18, borderRadius: 16, marginBottom: 15 },
  
  top: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
  
  icon: { fontSize: 27, backgroundColor: '#EEF2FF', padding: 8, borderRadius: 12 },
  
  status: { backgroundColor: '#D1FAE5', color: '#059669', padding: 7, borderRadius: 15, fontSize: 11 },
  
  name: { fontSize: 17, fontWeight: 'bold', color: '#1E293B' },
  
  teacher: { color: '#64748B', fontSize: 13, marginTop: 7 },
  
  progressInfo: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 18, marginBottom: 8 },
  
  progressText: { color: '#64748B', fontSize: 12 },
  
  percent: { fontWeight: 'bold', fontSize: 12 },
  
  progressBar: { height: 7, backgroundColor: '#E2E8F0', borderRadius: 10, overflow: 'hidden' },
  
  progress: { height: 7, borderRadius: 10 },
  
});

<img width="305" height="193" alt="image" src="https://github.com/user-attachments/assets/b29ea9aa-94ae-4cfa-b7be-a240779bc5f6" />

4.4. BottomMenu

Trang chủ.

Khóa học.

Lịch học.

Cá nhân.

Thanh menu được cố định ở cuối màn hình và có trạng thái chọn mục.



import React, { useState } from 'react';

import {

  View,
  
  Text,
  
  TouchableOpacity,
  
  StyleSheet,
  
} from 'react-native';

export default function BottomMenu() {

  const [active, setActive] = useState('Trang chủ');

  const menus = [
  
    { name: 'Trang chủ', icon: '🏠' },
    
    { name: 'Khóa học', icon: '📚' },
    
    { name: 'Lịch học', icon: '📅' },
    
    { name: 'Cá nhân', icon: '👤' },
    
  ];

  return (
  
    <View style={styles.container}>

      {menus.map((item) => (
      
        <TouchableOpacity
        
          key={item.name}
          
          style={styles.item}
          
          onPress={() => setActive(item.name)}
          
        >
        
          <Text style={styles.icon}>{item.icon}</Text>

          <Text
          
            style={[
            
              styles.label,
              
              active === item.name && styles.active,
              
            ]}
            
          >
          
            {item.name}
            
          </Text>
          
        </TouchableOpacity>
        
      ))}
      
    </View>
    
  );
  
}

const styles = StyleSheet.create({

  container: { position: 'absolute', bottom: 0, left: 0, right: 0, height: 75, backgroundColor: '#FFF', flexDirection: 'row', justifyContent: 'space-around', alignItems:
  
  'center', borderTopLeftRadius: 18, borderTopRightRadius: 18, elevation: 10 },
  
  item: { alignItems: 'center', justifyContent: 'center' },
  
  icon: { fontSize: 22 },
  
  label: { fontSize: 11, color: '#94A3B8', marginTop: 5 },
  
  active: { color: '#6366F1', fontWeight: 'bold' },
  
});

Hình ảnh giao diện:

<img width="315" height="64" alt="image" src="https://github.com/user-attachments/assets/9c90bcf8-4189-4d46-8f25-aec8e212acc8" />


5. Giao diện tổng thể Home

Màn hình Home bao gồm:

Header chào mừng sinh viên.

Khu vực tổng quan học tập.

Các thẻ thống kê StatCard.

Danh sách môn học CourseCard.

Thanh điều hướng BottomMenu.

Hình ảnh giao diện tổng thể:

Code: Home Screen

import React from 'react';

import {

  View,
  
  Text,
  
  ScrollView,
  
  StyleSheet,
  
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '../components/Header';

import StatCard from '../components/StatCard';

import CourseCard from '../components/CourseCard';

import BottomMenu from '../components/BottomMenu';

export default function HomeScreen() {

  const courses = [
  
    {
    
      id: '1',
      name: 'Lập trình Web',
      teacher: 'Nguyễn Thanh hải',
      progress: 80,
      color: '#6366F1',
      
    },
    
    {
    
      id: '2',
      name: 'Cơ sở dữ liệu',
      teacher: 'Nguyễn Thị Tường Vy',
      progress: 65,
      color: '#10B981',
      
    },
    
    {
    
      id: '3',
      name: 'Lập trình Mobile',
      teacher: 'Trần Ngọc Minh',
      progress: 45,
      color: '#F59E0B',
      
    },
    
  ];

  return (
  
    <SafeAreaView style={styles.container}>
    
      <ScrollView
      
        showsVerticalScrollIndicator={false}
        
        contentContainerStyle={styles.scrollContent}
        
      >
        <Header />

        <Text style={styles.heading}>
        
          Thống kê học tập
          
        </Text>

        <View style={styles.stats}>
        
          <StatCard
          
            icon="📚"
            title="Khóa học"
            value="08"
            color="#E0E7FF"
            
          />

          <StatCard
          
            icon="✅"
            title="Hoàn thành"
            value="05"
            color="#D1FAE5"
            
          />

          <StatCard
          
            icon="⏳"
            title="Đang học"
            value="03"
            color="#FEF3C7"
            
          />

          <StatCard
          
            icon="⭐"
            title="Điểm trung bình"
            value="8.5"
            color="#FCE7F3"
            
          />
        </View>

        <View style={styles.sectionHeader}>
        
          <Text style={styles.heading}>
          
            Môn học của tôi
            
          </Text>

          <Text style={styles.seeAll}>
          
            Xem tất cả →
            
          </Text>
          
        </View>

        {courses.map((course) => (
        
          <CourseCard
          
            key={course.id}
            
            name={course.name}
            
            teacher={course.teacher}
            
            progress={course.progress}
            
            color={course.color}
            
          />
          
        ))}
        
      </ScrollView>

      <BottomMenu />
      
    </SafeAreaView>
    
  );
  
}

const styles = StyleSheet.create({

  container: { flex: 1, backgroundColor: '#000' },
  
  scrollContent: { padding: 20, paddingBottom: 100 },
  
  heading: { fontSize: 19, fontWeight: 'bold', color: '#1E293B', marginBottom: 18 },
  
  stats: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: 20 },
  
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  
  seeAll: { color: '#6366F1', fontSize: 13, marginBottom: 18 }
  
});

Hình ảnh giao diện:

<img width="320" height="678" alt="image" src="https://github.com/user-attachments/assets/a535a85e-ce21-4b59-a6fc-422e4ff52c70" />

6. Kết luận

Ứng dụng LearningApp đã xây dựng được giao diện Home bằng React Native và Expo.

Các component được tách riêng biệt giúp mã nguồn dễ quản lý, tái sử dụng và mở rộng.

Giao diện hỗ trợ hiển thị trên thiết bị di động và sử dụng Expo Go để chạy thử nghiệm.
