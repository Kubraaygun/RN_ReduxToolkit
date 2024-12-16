import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import RootNavigation from './src/router/rootNavigation';
import {Provider} from 'react-redux';

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  );
}
