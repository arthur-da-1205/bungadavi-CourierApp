import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = ({labelBtn, onPress}) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={onPress}>
      <Text style={styles.textBtn}>{labelBtn}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: '#FF61C7',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 9,
    borderRadius: 40,
  },
  textBtn: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#FFFFFF',
  },
});
