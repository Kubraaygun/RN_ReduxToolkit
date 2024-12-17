//import liraries
import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import ThemeColors from '../../theme/themeColors';

// create a component
const Input = props => {
  const {title, value, onChangeText, placeholder} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput {...props} style={styles.input} />
      <Text style={{marginTop: 5, color: ThemeColors.RED}}>Zorunlu</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  title: {
    fontSize: 18,
    color: ThemeColors.BLACK,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    padding: 10,
    fontSize: 16,
    borderRadius: 5,
    paddingVertical: 15,
    backgroundColor: ThemeColors.INPUT,
  },
});

//make this component available to the app
export default Input;
