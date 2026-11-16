
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
