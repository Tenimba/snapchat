// import { Text, View, StyleSheet } from "react-native";
import React, { Component } from "react";
import { Camera } from "expo-camera";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native"
import axios from "axios";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
  StyleSheet,
  TextInput,
  canva,
} from "react-native";

export default function MessageScreen( {navigation, route} ) {
  
  const req =  route.params.token || "unknown";
const headers = "Content-Type: multipart/form-data";
const [rep, setRep] = React.useState([]);


axios.get("http://snapi.epitech.eu:8000/all", {headers:req})
.then((response) => { 
    if (response.status === 200) {
const rep = response.data.data
    setRep(rep) 
} else {
  Alert.alert("error : " + response.data);
      }
    })
    .catch((err) => { 
      console.log(err);
      Alert.alert(err.data);
      alert("An error occurred. Please try again later.");
    });
  
      const lapsList = rep.slice(0,10).map((email) => {
        return (
          <View>
            <Text style={styles.text} 
            onPress={() => navigation.navigate("Chat", { token: email.email })}>
            <Text style={styles.carre}>recu</Text>
              {email.email}
            </Text>
          <Text>
            </Text>
            </View>
        )
      })
      return (
        <View style={styles.container}>
        <Text>Your Message</Text>
          {lapsList}
        </View>
      );
      


}

const styles = StyleSheet.create({
  test: {
    flex: 1,
  },
  text : {
    fontSize: 20,
    color: "black",
    border: "1px solid black",
    margin: 10,
  },
  container: {
 
    height: "100%",
    width: "100%",
    backgroundColor: "wildblue",
  },
  carre: {
    fontSize: 20,
    color: "black",
    border: "1px solid window",
    margin: 10,
    width: "5%",
    height: "50%",
    textAlign: "center",
    backgroundColor: "blue",
  },

});

