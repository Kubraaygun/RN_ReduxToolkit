//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {ThemeColors} from '../../theme/colors';

// create a component
const Button = props => {
  const {title, status} = props;
  const setColor = () => {
    switch (status) {
      case 'success':
        return ThemeColors.GREEN;
      case 'warning':
        return ThemeColors.YELLOW;

      default:
        return ThemeColors.BLUE;
    }
  };
  return (
    <TouchableOpacity
      {...props}
      style={[styles.container, {backgroundColor: setColor()}]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    paddingVertical: 15,
    borderRadius: 8,
    margin: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
  },
});

//make this component available to the app
export default Button;
