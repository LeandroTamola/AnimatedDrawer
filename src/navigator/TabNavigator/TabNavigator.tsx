import {FC} from 'react';
import {StyleSheet} from 'react-native';
import Animated, {
  Extrapolate,
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {useDrawerProgress} from '@react-navigation/drawer';

import {Contact} from '../../screens/Contact';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeNavigator} from '../HomeNavigator/HomeNavigator';
import {TabNavigatorParams} from './types';
import {BottomTabHeader} from '../../components/BottomTabHeader';

export const BottomTab = createBottomTabNavigator<TabNavigatorParams>();

interface Props {
  translateY: SharedValue<number>;
}

export const TabNavigator: FC<Props> = ({translateY}) => {
  const progress = useDrawerProgress();

  const animatedScreens = useAnimatedStyle(() => {
    translateY.value = progress.value;
    return {
      transform: [
        {
          translateX: interpolate(
            progress.value,
            [0, 1],
            [0, 50],
            Extrapolate.CLAMP,
          ),
        },
        {
          rotate: `${interpolate(
            progress.value,
            [0, 1],
            [0, -5],
            Extrapolate.CLAMP,
          )}deg`,
        },
      ],
    };
  });

  return (
    <Animated.View style={[styles.container, animatedScreens]}>
      <BottomTab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: true,
          tabBarStyle: {
            display: 'none',
          },
          header: () => <BottomTabHeader />,
        }}>
        <BottomTab.Screen name="Home" component={HomeNavigator} />
        <BottomTab.Screen name="Contact" component={Contact} />
      </BottomTab.Navigator>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, borderRadius: 25, overflow: 'hidden'},
});
