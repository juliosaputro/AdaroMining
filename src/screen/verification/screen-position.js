import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {normalize, fontSize} from '../../utils/responsive';
import BackgroundScreen from '../../components/BackgroundScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
// import { coba, internal, role } from '../../reducers/roleReducer';
import { role, updateErrorFormLogin } from '../../reducers/formLogin';
import { INTERNAL } from '../../utils/constanta';
import { updateFormLogin } from '../../reducers/formLogin';


export default function () {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    // const {roleReducer} = useSelector(s=>s)
    // const {value} = roleReducer

    const {formLogin} = useSelector(s=>s)
    const {value} = formLogin 

  return (
    <>
      <BackgroundScreen />
      <View style={styles.modal}>
        <Text
          style={{
            fontSize: fontSize(20),
            fontWeight: '500',
            letterSpacing: 2.5,
            color: '#000',
          }}>
          Choose your position
        </Text>
        <View style={{marginTop: 40}}>
          <TouchableOpacity style={styles.kategori} onPress={()=>{
            dispatch(updateFormLogin({
              field:'role',
              value:'internal'
            })) 
            navigation.navigate('Login')
            }}>
            <Text style={{fontSize: fontSize(16), fontWeight: '500'}}>
              Internal
            </Text>
            <Icon name="chevron-right" size={fontSize(14)} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.kategori} onPress={()=>{dispatch(updateFormLogin({
              field:'role',
              value:'auditor'
            })) 
            navigation.navigate('Login')}}>
            <Text style={{fontSize: fontSize(16), fontWeight: '500'}}>
              Auditor
            </Text>
            <Icon name="chevron-right" size={fontSize(14)} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  modal: {
    width: normalize(360),
    height: normalize(500),
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
    paddingTop: 42,
    paddingHorizontal: 32,
  },
  kategori: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: normalize(298),
    height: normalize(52),
    alignItems: 'center',
    borderColor: '#CDCDCD',
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 16,
  },
});
