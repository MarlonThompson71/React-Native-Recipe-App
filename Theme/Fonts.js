import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
import Colors from "./Colors";

export default StyleSheet.create({
  titleRegular: {
    fontSize: moderateScale(22),
  },
  titleSmall: {
    fontSize: moderateScale(20),
  },
  textRegular: {
    fontSize: moderateScale(18),
  },
  textSmall: {
    fontSize: moderateScale(15),
  },
  textCenter: {
    textAlign: "center",
  },
  redText: {
    color: Colors.red,
  },
  whiteText: {
    color: Colors.white,
  },
});
