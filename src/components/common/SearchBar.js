import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {useContextSearchScreen} from '~contexts/searchScreenContext';
import s from '~static/style';
import InputAutoComplete from './InputAutoComplete';

export default function SearchBar({navigation}) {
  const [searchValue, setSearchValue] = useState('');
  const {addHistory} = useContextSearchScreen();

  const searchHandler = () => {
    addHistory(searchValue);
  };

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
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="chevron-left" type="font-awesome" size={16} />
      </TouchableOpacity>
      <View style={[s.plr(10), s.fg1]}>
        <InputAutoComplete
          defaultValue={searchValue}
          onChange={setSearchValue}
        />
      </View>
      <TouchableOpacity onPress={searchHandler}>
        <Icon name="search" type="font-awesome" size={18} />
      </TouchableOpacity>
    </View>
  );
}
