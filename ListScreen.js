import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert} from "react-native";

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
        <View style = {styles.container}>\
        <Text style = {{ 
            fontSize : 30, 
            //marginBottom : 30,
            margin : 50,
            color: "#F3FCFF",
            }}>ListFriendName</Text>
        <FlatList
            keyExtractor={friend => friend.name}
            data={friends}
            renderItem={({ item }) => { 
                return (
                        <TouchableOpacity style={styles.button} onPress={() => Alert.alert("Calling","Calling to Friend "+ item.name)}>
                        <View style={{
                            margin: 0.5,
                            borderColor: "#01497c",
                            backgroundColor: "#2c7da0",
                            padding: 5,
                            paddingLeft: 70,
                            paddingRight: 70,
                            borderWidth: 1.5,
                            borderRadius: 10
                        }}>
                            <Text style={styles.TextStyle}>Friend {item.name} - Age {item.age}</Text>
                            <Text style={{ fontSize: 20,color: "#F3FCFF",textAlign : "center" }}>{item.relation}</Text>
                        </View>
                        </TouchableOpacity>
                )
            }}
            />
        </View>
        //<View style={styles.container}>
        //   <Text style={styles.TextStyle}>this is the List Screen</Text>
        // </View>
    );
};

const styles = StyleSheet.create({
    TextStyle: {
        fontSize : 28,
        textAlign : "center",
        color: "#F3FCFF",
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor : "#01497c",
    }
});

export default ListScreen;
