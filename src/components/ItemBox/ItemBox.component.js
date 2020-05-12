import React, { Component } from 'react';
import { Text, TouchableOpacity, Animated, } from 'react-native';

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
            toValue:-90,
            duration:4300
        }).start(() => {
            Animated.timing(this.state.left, {
              toValue: 1,
              duration: 700,
            }).start()
          })
    }

    componentDidMount=()=>{
        this._slideLeft()
    }

    render() {
        return (
            <Animated.View style={[ styles.container, { left:this.state.left } ]}>
                <TouchableOpacity onPress={this.props.onPress} style={styles.touch}>
                    <Text style={styles.text}>{this.props.textItem}</Text>
                </TouchableOpacity>
            </Animated.View>

        );
    }
}

export default ItemBox;
