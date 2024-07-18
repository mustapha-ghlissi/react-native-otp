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
//# sourceMappingURL=OTP.types.d.ts.map