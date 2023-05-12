import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerItem,
} from '@react-navigation/drawer';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../constants/Colors';
import {ScreenUtils} from '../utils/screenUtils';

const CustomDrawerContent: FC<DrawerContentComponentProps> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.companyLogo}>Beka</Text>
      <DrawerItem
        label="Start"
        onPress={() => navigation.navigate('Start')}
        focused={true}
        activeBackgroundColor={Colors.PrimaryLowOpacity}
        activeTintColor={Colors.Primary}
        labelStyle={styles.labelStyle}
        style={styles.labelContainer}
      />
      <DrawerItem
        label="Your Cart"
        onPress={() => navigation.goBack()}
        activeBackgroundColor={Colors.PrimaryLowOpacity}
        activeTintColor={Colors.Primary}
        inactiveTintColor={Colors.White}
        labelStyle={styles.labelStyle}
        style={styles.labelContainer}
      />
      <DrawerItem
        label="Favourites"
        onPress={() => navigation.goBack()}
        activeBackgroundColor={Colors.PrimaryLowOpacity}
        activeTintColor={Colors.Primary}
        inactiveTintColor={Colors.White}
        labelStyle={styles.labelStyle}
        style={styles.labelContainer}
      />
      <DrawerItem
        label="Your Orders"
        onPress={() => navigation.goBack()}
        activeBackgroundColor={Colors.PrimaryLowOpacity}
        activeTintColor={Colors.Primary}
        inactiveTintColor={Colors.White}
        labelStyle={[styles.labelStyle, styles.lastDrawerItem]}
        style={styles.labelContainer}
      />

      <View style={styles.divider} />

      <DrawerItem
        label="Sign Out"
        onPress={() => navigation.goBack()}
        activeBackgroundColor={Colors.PrimaryLowOpacity}
        activeTintColor={Colors.Primary}
        inactiveTintColor={Colors.White}
        labelStyle={[styles.labelStyle, styles.signOutDrawerItem]}
        style={styles.labelContainer}
      />
    </SafeAreaView>
  );
};

export {CustomDrawerContent};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Secondary,
    paddingLeft: 20,
    width: '100%',
    flex: 1,
    borderTopLeftRadius: 25,
    paddingTop: ScreenUtils.screenHeight * 0.1,
  },
  companyLogo: {
    marginLeft: ScreenUtils.screenWidth * 0.1,
    marginBottom: 40,
    color: Colors.White,
    fontSize: 24,
    fontWeight: '800',
  },
  labelContainer: {
    borderRadius: 10,
    width: '70%',
  },
  labelStyle: {
    paddingLeft: 10,
    fontSize: 16,
    fontWeight: '500',
  },
  lastDrawerItem: {
    marginBottom: 60,
  },
  signOutDrawerItem: {
    marginTop: 60,
  },
  divider: {
    backgroundColor: Colors.Background,
    opacity: 0.3,
    height: 2,
    width: '100%',
    borderRadius: 10,
  },
});
