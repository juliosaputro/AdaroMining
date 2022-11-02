import React from 'react'
import { normalize, fontSize } from '../utils/responsive'
import {StyleSheet, View, Text, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import MenuIcon from '../assets/ic_menu.png'

export default function HeaderHome() {
  return (
    <View style={styles.container}>
      <View style={{width:normalize(284)}}>
      <Text style={styles.tittle}>Dashboard</Text>
      </View>
      <Image source={MenuIcon} style={{width:normalize(22)}}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    height:normalize(62),
    flexDirection:'row',
    backgroundColor:'#fff',
    padding: 24,
  }, 
  tittle:{
    textAlign:'center',
    fontFamily:'DMSans',
    fontWeight:'bold',
    fontSize:fontSize(18),
    lineHeight:22,
    color:'#000000'
  }
})