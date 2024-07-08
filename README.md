
# React Native OTP
`@mustapha-ghlissi/react-native-otp`: a One Time Password Input Component for React Native.

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![npm](https://img.shields.io/npm/v/@mustapha-ghlissi/react-native-otp.svg)](https://www.npmjs.com/package/@mustapha-ghlissi/react-native-otp)
[![npm](https://img.shields.io/npm/dm/@mustapha-ghlissi/react-native-otp.svg)](https://www.npmjs.com/package/@mustapha-ghlissi/react-native-otp)

## Demo
![App Screenshot](./demo/demo.gif)

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

``` js
import Otp from '@mustapha-ghlissi/react-native-otp';

<Otp onConfirm={code => console.log(code)}/>

``` 

## Props

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| length | `number`: optional | Number of OTP digits (default = `4`) |
| fillBorderColor | `string`: optional | Border color when the OTP is fully filled and it's used as the shadow color  is `enabledFillShadow` is set to `true` |
| enabledFillShadow | `boolean`: optional | Show success shadow when the OTP is fully filled |
| cursorColor | `string`: optional | InputText cursor color |
| selectionColor | `string`: optional | InputText content selection color |
| inputStyle | [TextStyle](https://reactnative.dev/docs/text-style-props), [ViewStyle Props](https://reactnative.dev/docs/view-style-props): optional | InputText custom style |
| onConfirm | `callback`: required | When the OTP is filled, then you can do whatever you need with the entered code. |


## Authors

- [@mustapha-ghlissi](https://www.github.com/mustapha-ghlissi)

