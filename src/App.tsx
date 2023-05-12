import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {DrawerNavigator} from './navigator/DrawerNavigator/DrawerNavigator';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

export default App;
