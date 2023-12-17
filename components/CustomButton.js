import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { scale } from "react-native-size-matters";
import { Colors, Fonts } from "../Theme";

const CustomButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.signUpBtn} onPress={onPress}>
      <Text style={styles.signupText}> 🚀Submit</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

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
  signUpBtn: {
    width: "80%",
    backgroundColor: "orange",
    flex: 1,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
    marginLeft: 40,
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
    textAlign: "center",
  },
});
