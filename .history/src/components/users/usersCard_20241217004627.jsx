//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const UserCard = ({user}) => {
  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text>{user.name}</Text>
        </View>
      </View>

      <View>
        <Text>{user.name}</Text>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default UserCard;
