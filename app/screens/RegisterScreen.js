import React from 'react'
import { StyleSheet, Text } from 'react-native'
import * as Yup from 'yup'

import { AppForm, AppFormField, SubmitButton } from '../components/forms'
import Screen from '../components/Screen'

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    user: Yup.string().required().min(4).label('User'),
    password: Yup.string().required().min(4).label('Password')
})

const RegisterScreen = () => {
  return (
    <Screen style={{marginHorizontal: 5}}>
        <Text style={styles.logo}>My precious</Text>
        <AppForm 
            initialValues={{ email: '', password: '', user: ''}}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}>
            <AppFormField 
                icon='account'
                autoCapitalize='words'
                autoCorrect={false}
                placeholder='Name'
                keyboardType='default'
                textContentType='name'
                name='user'
            />
            <AppFormField 
                icon='email'
                autoCapitalize='none'
                autoCorrect={false}
                placeholder='Email'
                keyboardType='email-address'
                textContentType='emailAddress'
                name='email'
            />
            <AppFormField
                icon='lock'
                autoCapitalize='none'
                autoCorrect={false}
                placeholder='Password'
                secureTextEntry
                textContentType='password'
                name='password'
            />
            <SubmitButton title='Login'/>
        </AppForm>
    </Screen>
  )
}

const styles = StyleSheet.create({
    logo: {
        fontSize: '40px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        height: 80,
        alignSelf: 'center',
        marginTop: 70,
        marginBottom: 20
    }
})

export default RegisterScreen