//import liraries
import React from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import {
  compareName,
  getInitialNameSurname,
  getRandomColor,
} from '../../utils/function';
import ThemeColors from '../../theme/themeColors';
import {ArrowRight} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import {USERDETAIL} from '../../utils/routes';

// create a component
const RemoteUserCard = ({user}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate(USERDETAIL, {user: user})}
      style={styles.container}>
      <View>
        {user?.picture?.medium ? (
          <Image
            source={{uri: user?.picture?.medium}}
            style={{width: 70, height: 70}}
          />
        ) : (
          <View
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
              {getInitialNameSurname(user?.name.first, user?.name?.last)}
            </Text>
          </View>
        )}
      </View>

      <View style={{padding: 10, flex: 1}}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '500',
          }}>
          {' '}
          {compareName(user?.name.first, user?.name?.last)}
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '500',
          }}>
          {' '}
          {user.email}
        </Text>
      </View>

      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <ArrowRight size={25} color={ThemeColors.GRAY} />
      </View>
    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: ThemeColors.WHITE,
    padding: 10,
    borderRadius: 10,
    margin: 3,
  },
});

//make this component available to the app
export default RemoteUserCard;
