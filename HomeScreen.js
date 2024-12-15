import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.TextStyle}>this is the home screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    TextStyle: {
        fontSize : 28,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default HomeScreen;