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
    width: 80,
    height: 80,
    borderRadius: 40,
    position: 'absolute',
    bottom: 50,
  },
});

//make this component available to the app
export default FloatActionButton;
