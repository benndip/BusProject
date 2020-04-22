import React from 'react'
import { View, Text, ImageBackground, StatusBar } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider';
import { Actions } from 'react-native-router-flux'

import { dataForOnboarding } from '../../../res/data'
import styles from './Onboarding.styles'

class Onboarding extends React.Component {
  _renderItem = ({ item }) => {
    return (
      <ImageBackground style={styles.slide} source={item.image}>
        <Text style={styles.text}>{item.text}</Text>
      </ImageBackground>
    );
  };

  _keyExtractor = (item) => item.text;

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent backgroundColor="transparent" />
        <AppIntroSlider
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          data={dataForOnboarding}
          bottomButton
          showSkipButton
          showPrevButton
          onDone={() => { Actions.push("authentication") }}
        />
      </View>
    );
  }
}
export default Onboarding
