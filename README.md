
# React Native OTP
`@mustapha-ghlissi/react-native-otp`: One Time Password Input Component for React Native.

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![npm](https://img.shields.io/npm/v/@mustapha-ghlissi/react-native-otp.svg)](https://www.npmjs.com/package/@mustapha-ghlissi/react-native-otp)
[![npm](https://img.shields.io/npm/unpacked-size/react-native-picker-select)](https://www.npmjs.com/package/@mustapha-ghlissi/react-native-otp)
[![npm](https://img.shields.io/npms-io/maintenance-score/react-native-otp)](https://www.npmjs.com/package/@mustapha-ghlissi/react-native-otp)
[![npm](https://img.shields.io/npm/dm/@mustapha-ghlissi/react-native-otp.svg)](https://www.npmjs.com/package/@mustapha-ghlissi/react-native-otp)
[![github](https://img.shields.io/github/v/release/mustapha-ghlissi/react-native-otp)](https://www.npmjs.com/package/@mustapha-ghlissi/react-native-otp)
[![github](https://img.shields.io/github/actions/workflow/status/mustapha-ghlissi/react-native-otp/release.yml)](https://www.npmjs.com/package/@mustapha-ghlissi/react-native-otp)
[![github](https://img.shields.io/github/contributors/mustapha-ghlissi/react-native-otp)](https://www.npmjs.com/package/@mustapha-ghlissi/react-native-otp)
[![github](https://img.shields.io/github/release-date/mustapha-ghlissi/react-native-otp)](https://www.npmjs.com/package/@mustapha-ghlissi/react-native-otp)

## Screenshots
![Screen 1](./screenshots/screen-1.jpg)
![Screen 2](./screenshots/screen-2.jpg)
![Screen 3](./screenshots/screen-3.jpg)
![Screen 3](./screenshots/screen-4.jpg)
![Screen 3](./screenshots/screen-5.jpg)

## Demo
![Demo](./demo/demo.gif)

## Installation
Use `npm` or `yarn` to install the package.

##### Using `npm`
```bash
npm i @mustapha-ghlissi/react-native-otp
```

##### Using `yarn`
```bash
yarn add @mustapha-ghlissi/react-native-otp
```

## Usage
``` tsx

    import Otp from '@mustapha-ghlissi/react-native-otp';

    <Otp onConfirm={code => console.log(code)}/>

``` 

## Props

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| length | `number`: optional | Number of OTP digits (default = `4`) |
| filledOtpColor | `string`: optional | Border color when the OTP is fully filled and it's used as the shadow color  if `enabledFillShadow` is set to `true` |
| enabledFillShadow | `boolean`: optional | Show success shadow when the OTP is fully filled |
| cursorColor | `string`: optional | InputText cursor color |
| selectionColor | `string`: optional | InputText content selection color |
| filledColor | `string`: optional | InputText border color when it's filled |
| outlineColor | `string`: optional | InputText border color when it's focused |
| inputStyle | [TextStyle](https://reactnative.dev/docs/text-style-props), [ViewStyle Props](https://reactnative.dev/docs/view-style-props): optional | InputText custom style |
| onConfirm | `callback`: required | When the OTP is filled, then you can do whatever you need with the entered code. |


## Donate
<p>Please contribute or donate so we can spend more time on this library.</p>

[Donate with Wise by clicking this link](https://wise.com/pay/me/mustaphag6) or by scanning the QRCode
<br />

![Wise](./donate/wise.png)

## Authors
- [@mustapha-ghlissi](https://www.linkedin.com/in/mustapha-ghlissi)

## Other libraries
- [react-native-accordion](https://github.com/mustapha-ghlissi/react-native-accordion): Reanimated collapsible sections for React Native.
- [react-native-select-picker](https://github.com/mustapha-ghlissi/react-native-select-picker): Reanimated dropdown select for React Native.

