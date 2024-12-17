//import liraries
import React from 'react';
import {View, ScrollView} from 'react-native';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import Input from '../../components/ui/input';
import Button from '../../components/ui/button';
import {Formik} from 'formik';
import newUserSchema from '../../utils/validationSchema';

// create a component
const AddNewUser = () => {
  return (
    <ScrollView style={defaultScreenStyle.container}>
      <Formik
        initialValues={{
          name: '',
          surname: '',
          phoneNumber: '',
          email: '',
          gender: '',
          age: '',
        }}
        validationSchema={newUserSchema}
        onSubmit={values => console.log(values)}>
        {({handleChange, handleBlur, handleSubmit, values, error}) => (
          <View>
            <Input
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
              title="name"
              placeholder="Please set name"
            />
            <Input
              onChangeText={handleChange('surname')}
              onBlur={handleBlur('surname')}
              value={values.surname}
              title="surname"
              placeholder="Please set surname"
            />
            <Input
              keyboardType="phone-pad"
              onChangeText={handleChange('phoneNumber')}
              onBlur={handleBlur('phoneNumber')}
              value={values.phoneNumber}
              title="Phone Number"
              placeholder="Please set phone number"
            />
            <Input
              keyboardType="email-address"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              title="E-mail"
              placeholder="Please set E-mail"
            />
            <Input
              onChangeText={handleChange('gender')}
              onBlur={handleBlur('gender')}
              value={values.gender}
              title="Gender"
              placeholder="Please set gender"
            />
            <Input
              keyboardType="number-pad"
              onChangeText={handleChange('age')}
              onBlur={handleBlur('age')}
              value={values.age}
              title="Age"
              placeholder="Please set age"
            />
            <Button onPress={handleSubmit} title="Save" status="success" />
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

export default AddNewUser;
