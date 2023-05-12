import {DrawerNavigationProp} from '@react-navigation/drawer';
import {RouteProp} from '@react-navigation/native';

export type DrawerNavigatorParams = {
  Start: undefined;
};

export type DrawerNavigatorProps = DrawerNavigationProp<DrawerNavigatorParams>;
export type DrawerNavigatorRouteProp<T extends keyof DrawerNavigatorParams> =
  RouteProp<DrawerNavigatorParams, T>;
