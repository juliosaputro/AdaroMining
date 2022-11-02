import React, {useState, createRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, StyleSheet, Image, Text, ScrollView, TouchableOpacity} from 'react-native';
import Header from '../../components/Header';
import {normalize, fontSize} from '../../utils/responsive';
import Example from '../../assets/example.png';
import ButtonPrimary from '../../components/ButtonPrimary';
import Rows from '../../components/Rows';
import ImagePicker from 'react-native-image-crop-picker'
import TakePhoto from '../../components/TakePhoto';

const datas = [
  {
    AID: '101020000029',
    EN: 'AUPIPE-005',
    CN: 'Lahai Coal',
    CC: '21DAD12845',
    CCN: 'HL GENERAL AFFAIR',
  },
];
export default function () {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1}}>
      <Header tittle="Detail Asset" />
      <ScrollView>
        <View style={styles.container}>
          <TakePhoto/>
          <View style={styles.boxDetail}>
            <Text style={styles.titleStyles}>HAJU MIA CAMP</Text>
            {datas.map((x, y) => {
              return (
                <Rows key={y} AsetID={x.AID} Equipment={x.EN} Company={x.CN} Cost={x.CN} CenterName={x.CCN} />
              );
            })}
            <ButtonPrimary
              title="Update Information"
              onPress={() => {
                navigation.navigate('Update');
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: normalize(360),
    height: normalize(800),
    padding: normalize(16),
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  boxDetail: {
    height: normalize(273),
    width: normalize(360),
    padding: normalize(16),
  },
  titleStyles: {
    fontFamily: 'DMSans',
    fontWeight: 'bold',
    fontSize: fontSize(18),
    lineHeight: normalize(23),
    color: '#000',
    marginBottom: normalize(10),
  },
});
