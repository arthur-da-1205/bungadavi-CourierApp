import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {Space} from '../../atoms/Space';
import {heightScreen, widthScreen} from '../../../constants';

const UploadPictModal = ({
  labelUpload = 'Upload',
  labelClose = 'Cancel',
  onClose,
  onUpload,
  onCameraOpen,
  bodyText,
  photoDisplay,
}) => {
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
          <View style={{flexDirection: 'row'}}>
            <View style={styles.photo}>
              <TouchableOpacity onPress={onCameraOpen}>
                <View style={styles.borderPhoto}>
                  {photoDisplay ? (
                    <Image
                      source={photoDisplay}
                      style={styles.photoContainer}
                    />
                  ) : (
                    <View style={styles.photoContainer}>
                      <Text style={styles.addPhoto}>{bodyText}</Text>
                    </View>
                  )}
                </View>
              </TouchableOpacity>
            </View>
            <Space width={10} />
            <View style={styles.photo}>
              <TouchableOpacity onPress={onCameraOpen}>
                <View style={styles.borderPhoto}>
                  {photoDisplay ? (
                    <Image
                      source={photoDisplay}
                      style={styles.photoContainer}
                    />
                  ) : (
                    <View style={styles.photoContainer}>
                      <Text style={styles.addPhoto}>{bodyText}</Text>
                    </View>
                  )}
                </View>
              </TouchableOpacity>
            </View>
            <Space width={10} />
            <View style={styles.photo}>
              <TouchableOpacity onPress={onCameraOpen}>
                <View style={styles.borderPhoto}>
                  {photoDisplay ? (
                    <Image
                      source={photoDisplay}
                      style={styles.photoContainer}
                    />
                  ) : (
                    <View style={styles.photoContainer}>
                      <Text style={styles.addPhoto}>{bodyText}</Text>
                    </View>
                  )}
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <Space height={16} />
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={onUpload}>
              <Text>{labelUpload}</Text>
            </TouchableOpacity>
            <Space width={10} />
            <TouchableOpacity onPress={onClose}>
              <Text>{labelClose}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UploadPictModal;

const styles = StyleSheet.create({
  //   photo: {alignItems: 'center', marginTop: 10, marginBottom: 16},
  borderPhoto: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    width: 70,
    height: 70,
    borderRadius: 10,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoContainer: {
    width: 60,
    height: 60,
    borderRadius: 10,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addPhoto: {
    fontSize: 10,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
    textAlign: 'center',
  },
});
