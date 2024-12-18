//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import {getInitialNameSurname, getRandomColor} from '../../utils/function';

// create a component
const UserDetail = ({route}) => {
  const {user} = route.params;
  return (
    <View style={defaultScreenStyle.container}>
      <ScrollView
        style={{
          width: 70,
          height: 70,
          borderWidth: 1,
          borderRadius: 100,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: getRandomColor(),
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          {getInitialNameSurname(user.name, user.surname)}
        </Text>
      </ScrollVi>
    </View>
  );
};

//make this component available to the app
export default UserDetail;