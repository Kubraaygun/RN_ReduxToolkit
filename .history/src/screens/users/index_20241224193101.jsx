//import liraries
import React, {useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import {useSelector} from 'react-redux';
import UserCard from '../../components/users/usersCard';
import FloatActionButton from '../../components/ui/floatActionButton';
import {ADDNEWUSER} from '../../utils/routes';

// create a component
const Users = ({navigation}) => {
  const {users} = useSelector(state => state.users);

  return (
    <View style={defaultScreenStyle.container}>
      <FlatList
        ListEmptyComponent={
          <Text style={{textAlign: 'center'}}>
            Henuz Bir Kullanici Eklenmedi
          </Text>
        }
        data={users}
        renderItem={({item}) => <UserCard user={item} />}
      />
      <FloatActionButton onPress={() => navigation.navigate(ADDNEWUSER)} />
    </View>
  );
};
export default Users;
