import { Keyboard, View, TextInput } from 'react-native';
import React, { useRef, useState } from 'react';
import styles from './style';
import { jsx as _jsx } from "react/jsx-runtime";
const OTP = ({
  length = 4,
  inputStyle,
  fillBorderColor = '#32A071',
  enabledFillShadow = true,
  cursorColor,
  selectionColor,
  onConfirm
}) => {
  const [otp, setOtp] = useState([]);
  const [filledOtp, setFilledOtp] = useState(false);
  let refs = useRef([]);
  const shadowStyle = enabledFillShadow && {
    shadowColor: fillBorderColor,
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: filledOtp ? 12 : 0
  };
  const onChangeDigitInput = (text, index) => {
    let newOtp = [...otp];
    newOtp[index] = parseInt(text, 10);
    setOtp(newOtp);
    if (index < length - 1) {
      refs.current[index + 1]?.focus();
      return false;
    }
    const code = newOtp.join('');
    if (code.length < length) {
      return false;
    }
    Keyboard.dismiss();
    setFilledOtp(true);
    onConfirm(Number(newOtp.join('')));
    return true;
  };
  const onRemoveDigit = index => {
    if (filledOtp) {
      setFilledOtp(false);
    }
    setOtp(otp.filter((_, key) => key !== index));
    if (index > 0) {
      refs.current[index - 1]?.focus();
    }
  };
  const getBorderStyle = index => ({
    borderColor: filledOtp ? fillBorderColor : otp[index] ? '#A8A8A8' : '#EBEAEC'
  });
  return /*#__PURE__*/_jsx(View, {
    style: styles.otp,
    children: [...Array(length).keys()].map((item, index) => /*#__PURE__*/_jsx(TextInput, {
      ref: ref => refs.current[index] = ref,
      style: [styles.otpField, inputStyle, shadowStyle, getBorderStyle(index)],
      maxLength: 1,
      autoFocus: index === 0,
      keyboardType: "numeric",
      textContentType: "oneTimeCode",
      selectTextOnFocus: true,
      clearTextOnFocus: true,
      cursorColor: cursorColor,
      selectionColor: selectionColor,
      onKeyPress: ({
        nativeEvent
      }) => {
        if (nativeEvent.key === 'Backspace') {
          onRemoveDigit(index);
          return false;
        }
        onChangeDigitInput(nativeEvent.key, index);
        return true;
      },
      value: otp[index] !== undefined ? otp[index].toString() : ''
    }, item))
  });
};
export default OTP;
//# sourceMappingURL=OTP.js.map