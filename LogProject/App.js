import React, { useState, useRef } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';

const PhoneNumberInput = ({ onNext }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleNext = () => {
    // Validation logic for phone number
    if (phoneNumber.length === 10) {
      onNext(phoneNumber);
    } else {
      Alert.alert('Invalid phone number', 'Please enter a valid 10-digit phone number');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Phone Number"
        keyboardType="numeric"
        onChangeText={text => setPhoneNumber(text)}
        value={phoneNumber}
      />
      <Button title="Next" onPress={handleNext} />
    </View>
  );
};

const OTPPage = ({ phoneNumber }) => {
  const [otp, setOTP] = useState('');
  const otpInputs = useRef([]);

  const handleVerify = () => {
    // Verification logic for OTP
    if (otp.length === 4) {
      Alert.alert('Success', 'OTP verified successfully');
    } else {
      Alert.alert('Invalid OTP', 'Please enter a valid 4-digit OTP');
    }
  };

  const handleOTPChange = (index, value) => {
    const newOTP = otp.split('');
    newOTP[index] = value;
    setOTP(newOTP.join(''));

    // Move focus to the next input
    if (value && index < otpInputs.current.length - 1) {
      otpInputs.current[index + 1].focus();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.otpContainer}>
        {Array.from({ length: 4 }, (_, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={value => handleOTPChange(index, value)}
            value={otp[index]}
            ref={ref => (otpInputs.current[index] = ref)}
          />
        ))}
      </View>
      <Button title="Verify" onPress={handleVerify} />
    </View>
  );
};

const App = () => {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleNext = (number) => {
    setPhoneNumber(number);
    setStep(2);
  };

  return (
    <View style={styles.container}>
      {step === 1 && <PhoneNumberInput onNext={handleNext} />}
      {step === 2 && <OTPPage phoneNumber={phoneNumber} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    fontSize: 20,
    borderColor: 'gray',
    borderWidth: 1,
    textAlign: 'center',
  },
});

export default App;
