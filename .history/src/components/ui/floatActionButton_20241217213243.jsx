//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ThemeColors from '../../theme/themeColors';

// create a component
const FloatActionButton = () => {
  return (
    <View style={styles.container}>
      <Text>MyComponent</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ThemeColors.GREEN,
  },
});

//make this component available to the app
export default FloatActionButton;
