
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
