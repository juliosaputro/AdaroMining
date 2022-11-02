import React from 'react'
import { View } from 'react-native'
import { normalize } from '../utils/responsive'
export default function ModalForm({children}) {
  return (
    <View style={{
        width:normalize(360),
        height:normalize(500),
        backgroundColor:'#fff',
        borderTopLeftRadius:24,
        borderTopRightRadius:24,
        zIndex:1, 
        position:'absolute', 
        bottom:0,
        padding:20,
    }}>
        {children}
    </View>
  )
}
