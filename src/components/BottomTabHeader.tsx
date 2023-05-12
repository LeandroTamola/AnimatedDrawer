import {StyleSheet, Text} from 'react-native';
import React, {FC} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {Colors} from '../constants/Colors';
import {MenuIcon} from './icons/MenuIcon';
import {DrawerContentComponentProps} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import {DrawerNavigatorProps} from '../navigator/DrawerNavigator/types';

const BottomTabHeader: FC = () => {
  const navigation = useNavigation<DrawerNavigatorProps>();
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={navigation.openDrawer}>
        <MenuIcon />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>START</Text>
    </SafeAreaView>
  );
};

export {BottomTabHeader};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 20,
    backgroundColor: Colors.Background,
  },
  headerTitle: {
    marginLeft: 32,
    fontWeight: '600',
    fontSize: 18,
    opacity: 0.4,
  },
});
