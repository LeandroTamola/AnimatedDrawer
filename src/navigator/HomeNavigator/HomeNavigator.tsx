import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenOne} from '../../screens/ScreenOne';
import {ScreenTwo} from '../../screens/ScreenTwo';
import {HomeNavigatorParams} from './types';

export const HomeStack = createNativeStackNavigator<HomeNavigatorParams>();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="ScreenOne">
      <HomeStack.Screen name="ScreenOne" component={ScreenOne} />
      <HomeStack.Screen name="ScreenTwo" component={ScreenTwo} />
    </HomeStack.Navigator>
  );
};

export {HomeNavigator};
