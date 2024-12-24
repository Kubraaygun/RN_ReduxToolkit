//import liraries
import React, {useEffect} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import {useDispatch, useSelector} from 'react-redux';
import FloatActionButton from '../../components/ui/floatActionButton';
import {ADDNEWUSER} from '../../utils/routes';
import {getUsers} from '../../store/actions/userActions';
import RemoteUserCard from '../../components/users/remoteUserCard';
import ThemeColors from '../../theme/themeColors';

// create a component
const RemoteUsers = ({navigation}) => {
  const {users, pending} = useSelector(state => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers({results: 30}));
  }, []);
  return (
    <View style={defaultScreenStyle.container}>
      {pending ? (
        <ActivityIndicator size={'large'} color={ThemeColors.BLACK} />
      ) : (
        <FlatList
          ListEmptyComponent={
            <Text style={{textAlign: 'center'}}>
              Henuz Bir Kullanici Eklenmedi
            </Text>
          }
          keyExtractor={item => item.email}
          data={users}
          renderItem={({item}) => <RemoteUserCard user={item} />}
        />
      )}
      <FloatActionButton onPress={() => navigation.navigate(ADDNEWUSER)} />
    </View>
  );
};
export default RemoteUsers;
