import { StyleSheet } from "react-native";
import { scale, moderateScale } from "react-native-size-matters";
import Colors from "./Colors";

export default StyleSheet.create({
  header: {
    fontSize: moderateScale(22),
    textAlign: "center",
    marginVertical: scale(10),
  },
  flexOne: {
    flex: 1,
  },
  formContainer: {
    marginHorizontal: scale(15),
  },
  formInputContainer: {
    marginVertical: scale(10),
  },
  textInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: Colors.grey,
    borderBottomWidth: 1,
  },
  buttonContainer: {
    marginHorizontal: scale(40),
    marginVertical: scale(15),
  },
});
