import React, { Component } from 'react';
import { View, SafeAreaView,Linking } from 'react-native';

import MapboxGL from '@react-native-mapbox-gl/maps'
import Geolocation from '@react-native-community/geolocation';

import styles from './Maps.styles'

MapboxGL.setAccessToken("pk.eyJ1IjoiYmVubmRpcCIsImEiOiJjazRtdWExYWwweHA4M2tuNTljbmxjcjlmIn0.ji9iFK1hYN1sP1H-Kl99Rw");

// const IS_ANDROID = Platform.OS === 'android';


class Maps extends Component {

	constructor(props) {
		super(props);
		this.state = {
			// isAndriodPermissionGranted: false,
			// isFetchingAndroidPermission: IS_ANDROID,
			showUserLocation: true,
			latitude: 0.0,
			longitude: 0.0,
			error: null
		}

	}
	
	 async componentDidMount() {
		
		
        // if (IS_ANDROID) {
		// 	const isGranted = await MapboxGL.requestAndroidLocationPermissions();
		// 	this.setState({
		// 		isAndriodPermissionGranted: isGranted,
		// 		isFetchingAndroidPermission: true,
		// 	})
		// };
		
		Geolocation.getCurrentPosition(info => {
			let lat = parseFloat(info.coords.latitude);
			let long = parseFloat(info.coords.longitude);
			this.setState({
				latitude: lat,
				longitude: long
			});
			console.log(info)
		}, 
		error=>this.setState({ error: error.message }),
		{ enableHighAccuracy:true, timeout: 2000, maximumAge: 2000 }
		
	);

		 MapboxGL.locationManager.start();
	}

	componentWillUnmount() {
		setTimeout(()=>{
			MapboxGL.locationManager.start();
		},0.00000000000001)
		
	  }

	onUserLocationUpdate(location) {
		this.setState({
			latitude: location.coords.latitude,
			longitude: location.coords.longitude,
		});
	}

	render() {
		return (
			<SafeAreaView style={styles.container}>
				<View style={styles.container}>
					<MapboxGL.MapView
						ref={c => (this._map = c)}
						zoomLevel={14}
						onUserLocationUpdate={this.onUserLocationUpdate}
						centerCoordinate={[this.state.longitude, this.state.latitude][0]}
						style={styles.container}
						onPress={() => alert("This is your Location:" + this.state.latitude+","+this.state.longitude)}
						userTrackingMode={MapboxGL.UserTrackingModes.Follow}
					>
						<MapboxGL.Camera
							zoomLevel={14}
							animationMode={'flyTo'}
							animationDuration={2000}
							ref={c => (this.camera = c)}
							centerCoordinate={[this.state.longitude, this.state.latitude]}
						/>
						{/*<MapboxGL.PointAnnotation
							id="yes"
							title="Buea"
							draggable
							snippet="ok"
							coordinate={[this.state.longitude, this.state.latitude]}
						/>*/}
						<MapboxGL.UserLocation 
							onPress={()=>{alert(this.state.latitude,this.state.latitude)}}
							showsUserHeadingIndicator
							animated
						/>
						</MapboxGL.MapView>
					</View>
			</SafeAreaView>
		)
	}
}

export default Maps