import * as React from 'react';
import { Button, View, Text, StyleSheet, KeyboardAvoidingView, TextInput } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export function InputOTPScreen({ navigation }) {
    const textInput = useRef(null)
    const lengthInput = 4;
    return (
      <View style={ StyleSheet.container}>
      <KeyboardAvoidingView
          keyboardVerticalOffest={50}
          behavior={'padding'}
          style={styles.containerAvoiddingView}>
          <Text style={styles.TextTile}>{"input"}</Text>
          <View>
              <TextInput
                  onChangeText={oChangeText}
                  style={{width:0, height:0}}
                  value={internalVal}
                  maxLenght={lengthInput}
                  returnKeyType="done"
                  KeyboardType="numeric"
              />
              <View styles={styles.containerInput}>
                {
                  Array(lengthInput).fill().map((data, index)=> (<view 
                    key={index}
                    style={[styles.cellView,{
                      borderBottomColor: index === internalVal.length ? '#FB6C6A': '#234DB7'
                    }
                    ]}
                    >
                    <Text 
                    styles={styles.cellText}
                    onPress={() => textInput.focus()}
                    >
                      {internalVal && internlVal.length > 0 ? internalVal[index]: ""}
                    </Text>
                </view>))
                }
                
              </View>
          </View>

        </KeyboardAvoidingView>
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex:1
    },
    containerAvoiddingView: {
      flex: 1,
      alignItems: 'center',
      padding: 10
    },
    TextTile: {
      marginTop: 50,
      marginBottom:50,
      fontSize:16
    },
    containerInput: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    cellView: {
      paddingVerticall: 11,
      width: 40,
      margin: 5,
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomWidth: 1.5
    },
    cellText: {
      textAlign: 'center',
      fontSize: 16
    }

    
  })
  