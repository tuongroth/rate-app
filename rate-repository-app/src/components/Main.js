// src/components/Main.js
import React from 'react';
import { View, StyleSheet } from 'react-native'; 
import RepositoryList from './RepositoryList'; // Import RepositoryList component

const Main = () => {
  return (
    <View style={styles.container}>
      <RepositoryList /> {/* Display the RepositoryList component */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
});

export default Main;
