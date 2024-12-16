import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import RootNavigation from './src/router/rootNavigation';
import {Provider} from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  );
}
