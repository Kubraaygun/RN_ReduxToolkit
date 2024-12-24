//import liraries
import React, {useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import {useDispatch, useSelector} from 'react-redux';
import UserCard from '../../components/users/usersCard';
import FloatActionButton from '../../components/ui/floatActionButton';
import {ADDNEWUSER} from '../../utils/routes';
import {getUsers} from '../../store/actions/userActions';

// create a component
const Users = ({navigation}) => {
  const {users} = useSelector(state => state.users);
  return (
    <View style={defaultScreenStyle.container}>
      <FlatList
        ListEmptyComponent={
          <Text
            style={{
              textAlign: 'center',
              margin: 30,
              padding: 25,
              fontSize: 22,
              color: themeColors.orange,
              fontWeight: '700',
            }}>
            Henüz bir kullanıcı eklenmedi!
          </Text>
        }
        data={users}
        renderItem={({item}) => <UserCard user={item} />}
      />
      <FloatActionButton
        onPress={() => navigation.navigate(ADDNEWUSER)}
        style={{marginbottom: 5}}
      />
    </View>
  );
};

export default Users;
