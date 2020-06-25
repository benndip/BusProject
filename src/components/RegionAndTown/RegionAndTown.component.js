import React from 'react';
import { View, ScrollView } from 'react-native'

import styles from './RegionAndTown.styles'
import { ItemBox,Card } from '../../components'

const RegionAndTown = ({ textItem, children }) => {
    return (
        <View style={styles.container}>
            <ItemBox
                textItem={textItem}
            />
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ alignItems: 'center', }}>
                {children}
            </ScrollView>
        </View>
    );
}

export default RegionAndTown