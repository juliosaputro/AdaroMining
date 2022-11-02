import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {normalize, fontSize} from '../utils/responsive';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Rows({
  AsetID = '',
  Equipment = '',
  Company = '',
  Cost = '',
  CenterName = '',
}) {
  return (
    <View>
      <View style={styles.rowStyles}>
        <Text style={styles.desStyles}>Aset Number</Text>
        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center', spacing: 2}}>
          <Text style={styles.desStyles}>{AsetID}</Text>
          <Icon
            name="copy"
            size={fontSize(16)}
            style={{paddingLeft: normalize(5)}}
            />
        </TouchableOpacity>
        </View>
        <View style={styles.rowStyles}>
          <Text style={styles.desStyles}>Equipment Number</Text>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center', spacing: 2}}>
            <Text style={styles.desStyles}>{Equipment}</Text>
            <Icon
              name="copy"
              size={fontSize(16)}
              style={{paddingLeft: normalize(5)}}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.rowStyles}>
          <Text style={styles.desStyles}>Company Name</Text>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center', spacing: 2}}>
            <Text style={styles.desStyles}>{Company}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowStyles}>
          <Text style={styles.desStyles}>Cost Center</Text>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center', spacing: 2}}>
            <Text style={styles.desStyles}>{Cost}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowStyles}>
          <Text style={styles.desStyles}>Cost Center Name</Text>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center', spacing: 2}}>
            <Text style={styles.desStyles}>{CenterName}</Text>
          </TouchableOpacity>
        </View>
     </View>
  );
}

const styles = StyleSheet.create({
  rowStyles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: normalize(5),
  },
  desStyles: {
    fontFamily: 'DMSans',
    fontWeight: '400',
    fontSize: fontSize(14),
    lineHeight: normalize(18),
  },
});
