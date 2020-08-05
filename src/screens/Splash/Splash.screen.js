import React, { useEffect } from 'react'
import { Animated, Dimensions, View, Text, ImageBackground, StatusBar } from 'react-native'
import MapboxGL from '@react-native-mapbox-gl/maps'


import styles from './Splash.styles'

const Splash = () => {

    let initials = {
        _animatedHeight: new Animated.Value(120),
        _animatedWidth: (new Animated.Value(120)),
    }


    const animateHeight = () => {
        const height = (Dimensions.get('window').height) / 2
        Animated.timing(initials._animatedHeight, {
            toValue: height,
            duration: 5000,
            useNativeDriver:false
        }).start()
    }
    const animateWidth = () => {
        const width = (Dimensions.get('window').width) / 1.1
        Animated.timing(initials._animatedWidth, {
            toValue: width,
            duration: 5000,
            useNativeDriver:false
        }).start()
    }

    useEffect(() => {
        animateHeight()
        animateWidth()
        MapboxGL.locationManager.start();

    }, [])

    return (
        <View style={styles.container}>
            <StatusBar barStyle='dark-content'  backgroundColor='transparent' />
            <ImageBackground
                source={require('../../../res/img/splashBackground.jpeg')}
                style={styles.imageBackground}
                blurRadius={0.4}
            >
                <View style={styles.mainView1}>
                    <Text style={styles.mainText}>Welcome To Bus Service</Text>
                    <Text style={styles.smallText}>Board a Bus at your convenience and time</Text>
                </View>
                <View style={styles.mainView2} >
                    <Animated.Image
                        style={[styles.image, { height: initials._animatedHeight, width: initials._animatedWidth, }]}
                        source={require('../../../res/img/splash.jpeg')}
                    >
                    </Animated.Image>
                </View>
                <Text style={styles.lastText}>Powered by Itech</Text>
            </ImageBackground>
        </View>
    )
}

export default Splash
