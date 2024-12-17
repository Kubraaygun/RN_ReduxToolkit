//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import Input from '../../components/ui/input';
import Button from '../../components/ui/button';

// create a component
const AddNewUser = () => {
  return (
    <View style={defaultScreenStyle.container}>
      <Input title="name" placeholder="Please set name" />
      <Input title="surname" placeholder="Please set surname" />
      <Input title="Phone Number" placeholder="Please set Phone Number" />
      <Input title="E-mail" placeholder="Please set E-mail" />
      <Input title="Gender" placeholder="Please set Gender" />
      <Input title="Age" placeholder="Please set Age" />

      <Button title="Save" />
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
