import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import s from '~/static/style';
export default function InputAutoComplete({
  defaultValue,
  onChange,
  dataAutoComplete = [],
}) {

  return (
    <View style={[s.w('100%')]}>
      <TextInput
        style={[s.bg('#ddd'), s.aic, s.fdr, s.pa(3), s.plr(10), s.bra(5)]}
        value={defaultValue}
        onChangeText={onChange}
      />
    </View>
  );
}
