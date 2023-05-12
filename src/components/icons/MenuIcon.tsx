import {StyleSheet, View} from 'react-native';
import React from 'react';

const MenuIcon = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.line, styles.lineOne]} />
      <View style={styles.line} />
      <View style={[styles.line, styles.lineThree]} />
    </View>
  );
};

export {MenuIcon};

const styles = StyleSheet.create({
  container: {
    width: 30,
  },
  line: {
    borderBottomColor: 'black',
    borderWidth: 1.5,
    opacity: 0.3,
    borderRadius: 16,
  },
  lineOne: {
    marginBottom: 5,
  },
  lineThree: {
    marginTop: 5,
  },
});
