import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';

const MyButton = ({title, onPress, backgroundColor}) => {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor}]} onPress={onPress}>
            <Text style = {styles.text}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#959d90",
        borderRadius: 10,
        alignItems: "center",
        padding: 10,
    },
    text: {
        fontSize: 18,
        color: "#efefe9",
        fontWeight: "bold"
    }
});

export default MyButton;