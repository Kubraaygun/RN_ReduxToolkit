//import liraries
import React, {useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import {useDispatch, useSelector} from 'react-redux';
import FloatActionButton from '../../components/ui/floatActionButton';
import {ADDNEWUSER} from '../../utils/routes';
import {getUsers} from '../../store/actions/userActions';
import RemoteUserCard from '../../components/users/remoteUserCard';

// create a component
const RemoteUsers = ({navigation}) => {
  const {users, pending} = useSelector(state => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <View style={defaultScreenStyle.container}>
     {
        pending? <ActivityIndicator/>
     }
      <FloatActionButton onPress={() => navigation.navigate(ADDNEWUSER)} />
    </View>
  );
};
export default RemoteUsers;
