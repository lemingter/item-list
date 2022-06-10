import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: 40,
    },

    item: {
        margin: 5,
        padding: 5,
        color: "slategray",
        backgroundColor: "ghostwhite",
        textAlign: "center",
    },

    filter: {
        height: 40,
        width: 200,
    },

    controls: {
        fex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

    }
})