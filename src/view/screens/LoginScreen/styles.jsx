import { StyleSheet } from "react-native";

export default StyleSheet.create({
    bgImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center",
    },
    btn: {
        backgroundColor: "#E67B02",
        padding: 10,
        borderRadius: 40,
        width: 160,
        height: 50,
        alignItems: "center",
        justifyContent: "center",

        // shadow to bottom
        shadowColor: "#E67B02",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.82,
        shadowRadius: 3.46,

        elevation: 9,
    },
    textField: {
        backgroundColor: "white",
        padding: 10,
        paddingLeft: 20,
        borderRadius: 40,
        width: 300,
        height: 50,
        marginBottom: 10,
        borderColor: "black",
        opacity: 0.54,
        borderWidth: 1,
    },
});
