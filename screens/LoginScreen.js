import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Alert,
  Easing,
  View,
  TextInput,
  TouchableOpacity,
  Animated,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { Field, reduxForm } from "redux-form";

const Login = ({ navigation }) => {
  const onPressLogin = () => {
    // Do something about login operation
    navigation.navigate("Home");
    Alert.alert("Welcome To The Recipe App", "Find a delicoius meal", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  };

  const onPressSignUp = () => {
    // Do something about signup operation
    navigation.navigate("SignUp");
  };
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  spinValue = new Animated.Value(0);

  //  set up animation
  Animated.loop(
    Animated.timing(this.spinValue, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true,
      delay: 1000,
    })
  ).start();

  const spin = this.spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  return (
    <View style={styles.container}>
      <Animatable.View animation="bounce" iterationCount={"infinite"}>
        <Animated.Text style={styles.title}> 🍽️ Recipes </Animated.Text>
      </Animatable.View>

      <Animated.Image
        style={{
          height: 120,
          width: 120,
          borderColor: "black",
          borderRadius: 95,
          borderWidth: 5,
          marginBottom: 20,
          transform: [{ rotate: spin }],
        }}
        source={require("../images/cartoon-chef-character-holding-plate-on-left-hand-mascot-logo-vector.jpg")}
      />
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="white"
          onChangeText={(text) => setState({ email: text })}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          secureTextEntry
          placeholder="Password"
          placeholderTextColor="white"
          onChangeText={(text) => setState({ password: text })}
        />
      </View>

      <TouchableOpacity onPress={onPressLogin} style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressSignUp} style={styles.loginBtn}>
        <Text style={styles.signupText}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 40,
    color: "black",

    borderColor: "white",
    borderStyle: "solid",
    borderWidth: 5,
    borderRadius: 20,
    marginBottom: 30,
    fontWeight: "bold",
    fontFamily: "AmericanTypewriter-Bold",
  },
  inputView: {
    width: "80%",
    backgroundColor: "orange",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "white",
    fontFamily: "AmericanTypewriter-Bold",
  },
  forgotAndSignUpText: {
    color: "white",
    fontSize: 11,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "orange",

    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    fontSize: 26,
    fontWeight: "bold",
    fontFamily: "AmericanTypewriter-Bold",
    color: "black",
  },
  signupText: {
    fontSize: 26,
    fontWeight: "bold",
    fontFamily: "AmericanTypewriter-Bold",
    color: "black",
  },
});
export default Login;
