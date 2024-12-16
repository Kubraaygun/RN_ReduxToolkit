import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import RootNavigation from './src/router/rootNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}
