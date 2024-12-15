import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
    const friends = [
        {name: 'A',age: 15, relation: "school"},
        {name: 'B',age: 20, relation: "Family"},
        {name: 'C',age: 24, relation: "school"},
        {name: 'D',age: 21, relation: "school"},
        {name: 'E',age: 30, relation: "Family"},
        {name: 'F',age: 20, relation: "school"},
        {name: 'G',age: 20, relation: "Family"},
        {name: 'H',age: 20, relation: "school"},
    ]
    return (
        <FlatList
            keyExtractor={friend => friend.name}
            data={friends}
            renderItem={({ item }) => { 
                return (
                    <View style={{
                        margin: 0,
                        marginLeft: 10,
                        marginRight: 200,
                        borderColor: "black",
                        backgroundColor: "#B8CBD8",
                        padding: 10,
                        borderWidth: 2,
                    }}>
                        <Text style={styles.TextStyle}>Friend {item.name} - {item.age}</Text>
                        <Text style={{ fontSize: 20 }}>{item.relation}</Text>
                    </View>
                )
            }}
        />
        //<View style={styles.container}>
        //   <Text style={styles.TextStyle}>this is the List Screen</Text>
        // </View>
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

export default ListScreen;