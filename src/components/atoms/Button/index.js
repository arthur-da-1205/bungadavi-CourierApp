import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = ({labelBtn, onPress, btnColor = '#FF61C7'}) => {
  return (
    <TouchableOpacity style={styles.btnContainer(btnColor)} onPress={onPress}>
      <Text style={styles.textBtn}>{labelBtn}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btnContainer: btnColor => ({
    backgroundColor: btnColor,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 9,
    borderRadius: 40,
  }),
  textBtn: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#FFFFFF',
  },
});
