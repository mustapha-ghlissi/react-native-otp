"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
var _react = _interopRequireWildcard(require("react"));
var _style = _interopRequireDefault(require("./style"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const OTP = ({
  length = 4,
  inputStyle,
  filledColor = '#A8A8A8',
  filledOtpColor = '#32A071',
  outlineColor = '#A8A8A8',
  enabledFillShadow = true,
  cursorColor,
  selectionColor,
  onConfirm
}) => {
  const [otp, setOtp] = (0, _react.useState)([]);
  const [filledOtp, setFilledOtp] = (0, _react.useState)(false);
  const [focusedOtpFieldIndex, setFocusedOtpFieldIndex] = (0, _react.useState)(null);
  let refs = (0, _react.useRef)([]);
  const shadowStyle = enabledFillShadow && {
    shadowColor: filledOtpColor,
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
      setFocusedOtpFieldIndex(index + 1);
      return false;
    }
    const code = newOtp.join('');
    if (code.length < length) {
      return false;
    }
    _reactNative.Keyboard.dismiss();
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
      setFocusedOtpFieldIndex(index - 1);
    }
  };
  const getBorderColor = index => ({
    borderColor: filledOtp ? filledOtpColor : otp[index] ? filledColor : focusedOtpFieldIndex === index ? outlineColor : inputStyle && inputStyle.borderColor ? inputStyle.borderColor : '#EBEAEC'
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
    style: _style.default.otp,
    children: [...Array(length).keys()].map((item, index) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TextInput, {
      ref: ref => refs.current[index] = ref,
      style: [_style.default.otpField, inputStyle, shadowStyle, getBorderColor(index)],
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
var _default = exports.default = OTP;
//# sourceMappingURL=OTP.js.map