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
} from "react-native";

export default function MessageScreen( {navigation, route} ) {
  
  const rout =  route.params.token || "unknown";
const headers = "Content-Type: multipart/form-data";
const [rep, setRep] = React.useState([]);

const token = rout.token ;

const request = {
  duration : "5",
  to : rout.email,
  image: "https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive.jpg"
};

// const req = {
//   duration : 5,
//   to : req.email,
//   image: "https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive.jpg
// };
const Content =  " multipart/form-data";
const header = {
 
  "Content-type": "multipart/form-data", 
  "token" : rout.token
};


const data = {
  "duration" : "5",
  "to" : rout.email,
  "image": "image.jpg"
};

// headers: {Accept: 'application/json, text/plain, */*', Content-Type: 'application/json'}
// axios.get("http://snapi.epitech.eu:8000/snap", 
// {data},
// {headers:header},
//  )
// .then((response) => { 
//   console.log(response);
//     if (response.status === 200) {
//       console.log(response)
//       // navigation.navigate("Camera", { token: response.data });
//     } else {
//       alert("error : " + response.data);
//     }
//   })
//   .catch((err) => { 

//       console.log(err);
//       // alert("An error occurred. Please try again later.");
//       // alert(err.response.data.data);
//     });


  
  

console.log(rout.token)
axios.post("http://snapi.epitech.eu:8000/snap", 
data,
{headers: header},
)

.then((response) => {

    if (response.status === 200) {
      console.log(response);

    } 
    else 
    {

  Alert.alert("error : " + response.data);

      }
    })

    .catch((err) => { 
      console.log(err);
      // Alert.alert(err.data);
      // alert("An error occurred. Please try again later.");
      
    });
  
      const lapsList = rep.slice(0,10).map((email) => {
        return (
          <View>
            <Text style={styles.text}> 
            {email.email}
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
    border: "1px solid window",
    margin: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "wildblue",
  },

});
