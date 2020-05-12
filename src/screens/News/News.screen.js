import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './News.styles'
class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems: 'center',}}>
                <Text>This is where you see news</Text>
            </View>
    );
  }
}

export default News;
