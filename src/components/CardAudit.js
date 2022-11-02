import React, {useState} from 'react';
import {normalize, fontSize} from '../utils/responsive';
import {TouchableOpacity, Image, Text, StyleSheet, View} from 'react-native';
import Example from '../assets/example.png'
import Modal from 'react-native-modal'
import Icon from 'react-native-vector-icons/FontAwesome'
import ButtonPrimary from './ButtonPrimary';
import ButtonSecondary from './ButtonSecondary';

export default function CardAudit({tittle='', caption=''}) {
    const [visible, setVisible] = useState(false)
    const ShowModal = () => setVisible(true)
    const CloseModal = () => setVisible(false)
  return (
    <>
    <TouchableOpacity style={styles.boxContainer} onPress={ShowModal}>
      <Image source={Example} style={styles.imageContainer}/>
      <View style={{marginLeft: normalize(24), justifyContent:'center', height:normalize(85)}}>
        <Text style={styles.tittleStyles}>{tittle}</Text>
        <Text style={styles.captionStyles}>{caption}</Text>
      </View>
    </TouchableOpacity>
    <Modal isVisible={visible} onDismiss={CloseModal} style={{justifyContent: 'flex-end', margin: 0,}}>
    <View style={styles.modal}>
          <View style={styles.modalContainer}>
        <TouchableOpacity onPress={CloseModal} style={{width:normalize(360), height:normalize(24) ,flexDirection:'row',justifyContent:'flex-end', paddingRight:normalize(20)}}>
            <Icon name='times-circle-o' size={fontSize(22)} color={'#000'}/>
        </TouchableOpacity>
          <Text style={styles.tittleStyles}>Aset Condition</Text>
          <ButtonPrimary title='Barang Ditempat' />
          <ButtonSecondary title='Tidak, Barang Tidak Ditemukan' />
          </View>
          </View>
    </Modal>
    </>
  );
}

const styles = StyleSheet.create({
    boxContainer:{
        height:normalize(92),
        width:normalize(328),
        display:'flex',
        alignItems:'center',
        flexDirection:'row',
        padding:normalize(8),
        backgroundColor:'#FFF',
        borderRadius:16,
        borderColor:'#CDCDCD',
        borderWidth:1,
        marginVertical:normalize(10)
    },
    imageContainer:{
        width:normalize(76),
        height:normalize(76),
        padding:8,
    },
    tittleStyles:{
        fontFamily:'DMSans',
        fontSize:fontSize(16),
        fontWeight:'bold',
        lineHeight:normalize(22),
        letterSpacing:2,
        color:'#000000',
        marginTop:normalize(8),
    },
    captionStyles:{
        fontFamily:'DMSans',
        fontSize:fontSize(14),
        fontWeight:'400',
        lineHeight:normalize(12),
        letterSpacing:0.8,
        marginTop:normalize(8),
        color:'#000000',
    },
    modal:{
        width:normalize(360),
        height:normalize(687),
        backgroundColor:'#00000066',
        zIndex:0,
        position:'absolute'
      },
      modalContainer:{
        height:normalize(230),
        width:normalize(360),
        alignItems:'center',
        backgroundColor:'#fff',
        borderTopLeftRadius:24,
        borderTopRightRadius:24,
        paddingHorizontal:24,
        paddingVertical:15,
        position:'absolute',
        bottom:0,
        zIndex:10
      },
})