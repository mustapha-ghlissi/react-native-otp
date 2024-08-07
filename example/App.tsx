/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import OTP from '@mustapha-ghlissi/react-native-otp';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.label}>Basic OTP</Text>
        <OTP onConfirm={(code: number) => console.log(code)} />
      </View>
      <View style={styles.content}>
        <Text style={styles.label}>Advanced OTP</Text>
        <OTP
          onConfirm={(code: number) => console.log(code)}
          length={5}
          inputStyle={styles.input}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    gap: 60,
  },
  content: {
    gap: 10,
  },
  label: {
    fontWeight: 'bold',
  },
  input: {
    fontSize: 23,
    fontWeight: 'bold',
    height: 48,
    width: 48,
    borderRadius: 48,
    borderWidth: 3,
  },
});

export default App;
