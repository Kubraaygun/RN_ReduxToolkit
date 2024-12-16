//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import {useSelector} from 'react-redux';

// create a component
const Users = () => {
  const {users} = useSelector(state => state.users);
  return (
    <View style={defaultScreenStyle.container}>
      <FlatList
        data={users}
        renderItem={({item}) => <Text>{item.name}</Text>}
      />
    </View>
  );
};
export default Users;
