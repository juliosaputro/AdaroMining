import React from 'react'
import {View, Image} from 'react-native'
import { normalize } from '../utils/responsive';
import BgVerif from '../assets/bg-verif.svg';
import Logo from '../assets/logo.png'

export default function BackgroundScreen() {
  return (
    <>
      <BgVerif width={normalize(360)} height={normalize(800)} zIndex={0} position='absolute' top={0}/>
      <View style={{display:'flex', justifyContent:'center', alignItems:'center', paddingTop:normalize(87)}}>
        <Image source={Logo}style={{width:normalize(135), height:normalize(50)}}/>
      </View>
    </>
  )
}
