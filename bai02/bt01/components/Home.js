
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
