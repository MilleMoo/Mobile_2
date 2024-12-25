import React from "react";
import { View, Text, StyleSheet ,Button} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style = {{ marginBottom: 20 }}>
                <Button title="Go to List Demo"onPress={() => navigation.navigate("ListScreen")} color={"red"}></Button>
            </View>
            <View style = {{ marginBottom: 20 }}>
                <Button title="Go to Modal Demo" onPress={() => navigation.navigate("Modal")}color={"blue"}></Button>
            </View>
            <View style = {{ marginBottom: 20 }}>
                <Button title="Go to Swipe Demo" onPress={() => navigation.navigate("Swipe")}color={"green"}></Button>
            </View>
            <View style = {{ marginBottom: 20 }}>
                <Button title="Go to NewList Demo" onPress={() => navigation.navigate("NewList")}color={"green"}></Button>
            </View>
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
        alignItems: "center",
        backgroundColor: "gray",
        paddingTop: 10,
        paddingRight: 20,
        paddingBottom: 30,
        paddingLeft: 40,
    }
});

export default HomeScreen;
