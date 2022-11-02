import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Image} from 'react-native';
import {normalize} from '../../utils/responsive';
import BgSplash from '../../assets/bg-splash.svg';
import Logo from '../../assets/logo.png';

export default function () {
  const navigation = useNavigation();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 3000);
  }, []);

  useEffect (()=>{
      if(load){
          navigation.replace('Position')
      }
  },[load])

  return (
    <>
      <BgSplash width={normalize(360)} height={normalize(800)} />
      <View
        style={{
          width: normalize(360),
          height: normalize(620),
          zIndex: 1,
          position: 'absolute',
          display: 'flex',
          justifyContent: 'center',
        }}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={Logo}
            style={{height: normalize(73), width: normalize(190)}}
          />
        </View>
      </View>
    </>
  );
}
