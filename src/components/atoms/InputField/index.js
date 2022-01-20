import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const InputField = ({iconName, placeholder, ...props}) => {
  return (
    <View style={styles.textField}>
      <Icon name={iconName} size={20} />
      <TextInput
        style={styles.labelText}
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
    fontSize: 14,
    flex: 2,
    marginLeft: 12,
  },
  textField: {
    color: '#8D92A3',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#E9E9E9',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
});
