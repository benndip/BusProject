import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
        alignItems: 'center',
        paddingTop: 45,
        flex: 1,
        
    },
    mainText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#d2dae2',
    },
    smallText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#d2dae2',
    },
    mainView1: {
        width: '100%',
        alignItems: 'center',
    },
    mainView2: {
        marginTop: 100,
        width: '99%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    lastText: {
        position: 'absolute',
        bottom: 29,
        fontSize: 13,
        fontWeight: '800',
        color: '#d2dae2'
    },
    image: {
        borderRadius: 10,
    }
});
export default styles;