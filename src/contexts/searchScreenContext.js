import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Context = createContext({});
export const useContextSearchScreen = () => useContext(Context);
export const SearchScreenProvider = ({children}) => {
  const [searchHistory, setSearchHistory] = useState([]);

  const storeData = useCallback(async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@search_history', jsonValue);
    } catch (e) {
      console.log(e);
    }
  }, []);
  const getData = useCallback(async fn => {
    let value = [];
    try {
      const res = await AsyncStorage.getItem('@search_history');
      if (res) value = JSON.parse(res);
    } catch (e) {
      console.log(e);
    } finally {
      fn && fn(value);
      return value;
    }
  }, []);
  const addHistory = useCallback(val => {
    const newHistory = [...searchHistory];
    !newHistory?.includes(val) && newHistory.push(val);
    newHistory = newHistory.splice(newHistory.length - 20, 20);
    storeData(newHistory);
  }, []);
  useEffect(() => {
    getData(val => {
      setSearchHistory(val)
    });
  }, []);
  useEffect(() => {
    console.log('searchHistory', searchHistory);

    storeData(searchHistory);
  }, [searchHistory]);
  const value = useMemo(
    () => ({searchHistory, addHistory}),
    [searchHistory, addHistory],
  );
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
