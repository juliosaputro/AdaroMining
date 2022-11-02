import React from 'react'
import { View, Text } from 'react-native'
import ScanQRcode from '../../components/ScanQRcode'
import CameraPicture from '../../components/CameraPicture'

export default function () {
  return (
    <View style={{height:300}}>
      <ScanQRcode/>
    </View>
  )
}
