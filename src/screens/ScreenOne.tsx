import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../constants/Colors';

const ScreenOne = () => {
  return (
    <View style={styles.container}>
      <Text>ScreenOne</Text>
    </View>
  );
};

export {ScreenOne};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Background,
  },
});
