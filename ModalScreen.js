import React,{useState} from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { View, Text, StyleSheet, Modal,Button } from "react-native";

const ModalScreen = () => {
    const [isVisible, setIsVisible] = useState(false)
    return (
        <View style = {styles.container}>
            <Text style={styles.TextStyle}>this is Modal</Text>
            <TouchableOpacity
                            style={styles.IconButton}
                            onPress={() => setIsVisible(true)}>
                        <Icon name = "call" size = {24} color= "green"></Icon>
                    </TouchableOpacity>
            <Modal
                transparent={true}
                animationType="fade"
                onRequestClose={() => setIsVisible(false)}
                visible = {isVisible}
            >
                <View style = {styles.modalView}>
                <View style = {styles.Modalcontainer}>
                    <Text style = {styles.title}>
                        กำลังโทรหา....
                    </Text>
                    <Text style = {styles.msg}>
                        อ. ฮาแลนด์
                    </Text>
                        <TouchableOpacity
                            // style={styles.modalButton}
                            style={styles.IconButton}
                            onPress={() => setIsVisible(false)}>
                        <Icon name = "call-end" size = {24} color= "red"></Icon>
                        {/* <Text style = {styles.modalButtontext}>
                            ยกเลิก
                        </Text> */}
                    </TouchableOpacity>
                </View>
                </View>
            </Modal>
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
    },
    Modalcontainer: {
        width: 300,
        backgroundColor: "pink",
        borderRadius: 10,
        padding: 20,
        alignItems: "center",
        elevation: 5,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        margin: 10
    },
    msg: {
        fontSize: 20,
        textAlign: "center",
        marginBottom : 10
    },
    modalButton: {
        backgroundColor: "red",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    modalButtontext:{
        color: "white",
        fontSize: 18,
        fontWeight: "bold"
    },
    modalView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "gray"
    },
    IconButton: {
        backgroundColor: "white",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    }
});


export default ModalScreen