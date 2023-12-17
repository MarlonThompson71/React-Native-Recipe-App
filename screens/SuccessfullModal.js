import React from "react";
import { connect } from "react-redux";
import { formValueSelector } from "redux-form";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CustomButton } from "../components";
import { Colors, Fonts, Styles } from "../Theme";
import { scale } from "react-native-size-matters";

let SucccessfullModal = (props) => {
  const { data } = props;

  const renderSubmittedData = (submittedData) => {
    // to render all the keys and values of json object
    let rows = [];
    Object.keys(submittedData).forEach((key) =>
      rows.push(
        <Text key={key} style={[styles.row, Fonts.textSmall]}>
          {key + " : " + submittedData[key]}
        </Text>
      )
    );
    return rows;
  };

  return (
    <Modal
      animationType="fade"
      visible={props.visible}
      transparent={true}
      onDismiss={props.resetFn}
    >
      <TouchableOpacity
        activeOpacity={1}
        onPress={props.closeModal}
        style={styles.modalScreen}
      >
        {/* nested touchableopacity is for not to close the modal when modalbox is touched  */}
        <TouchableOpacity activeOpacity={1} style={styles.modalBox}>
          <Text
            style={[styles.modalTitle, Fonts.titleRegular, Fonts.textCenter]}
          >
            Your Submitted Data
          </Text>

          {data ? renderSubmittedData(data) : null}

          <View style={Styles.buttonContainer}>
            <CustomButton buttonLabel="Okay" onPress={props.closeModal} />
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

const selector = formValueSelector("myForm");
// this selector provides the form values

SucccessfullModal = connect((state) => {
  const data = selector(state, "fullName", "email", "mobileNo", "password");
  // we can select multiple values of form by passing field names
  // this object will be passed to the props of SucccessfullModal
  return { data };
})(SucccessfullModal);

export default SucccessfullModal;

const styles = StyleSheet.create({
  modalScreen: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: Colors.trasparentBg,
  },
  modalBox: {
    marginHorizontal: scale(30),
    backgroundColor: Colors.white,
    overflow: "hidden",
  },
  modalTitle: {
    marginVertical: scale(5),
  },
  row: {
    margin: scale(10),
  },
});
