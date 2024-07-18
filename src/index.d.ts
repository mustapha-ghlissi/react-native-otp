declare module '@mustapha-ghlissi/react-native-otp' {
  import React from 'react';
  import { TextStyle, ViewStyle } from 'react-native';

  export type OTPProps = {
    length?: number;
    filledOtpColor?: string;
    enabledFillShadow?: boolean;
    cursorColor?: string;
    selectionColor?: string;
    filledColor?: string;
    outlineColor?: string;
    inputStyle?: TextStyle | ViewStyle;
    onConfirm: (code: number) => void;
  };

  const OTP: React.FC<OTPProps>;
  export default OTP;
}
