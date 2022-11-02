import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {Checkbox} from 'react-native-paper';
import {normalize, fontSize} from '../../utils/responsive';
import BackgroundScreen from '../../components/BackgroundScreen';
import ButtonPrimary from '../../components/ButtonPrimary';
import Icon from 'react-native-vector-icons/FontAwesome';
import ModalForm from '../../components/ModalForm';
import {updateFormLogin} from '../../reducers/formLogin';
import useDebounce from '../../custom_hook/useDebounce';
import { usePostData } from '../../helper/request';
import {updateUserToken} from'../../reducers/authReducer';
import { errorFormLogin } from '../../reducers/errorLoginReducer';

export default function () {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  //password visibility
  const [selected, setSelected] = useState(false);

  //login reducer
  const {formLogin} = useSelector(s => s);
  const {errorLogin} = useSelector(s=>s)
  const {value} = [formLogin,authUser, errorFormLogin];
  
  const {authUser} = useSelector(s =>s)
  console.log(errorLogin.message, 'error msg')
  // const {val} = authUser

  //usepostData
  const [func_login, res_login] = usePostData("login")

  // function login
  function do_login() {
    console.table(par)
    let par = {
      role: 'audito',
		email: 'auditor@adaro.co.id',
      	password: '12',
		// role: formLogin.role.value,
		// email: formLogin.email.value,
    //   	password: formLogin.password.value,
    };
    func_login(par);
  }

  useEffect(()=>{
	if(res_login.success){

		console.log('token :', res_login.success_res.token)
    dispatch(updateUserToken(res_login.success_res.token))
    // navigation.navigate('Home')
	}
  },[res_login.success])

  
  useEffect(()=>{
    if(res_login.failed){
      console.log('massage :', res_login.error_res.data.data.info)
      dispatch(errorFormLogin(res_login.error_res.data.data.info))
    }
    },[res_login.failed])

  const [pwdVisibility, setPwdVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState('eye');

  const handlePwdVisibility = () => {
    if (rightIcon === 'eye') {
      setRightIcon('eye-slash');
      setPwdVisibility(!pwdVisibility);
    } else if (rightIcon === 'eye-slash') {
      setRightIcon('eye');
      setPwdVisibility(!pwdVisibility);
    }
  };

  return (
    <>
      <BackgroundScreen />
      <ModalForm>
        <Text style={styles.tittle}>Login </Text>
        <View style={{marginTop: normalize(40), alignItems: 'center'}}>
          <TextInput
            onChangeText={e =>
              dispatch(
                updateFormLogin({
                  field: 'email',
                  value: e,
                }),
              )
            }
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
          />
          <View style={styles.input}>
            <TextInput
              onChangeText={e =>
                dispatch(
                  updateFormLogin({
                    field: 'password',
                    value: e,
                  }),
                )
              }
              placeholder="Password"
              secureTextEntry={pwdVisibility}
            />
            <Pressable onPress={handlePwdVisibility}>
              <Icon name={rightIcon} size={fontSize(20)} />
            </Pressable>
          </View>
          {/* <Text>{errorLogin.message}</Text> */}
          <View
            style={{
              width: normalize(328),
              left: -5,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: normalize(30),
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Checkbox
                status={selected ? 'checked' : 'unchecked'}
                onPress={() => {
                  setSelected(!selected);
                }}
                color={'#009D50'}
              />
              <Text
                style={{
                  fontSize: fontSize(14),
                  fontWeight: '400',
                  color: '#000',
                  fontFamily: 'Inter',
                }}>
                Ingat Saya
              </Text>
            </View>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                navigation.navigate('Forgot');
              }}>
              <Text
                style={{
                  fontSize: fontSize(14),
                  fontWeight: '400',
                  color: '#009D50',
                  fontFamily: 'Inter',
                }}>
                Lupa Kata Sandi?
              </Text>
            </TouchableOpacity>
          </View>
          <ButtonPrimary
            title="Login"
            onPress={() => {
              do_login()
            }}
          />
        </View>
      </ModalForm>
    </>
  );
}

const styles = StyleSheet.create({
  tittle: {
    fontSize: fontSize(20),
    fontWeight: '500',
    letterSpacing: 2.5,
    color: '#000',
    fontFamily: 'DMSans',
  },
  input: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: normalize(328),
    height: normalize(52),
    alignItems: 'center',
    borderColor: '#CDCDCD',
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 16,
    fontFamily: 'DMSans',
  },
  pwdContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    addingHorizontal: 24,
  },
});
