//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {compareName} from '../../utils/function';

// create a component
const UserCard = ({user}) => {
  return (
    <View style={styles.container}>
      <View>
        <View
          style={{
            width: 100,
            height: 100,
            borderWidth: 1,
            borderRadius: 100,
          }}>
          <Text>{user.name}</Text>
        </View>
      </View>

      <View>
        <Text>{compareName(user.name, user.surname)}</Text>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
});

//make this component available to the app
export default UserCard;