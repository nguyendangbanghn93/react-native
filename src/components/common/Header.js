import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
import s from '~static/style';

export default function Header({navigation}) {
  console.log({navigation});

  return (
    <View
      style={[
        s.fdr,
        s.jcsb,
        s.aic,
        s.w('100%'),
        s.pa(10),
        s.bb(1),
        s.bbc('#ddd'),
      ]}>
      <View style={[s.fdr, s.aic]}>
        <Image
          style={[s.w(40), s.h(40)]}
          resizeMode="cover"
          source={require('~/static/btube.png')}
        />
        <Text style={[s.fwb, s.clb, s.fs(22), s.ml(10)]}>BTube</Text>
      </View>
      <TouchableOpacity onPress={() => {
        console.log("___________________________");
        navigation.push('SearchScreen')
      }}>
        <Icon name="search" type="font-awesome" />
      </TouchableOpacity>
    </View>
  );
}
