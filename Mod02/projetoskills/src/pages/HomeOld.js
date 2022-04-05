import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Home = () => {
  return (
    <>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Mod 02 - Projeto 01</Text>
        <Text style={styles.sectionAuthor}>Antônio Abrantes</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionAuthor: {
    fontSize: 18,
    fontWeight: '600',
  },
});


export default Home;
