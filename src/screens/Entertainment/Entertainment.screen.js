import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './Entertainment.styles'

class Entertainment extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Entertainment </Text>
      </View>
    );
  }
}

export default Entertainment;
