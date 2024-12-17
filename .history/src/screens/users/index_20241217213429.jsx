//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import {useSelector} from 'react-redux';
import UserCard from '../../components/users/usersCard';
import FloatActionButton from '../../components/ui/floatActionButton';

// create a component
const Users = () => {
  const {users} = useSelector(state => state.users);
  return (
    <View style={defaultScreenStyle.container}>
      <FlatList
        data={users}
        renderItem={({item}) => <UserCard user={item} />}
      />
      <FloatActionButton />
    </View>
  );
};
export default Users;
