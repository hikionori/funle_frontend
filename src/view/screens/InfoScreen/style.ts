import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 28,
        padding: 26,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        alignContent: "center",
        justifyContent: "center",
    },
    subtitle: {
        fontSize: 15,
        textAlign: "center",
        fontFamily: "sans-serif",
        fontWeight: "bold",
        color: "grey",
    },
    footer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 50,
        backgroundColor: '#E67B02',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingLeft: 20
    }
});

export default styles;