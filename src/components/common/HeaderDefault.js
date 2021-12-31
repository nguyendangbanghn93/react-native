import React from 'react';
import {View, Text, Image} from 'react-native';
import {Icon} from 'react-native-elements';
import s from '~static/style';

export default function HeaderDefault() {
  return (
    <View style={[s.fdr, s.jcsb,s.aic,s.w("100%"),s.pr(40)]}>
      <View style={[s.fdr, s.aic]}>
        <Image
          style={[s.w(40), s.h(40)]}
          resizeMode="cover"
          source={require('~/static/btube.png')}
        />
        <Text style={[s.fwb, s.clb, s.fs(22), s.ml(10)]}>BTube</Text>
      </View>
      <View>
        <Icon
          name="search"
          type="font-awesome"
         
        />
      </View>
    </View>
  );
}
