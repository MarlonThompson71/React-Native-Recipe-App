import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { Field, reduxForm } from "redux-form";
import { scale } from "react-native-size-matters";
import {
  passwordRequired,
  emailRequired,
  mobileRequired,
  nameRequired,
  validateEmail,
  validatePassword,
  validatePhoneno,
} from "../Services/utils/validations";

import SuccessfullModal from "./SuccessfullModal";
import { Strings } from "../Constants";
import { Styles } from "../Theme";
import { CustomButton, FormInput } from "../components";

const SignUp = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // handles submission of form
  const onSubmit = (values) => {
    // values will be object of key and value pairs
    // keys are basically field names
    setIsModalOpen(true);
  };

  const closeModalHandler = () => {
    // so form will be reset when modal is going to close
    props.reset();
    setIsModalOpen(false);
  };

  // creating refs to focus next input after submit editting
  const field2Ref = useRef();
  const field3Ref = useRef();
  const field4Ref = useRef();

  return (
    <SafeAreaView style={Styles.flexOne}>
      <KeyboardAvoidingView
        behavior="height"
        keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0}
        style={Styles.flexOne}
      >
        <ScrollView>
          <Text style={styles.title}>Fill Out The Form Below</Text>

          <View style={Styles.container}>
            {/* Field is used to connect each individual input to redux store */}
            <Field
              name="fullName"
              allowOnlyChar // so no special char or digit will be allowed
              label={Strings.nameFieldLabel}
              placeholder={Strings.nameFieldPlaceholder}
              component={FormInput}
              blurOnSubmit={false} // to remove keyboard flickering
              validate={[nameRequired]}
              returnKeyType="next"
              onSubmitEditing={() => field2Ref.current.focus()} // to focus next input on submit
            />
            <Field
              name="email"
              refField={field2Ref}
              keyboardType="email-address"
              label={Strings.emailFieldLabel}
              placeholder={Strings.emailFieldPlaceholder}
              component={FormInput}
              blurOnSubmit={false}
              validate={[emailRequired, validateEmail]}
              returnKeyType="next"
              onSubmitEditing={() => field3Ref.current.focus()}
            />
            <Field
              name="mobileNo"
              refField={field3Ref}
              keyboardType="phone-pad"
              label={Strings.mobileNoFieldLabel}
              placeholder={Strings.mobileNoFieldPlaceholder}
              maxLength={10}
              blurOnSubmit={false}
              component={FormInput}
              validate={[mobileRequired, validatePhoneno]}
              returnKeyType="next"
              onSubmitEditing={() => field4Ref.current.focus()}
            />
            <Field
              name="password"
              refField={field4Ref}
              label={Strings.passFieldLabel}
              placeholder={Strings.passFieldPlaceholder}
              secureTextEntry
              blurOnSubmit={true}
              component={FormInput}
              validate={[passwordRequired, validatePassword]}
              returnKeyType="done"
              onSubmitEditing={props.handleSubmit(onSubmit)}
            />

            <View style={styles.buttonContainer}>
              <CustomButton
                style={styles.signupText}
                onPress={props.handleSubmit(onSubmit)}
                buttonLabel={Strings.submitButtonLabel}
              />
            </View>

            <SuccessfullModal
              visible={isModalOpen}
              closeModal={closeModalHandler}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default reduxForm({
  form: "myForm",
})(SignUp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    color: "black",

    marginBottom: 30,
    marginLeft: 50,
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
  singUpBtn: {
    width: "80%",
    backgroundColor: "orange",

    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },

  signupText: {
    fontSize: 26,
    fontWeight: "bold",
    fontFamily: "AmericanTypewriter-Bold",
    color: "black",
  },
});
