//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {compareName, getInitialNameSurname} from '../../utils/function';
import ThemeColors from '../../theme/themeColors';
import {ArrowRight} from 'iconsax-react-native';

// create a component
const UserCard = ({user}) => {
  return (
    <View style={styles.container}>
      <View>
        <View
          style={{
            width: 70,
            height: 70,
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
        <Text
          style={{
            fontSize: 18,
            fontWeight: '500',
          }}>
          {' '}
          {user.email}
        </Text>
      </View>

      <View>
        <ArrowRight size={25} color={ThemeColors.Gray} />
      </View>
    </View>
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
export default UserCard;
