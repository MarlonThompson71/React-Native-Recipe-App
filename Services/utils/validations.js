import {
  detectSpacesRegex,
  emailRegex,
  onlyCharRegex,
  passwordRegex,
  phonenoRegex,
} from "./regex";
import { Strings } from "../../Constants";

export const passwordRequired = (value) =>
  value ? undefined : Strings.passwordRequired;

export const emailRequired = (value) =>
  value ? undefined : Strings.emailRequired;

export const nameRequired = (value) =>
  value ? undefined : Strings.nameRequired;

export const mobileRequired = (value) =>
  value ? undefined : Strings.phoneNorequired;

export const validateEmail = (value) =>
  value && !value.match(emailRegex) ? Strings.invalidEmail : undefined;

export const validatePassword = (value) =>
  value && !value.match(passwordRegex) ? Strings.invalidPass : undefined;

export const validatePhoneno = (value) =>
  value && !value.match(phonenoRegex) ? Strings.invalidMobileNo : undefined;

export const removeSpaces = (term) => term.replace(detectSpacesRegex, "");

export const allowOnlyChar = (term) => term.replace(onlyCharRegex, "");
