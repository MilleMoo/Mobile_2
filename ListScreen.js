import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, Image} from "react-native";

const ListScreen = () => {
    const friends = [
        {name: 'Mom',status: "Mobile", time: "Sunday"},
        {name: 'DadB',status: "Phone", time: "Yesterday"},
        {name: 'mobile',status: "Mobile", time: "Sunday"},
        {name: 'DadD',status: "Phone", time: "Sunday"},
        {name: 'has',status: "Mobile", time: "Yesterday"},
        {name: 'DadF',status: "Phone", time: "Friday"},
        {name: 'eles',status: "Mobile", time: "Yesterday"},
        {name: 'DadH',status: "Phone", time: "Friday"},
    ]
    return (
        <View style = {styles.container}>\
        <Text style = {{ 
            fontSize: 50, 
            font: "bold",
            //marginBottom : 30,
            margin: 10,
            color: "#F3FCFF",
            justifyContent: "left",
            width: "100%",
            }}>Recent</Text>
        <FlatList
            keyExtractor={(item, index )=> index.name}
            data={friends}
            renderItem={({ item }) => { 
                return (
                    <TouchableOpacity style={styles.button} onPress={() => Alert.alert("Calling", "Calling to " + item.name)}>
                        <View style={{
                            margin: 0,
                            borderColor: "white",
                            borderTopWidth: 0,
                            borderLeftWidth: 0,
                            borderRightWidth: 0,
                            backgroundColor: "black",
                            borderWidth: 1,
                            width: "100%",
                            flexDirection: "row",
                            padding: 20,
                            paddingLeft: 15,
                        }}>
                            <Image source={{ uri: "https://cdn.marvel.com/u/prod/marvel/i/mg/6/80/66bb7142277fc/clean.jpg" }}
                                style={{
                                    width: 60,
                                    height: 60,
                                    borderRadius: 100,
                                    borderWidth: 2,
                                    borderColor: 'white',
                                }}></Image>
                            <View style={{
                                paddingRight: "50%",
                                marginLeft: 15,
                                paddingRight: 100,
                                width : "62%"
                            }}>
                                <Text style={{ 
                                    fontSize : 25,
                                    textAlign : "left",
                                    color: "#F3FCFF",
                                    marginBottom : 5,
                                }}>{item.name} </Text>
                                <Text style={{ fontSize: 15 , color: "gray"}}>{item.status}</Text>
                            </View>
                            <View style = {{ padding: 10,paddingTop: 20, width: 90 ,}}> 
                                <Text style={{ textAlign: 'right', fontSize: 15,color: "#F3FCFF"}}>{item.time}</Text>
                            </View>
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
        color: "black",
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor : "black",
    }
});

export default ListScreen;
