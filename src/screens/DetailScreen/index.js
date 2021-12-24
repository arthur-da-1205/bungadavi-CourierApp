import React, {useEffect, useState} from 'react';
import {Modal, ScrollView, StyleSheet, SafeAreaView, View} from 'react-native';
import {launchCamera} from 'react-native-image-picker';

import {
  AcceptedModal,
  Button,
  DetailTransactionSection,
  Header,
  MessageDetailSection,
  ProductCard,
  RecepientDetailSection,
  Space,
  UploadPictModal,
} from '../../components';

const DetailScreen = ({route}) => {
  const {
    id,
    orderID,
    address,
    date,
    timeslot,
    statusOrder,
    itemOrdered,
    transactionDetail,
    recepientDetail,
    message,
    browse_pict,
  } = route.params;

  const [status, setStatus] = useState(statusOrder);
  const [acceptModal, setAcceptModal] = useState(false);
  const [uploadModal, setUploadModal] = useState(false);
  const [photo, setPhoto] = useState('');

  const renderButton = () => {
    switch (status) {
      case 'assigning':
        return (
          <>
            <Button
              labelBtn="Accept"
              onPress={handleChangeStatus}
              btnColor="#21CC9E"
            />
            <Space height={8} />
            <Button labelBtn="Reject" onPress={() => {}} btnColor="#B4B3BB" />
          </>
        );

      case 'accepted':
        return (
          <>
            {browse_pict ? (
              <Button
                labelBtn="Browse From Gallery"
                onPress={() => {}}
                btnColor="#EE3072"
              />
            ) : (
              <Button
                labelBtn="Take Picture"
                onPress={handleUploaModal}
                btnColor="#EE3072"
              />
            )}
          </>
        );

      default:
        return null;
    }
  };

  const handleChangeStatus = () => {
    setStatus('accepted');
    setAcceptModal(true);
  };

  const handleUploaModal = () => {
    console.log(status);
    setUploadModal(true);
  };

  const closeUploadPhoto = () => {
    setUploadModal(false);
  };

  const takePicture = () => {
    launchCamera({}, response => {
      if (response.didCancel || response.error) {
        return;
      }
      const source = {uri: response.assets[0].uri};
      const dataImage = {
        uri: response.assets[0].uri,
        type: response.assets[0].type,
        name: response.assets[0].fileName,
      };
      setPhoto(source);
    });
  };
  console.log(status);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header headerTitle="Detail" headerSubtitle="Your task detail" />
      <Space height={19} />
      <ScrollView>
        <ProductCard
          productName={itemOrdered.productName}
          productDesc={itemOrdered.productDesc}
          statusLabel="Status"
          statusValue={status}
        />
        <DetailTransactionSection
          title="Transaction Detail"
          invoice={orderID}
          timeslot={timeslot}
          date={date}
          from={transactionDetail.from}
          to={transactionDetail.to}
        />
        <Space height={16} />
        <RecepientDetailSection
          title="Recepient Detail"
          name={recepientDetail.recepientName}
          phone={recepientDetail.recepentPhone}
          address={address}
          email={recepientDetail.recepientEmail}
          city={recepientDetail.city}
        />
        <Space height={16} />
        <MessageDetailSection message={message} />
        <Space height={26} />
        <View style={styles.btnContainer}>{renderButton()}</View>
      </ScrollView>

      <Modal animationType="fade" transparent={true} visible={acceptModal}>
        <AcceptedModal
          onClose={() => {
            setAcceptModal(false);
          }}
        />
      </Modal>
      <Modal animationType="fade" transparent={true} visible={uploadModal}>
        <UploadPictModal
          bodyText="Click to take a picture"
          onCameraOpen={takePicture}
          onUpload={() => {
            console.log('uploaded');
          }}
          onClose={closeUploadPhoto}
          photoDisplay={photo}
        />
      </Modal>
    </SafeAreaView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  mainContainer: {flex: 1},
  btnContainer: {paddingHorizontal: 24, paddingBottom: 10},
});
