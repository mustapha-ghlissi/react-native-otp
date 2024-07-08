declare module 'react-native-otpc' {
  import React from 'react';
  import {ViewStyle} from 'react-native';

  export type OTPProps = {
    length?: number;
    fillBorderColor?: string;
    enabledFillShadow?: boolean;
    cursorColor?: string;
    selectionColor?: string;
    inputStyle?: ViewStyle;
    onConfirm: (code: number) => void;
  };
  
  const OTP: React.FC<OTPProps>;
  export default OTP;
}
