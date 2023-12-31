import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
    },
    subtitle: {
        fontSize: 15,
        textAlign: "center",
        fontFamily: "sans-serif",
        fontWeight: "bold",
        color: "grey",
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        alignContent: "center",
        justifyContent: "center",
    },
    row: {
        flexDirection: "row",
    },
})

export default styles;