import React, { Component } from 'react';
import { Alert, ScrollView } from 'react-native';

import { ItemBox } from '../../components'
import { Regions } from '../../../res/data'

class Scroll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showRegions: true,
            showTown: false
        };
    }

    // changingStates = id => {
    //     return(
    //         Regions.map(id=>(
    //             <ItemBox
    //                     textItem={item.regionName}
    //                     key={item.id}
    //                     onPress={this.changingStates()}

    //                 />
    //         ))
    //     )
    // }

    render() {
        return (
            <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                {Regions.map((item) => (
                    <ItemBox
                        textItem={item.regionName}
                        key={item.id}
                       // onPress={this.changingStates(id)}

                    />
                ))}
            </ScrollView>
        );
    }
}

export default Scroll;
