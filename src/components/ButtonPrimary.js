import React from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import { normalize, fontSize } from '../utils/responsive'
import { Button } from 'react-native-paper'

export default function ButtonPrimary({title='', onPress}) {
  return (
    <View>
    <TouchableOpacity style={styles.Button} mode='contained' onPress={onPress}>
      {/* Login */}
      <Text style={styles.TittleBtn}>{title}</Text>
    </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    Button:{
        height:normalize(53),
        width:normalize(328),
        backgroundColor:'#009D50',
        padding:normalize(6),
        marginTop:normalize(22),
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8
    },
    TittleBtn:{
        fontSize:fontSize(16),
        fontWeight:'500',
        color:'#fff',
        lineHeight:normalize(20),
        fontFamily:'DMSans'
    }
})
