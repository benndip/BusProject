import React, { Component } from 'react'
import { View, Text, ScrollView, TouchableOpacity, Platform} from 'react-native'
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Actions } from 'react-native-router-flux'
import MapboxGL from '@react-native-mapbox-gl/maps'

import styles from './SelectionBoard.styles'

import { SelectionBoardItem } from '../../components/'

const IS_ANDROID = Platform.OS === 'android';

class SelectionBoard extends Component {

    constructor(props) {
		super(props);
		this.state = {
			isAndriodPermissionGranted: false,
			isFetchingAndroidPermission: IS_ANDROID,
		}

    }
    
    async componentDidMount(){
        //check for android location permission
        if (IS_ANDROID) {
			const isGranted = await MapboxGL.requestAndroidLocationPermissions();
			this.setState({
				isAndriodPermissionGranted: isGranted,
				isFetchingAndroidPermission: true,
			})
        };

    //check if user locaation is on
        RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({interval: 10000, fastInterval: 5000})
        .then(data => {
            console.log(data);
        }).catch(err => {
            console.log("Error " + err.message + ", Code : " + err.code);
        });

          //start the location manager
        MapboxGL.locationManager.start();
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topView}>
                    <View style={styles.iconAndTextView}>
                        <TouchableOpacity>
                            <AntDesign name='arrowleft' size={25} color='#fff' />
                        </TouchableOpacity>
                        <Text style={styles.appNameText}>BusService</Text>
                    </View>
                    <Text style={styles.selectText}>Select your option</Text>
                </View>
                <View style={{ flex:1, marginTop: -80 }}>
                    <ScrollView contentContainerStyle={styles.scroll}>
                        <SelectionBoardItem
                            imagePath={require('../../../res/img/bd1.png')}
                            belowText='Board a bus'
                            onPress={()=>Actions.push('boardBus')}
                        />
                        <SelectionBoardItem
                            imagePath={require('../../../res/img/bs1.jpeg')}
                            belowText='Keep busy'
                            onPress={()=>Actions.push('tabNavigation')}
                        />
                        <SelectionBoardItem
                            imagePath={require('../../../res/img/fs1.png')}
                            belowText='speak to an agent'
                        />
                        <SelectionBoardItem
                            imagePath={require('../../../res/img/c1.png')}
                            belowText='Lay a complaint'
                        />
                        <SelectionBoardItem
                            imagePath={require('../../../res/img/r1.png')}
                            belowText='rate this app'
                        />
                        <SelectionBoardItem
                            imagePath={require('../../../res/img/s1.jpeg')}
                            belowText='Settings'
                        />
                    </ScrollView>
                </View>

            </View>
        )
    }
}

export default SelectionBoard