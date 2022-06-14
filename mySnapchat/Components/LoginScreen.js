import React, { Component } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
  StyleSheet,
  TextInput,
  Button,
  RecyclerViewBackedScrollViewComponent,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { FontAwesome5 } from "@expo/vector-icons";
import axios from "axios";
import menu from './menuScreen'; 
import { Redirect } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native"
import {useState} from 'react';


export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false)

  const doLogin = () => {

    const req = {
        email: email,
        password: password,
      };
   const headers = "Content-Type: application/json";
      
   
    axios.post("http://snapi.epitech.eu:8000/connection", req , {headers:headers})
    .then((response) => { 
      setLoading(false);
        if (response.status === 200) {
          console.log(response)
          navigation.navigate("Camera", { token: response.data });
        } else {
          alert("error : " + response.data);
        }
      })
      .catch((err) => { 
          setLoading(false);
          console.log(err);
          alert("An error occurred. Please try again later.");
          alert(err.response.data.data);
         navigation.navigate("Login");
        });
  };


    return (
      <View style={styles.register1}>
  
        <MaterialCommunityIcons name="snapchat" size={80} color="black" style={styles.snaplogo} />

        <Animatable.Text
          style={styles.header}
          animation="bounceOut"
          iterationCount={"1"}
          direction="alternate-reverse"
        >

          Connectez-vous
        </Animatable.Text>
        <KeyboardAvoidingView style={styles.reg}>
          <Text style={styles.label}>Email</Text>
 
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            placeholder="Email"
            type="email"
            autoCorrect={false}
            returnKeyType="next"
            onChangeText={(text) => setEmail(text)}
            // onChangeText={(value) => this.onChangeHandle("email", value)}
          />

          <Text style={styles.label}>Mot de passe</Text>
          <TextInput
            style={styles.input}
         
            autoCapitalize="none"
            placeholder="Password"
            type="password"
            autoCorrect={false}
            returnKeyType="next"
            onChangeText={(text) => setPassword(text)}
            // onChangeText={(value) => this.onChangeHandle("password", value)}
          />

          <TouchableOpacity
            style={{
              ...styles.btn,
            }}
            onPress={() => 
              doLogin()}
          >
            <Text style={styles.loginText}>Se Connecter</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    );
  }


const styles = StyleSheet.create({
  btn: {
    alignSelf: "stretch",
    alignItems: "center",
    padding: 20,
    marginTop: 20,
    borderRadius: 25,
    backgroundColor: "red",
  },
  loginText: {
    // color: "#fff",
    color:"red",
    fontSize: 17,
    fontWeight: "bold",
  },
  register1: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "yellow",
  },
  header: {
    fontSize: 30,
    color: "black",
    textAlign: "center",
    justifyContent: "center",
    marginBottom: 400,
    borderBottomWidth: 4,
    borderBottomColor: "#fff",
    width: "80%",
    paddingBottom: 10,
    position: "relative",
    top: 150,
  },
  input: {
    height: 55,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: "#DDDDDD",
    padding: 10,
    marginBottom: 10,
  },
  reg: {
    backgroundColor: "#fff",
    width: "95%",
    borderRadius: 8,
    padding: 30,
    bottom: 200,
  },
  label: {
    fontSize: 20,
    textAlign: "center",
    paddingBottom: 20,
  },
  subbutton: {
    backgroundColor: "#36485f",
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
    width: "20%",
  },
  snaplogo: {
    top: 100,
    position: "relative",
  },
});
