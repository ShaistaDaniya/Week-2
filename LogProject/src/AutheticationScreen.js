import React, { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  Button,
  View,
  Text,
  KeyboardAvoidingView,
} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export function AuthenticationScreen({ navigation }) {
  let textInput = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [focusInput, setFocusInput] = useState(true);

  const onChangePhone = (number) => {
    setPhoneNumber(number);
  };

  const onPressContinue = () => {
    if (phoneNumber) {
      navigation.navigate('InputOTP');
    }
  };

  const onChangeFocus = () => {
    setFocusInput(true);
  };

  const onChangeBlur = () => {
    setFocusInput(false);
  };

  useEffect(() => {
    textInput.current.focus();
  }, []);

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={50}
        behavior={'padding'}
        style={styles.containerAvoidingView}
      >
        <Text style={styles.textTitle}>What is your phone number?</Text>
        <View
          style={[
            styles.containerInput,
            {
              borderBottomColor: '#a9a9a9',
            },
          ]}
        >
          <View style={styles.openDialogView}>
            <Text>+91 | </Text>
          </View>
          <TextInput
            ref={textInput}
            style={styles.phoneInputStyle}
            placeholder="00000 00000"
            keyboardType="numeric"
            value={phoneNumber}
            onChangeText={onChangePhone}
            secureTextEntry={false}
            onFocus={onChangeFocus}
            onBlur={onChangeBlur}
          />
        </View>

        <View style={styles.viewBottom}>
          <TouchableOpacity onPress={onPressContinue}>
            <View
              style={[
                styles.btnContinue,
                {
                  backgroundColor: phoneNumber ? '#a9a9a9' : 'gray',
                },
              ]}
            >
              <Text style={styles.textContinue}>Continue</Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerAvoidingView: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  textTitle: {
    marginBottom: 50,
    marginTop: 50,
    fontSize: 16,
  },
  containerInput: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    borderBottomWidth: 1.5,
  },
  openDialogView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  phoneInputStyle: {
    marginLeft: 5,
    flex: 1,
    height: 50,
  },
  viewBottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 50,
    alignItems: 'center',
  },
  btnContinue: {
    width: 150,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContinue: {
    color: '#ffffff',
    alignItems: 'center',
  },
});
