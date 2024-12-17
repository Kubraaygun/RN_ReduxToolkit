//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import Input from '../../components/ui/input';
import Button from '../../components/ui/button';
import {Formik} from 'formik';

// create a component
const AddNewUser = () => {
  return (
    <View style={defaultScreenStyle.container}>
      <Formik
        initialValues={{email: ''}}
        onSubmit={values => console.log(values)}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View>
            <Input title="name" placeholder="Please set name" />
            <Input title="surname" placeholder="Please set surname" />
            <Input title="Phone Number" placeholder="Please set phone number" />
            <Input title="E-mail" placeholder="Please set E-mail" />
            <Input title="Gender" placeholder="Please set gender" />
            <Input title="Age" placeholder="Please set age" />
            <Button title="Save" status="success" />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default AddNewUser;
