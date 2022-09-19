import React from 'react'
import { ImageBackground, StyleSheet, View, Text } from 'react-native'
import AppButton from '../components/AppButton'

const WelcomeScreen = () => {
  return (
    <ImageBackground 
        blurRadius={3}
        style={styles.background}
        source={require('../assets/background.jpeg')}>
            <View style={styles.logoContainer}>
                <Text style={styles.logo}>MY PRECIOUS</Text>
                <Text style={styles.logoSubtext}>Give your jewelries a second life</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <AppButton title='Login' onPress={()=>console.log('tapped')}/>
                <AppButton title='Sign up' color='black' onPress={()=>console.log('tapped')}/>
            </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    buttonsContainer: {
        padding: 20,
        width: '100%'
    },
    logoContainer: {
        height: 400,
        alignItems: 'center'
    },
    logo: {
        fontSize: '40px',
        fontWeight: 'bold'
    },
    logoSubtext: {
        fontSize: '24px'
    }
})

export default WelcomeScreen