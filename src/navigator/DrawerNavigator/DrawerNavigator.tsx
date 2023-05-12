import {StyleSheet} from 'react-native';
import React from 'react';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {TabNavigator} from '../TabNavigator/TabNavigator';
import {Colors} from '../../constants/Colors';
import {CustomDrawerContent} from '../../components/CustomDrawerContent';
import {DrawerNavigatorParams} from './types';
import {ScreenUtils} from '../../utils/screenUtils';

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator<DrawerNavigatorParams>();
  const translateY = useSharedValue<number>(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            translateY.value,
            [0, 1],
            [0, 50],
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  });

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawerContent {...props} />}
        screenOptions={{
          drawerType: 'back',
          headerShown: false,
          drawerStyle: styles.drawerStyle,
          overlayColor: 'transparent',
          sceneContainerStyle: styles.sceneContainerStyle,
        }}>
        <Drawer.Screen name="Start">
          {props => <TabNavigator translateY={translateY} {...props} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </Animated.View>
  );
};

export {DrawerNavigator};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerStyle: {width: ScreenUtils.screenWidth * 0.55},
  sceneContainerStyle: {backgroundColor: Colors.Secondary},
});
