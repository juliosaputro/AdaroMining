import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import screen_home from '../screen/home/screen-home'
import screen_splash from '../screen/splash/screen-splash'
import screen_position from '../screen/verification/screen-position'
import screen_login from '../screen/verification/screen-login'
import screen_forgot from '../screen/verification/screen-forgot'
import screen_detail_asset from '../screen/asset/screen-asset-detail'
import screen_update_condition from '../screen/condition/screen-condition-update'
import screen_audit_item from '../screen/audit/screen-audit-item'
import screen_scan from '../screen/scan/screen_scan'
import TakePhoto from '../components/TakePhoto';

const Stack = createNativeStackNavigator()

export default function () {
    return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Position' screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name='Splash' component={screen_splash}/>
            <Stack.Screen name="Home" component={screen_home} />
            <Stack.Screen name="Position" component={screen_position} />
            <Stack.Screen name="Login" component={screen_login} />
            <Stack.Screen name='Forgot' component={screen_forgot}/>
            <Stack.Screen name='Detail' component={screen_detail_asset}/>
            <Stack.Screen name='Update' component={screen_update_condition}/>
            <Stack.Screen name='Audit' component={screen_audit_item}/>
            <Stack.Screen name='Scan' component={screen_scan}/>
            <Stack.Screen name='Photo' component={TakePhoto}/>
        </Stack.Navigator>
    </NavigationContainer>
    )
}