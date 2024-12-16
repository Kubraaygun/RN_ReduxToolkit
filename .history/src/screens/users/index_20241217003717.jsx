//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import {useSelector} from 'react-redux';

// create a component
const Users = () => {
  const {title} = useSelector(state => state.users);
  return (
    <View style={defaultScreenStyle.container}>
      <Text>{title}</Text>
    </View>
  );
};
export default Users;
