import React, {useState} from "react";
import Icon  from "react-native-vector-icons/MaterialIcons";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, Image, Modal} from "react-native";

const ListScreen = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [selectedItem, setSelectedItem] = useState(null);
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
                    <View>
            <Modal
                transparent={true}
                animationType="fade"
                onRequestClose={() => setIsVisible(false)}
                visible = {isVisible}
            >
                <View style = {{ 
                    flex: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "black",
                    height: "100%",
                }}>
                    <View style = {{
                        width: "100%",
                        height: "80%",
                        padding: 20,
                        alignItems: "center",
                    }}>
                        <Image source={{ uri: "https://cdn.marvel.com/u/prod/marvel/i/mg/6/80/66bb7142277fc/clean.jpg" }}
                                style={{
                                    width: 250,
                                    height: 250,
                                    borderRadius: 200,
                                    borderWidth: 2,
                                    borderColor: 'white',
                                    marginTop: 90,
                                }}></Image>
                        <Text style={{ 
                                    width: "100%",
                                    marginLeft: 20,
                                    fontSize : 40,
                                    textAlign : "center",
                                    color: "#F3FCFF",
                                    marginBottom : 5,
                                    fontWeight: "bold",
                                }}>{selectedItem?.name}  </Text>
                        <Text style={{ 
                                    width: "100%",
                                    fontSize : 20,
                                    textAlign : "center",
                                    color: "#F3FCFF",
                                    marginBottom : 30,
                                }}>is calling...</Text>
                        <TouchableOpacity
                                style={styles.IconButton}
                                onPress={() => setIsVisible(false)}>
                                    <View style = {{ 
                                        backgroundColor:"red",
                                        borderRadius: 50,
                                        paddingVertical: 10,
                                        paddingHorizontal: 20,
                                    }}>
                                        <Icon name = "call-end" size = {24} color= "white"></Icon>
                                    </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
                    <TouchableOpacity style={styles.button} onPress={() => {
                            setIsVisible(true); 
                            setSelectedItem(item);
                        }}>
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
                    </View>
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
