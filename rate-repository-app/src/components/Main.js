// src/components/Main.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppBar from './AppBar'; // Import AppBar component
import RepositoryList from './RepositoryList'; // Import RepositoryList component

const Main = () => {
  return (
    <View style={styles.container}>
      {/* AppBar */}
      <AppBar /> {/* Display custom AppBar */}

      {/* Repository List */}
      <RepositoryList /> {/* Display the RepositoryList component */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default Main;
