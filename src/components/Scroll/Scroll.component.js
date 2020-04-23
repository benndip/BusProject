import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import { ItemBox } from '../../components'
import { Regions } from '../../../res/data'

class Scroll extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                {Regions.map((item) => (
                    <ItemBox textItem={item.regionName} key={item.id} />
                ))}
            </ScrollView>
        );
    }
}

export default Scroll;
