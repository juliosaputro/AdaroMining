import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import { normalize, fontSize } from '../utils/responsive'
import Icon from 'react-native-vector-icons/FontAwesome'


export default function Header({tittle='tittle'}) {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>{navigation.goBack()}}>
      <Icon name='chevron-left' size={fontSize(16)} color={'#000'} />
      </TouchableOpacity>
      <View style={{width:normalize(284)}}>
      <Text style={styles.tittle}>{tittle}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      height:normalize(62),
      flexDirection:'row',
      backgroundColor:'#fff',
      padding: 24,
      alignItems:'center'
    }, 
    tittle:{
      textAlign:'center',
      fontFamily:'DMSans',
      fontWeight:'500',
      fontSize:fontSize(18),
      lineHeight:22,
      color:'#000000'
    }
  })