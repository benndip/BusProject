import { StyleSheet } from 'react-native'

import theme from '../../theme'
const styles = StyleSheet.create({
    container: {
        height: 55,
        backgroundColor: '#2bcbba',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: theme.WHITE_COLOR,
        fontSize: theme.FONT_SIZE_SMALL,
        fontWeight: theme.FONT_WEIGHT_MEDIUM
    }
});
export default styles