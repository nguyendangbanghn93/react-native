import React from 'react';
import {View,Text} from 'react-native';
import s from '~/static/style';
import HeaderDefault from '~components/common/HeaderDefault';

export default function HomeScreen({ navigation }){
console.log("HomeScreen",navigation);

  return (
    <View style={s.container}>
      <Text style={s.cr}>HomeScreen</Text>
    </View>
  )
}
