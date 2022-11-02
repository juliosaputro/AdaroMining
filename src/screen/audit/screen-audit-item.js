import React, {useState} from 'react';
import {StyleSheet, View, ScrollView, TouchableOpacity, Text, Image} from 'react-native';
import Header from '../../components/Header';
import CardAudit from '../../components/CardAudit';
import {fontSize, normalize} from '../../utils/responsive';
import Calendar from '../../assets/ic_calendar.png'
import Location from '../../assets/ic_location.png'

const audit = [
  {
    company: 'HAJU MIA CAMP',
    location: '[Location Name]',
  },
  {
    company: 'HAJU MIA CAMP',
    location: '[Location Name]',
  },
  {
    company: 'HAJU MIA CAMP',
    location: '[Location Name]',
  },
  {
    company: 'HAJU MIA CAMP',
    location: '[Location Name]',
  },
  {
    company: 'HAJU MIA CAMP',
    location: '[Location Name]',
  },
  {
    company: 'HAJU MIA CAMP',
    location: '[Location Name]',
  },
  {
    company: 'HAJU MIA CAMP',
    location: '[Location Name]',
  },
  {
    company: 'HAJU MIA CAMP',
    location: '[Location Name]',
  },
];

export default function () {
    // const 
  return (
    <View style={{flex:1}}>
      <Header tittle="Audit Item" />
    <ScrollView style={{backgroundColor: '#fff'}}>
      <View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
                <Image source={Calendar} style={styles.icon}/>
                <Text style={styles.tittleBtn}>Date</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Image source={Location} style={styles.icon}/>
                <Text style={styles.tittleBtn}>Location</Text>
            </TouchableOpacity>
        </View>
        <View style={{alignItems:'center'}}>
        {audit.map((x, y) => {
          return <CardAudit key={y} tittle={x.company} caption={x.location} onPress={''}/>;
        })}
        </View>
      </View>
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: normalize(800),
    width: normalize(360),
  },
  buttonContainer:{
    height:normalize(66), 
    flexDirection:'row',
    padding:normalize(16),
},
button:{
    height:normalize(34),
    width:normalize(87),
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'center',
    marginRight:normalize(10),
    padding:normalize(8),
    borderRadius:8,
    borderRadius:16,
    elevation:10,
    shadowColor:'#CDCDCD',
    shadowOffset: {width:-2, height:6},
    shadowOpacity:1,
    shadowRadius:16,
    backgroundColor:'#FFF',
  },
  icon:{
    width:normalize(16),
    height:normalize(16),
    marginRight:normalize(5)
  },
  tittleBtn:{
    fontFamily:'DMSans',
    fontSize:fontSize(16),
    lineHeight:normalize(18),
    height:normalize(16),
    color:'#000',
    fontWeight:'400'
  }
});
