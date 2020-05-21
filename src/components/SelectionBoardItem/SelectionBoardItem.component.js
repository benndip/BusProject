import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './SelectionBoardItem.styles'

class SelectionBoardItem extends Component {
    render() {
        return (
            <TouchableOpacity
                onPress={this.props.onPress}
                activeOpacity={0}
                style={{ ...styles.container, ...this.props.style }}
            >
                <View style={styles.imageView}>
                    <Image style={styles.image} source={this.props.imagePath} />
                </View>
                <Text style={styles.belowText}>{this.props.belowText}</Text>
            </TouchableOpacity>
        )
    }
}

export default SelectionBoardItem
