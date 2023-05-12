import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ScreenTwo = () => {
  return (
    <View style={styles.container}>
      <Text>ScreenTwo</Text>
    </View>
  );
};

export {ScreenTwo};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
