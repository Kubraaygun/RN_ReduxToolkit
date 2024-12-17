//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import {
  compareName,
  getInitialNameSurname,
  getRandomColor,
} from '../../utils/function';
import ThemeColors from '../../theme/themeColors';
import {Calendar, Call, Harmony, Man, Sms, Woman} from 'iconsax-react-native';

// create a component
const UserDetail = ({route}) => {
  const {user} = route.params;
  return (
    <View style={defaultScreenStyle.container}>
      <ScrollView>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 200,
            borderBottomColor: ThemeColors.GRAY,
            borderBottomWidth: 0.5,
          }}>
          <View
            style={{
              width: 85,
              height: 85,
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
              {getInitialNameSurname(user.name, user.surname)}
            </Text>
          </View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              marginTop: 10,
            }}>
            {compareName(user.name, user.surname)}
          </Text>
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 20,
            }}>
            <Sms />
            <Text style={{fontSize: 18, fontWeight: '500', marginLeft: 15}}>
              {user.email}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 20,
            }}>
            <Call />
            <Text style={{fontSize: 18, fontWeight: '500', marginLeft: 15}}>
              {user.phoneNumber}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 20,
            }}>
            {user.gender == 'Erkek' ? <Man /> : <Woman />}
            <Text style={{fontSize: 18, fontWeight: '500', marginLeft: 15}}>
              {user.gender}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 20,
            }}>
            <Calendar />
            <Text style={{fontSize: 18, fontWeight: '500', marginLeft: 15}}>
              {user.age}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

//make this component available to the app
export default UserDetail;
