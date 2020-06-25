import React, { Component } from 'react'
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'

import styles from './BoardBus.styles'
import theme from '../../theme'
import { Switch, Card, RegionAndTown } from '../../components'
import { Regions } from '../../../res/data'

class BoardBus extends Component {

  constructor(props) {
    super(props);
    this.state = {
      time: '',
      date: '',
      onIsShowing: true
    }
  }

  componentDidMount() {
    setInterval(() => {
      let d = new Date();
      this.setState({
        time: d.toLocaleTimeString(),
        date: d.toLocaleDateString()
      })
    }, 1000)
  }

  switchOnHandler = () => {
    this.setState({ onIsShowing: false })
  }

  switchOffHandler = () => {
    this.setState({ onIsShowing: true })
  }

  render() {

    const { onIsShowing } = this.state

    return (
      <View style={styles.container}>
        <View style={styles.dateAndTimeView}>
          <Text>Time {this.state.time}</Text>
          <Text>Date {this.state.date}</Text>
        </View>
        <Card style={styles.bulbTextAndSwitchView}>
          <View style={styles.viewForImage}>
            {onIsShowing ?
              (<Image
                source={require('../../../res/img/bubld~2.jpg')}
                style={{ width: 60, height: 90, marginLeft: 10 }}
              />) : (<Image
                source={require('../../../res/img/bubld~3.jpg')}
                style={{ width: 63, height: 90, }}
              />)}
          </View>
          <View style={styles.viewForText}>
            <Text style={styles.text}>
              {`Please Select your Region and
                      Town
                `}</Text>
          </View>
          <Switch
            onText='ON'
            offText='OFF'
            switchOnPress={this.switchOnHandler}
            switchOffPress={this.switchOffHandler}
            onStyle={{ backgroundColor: onIsShowing ? theme.PRIMARY_COLOR : 'rgba(25,42,86,0.2)' }}
            offStyle={{ backgroundColor: onIsShowing ? 'rgba(25,42,86,0.2)' : theme.PRIMARY_COLOR }}
          />
        </Card>
        <View style={styles.viewForVerticalScroll}>
          <ScrollView>
            {Regions.map((items) =>
              <RegionAndTown
                textItem={items.regionName}
                key={items.id}
              >
                {items.towns.map((towns) =>
                  <TouchableOpacity style={styles.townTouch}>
                    <Text>{towns}</Text>
                  </TouchableOpacity>
                )}
              </RegionAndTown>
            )}
          </ScrollView>
        </View>
      </View>
    )
  }
}

export default BoardBus
