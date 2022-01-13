import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Space} from '../..';

const AcceptedModal = ({onAgree, onClose}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.frame}>
        <View style={styles.boxModal}>
          <Text style={styles.text}>Apakah anda yakin ?</Text>

          <Space height={12} />
          <View style={styles.textBtnContainer}>
            <TouchableOpacity onPress={onAgree}>
              <Text style={styles.textBtn}>Yakin</Text>
            </TouchableOpacity>
            <Space width={14} />
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.textBtn}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AcceptedModal;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  frame: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxModal: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  text: {
    textAlign: 'right',
    fontFamily: 'Poppins-Regular',
    color: '#000',
  },
  textBtnContainer: {flexDirection: 'row'},
  textBtn: {
    textAlign: 'right',
    fontFamily: 'Poppins-Medium',
    color: '#7851a9',
    fontSize: 15,
  },
});
