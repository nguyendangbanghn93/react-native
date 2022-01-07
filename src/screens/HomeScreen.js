import React from 'react';
import {View, Text} from 'react-native';
import s from '~/static/style';
import Header from '~components/common/Header';

export default function HomeScreen({navigation}) {
  return (
    <View style={s.container}>
      <Header navigation={navigation}/>
      <Text style={s.cr}>HomeScreen</Text>
    </View>
  );
}
