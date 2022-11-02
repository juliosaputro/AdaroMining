import React from 'react'
import { normalize, fontSize } from '../utils/responsive'
import { TouchableOpacity, Image, Text, StyleSheet, View } from 'react-native'
import ScanMenu from '../assets/ic_scanMenu.png'
import { useNavigation } from '@react-navigation/native'

export default function CardMenu({tittle='', caption='', onPress}) {
    const navigation = useNavigation()
  return (
    <TouchableOpacity style={styles.boxContainer} onPress={onPress}>
            <Image source={ScanMenu}/>
            <View style={{marginLeft:normalize(24)}}>
                <Text style={styles.tittleStyles}>{tittle}</Text>
                <Text style={styles.captionStyles}>{caption}</Text>
            </View>
    </TouchableOpacity>
  )
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
        lineHeight:normalize(20),
        letterSpacing:2,
        color:'#000000'
    },
    captionStyles:{
        fontFamily:'DMSans',
        fontSize:fontSize(14),
        fontWeight:'400',
        lineHeight:normalize(18),
        letterSpacing:0.8,
        marginTop:normalize(8),
        color:'#000000'
    }
})