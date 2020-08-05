import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import styles from './FinallyBoard.styles'

class FinallyBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> {this.props.regionName}, {this.props.townName} </Text>
      </View>
    );
  }
}

export default FinallyBoard;
