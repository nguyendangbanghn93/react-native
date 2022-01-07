import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import s from '~/static/style';
import SearchBar from '~components/common/SearchBar';
import {
  SearchScreenProvider,
  useContextSearchScreen,
} from '~contexts/searchScreenContext';
const SearchScreenImplement = ({navigation}) => {
  const {searchHistory} = useContextSearchScreen();
  console.log({searchHistory});

  return (
    <View>
      <SearchBar navigation={navigation} />
      <Text>SearchScreen</Text>
    </View>
  );
};
export default function SearchScreen(props) {
  return (
    <SearchScreenProvider>
      <SearchScreenImplement {...props} />
    </SearchScreenProvider>
  );
}
