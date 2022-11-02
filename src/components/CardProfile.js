import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { normalize, fontSize } from '../utils/responsive'


export default function CardProfile({name='Agung Nugroho'}) {
  return (
    <View style={styles.boxContainer}>
      <Text style={styles.nameStyles}>Halo,</Text>
      <Text style={styles.nameStyles}>{name}</Text>
      <Text style={styles.captionStyles}>Welcome to Fixed Assets Tagging Systems</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    boxContainer:{
        height:normalize(120),
        width:normalize(328),
        paddingHorizontal:normalize(24),
        paddingVertical:normalize(16),
        backgroundColor:'#FFF',
        borderRadius:16,
        elevation:16,
        shadowColor:'#CDCDCD',
        shadowOffset: {width:-2, height:6},
        shadowOpacity:1,
        shadowRadius:16
    },
    nameStyles:{
        fontFamily:'DMSans',
        fontSize:fontSize(24),
        fontWeight:'500',
        lineHeight:normalize(31),
        letterSpacing:2,
        color:'#000000'
    },
    captionStyles:{
        fontFamily:'DMSans',
        fontSize:fontSize(14),
        fontWeight:'400',
        lineHeight:normalize(18),
        letterSpacing:0.2,
        marginTop:normalize(8),
        color:'#000000'
    }
})