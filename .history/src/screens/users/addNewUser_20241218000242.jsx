//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import Input from '../../components/ui/input';

// create a component
const AddNewUser = () => {
  return (
    <View style={defaultScreenStyle.container}>
      <Input title="name" placeholder="Please set name" />
      <Input title="surname" placeholder="Please set name" />
      <Input title="Phone Number" placeholder="Please set name" />
      <Input title="E-mail" placeholder="Please set name" />
      <Input title="Gender" placeholder="Please set name" />
      <Input title="Age" placeholder="Please set name" />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default AddNewUser;
