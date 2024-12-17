//import liraries
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import ThemeColors from '../../theme/themeColors';
import {Add} from 'iconsax-react-native';

// create a component
const FloatActionButton = props => {
  return (
    <TouchableOpacity style={styles.container}>
      <Add size={40} color={ThemeColors.WHITE} />
    </TouchableOpacity>
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
    right: 20,
  },
});

//make this component available to the app
export default FloatActionButton;