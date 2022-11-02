import React from 'react'
import {View, Text,TextInput, StyleSheet, Pressable, TouchableOpacity} from 'react-native';
import {normalize, fontSize} from '../../utils/responsive';
import BackgroundScreen from '../../components/BackgroundScreen';
import ButtonPrimary from '../../components/ButtonPrimary';
import Icon from 'react-native-vector-icons/FontAwesome';
import ModalForm from '../../components/ModalForm';

export default function() {
  return (
    <>
    <BackgroundScreen/>
    <ModalForm>
        <View style={{marginTop:normalize(20)}}>
        <Text style={styles.tittle}>Send Me Email</Text>
        <TextInput
        style={styles.input} 
        placeholder='Email'
        keyboardType='email-address'
        />
        </View>
        <ButtonPrimary title='Send Email' onPress={()=>console.log('email')}/>
    </ModalForm>
    </>
  )
}

const styles = StyleSheet.create({
    tittle:{
        fontSize: fontSize(20),
        fontWeight: '500',
        letterSpacing: 1,
        color: '#000',
        fontFamily:'DMSans'
      },
      input:{
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: normalize(328),
        height: normalize(52),
        alignItems: 'center',
        borderColor: '#CDCDCD',
        borderWidth: 1,
        borderRadius: 8,
        marginTop: normalize(42),
        fontFamily:'DMSans'
      },
})