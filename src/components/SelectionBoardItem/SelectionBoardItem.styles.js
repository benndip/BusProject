import { StyleSheet } from 'react-native'

import theme from '../../theme'

const styles = StyleSheet.create({
    container: {
       width: '45%',
       height: 160,
       borderRadius: 5,
       alignItems: 'center',
       backgroundColor: theme.WHITE_COLOR,
       marginVertical: 5,
    },
    imageView: {
        width: '100%',
        height: '70%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '60%',
        height: '70%',
    },
    belowText: {
        color: 'rgba(64, 64, 122,1.0)',
        fontSize: theme.FONT_SIZE_MEDIUM,
        fontWeight: theme.FONT_WEIGHT_MEDIUM
    }
})

export default styles