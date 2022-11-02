import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {normalize, fontSize} from '../../utils/responsive';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../../components/Header';
import ButtonPrimary from '../../components/ButtonPrimary';
import ButtonSecondary from '../../components/ButtonSecondary';
import Example from '../../assets/example.png';
import DatePicker from 'react-native-date-picker';
import Modal from 'react-native-modal';

export default function () {
  const [breakdown, setBreakdown] = useState(false);
  const [maintenence, setMaintenence] = useState(false);

  const ShowModalBreakdown = () => setBreakdown(true) && console.log('breakdown');
  const CloseModalBreakdown = () => setBreakdown(false);

  const ShowModalMaintenence = () =>
    setMaintenence(true) && setBreakdown(false);
  const CloseModalMaintenence = () =>
    setMaintenence(false) && setBreakdown(true);

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [dateValue, setDateValue] = useState('Select Date');

  useEffect(() => {
    setDateValue(new Date(date).toLocaleDateString());
    console.log(dateValue, 'datevalue');
  }, [date]);

  const [valuecondition, onChangeText] = useState(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  );
  return (
    <View style={{flex: 1}}>
      <Header tittle="Update Condition" />
      <ScrollView>
        <View style={styles.container}>
          <Image source={Example} style={styles.imageStyles} />
          <View style={styles.boxDetail}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.titleStyles}>Condition</Text>
              <Text style={{color: 'red'}}> * </Text>
            </View>
            <TextInput
              value={valuecondition}
              style={styles.boxDesStyles}
              maxLength={255}
              editable
              multiline={true}
              onChangeText={text => onChangeText(text)}
            />
            <Text style={{textAlign: 'right', fontSize: fontSize(12)}}>
              {valuecondition.length}/255
            </Text>
            <View style={{marginTop: normalize(30)}}>
              <ButtonPrimary
                title="Update Condition"
                onPress={ShowModalBreakdown}
              />
            </View>
            <Modal
              isVisible={breakdown}
              onDismiss={CloseModalBreakdown}
              style={{justifyContent: 'flex-end', margin: 0}}>
              <View style={styles.modal}>
                <View style={styles.breakdown}>
                  <TouchableOpacity
                    onPress={CloseModalBreakdown}
                    style={{
                      width: normalize(360),
                      height: normalize(24),
                      flexDirection: 'row',
                      justifyContent: 'flex-end',
                      paddingRight: normalize(20),
                    }}>
                    <Icon
                      name="times-circle-o"
                      size={fontSize(22)}
                      color={'#000'}
                    />
                  </TouchableOpacity>
                  <Text style={styles.titleStyles}>Breakdown</Text>
                  <ButtonPrimary
                    title="Maintenence"
                    onPress={ShowModalMaintenence}
                  />
                  <ButtonSecondary
                    title="Disposal Asset"
                    onPress={CloseModalBreakdown}
                  />
                </View>
              </View>
            </Modal>
            <Modal
              isVisible={maintenence}
              onDismiss={CloseModalMaintenence}
              style={{justifyContent: 'flex-end', margin: 0}}>
              <View style={styles.modal}>
                <View style={styles.maintenence}>
                  <TouchableOpacity
                    onPress={CloseModalMaintenence}
                    style={{
                      width: normalize(360),
                      height: normalize(24),
                      flexDirection: 'row',
                      justifyContent: 'flex-end',
                      paddingRight: normalize(20),
                    }}>
                    <Icon
                      name="times-circle-o"
                      size={fontSize(22)}
                      color={'#000'}
                    />
                  </TouchableOpacity>
                  <Text style={styles.titleStyles}>Maintenence</Text>
                  <View style={{marginTop: normalize(14)}}>
                    <TouchableOpacity
                      style={{
                        width: normalize(312),
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderColor: '#000',
                        borderBottomWidth: 1,
                        marginVertical: 5,
                      }}
                      onPress={() => setOpen(true)}>
                      <Text style={styles.desStyles}>{dateValue}</Text>
                      <DatePicker
                        mode="date"
                        modal
                        open={open}
                        date={date}
                        onConfirm={date => {
                          setOpen(false);
                          setDate(date);
                        }}
                        onCancel={() => {
                          setOpen(false);
                        }}
                      />
                      <Icon name="chevron-down" />
                    </TouchableOpacity>
                    <TextInput
                      value={valuecondition}
                      style={styles.boxDesStyles}
                      maxLength={255}
                      editable
                      multiline={true}
                      onChangeText={text => onChangeText(text)}
                    />
                    <Text style={{textAlign: 'right', fontSize: fontSize(12)}}>
                      {valuecondition.length}/255
                    </Text>
                  </View>
                  <View style={{position: 'absolute', bottom: 0}}>
                    <ButtonPrimary title="Maintenence" />
                    <ButtonSecondary title="Disposal Asset" />
                  </View>
                </View>
              </View>
            </Modal>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: normalize(360),
    height: normalize(784),
    padding: normalize(16),
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  imageStyles: {
    width: normalize(360),
    height: normalize(341),
  },
  boxDetail: {
    height: normalize(317),
    width: normalize(360),
    padding: normalize(16),
  },
  titleStyles: {
    fontFamily: 'DMSans',
    fontWeight: 'bold',
    fontSize: fontSize(18),
    lineHeight: normalize(23),
    // marginTop:normalize(10),
    color: '#000',
    marginBottom: normalize(10),
  },
  desStyles: {
    fontFamily: 'DMSans',
    fontWeight: '400',
    fontSize: fontSize(14),
    lineHeight: normalize(18),
  },
  boxDesStyles: {
    // height:normalize(158),
    fontFamily: 'DMSans',
    fontWeight: '400',
    fontSize: fontSize(14),
    lineHeight: normalize(18),
    borderBottomColor: '#009D50',
    marginVertical: normalize(24),
    borderBottomWidth: 1,
  },
  modal: {
    width: normalize(360),
    height: normalize(687),
    backgroundColor: '#00000066',
    zIndex: 0,
    position: 'absolute',
  },
  breakdown: {
    height: normalize(230),
    width: normalize(360),
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    position: 'absolute',
    bottom: 0,
    zIndex: 10,
  },
  maintenence: {
    height: normalize(444),
    width: normalize(360),
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    position: 'absolute',
    bottom: 0,
    zIndex: 10,
  },
});
