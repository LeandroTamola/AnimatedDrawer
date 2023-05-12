import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type HomeNavigatorParams = {
  ScreenOne: undefined;
  ScreenTwo: undefined;
};

export type HomeNavigatorProps = NativeStackNavigationProp<HomeNavigatorParams>;
export type HomeNavigatorRouteProp<T extends keyof HomeNavigatorParams> =
  RouteProp<HomeNavigatorParams, T>;
