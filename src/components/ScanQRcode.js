import React, {useState, useCallback, useEffect} from 'react';
import {Linking, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {fontSize, normalize} from '../utils/responsive';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {useScanBarcodes, BarcodeFormat} from 'vision-camera-code-scanner';
import { RNHoleView } from 'react-native-hole-view';
import ButtonPrimary from './ButtonPrimary';

export default function ScanQRcode() {

  const navigation = useNavigation();

  const [hasPermission, setHasPermission] = useState(false);

  const devices = useCameraDevices();
  const device = devices.back;


  const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.ALL_FORMATS]);

  const [barcode, setBarcode] = useState('')
  const [isScanned, setIsScanned] = useState(false)
  const [opacity, setOpacity] = useState(0)



  // useEffect(()=>{
  //   if(barcodes.length >0){

  //     console.log(barcodes[0].displayValue, 'barcodes')
  //   }

  // },[barcodes])

  useEffect(() => {
    reqPermissionCamera();
  }, []);

  const reqPermissionCamera = useCallback(async () => {
    const status = await Camera.requestCameraPermission();
    if (status === 'denied') await Linking.openSettings();
    setHasPermission(status === 'authorized');
  }, []);


  useEffect(()=>{
    toggleActiveState();
    return()=>{
      barcodes
    }
  }, [barcodes])

  const toggleActiveState = async () => {
    if (barcodes && barcodes.length > 0 && isScanned === false) {
      setIsScanned(true);

      barcodes.forEach(async (scannedBarcode)=>{
        if (scannedBarcode.rawValue !== '') {
          setBarcode(scannedBarcode.rawValue);
          setOpacity(1)
        }
      })
    }
  }

  return (
    <View style={{height: normalize(800), width: normalize(360)}}>
      {device !== undefined && hasPermission && (
        <>
          <View style={{height: normalize(550), width: normalize(360)}}>
            <Camera
              style={StyleSheet.absoluteFill}
              device={device}
              isActive={true}
              frameProcessor={frameProcessor}
              frameProcessorFps={5}
            />
            <RNHoleView
            holes={[
              {
                x: normalize(36),
                y: normalize(129),
                width: normalize(287),
                height:normalize(287),
                borderRadius: 10,
              },
            ]}
            style={styles.rnholeView}
            />
          </View>
          <View style={{padding:normalize(24), height:normalize(70)}}>
            <Text style={styles.barcodeTextURL}>Asset ID</Text>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity style={{opacity:opacity}} onPress={()=>{navigation.navigate('Detail')}}>
                <View style={styles.Button}>
                <Text style={styles.TittleBtn}>{barcode}</Text>
                </View>
              </TouchableOpacity>
              {/* <ButtonPrimary title={barcode} onPress={()=>{navigation.navigate('Detail')}}/> */}
            </View>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  Button:{
    height:normalize(52),
    width:normalize(312),
    backgroundColor:'#009D50',
    padding:normalize(6),
    marginTop:normalize(22),
    justifyContent:'center',
    alignItems:'center',
    borderRadius:16
},
TittleBtn:{
  fontSize:fontSize(22),
  fontWeight:'700',
  color:'#fff',
  lineHeight:normalize(28),
  fontFamily:'DMSans'
},
  barcodeTextURL: {
    fontFamily:'DMSans',
    fontSize: fontSize(16),
    lineHeight:normalize(20),
    color: '#000',
    fontWeight: '500',
  },
    rnholeView: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
});

