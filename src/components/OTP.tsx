import { Keyboard, View, TextInput } from 'react-native';
import React, { useRef, useState } from 'react';
import { OTPProps } from './OTP.types';
import styles from './style';

const OTP: React.FC<OTPProps> = ({
  length = 4,
  inputStyle,
  filledColor = '#A8A8A8',
  filledOtpColor = '#32A071',
  outlineColor = '#A8A8A8',
  enabledFillShadow = true,
  cursorColor,
  selectionColor,
  onConfirm,
}: OTPProps) => {
  const [otp, setOtp] = useState<Array<number>>([]);
  const [filledOtp, setFilledOtp] = useState(false);
  const [focusedOtpFieldIndex, setFocusedOtpFieldIndex] = useState<
    null | number
  >(null);
  let refs = useRef<any>([]);
  const shadowStyle = enabledFillShadow && {
    shadowColor: filledOtpColor,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: filledOtp ? 12 : 0,
  };

  const onChangeDigitInput = (text: string, index: number) => {
    let newOtp = [...otp];
    newOtp[index] = parseInt(text, 10);
    setOtp(newOtp);

    if (index < length - 1) {
      refs.current[index + 1]?.focus();
      setFocusedOtpFieldIndex(index + 1);

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

  const onRemoveDigit = (index: number) => {
    if (filledOtp) {
      setFilledOtp(false);
    }

    setOtp(otp.filter((_, key) => key !== index));

    if (index > 0) {
      refs.current[index - 1]?.focus();
      setFocusedOtpFieldIndex(index - 1);
    }
  };

  const getBorderColor = (index: number) => ({
    borderColor: filledOtp
      ? filledOtpColor
      : otp[index]
        ? filledColor
        : focusedOtpFieldIndex === index
          ? outlineColor
          : inputStyle && inputStyle.borderColor
            ? inputStyle.borderColor
            : '#EBEAEC',
  });

  return (
    <View style={styles.otp}>
      {[...Array(length).keys()].map((item, index: number) => (
        <TextInput
          key={item}
          ref={(ref: never) => (refs.current[index] = ref)}
          style={[
            styles.otpField,

            inputStyle,
            shadowStyle,
            getBorderColor(index),
          ]}
          maxLength={1}
          autoFocus={index === 0}
          keyboardType="numeric"
          textContentType="oneTimeCode"
          selectTextOnFocus
          clearTextOnFocus
          cursorColor={cursorColor}
          selectionColor={selectionColor}
          onKeyPress={({ nativeEvent }) => {
            if (nativeEvent.key === 'Backspace') {
              onRemoveDigit(index);
              return false;
            }

            onChangeDigitInput(nativeEvent.key, index);
            return true;
          }}
          value={otp[index] !== undefined ? otp[index].toString() : ''}
        />
      ))}
    </View>
  );
};

export default OTP;
