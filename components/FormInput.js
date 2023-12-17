import React from "react";
import { Text, View, TextInput } from "react-native";

const FormInput = (props) => {
  const { touched, error } = props.meta;
  const isErrorVisible = () => {
    return touched && error ? <Text>{error}</Text> : null;
  };
  return (
    <View>
      <Text>{props.label}</Text>
      <View>
        <TextInput
          {...props}
          value={props.input.value}
          onChangeText={props.input.onChange}
          onFocus={props.input.onFocus}
          onBlur={props.input.onBlur}
        />
      </View>
      {isErrorVisible()}
    </View>
  );
};
export default FormInput;
