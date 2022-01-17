import React, {useEffect, useState} from 'react';
import {Modal, ScrollView, StyleSheet, SafeAreaView, View} from 'react-native';
import {launchCamera} from 'react-native-image-picker';
import {useDispatch} from 'react-redux';

import {
  AcceptedModal,
  Button,
  DetailTransactionSection,
  FinishModal,
  Header,
  MessageDetailSection,
  ProductCard,
  RecepientDetailSection,
  Space,
  UploadPictModal,
} from '../../components';
import {API_HOST} from '../../config';
import {courierStatusReducer} from '../../redux/reducer/courierStatus';
import {useForm} from '../../utils';
import {getData} from '../../utils/storage';

const DetailScreen = ({route, navigation}) => {
  const {status_assignment, delivery_number_assignment, uuid} = route.params;

  const [status, setStatus] = useState(status_assignment);
  const [acceptModal, setAcceptModal] = useState(false);
  const [uploadModal, setUploadModal] = useState(false);
  const [finishModal, setFinishModal] = useState(false);

  const [photo1, setPhoto1] = useState('');
  const [photo2, setPhoto2] = useState('');
  const [photo3, setPhoto3] = useState('');
  const [image1, setImage1] = useState('');
  const [image2, setImage2] = useState('');
  const [image3, setImage3] = useState('');

  const [courierUuid, setCourierUuid] = useState('');
  const [token, setToken] = useState('');
  const [detail, setDetail] = useState(null);

  const [finishPict1, setFinishPict1] = useState('');
  const [finishPict2, setFinishPict2] = useState('');
  const [finishPict3, setFinishPict3] = useState('');
  const [finishImg1, setFinishImg1] = useState('');
  const [finishImg2, setFinishImg2] = useState('');
  const [finishImg3, setFinishImg3] = useState('');

  const bearerToken = token.value;
  useEffect(() => {
    if (bearerToken) {
      API_HOST.get(
        `task_detail?delivery_number_assignment=${delivery_number_assignment}`,
        {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
          },
        },
      )
        .then(res => {
          setDetail(res.data.msg[0]);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [bearerToken, delivery_number_assignment]);

  const doAccept = async () => {
    var bodyFormData = new FormData();
    bodyFormData.append('status_assignment', 'ACCEPT');
    bodyFormData.append(
      'delivery_number_assignment',
      delivery_number_assignment,
    );
    bodyFormData.append('courier_uuid', uuid);
    bodyFormData.append('status_order_trx', 'Accepted by Courier');
    API_HOST.put('/change_status_assignment', bodyFormData, {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(res => {
        // dispatch({type: 'SET_STATUS', value: res.data.msg});
        setStatus('ACCEPT');
      })
      .catch(err => {
        console.log(err);
      });
  };

  const takePicture1 = () => {
    launchCamera({quality: 0.3, maxHeight: 200, maxWidth: 200}, response => {
      if (response.didCancel || response.error) {
        return;
      }
      const source1 = {uri: response.assets[0].uri};
      const dataImage = {
        uri: response.assets[0].uri,
        type: response.assets[0].type,
        name: response.assets[0].fileName,
      };
      setPhoto1(source1);
      setImage1(dataImage);
    });
  };
  const takePicture2 = () => {
    launchCamera({quality: 0.3, maxHeight: 200, maxWidth: 200}, response => {
      if (response.didCancel || response.error) {
        return;
      }
      const source2 = {uri: response.assets[0].uri};
      const dataImage = {
        uri: response.assets[0].uri,
        type: response.assets[0].type,
        name: response.assets[0].fileName,
      };
      setPhoto2(source2);
      setImage2(dataImage);
    });
  };
  const takePicture3 = () => {
    launchCamera({quality: 0.3, maxHeight: 200, maxWidth: 200}, response => {
      if (response.didCancel || response.error) {
        return;
      }
      const source3 = {uri: response.assets[0].uri};
      const dataImage = {
        uri: response.assets[0].uri,
        type: response.assets[0].type,
        name: response.assets[0].fileName,
      };
      setPhoto3(source3);
      setImage3(dataImage);
    });
  };

  const doUpload = () => {
    var bodyForm = new FormData();
    bodyForm.append('status_assignment', 'ON-DELIVERY');
    bodyForm.append('delivery_number_assignment', delivery_number_assignment);
    bodyForm.append('courier_uuid', uuid);
    bodyForm.append('status_order_trx', 'On Delivery');
    bodyForm.append('img', image1);
    bodyForm.append('img', image2);
    bodyForm.append('img', image3);

    API_HOST.put('change_status_assignment', bodyForm, {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
        'Content-Type': 'applications/json',
        Accept: 'applications/json',
      },
    })
      .then(res => {
        // dispatch({type: 'SET_STATUS', value: res.data.msg});
        console.log(res);
        console.log(bodyForm);
        navigation.replace('OnDeliveryScreen');
      })
      .catch(err => {
        console.log(err);
      });
  };

  const finishPicture1 = () => {
    launchCamera({quality: 0.3, maxHeight: 200, maxWidth: 200}, response => {
      if (response.didCancel || response.error) {
        return;
      }
      const source1 = {uri: response.assets[0].uri};
      const dataImage = {
        uri: response.assets[0].uri,
        type: response.assets[0].type,
        name: response.assets[0].fileName,
      };
      setFinishPict1(source1);
      setFinishImg1(dataImage);
    });
  };
  const finishPicture2 = () => {
    launchCamera({quality: 0.3, maxHeight: 200, maxWidth: 200}, response => {
      if (response.didCancel || response.error) {
        return;
      }
      const source2 = {uri: response.assets[0].uri};
      const dataImage = {
        uri: response.assets[0].uri,
        type: response.assets[0].type,
        name: response.assets[0].fileName,
      };
      setFinishPict2(source2);
      setFinishImg2(dataImage);
    });
  };
  const finishPicture3 = () => {
    launchCamera({quality: 0.3, maxHeight: 200, maxWidth: 200}, response => {
      if (response.didCancel || response.error) {
        return;
      }
      const source3 = {uri: response.assets[0].uri};
      const dataImage = {
        uri: response.assets[0].uri,
        type: response.assets[0].type,
        name: response.assets[0].fileName,
      };
      setFinishPict3(source3);
      setFinishImg3(dataImage);
    });
  };

  var bodyDataDump = new FormData();
  bodyDataDump.append('od_uuid', detail?.order_transactions_uuid);
  bodyDataDump.append('ds_uuid', detail?.delivery_schedule_uuid);
  bodyDataDump.append('send_recv_uuid', detail?.sender_receiver_uuid);
  bodyDataDump.append('da_uuid', detail?.delivery_assign_order_uuid);
  bodyDataDump.append('usr_uuid', detail?.user_uuid);
  bodyDataDump.append('courier_uuid', detail?.courier_uuid);
  bodyDataDump.append('recv_recipient', 'TEST');
  bodyDataDump.append('stat_receipt', 'test');
  bodyDataDump.append('notes_receipt', 'Test');
  bodyDataDump.append('fee_receipt', 123);
  bodyDataDump.append('reward_receipt', 123);
  bodyDataDump.append('img', finishImg1);
  bodyDataDump.append('img', finishImg2);
  bodyDataDump.append('img', finishImg3);

  console.log(bodyDataDump);
  const doFinish = () => {
    if (bodyDataDump) {
      API_HOST.post('finish_order', bodyDataDump, {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
          'Content-Type': 'multipart/form-data',
        },
      })
        .then(res => {
          // dispatch({type: 'SET_STATUS', value: res.data.msg});
          console.log(res);
          var bodyForm = new FormData();
          bodyForm.append('status_assignment', 'FINISH');
          bodyForm.append(
            'delivery_number_assignment',
            delivery_number_assignment,
          );
          bodyForm.append('courier_uuid', uuid);
          bodyForm.append('status_order_trx', 'Finish');

          API_HOST.put('change_status_assignment', bodyForm, {
            headers: {
              Authorization: `Bearer ${bearerToken}`,
              'Content-Type': 'applications/json',
              Accept: 'applications/json',
            },
          })
            .then(response => {
              // dispatch({type: 'SET_STATUS', value: res.data.msg});
              console.log(response);
              console.log(bodyForm);
              navigation.replace('OnDeliveryScreen');
            })
            .catch(err => {
              console.log(err);
            });
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    getData('USER_PROFILE').then(res => {
      setCourierUuid(res.uuid);
    });

    getData('TOKEN').then(res => {
      setToken(res);
    });
  }, []);

  const handleModaConfirm = () => {
    setAcceptModal(true);
  };
  const handleUploaModal = () => {
    setUploadModal(true);
  };
  const handleUploadFinish = () => {
    setFinishModal(true);
  };

  const closeUploadPhoto = () => {
    setUploadModal(false);
  };

  const closeFinishModal = () => {
    setFinishModal(false);
  };

  const renderButton = () => {
    switch (status) {
      case 'ASSIGNED':
        return (
          <>
            <Button
              labelBtn="Accept"
              onPress={handleModaConfirm}
              btnColor="#21CC9E"
            />
            <Space height={8} />
            <Button labelBtn="Reject" onPress={() => {}} btnColor="#B4B3BB" />
          </>
        );

      case 'ACCEPT':
        return (
          <>
            <Button
              labelBtn="Show QR Code"
              onPress={() => {
                navigation.navigate('QRCodeScreen', detail);
              }}
              btnColor="#00FF"
            />
            <Space height={10} />
            <Button
              labelBtn="Take Picture"
              onPress={handleUploaModal}
              btnColor="#EE3072"
            />
          </>
        );

      case 'ON-DELIVERY':
        return (
          <>
            <Button
              labelBtn="FINISH"
              onPress={handleUploadFinish}
              btnColor="#00FF"
            />
            <Space height={10} />
            <Button
              labelBtn="RETURNED"
              // onPress={handleUploaModal}
              btnColor="#EE3072"
            />
          </>
        );

      default:
        return null;
    }
  };
  return (
    <SafeAreaView style={styles?.mainContainer}>
      <Header headerTitle="Detail" headerSubtitle="Your task detail" />
      <Space height={19} />
      <ScrollView>
        <ProductCard
          productName={detail?.name_product}
          productDesc={detail?.short_description_product}
          statusLabel="Status"
          statusValue={status}
        />
        <DetailTransactionSection
          title="Transaction Detail"
          invoice={detail?.code_order_transaction}
          timeslot={detail?.time_slot_name}
          date={detail?.delivery_date}
          from="Here"
          to="There"
        />
        <Space height={16} />
        <RecepientDetailSection
          title="Recepient Detail"
          name={detail?.receiver_name}
          phone={detail?.receiver_phone_number}
          address={detail?.receiver_address}
          email="Email"
          city="City"
        />
        <Space height={16} />
        <MessageDetailSection message={detail?.card_message_message} />
        <Space height={26} />
        <View style={styles.btnContainer}>{renderButton()}</View>
      </ScrollView>

      <Modal animationType="fade" transparent={true} visible={acceptModal}>
        <AcceptedModal
          onAgree={() => {
            doAccept();
            setAcceptModal(false);
          }}
          onClose={() => {
            setAcceptModal(false);
          }}
        />
      </Modal>
      <Modal animationType="fade" transparent={true} visible={uploadModal}>
        <UploadPictModal
          bodyText="Click to take a picture"
          onCameraOpen1={takePicture1}
          onCameraOpen2={takePicture2}
          onCameraOpen3={takePicture3}
          onUpload={() => {
            doUpload();
            setUploadModal(false);
          }}
          onClose={closeUploadPhoto}
          photoDisplay1={photo1}
          photoDisplay2={photo2}
          photoDisplay3={photo3}
        />
      </Modal>
      <Modal animationType="fade" transparent={true} visible={finishModal}>
        <FinishModal
          bodyText="Click to take a picture"
          onCameraOpen1={finishPicture1}
          onCameraOpen2={finishPicture2}
          onCameraOpen3={finishPicture3}
          onUpload={() => {
            doFinish();
            setFinishModal(false);
          }}
          onClose={closeFinishModal}
          photoDisplay1={finishPict1}
          photoDisplay2={finishPict2}
          photoDisplay3={finishPict3}
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
