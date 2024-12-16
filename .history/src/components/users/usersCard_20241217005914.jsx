//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {compareName, getInitialNameSurname} from '../../utils/function';

// create a component
const UserCard = ({user}) => {
  return (
    <View style={styles.container}>
      <View>
        <View
          style={{
            width: 80,
            height: 80,
            borderWidth: 1,
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'plum',
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            {getInitialNameSurname(user.name, user.surname)}
          </Text>
        </View>
      </View>

      <View style={{padding: 10}}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '500',
          }}>
          {' '}
          {compareName(user.name, user.surname)}
        </Text>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
});

//make this component available to the app
export default UserCard;
