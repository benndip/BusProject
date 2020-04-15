import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        paddingTop: 15,
    },
    mainText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'indigo',
    },
    smallText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'indigo',
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
        color: 'indigo'
    },
    image: {
        borderRadius: 10,
    }
});
export default styles;