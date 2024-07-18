declare module '@mustapha-ghlissi/react-native-otp' {
  import React from 'react';
  import { TextStyle, StyleProp, ViewStyle } from 'react-native';

  export type OTPProps = {
    length?: number;
    fillBorderColor?: string;
    enabledFillShadow?: boolean;
    cursorColor?: string;
    selectionColor?: string;
    inputStyle?: TextStyle | StyleProp<ViewStyle>;
    onConfirm: (code: number) => void;
  };

  const OTP: React.FC<OTPProps>;
  export default OTP;
}
