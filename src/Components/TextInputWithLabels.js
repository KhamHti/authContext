import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {Input, Text} from '@rneui/themed';

const TextInputWithLabels = ({
  label,
  value,
  placeholder,
  isSecure,
  onChangeText,
  props,
  emailInput,
}) => {
  return (
    <>
      <Text style={{marginLeft: 20, paddingVertical: 10}}>{label}</Text>
      <Input
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        secureTextEntry={isSecure ? true : false}
        autoCapitalize="none"
        autoCorrect={false}
        {...props}
        containerStyle={{
          backgroundColor: '#fff',
        }}
        inputContainerStyle={{
          borderWidth: 1,
          borderColor: 'grey',
          borderRadius: 14,
        }}
        inputStyle={{marginLeft: 20}}
      />
    </>
  );
};

export default TextInputWithLabels;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
