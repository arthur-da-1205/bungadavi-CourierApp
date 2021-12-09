import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Space} from '../..';

const AcceptedModal = ({onClose}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'rgba(0,0,0, 0.3)',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
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
          }}>
          <Text
            style={{
              textAlign: 'right',
              fontFamily: 'Poppins-Regular',
              color: '#000',
            }}>
            Silahkan ambil paket ke gudang.
          </Text>
          <Text
            style={{
              textAlign: 'right',
              fontFamily: 'Poppins-Regular',
              color: '#000',
            }}>
            Keep safety riding!
          </Text>
          <Space height={12} />
          <TouchableOpacity onPress={onClose}>
            <Text
              style={{
                textAlign: 'right',
                fontFamily: 'Poppins-Medium',
                color: '#7851a9',
                fontSize: 18,
              }}>
              Close
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AcceptedModal;
