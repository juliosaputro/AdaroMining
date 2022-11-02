import React from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {fontSize, normalize} from '../../utils/responsive';
import HeaderHome from '../../components/HeaderHome';
import User from '../../assets/user.png';
import Line from '../../assets/ic_line.png';
import CardProfile from '../../components/CardProfile';
import CardMenu from '../../components/CardMenu';
import roleReducer from '../../reducers/roleReducer';
import { INTERNAL } from '../../utils/constanta';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


export default function () {
  const navigation = useNavigation();
  
  const [menu, setMenu] = useState([])
  const {roleReducer} = useSelector(s=>s)
  const {value} = roleReducer
  
  const MenuInternal = [
    {
      tittle:'Assets',
      caption:'Check your detail asset',
      to:'Detail'
    },
    {
      tittle:'Scan History',
      caption:'Check your history here',
      to:'Scan'
    },
    {
      tittle:'Scan QR',
      caption:'Find your asset information',
      to:'Scan'
    },
  ]
  const MenuAuditor = [
    {
      tittle:'Request Audit',
      caption:'Check your Audit',
      to:'Audit'
    },
    {
      tittle:'Scan QR',
      caption:'Find your asset information',
      to:'Scan'
    },
  ]
  useEffect(()=>{
    if(value === INTERNAL){
      setMenu(MenuInternal)
    } else {
      setMenu(MenuAuditor)
    }
  },[value])
  
  console.log(menu, 'menu')
  
  


  return (
    <View style={{flex: 1}}>
      <HeaderHome />
      <ScrollView>
        <LinearGradient
          colors={['#d1f2e2', '#FFFFFF', '#FFFFFF']}
          style={styles.container}>
          <View style={styles.imageStyle}>
            <Image source={User} />
          </View>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: normalize(22),
            }}>
            <CardProfile />
            <View style={{marginTop: normalize(8)}}>
              {
                menu.map((x,y)=>{
                  return(
                    <CardMenu
                    key={y}
                tittle={x.tittle}
                caption={x.caption}
                onPress={() => {
                  navigation.navigate(x.to);
                }}
              />
                  )
                })
              }
            </View>
          </View>
        </LinearGradient>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: normalize(360),
    height: normalize(800),
  },
  imageStyle: {
    width: normalize(120),
    height: normalize(120),
    padding: normalize(16),
  },
});
