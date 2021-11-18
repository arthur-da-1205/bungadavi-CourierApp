import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Button,
  DetailTransactionSection,
  Header,
  MessageDetailSection,
  ProductCard,
  RecepientDetailSection,
  Space,
} from '../../components';

const DetailScreen = () => {
  return (
    <SafeAreaView>
      <Header headerTitle="Detail" headerSubtitle="Your task detail" />
      <Space height={19} />
      <ProductCard />
      <DetailTransactionSection
        title="Transaction Detail"
        invoice="SBDxxxxxxx"
        timeslot="09.00 AM - 12.00 AM"
        date="26 Oktober 2021"
        from="Arthur"
        to="Arthur"
      />
      <Space height={16} />
      <RecepientDetailSection
        title="Recepient Detail"
        name="Arthur Darwanto"
        phone="089677707771"
        address="Jl. Jambu V/16 Perumnas Kamal, Bangkalan"
        email="Arthur@app.com"
        City="Bangkalan, Madura"
      />
      <Space height={16} />
      <MessageDetailSection />
      <Space height={26} />
      <View style={{paddingHorizontal: 24}}>
        <Button labelBtn="Accept" onPress={() => {}} btnColor="#21CC9E" />
        <Space height={8} />
        <Button labelBtn="Reject" onPress={() => {}} btnColor="#B4B3BB" />
      </View>
    </SafeAreaView>
  );
};

export default DetailScreen;
