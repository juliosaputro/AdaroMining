import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {View, Image} from 'react-native';
import {normalize} from '../../utils/responsive';
import BgSplash from '../../assets/bg-splash.svg';
import Logo from '../../assets/logo.png';
import { authReducer } from '../../reducers/authReducer';

export default function () {
  const navigation = useNavigation();
  const dispatch = useDispatch()

  const {authReducer} = useSelector(s=>s)


  console.log(authReducer.access_token, 'token')

  const [load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 3000);
  }, []);

  useEffect (()=>{
      if(load){
        if(authReducer.access_token != ""){
          navigation.replace('Home')
        } else {
          navigation.replace('Position')
        }
      }
  },[load, authReducer.access_token])

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
