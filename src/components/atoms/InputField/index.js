import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const InputField = ({label, placeholder, ...props}) => {
  return (
    <View>
      <Text style={styles.labelText}>{label}</Text>
      <TextInput
        style={styles.textField}
        placeholder={placeholder}
        {...props}
      />
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  labelText: {
    fontFamily: 'Poppins-Regular',
    color: '#7D8797',
    fontSize: 16,
  },
  textField: {
    color: '#8D92A3',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#E9E9E9',
  },
});
