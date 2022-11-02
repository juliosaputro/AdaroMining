import React, {useState} from 'react'
import { Image, ImageProps, StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import ImagePicker, {ImageOrVideo} from 'react-native-image-crop-picker'
import { normalize } from '../utils/responsive';

export default function TakePhoto () {
    const [image, setImage] = useState('https://drive.google.com/uc?export=view&id=1C46XvbI1WrpEylvzNrQjT_nMNWAzoAwB');
    console.log(image, 'image');

    const takePhotoFromCamera = () => {
        console.log('photo')
        ImagePicker.openCamera({
            compressImageMaxHeight:300,
            compressImageMaxWidth:300,
            cropping:true,
            compressImageQuality:0.7
        }).then(image => {
            // console.log(image, 'image');
            setImage(image.path);
            // this.bs.current.snapTo(1);
        })
    }
    return(
        <View>
           <TouchableOpacity onPress={takePhotoFromCamera}>
             {/* <Text>TakePhoto</Text> */}
            <Image source={{uri:image}} style={styles.imageStyles}/>
            </TouchableOpacity>
       </View>
    )
}


const styles = StyleSheet.create({
    imageStyles: {
        width: normalize(360),
        height: normalize(341),
      },
})