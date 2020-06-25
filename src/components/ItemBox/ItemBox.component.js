import React, { Component } from 'react';
import { Text, View, Animated, } from 'react-native';

import styles from './ItemBox.styles'

class ItemBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
          left: new Animated.Value(0),
        };
      }

    _slideLeft=()=>{
        Animated.timing(this.state.left,{
            toValue:-10,
            duration:4000,
            useNativeDriver: false
        }).start(() => {
            Animated.timing(this.state.left, {
              toValue: 1,
              duration: 700,
              useNativeDriver: false
            }).start()
          })
    }

    componentDidMount=()=>{
        this._slideLeft()
    }

    render() {
        return (
            <Animated.View style={[ styles.container, { left:this.state.left } ]}>
                <View onPress={this.props.onPress} style={styles.touch}>
                    <Text style={styles.text}>{this.props.textItem}</Text>
                </View>
            </Animated.View>

        );
    }
}

export default ItemBox;
