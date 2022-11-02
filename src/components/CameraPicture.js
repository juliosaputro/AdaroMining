import React, {useState, useCallback, useEffect, useRef} from 'react'
import { Linking, StyleSheet, View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { fontSize, normalize } from '../utils/responsive'
import { Camera, useCameraDevices } from 'react-native-vision-camera'
import { useIsFocused } from '@react-navigation/native'
import { Button } from 'react-native-paper'

export default function CameraPicture() {
  const [hasPermission, setHasPermission] = useState(false);
    const devices = useCameraDevices();
    const device = devices.back;
    const isFocused = useIsFocused()
    const camera = useRef(null)
    const takePhotoOptions = {
      qualityPrioritization: 'speed',
      flash: 'off'
    };

    useEffect(() => {
        reqPermissionCamera();
      }, []);
    
      const reqPermissionCamera = useCallback(async () => {
        const status = await Camera.requestCameraPermission();
        if (status === 'denied') await Linking.openSettings();
        setHasPermission(status === 'authorized');
      }, []);

      const takePhoto = async () => {
        console.log("qwe")
        try {
          if (camera.current == null) throw new Error('Camera Ref is Null');
          console.log('Photo taking ....');
          const photo = await camera.current.takePhoto(takePhotoOptions);
          console.log(photo.path)
        } catch (error) {
          console.log(error);
        }
      };

      // const photo = await camera.current.takePhoto({
      //   qualityPrioritization: 'quality',
      //   flash: 'on',
      //   enableAutoRedEyeReduction: true
      // })


  return (
    <View style={{height:normalize(800), width:normalize(360)}}>
      {
        device !== undefined && hasPermission &&(
           <>
           <View style={{height:500}}>
            <Camera
            ref={camera}
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={isFocused}
            photo={true}
            />
           </View>
           </>
        )
      }
      <Button onPress={takePhoto}>TAKE</Button>
    </View>
  )
}
