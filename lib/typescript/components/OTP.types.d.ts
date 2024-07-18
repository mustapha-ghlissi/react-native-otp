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
//# sourceMappingURL=OTP.types.d.ts.map