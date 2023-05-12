import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type TabNavigatorParams = {
  Home: undefined;
  Contact: undefined;
};

export type TabNavigatorProps = NativeStackNavigationProp<TabNavigatorParams>;
export type TabNavigatorRouteProp<T extends keyof TabNavigatorParams> =
  RouteProp<TabNavigatorParams, T>;
