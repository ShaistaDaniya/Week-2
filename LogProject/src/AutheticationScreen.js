import React, {useState} from 'react';
import * as React from 'react';
import { 
    Button, View, Text, KeyboardAvoidingView } 
from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';


export function AuthenticationScreen({ navigation }) {
    const [phoneNumber, setPhoneNumber]=useState();
    const onChangePhone = () =>{
       setPhoneNumber(number)
    }
    const onPressContinue= ()=>{

    }


    return (
      <View style={styles.container}>
        <KeyboardAvoidingView
            keybordVertialOffset={50}
            behavior={'padding'}
            style={styles.containerAvoiddingView}
        >
        <Text style={styles.textTitle}>{"OK"}</Text>
        <View style={styles.containerInput}>
            <View style={styles.openDialogView}>
                <Text>{"+91 | "}</Text>
            </View>
            <TextInput
                style={styles.phoneInputStyle}
                placeholder="00000 00000"
                keyboardType="numeric"
                value={"PhoneNumber"}
                onChangeText={onChangePhone}
                secureTextEntry={false}
            />
        </View>
    
        <View style={styles.viewBottom}>
            <TouchableOpacity onPress={onPressContinue}>
                <View style={styles.btmContinue}>
                    <Text style={{color: '#ffffff', alignItems: 'center'}}>Continue</Text>
                </View> 
            </TouchableOpacity>
            
        </View>
        </KeyboardAvoidingView>

      </View>
    );
  }

  const  styles= StyleSheet.create({
        container:{
            flex:1

        },
    containerAvoid:{
        flex: 1,
        alignItem: 'center',
        padding: 10
    },
    textTitle: {
        marginBottom:50,
        marginTop: 50,
        fontSize: 15
    },
    containerInput: {
        flexDirection: 'row',
        paddingHorizontal: 12,
        borderRadius:10,
        backgroundColor:'white',
        alignItems: 'center',
        borderBottomColor:1.5

    },
    openDialogView:{
        flexDirection :'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    phoneInputStyle: {
        marginLeft: 5,
        flex: 1,
        height: 50
    },
    ViewBottom: {
        flex:1,
        justifyContent: 'flex-end',
        marginBottom: 50,
        alignItems: 'center'
    },
    btnContinue: {
        width: 150,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent:'center'

    },

  })
  