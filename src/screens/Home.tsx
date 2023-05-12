import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';

const Home: FC = () => {
  return <View style={styles.container}></View>;
};

export {Home};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
