import React, {useEffect, useState} from 'react';
import {Modal, ScrollView, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  AcceptedModal,
  Button,
  DetailTransactionSection,
  Header,
  MessageDetailSection,
  ProductCard,
  RecepientDetailSection,
  Space,
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
  } = route.params;

  const [status, setStatus] = useState(statusOrder);
  const [acceptModal, setAcceptModal] = useState(false);
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
          <Button
            labelBtn="Take Picture"
            onPress={() => {}}
            btnColor="#EE3072"
          />
        );

      default:
        return null;
    }
  };

  const handleChangeStatus = () => {
    setStatus('accepted');
    setAcceptModal(true);
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
    </SafeAreaView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  mainContainer: {flex: 1},
  btnContainer: {paddingHorizontal: 24, paddingBottom: 10},
});
