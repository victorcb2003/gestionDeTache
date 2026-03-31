import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    conteiner : {
        flex:1,
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 30,
    },
    button: {
        width : "90%",
        paddingVertical : 5,
        borderRadius : 15,
        backgroundColor: "red",
        color: "white",
        textAlign: "center"
    },
    inputs : {
        display:"flex",
        flexDirection:"row",
        padding:10,
        width : "60%"
        
    }
})